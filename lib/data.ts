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
