import slackClient from "../api/slackClient.js";
import { channelId } from "../config/env.js";
import { logSuccess, logError } from "../utils/logger.js";

async function scheduleMessage(text, postAtTimestamp) {
  try {
    const res = await slackClient.post("/chat.scheduleMessage", {
      channel: channelId,
      text,
      post_at: postAtTimestamp,
    });

    if (res.data.ok) {
      logSuccess("Message scheduled");
      return res.data.scheduled_message_id;
    } else {
      logError("Slack API error", res.data.error);
    }
  } catch (error) {
    logError("Exception scheduling message", error);
  }
}

export default scheduleMessage;
