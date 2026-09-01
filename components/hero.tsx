import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Gambar Latar Belakang */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg" // Sesuaikan ekstensi file jika fotomu hero.jpeg
          alt="hero image"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Lapisan Hitam Transparan (Overlay) agar teks terbaca jelas */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Teks dan Tombol di Tengah Layar */}
      <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-3 capitalize">
          Book your luxury room
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Get special offer just for you today. Nikmati pengalaman menginap
          mewah dengan fasilitas terbaik.
        </p>

        <div className="flex gap-5">
          <Link
            href="/room"
            className="bg-orange-400 text-white hover:bg-orange-500 py-2.5 px-6 md:px-10 text-lg font-semibold rounded-sm hover:scale-105 hover:shadow-lg transition-transform"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-orange-400 text-white hover:bg-orange-400 py-2.5 px-6 md:px-10 text-lg font-semibold rounded-sm hover:scale-105 hover:shadow-lg transition-transform"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
