import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname === "/diets/edit" ||
    req.nextUrl.pathname.startsWith("/diets-api") && req.method === "GET"
  ) {
    const session = await getToken({
      req,
      secret: process.env.SECRET || process.env.NEXTAUTH_SECRET,
      secureCookie:
        process.env.NEXTAUTH_URL?.startsWith("https://") ??
        !!process.env.VERCEL_URL,
    });

    if (!session)
      return NextResponse.rewrite(new URL("/api/auth/signin", req.url));
  }
  return NextResponse.next();
}
