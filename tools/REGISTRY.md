# Tool registry — the commons' index of every tool, built or not

A tool is something a model calls: a program it invokes for work its own
reasoning alone cannot carry out, beside Recipes, finished code a builder
reads, and Skills, how a role does its work. Each entry here is a document
and never the tool's code. What a tool may reach is held by the kernel, not
by this file. MCP is one way a tool arrives, not the category: a tool named
here may arrive by an MCP server, a CLI, or both. The first entry is REA,
entered on the Director's word of 2026-10-23 (`DECISIONS.md` 32). Status is `entered` (its document is at `tools/<id>/README.md`) or `—` (a row only, no document yet).

| tool | arrives by | licence | status | source | what it is |
| --- | --- | --- | --- | --- | --- |
| rea | MCP server and CLI | MIT | entered | morluto/rea | routes a target to the right reverse-engineering tool and returns evidence with its limits. |
| browser-worker | browser service (Playwright) | MIT | — | CopilotKit/openmuse apps/worker (alpha) | a browser that keeps a Chromium profile per person and hands control to the person on takeover; which sites, which profile and the takeover are held by the kernel |
| agent-computer | Linux container | MIT | — | CopilotKit/openmuse apps/computer (alpha) | a nonroot workspace kept between runs, with no host mounts, no credentials, no network from its terminal and a thirty-second limit per command |
| xerj | MCP server (stdio) and REST API | Apache-2.0 | entered | xerj-org/xerj | searches the person's files on their own machine (code by symbol, documents, logs, mail), so a role reads results, not whole files |
| comfyui | HTTP API of a separate local program | GPL-3.0 | entered | Comfy-Org/ComfyUI | runs image and video models from a node-graph workflow, reading local model weights and input media and writing its output to a folder you name, all on the machine; called as a separate program because of its licence, never copied in |
| openjutsu | Next.js app over a ComfyUI workflow | MIT | entered | D3voz/openjutsu | swaps a character in a video, keeping the camera, cuts, motion and soundtrack, on the person's own GPU with open-weight models; needs ComfyUI |
