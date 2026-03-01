---
sidebar_position: 25
---

# Complex

The `complex` module provides complex number operations for the Crux programming language.

## Installation

```crux
use new_complex from "crux:complex";
```

## Functions

### new_complex

Creates a new complex number with real and imaginary parts.

```crux
let c = new_complex(3.0, 4.0)  // 3 + 4i
```

**Parameters:**
- `real` (Float): Real part
- `imag` (Float): Imaginary part

**Returns:** `Complex`

---

## Methods

### real

Returns the real part of a complex number.

```crux
let c = new_complex(3.0, 4.0)
let r = c.real()  // 3.0
```

**Returns:** `Float`

---

### imag

Returns the imaginary part of a complex number.

```crux
let c = new_complex(3.0, 4.0)
let i = c.imag()  // 4.0
```

**Returns:** `Float`

---

### add

Adds two complex numbers together.

```crux
let c1 = new_complex(1.0, 2.0)
let c2 = new_complex(3.0, 4.0)
let sum = c1.add(c2)  // 4 + 6i
```

**Parameters:**
- `other` (Complex): The other complex number

**Returns:** `Complex`

---

### subtract

Subtracts another complex number from this one.

```crux
let c1 = new_complex(5.0, 6.0)
let c2 = new_complex(3.0, 4.0)
let diff = c1.subtract(c2)  // 2 + 2i
```

**Parameters:**
- `other` (Complex): The other complex number

**Returns:** `Complex`

---

### multiply

Multiplies two complex numbers together.

```crux
let c1 = new_complex(1.0, 2.0)
let c2 = new_complex(3.0, 4.0)
let product = c1.multiply(c2)  // -5 + 10i
```

**Parameters:**
- `other` (Complex): The other complex number

**Returns:** `Complex`

---

### divide

Divides this complex number by another.

```crux
let c1 = new_complex(1.0, 2.0)
let c2 = new_complex(3.0, 4.0)
let quotient = c1.divide(c2)  // 0.44 + 0.08i
```

**Parameters:**
- `other` (Complex): The divisor complex number

**Returns:** `Complex`

---

### scale

Scales a complex number by a scalar value.

```crux
let c = new_complex(1.0, 2.0)
let scaled = c.scale(2.0)  // 2 + 4i
```

**Parameters:**
- `scalar` (Float): The scalar value

**Returns:** `Complex`

---

### magnitude

Returns the magnitude (modulus) of a complex number.

```crux
let c = new_complex(3.0, 4.0)
let mag = c.magnitude()  // 5.0
```

**Returns:** `Float`

---

### square_magnitude

Returns the squared magnitude of a complex number.

```crux
let c = new_complex(3.0, 4.0)
let sq_mag = c.square_magnitude()  // 25.0
```

**Returns:** `Float`

---

### conjugate

Returns the complex conjugate of a complex number.

```crux
let c = new_complex(3.0, 4.0)
let conj = c.conjugate()  // 3 - 4i
```

**Returns:** `Complex`
