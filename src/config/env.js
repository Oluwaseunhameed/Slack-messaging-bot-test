import dotenv from "dotenv";
dotenv.config();

// Export environment variables
export const slackToken = process.env.SLACK_BOT_TOKEN;
export const channelId = process.env.CHANNEL_ID;

if (!slackToken || !channelId) {
  throw new Error("❌ Missing SLACK_BOT_TOKEN or CHANNEL_ID in your .env file");
}
