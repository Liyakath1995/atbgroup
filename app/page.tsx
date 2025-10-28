import { ArrowRight, Shield, Award, Users, CheckCircle, TrendingUp, Clock, Star } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leading Traffic Management & Road Safety Solutions in Qatar',
  description: 'ATB Qatar delivers professional traffic management and road safety solutions. Trusted by Ashghal & MOI. Expert services in TTM, TMA Rental, Road Opening Permits, Traffic Diversion Plans, School Zone Safety, and Road Marking across Qatar.',
  openGraph: {
    title: 'ATB Qatar - Leading Traffic Management & Road Safety Solutions',
    description: 'Professional Traffic Management and Road Safety solutions in Qatar. Ashghal & MOI approved.',
  },
};

const services = [
  {
    number: '01',
    title: 'Temporary Traffic Management & TMA Rental',
    description: 'Expert TTM team ensuring safe traffic control. TMA rental services to protect workers and maintain smooth traffic flow.',
    icon: Shield,
    href: '/services/temporary-traffic-management',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    title: 'Road Opening (RO) Permit Services',
    description: 'Fast Ashghal QPRO Road Space Booking and RO Permits for all sectors in Qatar. Hassle-free approval process.',
    icon: CheckCircle,
    href: '/services/road-opening-permits',
    color: 'from-emerald-500 to-green-500'
  },
  {
    number: '03',
    title: 'Traffic Diversion Plan (TDP)',
    description: 'TTM drawing and design services compliant with Ashghal WZTMG. A-Class designers with Ashghal & MOI expertise.',
    icon: TrendingUp,
    href: '/services/traffic-diversion-plan',
    color: 'from-orange-500 to-amber-500'
  },
  {
    number: '04',
    title: 'School Zone Safety Development',
    description: 'Complete School Zone safety services from approvals to implementation for schools, nurseries, and colleges.',
    icon: Shield,
    href: '/services/school-zone-safety',
    color: 'from-pink-500 to-rose-500'
  },
  {
    number: '05',
    title: 'Road Marking',
    description: 'High-quality road marking using Thermoplastic Paint, Cold Plastic Paint, Cycle Track Coating, and removal services.',
    icon: Award,
    href: '/services/road-marking',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    number: '06',
    title: 'Traffic Signages',
    description: 'Supply and installation of permanent and temporary traffic signs as per Ashghal standards.',
    icon: Award,
    href: '/services/traffic-signages',
    color: 'from-cyan-500 to-blue-500'
  },
];

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Expert Team Members' },
  { value: '24/7', label: 'Support Available' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Trusted by Ashghal & MOI</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              On the Road to Becoming<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Qatar's No.1
              </span>
              <br />in Road Safety & Traffic Management
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Delivering smart and reliable Traffic Management and Road Safety solutions that make every journey safer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/services"
                className="group inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Delivering smart and reliable Traffic Management and Road Safety solutions that make every journey safer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become a trusted leader in Traffic Management and Road Safety across Qatar and the Middle East.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive traffic management and road safety solutions tailored for Qatar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${service.color}`}></div>

                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose ATB Qatar?
            </h2>
            <p className="text-xl text-blue-100">
              Your trusted partner in traffic management and road safety
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Ashghal & MOI Approved',
                description: 'Strong reputation with Qatar\'s leading authorities'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Highly experienced and knowledgeable professionals'
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Fast, accurate, and reliable service delivery'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-yellow-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-primary-600 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Contact Us Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
