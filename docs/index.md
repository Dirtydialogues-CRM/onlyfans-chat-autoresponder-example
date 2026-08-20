---
title: OnlyFans Chat Autoresponder — Example
description: Developer example for OnlyFans chat automation and AI chatter bot auto-replies using the DirtyDialogues chatting API.
---

# OnlyFans Chat Autoresponder (Example)

A minimal, open-source developer example for **OnlyFans chat automation** — auto-reply to inbound fan chats with an **AI chatter bot**, powered by the [DirtyDialogues chatting API](https://dirtydialogues.com).

## What this is

A single, well-commented script that takes an inbound fan message, calls the DirtyDialogues chatting API, and returns an AI-drafted reply. No framework, no dependencies — a starting point you adapt to your own stack.

## The agency use case

OnlyFans management agencies handle a high volume of direct messages across many creator inboxes. This example shows the standard pattern for keeping response times low: an inbound message goes to the AI chatter assistant, which drafts a context-aware reply that your app can send automatically or route to a human chatter for approval.

## Getting started

1. **Get your API key** → [https://dirtydialogues.com](https://dirtydialogues.com)
2. Copy `.env.example` to `.env` and set `API_KEY` and `BASE_URL`.
3. Run `node autoresponder.js` to see the auto-reply flow.

## Honest note

This is an **example** integration. The endpoints and response fields in the code are clearly-marked placeholders so you can read the shape of the flow. For the real request/response contract, authentication, and limits, use the DirtyDialogues platform.

## Links

- **Get an API key** → [https://dirtydialogues.com](https://dirtydialogues.com)
- **Live API docs** → [https://dirtydialogues.com](https://dirtydialogues.com)