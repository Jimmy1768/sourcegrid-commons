A local PDF reader that turns a PDF into text a role can read.

## What it is

Poppler's `pdftotext`, which writes a PDF's text out page by page. `-layout` keeps the columns and table rows where they stand on the page, and `-f` and `-l` choose the pages. Two programs from the same package go with it: `pdfinfo` reports the page count and whether the PDF is encrypted, and `pdffonts` reports whether there is any text layer at all.

## The package

`source gitlab.freedesktop.org/poppler/poppler; licence GPL-2.0-or-later. Release 25.06.0, as installed by Homebrew's poppler formula on the Director's machine on 2026-11-17.` Stated as what was handed over, nothing more.

## What it reads

Only a PDF that the Mandate's reads name, on the machine. Which file it may open is the Gate's to hold, never the role's.

## What it never does here

It reaches no network. It is called as a separate local program, and none of its code goes into the commons or a Recipe. It never returns an empty page as if the PDF said nothing. When `pdffonts` finds no text layer (a scan), or `pdfinfo` reports the PDF encrypted, the tool says so by name and gives no text.

## Scope

Text from PDFs that carry a text layer. A scanned PDF needs OCR first, which this tool does not do. Tables come out as lines of text in their layout and are not rebuilt as tables: a row that wraps or shifts can lose its first column, so a builder that parses rows checks them against the page.

## Others considered

- pdfminer.six (MIT) and pdfplumber (MIT, built on it, better at tables): Python libraries that would have to be installed inside the work.
- pypdf (BSD-3-Clause): weaker text order on multi-column pages.
- PyMuPDF (AGPL-3.0): fast, but under a licence that reaches further than a separate program's.
- Apache Tika (Apache-2.0): needs a Java runtime.
- docling (MIT): rebuilds layout and tables with models. Heavier, and the candidate if tables must come back as tables.
- OCRmyPDF (MPL-2.0): adds a text layer to scans. The later answer for image-only PDFs, not taken now.

## Its use here

Any role the Domain Map gives it, builder or reviewer. The first use is a spec whose reads list a PDF already held, with the builder extracting from it. Gridpath's place names were extracted from 166 official curriculum PDFs with this same program, by a session's own hand.

## Its checks

A PDF listed in the spec's reads is read through the tool. A PDF that is not listed is refused. A PDF the tool cannot read is reported as unreadable, never returned as empty text.
