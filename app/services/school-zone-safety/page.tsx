import { School, CheckCircle, ArrowRight, Shield, Users, FileCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Zone Safety Development Qatar | Ashghal Approved | ATB',
  description: 'Complete School Zone safety services in Qatar for schools, nurseries, and colleges. From approvals to implementation following Ashghal Design Department requirements.',
  keywords: ['school zone safety Qatar', 'school safety Qatar', 'nursery safety Qatar', 'Ashghal school zone Qatar', 'school traffic safety Qatar'],
};

export default function SchoolZoneSafetyPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <School className="w-5 h-5 mr-2" />
              <span className="font-semibold">Service 04</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              School Zone Safety Development
            </h1>
            <p className="text-xl text-pink-100 mb-8">
              Complete School Zone safety services—from approvals to implementation—for schools, nurseries, and colleges across Qatar.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-all shadow-xl"
            >
              Protect Your School Zone
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
                Comprehensive School Safety Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We handle complete School Zone safety services—from approvals to on-site implementation—following Ashghal Design Department requirements for schools, nurseries, and colleges across Qatar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our comprehensive approach ensures that every aspect of school zone safety is addressed, creating secure environments for students, staff, and parents during drop-off and pick-up times.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: 'Complete Safety Services',
                  description: 'End-to-end solutions from design to implementation'
                },
                {
                  icon: FileCheck,
                  title: 'Ashghal Compliant',
                  description: 'Following Design Department requirements strictly'
                },
                {
                  icon: Users,
                  title: 'All Education Facilities',
                  description: 'Schools, nurseries, and colleges covered'
                },
                {
                  icon: CheckCircle,
                  title: 'Full Implementation',
                  description: 'On-site installation and quality assurance'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
            School Zone Safety Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Safety Assessment',
              'Design & Planning',
              'Ashghal Approvals',
              'Traffic Sign Installation',
              'Road Marking',
              'Speed Management Zones',
              'Pedestrian Crossings',
              'Drop-off/Pick-up Zone Design',
              'Ongoing Maintenance'
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Enhance Your School Zone Safety
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Contact us for comprehensive school zone safety solutions
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-pink-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-pink-50 transition-all shadow-xl"
          >
            Contact Us
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
