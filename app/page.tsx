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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 relative mb-4 transform transition-all hover:scale-105">
                <Image
                  src="/disconnected.png"
                  alt="Install Extension"
                  width={256}
                  height={256}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Install Extension</h3>
              <p className="text-center">
                Install the TOM3 VPN extension from the Chrome Web Store
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 relative mb-4 transform transition-all hover:scale-105">
                <Image
                  src="/connecting.png"
                  alt="Click Connect"
                  width={256}
                  height={256}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Click Connect</h3>
              <p className="text-center">
                Click the CONNECT button to connect to our VPN servers
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 relative mb-4 transform transition-all hover:scale-105">
                <Image
                  src="/connected.png"
                  alt="Browse Securely"
                  width={256}
                  height={256}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Browse Securely</h3>
              <p className="text-center">
                Enjoy a secure and private internet browsing experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Protecting Your Online Privacy Now
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            TOM3 VPN offers a simple privacy protection solution with just one
            click to connect
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
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} TOM3. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
