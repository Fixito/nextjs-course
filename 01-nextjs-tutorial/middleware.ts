import { NextResponse } from "next/server.js";

// Par défaut, s'appelle sur toutes les routes
export function middleware(request: Request) {
  return NextResponse.redirect(new URL("/", request.url));
}

// `Matcher` permet de filtrer les middlewares pour qu'ils s'exécutent sur des chemins spécifiques.
export const config = {
  matcher: ["/about/:path*"],
};
