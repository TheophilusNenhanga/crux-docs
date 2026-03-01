---
sidebar_position: 22
---

# FS

The `fs` module provides filesystem operations for the Crux programming language.

## Installation

```crux
use fs_open, fs_read_file, fs_write_file from "crux:fs";
```

## File Functions

### fs_open

Opens a file with the specified path and mode.

```crux
let file = fs_open("test.txt", "r")
let file2 = fs_open("output.txt", "w")
let file3 = fs_open("log.txt", "a")
```

**Parameters:**
- `path` (String): The file path
- `mode` (String): File mode ("r", "w", "a", "rb", "wb", etc.)

**Returns:** `Result<File>`

**Errors:** Could not resolve file path, or failed to open file.

---

### fs_read_file

Reads the entire contents of a file.

```crux
let content = fs_read_file("test.txt")
```

**Parameters:**
- `path` (String): The file path

**Returns:** `Result<String>`

**Errors:** Failed to open file, or failed to read file contents.

---

### fs_write_file

Writes content to a file (creates or truncates the file).

```crux
fs_write_file("output.txt", "Hello, World!")
```

**Parameters:**
- `path` (String): The file path
- `content` (String): The content to write

**Returns:** `Result<Nil>`

**Errors:** Failed to open file, or error writing to file.

---

### fs_append_file

Appends content to a file (creates the file if it doesn't exist).

```crux
fs_append_file("log.txt", "New log entry\n")
```

**Parameters:**
- `path` (String): The file path
- `content` (String): The content to append

**Returns:** `Result<Nil>`

**Errors:** Failed to open file, or error writing to file.

---

## File Methods

### close

Closes an open file.

```crux
let file = fs_open("test.txt", "r")
file.close()
```

**Returns:** `Result<Nil>`

**Errors:** Cannot close a closed file.

---

### flush

Flushes any buffered data to the file.

```crux
let file = fs_open("output.txt", "w")
file.write("data")
file.flush()
```

**Returns:** `Result<Nil>`

**Errors:** Failed to flush file.

---

### read

Reads up to n bytes from the current position in the file.

```crux
let file = fs_open("test.txt", "r")
let data = file.read(100)
```

**Parameters:**
- `n` (Int): Number of bytes to read

**Returns:** `Result<String>`

**Errors:** n must be a positive integer, file is not open for reading, failed to allocate read buffer, or error reading from file.

---

### readln

Reads a line from the file (up to but excluding newline).

```crux
let file = fs_open("test.txt", "r")
let line = file.readln()
```

**Returns:** `Result<String>`

**Errors:** File is not open for reading, failed to allocate read buffer, or error reading from file.

---

### read_all

Reads all remaining content from the current position to EOF.

```crux
let file = fs_open("test.txt", "r")
let content = file.read_all()
```

**Returns:** `Result<String>`

**Errors:** File is not open for reading, or failed to read file contents.

---

### read_lines

Reads all remaining lines from the file into an array (newlines stripped).

```crux
let file = fs_open("test.txt", "r")
let lines = file.read_lines()
```

**Returns:** `Result<Array<String>>`

**Errors:** File is not open for reading, failed to allocate read buffer, or error reading from file.

---

### write

Writes a string to the file.

```crux
let file = fs_open("output.txt", "w")
file.write("Hello")
```

**Parameters:**
- `content` (String): The content to write

**Returns:** `Result<Nil>`

**Errors:** content must be a string, file is not open for writing, or error writing to file.

---

### writeln

Writes a string to the file followed by a newline.

```crux
let file = fs_open("output.txt", "w")
file.writeln("Hello")
```

**Parameters:**
- `content` (String): The content to write

**Returns:** `Result<Nil>`

**Errors:** content must be a string, file is not open for writing, or error writing to file.

---

### seek

Seeks to a position in the file.

```crux
let file = fs_open("test.txt", "r")
file.seek(0, "start")  // Seek to beginning
file.seek(10, "current")  // Seek 10 bytes forward
file.seek(0, "end")  // Seek to end
```

**Parameters:**
- `offset` (Int): Offset from the position specified by whence
- `whence` (String): "start", "current", or "end"

**Returns:** `Result<Nil>`

**Errors:** offset must be an integer, whence must be a string, invalid whence, failed to seek in file, or failed to determine position after seek.

---

### tell

Returns the current position in the file.

```crux
let file = fs_open("test.txt", "r")
let pos = file.tell()
```

**Returns:** `Result<Int>`

**Errors:** Failed to determine file position.

---

### is_open

Checks if the file is currently open.

```crux
let file = fs_open("test.txt", "r")
let open = file.is_open()  // true
file.close()
let still_open = file.is_open()  // false
```

**Returns:** `Bool`

---

## Filesystem Queries

### fs_exists

Checks if a path exists.

```crux
let exists = fs_exists("test.txt")
```

**Parameters:**
- `path` (String): The file path

**Returns:** `Bool`

---

### fs_is_file

Checks if a path is a regular file.

```crux
let is_file = fs_is_file("test.txt")
```

**Parameters:**
- `path` (String): The file path

**Returns:** `Bool`

---

### fs_is_dir

Checks if a path is a directory.

```crux
let is_dir = fs_is_dir("/home/user")
```

**Parameters:**
- `path` (String): The directory path

**Returns:** `Bool`

---

### fs_file_size

Returns the size of a file in bytes.

```crux
let size = fs_file_size("test.txt")
```

**Parameters:**
- `path` (String): The file path

**Returns:** `Result<Float>`

**Errors:** File not found or inaccessible, or path is not a regular file.

---

## Filesystem Mutations

### fs_remove

Deletes a file.

```crux
fs_remove("old_file.txt")
```

**Parameters:**
- `path` (String): The file path

**Returns:** `Result<Nil>`

**Errors:** Path is a directory, or failed to remove file.

---

### fs_rename

Renames a file.

```crux
fs_rename("old_name.txt", "new_name.txt")
```

**Parameters:**
- `from` (String): Current file path
- `to` (String): New file path

**Returns:** `Result<Nil>`

**Errors:** Failed to rename file.

---

### fs_copy_file

Copies a file from one path to another.

```crux
fs_copy_file("source.txt", "destination.txt")
```

**Parameters:**
- `from` (String): Source file path
- `to` (String): Destination file path

**Returns:** `Result<Nil>`

**Errors:** Failed to copy file, or error during file copy.

---

### fs_mkdir

Creates a directory.

```crux
fs_mkdir("new_directory")
```

**Parameters:**
- `path` (String): The directory path

**Returns:** `Result<Nil>`

**Errors:** Directory already exists, parent directory does not exist, or failed to create directory.
