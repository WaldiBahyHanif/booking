import type { Metadata } from "next";
import Image from "next/image";
import HeaderSection from "@/components/header-section";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who we are and our story",
};

export default function AboutPage() {
  return (
    <div>
      {/* Memanggil Header Section */}
      <HeaderSection
        title="About Us"
        subTitle="Mengenal lebih dekat visi dan dedikasi kenyamanan kami."
      />

      {/* Konten Utama About Us */}
      <div className="max-w-screen-xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Kolom Kiri: Gambar About */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/about-image.jpg" // Pastikan nama file sesuai dengan yang di folder public
              alt="About image"
              fill
              className="object-cover rounded-sm"
            />
          </div>

          {/* Kolom Kanan: Teks Cerita, Visi, dan Misi */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h1>
            <p className="text-gray-700 py-2 leading-relaxed">
              Kami berdedikasi untuk memberikan pengalaman menginap terbaik
              dengan perpaduan kenyamanan modern dan keramahan pelayanan khas
              Indonesia. Setiap kamar dirancang untuk memastikan istirahat Anda
              sempurna.
            </p>

            <ul className="space-y-6 pt-6 text-gray-800">
              {/* Visi */}
              <li className="flex gap-5 items-start">
                <div className="flex-none mt-1 text-orange-500">
                  <IoEyeOutline size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Menjadi pilihan akomodasi utama yang memberikan standar
                    kenyamanan dan keramahan tertinggi bagi setiap tamu.
                  </p>
                </div>
              </li>

              {/* Misi */}
              <li className="flex gap-5 items-start">
                <div className="flex-none mt-1 text-orange-500">
                  <IoLocateOutline size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Menyediakan fasilitas modern, menjaga kebersihan dan
                    keamanan optimal, serta memberikan pelayanan hangat dan
                    profesional secara konsisten.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
