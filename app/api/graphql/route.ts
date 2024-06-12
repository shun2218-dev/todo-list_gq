import type { NextRequest } from "next/server";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type {
  ResolversParentTypes,
  QueryGetUserByIdArgs,
  QueryGetTasksByUserIdArgs,
  QueryGetTaskByIdArgs,
  MutationCreateTaskArgs,
  MutationUpdateTaskStatusArgs,
  MutationDeleteTaskArgs,
} from "@schema/__generated__/server/resolvers-types";
import { createContext } from "@schema/context";
import type { Context } from "@schema/context";

const schemaPath = join(process.cwd(), "/apollo/documents/schema.gql");
const typeDefs = readFileSync(schemaPath, { encoding: "utf-8" });
const resolvers = {
  Query: {
    users: (_: ResolversParentTypes["Query"], __: unknown, ctx: Context) =>
      ctx.prisma.user.findMany(),
    tasks: (_: ResolversParentTypes["Query"], __: unknown, ctx: Context) =>
      ctx.prisma.task.findMany({ orderBy: { createdAt: "asc" } }),
    categories: (_: ResolversParentTypes["Query"], __: unknown, ctx: Context) =>
      ctx.prisma.category.findMany(),
    getUserById: (
      _: ResolversParentTypes["Query"],
      args: QueryGetUserByIdArgs,
      ctx: Context
    ) => ctx.prisma.user.findFirst({ where: { ...args } }),
    getTasksByUserId: (
      _: ResolversParentTypes["Query"],
      args: QueryGetTasksByUserIdArgs,
      ctx: Context
    ) => ctx.prisma.task.findMany({ where: { ...args } }),
    getTaskById: (
      _: ResolversParentTypes["Query"],
      args: QueryGetTaskByIdArgs,
      ctx: Context
    ) => ctx.prisma.task.findFirst({ where: { ...args } }),
  },
  Mutation: {
    createTask: async (
      _: ResolversParentTypes["Mutation"],
      args: MutationCreateTaskArgs,
      ctx: Context
    ) => {
      if (!ctx.user) throw new Error("This action requires logged in");
      const currentUser = await ctx.prisma.user.findFirst({
        where: { email: ctx.user.email },
      });
      if (!currentUser) throw new Error("User not found");
      return ctx.prisma.task.create({
        data: { ...args, authorId: currentUser.id },
      });
    },
    updateTaskStatus: (
      _: ResolversParentTypes["Mutation"],
      { id, done }: MutationUpdateTaskStatusArgs,
      ctx: Context
    ) => ctx.prisma.task.update({ where: { id }, data: { done: !done } }),
    deleteTask: (
      _: ResolversParentTypes["Mutation"],
      { id }: MutationDeleteTaskArgs,
      ctx: Context
    ) => ctx.prisma.task.delete({ where: { id } }),
  },
};
const server = new ApolloServer<Context>({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {
  context: createContext,
});

export { handler as GET, handler as POST };
