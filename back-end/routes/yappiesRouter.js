const router = require("express").Router();
const YappiesController = require("../controllers/yappiesController");

const { requireAuth } = require("../middlewares/authMiddleware");

router.get("/:yappieId", requireAuth, YappiesController.get);
router.get("/:yappieId/messages", requireAuth, YappiesController.chats);

module.exports = router;