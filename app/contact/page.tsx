import type { Metadata } from "next";
import HeaderSection from "@/components/header-section";
import ContactForm from "@/components/contact-form";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us",
};

export default function ContactPage() {
  return (
    <div>
      <HeaderSection
        title="Contact Us"
        subTitle="Hubungi kami untuk pertanyaan, reservasi khusus, atau bantuan layanan."
      />

      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Informasi Kontak */}
          <div>
            <h1 className="text-lg text-gray-500 mb-3">Contact Us</h1>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Get in touch today
            </h2>
            <p className="text-gray-700 py-5 leading-relaxed">
              Tim resepsionis kami siap melayani dan menjawab setiap kebutuhan
              informasi menginap Anda selama 24 jam.
            </p>

            <ul className="space-y-6 pt-4">
              {/* Email */}
              <li className="flex gap-5 items-center">
                <div className="bg-gray-200 p-3 rounded-sm shadow-sm text-gray-800">
                  <IoMailOutline size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email :</h4>
                  <p className="text-gray-600">contact@hotelbooking.com</p>
                </div>
              </li>

              {/* Telepon */}
              <li className="flex gap-5 items-center">
                <div className="bg-gray-200 p-3 rounded-sm shadow-sm text-gray-800">
                  <IoCallOutline size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone Number :</h4>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </li>

              {/* Alamat */}
              <li className="flex gap-5 items-center">
                <div className="bg-gray-200 p-3 rounded-sm shadow-sm text-gray-800">
                  <IoLocationOutline size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Address :</h4>
                  <p className="text-gray-600">
                    Jl. Malioboro No. 123, Yogyakarta, Indonesia
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form Kontak */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
