# OnlyFans Chat Autoresponder — example integration

An open-source developer example that shows the pattern for **OnlyFans chat automation**: auto-drafting replies to inbound fan messages with an **AI chatter assistant**, on top of [DirtyDialogues](https://dirtydialogues.com) — the OnlyFans agency chat & CRM platform.

**[▶ Get started at dirtydialogues.com →](https://dirtydialogues.com)** · [Pricing](https://dirtydialogues.com/pricing)

---

> **This is an open-source example.** It demonstrates the *shape* of a chat autoresponder — how you wire an inbound fan message to an AI chatter assistant and get a drafted reply back. The endpoint paths and fields in the code are **illustrative placeholders**. DirtyDialogues is a managed platform, so head to **[dirtydialogues.com](https://dirtydialogues.com)** to get started.

## What it does

A single, well-commented script that:

1. Receives an inbound fan chat message (simulated here; in production it comes from your platform's webhook or message queue).
2. Passes it to an AI chatter assistant for a context-aware draft.
3. Prints the suggested reply — which your app can send automatically or route to a human chatter to approve.

Intentionally minimal: no framework, no database, no dependencies. A starting point you adapt to your own stack.

## Why — the agency use case

OnlyFans management agencies handle a high volume of inbound DMs across many creator inboxes. Human chatters can't watch every conversation around the clock, and slow first replies lose conversations. [DirtyDialogues](https://dirtydialogues.com) is the platform agencies use to keep response times low:

- **Inbound** — a fan message arrives.
- **Assist** — an AI chatter drafts a context-aware reply.
- **Deliver** — your team sends it automatically (full **OnlyFans chat automation**) or reviews it first (human-in-the-loop).

The **AI chatter bot** drafts, it doesn't replace judgment — you decide how much of the loop is automated.

## Requirements

- **Node.js 18+** — uses the built-in global `fetch`, no dependencies to install.

## About DirtyDialogues

[**DirtyDialogues**](https://dirtydialogues.com) is an OnlyFans agency platform for managing fan conversations at scale: unified inbox, mass DMs, automated & AI-assisted replies, team shifts, and analytics.

**[Get started →](https://dirtydialogues.com)** · **[Pricing →](https://dirtydialogues.com/pricing)**

## License

MIT. An independent open-source example.
