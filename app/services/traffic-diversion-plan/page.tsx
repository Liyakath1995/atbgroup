import { TrendingUp, CheckCircle, ArrowRight, PenTool, Award, FileCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traffic Diversion Plan (TDP) Services Qatar | WZTMG Compliant | ATB',
  description: 'Professional Traffic Diversion Plan design and TTM drawings in Qatar. A-Class designers with Ashghal WZTMG and MOI compliance expertise. Expert TDP services.',
  keywords: ['traffic diversion plan Qatar', 'TDP Qatar', 'WZTMG compliance Qatar', 'TTM design Qatar', 'A-Class traffic designer Qatar', 'Ashghal traffic plan Qatar'],
};

export default function TrafficDiversionPlanPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="font-semibold">Service 03</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Traffic Diversion Plan (TDP) Service
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Professional TTM drawing and design services in full compliance with Ashghal's WZTMG. A-Class designers with Ashghal & MOI expertise.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all shadow-xl"
            >
              Request TDP Design
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
                Expert Traffic Diversion Planning
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide Temporary Traffic Management (TTM) drawing and design services in full compliance with Ashghal's Work Zone Traffic Management Guidelines (WZTMG). Our comprehensive approach ensures safe, efficient traffic flow during construction and maintenance activities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team includes qualified and experienced A-Class designers with strong expertise in both Ashghal and MOI standards, ensuring safe, efficient, and fully approved traffic diversion solutions for all types of projects.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">A-Class Design Excellence</h3>
                <p className="text-gray-700">
                  Our A-Class certified designers bring extensive experience in creating WZTMG-compliant traffic management plans that prioritize safety while maintaining efficient traffic flow.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: FileCheck,
                  title: 'WZTMG Compliance',
                  description: 'Full adherence to Ashghal Work Zone Traffic Management Guidelines'
                },
                {
                  icon: PenTool,
                  title: 'A-Class Designers',
                  description: 'Qualified professionals with extensive TTM design experience'
                },
                {
                  icon: Award,
                  title: 'Dual Standards',
                  description: 'Expertise in both Ashghal and MOI requirements'
                },
                {
                  icon: CheckCircle,
                  title: 'Approved Solutions',
                  description: 'Designs that pass approvals on first submission'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
            TDP Services Include
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Site Analysis & Assessment',
              'Traffic Impact Studies',
              'WZTMG-Compliant Drawings',
              'Phase-by-Phase Planning',
              'Traffic Sign Layout Design',
              'Safety Barrier Planning',
              'Pedestrian Management Plans',
              'Emergency Access Planning',
              'Ashghal Submission Support'
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need a Traffic Diversion Plan?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get WZTMG-compliant TDP designs from A-Class professionals
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-orange-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-all shadow-xl"
          >
            Get Your TDP
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
