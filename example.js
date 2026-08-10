#!/usr/bin/env node
/**
 * onlyfans-chat-autoresponder-example
 * -----------------------------------------------------------------------------
 * Minimal EXAMPLE: auto-reply to inbound fan chats with an AI chatter
 * assistant, using the DirtyDialogues chatting API.
 *
 * This file demonstrates the *shape* of the integration. The endpoint path and
 * the response field read below are PLACEHOLDERS — confirm the real contract in
 * the live docs before using this in production:
 *     https://dirtydialogues.com/docs
 *
 * Get your API key:  https://dirtydialogues.com
 *
 * Requires Node.js 18+ (uses the built-in global `fetch`; no dependencies).
 */

'use strict';

// --- Configuration (read from environment) -----------------------------------
// Copy .env.example to .env and fill these in. Never commit real keys.
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL || 'https://api.dirtydialogues.com';

if (!API_KEY) {
  console.error(
    'Missing API_KEY. Get one at https://dirtydialogues.com and set it in your .env'
  );
  process.exit(1);
}

// --- Call the DirtyDialogues chatting API ------------------------------------
/**
 * Ask the AI chatter assistant to draft a reply to a single inbound fan message.
 *
 * @param {Object} inbound                 A normalized inbound chat message.
 * @param {string} inbound.fanId           Stable fan id from your platform.
 * @param {string} inbound.message         The fan's latest message text.
 * @param {Array<{role: string, content: string}>} [inbound.history]
 *                                         Prior turns, oldest first (optional).
 * @returns {Promise<string>}              The suggested reply text.
 */
async function generateReply(inbound) {
  // TODO: Replace this path with the real endpoint from
  //       https://dirtydialogues.com/docs
  const endpoint = `${BASE_URL}/v1/chat/autoreply`; // <-- PLACEHOLDER PATH

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    // The request body below reflects a typical shape; check the docs for the
    // exact field names the live API expects.
    body: JSON.stringify({
      fan_id: inbound.fanId,
      message: inbound.message,
      history: inbound.history || [],
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(
      `API request failed: ${response.status} ${response.statusText} ${detail}`.trim()
    );
  }

  const data = await response.json();

  // NOTE: `data.reply` is a PLACEHOLDER field name for illustration only.
  // Read the real response schema in the docs and pull the correct field.
  return data.reply; // <-- PLACEHOLDER FIELD
}

// --- Demo --------------------------------------------------------------------
async function main() {
  // In production this payload arrives from your platform's inbound webhook or
  // message queue. Here we simulate a single inbound fan chat message.
  const inbound = {
    fanId: 'fan_example_123',
    message: 'Hey! Are you around to chat today?',
    history: [],
  };

  console.log('Inbound fan message:', inbound.message);

  const reply = await generateReply(inbound);

  // In production you would send `reply` back through your platform's
  // send-message API, OR queue it for a human chatter to approve first.
  console.log('AI chatter suggested reply:', reply);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
