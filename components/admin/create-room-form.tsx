"use client";

import { saveRoom } from "@/lib/action";
import Link from "next/link";
import { useState } from "react";

interface Amenity {
  id: string;
  name: string;
}

export default function CreateRoomForm({
  amenities,
}: {
  amenities: Amenity[];
}) {
  const [loading, setLoading] = useState(false);

  return (
    <form
      action={async (formData) => {
        setLoading(true);
        await saveRoom(formData);
        setLoading(false);
      }}
      className="bg-white p-6 sm:p-8 rounded-sm border border-gray-200 shadow-sm max-w-2xl mx-auto space-y-6"
    >
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Room Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="e.g. Executive Suite"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Price per Night (Rp)
          </label>
          <input
            type="number"
            name="price"
            placeholder="e.g. 750000"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Capacity (Person)
          </label>
          <input
            type="number"
            name="capacity"
            placeholder="e.g. 2"
            defaultValue={1}
            min={1}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Image URL or Path
        </label>
        <input
          type="text"
          name="image"
          defaultValue="/hero.jpg"
          placeholder="/hero.jpg or https://..."
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
        />
        <p className="text-xs text-gray-400 mt-1">
          Bisa gunakan path gambar lokal di folder public (contoh:{" "}
          <code>/hero.jpg</code> atau <code>/about-image.jpg</code>).
        </p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          rows={4}
          placeholder="Deskripsi fasilitas dan keunggulan kamar..."
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Select Amenities
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {amenities.map((item) => (
            <label
              key={item.id}
              className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer bg-gray-50 p-2.5 rounded border border-gray-100 hover:bg-gray-100"
            >
              <input
                type="checkbox"
                name="amenities"
                value={item.id}
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
              />
              <span>{item.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
        <Link
          href="/admin/room"
          className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-sm transition"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-medium py-2 px-6 rounded-sm transition text-sm shadow-sm cursor-pointer"
        >
          {loading ? "Saving..." : "Save Room"}
        </button>
      </div>
    </form>
  );
}
