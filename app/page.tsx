import Hero from "@/components/hero";
import Main from "@/components/main";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Bagian Judul Daftar Kamar */}
      <div className="mt-16 text-center">
        <h1 className="text-4xl font-bold uppercase text-gray-800">
          Room and Rates
        </h1>
        <p className="py-3 text-gray-500 max-w-xl mx-auto px-4">
          Pilihan kamar terbaik dengan fasilitas lengkap dan kenyamanan maksimal
          untuk masa inap Anda.
        </p>
      </div>

      {/* Menampilkan Kartu Kamar */}
      <Main />
    </div>
  );
}
