import { authkitProxy } from "@workos-inc/authkit-nextjs";
import {
  NextResponse,
  type NextRequest,
  type NextFetchEvent,
} from "next/server";
const auth = authkitProxy();
export default function proxy(request: NextRequest, event: NextFetchEvent) {
  if (
    !process.env.WORKOS_CLIENT_ID ||
    !process.env.WORKOS_API_KEY ||
    !process.env.WORKOS_COOKIE_PASSWORD
  ) {
    if (
      request.nextUrl.pathname.startsWith("/app") ||
      ["/sign-in", "/sign-up", "/callback"].includes(request.nextUrl.pathname)
    )
      return NextResponse.redirect(new URL("/setup", request.url));
    return NextResponse.next();
  }
  return auth(request, event);
}
export const config = {
  matcher: [
    "/app/:path*",
    "/account",
    "/join/:path*",
    "/sign-in",
    "/sign-up",
    "/callback",
  ],
};
