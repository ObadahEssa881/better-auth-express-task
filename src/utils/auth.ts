import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { username } from "better-auth/plugins";
import { lastLoginMethod } from "better-auth/plugins";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: { enabled: true },
  cors: {
    origin: "*",
    credentials: true,
  },
  trustedOrigins: ["*"],
  plugins: [
    username(),
    lastLoginMethod({
      storeInDatabase: true,
    }),
  ],
});
