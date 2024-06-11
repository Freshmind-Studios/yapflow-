module.exports = {
    session: {
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
          maxAge: 24 * 60 * 60 * 1000
        }
    },
    cors: {
        origin: true,
        credentials: true
    },
    morgan: "dev",
    rateLimit: {
        windowMs: 15 * 60 * 1000,
        max: 100,
    }
}