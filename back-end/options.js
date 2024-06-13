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
        origin: ["http://localhost:3000", "http://100.81.97.77:3000"],
        credentials: true
    },
    morgan: "dev",
    rateLimit: {
        windowMs: 1 * 60 * 1000,
        max: 100,
    }
}