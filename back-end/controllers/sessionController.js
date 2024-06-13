const UserService = require("../services/userService");

module.exports = {
    connection: (ws, req) => {
        if (!req.session.userId) {
            return ws.close();
        }

        ws.on("message", async (msg) => {
            switch (msg.function) {
                case "activity":
                    await UserService.updateUser(req.session.userId, { lastActive: Date.now() });
                    break;
                default:
                    break;
            }
        });

        ws.send(JSON.stringify({ function: "activity" }));
        setInterval(() => {
            ws.send(JSON.stringify({ function: "activity" }));
        }, 10000);
    },
};
