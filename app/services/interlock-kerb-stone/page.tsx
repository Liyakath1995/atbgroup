import { Box, CheckCircle, ArrowRight, Award, Zap, Settings } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interlock and Kerb Stone Works Qatar | High-Quality Materials | ATB',
  description: 'Professional interlock and kerb stone works in Qatar using high-quality, long-lasting materials. Durable finishes for all types of projects.',
  keywords: ['interlock Qatar', 'kerb stone Qatar', 'paving Qatar', 'interlock installation Qatar', 'kerb stone works Qatar'],
};

export default function InterlockKerbStonePage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Box className="w-5 h-5 mr-2" />
              <span className="font-semibold">Service 07</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Interlock and Kerb Stone Works
            </h1>
            <p className="text-xl text-teal-100 mb-8">
              All types of interlock and kerb stone works using high-quality and long-lasting materials, ensuring durability and a superior finish.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-all shadow-xl"
            >
              Get Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Premium Interlock & Kerb Stone Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide all types of interlock and kerb stone works using high-quality and long-lasting materials. Our expert team ensures precise installation with superior finishing that stands the test of time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From pedestrian pathways to road edges, parking areas to landscaping features, we deliver comprehensive interlock and kerb stone solutions that combine functionality with aesthetic appeal.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: 'Quality Materials',
                  description: 'Premium, durable materials built to last'
                },
                {
                  icon: Settings,
                  title: 'Expert Installation',
                  description: 'Precise workmanship for perfect results'
                },
                {
                  icon: Zap,
                  title: 'Fast Completion',
                  description: 'Efficient project execution with minimal disruption'
                },
                {
                  icon: CheckCircle,
                  title: 'Superior Finish',
                  description: 'Attention to detail ensuring excellent aesthetics'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Interlock & Kerb Stone Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Interlock Paving',
              'Kerb Stone Installation',
              'Pathway Construction',
              'Parking Area Paving',
              'Landscaping Features',
              'Road Edge Works',
              'Pattern Design',
              'Material Supply',
              'Maintenance Services'
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Interlock or Kerb Stone Works?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Get high-quality installation with durable materials
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-teal-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-all shadow-xl"
          >
            Request Service
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
