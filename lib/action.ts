"use server";

import { signIn, signOut } from "@/auth";

export async function loginWithGoogle(redirectUrl?: string) {
  await signIn("google", { redirectTo: redirectUrl || "/" });
}

export async function logoutUser() {
  await signOut({ redirectTo: "/" });
}
