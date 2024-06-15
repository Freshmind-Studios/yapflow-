const UsersService = require("../services/usersService");
const ChatsService = require("../services/chatsService");

module.exports = { 
    friends: async (req, res) => {
        const user = await UsersService.getUserById(req.session.userId);

        return res.send([...user.friends]);
    },
    chats: async (req, res) => {
        const chats = await ChatsService.getChats(req.session.userId);

        return res.send([...chats]);
    },
};