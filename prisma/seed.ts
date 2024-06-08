import { hashSync } from "bcrypt";
import { prisma } from "@libs/prisma";

const SAMPLE_USERS = ["sampleUser1", "sampleUser2", "sampleUser3"];
const SAMPLE_TASKS = ["task1", "task2", "task3"];

const generateHashedPassword = (index: number): string => {
  const salt = 12;
  const nextThree = ((start: number) => {
    return `${start}${start + 1}${start + 2}`;
  })(index + 1);

  return hashSync(`smaple${nextThree}`, salt);
};

const main = async () => {
  const users = await prisma.user.createManyAndReturn({
    data: SAMPLE_USERS.map((user, index) => ({
      email: `${user}@test.com`,
      hashedPassword: generateHashedPassword(index),
    })),
  });

  users.forEach(async (user, index) => {
    const authorId = user.id;

    await prisma.task.createMany({
      data: SAMPLE_TASKS.map((task) => ({
        title: `sample ${task} by User${index + 1}`,
        description: `This is a description for sample task1 by User${
          index + 1
        }`,
        done: task === "task2",
        authorId,
      })),
    });
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
