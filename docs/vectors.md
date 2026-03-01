---
sidebar_position: 10
---

# Vectors

The `vectors` module provides vector mathematics operations for the Crux programming language.

## Installation

```crux
import "vectors"
```

## Constants

| Constant | Description |
|----------|-------------|
| `EPSILON` | Small value used for floating-point comparisons (1e-10) |

## Functions

### new_vector

Creates a new vector with the specified dimension and components.

```crux
let vec = new_vector(3, [1.0, 2.0, 3.0])
```

**Parameters:**
- `dimension` (Int): The number of dimensions
- `components` (Array): Array of numeric values

**Returns:** `Result<Vector>`

---

## Methods

### dot

Computes the dot product of two vectors.

```crux
let v1 = new_vector(3, [1.0, 2.0, 3.0])
let v2 = new_vector(3, [4.0, 5.0, 6.0])
let result = v1.dot(v2)  // 32.0
```

**Parameters:**
- `other` (Vector): The other vector

**Returns:** `Result<Float>`

**Errors:** Vectors must have the same dimension.

---

### add

Adds two vectors together.

```crux
let v1 = new_vector(3, [1.0, 2.0, 3.0])
let v2 = new_vector(3, [4.0, 5.0, 6.0])
let result = v1.add(v2)  // [5.0, 7.0, 9.0]
```

**Parameters:**
- `other` (Vector): The vector to add

**Returns:** `Result<Vector>`

**Errors:** Vectors must have the same dimension.

---

### subtract

Subtracts one vector from another.

```crux
let v1 = new_vector(3, [4.0, 5.0, 6.0])
let v2 = new_vector(3, [1.0, 2.0, 3.0])
let result = v1.subtract(v2)  // [3.0, 3.0, 3.0]
```

**Parameters:**
- `other` (Vector): The vector to subtract

**Returns:** `Result<Vector>`

**Errors:** Vectors must have the same dimension.

---

### multiply

Multiplies a vector by a scalar value.

```crux
let v = new_vector(3, [1.0, 2.0, 3.0])
let result = v.multiply(2.0)  // [2.0, 4.0, 6.0]
```

**Parameters:**
- `scalar` (Float): The scalar value

**Returns:** `Result<Vector>`

---

### divide

Divides a vector by a scalar value.

```crux
let v = new_vector(3, [2.0, 4.0, 6.0])
let result = v.divide(2.0)  // [1.0, 2.0, 3.0]
```

**Parameters:**
- `scalar` (Float): The scalar value

**Returns:** `Result<Vector>`

**Errors:** Cannot divide by zero.

---

### magnitude

Returns the magnitude (length) of the vector.

```crux
let v = new_vector(3, [3.0, 4.0, 0.0])
let len = v.magnitude()  // 5.0
```

**Returns:** `Float`

---

### normalize

Returns a normalized (unit length) version of the vector.

```crux
let v = new_vector(3, [3.0, 4.0, 0.0])
let unit = v.normalize()  // [0.6, 0.8, 0.0]
```

**Returns:** `Result<Vector>`

**Errors:** Cannot normalize a zero vector.

---

### distance

Returns the Euclidean distance between two vectors.

```crux
let v1 = new_vector(3, [1.0, 2.0, 3.0])
let v2 = new_vector(3, [4.0, 6.0, 3.0])
let dist = v1.distance(v2)  // 5.0
```

**Parameters:**
- `other` (Vector): The other vector

**Returns:** `Result<Float>`

**Errors:** Vectors must have the same dimension.

---

### cross

Computes the cross product of two 3D vectors.

```crux
let v1 = new_vector(3, [1.0, 0.0, 0.0])
let v2 = new_vector(3, [0.0, 1.0, 0.0])
let result = v1.cross(v2)  // [0.0, 0.0, 1.0]
```

**Parameters:**
- `other` (Vector): The other 3D vector

**Returns:** `Result<Vector>`

**Errors:** Cross product is only defined for 3D vectors.

---

### angle_between

Returns the angle in radians between two vectors.

```crux
let v1 = new_vector(3, [1.0, 0.0, 0.0])
let v2 = new_vector(3, [0.0, 1.0, 0.0])
let angle = v1.angle_between(v2)  // 1.57079632679 (π/2)
```

**Parameters:**
- `other` (Vector): The other vector

**Returns:** `Result<Float>`

**Errors:** Vectors must have the same dimension. Cannot calculate angle with zero vector.

---

### lerp

Linear interpolation between two vectors.

```crux
let v1 = new_vector(3, [0.0, 0.0, 0.0])
let v2 = new_vector(3, [10.0, 10.0, 10.0])
let result = v1.lerp(v2, 0.5)  // [5.0, 5.0, 5.0]
```

**Parameters:**
- `other` (Vector): The target vector
- `t` (Float): Interpolation factor (0 to 1)

**Returns:** `Result<Vector>`

**Errors:** Vectors must have the same dimension.

---

### reflect

Reflects a vector off a surface with the given normal.

```crux
let incident = new_vector(3, [1.0, -1.0, 0.0])
let normal = new_vector(3, [0.0, 1.0, 0.0])
let result = incident.reflect(normal)  // [1.0, 1.0, 0.0]
```

**Parameters:**
- `normal` (Vector): The surface normal

**Returns:** `Result<Vector>`

**Errors:** Vectors must have the same dimension. Cannot reflect with zero normal vector.

---

### equals

Checks if two vectors are equal (with epsilon tolerance).

```crux
let v1 = new_vector(3, [1.0, 2.0, 3.0])
let v2 = new_vector(3, [1.0, 2.0, 3.0])
let equal = v1.equals(v2)  // true
```

**Parameters:**
- `other` (Vector): The other vector

**Returns:** `Bool`

---

### x

Returns the x component (first dimension) of the vector.

```crux
let v = new_vector(3, [1.0, 2.0, 3.0])
let x = v.x()  // 1.0
```

**Returns:** `Float` or `Nil` if dimension < 1

---

### y

Returns the y component (second dimension) of the vector.

```crux
let v = new_vector(3, [1.0, 2.0, 3.0])
let y = v.y()  // 2.0
```

**Returns:** `Float` or `Nil` if dimension < 2

---

### z

Returns the z component (third dimension) of the vector.

```crux
let v = new_vector(3, [1.0, 2.0, 3.0])
let z = v.z()  // 3.0
```

**Returns:** `Float` or `Nil` if dimension < 3

---

### w

Returns the w component (fourth dimension) of the vector.

```crux
let v = new_vector(4, [1.0, 2.0, 3.0, 4.0])
let w = v.w()  // 4.0
```

**Returns:** `Float` or `Nil` if dimension < 4

---

### dimension

Returns the number of dimensions of the vector.

```crux
let v = new_vector(3, [1.0, 2.0, 3.0])
let dim = v.dimension()  // 3
```

**Returns:** `Int`
