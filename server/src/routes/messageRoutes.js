const express = require("express");
const router = express.Router();
const {
  createMessage,
  getMessages,
  deleteMessage,
  unreadMessages,
  markMessagesRead,
  getNotificationId,
  forwardMessage,
  replyToMessage,
} = require("../controllers/messageController.js");
const { upload } = require("../middleware/multer.middlewear.js");
// Adjust the path as necessary
const result = upload.fields([
  { name: "image" },
  { name: "document" },
  { name: "video" },
]);
router.post("/postmessages", result, createMessage);
router.get("/getmessages/:userId1/:userId2", getMessages);
router.get("/unread-messages/:userId", unreadMessages);
router.get("/mark-messages-read/:userId", markMessagesRead);
// Route to forward a message
router.post("/forward", forwardMessage);

// Route to reply to a message
router.post("/reply", replyToMessage);

router.delete("/delmessages/:id", deleteMessage);
router.get("/getNotificationId", getNotificationId);
// router.get("/notifications/:senderId/:recipientId", getNotificationId);
module.exports = router;
