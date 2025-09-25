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
      title: 'Tour Packages',
      description: 'Hand-picked hotels and guesthouses that Malka has personally visited and approved'
    },
    {
      image: '/organised tours.png',
      icon: Users,
      title: 'Organized Tours for Groups',
      description: 'Let Malka join your group as a Cultural and City Escort, ensuring a rich and memorable experience.'
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
              Experience India with Malka – Here's Why
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The reasons International Travelers Choose Malka's Services
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

          <div className="text-center mt-12">
            <a 
              href="mailto:malka@shalom-india.com?subject=Ref:%20Indiabymalka%20website"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-8"
            >
              <Mail className="w-5 h-5 mr-3" />
              Contact Malka
            </a>
            
            <div className="bg-blue-100 p-6 rounded-xl border border-blue-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-3 text-center">English-Speaking Cultural Guide</h3>
              <p className="text-blue-800 leading-relaxed text-center">
                All tours are conducted in English by Malka, who has lived in India for over 15 years and understands both Western and Indian cultures.
              </p>
              <p className="text-blue-800 leading-relaxed mt-4 text-center">
                For Historical monuments and museums, Malka works alongside licensed guides to ensure a complete experience.
              </p>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{destination.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <span>8 hours</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Car className="w-5 h-5 text-green-600 mr-3" />
                      <span>Air-conditioned vehicle</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600 mr-3" />
                      <span>English-speaking guide</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-lg mr-3">🏛️</span>
                      <span className="text-sm">Licensed guide at heritage sites</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-2 text-center">Tour Highlights:</h4>
                    <p className="text-gray-600 text-center text-sm">{destination.description}</p>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="mailto:malka@shalom-india.com?subject=Ref:%20Indiabymalka%20website"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 mr-3" />
              Contact Malka
            </a>
          </div>
        </div>
      </section>

      {/* YouTube Video Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Inside India: Videos by Malka
            </h2>
            <p className="text-xl text-gray-600">
              Explore India's culture, heritage, and hidden gems through Malka's YouTube videos for travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Video 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/aXMoMrTe5lA"
                  title="India Tour Experience 1"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/el6lc9AdRLs"
                  title="India Tour Experience 2"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/JB-81GuRdgc"
                  title="India Tour Experience 3"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Video 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/WiTU4Q3AvEI"
                  title="India Tour Experience 4"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/EFyEt2Jo1DQ"
                  title="India Tour Experience 5"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
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
                      title="Subscribe to our YouTube channel"
                    >
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Malka's Image */}
            <div className="lg:col-span-1">
              <img 
                src="/Malka.jpg" 
                alt="Malka Irani - English-speaking tour guide in India"
                className="w-full h-full object-cover rounded-xl shadow-lg max-w-sm mx-auto"
              />
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
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
        </div>
      </section>
    </div>
  );
};

export default EnglishPage;