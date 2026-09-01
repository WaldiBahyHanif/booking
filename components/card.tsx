import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

export default function Card() {
  return (
    <div className="bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm overflow-hidden">
      {/* Gambar Kamar */}
      <div className="h-[260px] w-auto relative">
        <Image
          src="/hero.jpg" // Menggunakan gambar yang ada di folder public untuk sementara
          alt="Room image"
          fill
          className="object-cover rounded-t-sm"
        />
      </div>

      {/* Detail Kamar */}
      <div className="p-8">
        <h4 className="text-2xl font-medium mb-2">
          <Link
            href="#"
            className="hover:text-gray-800 transition duration-150"
          >
            Luxury Room
          </Link>
        </h4>

        <h4 className="text-2xl mb-7">
          <span className="font-semibold text-gray-600">Rp 1.500.000</span>
          <span className="text-gray-400 text-sm"> /night</span>
        </h4>

        {/* Kapasitas dan Tombol Booking */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-600">
            <IoPeopleOutline size={20} />
            <span>2 People</span>
          </div>

          <Link
            href="#"
            className="px-6 md:px-10 py-2.5 md:py-3 font-semibold text-white bg-orange-400 rounded-sm hover:bg-orange-500 transition duration-150 text-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
