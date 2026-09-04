"use client";

import { useState } from "react";

interface BookingFormProps {
  room: {
    id: string;
    price: number;
  };
}

export default function BookingForm({ room }: BookingFormProps) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const calculateTotalPrice = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays * room.price : 0;
  };

  const totalNights = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (totalNights() <= 0) {
      alert("Tanggal check-out harus lebih besar dari tanggal check-in.");
      return;
    }
    alert(`Pemesanan untuk ${totalNights()} malam berhasil disiapkan!`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
          Tanggal Check-in
        </label>
        <input
          type="date"
          required
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
          Tanggal Check-out
        </label>
        <input
          type="date"
          required
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>

      {totalNights() > 0 && (
        <div className="bg-gray-50 p-3 rounded text-sm space-y-1 text-gray-600 border border-gray-100">
          <div className="flex justify-between">
            <span>Durasi:</span>
            <span className="font-semibold text-gray-900">
              {totalNights()} malam
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total Bayar:</span>
            <span className="font-bold text-orange-600">
              Rp {calculateTotalPrice().toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-sm transition text-sm shadow cursor-pointer mt-2"
      >
        Pesan Sekarang
      </button>
    </form>
  );
}
