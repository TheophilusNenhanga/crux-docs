---
sidebar_position: 23
---

# Error

The `error` module provides error handling operations for the Crux programming language.

## Installation

```crux
use error, err, ok, unwrap from "crux:error";
```

## Functions

### error

Creates an error value with a message.

```crux
let err = error("Something went wrong")
```

**Parameters:**
- `message` (Any): The error message

**Returns:** `Error`

---

### assert

Asserts that a condition is true, creates an error with message if false.

```crux
assert(x > 0, "x must be positive")
```

**Parameters:**
- `condition` (Bool): The condition to assert
- `message` (String): Error message if assertion fails

**Returns:** `Nil`

---

### err

Creates an error Result with a message.

```crux
let result = err("Failed")
```

**Parameters:**
- `message` (String): The error message

**Returns:** `Result<Nothing>`

---

### ok

Wraps a value in an Ok Result.

```crux
let result = ok(42)
```

**Parameters:**
- `value` (Any): The value to wrap

**Returns:** `Result`

---

### unwrap

Unwraps a Result, returning the value if Ok or the error if Err.

```crux
let value = result.unwrap()
```

**Parameters:**
- `result` (Result): The Result to unwrap

**Returns:** `Any` (the value if Ok, or the Error if Err)

---

## Methods

### message

Returns the error message from an Error.

```crux
let err = error("Something went wrong")
let msg = err.message()  // "Something went wrong"
```

**Returns:** `String`

---

### type

Returns the type of error as a string.

```crux
let err = error("Something went wrong")
let t = err.type()  // "<runtime error>"
```

**Returns:** `String`

### Error Types

The following error types are available:

| Type | Description |
|------|-------------|
| `<syntax error>` | Syntax errors |
| `<math error>` | Mathematical errors (e.g., division by zero) |
| `<bounds error>` | Index out of bounds |
| `<runtime error>` | General runtime errors |
| `<type error>` | Type mismatches |
| `<loop extent error>` | Loop iteration limits |
| `<limit error>` | Resource limits exceeded |
| `<branch extent error>` | Branch depth limits |
| `<closure extent error>` | Closure depth limits |
| `<local extent error>` | Local variable limits |
| `<argument extent error>` | Argument count limits |
| `<name error>` | Undefined names |
| `<collection extent error>` | Collection size limits |
| `<variable extent error>` | Variable scope depth |
| `<return extent error>` | Return depth limits |
| `<argument mismatch error>` | Incorrect argument count |
| `<stack overflow error>` | Stack overflow |
| `<collection get error>` | Collection access errors |
| `<collection set error>` | Collection modification errors |
| `<memory error>` | Memory allocation failures |
| `<value error>` | Invalid values |
| `<assert error>` | Assertion failures |
| `<import extent error>` | Import depth limits |
| `<import error>` | Import failures |
| `<io error>` | Input/output errors |
