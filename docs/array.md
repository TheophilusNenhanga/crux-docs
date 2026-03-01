---
sidebar_position: 27
---

# Array

The `array` module provides array manipulation operations for the Crux programming language.

## Installation

```crux
use array_push, array_pop from "crux:array";
```

## Methods

### push

Adds an element to the end of an array.

```crux
let arr = [1, 2, 3]
arr.push(4)  // [1, 2, 3, 4]
```

**Parameters:**
- `value` (Any): The element to add

**Returns:** `Result<Nil>`

**Errors:** Failed to add element to array.

---

### pop

Removes and returns the last element of an array.

```crux
let arr = [1, 2, 3]
let popped = arr.pop()  // Result(3), arr is now [1, 2]
```

**Returns:** `Result<Any>`

**Errors:** Cannot remove a value from an empty array.

---

### insert

Inserts an element at the specified index in an array.

```crux
let arr = [1, 2, 3]
arr.insert(1, 99)  // [1, 99, 2, 3]
```

**Parameters:**
- `index` (Int): The index to insert at
- `value` (Any): The element to insert

**Returns:** `Result<Nil>`

**Errors:** Index is out of bounds, or failed to allocate memory.

---

### remove_at

Removes and returns the element at the specified index.

```crux
let arr = [1, 2, 3]
let removed = arr.remove_at(1)  // Result(2), arr is now [1, 3]
```

**Parameters:**
- `index` (Int): The index to remove from

**Returns:** `Result<Any>`

**Errors:** Index is out of bounds.

---

### concat

Concatenates two arrays together.

```crux
let arr1 = [1, 2]
let arr2 = [3, 4]
let combined = arr1.concat(arr2)  // Result([1, 2, 3, 4])
```

**Parameters:**
- `other` (Array): The array to concatenate

**Returns:** `Result<Array>`

**Errors:** Size of resultant array out of bounds.

---

### slice

Extracts a portion of an array from start to end (exclusive).

```crux
let arr = [0, 1, 2, 3, 4]
let sliced = arr.slice(1, 4)  // Result([1, 2, 3])
```

**Parameters:**
- `start` (Int): Start index (inclusive)
- `end` (Int): End index (exclusive)

**Returns:** `Result<Array>`

**Errors:** Start or end index out of bounds, or indexes out of order.

---

### reverse

Reverses an array in place.

```crux
let arr = [1, 2, 3]
arr.reverse()  // Result(Nil), arr is now [3, 2, 1]
```

**Returns:** `Result<Nil>`

**Errors:** Failed to allocate memory when reversing array.

---

### index_of

Returns the index of the first occurrence of a value.

```crux
let arr = [1, 2, 3, 2, 4]
let idx = arr.index_of(2)  // Result(1)
let missing = arr.index_of(99)  // Error: Value could not be found
```

**Parameters:**
- `value` (Any): The value to search for

**Returns:** `Result<Int>`

**Errors:** Value could not be found in the array.

---

### contains

Checks if an array contains a specific value.

```crux
let arr = [1, 2, 3]
let has_2 = arr.contains(2)  // true
let has_99 = arr.contains(99)  // false
```

**Parameters:**
- `value` (Any): The value to search for

**Returns:** `Bool`

---

### clear

Removes all elements from an array.

```crux
let arr = [1, 2, 3]
arr.clear()  // arr is now []
```

**Returns:** `Nil`

---

### equals

Checks if two arrays are equal (same elements in same order).

```crux
let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
let arr3 = [1, 2, 4]
let eq = arr1.equals(arr2)  // true
let neq = arr1.equals(arr3)  // false
```

**Parameters:**
- `other` (Array): The array to compare

**Returns:** `Bool`

---

### map

Transforms each element of an array using a function.

```crux
let arr = [1, 2, 3]
let doubled = arr.map(fn(x) { x * 2 })  // Result([2, 4, 6])
```

**Parameters:**
- `func` (Function): Function that takes 1 argument and returns transformed value

**Returns:** `Result<Array>`

**Errors:** Function must take exactly 1 argument.

---

### filter

Filters an array to only include elements that satisfy a predicate function.

```crux
let arr = [1, 2, 3, 4, 5]
let evens = arr.filter(fn(x) { x % 2 == 0 })  // Result([2, 4])
```

**Parameters:**
- `func` (Function): Function that takes 1 argument and returns Bool

**Returns:** `Result<Array>`

**Errors:** Function must take exactly 1 argument.

---

### reduce

Reduces an array to a single value using an accumulator function.

```crux
let arr = [1, 2, 3, 4]
let sum = arr.reduce(fn(acc, x) { acc + x }, 0)  // Result(10)
```

**Parameters:**
- `func` (Function): Function that takes 2 arguments (accumulator, element)
- `initial` (Any): Initial accumulator value

**Returns:** `Result<Any>`

**Errors:** Function must take exactly 2 arguments.

---

### sort

Sorts an array in ascending order. Works with Int, Float, or String arrays.

```crux
let arr = [3, 1, 4, 1, 5]
let sorted = arr.sort()  // Result([1, 1, 3, 4, 5])

let strs = ["banana", "apple", "cherry"]
let sorted_strs = strs.sort()  // Result(["apple", "banana", "cherry"])
```

**Returns:** `Result<Array>`

**Errors:** Array contains unsortable or mixed incompatible types.

---

### join

Joins all elements of an array into a string with a separator.

```crux
let arr = ["a", "b", "c"]
let joined = arr.join(", ")  // Result("a, b, c")
```

**Parameters:**
- `separator` (String): The string to separate elements

**Returns:** `Result<String>`

**Errors:** Memory allocation failed.
