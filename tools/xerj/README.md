Local-first search engine and MCP server for AI agents.

## What it is

A local-first search engine and MCP server for AI agents, one Rust binary.
It indexes code with tree-sitter (symbol-aware), documents, PDF, DOCX
and XLSX, logs, JSONL and CSV, SQLite and mail. It searches by BM25,
vector kNN, or both together. It has an Elasticsearch-compatible REST
API, and `xerj mcp` runs a stdio MCP server with 21 tools. Its authors'
own case study reports 2.7 to 26 times fewer tokens than reading files
whole.

## The package

Source github.com/xerj-org/xerj; version v1.0.0-rc.96, a release
candidate before 1.0, whose CI badge showed failing on 2026-10-23;
licence Apache-2.0.

## What it reads

The kinds of file above, in the target it is pointed at.

## What it never does here

Hosted reranking and proxy embeddings stay off, so no text leaves the
machine. It runs with its default offline lexical embedder, or neural
mode only with model files staged locally. Its `/_memory` store is not
used; the kernel's record holds what is remembered. It binds 127.0.0.1
only. Its code is never copied into the commons.

## Scope

Its own line, quoted: "Local-first search engine and MCP server for AI agents."

## Its use here

Any role that reads the person's files searches them instead of loading
them whole. Through the Gate it only reads. Its target is the person's
checkout. Its index lives inside the target, in the harness's own folder
`operatorkit/`, which git ignores, so the index never enters the
person's history.
