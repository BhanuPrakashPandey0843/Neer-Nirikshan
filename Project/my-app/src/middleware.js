// my-app/src/middleware.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecretkey";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Protect dashboard and payment routes
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/payment")) {
    const token = req.cookies.get("auth_token")?.value;

    // If no token → redirect to login
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      const decoded = jwt.verify(token, SECRET);

      // ✅ If user is unpaid → restrict dashboard, send to /payment
      if (pathname.startsWith("/dashboard") && !decoded.paid) {
        return NextResponse.redirect(new URL("/payment", req.url));
      }

      // ✅ If user is already paid but tries to access /payment → send to dashboard
      if (pathname.startsWith("/payment") && decoded.paid) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    } catch (err) {
      console.error("JWT verification failed:", err);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/payment/:path*"], // apply to both dashboard and payment
};
