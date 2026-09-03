"use server";

import { signIn, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Autentikasi
export async function loginWithGoogle(redirectUrl?: string) {
  await signIn("google", { redirectTo: redirectUrl || "/" });
}

export async function logoutUser() {
  await signOut({ redirectTo: "/" });
}

// Simpan Kamar Baru
export async function saveRoom(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const capacity = Number(formData.get("capacity"));
  const image = (formData.get("image") as string) || "/hero.jpg";
  const amenities = formData.getAll("amenities") as string[];

  if (!name || !description || !price || !capacity) {
    return { error: "Semua kolom wajib diisi." };
  }

  try {
    await prisma.room.create({
      data: {
        name,
        description,
        price,
        capacity,
        image,
        roomAmenities: {
          create: amenities.map((amenityId) => ({
            amenitiesId: amenityId,
          })),
        },
      },
    });
  } catch (error) {
    console.error("Gagal membuat kamar:", error);
    return { error: "Gagal menyimpan data kamar ke database." };
  }

  revalidatePath("/admin/room");
  revalidatePath("/room");
  revalidatePath("/");
  redirect("/admin/room");
}

// Hapus Kamar
export async function deleteRoom(id: string) {
  try {
    await prisma.room.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Gagal menghapus kamar:", error);
    return { error: "Gagal menghapus kamar." };
  }

  revalidatePath("/admin/room");
  revalidatePath("/room");
  revalidatePath("/");
}

// Update Kamar
export async function updateRoom(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = Number(formData.get("price"));
  const capacity = Number(formData.get("capacity"));
  const image = (formData.get("image") as string) || "/hero.jpg";
  const amenities = formData.getAll("amenities") as string[];

  if (!name || !description || !price || !capacity) {
    return { error: "Semua kolom wajib diisi." };
  }

  try {
    // 1. Hapus relasi amenities lama kamar ini
    await prisma.roomAmenities.deleteMany({
      where: { roomId: id },
    });

    // 2. Perbarui data kamar sekaligus masukkan amenities baru
    await prisma.room.update({
      where: { id },
      data: {
        name,
        description,
        price,
        capacity,
        image,
        roomAmenities: {
          create: amenities.map((amenityId) => ({
            amenitiesId: amenityId,
          })),
        },
      },
    });
  } catch (error) {
    console.error("Gagal mengupdate kamar:", error);
    return { error: "Gagal memperbarui kamar." };
  }

  revalidatePath("/admin/room");
  revalidatePath("/room");
  revalidatePath("/");
  redirect("/admin/room");
}
