import Image from "next/image";
import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";

interface AmenityItem {
  id: string;
  amenities: {
    name: string;
  };
}

interface RoomProps {
  room: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    capacity: number;
    roomAmenities: AmenityItem[];
  };
}

export default function RoomCard({ room }: RoomProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition">
      <div className="relative w-full h-56">
        <Image
          src={room.image || "/hero.jpg"}
          alt={room.name}
          fill
          className="object-cover"
        />
        <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2.5 py-1 rounded flex items-center gap-1.5 shadow-sm">
          <FaUserFriends className="text-orange-500" />
          <span>{room.capacity} Orang</span>
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
          {room.name}
        </h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {room.description}
        </p>

        {/* Fasilitas */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {room.roomAmenities.slice(0, 3).map((item) => (
            <span
              key={item.id}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded"
            >
              {item.amenities.name}
            </span>
          ))}
          {room.roomAmenities.length > 3 && (
            <span className="text-xs text-gray-400 py-0.5">
              +{room.roomAmenities.length - 3} lainnya
            </span>
          )}
        </div>

        {/* Harga & Tombol Aksi */}
        <div className="mt-auto pt-5 flex items-center justify-between border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400 block">Mulai dari</span>
            <span className="text-lg font-bold text-orange-600">
              Rp {room.price.toLocaleString("id-ID")}
            </span>
            <span className="text-xs text-gray-500"> / malam</span>
          </div>

          <Link
            href={`/room/${room.id}`}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-sm transition"
          >
            Pesan
          </Link>
        </div>
      </div>
    </div>
  );
}
