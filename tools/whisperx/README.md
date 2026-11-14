A local speech transcriber that timestamps every word and tells speakers apart.

## What it is

A local speech transcriber that turns an audio or video file the person
supplied into words, with a timestamp for each word, and tells speakers apart, so a
transcript can be cut by who is talking as well as by when. Nothing leaves the machine.

## The package

`source github.com/m-bain/whisperX; licence BSD-2-Clause. Latest release
v3.8.6; the repository's main branch stood at commit b904f02 on 2026-11-12.` Stated as what
was handed over, nothing more.

## What it reads

An audio or video file the person supplied, and local model weights.
Telling speakers apart needs a one-time Hugging Face token to fetch its diarization model;
after that it runs offline.

## What it never does here

Nothing leaves the machine; it is called as a separate local
program; none of its code goes into the commons or a Recipe.

## Scope

A local transcriber with word-level timestamps and speaker separation.

## Its use here

The Marketing Delegate's video work — the missing piece for cutting
between cameras in an interview, and what lets the video-edit Recipe run fully locally. It
is not built or used yet.
