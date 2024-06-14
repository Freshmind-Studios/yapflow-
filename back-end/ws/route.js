const router = require("express").Router();

router
	.ws("/session", require("./"));

module.exports = router;