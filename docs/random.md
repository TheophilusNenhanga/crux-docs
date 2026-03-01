---
sidebar_position: 18
---

# Random

The `random` module provides random number generation for the Crux programming language.

## Installation

```crux
use random_init from "crux:random";
```

## Functions

### random_init

Creates a new Random number generator instance.

```crux
let rng = random_init()
```

**Returns:** `Random`

---

## Methods

### seed

Seeds the random number generator with a specific value.

```crux
let rng = random_init()
rng.seed(42)
```

**Parameters:**
- `seed` (Int): The seed value

**Returns:** `Nil`

---

### next

Returns the next random float in the range [0, 1).

```crux
let rng = random_init()
let n = rng.next()  // 0.123456789
```

**Returns:** `Float`

---

### int

Returns a random integer in the range [min, max] inclusive.

```crux
let rng = random_init()
let n = rng.int(1, 10)  // Random number between 1 and 10
```

**Parameters:**
- `min` (Int): Minimum value (inclusive)
- `max` (Int): Maximum value (inclusive)

**Returns:** `Result<Int>`

**Errors:** min must be less than or equal to max.

---

### float

Returns a random float in the range [min, max].

```crux
let rng = random_init()
let n = rng.float(0.0, 1.0)  // Random float between 0.0 and 1.0
```

**Parameters:**
- `min` (Float): Minimum value (inclusive)
- `max` (Float): Maximum value (inclusive)

**Returns:** `Result<Float>`

**Errors:** min must be less than or equal to max.

---

### bool

Returns true with probability p (0 less than or equal to p less than or equal to 1).

```crux
let rng = random_init()
let result = rng.bool(0.5)  // 50% chance of true
let rare = rng.bool(0.01)   // 1% chance of true
```

**Parameters:**
- `probability` (Float): Probability of returning true (0 to 1)

**Returns:** `Result<Bool>`

**Errors:** Probability must be between 0 and 1.

---

### choice

Returns a random element from an array.

```crux
let rng = random_init()
let arr = [1, 2, 3, 4, 5]
let elem = rng.choice(arr)  // Random element from array
```

**Parameters:**
- `array` (Array): The array to choose from

**Returns:** `Result<Any>`

**Errors:** Array cannot be empty.
