import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["800"],
  subsets: ["latin"],
});

export default function Pricing() {
  return (
    <main className="bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen">
      {/* Header */}
      <section className="container mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className={`text-5xl font-bold ${poppins.className} text-purple-800 mb-6`}>
          Simple, Transparent <span className="text-pink-600">Pricing</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Start with our forever-free plan or upgrade for additional features.
          No hidden fees, no surprises.
        </p>
      </section>

      {/* Lets Rob Money */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">🚀 Free</h2>
            <p className="text-4xl font-bold mb-6">$0</p>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Unlimited URL shortening</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Basic analytics</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Standard support</li>
            </ul>
            <Link href="/shorten">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </Link>
          </div>

          {/* Money Robbing Plan 1 */}
          <div className="relative bg-purple-800 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 transform scale-105">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              Most Popular
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">💼 Pro</h2>
            <p className="text-4xl font-bold text-white mb-6">$9/mo</p>
            <ul className="space-y-3 mb-8 text-white">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Everything in Free</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Custom branded links</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Advanced analytics</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Priority support</li>
            </ul>
            <Link href="/contact">
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </Link>
          </div>

          {/* Money Robbing Plan 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">🏢 Enterprise</h2>
            <p className="text-4xl font-bold mb-6">Custom</p>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Everything in Pro</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Custom integration</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>24/7 dedicated support</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>SLA guarantee</li>
            </ul>
            <Link href="/contact">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* */}
      <section className="text-center py-12 px-6 bg-white">
        <h3 className={`text-2xl font-bold ${poppins.className} text-purple-800 mb-4`}>
          Still not sure which plan is right?
        </h3>
        <p className="text-gray-600 mb-6">Reach out and we'll help you choose the perfect plan.</p>
        <Link href="/contact">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Talk to Sales
          </button>
        </Link>
      </section>
    </main>
  );
}
