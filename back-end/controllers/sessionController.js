const UserService = require("../services/userService");
const YappieService = require("../services/yappieService");

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
                case "yappie_create":
                    const {yappieId} = await YappieService.createYappie([req.session.userId, msg.users]);
                    await UserService.updateUser(req.session.userId, { yappieId });
                    break;
                case "change_status":
                    await UserService.updateUser(req.session.userId, { status: msg.status });
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
