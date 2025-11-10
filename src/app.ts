import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import { fromNodeHeaders, toNodeHandler } from "better-auth/node";
import { auth } from "./utils/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(
  cors({
    origin: "http://localhost:4000/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api/me", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  return res.json(session);
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
