---
sidebar_position: 3
---

# Examples

This page showcases example programs written in Crux that generate images.

---

## Terrain Generator

This example generates a terrain heightmap using Perlin noise and outputs a PPM image.

![Terrain Generator Output](pathname:///img/terrain-placeholder.jpg)

### Features

- Perlin noise implementation
- Fractal Brownian Motion (FBM) for natural-looking terrain
- Multiple biomes based on height levels (water, beach, sand, forest, rock, snow)

### Source Code

```crux
use println from "crux:io";
use _time_ms from "crux:time";
use open from "crux:fs";
use floor, abs from "crux:math";
use Random from "crux:random";

println("=== START OF TERRAIN GENERATOR ===");
let IMAGE_WIDTH = 1024;
let IMAGE_HEIGHT = 1024;
let OCTAVES = 8;      // Detail level. Higher = more taxing.
let PERSISTENCE = 0.5;
let SCALE = 0.005;    // Zoom level

// The Permutation Table (0-255 randomized)
// We double it to 512 to avoid buffer overflow checks during lookup
let PERM = [];

fn init_permutation() {
    let rand = Random();
    let p = [];

    // Fill 0-255
    for let i = 0; i < 256; i += 1 {
        p.push(i);
    }

    // Shuffle (Fisher-Yates)
    for let i = 255; i > 0; i -= 1 {
        let j = int(rand.float(0, i + 1)?)?;
        let swap = p[i];
        p[i] = p[j];
        p[j] = swap;
    }

    // Duplicate array to avoid buffer overflow wrapping
    for let i = 0; i < 512; i += 1 {
        if i < 256 {
            PERM.push(p[i]);
        } else {
            PERM.push(p[i - 256]);
        }
    }
}

// Fade function: 6t^5 - 15t^4 + 10t^3
// Smoothes the transition between grid points
fn fade(t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

// Linear Interpolation
fn lerp(t, a, b) {
    return a + t * (b - a);
}

// Gradient function
// Calculates dot product between distance vector and gradient vector
// heavily reliant on Bitwise ops
fn grad(hash, x, y, z) {
    let h = hash & 15; // Take first 4 bits
    let u;
    let v;

    if h < 8 { u = x; } else { u = y; }

    if h < 4 {
        v = y;
    } else {
        if h == 12 or h == 14 {
            v = x;
        } else {
            v = z;
        }
    }

    let res_u;
    let res_v;

    // Simulate bitwise check for sign
    if (h & 1) == 0 { res_u = u; } else { res_u = -u; }
    if (h & 2) == 0 { res_v = v; } else { res_v = -v; }

    return res_u + res_v;
}

fn noise(x, y, z) {
    // Find unit cube that contains point
    let X = int(floor(x))? & 255;
    let Y = int(floor(y))? & 255;
    let Z = int(floor(z))? & 255;

    // Find relative x,y,z of point in cube
    x -= floor(x);
    y -= floor(y);
    z -= floor(z);

    // Compute fade curves
    let u = fade(x);
    let v = fade(y);
    let w = fade(z);

    // Hash coordinates of the 8 cube corners
    // This nested array access is a stress test
    let A = PERM[X] + Y;
    let AA = PERM[A] + Z;
    let AB = PERM[A + 1] + Z;
    let B = PERM[X + 1] + Y;
    let BA = PERM[B] + Z;
    let BB = PERM[B + 1] + Z;

    // Add blended results from 8 corners of cube
    return lerp(w,
        lerp(v,
            lerp(u, grad(PERM[AA], x, y, z), grad(PERM[BA], x - 1, y, z)),
            lerp(u, grad(PERM[AB], x, y - 1, z), grad(PERM[BB], x - 1, y - 1, z))
        ),
        lerp(v,
            lerp(u, grad(PERM[AA + 1], x, y, z - 1), grad(PERM[BA + 1], x - 1, y, z - 1)),
            lerp(u, grad(PERM[AB + 1], x, y - 1, z - 1), grad(PERM[BB + 1], x - 1, y - 1, z - 1))
        )
    );
}

// Fractal Brownian Motion
// Superimposes multiple layers of noise
fn fbm(x, y) {
    let total = 0.0;
    let amplitude = 1.0;
    let frequency = 1.0;
    let maxValue = 0.0;  // Used for normalizing result to 0.0 - 1.0

    for let i = 0; i < OCTAVES; i += 1 {
        total += noise(x * frequency, y * frequency, 0.0) * amplitude;

        maxValue += amplitude;

        amplitude *= PERSISTENCE;
        frequency *= 2.0;
    }

    return total / maxValue;
}

fn get_terrain_color(height) {
    // Map -1.0 -> 1.0 range to colors
    if height < -0.05 {
        // Deep Water (Blue)
        return { "r": 20, "g": 40, "b": 170 };
    }
    if height < 0.15 {
        // Shallow Water / Beach (Cyan/Yellowish)
        return { "r": 30, "g": 100, "b": 200 };
    }
    if height < 0.25 {
        // Sand
        return { "r": 210, "g": 200, "b": 120 };
    }
    if height < 0.55 {
        // Forest
        return { "r": 30, "g": 120, "b": 30 };
    }
    if height < 0.8 {
        // Rock / Mountain
        return { "r": 100, "g": 100, "b": 100 };
    }
    // Snow
    return { "r": 255, "g": 255, "b": 255 };
}

fn main() {
    println("Initializing Permutation Table...");
    init_permutation();

    println("Generating Terrain (" + string(IMAGE_WIDTH) + "x" + string(IMAGE_HEIGHT) + ")...");
    let start_time = _time_ms();

    let file = match open("terrain.ppm", "w") {
        Ok(f) => give f,
        Err => {panic "Error opening file"; }
    };

    file.write("P3\n");
    file.write(string(IMAGE_WIDTH) + " " + string(IMAGE_HEIGHT) + "\n");
    file.write("255\n");

    for let y = 0; y < IMAGE_HEIGHT; y += 1 {
        if y % 32 == 0 {
            println("Processing line " + string(y));
        }

        for let x = 0; x < IMAGE_WIDTH; x += 1 {
            // Generate Noise value
            let n = fbm(x * SCALE, y * SCALE);

            // Map to color
            let color = get_terrain_color(n);

            file.write(string(color["r"]) + " " + string(color["g"]) + " " + string(color["b"]) + "\n");
        }
    }

    let end_time = _time_ms();
    println("Terrain generated in " + string(end_time - start_time) + " ms");
    file.close();
}

main();
println("=== END OF TERRAIN GENERATOR ===");
```

---

## Ray Tracer

This example renders a 3D scene using ray tracing with spheres, different materials (lambertian and metal), and anti-aliasing.

![Ray Tracer Output](pathname:///img/raytracer-placeholder.jpg)

### Features

- Ray-sphere intersection
- Lambertian (diffuse) and metal materials
- Anti-aliasing with multiple samples per pixel
- Recursive ray tracing with depth limiting
- Gamma correction

### Source Code

```crux
use Random from "crux:random";
use Vec from "crux:vector";
use _time_ms from "crux:time";
use sqrt, min from "crux:math";
use println from "crux:io";
use open from "crux:fs";

println("=== START OF RAY TRACER ===");

let g_random = Random();

let IMAGE_ASPECT_RATIO = 16.0 / 9.0;
let IMAGE_WIDTH = 480;
let IMAGE_HEIGHT = int(IMAGE_WIDTH / IMAGE_ASPECT_RATIO)?;

let SAMPLES_PER_PIXEL = 50;
let MAX_DEPTH = 25;

let SCALE = 1.0 / SAMPLES_PER_PIXEL;
let COLOR_SCALE = 255.999;
let INV_WIDTH = 1.0 / (IMAGE_WIDTH - 1);
let INV_HEIGHT = 1.0 / (IMAGE_HEIGHT - 1);

let VEC3_ZERO = Vec(3, [0, 0, 0])?;
let VEC3_WHITE = Vec(3, [1.0, 1.0, 1.0])?;
let VEC3_BLUE = Vec(3, [0.5, 0.7, 1.0])?;

struct Ray {
    origin,    // Vec
    direction, // Vec
    at         // (Float) -> Vec
}

struct HitRecord {
    p,          // Vec
    normal,     // Vec
    t,          // Float
    front_face, // Bool
    material    // Material
}

struct Material {
    scatter, // (Ray, HitRecord) -> Table | Nil
    albedo,  // Vec
    fuzz     // Float | Nil
}

struct Sphere {
    center,         // Vec
    radius,         // Float
    radius_squared, // Float  -- pre-calculated to avoid recomputing per ray
    material        // Material
}

// -------------------------------------------------------------------------
// Vector helpers
// -------------------------------------------------------------------------

fn reflect(vector, normal) {
    let d = vector.dot(normal)?;
    return vector.subtract(normal.multiply(2.0 * d)?)?;
}

fn random_in_unit_sphere() {
    while true {
        let p = Vec(3, [
            g_random.float(-1.0, 1.0)?,
            g_random.float(-1.0, 1.0)?,
            g_random.float(-1.0, 1.0)?
        ])?;
        if p.dot(p)? < 1.0 {
            return p;
        }
    }
}

fn random_unit_vector() {
    return random_in_unit_sphere().normalize()?;
}

// -------------------------------------------------------------------------
// Constructors
// -------------------------------------------------------------------------

fn new_ray(origin, direction) {
    return new Ray {
        origin:    origin,
        direction: direction,
        at:        fn(t) { return origin.add(direction.multiply(t)?); }
    };
}

fn new_sphere(center, radius, material) {
    return new Sphere {
        center:         center,
        radius:         radius,
        radius_squared: radius * radius,
        material:       material
    };
}

// albedo: Vec, fuzz: Float
fn new_metal(albedo, fuzz) {
    let clamped_fuzz = min(fuzz, 1.0);

    fn scatter(ray_in, rec) {
        let reflected = reflect(ray_in.direction.normalize()?, rec.normal);
        let scattered_ray = new_ray(
            rec.p,
            reflected.add(random_unit_vector().multiply(clamped_fuzz)?)?
        );
        if scattered_ray.direction.dot(rec.normal)? > 0.0 {
            return {
                "scattered":   scattered_ray,
                "attenuation": albedo
            };
        }
        return nil;
    }

    return new Material {
        scatter: scatter,
        albedo:  albedo,
        fuzz:    clamped_fuzz
    };
}

// albedo: Vec
fn new_lambertian(albedo) {
    fn scatter(ray_in, rec) {
        let scatter_direction = rec.normal.add(random_unit_vector())?;

        // Degenerate scatter direction — fall back to the surface normal
        if scatter_direction.magnitude() < 0.001 {
            scatter_direction = rec.normal;
        }

        return {
            "scattered":   new_ray(rec.p, scatter_direction),
            "attenuation": albedo
        };
    }

    return new Material {
        scatter: scatter,
        albedo:  albedo,
        fuzz:    nil
    };
}

// -------------------------------------------------------------------------
// Intersection
// -------------------------------------------------------------------------

fn hit_sphere(sphere, ray, t_min, t_max) {
    let oc          = ray.origin.subtract(sphere.center)?;
    let a           = ray.direction.dot(ray.direction)?;
    let half_b      = oc.dot(ray.direction)?;
    let c           = oc.dot(oc)? - sphere.radius_squared;
    let discriminant = half_b * half_b - a * c;

    if discriminant < 0.0 {
        return nil;
    }

    let sqrt_d = sqrt(discriminant)?;
    let root   = (-half_b - sqrt_d) / a;

    if root < t_min or root > t_max {
        root = (-half_b + sqrt_d) / a;
        if root < t_min or root > t_max {
            return nil;
        }
    }

    let hit_p          = ray.at(root);
    let outward_normal = hit_p.subtract(sphere.center)?.divide(sphere.radius)?;
    let is_front_face  = ray.direction.dot(outward_normal)? < 0.0;
    let hit_normal;

    if is_front_face {
        hit_normal = outward_normal;
    } else {
        hit_normal = outward_normal.multiply(-1.0)?;
    }

    return new HitRecord {
        p:          hit_p,
        normal:     hit_normal,
        t:          root,
        front_face: is_front_face,
        material:   sphere.material
    };
}

fn hit_world(ray, world, t_min, t_max) {
    let closest   = t_max;
    let final_rec = nil;

    for let i = 0; i < len(world); i += 1 {
        let rec = hit_sphere(world[i], ray, t_min, closest);
        if rec != nil {
            closest   = rec.t;
            final_rec = rec;
        }
    }

    return final_rec;
}

// -------------------------------------------------------------------------
// Shading
// -------------------------------------------------------------------------

fn ray_color(ray, depth, world) {
    if depth <= 0 {
        return VEC3_ZERO;
    }

    let rec = hit_world(ray, world, 0.001, 999999999.0);

    if rec != nil {
        let scatter_result = rec.material.scatter(ray, rec);

        if scatter_result != nil {
            let scattered_color = ray_color(scatter_result["scattered"], depth - 1, world);
            let att             = scatter_result["attenuation"];
            return Vec(3, [
                att.x() * scattered_color.x(),
                att.y() * scattered_color.y(),
                att.z() * scattered_color.z()
            ])?;
        }

        return VEC3_ZERO;
    }

    // Background: vertical gradient from white to sky blue
    let unit_dir = ray.direction.normalize()?;
    let t        = 0.5 * (unit_dir.y() + 1.0);
    return VEC3_WHITE.multiply(1.0 - t)?.add(VEC3_BLUE.multiply(t)?)?;
}

// -------------------------------------------------------------------------
// Main
// -------------------------------------------------------------------------

fn main() {
    println("Setting up scene...");

    let world = [];

    let ground   = new_lambertian(Vec(3, [0.5, 0.5, 0.5])?);
    let material1 = new_lambertian(Vec(3, [0.7, 0.3, 0.3])?);
    let material2 = new_metal(Vec(3, [0.8, 0.6, 0.2])?, 0.2);
    let material3 = new_metal(Vec(3, [0.8, 0.8, 0.8])?, 0.0);

    world.push(new_sphere(Vec(3, [0.0,  -1000.0, -1.0])?, 1000.0, ground));
    world.push(new_sphere(Vec(3, [0.0,     1.0,  0.0])?,    1.0,  material1));
    world.push(new_sphere(Vec(3, [-4.0,    1.0,  0.0])?,    1.0,  material2));
    world.push(new_sphere(Vec(3, [4.0,     1.0,  0.0])?,    1.0,  material3));

    // Camera — positioned at (13,2,3) looking at the origin
    // with a fixed vertical field of view of ~20 degrees
    let camera_origin = Vec(3, [13.0, 2.0, 3.0])?;
    let camera_target = Vec(3, [0.0,  0.0, 0.0])?;
    let camera_vup    = Vec(3, [0.0,  1.0, 0.0])?;

    let focal_length    = 10.0;  // fixed — controls zoom independent of distance
    let viewport_height = 2.0 * (0.17632698070004336); // 2 * tan(vfov/2), vfov = 20 deg
    let viewport_width  = IMAGE_ASPECT_RATIO * viewport_height;

    // Orthonormal camera basis
    let w = camera_origin.subtract(camera_target)?.normalize()?;
    let u = camera_vup.cross(w)?.normalize()?;
    let v = w.cross(u)?;

    let horizontal         = u.multiply(viewport_width * focal_length)?;
    let vertical           = v.multiply(viewport_height * focal_length)?;
    let lower_left_corner  = camera_origin
        .subtract(horizontal.multiply(0.5)?)?
        .subtract(vertical.multiply(0.5)?)?
        .subtract(w.multiply(focal_length)?)?;

    println("Rendering " + string(IMAGE_WIDTH) + "x" + string(IMAGE_HEIGHT) + "...");
    println("Samples per pixel : " + string(SAMPLES_PER_PIXEL));
    println("Max ray depth     : " + string(MAX_DEPTH));

    let start_time = _time_ms();

    let file = open("render.ppm", "w")?;
    file.write("P3\n");
    file.write(string(IMAGE_WIDTH) + " " + string(IMAGE_HEIGHT) + "\n");
    file.write("255\n");

    for let j = IMAGE_HEIGHT - 1; j >= 0; j -= 1 {
        if j % 10 == 0 {
            println("Scanlines remaining: " + string(j));
        }

        for let i = 0; i < IMAGE_WIDTH; i += 1 {
            let pixel_color = VEC3_ZERO;

            for let s = 0; s < SAMPLES_PER_PIXEL; s += 1 {
                let uu = (i + g_random.float(0.0, 1.0)?) * INV_WIDTH;
                let vv = (j + g_random.float(0.0, 1.0)?) * INV_HEIGHT;

                let ray_dir = lower_left_corner
                    .add(horizontal.multiply(uu)?)?
                    .add(vertical.multiply(vv)?)?
                    .subtract(camera_origin)?;

                let r = new_ray(camera_origin, ray_dir);
                pixel_color = pixel_color.add(ray_color(r, MAX_DEPTH, world))?;
            }

            // Gamma-correct (gamma 2) and convert to [0, 255]
            let ir = int(COLOR_SCALE * sqrt(pixel_color.x() * SCALE)?)?;
            let ig = int(COLOR_SCALE * sqrt(pixel_color.y() * SCALE)?)?;
            let ib = int(COLOR_SCALE * sqrt(pixel_color.z() * SCALE)?)?;

            file.write(string(ir) + " " + string(ig) + " " + string(ib) + "\n");
        }
    }

    let elapsed = _time_ms() - start_time;
    println("Done. Rendered in " + string(elapsed) + " ms");
    file.close();
}

main();

println("=== END OF RAY TRACER ===");
```

---

## Adding Your Own Images

To add images to this page:

1. Place your PPM images in the `static/img/` directory
2. Convert them to a web format (PNG, JPG) or use a PPM viewer
3. Update the image paths in this file:
   ```markdown
   ![Terrain Generator Output](/img/your-terrain-image.jpg)
   ![Ray Tracer Output](/img/your-raytracer-image.jpg)
   ```
