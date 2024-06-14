const router = require("express").Router();
const AuthController = require("../controllers/authController");

const { requirePayload, requireAuth } = require("../middlewares/authMiddleware");

router
  .post("/register", requirePayload, AuthController.register)
  .post("/login", requirePayload, AuthController.login)
  .get("/logout", requireAuth, AuthController.logout)
  .get("/status", requireAuth, AuthController.getStatus)
  .get("/session", requireAuth, AuthController.getSession)

module.exports = router;