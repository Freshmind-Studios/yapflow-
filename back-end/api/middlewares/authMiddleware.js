module.exports = {
    requireAuth: async (req, res, next) => {
        if (!req.session.userId) {
          return res.status(401).send({ message: "Unauthorized session." });
        }
        
        next();
    }
}