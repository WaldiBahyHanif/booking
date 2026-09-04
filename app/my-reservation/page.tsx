import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUserReservations } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function MyReservationPage() {
  const session = await auth();

  if (!session || !session.user?.id) {
    redirect("/sign-in");
  }

  const reservations = await getUserReservations(session.user.id);

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 pt-28">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Reservations</h1>
        <p className="text-gray-500 text-sm mt-1">
          Daftar riwayat kamar yang telah Anda pesan.
        </p>
      </div>

      {reservations.length === 0 ? (
        <div className="text-center py-16 bg-white border border-gray-200 rounded-sm">
          <p className="text-gray-500 text-sm mb-4">
            Anda belum memiliki reservasi kamar.
          </p>
          <Link
            href="/room"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-5 rounded-sm transition"
          >
            Cari Kamar Sekarang
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-sm border border-gray-200">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs uppercase bg-gray-50 text-gray-700 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Room</th>
                <th className="px-6 py-4">Check-In</th>
                <th className="px-6 py-4">Check-Out</th>
                <th className="px-6 py-4">Total Biaya</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {reservations.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-12 rounded overflow-hidden shrink-0">
                        <Image
                          src={item.room.image || "/hero.jpg"}
                          alt={item.room.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-semibold text-gray-900">
                        {item.room.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {new Date(item.startDate).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(item.endDate).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4 font-semibold text-orange-600">
                    Rp {item.price.toLocaleString("id-ID")}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium">
                      Confirmed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
