---
sidebar_position: 21
---

# IO

The `io` module provides input/output operations for the Crux programming language.

## Installation

```crux
use print, println, scan from "crux:io";
```

## Functions

### print

Writes a string representation of a value to stdout without a newline.

```crux
print("Hello")      // prints: Hello
print(42)           // prints: 42
print([1, 2, 3])   // prints: [1, 2, 3]
```

**Parameters:**
- `value` (Any): The value to print

**Returns:** `Nil`

---

### println

Writes a string representation of a value to stdout followed by a newline.

```crux
println("Hello")      // prints: Hello\n
println(42)           // prints: 42\n
```

**Parameters:**
- `value` (Any): The value to print

**Returns:** `Nil`

---

### print_to

Writes a string representation of a value to a specified channel without a newline.

```crux
print_to("stdout", "Hello")  // prints to stdout
print_to("stderr", "Error")   // prints to stderr
```

**Parameters:**
- `channel` (String): The channel ("stdout" or "stderr")
- `value` (Any): The value to print

**Returns:** `Result<Nil>`

**Errors:** Invalid channel, or error writing to stream.

---

### println_to

Writes a string representation of a value to a specified channel followed by a newline.

```crux
println_to("stdout", "Hello")  // prints to stdout with newline
println_to("stderr", "Error")   // prints to stderr with newline
```

**Parameters:**
- `channel` (String): The channel ("stdout" or "stderr")
- `value` (Any): The value to print

**Returns:** `Result<Nil>`

**Errors:** Invalid channel, or error writing to stream.

---

### scan

Reads exactly one character from stdin, discarding the rest of the line.

```crux
let c = scan()  // reads single character
```

**Returns:** `Result<String>`

**Errors:** Unexpected end of input on stdin.

---

### scanln

Reads a line from stdin up to (and excluding) the newline character.

```crux
let line = scanln()  // reads entire line
```

**Returns:** `Result<String>`

**Errors:** Failed to allocate buffer for input, or error reading from stdin.

---

### nscan

Reads up to n characters from stdin, stopping early at newline.

```crux
let input = nscan(10)  // reads up to 10 characters
```

**Parameters:**
- `n` (Int): Maximum number of characters to read

**Returns:** `Result<String>`

**Errors:** n must be a positive integer, failed to allocate buffer, or error reading from stdin.

---

### scan_from

Reads exactly one character from a specified channel, discarding the rest of the line.

```crux
let c = scan_from("stdin")  // reads single character from stdin
```

**Parameters:**
- `channel` (String): The channel ("stdin")

**Returns:** `Result<String>`

**Errors:** Invalid channel, or unexpected end of input on channel.

---

### scanln_from

Reads a line from a specified channel up to (and excluding) the newline character.

```crux
let line = scanln_from("stdin")  // reads line from stdin
```

**Parameters:**
- `channel` (String): The channel ("stdin")

**Returns:** `Result<String>`

**Errors:** Invalid channel, failed to allocate buffer, or error reading from channel.

---

### nscan_from

Reads up to n characters from a specified channel, stopping early at newline.

```crux
let input = nscan_from("stdin", 10)  // reads up to 10 characters
```

**Parameters:**
- `channel` (String): The channel ("stdin")
- `n` (Int): Maximum number of characters to read

**Returns:** `Result<String>`

**Errors:** Invalid channel, n must be a positive integer, failed to allocate buffer, or error reading from channel.
