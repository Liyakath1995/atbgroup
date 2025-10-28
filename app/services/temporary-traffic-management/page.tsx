import { Shield, CheckCircle, ArrowRight, Clock, Users, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Temporary Traffic Management & TMA Rental Services in Qatar | ATB',
  description: 'Expert Temporary Traffic Management (TTM) and Truck Mounted Attenuator (TMA) rental services in Qatar. Safe, efficient traffic control for your projects. Ashghal & MOI approved.',
  keywords: ['temporary traffic management Qatar', 'TTM Qatar', 'TMA rental Qatar', 'truck mounted attenuator Qatar', 'traffic control Qatar', 'Ashghal approved TTM'],
};

export default function TemporaryTrafficManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-semibold">Service 01</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Temporary Traffic Management & TMA Rental
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert TTM team ensuring safe traffic control. TMA rental services to protect workers and maintain smooth traffic flow.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Traffic Management Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our experienced and knowledgeable Temporary Traffic Management (TTM) team ensures safe and efficient traffic control for your projects. We understand the complexities of traffic flow management and provide comprehensive solutions tailored to your specific needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We also provide Truck Mounted Attenuator (TMA) rental services, helping to protect workers and vehicles while maintaining smooth traffic flow on-site. Our TMA equipment meets the highest safety standards and is operated by trained professionals.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: 'Safety Focused',
                  description: 'Comprehensive safety protocols ensuring worker and public protection'
                },
                {
                  icon: Users,
                  title: 'Experienced Team',
                  description: 'Highly trained TTM professionals with extensive field experience'
                },
                {
                  icon: Award,
                  title: 'Certified Equipment',
                  description: 'Modern TMA equipment meeting international safety standards'
                },
                {
                  icon: Clock,
                  title: '24/7 Availability',
                  description: 'Round-the-clock service for urgent traffic management needs'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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

      {/* Services Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What's Included
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Traffic Control Planning',
              'Site Assessment & Setup',
              'TMA Equipment Rental',
              'Trained TTM Personnel',
              'Traffic Sign Installation',
              'Safety Barrier Setup',
              'Real-time Traffic Monitoring',
              'Emergency Response Support',
              'Compliance Documentation'
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Temporary Traffic Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for professional TTM and TMA rental services
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all shadow-xl"
          >
            Contact Us Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
