import { prisma } from "@libs/prisma";
import { NextResponse } from "next/server";

type AuthHookBody = {
  email: string;
  secret: string;
};

const POST = async (req: Request) => {
  console.log("request to /api/auth/hook");
  const { email, secret }: AuthHookBody = await req.json();

  if (secret !== process.env.AUTH0_HOOK_SECRET) {
    return new Response("You must provide the secret 🤫", {
      status: 403,
    });
  }

  if (email) {
    await prisma.user.create({
      data: { email },
    });
    return NextResponse.json({
      message: `User with email: ${email} has been created successfully!`,
    });
  }
};

export { POST };
