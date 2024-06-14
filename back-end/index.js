// environment variables
require("dotenv").config();

// dependencies
const express = require("express");
const mongoose = require("mongoose");
// options
const options = require("./options");

// initialization
const app = express();
const websocket = require("express-ws")(app);

// middlewares
app.use(express.json());
app.use(require("helmet")());
app.use(require("compression")());
app.use(require("cors")(options.cors));
app.use(require("morgan")(options.morgan));
app.use(require("express-session")(options.session));
app.use(require("express-rate-limit")(options.rateLimit));

// routes
app.use("/auth", require("./routes/authRouter"));
app.use("/user", require("./routes/userRouter"));
app.use("/yappies", require("./routes/yappiesRouter"));
app.use("/yaps", require("./routes/yapsRouter"));
app.use("/session", require("./routes/sessionRouter"));

// start
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("connected to mongodb")
		app.listen(process.env.PORT, () => {
			console.log(`server is running on port ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.error("failed to connect to mongodb:", error);
	});

// export
module.exports = {
	websocket // to access websocket instance
};