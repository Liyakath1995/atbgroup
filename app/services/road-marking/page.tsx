import { PenTool, CheckCircle, ArrowRight, Award, Zap, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Road Marking Services Qatar | Thermoplastic & Cold Plastic Paint | ATB',
  description: 'Professional road marking services in Qatar using Thermoplastic Paint, Cold Plastic Paint, Cycle Track Coating, and removal services. Durable and high-visibility markings.',
  keywords: ['road marking Qatar', 'thermoplastic paint Qatar', 'road line marking Qatar', 'cycle track coating Qatar', 'road marking removal Qatar'],
};

export default function RoadMarkingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <PenTool className="w-5 h-5 mr-2" />
              <span className="font-semibold">Service 05</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Road Marking Services
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              High-quality road marking using Thermoplastic Paint, Cold Plastic Paint, Cycle Track Coating, and removal services ensuring durability and visibility.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-xl"
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
                Premium Road Marking Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We offer high-quality road marking services using advanced materials including Thermoplastic Paint, Two-Component Cold Plastic Paint, specialized Cycle Track Coating, and professional Road Marking Removal services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our road markings ensure durability and high visibility in all weather conditions, meeting international standards for road safety and traffic management.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: 'Premium Materials',
                  description: 'Thermoplastic and cold plastic paint for long-lasting results'
                },
                {
                  icon: Shield,
                  title: 'Weather Resistant',
                  description: 'Durable markings that withstand Qatar climate'
                },
                {
                  icon: Zap,
                  title: 'High Visibility',
                  description: 'Reflective materials for excellent night-time visibility'
                },
                {
                  icon: CheckCircle,
                  title: 'Professional Application',
                  description: 'Expert installation ensuring perfect alignment and quality'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
            Road Marking Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Thermoplastic Paint Application',
              'Cold Plastic Paint Marking',
              'Cycle Track Coating',
              'Lane Line Marking',
              'Pedestrian Crossings',
              'Parking Lot Markings',
              'Road Marking Removal',
              'Reflective Materials',
              'Custom Markings'
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Professional Road Marking?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get durable, high-visibility road markings for your project
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all shadow-xl"
          >
            Request Service
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
