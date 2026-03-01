---
sidebar_position: 26
---

# Buffer

The `buffer` module provides binary buffer operations for the Crux programming language. It allows reading and writing raw bytes with support for various data types.

## Installation

```crux
use new_buffer from "crux:buffer";
```

## Functions

### new_buffer

Creates a new empty buffer with the default initial capacity.

```crux
let buf = new_buffer()
```

**Returns:** `Buffer`

---

## Write Methods

### write_byte

Writes a single byte to the buffer.

```crux
let buf = new_buffer()
buf.write_byte(65)  // ASCII 'A'
```

**Parameters:**
- `byte` (Int): Byte value 0-255

**Returns:** `Result<Buffer>`

**Errors:** Failed to grow buffer - buffer is at maximum capacity.

---

### write_int16_le

Writes a 16-bit signed integer as 2 bytes, little-endian.

```crux
let buf = new_buffer()
buf.write_int16_le(256)  // writes 0x00 0x01
```

**Parameters:**
- `value` (Int): The integer value

**Returns:** `Nil`

---

### write_int16_be

Writes a 16-bit signed integer as 2 bytes, big-endian.

```crux
let buf = new_buffer()
buf.write_int16_be(256)  // writes 0x01 0x00
```

**Parameters:**
- `value` (Int): The integer value

**Returns:** `Nil`

---

### write_int32_le

Writes a 32-bit signed integer as 4 bytes, little-endian.

```crux
let buf = new_buffer()
buf.write_int32_le(16909060)  // writes 0x04 0x03 0x02 0x01
```

**Parameters:**
- `value` (Int): The integer value

**Returns:** `Nil`

---

### write_int32_be

Writes a 32-bit signed integer as 4 bytes, big-endian.

```crux
let buf = new_buffer()
buf.write_int32_be(16909060)  // writes 0x01 0x02 0x03 0x04
```

**Parameters:**
- `value` (Int): The integer value

**Returns:** `Nil`

---

### write_float32_le

Writes a float narrowed to float32 as 4 bytes, little-endian.

```crux
let buf = new_buffer()
buf.write_float32_le(3.14159)
```

**Parameters:**
- `value` (Float): The float value

**Returns:** `Nil`

---

### write_float32_be

Writes a float narrowed to float32 as 4 bytes, big-endian.

```crux
let buf = new_buffer()
buf.write_float32_be(3.14159)
```

**Parameters:**
- `value` (Float): The float value

**Returns:** `Nil`

---

### write_float64_le

Writes a double as 8 bytes, little-endian.

```crux
let buf = new_buffer()
buf.write_float64_le(3.14159265358979)
```

**Parameters:**
- `value` (Float): The double value

**Returns:** `Nil`

---

### write_float64_be

Writes a double as 8 bytes, big-endian.

```crux
let buf = new_buffer()
buf.write_float64_be(3.14159265358979)
```

**Parameters:**
- `value` (Float): The double value

**Returns:** `Nil`

---

### write_string

Appends the raw bytes of a string to the buffer.

```crux
let buf = new_buffer()
buf.write_string("Hello")
```

**Parameters:**
- `string` (String): The string to write

**Returns:** `Result<Buffer>`

**Errors:** Failed to grow buffer.

---

### write_buffer

Appends the readable bytes of another buffer to this buffer.

```crux
let buf1 = new_buffer()
let buf2 = new_buffer()
buf2.write_byte(1)
buf2.write_byte(2)
buf1.write_buffer(buf2)
```

**Parameters:**
- `other` (Buffer): The source buffer

**Returns:** `Result<Buffer>`

**Errors:** Failed to grow buffer.

---

## Read Methods

### read_byte

Reads a single byte from the buffer and advances the read position.

```crux
let buf = new_buffer()
buf.write_byte(65)
let byte = buf.read_byte()  // Result(65)
```

**Returns:** `Result<Int>`

**Errors:** Not enough bytes to read byte.

---

### read_string

Reads exactly n bytes from the buffer as a string.

```crux
let buf = new_buffer()
buf.write_string("Hello")
let s = buf.read_string(3)  // Result("Hel")
```

**Parameters:**
- `n` (Int): Number of bytes to read

**Returns:** `Result<String>`

**Errors:** Read length cannot be negative, or not enough bytes to read string.

---

### read_line

Reads bytes from the buffer until a newline byte (0x0A) is found or the buffer is exhausted.

```crux
let buf = new_buffer()
buf.write_string("Hello\nWorld")
let line = buf.read_line()  // Result("Hello")
```

**Returns:** `Result<String>`

**Errors:** Buffer is empty.

---

### read_all

Reads all remaining readable bytes from the buffer as a string.

```crux
let buf = new_buffer()
buf.write_string("Hello")
let content = buf.read_all()  // Result("Hello")
```

**Returns:** `Result<String>`

**Errors:** Buffer is empty.

---

### read_int16_le

Reads a 16-bit signed integer from 2 bytes, little-endian.

```crux
let buf = new_buffer()
buf.write_int16_le(256)
let val = buf.read_int16_le()  // Result(256)
```

**Returns:** `Result<Int>`

**Errors:** Not enough bytes to read Int16.

---

### read_int16_be

Reads a 16-bit signed integer from 2 bytes, big-endian.

```crux
let buf = new_buffer()
buf.write_int16_be(256)
let val = buf.read_int16_be()  // Result(256)
```

**Returns:** `Result<Int>`

**Errors:** Not enough bytes to read Int16.

---

### read_int32_le

Reads a 32-bit signed integer from 4 bytes, little-endian.

```crux
let buf = new_buffer()
buf.write_int32_le(16909060)
let val = buf.read_int32_le()  // Result(16909060)
```

**Returns:** `Result<Int>`

**Errors:** Not enough bytes to read Int32.

---

### read_int32_be

Reads a 32-bit signed integer from 4 bytes, big-endian.

```crux
let buf = new_buffer()
buf.write_int32_be(16909060)
let val = buf.read_int32_be()  // Result(16909060)
```

**Returns:** `Result<Int>`

**Errors:** Not enough bytes to read Int32.

---

### read_float32_le

Reads 4 bytes as a float32 and widens to double, little-endian.

```crux
let buf = new_buffer()
buf.write_float32_le(3.14)
let val = buf.read_float32_le()  // Result(3.140000104904175)
```

**Returns:** `Result<Float>`

**Errors:** Not enough bytes to read Float32.

---

### read_float32_be

Reads 4 bytes as a float32 and widens to double, big-endian.

```crux
let buf = new_buffer()
buf.write_float32_be(3.14)
let val = buf.read_float32_be()  // Result(3.140000104904175)
```

**Returns:** `Result<Float>`

**Errors:** Not enough bytes to read Float32.

---

### read_float64_le

Reads 8 bytes as a double, little-endian.

```crux
let buf = new_buffer()
buf.write_float64_le(3.14159265358979)
let val = buf.read_float64_le()  // Result(3.14159265358979)
```

**Returns:** `Result<Float>`

**Errors:** Not enough bytes to read Float64.

---

### read_float64_be

Reads 8 bytes as a double, big-endian.

```crux
let buf = new_buffer()
buf.write_float64_be(3.14159265358979)
let val = buf.read_float64_be()  // Result(3.14159265358979)
```

**Returns:** `Result<Float>`

**Errors:** Not enough bytes to read Float64.

---

## Utility Methods

### capacity

Returns the total allocated capacity in bytes.

```crux
let buf = new_buffer()
let cap = buf.capacity()
```

**Returns:** `Float`

---

### is_empty

Returns true if there are no readable bytes remaining.

```crux
let buf = new_buffer()
let empty = buf.is_empty()  // true
```

**Returns:** `Bool`

---

### clear

Resets read and write positions to 0 without freeing memory.

```crux
let buf = new_buffer()
buf.write_byte(1)
buf.clear()
```

**Returns:** `Nil`

---

### peek_byte

Returns the next readable byte without advancing the read position. Returns -1 if empty.

```crux
let buf = new_buffer()
buf.write_byte(65)
let byte = buf.peek_byte()  // 65
```

**Returns:** `Int`

---

### skip_bytes

Advances the read position by n bytes without returning the data.

```crux
let buf = new_buffer()
buf.write_string("Hello")
buf.skip_bytes(2)
let remaining = buf.read_all()  // Result("llo")
```

**Parameters:**
- `n` (Int): Number of bytes to skip

**Returns:** `Nil` or `Error`

**Errors:** Skip amount cannot be negative, or cannot skip past write position.

---

### to_string

Copies all readable bytes into a new string without advancing read_pos.

```crux
let buf = new_buffer()
buf.write_string("Hello")
let s = buf.to_string()  // "Hello"
```

**Returns:** `String`

---

### clone

Returns a deep copy of the buffer including all allocated data.

```crux
let buf1 = new_buffer()
buf1.write_byte(1)
let buf2 = buf1.clone()
```

**Returns:** `Buffer`

---

### compact

Moves all readable bytes to the front of the internal array and resets read_pos to 0.

```crux
let buf = new_buffer()
buf.write_byte(1)
buf.read_byte()  // consumed
buf.compact()
```

**Returns:** `Nil`
