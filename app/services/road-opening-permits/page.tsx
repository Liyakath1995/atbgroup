import { FileText, CheckCircle, ArrowRight, Clock, Target, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Road Opening (RO) Permit Services Qatar | Ashghal QPRO | ATB',
  description: 'Fast and hassle-free Road Opening Permit and Ashghal QPRO Road Space Booking services in Qatar. Expert RO permit processing for all sectors. Ashghal approved.',
  keywords: ['road opening permit Qatar', 'RO permit Qatar', 'Ashghal QPRO Qatar', 'road space booking Qatar', 'Ashghal permit services Qatar'],
};

export default function RoadOpeningPermitsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <FileText className="w-5 h-5 mr-2" />
              <span className="font-semibold">Service 02</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Road Opening (RO) Permit Services
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              Specialized in obtaining Ashghal QPRO Road Space Booking and RO Permits. Fast, accurate, and hassle-free approval process.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all shadow-xl"
            >
              Get Started
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
                Expert RO Permit Processing
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We specialize in obtaining Ashghal QPRO Road Space Booking and RO Permits for all sectors in Qatar. Our deep understanding of Ashghal's requirements and processes ensures smooth and efficient permit acquisition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our dedicated team ensures a fast, accurate, and hassle-free approval process — saving clients valuable time and effort. We handle all documentation, coordination, and follow-ups required for successful permit issuance.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Why Choose Our RO Permit Services?</h3>
                <p className="text-gray-700">
                  With years of experience and established relationships with Ashghal, we streamline the entire permit process, ensuring quick approvals and full compliance with all requirements.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Clock,
                  title: 'Fast Processing',
                  description: 'Quick turnaround times for urgent project requirements'
                },
                {
                  icon: Target,
                  title: 'Accurate Documentation',
                  description: 'Precise preparation of all required documents and submissions'
                },
                {
                  icon: Award,
                  title: 'All Sectors Covered',
                  description: 'Expertise in RO permits for infrastructure, utilities, and commercial sectors'
                },
                {
                  icon: CheckCircle,
                  title: 'Hassle-Free Process',
                  description: 'End-to-end management from application to approval'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
            Our RO Permit Services Include
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'QPRO Road Space Booking',
              'RO Permit Applications',
              'Document Preparation',
              'Ashghal Coordination',
              'Site Assessment',
              'Compliance Verification',
              'Permit Renewal Services',
              'Emergency Permit Processing',
              'Follow-up & Support'
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
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need an RO Permit?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let us handle your Road Opening Permit applications efficiently
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-emerald-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-all shadow-xl"
          >
            Apply Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
