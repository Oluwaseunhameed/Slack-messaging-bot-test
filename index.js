import sendMessage from "./src/commands/sendMessage.js";
import scheduleMessage from "./src/commands/scheduleMessage.js";
import retrieveMessages from "./src/commands/retrieveMessages.js";
import editMessage from "./src/commands/editMessage.js";
import deleteMessage from "./src/commands/deleteMessage.js";

// How to use for testing purposes
(async () => {
  const ts = await sendMessage("Hello from the Slack Bot 2 !!");
  // await scheduleMessage('This will post later...', Math.floor(Date.now() / 1000) + 60);
  // await retrieveMessages();
  // await editMessage(ts, 'Updated text!');
  // await deleteMessage(ts);
})();
