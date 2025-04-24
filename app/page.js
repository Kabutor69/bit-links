import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1
            className={`text-5xl font-bold ${poppins.className} text-purple-800 leading-tight`}
          >
            Welcome to <span className="text-pink-600">BitLinks</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-xl leading-relaxed">
            Simplify your URL shortening needs with advanced features and secure tools.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-6">
            <Link
              href="/shorten"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition-all"
            >
              Start Now
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-md font-semibold transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/vector.jpg"
            alt="Hero image"
            width={500}
            height={400}
            className="rounded-2xl shadow-2xl object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
          Powerful Features for Better Link Management
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">⚡️</div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">
              Instant Shortening
            </h3>
            <p className="text-gray-600">
              Create short links in milliseconds with our optimized infrastructure.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">
              Enhanced Security
            </h3>
            <p className="text-gray-600">
              Advanced encryption and security measures to protect your links.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-purple-800 mb-3">
              Analytics Dashboard
            </h3>
            <p className="text-gray-600">
              Track your link performance with detailed analytics and insights.
            </p>
          </div>
        </div>
      </section>

      {/* Trying Section */}
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
