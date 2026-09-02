import Link from "next/link";
import RoomTable from "@/components/admin/room-table";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminRoomPage() {
  const session = await auth();

  // Proteksi halaman: hanya admin yang bisa membuka
  if (!session || session.user?.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 mt-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Rooms</h1>
          <p className="text-gray-500 text-sm mt-1">
            Daftar seluruh tipe kamar dan pengelolaan tarif.
          </p>
        </div>
        <Link
          href="/admin/room/create"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-sm transition text-sm shadow-sm"
        >
          + Add New Room
        </Link>
      </div>

      <RoomTable />
    </div>
  );
}
