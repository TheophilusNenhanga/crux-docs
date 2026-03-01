---
sidebar_position: 20
---

# Math

The `math` module provides mathematical functions and constants for the Crux programming language.

## Installation

```crux
use pow, sqrt, sin, cos from "crux:math";
```

## Constants

| Constant | Description |
|----------|-------------|
| `pi` | The mathematical constant π (3.14159...) |
| `e` | Euler's number (2.71828...) |
| `nan` | Not a Number - a special floating-point value |
| `inf` | Positive infinity |

## Functions

### pow

Calculates the value of base raised to the power of exponent.

```crux
let result = pow(2.0, 3.0)  // 8.0
```

**Parameters:**
- `base` (Float): The base
- `exponent` (Float): The exponent

**Returns:** `Float`

---

### sqrt

Calculates the square root of a number.

```crux
let result = sqrt(16.0)  // Result(4.0)
let neg = sqrt(-1.0)  // Error: Cannot calculate square root of a negative number
```

**Parameters:**
- `number` (Float): The number

**Returns:** `Result<Float>`

**Errors:** Cannot calculate square root of a negative number.

---

### abs

Calculates the absolute value of a number.

```crux
let i = abs(-5)    // 5 (Int)
let f = abs(-3.14) // 3.14 (Float)
```

**Parameters:**
- `x` (Int or Float): The number

**Returns:** `Int` or `Float` (same type as input)

---

### sin

Calculates the sine of an angle in radians.

```crux
let result = sin(0.0)  // 0.0
```

**Parameters:**
- `angle` (Float): Angle in radians

**Returns:** `Float`

---

### cos

Calculates the cosine of an angle in radians.

```crux
let result = cos(0.0)  // 1.0
```

**Parameters:**
- `angle` (Float): Angle in radians

**Returns:** `Float`

---

### tan

Calculates the tangent of an angle in radians.

```crux
let result = tan(0.0)  // 0.0
```

**Parameters:**
- `angle` (Float): Angle in radians

**Returns:** `Float`

---

### asin

Calculates the arcsine (inverse sine) of a value.

```crux
let result = asin(0.0)  // Result(0.0)
let invalid = asin(2.0)  // Error: Argument must be between -1 and 1
```

**Parameters:**
- `value` (Float): Value between -1 and 1

**Returns:** `Result<Float>`

**Errors:** Argument must be between -1 and 1.

---

### acos

Calculates the arccosine (inverse cosine) of a value.

```crux
let result = acos(1.0)  // Result(0.0)
let invalid = acos(2.0) // Error: Argument must be between -1 and 1
```

**Parameters:**
- `value` (Float): Value between -1 and 1

**Returns:** `Result<Float>`

**Errors:** Argument must be between -1 and 1.

---

### atan

Calculates the arctangent (inverse tangent) of a value.

```crux
let result = atan(0.0)  // 0.0
```

**Parameters:**
- `value` (Float): The value

**Returns:** `Float`

---

### exp

Calculates e (Euler's number) raised to the power of x.

```crux
let result = exp(1.0)  // 2.718281828459045
```

**Parameters:**
- `x` (Float): The exponent

**Returns:** `Float`

---

### ln

Calculates the natural logarithm (base e) of a number.

```crux
let result = ln(2.718281828459045)  // Result(~1.0)
let neg = ln(-1.0)  // Error: Cannot calculate natural logarithm of non positive number
```

**Parameters:**
- `number` (Float): The number (must be positive)

**Returns:** `Result<Float>`

**Errors:** Cannot calculate natural logarithm of non positive number.

---

### log10

Calculates the base 10 logarithm of a number.

```crux
let result = log10(100.0)  // Result(2.0)
let neg = log10(-1.0)  // Error: Cannot calculate base 10 logarithm of non positive number
```

**Parameters:**
- `number` (Float): The number (must be positive)

**Returns:** `Result<Float>`

**Errors:** Cannot calculate base 10 logarithm of non positive number.

---

### ceil

Rounds a number up to the nearest integer.

```crux
let result = ceil(3.14)  // 4.0
```

**Parameters:**
- `number` (Float): The number

**Returns:** `Float`

---

### floor

Rounds a number down to the nearest integer.

```crux
let result = floor(3.14)  // 3.0
```

**Parameters:**
- `number` (Float): The number

**Returns:** `Float`

---

### round

Rounds a number to the nearest integer.

```crux
let result = round(3.14)  // 3.0
let result2 = round(3.5)  // 4.0
```

**Parameters:**
- `number` (Float): The number

**Returns:** `Float`

---

### min

Returns the smaller of two values.

```crux
let result = min(5.0, 3.0)  // 3.0
```

**Parameters:**
- `a` (Float): First value
- `b` (Float): Second value

**Returns:** `Float`

---

### max

Returns the larger of two values.

```crux
let result = max(5.0, 3.0)  // 5.0
```

**Parameters:**
- `a` (Float): First value
- `b` (Float): Second value

**Returns:** `Float`
