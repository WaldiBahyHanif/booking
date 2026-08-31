import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Bagian Logo */}
        <Link href="/">
          <Image src="/logo.png" width={128} height={49} alt="logo" priority />
        </Link>

        {/* Nanti menu-menunya akan kita taruh di sini */}
      </div>
    </div>
  );
}
