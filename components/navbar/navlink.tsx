"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoClose, IoMenu } from "react-icons/io5";
import { LogoutButton } from "@/components/login-button";
import type { Session } from "next-auth";

export default function Navlink({ session }: { session: Session | null }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100"
      >
        {open ? <IoClose size={32} /> : <IoMenu size={32} />}
      </button>

      <div className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}>
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50 md:flex-row md:items-center md:space-x-8 md:p-0 md:mt-0 md:border-0 md:bg-white">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 text-gray-800 hover:text-orange-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 px-3 text-gray-800 hover:text-orange-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/room"
              className="block py-2 px-3 text-gray-800 hover:text-orange-500"
            >
              Room
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-3 text-gray-800 hover:text-orange-500"
            >
              Contact
            </Link>
          </li>

          {/* Hanya tampil jika user login */}
          {session && (
            <li>
              <Link
                href="/my-reservation"
                className="block py-2 px-3 text-gray-800 hover:text-orange-500"
              >
                My Reservation
              </Link>
            </li>
          )}

          {/* Hanya tampil jika login sebagai admin */}
          {session?.user?.role === "admin" && (
            <>
              <li>
                <Link
                  href="/admin/dashboard"
                  className="block py-2 px-3 text-gray-800 hover:text-orange-500"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/room"
                  className="block py-2 px-3 text-gray-800 hover:text-orange-500"
                >
                  Manage Room
                </Link>
              </li>
            </>
          )}

          {/* Tombol Sign In atau Profil & Logout */}
          <li className="pt-2 md:pt-0">
            {session ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    src={session.user?.image || "/hero.jpg"}
                    alt="avatar"
                    width={36}
                    height={36}
                    className="rounded-full border border-gray-300 object-cover"
                  />
                  <span className="text-xs font-medium lowercase text-gray-600 hidden md:inline">
                    {session.user?.name?.split(" ")[0]}
                  </span>
                </div>
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="inline-block py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm"
              >
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
