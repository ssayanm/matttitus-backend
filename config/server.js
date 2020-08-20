module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1341),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "1156b77fb949ea149e4a20cbee63ae55"),
    },
  },
});
