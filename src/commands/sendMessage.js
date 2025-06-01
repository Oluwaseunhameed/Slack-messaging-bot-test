import slackClient from "../api/slackClient.js";
import { channelId } from "../config/env.js";
import { logSuccess, logError } from "../utils/logger.js";

async function sendMessage(text) {
  try {
    const res = await slackClient.post("/chat.postMessage", {
      channel: channelId,
      text,
    });

    if (res.data.ok) {
      logSuccess("Message sent");
      return res.data.ts;
    } else {
      logError("Slack API error", res.data.error);
    }
  } catch (error) {
    logError("Exception sending message", error);
  }
}

export default sendMessage;
