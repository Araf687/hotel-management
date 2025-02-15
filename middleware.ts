import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const session = await getSession();
  
  if (path.startsWith("/dashboard")) {
    console.log("Session:------------", session);
    if (!session?.userData) {
      const loginUrl = new URL( "/", request.url
      );
      // loginUrl.searchParams.set("from", encodeURIComponent(path));
      return NextResponse.redirect(loginUrl);
    }
  }
}