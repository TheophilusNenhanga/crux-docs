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

## Data Types

### Primitive Types

These are the most basic data types in Crux.

```crux
let whole = 42;           // Integer
let frac = 3.14;          // Float
let is_crux = true;       // Boolean
let nothing = nil;        // Nil/Null
let text = "Hello";       // String
```

Because Crux is optionally typed you can also add type annotations to your variable declarations. 

```crux
let whole: Int = 42;
let frac: Float = 24.43;
let is_crux: Bool = true;
let nothing: Nil = nil;
let text: String = "Hello";
```

The int type is `int32_t` in Crux's C implementation
The Float type is `double` in Crux's C implementation

### Strings

Strings are a collection of bytes. They are immutable and null terminated.

```crux
let name = "Steve";
```

Strings have various string methods which can transform them.

```crux
let first_char = name.first();
```

String can be concatenated with the `+` operator

e.g.
```crux
let a = "Hello Crux";
let b = "I am Steve";
println(a + ", " + b); // Hello Crux, I am Steve
```

> Note!: However strings cannot be used with the `+=` compound operator.

### Arrays

Arrays are collections of values, they can hold any data type and are automatically growing. 

Arrays can hold multiple types at the same time if they are not type annotated or type annotated with `Any`

The type of this array is: `Array[Any]`
```crux
let arr = [1, 2, 3, "four", [5]];
```

However arrays can be typed with non any type and then be forced to only contain that type. 

The type of this array is: `Array[Float]`
```crux
let arr: Array[Float] = [1.2, 12.3, 34.65, 2];
```
> Note!: Regarding `2` being in the array. `Int` is compatible with `Float`, but `Float` is not compatible with `Int`

When an array is given a specific type the compiler will panic if it encounters a value that is not expected type:

```crux
let bad: Array[Int] = [1, 2, 3, "4"];
```
This will cause the compiler to panic!

Arrays, like other complex data types in Crux have methods. Methods can be called using the `.` dot operator. 

```crux
[1, 2, 3].get(0);
let arr = [1, 2, 3];
arr.get(0);
```

In this example we use the `.get()` method to get a value by index in an array. However this is not the only way to get and set values in an array. `[ ]` can be used to get and set values by index in an array.

```crux
println(["a", "b", "c", "d", "e"][2]); // This will print 'c'
let arr = ["x", "y", "z"];
arr[2] = "XyX"
// arr = ["x", "y", "XyX"]
```

> Note!: Crux has 0 based indexing


### Tables

Tables in Crux are key-value pairs. You may know them as dictionaries or maps. In Crux they are called tables they are mutable and growing. 

Tables are allowed to have any value type as their values however, keys must be hashable. 

The hashable types are: `Nil`, `Bool`, `Int`, `Float`, `String`

Additionally, even untyped tables must have consistent key types.

```crux
let person = {
    "name": "Alice",
    "age": 30
};
```

The type of the above table would be `Table[String, Any]`

Tables can be typed

```crux
let person: Table[String, Any] = {
    "name": "Alice",
    "age": 30
};
```

Just like arrays, tables can use `[ ]` to set and get values.

```crux
// Setting a value
person["name"] = "Steve";

Getting a value
let name = person["name"];
```

### Structs

Structs are a set of named fields. They are similar to tables but they have a fixed set of fields and are not growing. They are a user defined type and can be used to create complex data structures.

Struct definitions are created with the `struct` keyword.

```crux
struct Point {
    x,
    y,
    z
}
```

In the above example the struct fields are defined without types, the struct fields are implicityly `Any` typed. However, you can also add type annotations to struct fields.

```crux
struct Point {
    x: Float,
    y: Float,
    z: Float
}
```

> Note!: you are now allowed to have trailing commas in struct definitions - the compiler will panic.

Structs can be instantiated with the `new` keyword followed by the  name of the struct and then the field names and values in curly braces.

```crux
let p1 = new Point {x = 1.3, y = 1.5, z = 1.33};
```

Struct can be implemented with methods. Methods are defined in an `impl` block.

```crux
impl Point {
    fn magnitude() {
        return sqrt(self.x * self.x + self.y * self.y + self.z * self.z);
    }
}
```

> Note!: `self` is used to refer to the current instance of the struct. This self parameter is implicit in method definitions and calls. Passing `self` explicitly is not allowed and will cause the compiler to panic. `self` can be returned from a method and used in other methods.

All structs of that type will have the methods defined in the `impl` block. 

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
