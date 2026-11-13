A Next.js front end over a ComfyUI workflow that swaps a character in a video.

## What it is

A video and a character photo go in, and the main person in the video is replaced, or their hair, clothes or objects change, or they are put somewhere else — keeping the camera, the cuts, the motion and the soundtrack. It runs open-weight models on the person's own GPU: MiniMax H3 for the video, SAM 3.1 to track people, Qwen3-VL 8B to describe pictures and shots. It needs ComfyUI beneath it.

## The package

Source github.com/D3voz/openjutsu; licence MIT; no version is pinned here. Each model it runs carries its own licence, which is checked separately.

## What it reads

The video and the character photo the person gives it, and the models staged for ComfyUI.

## What it never does here

Its code is never copied into the commons or a Recipe; it is used over ComfyUI as a separate program. It is only ever used with the person's own likeness, or with footage and characters they hold the rights to. Each model's own licence is checked before it serves a paying customer. Nothing leaves the machine.

## Scope

swapping a character in a video on the person's own GPU, with ComfyUI beneath it.

## Its use here

The Marketing Delegate's video work. It is not built or used yet: it waits for when models run on our own GPUs.
