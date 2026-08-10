# OnlyFans Chat Autoresponder — Example Integration

An open-source developer example that shows how to build **OnlyFans chat automation**: auto-reply to inbound fan chats with an **AI chatter bot**, powered by the [DirtyDialogues](https://dirtydialogues.com) chatting API.

> **This is an EXAMPLE integration.** It demonstrates the *shape* of a chat autoresponder — how you wire an inbound fan message to an AI chatter assistant and get a drafted reply back. The endpoint paths and response fields in the code are **placeholders**. For the real request/response contract, authentication, and rate limits, see the live docs: **[https://dirtydialogues.com/docs](https://dirtydialogues.com/docs)**.

---

## What it does

This repo contains a single, well-commented script that:

1. Receives an inbound fan chat message (simulated here; in production this comes from your platform's webhook or message queue).
2. Sends it to the DirtyDialogues chatting API with your API key.
3. Gets back an AI-drafted reply from the chatter assistant.
4. Prints the suggested reply — which your app can send automatically or queue for a human chatter to approve.

It is intentionally minimal: no framework, no database, no external dependencies. It is a starting point you adapt to your own stack.

## Why — the agency use case

OnlyFans management agencies handle a high volume of inbound direct messages across many creator inboxes. Human chatters cannot watch every conversation around the clock, and slow first replies lose conversations. This example demonstrates the common pattern agencies use to keep response times low:

- **Inbound** — a fan message arrives.
- **Assist** — your app forwards it to the DirtyDialogues chatting API, which drafts a context-aware reply.
- **Deliver** — your app either sends the reply automatically (full **OnlyFans chat automation**) or routes it to a human chatter for review (human-in-the-loop).

The point of the **AI chatter bot** here is to draft, not to replace judgment — you decide how much of the loop is automated.

## How it works

```
inbound fan message  ─▶  your app  ─▶  DirtyDialogues chatting API  ─▶  drafted reply  ─▶  send or review
```

## Requirements

- **Node.js 18+** — the example uses the built-in global `fetch`, so there are no dependencies to install.
- **A DirtyDialogues API key** — **[get one at https://dirtydialogues.com](https://dirtydialogues.com)**.

## Install

```bash
git clone https://github.com/<your-org>/onlyfans-chat-autoresponder-example.git
cd onlyfans-chat-autoresponder-example
# No npm install needed — the example uses only Node.js built-ins.
```

## Configure

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

`.env`:

```dotenv
# Your DirtyDialogues API key — get one at https://dirtydialogues.com
API_KEY=your_api_key_here

# API base URL — confirm the correct value in https://dirtydialogues.com/docs
BASE_URL=https://api.dirtydialogues.com
```

Your real `.env` is already listed in `.gitignore` — never commit API keys.

## Usage

Run the example:

```bash
node autoresponder.js
```

It simulates one inbound fan message, calls the chatting API, and prints the AI chatter assistant's suggested reply. See [`autoresponder.js`](./autoresponder.js) for the fully commented flow, including the exact spot where you swap the placeholder endpoint for the real one.

## → Get your API key

This example **requires a DirtyDialogues API key** — without one, the call in `autoresponder.js` will not return a reply.

**→ Get your API key at [https://dirtydialogues.com](https://dirtydialogues.com)**

## Docs & live endpoints

The code uses clearly-marked placeholder endpoints and field names so you can read the integration at a glance. This is an **example** — the real request/response schema, authentication, and limits live in the official docs:

**[https://dirtydialogues.com/docs](https://dirtydialogues.com/docs)**

## License & disclaimer

MIT — see [LICENSE](./LICENSE).

This is an unofficial, developer-facing example. "OnlyFans" is a trademark of its respective owner; this project is not affiliated with, endorsed by, or sponsored by it. It provides no fan messaging platform of its own — it demonstrates a client integration with the DirtyDialogues chatting API.