const router = require("express").Router();

router
	.use("/auth", require("./routes/authRouter"))
	.use("/user", require("./routes/userRouter"))
	.use("/yappies", require("./routes/yappiesRouter"))
	.use("/yaps", require("./routes/yapsRouter"))

module.exports = router;