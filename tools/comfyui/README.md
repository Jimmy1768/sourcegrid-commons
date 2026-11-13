The standard open-source runner for image and video models, called only as a separate program.

## What it is

The standard open-source runner for image and video models, on one machine. It is a node-graph workflow engine: a workflow graph of nodes is run over the models the person has put on disk, and an HTTP API drives the same engine, so a program can queue a workflow and collect what it produced. It reads model weights and input media from folders the person names, and writes its output — images, video, audio — to a folder the person names. Nothing leaves the machine.

## The package

Source github.com/Comfy-Org/ComfyUI; licence GPL-3.0; no version is pinned here, since the entry lists a tool rather than a release.

## What it reads

The model weights staged on disk and the input media the person puts in its input folder, in the target it is pointed at.

## What it never does here

Because it is GPL-3.0, it is only ever called as a separate program over its API; none of its code, nodes or workflows is copied into the commons or a Recipe. It reaches no network: no model or custom node is fetched while it is used. Its output folder is the person's own.

## Scope

image and video model runs on the person's own machine, from a workflow graph.

## Its use here

The Marketing Delegate's video and image work, and any other role that runs an open model on the person's machine. It arrives as a separate program called over its API; the licence check comes before it serves a paying customer. It is not built or used yet: it waits for when models run on our own GPUs.
