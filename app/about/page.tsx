import { Shield, Award, Users, Target, Eye, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Professional Traffic Management & Road Safety Firm in Qatar',
  description: 'ATB Qatar is a professional engineering firm with a highly experienced team delivering innovative Traffic Management and Road Safety solutions. Trusted by Ashghal and Ministry of Interior (MOI) across Qatar.',
  openGraph: {
    title: 'About ATB Qatar - Leading Traffic Management Experts',
    description: 'Professional engineering firm specializing in Traffic Management and Road Safety solutions in Qatar.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About ATB Qatar
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Professional engineering firm specializing in Traffic Management and Road Safety solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Delivering smart and reliable Traffic Management and Road Safety solutions that make every journey safer. We are committed to excellence in every project we undertake.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-10 rounded-3xl shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a trusted leader in Traffic Management and Road Safety across Qatar and the Middle East, setting new standards for quality and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6 font-semibold">
                <Shield className="w-5 h-5 mr-2" />
                About Us
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional Engineering Excellence
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ATB is a professional engineering firm specializing in Traffic Management and Road Safety solutions. With a highly experienced and knowledgeable team, we deliver innovative and reliable services that ensure safe and efficient road operations.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our strong reputation with Ashghal and the Ministry of Interior (MOI) reflects our commitment to quality, compliance, and excellence across every project. We understand the unique challenges of Qatar's infrastructure and provide tailored solutions that meet the highest standards.
              </p>

              <div className="space-y-4">
                {[
                  'Ashghal & MOI Approved Partner',
                  'Highly Experienced Team',
                  'Innovative Solutions',
                  'Quality & Compliance Focused',
                  'Proven Track Record',
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Expert Team Members</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                description: 'Safety is at the core of everything we do. We prioritize the wellbeing of road users, workers, and the public.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
                color: 'from-purple-500 to-indigo-500'
              },
              {
                icon: CheckCircle,
                title: 'Reliability',
                description: 'Our clients trust us to deliver on time, every time. We build lasting relationships through consistent performance.',
                color: 'from-emerald-500 to-green-500'
              },
            ].map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner with the Best
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's work together to make Qatar's roads safer
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
