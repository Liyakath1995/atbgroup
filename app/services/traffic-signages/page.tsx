import { SignpostBig, CheckCircle, ArrowRight, Award, Settings, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traffic Signages Supply & Installation Qatar | Ashghal Standards | ATB',
  description: 'Professional traffic signage supply and installation in Qatar. Permanent and temporary signs designed per Ashghal standards. Complete signage solutions.',
  keywords: ['traffic signage Qatar', 'road signs Qatar', 'Ashghal traffic signs', 'temporary signs Qatar', 'permanent signs Qatar', 'traffic sign installation Qatar'],
};

export default function TrafficSignagesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <SignpostBig className="w-5 h-5 mr-2" />
              <span className="font-semibold">Service 06</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Traffic Signages
            </h1>
            <p className="text-xl text-cyan-100 mb-8">
              Supply and installation of permanent and temporary traffic signs, designed and implemented as per Ashghal standards.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all shadow-xl"
            >
              Get Started
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
                Complete Traffic Signage Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ATB supplies and installs both permanent and temporary traffic signs, designed and implemented as per Ashghal standards for clear communication and safety. Our comprehensive signage solutions ensure optimal traffic management and road user guidance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From regulatory signs to warning and informational signage, we provide complete solutions that meet all local requirements and international standards for visibility and durability.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: 'Ashghal Standards',
                  description: 'All signs designed per Ashghal specifications'
                },
                {
                  icon: Settings,
                  title: 'Professional Installation',
                  description: 'Expert mounting and positioning for optimal visibility'
                },
                {
                  icon: Shield,
                  title: 'Durable Materials',
                  description: 'Weather-resistant signs with reflective surfaces'
                },
                {
                  icon: CheckCircle,
                  title: 'Complete Service',
                  description: 'Supply, installation, and maintenance support'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
            Traffic Signage Types
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Regulatory Signs',
              'Warning Signs',
              'Informational Signs',
              'Temporary Signs',
              'Permanent Signs',
              'School Zone Signs',
              'Work Zone Signs',
              'Directional Signs',
              'Custom Signage'
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-cyan-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Traffic Signage?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get Ashghal-compliant traffic signs installed professionally
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-cyan-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-cyan-50 transition-all shadow-xl"
          >
            Order Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
