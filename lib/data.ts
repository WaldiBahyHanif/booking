import { prisma } from "@/lib/prisma";

export async function getRooms() {
  try {
    const rooms = await prisma.room.findMany({
      include: {
        roomAmenities: {
          include: {
            amenities: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return rooms;
  } catch (error) {
    console.error("Failed to fetch rooms:", error);
    return [];
  }
}

export async function getAmenities() {
  try {
    const amenities = await prisma.amenities.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return amenities;
  } catch (error) {
    console.error("Failed to fetch amenities:", error);
    return [];
  }
}
export async function getRoomById(id: string) {
  try {
    const room = await prisma.room.findUnique({
      where: { id },
      include: {
        roomAmenities: {
          include: {
            amenities: true,
          },
        },
      },
    });
    return room;
  } catch (error) {
    console.error("Failed to fetch room by id:", error);
    return null;
  }
}

export async function getUserReservations(userId: string) {
  try {
    const reservations = await prisma.reservation.findMany({
      where: { userId },
      include: {
        room: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return reservations;
  } catch (error) {
    console.error("Gagal mengambil data reservasi:", error);
    return [];
  }
}

// Mengambil seluruh data reservasi untuk sisi admin
export async function getAllReservations() {
  try {
    const reservations = await prisma.reservation.findMany({
      include: {
        room: true,
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return reservations;
  } catch (error) {
    console.error("Gagal mengambil seluruh reservasi:", error);
    return [];
  }
}

// Menghitung metrik ringkasan dashboard
export async function getDashboardStats() {
  try {
    const [totalRooms, totalReservations, reservations] = await Promise.all([
      prisma.room.count(),
      prisma.reservation.count(),
      prisma.reservation.findMany({
        select: { price: true },
      }),
    ]);

    const totalRevenue = reservations.reduce(
      (acc, curr) => acc + curr.price,
      0,
    );

    return {
      totalRooms,
      totalReservations,
      totalRevenue,
    };
  } catch (error) {
    console.error("Gagal mengambil ringkasan dashboard:", error);
    return {
      totalRooms: 0,
      totalReservations: 0,
      totalRevenue: 0,
    };
  }
}
