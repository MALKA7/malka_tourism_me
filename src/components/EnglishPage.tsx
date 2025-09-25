import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, MessageCircle, Globe, Award, Shield, Car, Camera, Building, Waves, Mountain, Facebook, Instagram, Youtube, CheckCircle } from 'lucide-react';

interface EnglishPageProps {
  onPageChange: (page: string) => void;
}

const EnglishPage: React.FC<EnglishPageProps> = ({ onPageChange }) => {
  const destinations = [
    {
      name: 'Mumbai',
      image: '/mumbai gateway.jpg',
      description: 'Financial capital of India'
    },
    {
      name: 'Bangalore',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'Garden city and IT hub'
    },
    {
      name: 'Kochi',
      image: '/kerala boat.jpg',
      description: 'Queen of Arabian Sea'
    },
    {
      name: 'Delhi',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'Historic capital city'
    },
    {
      name: 'Goa',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'Tropical beach paradise'
    },
    {
      name: 'Kolkata',
      image: '/kolkata.png',
      description: 'Cultural capital of India'
    },
    {
      name: 'Agra',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'Home of Taj Mahal'
    },
    {
      name: 'Mysore',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'City of palaces'
    }
  ];

  const services = [
    {
      image: '/plan tour.png',
      icon: Globe,
      title: 'Custom Trip Planning', 
      description: 'Specifically for your interests and budget with Malka.'
    },
    {
      image: '/tours w malka.png',
      icon: Users,
      title: 'Cultural Experience Guide',
      description: 'Personalized tours of India\'s cities, markets, and cultural experiences offering insight into local life, cuisine, and traditions.'
    },
    {
      image: '/transport bus.png',
      icon: Car,
      title: 'Transportation Services',
      description: 'Comfortable air-conditioned vehicles with professional drivers for safe travel across India'
    },
    {
      image: '/booking.png',
      icon: Building,
      title: 'Accommodation Booking',
      description: 'Hand-picked hotels and guesthouses that Malka has personally visited and approved'
    },
    {
      image: '/organised tours.png',
      icon: Users,
      title: 'Organized Tours for Groups',
      description: 'Join our organized group tours with other travelers for a shared cultural experience'
    },
    {
      image: '/Home stay malka.png',
      icon: Building,
      title: 'Home Stay in Bangalore',
      description: 'Experience authentic Indian hospitality at Malka\'s private villa in North Bangalore'
    }
  ];

  const whyChooseMalka = [
    {
      icon: Award,
      title: '15 Years Experience',
      description: 'Living in India since 2010 and knows the country like the back of her hand'
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      description: 'Hundreds of satisfied customers and excellent reviews'
    },
    {
      icon: Globe,
      title: 'Local Knowledge',
      description: 'Speaks Hindi and understands local culture deeply'
    },
    {
      icon: Users,
      title: 'English-Speaking Guide',
      description: 'Professional Israeli guide fluent in English'
    }
  ];

  return (
    <div className="min-h-screen fade-in" dir="ltr">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/mumbai gateway.jpg)` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-left">
            Discover India with Malka
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-left">
            Personalized tours of India with Cultural Experience guide who has lived in India for 15 years
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Plan Your Journey
            </button>
            <a 
              href="https://wa.me/+919980601979"
              className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 gap-6">
              <img 
                src="/mumbai gateway.jpg" 
                alt="Malka in Mumbai - Gateway of India"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/tours w malka.png" 
                alt="Malka with tour groups in India"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/Home stay malka.png" 
                alt="Malka's villa in Bangalore"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6 text-left">
              <h2 className="text-4xl font-bold text-gray-900 text-left">
                Hello, I'm Malka Irani!
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-left">
                I fell in love with India when I was 8 years old, and by luck—or perhaps a "calling"—I married an Indian man from the Zoroastrian community. I moved to India with my husband and twins, and since then, I haven't stopped exploring this amazing country.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-left">
                Originally from the Holy Land, I have spent many years building deep connections with Indian culture. I have lived in Mumbai, Bangalore, and Delhi NCR since 2010, and having raised children in India, I understand the unique needs of travelers with kids, including those from Western countries visiting India. Professionally, I am a clinical psychologist and completed my second degree in Mumbai.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-left">
                I specialize in Cultural tours that combine the most breathtaking sites with authentic experiences known only to locals, such as markets and cultural experiences, offering insight into local life, cuisine, and traditions. For historical monuments and museums, I work alongside licensed guides to ensure complete experiences. My goal is for you to return home with lifelong memories and a deeper understanding of Indian culture.
               </p>
               <p className="text-lg text-gray-700 leading-relaxed text-left">
                I conduct all tours in English, with confidence and lots of love—that's how I guide my tours. Having lived in India for many years, I speak fluent English and can communicate a little in Hindi, making me your perfect bridge to authentic India. I also drive in India, and it always makes me happy when locals sometimes confuse me for an Indian—it's my little way of feeling truly at home here.
               </p>
               <p className="text-lg text-gray-700 leading-relaxed text-left">
                <strong>Please note:</strong> I spend a few months in India and a few months abroad, so booking my experience as a Cultural tour guide well in advance is recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Malka Section - New Design */}
      <section className="py-20 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Malka?
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The reasons that make Malka the leading guide in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Safety & Comfort</h3>
              <p className="text-blue-200 leading-relaxed">Trusted transportation, vetted hotels, and family-friendly options for worry-free travel.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cultural Insight</h3>
              <p className="text-blue-200 leading-relaxed">Authentic experiences, guidance on customs, and a bridge between cultures.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Personalized Experiences</h3>
              <p className="text-blue-200 leading-relaxed">Markets, cultural activities, monuments, and licensed guides for full experiences.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Stress-Free Travel</h3>
              <p className="text-blue-200 leading-relaxed">I handle logistics—hotels, transfers, meals, tickets—so you can focus on exploring India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto font-medium mb-8 text-center">
              Professional & Trusted travel services in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900 text-left">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-left">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Explore India's most captivating cities with expert Private Tour Coordinator
            </p>
          </div>

          {/* Destinations Grid - 4x2 layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {destinations.map((destination, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                <img 
                  src={destination.image}
                  alt={`${destination.name} - ${destination.description}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1 text-left">{destination.name}</h3>
                  <p className="text-sm opacity-90 text-left">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tour Information */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-start text-left">
                <Globe className="w-12 h-12 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold text-blue-900 mb-2 text-left">English Tours</h3>
                <p className="text-blue-700 text-left">All tours conducted in English with Western guide</p>
              </div>
              
              <div className="flex flex-col items-start text-left">
                <Car className="w-12 h-12 text-green-600 mb-3" />
                <h3 className="text-lg font-bold text-blue-900 mb-2 text-left">Transportation</h3>
                <p className="text-blue-700 text-left">Transportation included</p>
              </div>
              
              <div className="flex flex-col items-start text-left">
                <Clock className="w-12 h-12 text-purple-600 mb-3" />
                <h3 className="text-lg font-bold text-blue-900 mb-2 text-left">Duration</h3>
                <p className="text-blue-700 text-left">Duration: 8 hours</p>
              </div>
              
              <div className="flex flex-col items-start text-left">
                <Award className="w-12 h-12 text-orange-600 mb-3" />
                <h3 className="text-lg font-bold text-blue-900 mb-2 text-left">Unique Experience</h3>
                <p className="text-blue-700 text-left">Unique way of exploring India that no other Cultural guide offers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Malka Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Malka?
            </h2>
            <p className="text-xl text-gray-600">
              The reasons that make Malka the leading guide in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {whyChooseMalka.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to explore India? Get in touch with Malka to plan your perfect Indian adventure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-left">Phone</h4>
                    <a href="tel:+919980601979" className="text-blue-600 hover:text-blue-800">
                      +91-9980601979
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-left">Email</h4>
                    <a 
                      href="mailto:malka@shalom-india.com?subject=Ref:%20IndiabyMalka%20Website"
                      className="text-orange-600 hover:text-orange-800"
                    >
                      malka@shalom-india.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-left">WhatsApp</h4>
                    <a 
                      href="https://wa.me/+919980601979"
                      className="text-green-600 hover:text-green-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91-9980601979
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-left">Location</h4>
                    <p className="text-purple-600">Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">Follow Us</h4>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://www.facebook.com/groups/680827564461843"
                    className="social-icon facebook hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Join our Facebook group"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/indiabymalka/"
                    className="social-icon instagram hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Follow us on Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  
                  <a 
                    href="https://www.youtube.com/@INDIABYMALKA"
                    className="social-icon youtube hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Watch our YouTube videos"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                  
                  <a 
                    href="mailto:malka@shalom-india.com?subject=Ref:%20IndiabyMalka%20Website"
                    className="social-icon email hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    title="Send us an email"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  
                  <a 
                    href="https://wa.me/+919980601979"
                    className="social-icon whatsapp hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Message us on WhatsApp"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Group Size</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option value="">Select group size</option>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3-4">3-4 people</option>
                      <option value="5-8">5-8 people</option>
                      <option value="9+">9+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Travel Dates</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="e.g., March 2024 or flexible"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Subject *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option value="">Choose a subject</option>
                    <option value="trip-planning">Custom Trip Planning</option>
                    <option value="organized-tour">Organized Tour</option>
                    <option value="city-tour">City Tour</option>
                    <option value="accommodation">Personal Hosting</option>
                    <option value="transport">Transportation Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Message *</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your dream trip to India, your interests, and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Indian Adventure?
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-95">
              Contact Malka today and let's start planning your dream trip to incredible India 
              with professional English-speaking guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Plan Your Trip
              </button>
              <a 
                href="https://wa.me/+919980601979"
                className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnglishPage;