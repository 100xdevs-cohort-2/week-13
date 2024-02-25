import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { bookRouter } from "./routes/blog";

export const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.route("/api/v1/", userRouter);
app.route("/api/v1/blog", bookRouter);

export default app;
