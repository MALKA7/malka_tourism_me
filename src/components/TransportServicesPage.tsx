import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, ArrowLeft, Calendar, Award, Car, Shield, Navigation, Plane, Building, Globe } from 'lucide-react';

interface TransportServicesPageProps {
  onPageChange: (page: string) => void;
}

const TransportServicesPage: React.FC<TransportServicesPageProps> = ({ onPageChange }) => {
  const vehicles = [
    {
      name: 'רכב פרטי',
      capacity: '1-2 נוסעים',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      passengerCount: 2
    },
    {
      name: 'SUV',
      capacity: '3-4 נוסעים',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      passengerCount: 4
    },
    {
      name: 'מיניו ואן',
      capacity: '5-10 נוסעים',
      image: '/transport bus.png',
      passengerCount: 10
    },
    {
      name: 'אוטובוסים',
      capacity: 'קבוצות גדולות',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      passengerCount: 25
    }
  ];

  const transportServices = [
    {
      title: 'תחבורה בעיר',
      description: 'נסיעות קצרות בתוך העיר לאתרים ולקניות',
      icon: Building
    },
    {
      title: 'נסיעות בין ערים',
      description: 'מסעות ארוכים בין יעדים שונים בהודו',
      icon: Navigation
    },
    {
      title: 'הסעות מנמל התעופה והחזרה',
      description: 'הסעות נוחות ובזמן לנמלי התעופה',
      icon: Plane
    },
    {
      title: 'קילומטרים נוספים יחויבו בנפרד',
      description: 'חיוב נוסף עבור מרחקים מעבר למוסכם',
      icon: MapPin
    },
    {
      title: 'שעות נוספות יחויבו בנפרד',
      description: 'תוספת תשלום עבור שעות מעבר למתוכנן',
      icon: Clock
    },
    {
      title: 'עבור נסיעות בין ערים חלה תוספת עלות לנהג',
      description: 'עלויות נוספות לנהג במסעות ארוכים',
      icon: Users
    }
  ];

  const destinations = [
    { name: 'בנגלור', image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg' },
    { name: 'מייסור', image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg' },
    { name: 'קוצ\'י', image: '/kerala boat.jpg' },
    { name: 'טריוונדרום', image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg' },
    { name: 'מומבאי', image: '/mumbai gateway.jpg' },
    { name: 'פונה', image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg' },
    { name: 'אגרה', image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg' },
    { name: 'דלהי', image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg' },
    { name: 'אמריצר', image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg' },
    { name: 'רישיקש', image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg' },
    { name: 'גואה', image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg' },
    { name: 'ג\'איפור', image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg' },
    { name: 'פושקר', image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg' }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/transport bus.png" 
            alt="שירותי הסעות ונהג"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              שירותי הסעות ונהג בהודו
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              נסיעות בטוחות ונוחות ברחבי הודו עם נהגים מקצועיים ואמינים. 
              רכבים איכותיים ושירות אישי למסע חלק ובטוח
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              הזמינו הסעות
            </button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <button onClick={() => onPageChange('home')} className="breadcrumb-item">בית</button>
            <span className="breadcrumb-separator">←</span>
            <button onClick={() => onPageChange('services')} className="breadcrumb-item">שירותים</button>
            <span className="breadcrumb-separator">←</span>
            <span className="text-blue-600 font-bold">שירותי הסעות ונהג</span>
          </div>
        </div>
      </div>

      {/* Vehicle Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              סוגי רכבים זמינים
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              בחרו את הרכב המתאים לגודל הקבוצה שלכם
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="relative">
                  <img 
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  {/* Passenger Capacity Indicator */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 ml-2" />
                      <span className="text-sm font-bold">
                        {vehicle.passengerCount === 25 ? '25+' : vehicle.passengerCount}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text text-center">{vehicle.name}</h3>
                  <p className="text-gray-600 hebrew-text text-center font-medium">{vehicle.capacity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              סוגי שירותי הסעות
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              שירותי תחבורה מקצועיים לכל צורך
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-text text-center">{service.title}</h3>
                <p className="text-gray-600 hebrew-text text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              יעדים פופולריים
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              ערים ויעדים שאנחנו מספקים אליהם שירותי הסעות
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <h3 className="text-lg font-bold hebrew-text text-center">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" 
                  alt="מלכה"
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300"
                />
                <h3 className="text-2xl font-bold text-gray-900 hebrew-text">מלכה איראני</h3>
                <p className="text-gray-700 hebrew-text">מתאמת הסעות בהודו</p>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-600 ml-3" />
                  <span className="text-gray-800">+91-9980601979</span>
                </div>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600 ml-3" />
                  <span className="text-gray-800">Malka@shalom-india.com</span>
                </div>
                <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600 ml-3 mt-1" />
                  <span className="text-gray-800">בנגלור, הודו</span>
                </div>
              </div>

              <button 
                onClick={() => onPageChange('contact')}
                className="w-full btn-primary py-4 text-lg"
              >
                הזמינו הסעות
              </button>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text">למה לבחור בנו?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ml-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 hebrew-text">בטיחות מקסימלית</h4>
                    <p className="text-gray-600 hebrew-text text-sm">נהגים מנוסים ורכבים מבוטחים</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center ml-4">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 hebrew-text">ידע מקומי</h4>
                    <p className="text-gray-600 hebrew-text text-sm">נהגים שמכירים את הדרכים הטובות ביותר</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center ml-4">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 hebrew-text">נוחות מלאה</h4>
                    <p className="text-gray-600 hebrew-text text-sm">רכבים מזוגנים ונוחים לנסיעות ארוכות</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center ml-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 hebrew-text">שירות מקצועי</h4>
                    <p className="text-gray-600 hebrew-text text-sm">15 שנות ניסיון בשירותי הסעות בהודו</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים לנסיעה בטוחה ונוחה?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            צרו קשר עוד היום להזמנת שירותי הסעות מקצועיים בהודו 
            עם נהגים אמינים ורכבים איכותיים
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              הזמינו הסעות
            </button>
            <a 
              href="https://wa.me/919980601979"
              className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportServicesPage;