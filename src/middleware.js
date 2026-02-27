import { NextResponse } from "next/server";
import * as jose from 'jose'

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/admin/")) {
    console.log(request);
    const url = request.nextUrl.clone();
    // jose.SignJWT()
    // url.pathname = "/dest";
    // return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }
}
