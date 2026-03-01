---
sidebar_position: 17
---

# Range

The `range` module provides range operations for the Crux programming language.

## Installation

```crux
use new_range from "crux:range";
```

## Functions

### new_range

Creates a new range object.

```crux
let r = new_range(0, 10, 1)    // 0 to 10, step 1
let r2 = new_range(10, 0, -1)  // 10 to 0, step -1
let r3 = new_range(0, 10, 2)   // 0, 2, 4, 6, 8
```

**Parameters:**
- `start` (Int): Start of the range
- `end` (Int): End of the range
- `step` (Int): Step value (cannot be zero)

**Returns:** `Result<Range>`

**Errors:** Step cannot be zero, start cannot be greater than end when step is positive, start cannot be less than end when step is negative.

---

## Methods

### contains

Checks if a value is contained within a range.

```crux
let r = new_range(0, 10, 1)
let has_5 = r.contains(5)   // true
let has_15 = r.contains(15) // false
```

**Parameters:**
- `value` (Int): The value to check

**Returns:** `Bool`

---

### to_array

Converts a range to an array.

```crux
let r = new_range(0, 5, 1)
let arr = r.to_array()  // [0, 1, 2, 3, 4]
```

**Returns:** `Array`

**Errors:** Failed to add element to array.

---

### start

Returns the start value of a range.

```crux
let r = new_range(5, 10, 1)
let s = r.start()  // 5
```

**Returns:** `Int`

---

### end

Returns the end value of a range.

```crux
let r = new_range(5, 10, 1)
let e = r.end()  // 10
```

**Returns:** `Int`

---

### step

Returns the step value of a range.

```crux
let r = new_range(0, 10, 2)
let s = r.step()  // 2
```

**Returns:** `Int`

---

### is_empty

Returns true if the range is empty.

```crux
let r = new_range(5, 1, 1)   // empty (start > end with positive step)
let empty = r.is_empty()  // true
let r2 = new_range(0, 5, 1)
let not_empty = r2.is_empty()  // false
```

**Returns:** `Bool`

---

### reversed

Returns a reversed range.

```crux
let r = new_range(0, 5, 1)
let rev = r.reversed()  // Range from 4 to -1 with step -1
```

**Returns:** `Range`
