---
sidebar_position: 12
---

# Time

The `time` module provides time-related operations for the Crux programming language.

## Installation

```crux
use time_seconds, time_milliseconds, sleep_seconds from "crux:time";
```

## Functions

### time_seconds

Returns the current Unix timestamp in seconds.

```crux
let ts = time_seconds()  // 1706745600.0
```

**Returns:** `Float`

---

### time_milliseconds

Returns the current Unix timestamp in milliseconds.

```crux
let ts = time_milliseconds()  // 1706745600000.0
```

**Returns:** `Float`

---

### sleep_seconds

Pauses execution for the specified number of seconds.

```crux
let result = sleep_seconds(2.5)  // Result(Nil)
```

**Parameters:**
- `seconds` (Float): The number of seconds to sleep

**Returns:** `Result<Nil>`

**Errors:** Sleep duration cannot be negative.

---

### sleep_milliseconds

Pauses execution for the specified number of milliseconds.

```crux
let result = sleep_milliseconds(500)  // Result(Nil)
```

**Parameters:**
- `milliseconds` (Float): The number of milliseconds to sleep

**Returns:** `Result<Nil>`

**Errors:** Sleep duration cannot be negative.

---

### year

Returns the current year.

```crux
let y = year()  // 2024
```

**Returns:** `Int`

---

### month

Returns the current month (1-12).

```crux
let m = month()  // 2
```

**Returns:** `Int`

---

### day

Returns the current day of the month (1-31).

```crux
let d = day()  // 28
```

**Returns:** `Int`

---

### hour

Returns the current hour (0-23).

```crux
let h = hour()  // 14
```

**Returns:** `Int`

---

### minute

Returns the current minute (0-59).

```crux
let min = minute()  // 30
```

**Returns:** `Int`

---

### second

Returns the current second (0-59).

```crux
let s = second()  // 45
```

**Returns:** `Int`

---

### weekday

Returns the current day of the week (1=Monday, 7=Sunday).

```crux
let w = weekday()  // 3 (Wednesday)
```

**Returns:** `Int`

---

### day_of_year

Returns the current day of the year (1-366).

```crux
let doy = day_of_year()  // 59
```

**Returns:** `Int`
