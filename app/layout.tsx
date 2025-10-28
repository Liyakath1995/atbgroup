import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://atbqatar.com'),
  title: {
    default: 'ATB Qatar - Leading Traffic Management & Road Safety Solutions | Qatar',
    template: '%s | ATB Qatar'
  },
  description: 'ATB Qatar is a professional engineering firm specializing in Traffic Management and Road Safety solutions. Trusted partner of Ashghal & MOI. Services: TTM, TMA Rental, Road Opening Permits, Traffic Diversion Plans, School Zone Safety, Road Marking in Qatar.',
  keywords: [
    'traffic management Qatar',
    'road safety Qatar',
    'Ashghal approved Qatar',
    'road opening permit Qatar',
    'traffic diversion plan Qatar',
    'temporary traffic management Qatar',
    'TMA rental Qatar',
    'school zone safety Qatar',
    'road marking Qatar',
    'traffic signage Qatar',
    'MOI approved Qatar',
    'QPRO road space booking',
    'vehicle restraint systems Qatar',
    'Doha traffic management',
    'Qatar road safety company',
    'TTM Qatar',
    'WZTMG compliance Qatar',
    'A-Class traffic designer Qatar',
    'Ashghal contractor Qatar',
  ],
  authors: [{ name: 'ATB Qatar' }],
  creator: 'ATB Qatar',
  publisher: 'ATB Qatar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_QA',
    url: 'https://atbqatar.com',
    siteName: 'ATB Qatar',
    title: 'ATB Qatar - Leading Traffic Management & Road Safety Solutions',
    description: 'Professional Traffic Management and Road Safety solutions in Qatar. Ashghal & MOI approved. Expert in TTM, Road Opening Permits, Traffic Diversion Plans, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ATB Qatar - Traffic Management & Road Safety',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATB Qatar - Leading Traffic Management & Road Safety Solutions',
    description: 'Professional Traffic Management and Road Safety solutions in Qatar. Ashghal & MOI approved.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Engineering Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="geo.region" content="QA" />
        <meta name="geo.placename" content="Qatar" />
        <meta name="geo.position" content="25.286106;51.534817" />
        <meta name="ICBM" content="25.286106, 51.534817" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://atbqatar.com',
              name: 'ATB Qatar',
              description: 'Professional Traffic Management and Road Safety solutions in Qatar',
              url: 'https://atbqatar.com',
              logo: 'https://atbqatar.com/logo.png',
              image: 'https://atbqatar.com/og-image.jpg',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'QA',
                addressLocality: 'Doha',
                addressRegion: 'Doha',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 25.286106,
                longitude: 51.534817,
              },
              areaServed: {
                '@type': 'Country',
                name: 'Qatar',
              },
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 25.286106,
                  longitude: 51.534817,
                },
                geoRadius: '200',
              },
              priceRange: '$$',
              knowsAbout: [
                'Traffic Management',
                'Road Safety',
                'Temporary Traffic Management',
                'Road Opening Permits',
                'Traffic Diversion Plans',
                'School Zone Safety',
                'Road Marking',
                'Traffic Signage',
              ],
              slogan: 'On the Road to Becoming Qatar\'s No.1 in Road Safety Traffic Management',
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <a href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-primary-600">ATB</div>
                <div className="text-sm text-gray-600">Qatar</div>
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
                <a href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
                <a href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</a>
                <a href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
              </div>
              <a
                href="/contact"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">ATB Qatar</h3>
                <p className="text-gray-400">
                  Leading Traffic Management & Road Safety Solutions in Qatar
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Traffic Management</li>
                  <li>Road Opening Permits</li>
                  <li>School Zone Safety</li>
                  <li>Road Marking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Doha, Qatar</li>
                  <li>Email: info@atbqatar.com</li>
                  <li>Phone: +974 XXXX XXXX</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} ATB Qatar. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
