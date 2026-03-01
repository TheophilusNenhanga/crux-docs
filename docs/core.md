---
sidebar_position: 24
---

# Core

The `core` module provides core type conversion and manipulation functions for the Crux programming language.

## Installation

```crux
use length, int, float, string from "crux:core";
```

## Functions

### length

Returns the length of a value. Works with Array, String, Table, Vector, Matrix, Range, Buffer, Tuple, and Set.

```crux
let arr = [1, 2, 3]
let len = length(arr)  // 3

let str = "hello"
let len2 = length(str)  // 5

let t = {"a": 1, "b": 2}
let len3 = length(t)  // 2

let v = new_vector(3, [1, 2, 3])
let len4 = length(v)  // 3

let m = new_matrix(2, 3)
let len5 = length(m)  // 6
```

**Parameters:**
- `value` (Any): The value to get length of

**Returns:** `Int` (-1 for unsupported types)

---

### int

Converts a value to an integer.

```crux
let n = int(3.14)    // Result(3)
let n2 = int("42")   // Result(42)
let n3 = int(true)   // Result(1)
let n4 = int(false)  // Result(0)
let n5 = int(nil)    // Result(0)
```

**Parameters:**
- `value` (Any): The value to convert

**Returns:** `Result<Int>`

**Errors:** Failed to convert value to integer.

---

### float

Converts a value to a float.

```crux
let f = float(42)    // Result(42.0)
let f2 = float("3.14")  // Result(3.14)
let f3 = float(true) // Result(1.0)
let f4 = float(nil)  // Result(0.0)
```

**Parameters:**
- `value` (Any): The value to convert

**Returns:** `Result<Float>`

**Errors:** Failed to convert value to float.

---

### string

Converts a value to a string.

```crux
let s = string(42)       // "42"
let s2 = string(3.14)    // "3.14"
let s3 = string([1, 2])  // "[1, 2]"
let s4 = string(true)    // "true"
```

**Parameters:**
- `value` (Any): The value to convert

**Returns:** `String`

---

### array

Converts a value to an array.

```crux
let arr = array([1, 2, 3])  // [1, 2, 3]
let arr2 = array("hello")    // ["h", "e", "l", "l", "o"]
let arr3 = array({"a": 1, "b": 2})  // ["a", 1, "b", 2]
```

For strings, each character becomes an element.
For tables, keys and values are interleaved as [key1, value1, key2, value2, ...].
For other types, wraps the value in a single-element array.

**Parameters:**
- `value` (Any): The value to convert

**Returns:** `Result<Array>`

**Errors:** Failed to convert value to array.

---

### table

Converts a value to a table.

```crux
let t = table({"a": 1, "b": 2})  // {"a": 1, "b": 2}
let t2 = table([1, 2, 3])        // {0: 1, 1: 2, 2: 3}
let t3 = table("ab")              // {0: "a", 1: "b"}
```

For arrays, indices become keys.
For strings, character indices become keys.
For other types, wraps the value with key 0.

**Parameters:**
- `value` (Any): The value to convert

**Returns:** `Result<Table>`

---

### format

Formats a string using placeholders like `{key}` replaced with values from a table.

```crux
let values = {"name": "Alice", "age": 30}
format("Name: {name}, Age: {age}", values)
// Prints: Name: Alice, Age: 30
```

**Parameters:**
- `format_string` (String): The format string with `{key}` placeholders
- `values` (Table): Table of values to substitute

**Returns:** `Result<Nil>`

**Errors:** format token cannot have opening brace within it, unexpected closing brace without matching opening brace, unterminated format token, format token specifies name that does not exist in format table, or memory allocation failed.
