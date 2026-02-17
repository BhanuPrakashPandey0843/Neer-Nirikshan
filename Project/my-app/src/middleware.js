// src/middleware.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const rawSecret = process.env.JWT_SECRET;
const SECRET = rawSecret ? new TextEncoder().encode(rawSecret) : null;

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/dashboard") || pathname.startsWith("/payment")) {
    if (!SECRET) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    const token = req.cookies.get("auth_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      const { payload } = await jwtVerify(token, SECRET);

      if (pathname.startsWith("/dashboard") && !payload.paid) {
        return NextResponse.redirect(new URL("/payment", req.url));
      }

      if (pathname.startsWith("/payment") && payload.paid) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    } catch (err) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/payment/:path*"],
};
