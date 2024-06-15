const router = require("express").Router();
const CommunitiesRouter = require("../controllers/communitiesController");

const { requireAuth } = require("../middlewares/authMiddleware");

router.get("/:yapId", requireAuth, CommunitiesRouter.community);

module.exports = router;