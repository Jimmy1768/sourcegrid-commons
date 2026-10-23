REA routes a target to the right reverse-engineering tool and returns evidence with its limits.

## What it is

An MCP server and CLI. It routes a target to Ghidra, Hopper or IDA for
native code; to JADX and Apktool for Android; and it handles Electron and
web bundles, .NET, Flutter, Go, Rust, WASM and firmware. It returns
evidence with its limitations.

## The package

Source github.com/morluto/rea; npm package rea-agents; version not checked
(the Workshop could not reach the package; it is read when the tool is
first used); licence MIT.

## What it reads

The kinds of target above.

## What it never does

It is never run on a paid product's shipped code, or on a target the
person did not name. Its evidence is never claimed as more than it is:
static analysis is not execution. The tool's code is never copied into the
commons.

## Scope

Its own README's line, quoted: "software you own or are authorized to examine."

## Its use here

A Software maintenance Mandate on the person's own software whose source
is gone.
