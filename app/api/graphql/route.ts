import { MutationDeleteTaskArgs } from "@/apollo/__generated__/client/operations-types";
import {
  MutationUpdateTaskStatusArgs,
  ResolversParentTypes,
} from "@/apollo/__generated__/server/resolvers-types";
import {
  QueryGetUserByIdArgs,
  MutationCreateTaskArgs,
  MutationCreateUserArgs,
  QueryGetTasksByUserIdArgs,
  QueryGetTaskByIdArgs,
} from "@/apollo/__generated__/server/resolvers-types";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const prisma = new PrismaClient();
const schemaPath = join(process.cwd(), "/apollo/documents/schema.gql");
const typeDefs = readFileSync(schemaPath, { encoding: "utf-8" });
const resolvers = {
  Query: {
    users: () => prisma.user.findMany(),
    tasks: () => prisma.task.findMany({ orderBy: { createdAt: "asc" } }),
    categories: () => prisma.category.findMany(),
    getUserById: (
      _: ResolversParentTypes["Query"],
      args: QueryGetUserByIdArgs
    ) => prisma.user.findFirst({ where: { ...args } }),
    getTasksByUserId: (
      _: ResolversParentTypes["Query"],
      args: QueryGetTasksByUserIdArgs
    ) => prisma.task.findMany({ where: { ...args } }),
    getTaskById: (
      _: ResolversParentTypes["Query"],
      args: QueryGetTaskByIdArgs
    ) => prisma.task.findFirst({ where: { ...args } }),
  },
  Mutation: {
    createUser: (
      _: ResolversParentTypes["Mutation"],
      args: MutationCreateUserArgs
    ) => prisma.user.create({ data: { ...args } }),

    createTask: (
      _: ResolversParentTypes["Mutation"],
      args: MutationCreateTaskArgs
    ) => {
      return prisma.task.create({ data: { ...args } });
    },
    updateTaskStatus: (
      _: ResolversParentTypes["Mutation"],
      { id, isDone }: MutationUpdateTaskStatusArgs
    ) => prisma.task.update({ where: { id }, data: { isDone } }),
    deleteTask: (
      _: ResolversParentTypes["Mutation"],
      { id }: MutationDeleteTaskArgs
    ) => prisma.task.delete({ where: { id } }),
  },
};
const server = new ApolloServer({
  resolvers,
  typeDefs,
});
const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
