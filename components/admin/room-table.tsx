import Image from "next/image";
import Link from "next/link";
import { getRooms } from "@/lib/data";
import DeleteRoomButton from "@/components/admin/delete-room-button";

export default async function RoomTable() {
  const rooms = await getRooms();

  if (!rooms.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        Belum ada data kamar. Silakan tambah kamar baru.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-sm border border-gray-200">
      <table className="w-full text-sm text-left text-gray-600">
        <thead className="text-xs uppercase bg-gray-50 text-gray-700 border-b border-gray-200">
          <tr>
            <th className="px-6 py-4">Image</th>
            <th className="px-6 py-4">Room Name</th>
            <th className="px-6 py-4">Capacity</th>
            <th className="px-6 py-4">Price / Night</th>
            <th className="px-6 py-4">Amenities</th>
            <th className="px-6 py-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rooms.map((room) => (
            <tr key={room.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">
                <div className="relative w-20 h-14 rounded overflow-hidden">
                  <Image
                    src={room.image || "/hero.jpg"}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900">
                {room.name}
              </td>
              <td className="px-6 py-4">{room.capacity} Person(s)</td>
              <td className="px-6 py-4 font-medium text-orange-600">
                Rp {room.price.toLocaleString("id-ID")}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1">
                  {room.roomAmenities.map((item) => (
                    <span
                      key={item.id}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded"
                    >
                      {item.amenities.name}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex justify-center gap-3">
                  <Link
                    href={`/admin/room/edit/${room.id}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Edit
                  </Link>
                  <DeleteRoomButton id={room.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
