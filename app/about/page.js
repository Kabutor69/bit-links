import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["800"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <main className=" bg-gradient-to-r from-purple-100 to-pink-100 mb-4 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-6 text-center">
        <h1 className={'text-5xl font-bold ${poppins.className} text-purple-800 leading-tight'}>
          About <span className="text-pink-600">BitLinks</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          BitLinks is your trusted platform for URL shortening and link management. We make sharing smarter, safer, and seamless — without the clutter.
        </p>
      </section>

      {/* Masquad Section */}
      <section className="container mx-auto px-6 py-16 bg-white rounded-xl shadow-lg">
        <h2 className={'text-3xl font-bold ${poppins.className} text-purple-800 text-center mb-6'}>
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed text-center">
          We aim to simplify link sharing by delivering a minimal, secure, and lightning-fast experience. No ads, no fluff — just powerful URL tools you can trust.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className={'text-3xl font-bold ${poppins.className} text-center text-purple-800 mb-12'}>
          Why Choose BitLinks?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl text-purple-600 mb-4">🚀</div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">Blazing Fast</h3>
            <p className="text-gray-600">
              Instant URL shortening with a performance-first infrastructure.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl text-purple-600 mb-4">🔒</div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">Enterprise Security</h3>
            <p className="text-gray-600">
              We use top-grade encryption and never track your personal data.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl text-purple-600 mb-4">💎</div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">Completely Free</h3>
            <p className="text-gray-600">
              Unlimited usage. No subscriptions. No hidden fees — ever.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="container mx-auto px-6 py-16 bg-purple-800 text-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className={'text-3xl font-bold ${poppins.className} mb-4'}>
            Get in Touch
          </h2>
          <p className="text-lg text-purple-100 leading-relaxed mb-6">
            Have a question, suggestion, or just want to say hi?
          </p>
          <a
            href="mailto:pisionz69@gmail.com"
            className="inline-block bg-pink-600 hover:bg-pink-500 transition-all transform hover:scale-105 px-8 py-4 rounded-lg font-bold text-white shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
