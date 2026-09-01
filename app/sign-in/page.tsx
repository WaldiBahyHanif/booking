import type { Metadata } from "next";
import { LoginGoogleButton } from "@/components/login-button";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md mx-auto rounded-sm shadow-md p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Sign In</h1>
        <p className="font-medium text-gray-500 mb-6 text-sm">
          Sign in to your account to manage your booking
        </p>

        <div className="py-4 text-center">
          <LoginGoogleButton />
        </div>
      </div>
    </div>
  );
}
