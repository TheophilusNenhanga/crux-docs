---
sidebar_position: 1
---

# Getting Started

Welcome to the Crux programming language! This guide will help you get up and running.

## Installation

### Building from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/crux.git
cd crux

# Build the compiler
make

# Run the interpreter
./crux your_file.crx
```

### Running Your First Program

Create a file called `hello.crx`:

```crux
use println from "crux:io";

println("Hello, World!");
```

Run it:

```bash
crux hello.crx
```

Output:
```
Hello, World!
```

## Basic Structure

Every Crux program needs a `main` function that serves as the entry point:

```crux
use println from "crux:io";

fn main() {
    println("Program started!");
    // Your code here
}

main();
```

## Quick Reference

| Feature | Syntax |
|---------|--------|
| Import module | `use function from "crux:module";` |
| Variable | `let name = value;` |
| Function | `fn name(args) { body }` |
| Print | `println(expression)` |

## Example Programs

### Terrain Generator

This example generates a PPM image using Perlin noise:

```crux
use println from "crux:io";
use open from "crux:fs";
use Random from "crux:random";

let IMAGE_WIDTH = 1024;
let IMAGE_HEIGHT = 1024;

fn main() {
    let file = match open("terrain.ppm", "w") {
        Ok(f) => give f,
        Err => { panic "Error opening file"; }
    };
    
    file.write("P3\n");
    file.write(string(IMAGE_WIDTH) + " " + string(IMAGE_HEIGHT) + "\n");
    file.write("255\n");
    
    // Generate terrain...
}

main();
```

### Ray Tracer

A simple ray tracer demonstrating structs, vectors, and recursion:

```crux
use Vec from "crux:vector";
use Random from "crux:random";

struct Ray {
    origin,
    direction,
    at
}

fn new_ray(origin, direction) {
    return new Ray {
        origin: origin,
        direction: direction,
        at: fn(t) { return origin.add(direction.multiply(t)); }
    };
}
```

## Next Steps

- Read the [Language Tour](/docs/language-tour) for a deeper dive into the language
- Explore the [Standard Library](/docs/core) reference
