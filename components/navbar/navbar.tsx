import Link from "next/link";
import Image from "next/image";
import Navlink from "@/components/navbar/navlink";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" width={128} height={49} alt="logo" priority />
        </Link>
        <Navlink session={session} />
      </div>
    </nav>
  );
}
