---
sidebar_position: 16
---

# Set

The `set` module provides set operations for the Crux programming language.

## Installation

```crux
use new_set from "crux:set";
```

## Functions

### new_set

Creates a new set from an array.

```crux
let s = new_set([1, 2, 3])
```

**Parameters:**
- `array` (`Array` of hashable values): Array of hashable values

**Returns:** `Set`

**Errors:** All set elements must be hashable.

---

## Methods

### add

Adds a value to a set.

```crux
let s = new_set([1, 2])
s.add(3)
```

**Parameters:**
- `value` (hashable): The value to add

**Returns:** `Value`

**Errors:** All set elements must be hashable.

---

### remove

Removes a value from a set.

```crux
let s = new_set([1, 2, 3])
s.remove(2)
```

**Parameters:**
- `value` (hashable): The value to remove

**Returns:** `Value`

**Errors:** All set elements must be hashable.

---

### discard

Removes a value from a set if it exists. Does not error if the value is not in the set.

```crux
let s = new_set([1, 2, 3])
s.discard(2)
s.discard(5)  // No error
```

**Parameters:**
- `value` (hashable): The value to discard

**Returns:** `Nil`

**Errors:** All set elements must be hashable.

---

### union

Returns the union of two sets.

```crux
let s1 = new_set([1, 2])
let s2 = new_set([2, 3])
let result = s1.union(s2)  // Set with 1, 2, 3
```

**Parameters:**
- `other` (Set): The other set

**Returns:** `Result<Set>`

**Errors:** Resultant set size is too large.

---

### intersection

Returns the intersection of two sets.

```crux
let s1 = new_set([1, 2, 3])
let s2 = new_set([2, 3, 4])
let result = s1.intersection(s2)  // Set with 2, 3
```

**Parameters:**
- `other` (Set): The other set

**Returns:** `Set`

---

### difference

Returns the difference of two sets (elements in set1 but not in set2).

```crux
let s1 = new_set([1, 2, 3])
let s2 = new_set([2, 3, 4])
let result = s1.difference(s2)  // Set with 1
```

**Parameters:**
- `other` (Set): The other set

**Returns:** `Set`

---

### sym_difference

Returns the symmetric difference of two sets (elements in either set but not in both).

```crux
let s1 = new_set([1, 2, 3])
let s2 = new_set([2, 3, 4])
let result = s1.sym_difference(s2)  // Set with 1, 4
```

**Parameters:**
- `other` (Set): The other set

**Returns:** `Set`

---

### is_subset

Checks if set1 is a subset of set2.

```crux
let s1 = new_set([1, 2])
let s2 = new_set([1, 2, 3, 4])
let result = s1.is_subset(s2)  // true
```

**Parameters:**
- `other` (Set): The other set

**Returns:** `Bool`

---

### is_superset

Checks if set1 is a superset of set2.

```crux
let s1 = new_set([1, 2, 3, 4])
let s2 = new_set([1, 2])
let result = s1.is_superset(s2)  // true
```

**Parameters:**
- `other` (Set): The other set

**Returns:** `Bool`

---

### is_disjoint

Checks if two sets are disjoint (no common elements).

```crux
let s1 = new_set([1, 2])
let s2 = new_set([3, 4])
let result = s1.is_disjoint(s2)  // true
let s3 = new_set([2, 3])
let result2 = s1.is_disjoint(s3)  // false
```

**Parameters:**
- `other` (Set): The other set

**Returns:** `Bool`

---

### contains

Checks if a set contains a value.

```crux
let s = new_set([1, 2, 3])
let has_2 = s.contains(2)  // true
let has_5 = s.contains(5)  // false
```

**Parameters:**
- `value` (hashable): The value to check

**Returns:** `Bool`

---

### is_empty

Checks if a set is empty.

```crux
let s = new_set([1, 2, 3])
let empty = s.is_empty()  // false
let empty_set = new_set([])
let is_empty = empty_set.is_empty()  // true
```

**Returns:** `Bool`

---

### to_array

Converts a set to an array.

```crux
let s = new_set([1, 2, 3])
let arr = s.to_array()  // [1, 2, 3] (order may vary)
```

**Returns:** `Array`

---

### clone

Creates a shallow copy of a set.

```crux
let s1 = new_set([1, 2, 3])
let s2 = s1.clone()
```

**Returns:** `Set`
