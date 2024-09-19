import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const AuthRoutes = ["/login", "/register"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("pathname", pathname);
  //   const user = {
  //     name: "Anamul",
  //     token: "asdfsdaf",
  //     role: "USER",
  //   };

  const user = undefined;

  //   if (user?.role) {
  //     return NextResponse.next();
  //   } else {
  //     console.log("Authentication");
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();  // if user null then AuthRoutes['/login', '/register'] equal pathname then redirect this
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/admin", "/login", "/register"],
};
