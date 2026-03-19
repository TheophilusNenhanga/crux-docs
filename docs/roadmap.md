---
sidebar_position: 5
---

# Roadmap

This document outlines the development plan for the Crux programming language. The goal is to build a small but capable general purpose programming language that is easy to reason about and does not compromise on performance.

All of this is subject to change at any time without notice.

## Phase 1: Core Language (Current Focus)

- [x] Type System - A Gradual type system to make code more readable (v0.19.0) 
- [ ] UTF-8 Support - Let's speak the same language as everyone else (v0.19.0)
- [ ] Type Aware Bytecode - Now that we have types, we can use the type information to improve performance (v0.20.0)
- [ ] Direct2D module - Let's see what it's like to build something real with the language (v0.21.0)
- [ ] Improved `match` expressions - better pattern matching! (v0.22.0)
- [ ] Coroutnies - cooperative multitasking (v0.23.0)
- [ ] Package System - A way to define and share libraries (v0.24.0)
- [ ] Synchronous Sockets - Getting basic networking started (v0.25.0)
- [ ] Multithreading - A garbage collector per thread with channel based message passing (v0.26.0)

## Phase 2: Tooling

- [ ] Language Server - A Language Server Protocol implementation for Crux
- [ ] Debug Adapter - A Debug Adapter Protocol Implementation for Crux  

## Long-term Ideas

- [ ] C FFI
- [ ] More batteries included in the language

---
