---
sidebar_position: 15
---

# String

The `string` module provides string manipulation operations for the Crux programming language.

## Installation

```crux
use string_upper, string_split from "crux:string";
```

## Methods

### first

Returns the first character of a string.

```crux
let s = "hello"
let c = s.first()  // Result("h")
```

**Returns:** `Result<String>`

**Errors:** String must have at least one character.

---

### last

Returns the last character of a string.

```crux
let s = "hello"
let c = s.last()  // Result("o")
```

**Returns:** `Result<String>`

**Errors:** String must have at least one character.

---

### get

Returns the character at the specified index.

```crux
let s = "hello"
let c = s.get(1)  // Result("e")
```

**Parameters:**
- `index` (Int): The index of the character

**Returns:** `Result<String>`

**Errors:** Index out of bounds, or string must have at least one character.

---

### upper

Converts a string to uppercase.

```crux
let s = "hello"
let upper = s.upper()  // Result("HELLO")
```

**Returns:** `Result<String>`

**Errors:** Memory allocation failed.

---

### lower

Converts a string to lowercase.

```crux
let s = "HELLO"
let lower = s.lower()  // Result("hello")
```

**Returns:** `Result<String>`

**Errors:** Memory allocation failed.

---

### strip

Removes leading and trailing whitespace from a string.

```crux
let s = "  hello  "
let trimmed = s.strip()  // Result("hello")
```

**Returns:** `Result<String>`

---

### substring

Extracts a substring from a string between start and end indices (exclusive).

```crux
let s = "hello"
let sub = s.substring(1, 4)  // Result("ell")
```

**Parameters:**
- `start` (Int): Start index (inclusive)
- `end` (Int): End index (exclusive)

**Returns:** `Result<String>`

**Errors:** Indices cannot be negative or out of bounds.

---

### split

Splits a string into an array of substrings using a delimiter.

```crux
let s = "a,b,c"
let parts = s.split(",")  // Result(["a", "b", "c"])
```

**Parameters:**
- `delimiter` (String): The delimiter to split by

**Returns:** `Result<Array>`

**Errors:** Delimiter cannot be empty.

---

### contains

Checks if a string contains a substring.

```crux
let s = "hello world"
let has_world = s.contains("world")  // Result(true)
let has_foo = s.contains("foo")  // Result(false)
```

**Parameters:**
- `substring` (String): The substring to search for

**Returns:** `Result<Bool>`

**Errors:** Memory allocation failed.

---

### replace

Replaces all occurrences of a substring with another string.

```crux
let s = "hello world"
let result = s.replace("world", "crux")  // Result("hello crux")
```

**Parameters:**
- `target` (String): The substring to replace
- `replacement` (String): The replacement string

**Returns:** `Result<String>`

**Errors:** Source string must have at least one character, target must have at least one character, or resulting string length exceeds maximum.

---

### starts_with

Checks if a string starts with a given prefix.

```crux
let s = "hello"
let result = s.starts_with("hel")  // Result(true)
let result2 = s.starts_with("world")  // Result(false)
```

**Parameters:**
- `prefix` (String): The prefix to check

**Returns:** `Result<Bool>`

---

### ends_with

Checks if a string ends with a given suffix.

```crux
let s = "hello"
let result = s.ends_with("llo")  // Result(true)
let result2 = s.ends_with("world")  // Result(false)
```

**Parameters:**
- `suffix` (String): The suffix to check

**Returns:** `Result<Bool>`

---

### is_al_num

Checks if all characters in a string are alphanumeric.

```crux
let s = "hello123"
let result = s.is_al_num()  // true
let s2 = "hello!"
let result2 = s2.is_al_num()  // false
```

**Returns:** `Bool`

---

### is_alpha

Checks if all characters in a string are alphabetic.

```crux
let s = "hello"
let result = s.is_alpha()  // true
let s2 = "hello123"
let result2 = s2.is_alpha()  // false
```

**Returns:** `Bool`

---

### is_digit

Checks if all characters in a string are digits.

```crux
let s = "12345"
let result = s.is_digit()  // true
let s2 = "123a"
let result2 = s2.is_digit()  // false
```

**Returns:** `Bool`

---

### is_lower

Checks if all characters in a string are lowercase.

```crux
let s = "hello"
let result = s.is_lower()  // true
let s2 = "Hello"
let result2 = s2.is_lower()  // false
```

**Returns:** `Bool`

---

### is_upper

Checks if all characters in a string are uppercase.

```crux
let s = "HELLO"
let result = s.is_upper()  // true
let s2 = "Hello"
let result2 = s2.is_upper()  // false
```

**Returns:** `Bool`

---

### is_space

Checks if all characters in a string are whitespace.

```crux
let s = "   "
let result = s.is_space()  // true
let s2 = " hello "
let result2 = s2.is_space()  // false
```

**Returns:** `Bool`

---

### is_empty

Checks if a string is empty.

```crux
let s = ""
let result = s.is_empty()  // true
let s2 = "hello"
let result2 = s2.is_empty()  // false
```

**Returns:** `Bool`

---

### concat

Concatenates two strings together.

```crux
let s1 = "hello"
let s2 = " world"
let result = s1.concat(s2)  // Result("hello world")
```

**Parameters:**
- `other` (String): The string to concatenate

**Returns:** `Result<String>`

**Errors:** Resultant string is too greater than the supported length.
