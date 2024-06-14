const router = require("express").Router();
const YapsController = require("../controllers/yapsController");

const { requireAuth } = require("../middlewares/authMiddleware");

router.get("/:yapId", requireAuth, YapsController.yap);
router.get("/:yapId/zones", requireAuth, YapsController.zones);

module.exports = router;