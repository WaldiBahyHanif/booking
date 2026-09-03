import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import { getRoomById, getAmenities } from "@/lib/data";
import EditRoomForm from "@/components/admin/edit-room-form";

export default async function EditRoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();

  if (!session || session.user?.role !== "admin") {
    redirect("/");
  }

  const { id } = await params;
  const [room, amenities] = await Promise.all([
    getRoomById(id),
    getAmenities(),
  ]);

  if (!room) {
    notFound();
  }

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 pt-28">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Edit Room</h1>
        <p className="text-gray-500 text-sm mt-1">
          Perbarui informasi kamar atau pilihan fasilitas.
        </p>
      </div>

      <EditRoomForm room={room} amenities={amenities} />
    </div>
  );
}
