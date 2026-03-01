---
sidebar_position: 19
---

# Matrix

The `matrix` module provides matrix mathematics operations for the Crux programming language.

## Installation

```crux
use new_matrix, new_matrix_identity from "crux:matrix";
```

## Functions

### new_matrix

Creates a new matrix with the specified dimensions (zero-initialized).

```crux
let m = new_matrix(3, 3)  // 3x3 zero matrix
```

**Parameters:**
- `rows` (Int): Number of rows
- `cols` (Int): Number of columns

**Returns:** `Result<Matrix>`

**Errors:** Matrix dimensions must be positive integers.

---

### new_matrix_identity

Creates an n×n identity matrix.

```crux
let I = new_matrix_identity(3)  // 3x3 identity matrix
```

**Parameters:**
- `n` (Int): Size of the square matrix

**Returns:** `Result<Matrix>`

**Errors:** Identity matrix size must be a positive integer.

---

### new_matrix_from_array

Creates a matrix from a flat array of numbers (row-major order).

```crux
let m = new_matrix_from_array(2, 3, [1, 2, 3, 4, 5, 6])
// [[1, 2, 3],
//  [4, 5, 6]]
```

**Parameters:**
- `rows` (Int): Number of rows
- `cols` (Int): Number of columns
- `data` (Array): Flat array of numeric values

**Returns:** `Result<Matrix>`

**Errors:** Matrix dimensions must be positive integers, all elements must be numeric.

---

## Methods

### get

Gets the element at the specified row and column (0-indexed).

```crux
let m = new_matrix_from_array(2, 2, [1, 2, 3, 4])
let val = m.get(0, 1)  // Result(2)
```

**Parameters:**
- `row` (Int): Row index
- `col` (Int): Column index

**Returns:** `Result<Float>`

**Errors:** Matrix index out of bounds.

---

### set

Sets the element at the specified row and column.

```crux
let m = new_matrix(2, 2)
m.set(0, 1, 5.0)  // Result(Nil)
```

**Parameters:**
- `row` (Int): Row index
- `col` (Int): Column index
- `value` (Float): Value to set

**Returns:** `Result<Nil>`

**Errors:** Matrix index out of bounds.

---

### rows

Returns the number of rows in the matrix.

```crux
let m = new_matrix(3, 4)
let r = m.rows()  // 3
```

**Returns:** `Int`

---

### cols

Returns the number of columns in the matrix.

```crux
let m = new_matrix(3, 4)
let c = m.cols()  // 4
```

**Returns:** `Int`

---

### add

Adds another matrix element-wise (matrices must have the same dimensions).

```crux
let m1 = new_matrix_from_array(2, 2, [1, 2, 3, 4])
let m2 = new_matrix_from_array(2, 2, [5, 6, 7, 8])
let result = m1.add(m2)  // [[6, 8], [10, 12]]
```

**Parameters:**
- `other` (Matrix): Matrix to add

**Returns:** `Result<Matrix>`

**Errors:** Matrices must have the same dimensions.

---

### subtract

Subtracts another matrix element-wise.

```crux
let m1 = new_matrix_from_array(2, 2, [5, 6, 7, 8])
let m2 = new_matrix_from_array(2, 2, [1, 2, 3, 4])
let result = m1.subtract(m2)  // [[4, 4], [4, 4]]
```

**Parameters:**
- `other` (Matrix): Matrix to subtract

**Returns:** `Result<Matrix>`

**Errors:** Matrices must have the same dimensions.

---

### multiply

Performs standard matrix multiplication.

```crux
let m1 = new_matrix_from_array(2, 3, [1, 2, 3, 4, 5, 6])
let m2 = new_matrix_from_array(3, 2, [7, 8, 9, 10, 11, 12])
let result = m1.multiply(m2)  // [[58, 64], [139, 154]]
```

**Parameters:**
- `other` (Matrix): Matrix to multiply

**Returns:** `Result<Matrix>`

**Errors:** Number of columns in first matrix must equal number of rows in second matrix.

---

### scale

Multiplies every element in the matrix by a scalar value.

```crux
let m = new_matrix_from_array(2, 2, [1, 2, 3, 4])
let result = m.scale(2.0)  // [[2, 4], [6, 8]]
```

**Parameters:**
- `scalar` (Float): Scalar value

**Returns:** `Result<Matrix>`

---

### transpose

Returns the transpose of the matrix (rows become columns).

```crux
let m = new_matrix_from_array(2, 3, [1, 2, 3, 4, 5, 6])
let t = m.transpose()  // [[1, 4], [2, 5], [3, 6]]
```

**Returns:** `Result<Matrix>`

---

### determinant

Computes the determinant of the matrix (only for square matrices).

```crux
let m = new_matrix_from_array(2, 2, [1, 2, 3, 4])
let det = m.determinant()  // Result(-2.0)
```

**Returns:** `Result<Float>`

**Errors:** Determinant is only defined for square matrices.

---

### inverse

Computes the inverse of the matrix (only for square, non-singular matrices).

```crux
let m = new_matrix_from_array(2, 2, [4, 7, 2, 6])
let inv = m.inverse()  // Result([[0.6, -0.7], [-0.2, 0.4]])
```

**Returns:** `Result<Matrix>`

**Errors:** Inverse is only defined for square matrices, matrix is singular.

---

### trace

Returns the trace of the matrix (sum of main diagonal elements).

```crux
let m = new_matrix_from_array(3, 3, [1, 0, 0, 0, 2, 0, 0, 0, 3])
let tr = m.trace()  // Result(6.0)
```

**Returns:** `Result<Float>`

**Errors:** Trace is only defined for square matrices.

---

### rank

Computes the rank of the matrix.

```crux
let m = new_matrix_from_array(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9])
let r = m.rank()  // Result(2)
```

**Returns:** `Result<Int>`

---

### row

Returns the specified row as an array.

```crux
let m = new_matrix_from_array(2, 3, [1, 2, 3, 4, 5, 6])
let r = m.row(1)  // Result([4, 5, 6])
```

**Parameters:**
- `row` (Int): Row index

**Returns:** `Result<Array>`

**Errors:** Row index out of bounds.

---

### col

Returns the specified column as an array.

```crux
let m = new_matrix_from_array(2, 3, [1, 2, 3, 4, 5, 6])
let c = m.col(1)  // Result([2, 5])
```

**Parameters:**
- `col` (Int): Column index

**Returns:** `Result<Array>`

**Errors:** Column index out of bounds.

---

### equals

Checks if two matrices are equal (element-wise comparison with epsilon tolerance).

```crux
let m1 = new_matrix_from_array(2, 2, [1.0, 2.0, 3.0, 4.0])
let m2 = new_matrix_from_array(2, 2, [1.0, 2.0, 3.0, 4.0])
let eq = m1.equals(m2)  // Result(true)
```

**Parameters:**
- `other` (Matrix): Matrix to compare

**Returns:** `Result<Bool>`

---

### copy

Returns a deep copy of the matrix.

```crux
let m = new_matrix_from_array(2, 2, [1, 2, 3, 4])
let copy = m.copy()
```

**Returns:** `Result<Matrix>`

---

### to_array

Converts the matrix to an array of row arrays.

```crux
let m = new_matrix_from_array(2, 3, [1, 2, 3, 4, 5, 6])
let arr = m.to_array()  // Result([[1, 2, 3], [4, 5, 6]])
```

**Returns:** `Result<Array>`

---

### multiply_vector

Multiplies the matrix by a vector.

```crux
let m = new_matrix_from_array(2, 3, [1, 2, 3, 4, 5, 6])
let v = new_vector(3, [1, 2, 3])
let result = m.multiply_vector(v)  // Result([14, 32])
```

**Parameters:**
- `vector` (Vector): Vector to multiply

**Returns:** `Result<Vector>`

**Errors:** Matrix column count must match vector dimension.
