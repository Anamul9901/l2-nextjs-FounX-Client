import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //   const user = {
  //     name: "Anamul",
  //     token: "asdfsdaf",
  //     role: "USER",
  //   };

  const user = undefined;

  if (user?.role) {
    return NextResponse.next();
  } else {
    console.log("Authentication");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/admin"],
};
