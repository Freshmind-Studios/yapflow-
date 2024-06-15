const router = require("express").Router();
const MeController = require("../controllers/meController");

const { requireAuth } = require("../middlewares/authMiddleware");

router
  .get("/friends", requireAuth, MeController.friends)
  .get("/chats", requireAuth, MeController.chats);

module.exports = router;