import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

const getRating = async (ctx: Koa.ParameterizedContext) => {
    ctx.response.type = "application/json";
    ctx.response.body = JSON.stringify({});
};

router.get("/rating", getRating);
app.use(router.routes());

app.listen(8080);
