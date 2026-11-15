Local FFmpeg tools for cutting, captioning, reframing and checking video, called as a separate program.

## What it is

Forty-two local FFmpeg tools with a machine-readable contract and an MCP server — probing a file, cutting it by segments, captions, reframing to an aspect and duration, loudness, exports for each platform, checking a finished file against a platform's rules, and a contact sheet. It is reached by its MCP server and its CLI, as a separate program.

## The package

Source github.com/kajisho5/ffmpeg-skill; licence MIT, latest release v3.8.20, npm package `ffmpeg-skill`. Needs only Python's standard library and FFmpeg 6.1 or later, and is tested on 6.1, 7.1, 8 and 9. Stated as what was handed over, nothing more.

## What it reads

The video and audio files the person supplied, and it writes its output to a folder they name. There is no cloud service and no API key, and nothing leaves the machine; only its optional speech engines download their model weights once, the first time they run.

## What it never does here

It is called as a separate program, and the registry holds a document and never a tool's code, so none of its code goes into the commons or a Recipe. The listing itself fetches no model weights.

## Scope

Listing only. Nothing is installed, downloaded, started or run, and no file is processed.

## Its use here

For the Marketing Delegate's video editing. A Delegate whose finished work is a video calls these tools, alongside WhisperX for transcription and the edit-video Skill. It is not built or used yet.
