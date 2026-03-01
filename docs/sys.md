---
sidebar_position: 14
---

# System

The `sys` module provides system-related operations for the Crux programming language.

## Installation

```crux
use args, platform, arch, pid from "crux:sys";
```

## Functions

### args

Returns the command line arguments as an array `[argc, argv]`.

```crux
let result = args()
// Result([2, ["program_name", "argument"]])
```

**Returns:** `Result<Array>`

**Errors:** Failed to allocate memory for argument.

---

### platform

Returns the current operating system platform.

```crux
let os = platform()  // "linux", "windows", "apple", or "unknown"
```

**Returns:** `String`

---

### arch

Returns the CPU architecture.

```crux
let architecture = arch()
// "x86_64", "x86", "arm64", "arm", "ppc64", "ppc", "riscv64", "riscv", "s390x", "mips64", "mips", or "unknown"
```

**Returns:** `String`

---

### pid

Returns the current process ID.

```crux
let process_id = pid()
```

**Returns:** `Int`

---

### get_env

Gets the value of an environment variable.

```crux
let path = get_env("PATH")  // Result("/usr/bin:/bin")
let missing = get_env("NONEXISTENT")  // Error: Environment variable not found
```

**Parameters:**
- `name` (String): The environment variable name

**Returns:** `Result<String>`

**Errors:** Environment variable not found, or failed to allocate memory.

---

### sleep

Pauses execution for the specified number of seconds.

```crux
sleep(5)  // pauses for 5 seconds
```

**Parameters:**
- `seconds` (Int): The number of seconds to sleep

**Returns:** `Nil`

---

### exit

Exits the program with the given exit code. Note: This never returns.

```crux
exit(0)  // successful exit
exit(1)  // error exit
```

**Parameters:**
- `code` (Int): The exit code

**Returns:** (never returns)
