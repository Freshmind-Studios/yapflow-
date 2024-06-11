const router = require("express").Router();
const SessionController = require("../controllers/sessionController");

router.ws("/", SessionController.connection);

module.exports = router;