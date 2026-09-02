import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAmenities } from "@/lib/data";
import CreateRoomForm from "@/components/admin/create-room-form";

export default async function CreateRoomPage() {
  const session = await auth();

  if (!session || session.user?.role !== "admin") {
    redirect("/");
  }

  const amenities = await getAmenities();

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 mt-20">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Add New Room</h1>
        <p className="text-gray-500 text-sm mt-1">
          Masukkan rincian tipe kamar baru dan tentukan fasilitasnya.
        </p>
      </div>

      <CreateRoomForm amenities={amenities} />
    </div>
  );
}
