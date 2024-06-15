const router = require("express").Router();
const ChatsController = require("../controllers/chatsController");

const { requireAuth } = require("../middlewares/authMiddleware");

router.get("/:yappieId", requireAuth, ChatsController.chat);

module.exports = router;