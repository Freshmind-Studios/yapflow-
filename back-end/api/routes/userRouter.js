const router = require("express").Router();
const UserController = require("../controllers/userController");

const { requireAuth } = require("../middlewares/authMiddleware");

router.get("/:userId", requireAuth, UserController.get);
router.get("/id/:tag", requireAuth, UserController.tag);

module.exports = router;