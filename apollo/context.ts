import { PrismaClient } from "@prisma/client";
import { prisma } from "@libs/prisma";
import { Claims, getSession } from "@auth0/nextjs-auth0";

export type Context = {
  user?: Claims;
  accessToken?: string;
  prisma: PrismaClient;
};

export async function createContext(): Promise<Context> {
  const session = await getSession();

  // if the user is not logged in, omit returning the user and accessToken
  if (!session) return { prisma };

  const { user, accessToken } = session;

  return {
    user,
    accessToken,
    prisma,
  };
}
