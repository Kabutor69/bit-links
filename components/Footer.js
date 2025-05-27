import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["800"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-purple-600 py-12">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Navbar iniside Footer lol */}
          <div>
            <h3
              className={`text-xl font-bold ${poppins.className} text-white mb-4`}
            >
              Quick Links
            </h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-200 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-200 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-purple-200 transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-purple-200 transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-purple-200 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`text-xl font-bold ${poppins.className} text-white mb-4`}
            >
              Contact Us
            </h3>
            <ul className="space-y-3 text-white">
              <li>📍 Nighaville, Nighaland</li>
              <li>
                📧{" "}
                <a
                  href="mailto:pisionz69@gmail.com"
                  className="hover:text-purple-200 transition-colors duration-200"
                >
                  pisionz69@gmail.com
                </a>
              </li>
              <li>⏰ Mon - Fri: 6:09 AM - 6:09 PM</li>
            </ul>
          </div>

          {/* Social Media Links nothin in here */}
          <div>
            <h3
              className={`text-xl font-bold ${poppins.className} text-white mb-4`}
            >
              Follow Us
            </h3>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a
                href="https://github.com/Kabutor69/bit-links"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-200 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC2vfvM-dzsnYqAoTrv9_n3w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-200 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184C21.1 3.584 22 4.813 22 6.326v11.348c0 1.512-.9 2.742-2.385 3.142C17.34 21.3 12 21.3 12 21.3s-5.34 0-7.615-.484C2.9 20.416 2 19.186 2 17.674V6.326C2 4.813 2.9 3.584 4.385 3.184 6.66 2.7 12 2.7 12 2.7s5.34 0 7.615.484zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t pt-6 text-center text-white">
          <p>&copy; 2025 BitLinks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
