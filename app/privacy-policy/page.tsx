import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-[#FFFB42] py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/TOM3VPN.svg"
                alt="TOM3 VPN Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold">TOM3 VPN</span>
            </Link>
            <Link
              href="/"
              className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Privacy Policy
        </h1>
        <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500 mb-6">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              TOM3 VPN (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use our VPN service, browser extension, website, and related
              services (collectively, the &quot;Service&quot;).
            </p>
            <p>
              Please read this Privacy Policy carefully. By using our Service,
              you consent to the collection, use, and disclosure of your
              information as described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect minimal information to provide and improve our Service:
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">
              Account Information
            </h3>
            <p className="mb-4">
              Our Service operates without requiring user accounts or
              registration. We do not collect personal identifiers such as
              names, email addresses, or payment information.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Usage Data</h3>
            <p className="mb-4">
              We collect anonymous, aggregated usage statistics to monitor
              service performance and improve our offerings. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Server load information</li>
              <li>Connection success rates</li>
              <li>Aggregate bandwidth usage</li>
              <li>App crash reports</li>
            </ul>
            <p>
              This information cannot be used to identify individual users or
              browsing activities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Our No-Logs Policy</h2>
            <p className="mb-4">
              TOM3 VPN operates under a strict no-logs policy. We do not record,
              log, or store:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your browsing history or activity</li>
              <li>Connection timestamps</li>
              <li>
                IP addresses (your original IP or the IP assigned by our
                service)
              </li>
              <li>DNS queries</li>
              <li>Data content you access while using our Service</li>
            </ul>
            <p>
              This means we have no data to share with third parties regarding
              your specific online activities, even if requested.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              The limited information we collect is used solely for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing and maintaining our Service</li>
              <li>Improving and optimizing our Service</li>
              <li>Monitoring for service abuse and preventing fraud</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect the
              limited data we collect. Our security practices include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Encryption of all VPN connections using AES-256 encryption
              </li>
              <li>Regular security audits and updates</li>
              <li>Strict access controls for our systems</li>
              <li>Secure server infrastructure</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Third-Party Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your information to
              third parties. We may share anonymous, aggregated statistics with
              trusted partners to help improve our Service.
            </p>
            <p>
              We may disclose information if required to do so by law or in
              response to valid requests by public authorities (e.g., a court or
              government agency). However, due to our no-logs policy, we have
              minimal data that could be subject to such requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Children&apos;s Privacy</h2>
            <p>
              Our Service is not directed to individuals under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us so we can
              take appropriate action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="mt-2 font-medium">privacy@tom3vpn.com</p>
          </section>
        </div>
      </main>

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
