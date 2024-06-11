module.exports = {
    requireAuth: async (req, res, next) => {
        if (!req.session.userId) {
          return res.send({ valid: false });
        }
        
        next();
    },
      requirePayload: async (req, res, next) => {
        if (!req.body.tag || !req.body.password) {
          return res.send({ valid: false });
        }
        
        next();
    }
}