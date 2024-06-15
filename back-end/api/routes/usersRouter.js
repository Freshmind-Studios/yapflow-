const router = require("express").Router();
const UsersController = require("../controllers/usersController");

const { requireAuth } = require("../middlewares/authMiddleware");

router.get("/:userId", requireAuth, UsersController.user);

module.exports = router;