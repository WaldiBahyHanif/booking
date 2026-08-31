import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          {/* Kolom 1: Logo & Deskripsi */}
          <div>
            <Link href="/" className="mb-10 block">
              <Image src="/logo.png" width={128} height={49} alt="logo" />
            </Link>
            <p className="text-gray-400">
              Platform reservasi kamar hotel modern, nyaman, dan terpercaya
              untuk liburan terbaik Anda.
            </p>
          </div>

          {/* Kolom 2: Links (Navigasi & Legal) */}
          <div className="flex gap-20">
            <div className="flex-1 md:flex-none">
              <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
              <ul className="space-y-5 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/room" className="hover:text-white">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 md:flex-none">
              <h4 className="mb-8 text-xl font-semibold text-white">Legal</h4>
              <ul className="space-y-5 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Payment Method
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Kolom 3: Newsletter Form */}
          <div>
            <h4 className="mb-8 text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-gray-400">
              Dapatkan diskon dan penawaran eksklusif setiap minggu.
            </p>
            <form className="mt-5">
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full p-3 rounded-sm bg-white text-gray-800 outline-none"
                />
              </div>
              <button
                type="button"
                className="w-full p-3 font-bold text-white bg-orange-400 rounded-sm hover:bg-orange-500 text-center"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-700 py-8 text-center text-base text-gray-400">
        &copy; {new Date().getFullYear()} Booking Hotel. All rights reserved.
      </div>
    </footer>
  );
}
