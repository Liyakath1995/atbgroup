import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ATB Qatar - Get Free Quote for Traffic Management Services',
  description: 'Contact ATB Qatar for professional traffic management and road safety services. Get free quotes for TTM, Road Opening Permits, Traffic Diversion Plans, and more. Based in Doha, Qatar.',
  keywords: ['contact ATB Qatar', 'traffic management quote Qatar', 'Doha traffic services', 'Qatar road safety contact'],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Get in touch for professional traffic management and road safety solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get a Free Quote
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="+974 XXXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="ttm">Temporary Traffic Management & TMA Rental</option>
                    <option value="ro-permit">Road Opening Permit Services</option>
                    <option value="tdp">Traffic Diversion Plan</option>
                    <option value="school-safety">School Zone Safety</option>
                    <option value="road-marking">Road Marking</option>
                    <option value="signages">Traffic Signages</option>
                    <option value="interlock">Interlock and Kerb Stone</option>
                    <option value="vrs">Vehicle Restraint Systems</option>
                    <option value="consultation">Traffic Management Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out to us through any of the following channels. We're here to help with all your traffic management needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">
                      Doha, Qatar
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      +974 XXXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                      info@atbqatar.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Sunday - Thursday: 7:00 AM - 5:00 PM<br />
                      Friday - Saturday: Closed<br />
                      Emergency Services: 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Why Choose ATB Qatar?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span>Ashghal & MOI Approved</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span>Experienced Professionals</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span>Fast Response Times</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span>Quality Guaranteed</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span>Competitive Pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Find Us in Doha
          </h2>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Map integration coming soon</p>
              <p className="text-gray-500">Doha, Qatar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
