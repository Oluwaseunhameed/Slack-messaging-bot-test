import slackClient from "../api/slackClient.js";
import { channelId } from "../config/env.js";
import { logSuccess, logError } from "../utils/logger.js";

/**
 * Deletes a message from a channel by timestamp.
 * @param {string} ts - The timestamp of the message to delete.
 */
async function deleteMessage(ts) {
  try {
    const res = await slackClient.post("/chat.delete", {
      channel: channelId,
      ts,
    });

    if (res.data.ok) {
      logSuccess("Message deleted successfully");
      return true;
    } else {
      logError("Slack API error", res.data.error);
    }
  } catch (error) {
    logError("Exception deleting message", error);
  }
}

export default deleteMessage;
