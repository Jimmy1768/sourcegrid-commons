A self-hosted social media manager that schedules and publishes posts to the accounts a person connects.

## What it is

A self-hosted social media manager. A person connects the accounts it may reach through each platform's own official login; it schedules and publishes posts across those accounts, and reads back their analytics. A post goes out only on the person's word, per post or per campaign, as the Marketing Delegate's rules set. It runs as a service on the person's own machine, reached over its API.

## The package

source github.com/gitroomhq/postiz; licence AGPL-3.0, its licence file the GNU AGPL version 3. Latest release v2.26.0; the repository's main branch stood at commit 132859f on 2026-11-14. Those are the release and the commit as handed over, and are stated as what was handed over, nothing more.

## What it reads

The posts the person schedules, and the analytics of the accounts they connected, taken through each platform's own official interface.

## What it never does here

Because it is AGPL-3.0 it is only ever called as a separate service over its API; none of its code goes into the commons or a Recipe. It reaches only the accounts the person connected, through those platforms' own official logins: it never scrapes, and never touches an account the person did not connect. A post goes out only on the person's word. Using it unchanged for the person's own posts carries no publishing condition; if anyone ever changes it and offers it to others over a network, those changes have to be published.

## Scope

A self-hosted service that schedules and publishes a person's posts to the accounts they connect, and reads back their analytics.

## Its use here

The Marketing Delegate's posting, and its analytics feed the experiment Skill, where a post is the change and reach is the measure. It arrives as a separate service called over its API. It is not built or used yet.
