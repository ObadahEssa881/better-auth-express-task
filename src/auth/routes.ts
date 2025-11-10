// import express from "express";
// import { auth } from "../utils/auth";

// const router = express.Router();

// // Prebuilt handlers
// router.post("/register", auth.handler.register());
// router.post("/login", auth.handler.login());
// router.get("/me", auth.handler.me());

// // Example custom route
// router.get(
//   "/hello",
//   auth.handler.custom(async (req, res, ctx) => {
//     const user = await ctx.user();
//     res.json({ message: `Hello, ${user?.email || "guest"}!` });
//   })
// );

// export default router;
