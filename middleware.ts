import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "./lib/admin/session";

// Страницы админки, доступные без сессии.
const PUBLIC_ADMIN_PATHS = ["/admin/login", "/admin/setup"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Защита админ-панели: без валидной сессии — на страницу входа.
  // Здесь проверяется только подпись и срок токена; блокировка пользователя
  // и sessionVersion проверяются на сервере в getAuth().
  if (
    pathname.startsWith("/admin") &&
    !PUBLIC_ADMIN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))
  ) {
    const token = request.cookies.get(SESSION_COOKIE)?.value;
    const session = token ? await verifySessionToken(token) : null;
    if (!session) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
