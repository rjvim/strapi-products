var jwt = require("jsonwebtoken");

module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        const start = Date.now();

        if (!ctx.headers["x-user-token"]) ctx.throw(403);

        console.log(
          "---- This be the timer -----",
          ctx.headers["x-user-token"],
          jwt.decode(ctx.headers["x-user-token"])["sub"]
        );

        await next();

        const delta = Math.ceil(Date.now() - start);

        ctx.set("X-Response-Time", delta + "ms");
      });
    },
  };
};
