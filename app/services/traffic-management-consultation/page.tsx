import { MessageSquare, CheckCircle, ArrowRight, Users, Award, Target } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traffic Management Consultation Qatar | STMS & STMP Personnel | ATB',
  description: 'Professional traffic management consultation in Qatar. Expert planning, supervision, and site coordination by experienced STMS and STMP personnel.',
  keywords: ['traffic management consultation Qatar', 'STMS Qatar', 'STMP Qatar', 'traffic consultant Qatar', 'traffic planning Qatar'],
};

export default function TrafficManagementConsultationPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-5 h-5 mr-2" />
              <span className="font-semibold">Service 09</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Traffic Management Advice & Consultation
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Professional consultancy for Traffic Management projects, including planning, supervision, and site coordination by STMS and STMP personnel.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all shadow-xl"
            >
              Consult Our Experts
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
                Expert Traffic Management Consultation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide professional consultancy for Traffic Management projects, including comprehensive planning, expert supervision, and effective site coordination. Our services are led by experienced STMS (Site Traffic Management Supervisor) and STMP (Site Traffic Management Practitioner) personnel.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our consultants bring deep industry knowledge and practical experience to help you navigate complex traffic management challenges, ensure regulatory compliance, and optimize project outcomes.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: 'STMS & STMP Personnel',
                  description: 'Certified professionals with extensive field experience'
                },
                {
                  icon: Target,
                  title: 'Strategic Planning',
                  description: 'Comprehensive project planning and risk assessment'
                },
                {
                  icon: Award,
                  title: 'Expert Supervision',
                  description: 'On-site supervision ensuring quality and compliance'
                },
                {
                  icon: CheckCircle,
                  title: 'Site Coordination',
                  description: 'Effective coordination between all stakeholders'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
            Consultation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Project Planning',
              'Risk Assessment',
              'Compliance Review',
              'Site Supervision',
              'Traffic Flow Analysis',
              'Safety Audits',
              'Stakeholder Coordination',
              'Documentation Support',
              'Training & Guidance'
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-indigo-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Expert Traffic Management Advice?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Consult with our STMS and STMP certified professionals
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-indigo-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-all shadow-xl"
          >
            Book Consultation
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
