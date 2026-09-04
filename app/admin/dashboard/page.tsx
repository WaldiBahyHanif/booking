import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getDashboardStats, getAllReservations } from "@/lib/data";
import Image from "next/image";
import { FaBed, FaCalendarCheck, FaMoneyBillWave } from "react-icons/fa";

export default async function AdminDashboardPage() {
  const session = await auth();

  // Proteksi rute khusus admin
  if (!session || session.user?.role !== "admin") {
    redirect("/");
  }

  const [stats, reservations] = await Promise.all([
    getDashboardStats(),
    getAllReservations(),
  ]);

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4 pt-28">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">
          Pantau ringkasan metrik dan aktivitas reservasi seluruh tamu.
        </p>
      </div>

      {/* Kartu Ringkasan Metrik */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <FaBed size={22} />
          </div>
          <div>
            <span className="text-xs uppercase text-gray-400 font-semibold tracking-wider block">
              Total Kamar
            </span>
            <span className="text-2xl font-bold text-gray-900">
              {stats.totalRooms}
            </span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
            <FaCalendarCheck size={20} />
          </div>
          <div>
            <span className="text-xs uppercase text-gray-400 font-semibold tracking-wider block">
              Total Reservasi
            </span>
            <span className="text-2xl font-bold text-gray-900">
              {stats.totalReservations}
            </span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
            <FaMoneyBillWave size={22} />
          </div>
          <div>
            <span className="text-xs uppercase text-gray-400 font-semibold tracking-wider block">
              Total Pendapatan
            </span>
            <span className="text-2xl font-bold text-gray-900">
              Rp {stats.totalRevenue.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </div>

      {/* Tabel Seluruh Reservasi Masuk */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">
            Daftar Transaksi Reservasi
          </h2>
        </div>

        {reservations.length === 0 ? (
          <div className="text-center py-12 text-gray-400 text-sm">
            Belum ada transaksi reservasi yang tercatat.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs uppercase bg-gray-50 text-gray-700 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4">Tamu</th>
                  <th className="px-6 py-4">Kamar</th>
                  <th className="px-6 py-4">Check-In</th>
                  <th className="px-6 py-4">Check-Out</th>
                  <th className="px-6 py-4">Total Bayar</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {reservations.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-100 shrink-0">
                          <Image
                            src={item.user.image || "/hero.jpg"}
                            alt={item.user.name || "User"}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {item.user.name || "Tanpa Nama"}
                          </div>
                          <div className="text-xs text-gray-400">
                            {item.user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.room.name}
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
                    <td className="px-6 py-4 font-bold text-orange-600">
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
    </div>
  );
}
