import axios from "axios";
import { slackToken } from "../config/env.js";

const slackClient = axios.create({
  baseURL: "https://slack.com/api",
  headers: {
    Authorization: `Bearer ${slackToken}`,
    "Content-Type": "application/json",
  },
});

export default slackClient;
