import { signIn } from "@/auth";
import { FaGoogle } from "react-icons/fa6";

interface LoginButtonProps {
  redirectUrl?: string;
}

export function LoginGoogleButton({ redirectUrl }: LoginButtonProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: redirectUrl || "/" });
      }}
    >
      <button
        type="submit"
        className="flex items-center justify-center gap-3 w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-6 text-base rounded-sm cursor-pointer transition shadow-sm"
      >
        <FaGoogle size={20} />
        <span>Sign in with Google</span>
      </button>
    </form>
  );
}
