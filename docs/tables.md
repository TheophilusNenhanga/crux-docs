---
sidebar_position: 13
---

# Tables

The `tables` module provides table (hash map) operations for the Crux programming language.

## Installation

```crux
use table_values, table_keys, table_pairs from "crux:tables";
```

## Methods

### values

Returns all values in a table as an array.

```crux
let t = {"a": 1, "b": 2, "c": 3}
let vals = t.values()  // Result([1, 2, 3])
```

**Returns:** `Result<Array>`

**Errors:** Failed to allocate memory for values array.

---

### keys

Returns all keys in a table as an array.

```crux
let t = {"a": 1, "b": 2, "c": 3}
let ks = t.keys()  // Result(["a", "b", "c"])
```

**Returns:** `Result<Array>`

**Errors:** Failed to allocate memory for keys array.

---

### pairs

Returns all key-value pairs in a table as an array of [key, value] arrays.

```crux
let t = {"a": 1, "b": 2}
let ps = t.pairs()  // Result([["a", 1], ["b", 2]])
```

**Returns:** `Result<Array>`

**Errors:** Failed to allocate memory for pairs array.

---

### remove

Removes a key-value pair from a table.

```crux
let t = {"a": 1, "b": 2}
let result = t.remove("a")  // Result(Nil)
```

**Parameters:**
- `key` (Hashable): The key to remove

**Returns:** `Result<Nil>`

**Errors:** Failed to remove key-value pair, or unhashable type given as key.

---

### get

Gets the value associated with a key from a table.

```crux
let t = {"a": 1, "b": 2}
let val = t.get("a")  // Result(1)
let missing = t.get("c")  // Error: Failed to get value from table
```

**Parameters:**
- `key` (Hashable): The key to look up

**Returns:** `Result<Any>`

**Errors:** Failed to get value, or unhashable type given as key.

---

### has_key

Checks if a table contains a specific key.

```crux
let t = {"a": 1, "b": 2}
let has_a = t.has_key("a")  // true
let has_c = t.has_key("c")  // false
```

**Parameters:**
- `key` (Hashable): The key to check

**Returns:** `Bool`

---

### get_or_else

Gets a value from a table or returns a default if the key doesn't exist.

```crux
let t = {"a": 1, "b": 2}
let val = t.get_or_else("a", 0)  // 1
let default = t.get_or_else("c", 99)  // 99
```

**Parameters:**
- `key` (Hashable): The key to look up
- `default` (Any): The default value to return if key not found

**Returns:** `Any`
