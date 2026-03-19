---
sidebar_position: 1
---

# Getting Started

Welcome to the Crux programming language! This guide will help you get up and running.

## Installation

### Pre Compiled Binaries

You can get the latest relese from the [Github Releases Page](https://github.com/TheophilusNenhanga/crux-lang/releases).

Binaries are currently available for the following Operarting Systems and Architectures

- Linux (x64): crux-linux-amd64
- Windows (x64): crux-windows-amd64.exe
- macOS (Intel): crux-macos-amd64
- macOS (Apple Silicon): crux-macos-arm64

If you need a binary for a different operating system or architecture you can build from source and please create an [issue](https://github.com/TheophilusNenhanga/crux-lang/issues).

### Building from Source

#### Windows

To build from source on Windows, you need to have mingw (for gcc) installed, and in your PATH.
You can get mingw [here](https://www.mingw-w64.org/).

```shell
cmake -G "MinGW Makefiles" -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build
```

#### Unix

```shell
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=Release ../
make
```

### Running Your First Program

Create a file called `hello.crux`:

```crux
println("Hello, World!");
```

Run it:

```bash
crux hello.crux
```

Output:
```
Hello, World!
```

Now that you have written the most basic program in Crux you can start exploring the language!

## Next Steps

- Read the [Language Tour](/docs/language-tour) for a deeper dive into the language
- Explore the [Standard Library](/docs/core) reference
