"use client";

import { deleteRoom } from "@/lib/action";
import { useTransition } from "react";

export default function DeleteRoomButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Apakah Anda yakin ingin menghapus kamar ini?")) {
      startTransition(async () => {
        await deleteRoom(id);
      });
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="text-red-600 hover:underline font-medium cursor-pointer disabled:opacity-50"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
