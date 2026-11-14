An open-source foundation model for candlestick price data, sampling possible future price paths.

## What it is

An open-source foundation model for candlestick price data, trained on
more than 45 exchanges. Given a ticker's recent candles it samples possible
future price paths. Its open sizes are mini (4.1M parameters), small (24.7M,
fine on ordinary hardware) and base (102.3M); the large one is not public.
It places no order and gives no advice: it only returns sampled paths.

## The package

Source github.com/shiyu-coder/Kronos; licence MIT. There is no tagged
release: the repository's main branch stood at commit 67b630e on 2026-04-13.
Its paper is arXiv 2508.02739, accepted at AAAI 2026. The open weights are on
Hugging Face under NeoQuasar. Those are the version, the commit, the sizes
and the paper as handed over, and are stated as what was handed over,
nothing more.

## What it reads

Candle data the person supplied, or a market-data source the person names.
Nothing else.

## What it never does here

It places no order and gives no advice. It returns sampled price paths; what
is done with them is the person's decision, with execution the Gate's step
and never the agent's. No account, brokerage or exchange is connected by it.

## Scope

A foundation model over candlestick price data that samples possible future price paths from a ticker's recent candles.

## Its use here

The finance Delegate's reading of price paths before a decision. It arrives
as a Python library run on the machine, its open weights taken from Hugging
Face. It is not built or used yet.
