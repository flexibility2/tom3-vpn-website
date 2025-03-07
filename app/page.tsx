import Image from "next/image";
import Link from "next/link";
import { FaShieldAlt, FaBolt, FaGlobeAmericas } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFB42] to-[#FFF84D] text-black">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 flex flex-col items-center">
        <div className="w-32 h-32 relative mb-6 animate-float">
          <Image
            src="/TOM3VPN.svg"
            alt="TOM3 VPN Logo"
            width={128}
            height={128}
            className="drop-shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
          TOM3 VPN
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          Secure, Fast, and Simple VPN Solution to Protect Your Online Privacy
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://chrome.google.com/webstore"
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-all transform hover:scale-105"
          >
            Get Chrome Extension
          </Link>
          <Link
            href="#features"
            className="bg-white bg-opacity-50 px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-70 transition-all transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white bg-opacity-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose TOM3 VPN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all hover:scale-105">
              <div className="flex justify-center mb-4">
                <FaShieldAlt className="text-5xl text-black" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Security Guarantee
              </h3>
              <p className="text-center">
                Protect your data with advanced encryption technology,
                preventing hackers and snoopers from accessing your information
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all hover:scale-105">
              <div className="flex justify-center mb-4">
                <FaBolt className="text-5xl text-black" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Lightning Fast
              </h3>
              <p className="text-center">
                High-speed server network ensures your browsing experience is
                smooth and uninterrupted, without worrying about slow connection
                speeds
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all hover:scale-105">
              <div className="flex justify-center mb-4">
                <FaGlobeAmericas className="text-5xl text-black" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Global Servers
              </h3>
              <p className="text-center">
                Server network across the US and Europe, allowing you to access
                the content you need from anywhere, anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center bg-white bg-opacity-80 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <div className="w-24 h-24 bg-[#FFFB42] rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">1. Install Extension</h3>
              <p className="text-center">
                Install the TOM3 VPN extension from the Chrome Web Store
              </p>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-80 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <div className="w-24 h-24 bg-[#FFFB42] rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">2. Click Connect</h3>
              <p className="text-center">
                Click the CONNECT button to connect to our VPN servers
              </p>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-80 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <div className="w-24 h-24 bg-[#FFFB42] rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">3. Browse Securely</h3>
              <p className="text-center">
                Enjoy a secure and private internet browsing experience with
                your IP address and location protected
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Trust Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Trusted by Community
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Rated <span className="text-[#FFFB42] font-bold">4.9/5.0</span> by
            over <span className="text-[#FFFB42] font-bold">30,000+</span> users
            around the world
          </p>

          <div className="max-w-6xl mx-auto overflow-hidden relative">
            {/* Carousel container */}
            <div className="flex animate-carousel">
              {/* First group of reviews */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-none w-full">
                <div className="bg-[#111] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <span className="text-[#FFFB42] text-xl font-bold">
                        XG
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">Xiaowan Guo</h3>
                      <p className="text-sm text-gray-400">@Product Manager</p>
                    </div>
                  </div>
                  <p className="text-left">
                    Great for protecting my privacy when using public WiFi
                    networks.
                  </p>
                </div>

                <div className="bg-[#111] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <span className="text-[#FFFB42] text-xl font-bold">
                        MA
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">Michael Alexander</h3>
                      <p className="text-sm text-gray-400">@Vice President</p>
                    </div>
                  </div>
                  <p className="text-left">
                    This VPN has made the entire browsing experience incredibly
                    smooth.
                  </p>
                </div>

                <div className="bg-[#111] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <span className="text-[#FFFB42] text-xl font-bold">
                        AG
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">Alex Grant</h3>
                      <p className="text-sm text-gray-400">
                        @Chief Technology Officer
                      </p>
                    </div>
                  </div>
                  <p className="text-left">
                    Great VPN service, super user-friendly and reliable!
                  </p>
                </div>
              </div>

              {/* Second group of reviews */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-none w-full">
                <div className="bg-[#111] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <span className="text-[#FFFB42] text-xl font-bold">
                        BW
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">Brandon Williams</h3>
                      <p className="text-sm text-gray-400">
                        @Software Engineer
                      </p>
                    </div>
                  </div>
                  <p className="text-left">
                    I&apos;ve tried several VPN services, but this one is by far
                    the best.
                  </p>
                </div>

                <div className="bg-[#111] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <span className="text-[#FFFB42] text-xl font-bold">
                        EJ
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">Emily Johnson</h3>
                      <p className="text-sm text-gray-400">
                        @Financial Advisor
                      </p>
                    </div>
                  </div>
                  <p className="text-left">
                    It&apos;s fast, reliable, and has all the security features
                    I need.
                  </p>
                </div>

                <div className="bg-[#111] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <span className="text-[#FFFB42] text-xl font-bold">
                        LM
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">Li Ming</h3>
                      <p className="text-sm text-gray-400">@Data Analyst</p>
                    </div>
                  </div>
                  <p className="text-left">
                    Connection stability is top-notch, I feel secure with TOM3
                    VPN.
                  </p>
                </div>
              </div>

              {/* Copy of first group for seamless loop */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-none w-full">
                <div className="bg-[#111] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <span className="text-[#FFFB42] text-xl font-bold">
                        XG
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">Xiaowan Guo</h3>
                      <p className="text-sm text-gray-400">@Product Manager</p>
                    </div>
                  </div>
                  <p className="text-left">
                    Great for protecting my privacy when using public WiFi
                    networks.
                  </p>
                </div>

                <div className="bg-[#111] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <span className="text-[#FFFB42] text-xl font-bold">
                        MA
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">Michael Alexander</h3>
                      <p className="text-sm text-gray-400">@Vice President</p>
                    </div>
                  </div>
                  <p className="text-left">
                    This VPN has made the entire browsing experience incredibly
                    smooth.
                  </p>
                </div>

                <div className="bg-[#111] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <span className="text-[#FFFB42] text-xl font-bold">
                        AG
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold">Alex Grant</h3>
                      <p className="text-sm text-gray-400">
                        @Chief Technology Officer
                      </p>
                    </div>
                  </div>
                  <p className="text-left">
                    Great VPN service, super user-friendly and reliable!
                  </p>
                </div>
              </div>
            </div>

            {/* Gradient masks */}
            <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent"></div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            <button className="w-3 h-3 rounded-full bg-[#FFFB42]"></button>
            <button className="w-3 h-3 rounded-full bg-gray-600"></button>
            <button className="w-3 h-3 rounded-full bg-gray-600"></button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Online Privacy Now
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            TOM3 VPN offers a simple privacy protection solution with just one
            click
          </p>
          <Link
            href="https://chrome.google.com/webstore"
            className="bg-[#FFFB42] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block"
          >
            Get Chrome Extension
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/TOM3VPN.svg"
                alt="TOM3 VPN Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-lg font-semibold">TOM3 VPN</span>
            </div>
            <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="/" className="text-sm text-gray-400 hover:text-white">
                Home
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} TOM3. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
