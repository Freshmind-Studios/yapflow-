const UserService = require("../services/userService");
const YapService = require("../services/yapService");
const YappieService = require("../services/yappieService");

module.exports = {
    connection: (ws, req) => {
        if (!req.session.userId) {
            return ws.close();
        }

        ws.on("message", async (msg) => {
            let user;
            switch (msg.function) {
                case "activity":
                    await UserService.updateUser(req.session.userId, { lastActive: Date.now() });
                    break;
                case "yappie_create":
                    const {yappieId} = await YappieService.createYappie([req.session.userId, msg.users]);
                    user = await UserService.getUser(req.session.userId);
                    user.yappies.push(yappieId);
                    await user.save();
                    break;
                case "yap_create":
                    const {yapId} = await YapService.createYap(msg.name, [req.session.userId]);
                    user = await UserService.getUser(req.session.userId);
                    user.yaps.push(yapId);
                    await user.save();
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
