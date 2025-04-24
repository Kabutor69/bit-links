import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["800"],
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <main className="bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen">
      <section className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-5xl font-bold ${poppins.className} text-purple-800 mb-4`}>
            Get in Touch
          </h1>
          <p className="text-lg text-gray-700">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-purple-50 p-6 rounded-xl hover:shadow-xl transition-shadow">
              <div className="text-purple-600 text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-600">
                069 Nigha Street<br />
                Nighaville, Nighaland
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl hover:shadow-xl transition-shadow">
              <div className="text-purple-600 text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">
                pisionz69@gmail.com
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl hover:shadow-xl transition-shadow">
              <div className="text-purple-600 text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 6:09 AM - 6:09 PM<br />
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
