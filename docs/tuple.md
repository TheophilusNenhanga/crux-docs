---
sidebar_position: 11
---

# Tuple

The `tuple` module provides tuple operations for the Crux programming language.

## Installation

```crux
use new_tuple from "crux:tuple";
```

## Functions

### new_tuple

Creates a new tuple from an array.

```crux
let arr = [1, 2, 3]
let tup = new_tuple(arr)
```

**Parameters:**
- `array` (Array): The array to convert

**Returns:** `Tuple`

---

## Methods

### is_empty

Checks if a tuple is empty.

```crux
let tup = new_tuple([1, 2, 3])
let empty = tup.is_empty()  // false
```

**Returns:** `Bool`

---

### contains

Checks if a tuple contains a value.

```crux
let tup = new_tuple([1, 2, 3])
let has_two = tup.contains(2)  // true
let has_five = tup.contains(5)  // false
```

**Parameters:**
- `value` (Value): The value to search for

**Returns:** `Bool`

---

### to_array

Converts a tuple to an array.

```crux
let tup = new_tuple([1, 2, 3])
let arr = tup.to_array()  // [1, 2, 3]
```

**Returns:** `Array`

---

### first

Gets the first element of a tuple.

```crux
let tup = new_tuple([1, 2, 3])
let first = tup.first()  // Result(1)
```

**Returns:** `Result<Value>`

**Errors:** Cannot get first element of empty tuple.

---

### last

Gets the last element of a tuple.

```crux
let tup = new_tuple([1, 2, 3])
let last = tup.last()  // Result(3)
```

**Returns:** `Result<Value>`

**Errors:** Cannot get last element of empty tuple.

---

### equals

Checks if two tuples are equal.

```crux
let tup1 = new_tuple([1, 2, 3])
let tup2 = new_tuple([1, 2, 3])
let tup3 = new_tuple([1, 2, 4])
let equal = tup1.equals(tup2)  // true
let not_equal = tup1.equals(tup3)  // false
```

**Parameters:**
- `other` (Tuple): The tuple to compare

**Returns:** `Bool`

---

### get

Gets an element from a tuple by index.

```crux
let tup = new_tuple([10, 20, 30])
let elem = tup.get(1)  // Result(20)
```

**Parameters:**
- `index` (Int): The index of the element

**Returns:** `Result<Value>`

**Errors:** Index out of bounds.

---

### slice

Slices a tuple.

```crux
let tup = new_tuple([10, 20, 30, 40])
let sliced = tup.slice(1, 3)  // [20, 30]
```

**Parameters:**
- `start` (Int): Start index (inclusive)
- `end` (Int): End index (exclusive)

**Returns:** `Array<Value>`

**Errors:** Invalid slice range.

---

### index

Gets the index of a value in a tuple.

```crux
let tup = new_tuple([10, 20, 30])
let idx = tup.index(20)  // Result(1)
let missing = tup.index(50)  // Error: Value not found
```

**Parameters:**
- `value` (Value): The value to search for

**Returns:** `Result<Int>`

**Errors:** Value not found.
