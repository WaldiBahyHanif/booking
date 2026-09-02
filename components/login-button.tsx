import { loginWithGoogle, logoutUser } from "@/lib/action";
import { FaGoogle } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";

interface LoginButtonProps {
  redirectUrl?: string;
}

export function LoginGoogleButton({ redirectUrl }: LoginButtonProps) {
  // Bind parameter agar tetap menjadi Server Action yang valid
  const handleLogin = loginWithGoogle.bind(null, redirectUrl);

  return (
    <form action={handleLogin}>
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

export function LogoutButton() {
  return (
    <form action={logoutUser}>
      <button
        type="submit"
        className="flex items-center gap-2 py-2 px-3 text-red-500 hover:text-red-700 transition"
      >
        <IoLogOutOutline size={20} />
        <span>Sign Out</span>
      </button>
    </form>
  );
}
