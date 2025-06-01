# Slack Messaging Bot (Assignment)

A Node.js project using Slack API to send, schedule, edit, retrieve, and delete messages in a channel. Built for clean architecture and production-readiness.

## 📦 Features

- ✅ OAuth/token-based authentication.
- ✅ Send & schedule messages.
- ✅ Retrieve recent messages.
- ✅ Edit existing messages.
- ✅ Delete messages.
- ✅ Modular, DRY, and testable code.

## 🔧 Setup

### 1. Clone and install dependencies
```bash
git clone https://github.com/yourname/slack-messaging-bot.git
cd slack-messaging-bot
npm install
```

### 2. Create a .env file
```bash
SLACK_BOT_TOKEN=xoxb-your-token
CHANNEL_ID=CXXXXXXX
```

### 3. Run a command
Edit index.js to try a function, then:
```bash
node index.js
```

## 🧪 Test Instructions
To verify each functionality:

*   **Send a message**: Calls `sendMessage()` → check channel for new post.
*   **Schedule a message**: `scheduleMessage('...', future_timestamp)` → appears later.
*   **Retrieve messages**: `retrieveMessages()` → logs past posts.
*   **Edit a message**: `editMessage(ts, 'New text')` → confirms change.
*   **Delete a message**: `deleteMessage(ts)` → removes post.
Replace `ts` with actual timestamp returned from `sendMessage`.

## 🛡 Scopes Needed
Ensure these are added in OAuth:

*   `chat:write`
*   `chat:read`
*   `chat:delete`