import slackClient from "../api/slackClient.js";
import { channelId } from "../config/env.js";
import { logSuccess, logError } from "../utils/logger.js";

/**
 * Retrieves recent messages from a Slack channel.
 */
async function retrieveMessages(limit = 10) {
  try {
    const res = await slackClient.get("/conversations.history", {
      params: {
        channel: channelId,
        limit,
      },
    });

    if (res.data.ok) {
      const messages = res.data.messages;
      logSuccess(`Retrieved ${messages.length} messages`);
      messages.forEach((msg, idx) => {
        console.log(`[${idx + 1}] ts: ${msg.ts}, text: ${msg.text}`);
      });
      return messages;
    } else {
      logError("Slack API error", res.data.error);
    }
  } catch (error) {
    logError("Exception retrieving messages", error);
  }
}

export default retrieveMessages;
