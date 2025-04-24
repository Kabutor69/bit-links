import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["800"],
  subsets: ["latin"],
});

export default function Features() {
  return (
    <main className="bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className={`text-4xl md:text-5xl font-bold ${poppins.className} text-purple-800 mb-6`}>
          Powerful Features for
          <span className="text-pink-600 block">Better Link Management</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover all the tools and features that make our URL shortener the perfect choice for your link management needs.
        </p>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "⚡️",
              title: "Instant Shortening",
              desc: "Create short links in milliseconds with our optimized infrastructure.",
            },
            {
              icon: "🔒",
              title: "Enhanced Security",
              desc: "Advanced encryption and security measures to protect your links.",
            },
            {
              icon: "📊",
              title: "Analytics Dashboard",
              desc: "Track your link performance with detailed analytics and insights.",
            },
            {
              icon: "🔗",
              title: "Custom URLs",
              desc: "Create branded and memorable links with custom aliases.",
            },
            {
              icon: "🌐",
              title: "Global CDN",
              desc: "Lightning-fast redirect speeds with our global CDN network.",
            },
            {
              icon: "🛡️",
              title: "DDOS Protection",
              desc: "Enterprise-grade protection against cyber threats and attacks.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105"
            >
              <div className="text-5xl text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">
          Ready to Get Started?
        </h2>
        <Link href="/shorten">
          <button className="bg-purple-600 hover:bg-purple-700 transition-all transform hover:scale-105 rounded-lg shadow-lg px-8 py-4 font-bold text-white">
            Try It Now – It's Free
          </button>
        </Link>
      </section>
    </main>
  );
}
