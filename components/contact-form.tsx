export default function ContactForm() {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      <form>
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          {/* Input Nama */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light outline-none"
            />
          </div>

          {/* Input Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light outline-none"
            />
          </div>

          {/* Input Subject */}
          <div className="md:col-span-2">
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light outline-none"
            />
          </div>

          {/* Input Message */}
          <div className="md:col-span-2">
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message *"
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light outline-none resize-none"
            ></textarea>
          </div>
        </div>

        {/* Tombol Submit */}
        <button
          type="button"
          className="mt-6 w-full py-4 text-center font-semibold text-white bg-orange-400 hover:bg-orange-500 rounded-sm cursor-pointer transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
