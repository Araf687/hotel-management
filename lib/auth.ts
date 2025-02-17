"use server";

import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation"; // client-side redirect in App Router
import { NextRequest, NextResponse } from "next/server";

import { JWTExpired } from "jose/errors";

import api from "@/config/api";
import { ENV_VARIABLES } from "./constants";

const key = new TextEncoder().encode(ENV_VARIABLES.SECRET_KEY);

// Encrypt the user data and create a JWT
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 days from now")
    .sign(key);
}

// Decrypt JWT and extract payload
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    if (error instanceof JWTExpired) {
      return { payload: null, expired: true }; // Handle expired JWT
    }
    throw error;
  }
}

// Login function - encrypts user session and redirects to homepage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = async (userData: any, remember: boolean) => {
  const expires = new Date(Date.now() + 864000 * 10000); // Expiry time

  const session = await encrypt({ userData, expires });

  (await cookies()).set("session", session, {
    expires: remember ? expires : undefined,
    httpOnly: true,
    sameSite: "strict",
  });

//   redirect("/dashboard"); // Properly using redirect
};

// Logout function - clears the session and redirects to login page
export async function logout(token: string) {
  try {
    await api.post("logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Logout successful");
  } catch (error) {
    console.log("Logout error:", error);
  } finally {
    (await cookies()).set("session", "", { expires: new Date(0) });
    redirect("/")
  }
}

// Retrieve session from cookies
export async function getSession() {
  const session = (await cookies()).get("session")?.value;
  if (session) {
    return await decrypt(session); // Decrypt session data
  }
  return null;
}

// Update session expiration if necessary (can be used to refresh session)
export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return NextResponse.redirect(new URL("/login", request.url)); // Redirect if no session

  const parsed = await decrypt(session);

  // Update session expiration time
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next(); // Continue to the next request
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}