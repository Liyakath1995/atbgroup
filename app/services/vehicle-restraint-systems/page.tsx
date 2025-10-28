import { Fence, CheckCircle, ArrowRight, Shield, Award, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle Restraint Systems (VRS) Qatar | Safety Barriers & Guard Rails | ATB',
  description: 'Supply and installation of Vehicle Restraint Systems in Qatar: safety barriers, crash cushions, guard rails, fish tails, and terminal systems for maximum roadside protection.',
  keywords: ['vehicle restraint systems Qatar', 'VRS Qatar', 'safety barriers Qatar', 'crash cushions Qatar', 'guard rails Qatar', 'road safety barriers Qatar'],
};

export default function VehicleRestraintSystemsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Fence className="w-5 h-5 mr-2" />
              <span className="font-semibold">Service 08</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Vehicle Restraint Systems (VRS)
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Supply and install safety barriers, crash cushions, guard rails, fish tails, and terminal systems — ensuring maximum roadside protection.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all shadow-xl"
            >
              Protect Your Roads
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
                Maximum Roadside Protection
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We supply and install various Vehicle Restraint Systems including safety barriers, crash cushions, guard rails, fish tails, and terminal systems — ensuring maximum roadside protection for all road users.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our VRS solutions are designed to absorb impact energy, redirect vehicles safely, and minimize the severity of accidents. All systems comply with international safety standards and local regulations.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: 'Impact Protection',
                  description: 'Advanced systems designed to absorb and redirect impact forces'
                },
                {
                  icon: Award,
                  title: 'Certified Systems',
                  description: 'All VRS components meet international safety standards'
                },
                {
                  icon: Zap,
                  title: 'Quick Installation',
                  description: 'Professional installation with minimal traffic disruption'
                },
                {
                  icon: CheckCircle,
                  title: 'Complete Solutions',
                  description: 'From safety barriers to terminal systems, we cover it all'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
            VRS Products & Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Safety Barriers',
              'Crash Cushions',
              'Guard Rails',
              'Fish Tail Systems',
              'Terminal Systems',
              'Concrete Barriers',
              'Steel Barriers',
              'Installation Services',
              'Maintenance Support'
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Vehicle Restraint Systems?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Get professional VRS installation for maximum road safety
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-red-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all shadow-xl"
          >
            Contact Us
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
