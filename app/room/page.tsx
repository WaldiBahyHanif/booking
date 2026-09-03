import { getRooms } from "@/lib/data";
import RoomCard from "@/components/room-card";

export default async function RoomPage() {
  const rooms = await getRooms();

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 pt-28">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Daftar Kamar
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Pilih tipe kamar yang sesuai dengan preferensi menginap dan kenyamanan
          liburan Anda.
        </p>
      </div>

      {rooms.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          Saat ini belum ada kamar yang tersedia.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      )}
    </div>
  );
}
