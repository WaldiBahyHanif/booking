import { getRoomById } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaUserFriends, FaCheckCircle } from "react-icons/fa";
import { auth } from "@/auth";
import Link from "next/link";
import BookingForm from "@/components/booking-form";

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const room = await getRoomById(id);
  const session = await auth();

  if (!room) {
    notFound();
  }

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Kolom Kiri: Detail Kamar */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {room.name}
            </h1>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center gap-1.5 bg-orange-50 text-orange-700 px-3 py-1 rounded-full font-medium">
                <FaUserFriends /> Kapasitas {room.capacity} Orang
              </span>
            </div>
          </div>

          <div className="relative w-full h-[380px] sm:h-[450px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={room.image || "/hero.jpg"}
              alt={room.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Tentang Kamar Ini
            </h3>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {room.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Fasilitas Kamar
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {room.roomAmenities.map((item: any) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 p-3 rounded text-sm text-gray-700"
                >
                  <FaCheckCircle className="text-orange-500 shrink-0" />
                  <span>{item.amenities?.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Card Reservasi */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm sticky top-28">
            <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-gray-100">
              <div>
                <span className="text-2xl font-bold text-orange-600">
                  Rp {room.price.toLocaleString("id-ID")}
                </span>
                <span className="text-xs text-gray-500 block">per malam</span>
              </div>
            </div>

            {session ? (
              <BookingForm room={{ id: room.id, price: room.price }} />
            ) : (
              <div className="text-center py-4 space-y-4">
                <p className="text-sm text-gray-600">
                  Silakan masuk terlebih dahulu untuk melakukan reservasi kamar
                  ini.
                </p>
                <Link
                  href="/sign-in"
                  className="block w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 rounded-sm transition text-sm shadow-sm text-center"
                >
                  Sign In dengan Google
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
