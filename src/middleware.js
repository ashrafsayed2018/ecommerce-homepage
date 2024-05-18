import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  // Parse cookies from the request
  const token = cookies().get("token");

  if (
    token &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register")
  ) {
    console.log(token, "correct token");
    // User is logged in and trying to access login or register route, redirect them
    return NextResponse.redirect(new URL("/", request.url)); // Change "/dashboard" to the desired redirect route
  }

  return NextResponse.next();
}
