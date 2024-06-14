import {
  getSession,
  withMiddlewareAuthRequired,
} from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/api/graphql", "/task/list"],
};

export default withMiddlewareAuthRequired(async function middleware(
  req: NextRequest
) {
  const res = NextResponse.next();
  const session = await getSession(req, res);

  return res;
});
