const router = require("express").Router();

router
	.use("/auth", require("./routes/authRouter"))
	.use("/users", require("./routes/usersRouter"))
	.use("/me", require("./routes/meRouter"))
	.use("/chats", require("./routes/chatsRouter"))
	.use("/communities", require("./routes/communitiesRouter"))

module.exports = router;