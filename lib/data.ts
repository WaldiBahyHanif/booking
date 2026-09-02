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
