---
sidebar_position: 2
---

# Language Tour

This guide covers the core features of the Crux programming language.

## Variables

Use `let` to declare variables:

```crux
let x = 42;
let name = "Crux";
let numbers = [1, 2, 3, 4, 5];
```

Variables are immutable by default. Use `mut` for mutable variables:

```crux
let mut counter = 0;
counter = counter + 1;
```

## Data Types

### Primitive Types

```crux
let int_num = 42;          // Integer
let float_num = 3.14;     // Float
let is_crux = true;       // Boolean
let nothing = nil;         // Nil/Null
let text = "Hello";        // String
```

### Arrays

```crux
let arr = [1, 2, 3, 4, 5];

// Access elements
let first = arr[0];

// Array methods
arr.push(6);           // Add to end
let popped = arr.pop(); // Remove from end
let len = len(arr);    // Get length
```

### Tables (Dictionaries)

```crux
let person = {
    "name": "Alice",
    "age": 30
};

// Access
let name = person["name"];
person["city"] = "London";
```

### Vectors

```crux
use Vec from "crux:vector";

let v = Vec(3, [1.0, 2.0, 3.0])?;
let mag = v.magnitude()?;
let normalized = v.normalize()?;
```

### Structs

```crux
struct Point {
    x,
    y,
    z
}

let p = new Point { x: 10, y: 20, z: 30 };
let x_coord = p.x;
```

## Functions

```crux
fn greet(name) {
    return "Hello, " + name + "!";
}

// Or without explicit return
fn greet(name) {
    "Hello, " + name + "!";
}

// Function with multiple returns (last expression is return value)
fn add(a, b) {
    a + b
}
```

### Closures

```crux
let add_ten = fn(x) { x + 10 };
let result = add_ten(5);  // 15
```

## Control Flow

### If/Else

```crux
let x = 10;

if x > 5 {
    println("x is greater than 5");
} else if x > 0 {
    println("x is positive but not greater than 5");
} else {
    println("x is not positive");
}
```

### For Loop

```crux
for let i = 0; i < 10; i += 1 {
    println(i);
}
```

### While Loop

```crux
let count = 0;
while count < 5 {
    println(count);
    count = count + 1;
}
```

### Match (Pattern Matching)

```crux
let result = match some_value {
    Ok(v) => give v,
    Err => { panic "Something went wrong"; }
};
```

## Error Handling

### The `?` Operator

Use `?` to propagate errors:

```crux
use Vec from "crux:vector";

fn create_vector() {
    let v = Vec(3, [1.0, 2.0, 3.0])?;  // Returns error if failed
    return v.normalize()?;               // Propagates error if failed
}
```

### Match with Error Handling

```crux
let file = match open("data.txt", "r") {
    Ok(f) => give f,
    Err(e) => {
        println("Failed to open: " + e.message());
        return nil;
    }
};
```

## Modules and Imports

Import functions from standard library:

```crux
use println from "crux:io";
use open from "crux:fs";
use Random from "crux:random";
use floor, abs from "crux:math";
```

## Type Conversions

```crux
let num = 42;
let s = string(num);      // Int to String
let n = int("123");        // String to Int
let f = float(10);         // Int to Float
let arr = array("hello");  // String to Array of chars
```

## Operators

### Arithmetic

```crux
let sum = 10 + 5;      // Addition
let diff = 10 - 5;      // Subtraction  
let prod = 10 * 5;      // Multiplication
let quot = 10 / 5;      // Division
let mod = 10 % 3;       // Modulo
```

### Comparison

```crux
10 == 10   // Equal
10 != 5    // Not equal
10 < 20    // Less than
10 <= 10   // Less than or equal
10 > 5     // Greater than
10 >= 10   // Greater than or equal
```

### Logical

```crux
true and false   // AND
true or false    // OR
not true         // NOT
```

## Standard Library Quick Reference

| Module | Description |
|--------|-------------|
| `crux:io` | Input/output (print, scan) |
| `crux:fs` | File system operations |
| `crux:math` | Math functions (sqrt, sin, cos, etc.) |
| `crux:random` | Random number generation |
| `crux:vector` | Vector mathematics |
| `crux:matrix` | Matrix mathematics |
| `crux:string` | String manipulation |
| `crux:array` | Array operations |
| `crux:table` | Hash map operations |
| `crux:time` | Time and date functions |

## Example: Complete Program

```crux
use println from "crux:io";
use open from "crux:fs";
use Random from "crux:random";

fn main() {
    // Variables
    let message = "Hello, Crux!";
    let numbers = [1, 2, 3, 4, 5];
    
    // Print
    println(message);
    println("Sum: " + string(sum_array(numbers)));
    
    // File handling with error handling
    let file = match open("output.txt", "w") {
        Ok(f) => give f,
        Err => { panic "Cannot open file"; }
    };
    
    file.write("Written from Crux!");
    file.close();
}

fn sum_array(arr) {
    let total = 0;
    for let i = 0; i < len(arr); i += 1 {
        total = total + arr[i];
    }
    return total;
}

main();
```
