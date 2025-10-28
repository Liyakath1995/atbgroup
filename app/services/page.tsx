import { Shield, FileText, TrendingUp, School, PenTool, SignpostBig, Fence, Box, MessageSquare, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traffic Management & Road Safety Services in Qatar | ATB Qatar',
  description: 'Comprehensive traffic management services in Qatar: TTM, TMA Rental, Road Opening Permits, Traffic Diversion Plans, School Zone Safety, Road Marking, Traffic Signages, VRS, and more. Ashghal & MOI approved.',
  keywords: ['traffic management services Qatar', 'road safety services Qatar', 'TTM Qatar', 'road opening permit Qatar', 'traffic diversion plan Qatar', 'school zone safety Qatar', 'road marking Qatar', 'Ashghal services Qatar'],
};

const services = [
  {
    number: '01',
    title: 'Temporary Traffic Management & TMA Rental',
    description: 'Our experienced and knowledgeable Temporary Traffic Management (TTM) team ensures safe and efficient traffic control for your projects. We also provide Truck Mounted Attenuator (TMA) rental services, helping to protect workers and vehicles while maintaining smooth traffic flow on-site.',
    icon: Shield,
    href: '/services/temporary-traffic-management',
    color: 'from-blue-500 to-cyan-500',
    features: ['Experienced TTM Team', 'TMA Rental Services', 'Safe Traffic Control', 'Worker Protection']
  },
  {
    number: '02',
    title: 'Road Opening (RO) Permit Services',
    description: 'We specialize in obtaining Ashghal QPRO Road Space Booking and RO Permits for all sectors in Qatar. Our dedicated team ensures a fast, accurate, and hassle-free approval process — saving clients valuable time and effort.',
    icon: FileText,
    href: '/services/road-opening-permits',
    color: 'from-emerald-500 to-green-500',
    features: ['Ashghal QPRO Booking', 'RO Permit Processing', 'Fast Approval', 'All Sectors Coverage']
  },
  {
    number: '03',
    title: 'Traffic Diversion Plan (TDP) Service',
    description: 'We provide Temporary Traffic Management (TTM) drawing and design services in full compliance with Ashghal\'s Work Zone Traffic Management Guidelines (WZTMG). Our team includes qualified and experienced A-Class designers with strong expertise in both Ashghal and MOI standards.',
    icon: TrendingUp,
    href: '/services/traffic-diversion-plan',
    color: 'from-orange-500 to-amber-500',
    features: ['WZTMG Compliance', 'A-Class Designers', 'Ashghal Standards', 'MOI Expertise']
  },
  {
    number: '04',
    title: 'School Zone Safety Development',
    description: 'We handle complete School Zone safety services—from approvals to on-site implementation—following Ashghal Design Department requirements for schools, nurseries, and colleges across Qatar.',
    icon: School,
    href: '/services/school-zone-safety',
    color: 'from-pink-500 to-rose-500',
    features: ['Complete Safety Services', 'Ashghal Approved', 'Schools & Nurseries', 'Full Implementation']
  },
  {
    number: '05',
    title: 'Road Marking',
    description: 'We offer high-quality road marking services using Thermoplastic Paint, Two-Component Cold Plastic Paint, Cycle Track Coating, and Road Marking Removal — ensuring durability and visibility.',
    icon: PenTool,
    href: '/services/road-marking',
    color: 'from-purple-500 to-indigo-500',
    features: ['Thermoplastic Paint', 'Cold Plastic Paint', 'Cycle Track Coating', 'Marking Removal']
  },
  {
    number: '06',
    title: 'Traffic Signages',
    description: 'ATB supplies and installs both permanent and temporary traffic signs, designed and implemented as per Ashghal standards for clear communication and safety.',
    icon: SignpostBig,
    href: '/services/traffic-signages',
    color: 'from-cyan-500 to-blue-500',
    features: ['Permanent Signs', 'Temporary Signs', 'Ashghal Standards', 'Professional Installation']
  },
  {
    number: '07',
    title: 'Interlock and Kerb Stone Works',
    description: 'We provide all types of interlock and kerb stone works using high-quality and long-lasting materials, ensuring durability and a superior finish.',
    icon: Box,
    href: '/services/interlock-kerb-stone',
    color: 'from-teal-500 to-emerald-500',
    features: ['All Types of Interlock', 'Kerb Stone Works', 'High-Quality Materials', 'Durable Finish']
  },
  {
    number: '08',
    title: 'Vehicle Restraint Systems (VRS)',
    description: 'We supply and install various safety barriers, crash cushions, guard rails, fish tails, and terminal systems — ensuring maximum roadside protection.',
    icon: Fence,
    href: '/services/vehicle-restraint-systems',
    color: 'from-red-500 to-orange-500',
    features: ['Safety Barriers', 'Crash Cushions', 'Guard Rails', 'Terminal Systems']
  },
  {
    number: '09',
    title: 'Traffic Management Advice & Consultation',
    description: 'We provide professional consultancy for Traffic Management projects, including planning, supervision, and site coordination, led by experienced STMS and STMP personnel.',
    icon: MessageSquare,
    href: '/services/traffic-management-consultation',
    color: 'from-indigo-500 to-purple-500',
    features: ['Expert Consultation', 'Project Planning', 'Site Supervision', 'STMS/STMP Personnel']
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive Traffic Management and Road Safety solutions for Qatar
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={service.href}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-2 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted expertise backed by industry-leading certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Ashghal Approved',
                description: 'Certified and trusted by Ashghal'
              },
              {
                title: 'MOI Certified',
                description: 'Ministry of Interior approved'
              },
              {
                title: 'Expert Team',
                description: 'A-Class designers and STMS/STMP personnel'
              },
              {
                title: '24/7 Support',
                description: 'Always available for your needs'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Get Free Quote
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
