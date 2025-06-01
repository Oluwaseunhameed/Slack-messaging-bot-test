import slackClient from "../api/slackClient.js";
import { channelId } from "../config/env.js";
import { logSuccess, logError } from "../utils/logger.js";

/**
 * Edits a message previously posted in a channel.
 * @param {string} ts - The timestamp of the message to edit.
 * @param {string} newText - The new text content of the message.
 */
async function editMessage(ts, newText) {
  try {
    const res = await slackClient.post("/chat.update", {
      channel: channelId,
      ts,
      text: newText,
    });

    if (res.data.ok) {
      logSuccess("Message edited successfully");
      return res.data.ts;
    } else {
      logError("Slack API error", res.data.error);
    }
  } catch (error) {
    logError("Exception editing message", error);
  }
}

export default editMessage;
