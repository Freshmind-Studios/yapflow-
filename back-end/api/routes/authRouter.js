const router = require("express").Router();
const AuthController = require("../controllers/authController");

const { requireAuth } = require("../middlewares/authMiddleware");

router
  .post("/", AuthController.auth)
  .delete("/", requireAuth, AuthController.remove)
module.exports = router;