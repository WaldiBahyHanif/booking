import Hero from "@/components/hero";
import RoomCard from "@/components/room-card";
import { getRooms } from "@/lib/data";
import Link from "next/link";

export default async function Home() {
  const rooms = await getRooms();
  const featuredRooms = rooms.slice(0, 3);

  return (
    <main>
      <Hero />

      {/* Bagian Kamar Pilihan */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Pilihan Terbaik
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">
                Kamar Favorit
              </h2>
            </div>
            <Link
              href="/room"
              className="text-orange-600 hover:text-orange-700 font-semibold text-sm underline"
            >
              Lihat Semua Kamar &rarr;
            </Link>
          </div>

          {featuredRooms.length === 0 ? (
            <div className="text-center py-12 text-gray-500 bg-white rounded border border-gray-200">
              Belum ada data kamar yang ditambahkan.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
