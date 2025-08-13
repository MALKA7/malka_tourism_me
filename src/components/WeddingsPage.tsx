import React, { useState } from 'react';
import { Heart, Camera, Music, Flower, Users, Star, Phone, Mail, MapPin, Calendar, Crown, Gift, Sparkles, Globe } from 'lucide-react';

interface WeddingsPageProps {
  onPageChange: (page: string) => void;
}

const WeddingsPage: React.FC<WeddingsPageProps> = ({ onPageChange }) => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const weddingPackages = [
    {
      id: 'intimate',
      name: 'חתונה אינטימית',
      price: '$3,500',
      guests: 'עד 50 אורחים',
      duration: '3 ימים',
      image: '/Bride.jpg',
      features: [
        'טקס חתונה הינדי מסורתי',
        'צלם מקצועי לכל האירוע',
        'עיצוב פרחים הודי מסורתי',
        'מוזיקה הודית חיה',
        'ארוחות מסורתיות',
        'תלבושות הודיות לזוג',
        'מקום מקודש לטקס',
        'תיאום מלא של האירוע'
      ]
    },
    {
      id: 'royal',
      name: 'חתונה מלכותית',
      price: '$8,500',
      guests: 'עד 150 אורחים',
      duration: '5 ימים',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      features: [
        'חתונה בארמון או מלון יוקרה',
        'צוות צילום ווידאו מקצועי',
        'עיצוב פרחים מפואר',
        'הופעות מוזיקה ומחול',
        'מגוון ארוחות גורמה',
        'תלבושות מעוצבות לכל המשפחה',
        'דקורציה מלכותית',
        'ליווי מלא של מתאם אירועים',
        'הסעות יוקרה לאורחים',
        'חבילת ספא לכלה'
      ]
    },
    {
      id: 'destination',
      name: 'חתונת יעד',
      price: '$12,000',
      guests: 'עד 100 אורחים',
      duration: '7 ימים',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      features: [
        'חתונה ביעד אקזוטי (גואה/קרלה/רג\'סטאן)',
        'צוות הפקה מלא',
        'צילום אווירי ומקצועי',
        'אירוח מלא לאורחים',
        'פעילויות תרבותיות',
        'טיולים לאורחים',
        'ארוחות גורמה מגוונות',
        'בידור מסורתי והופעות',
        'דקורציה יוקרתית',
        'שירותי קונסיירז׳ 24/7',
        'חבילת ירח דבש',
        'מזכרות מיוחדות לאורחים'
      ]
    }
  ];

  const weddingStyles = [
    {
      name: 'חתונה הינדית מסורתית',
      image: '/Bride.jpg',
      description: 'טקס מסורתי מלא עם כל הפולחנים ההינדיים',
      features: ['טקס הקדושין', 'ברכות מסורתיות', 'תלבושות מסורתיות', 'מוזיקה דתית']
    },
    {
      name: 'חתונה בסגנון מהרג\'ה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'חתונה מלכותית בסגנון הארמונות ההודיים',
      features: ['ארמון או מלון יוקרה', 'דקורציה מלכותית', 'הופעות מחול', 'ארוחות גורמה']
    },
    {
      name: 'חתונה בחוף טרופי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'חתונה רומנטית על חופי גואה או קרלה',
      features: ['חוף פרטי', 'שקיעה רומנטית', 'דקורציה טרופית', 'ארוחת ים']
    }
  ];

  const weddingServices = [
    {
      icon: Crown,
      title: 'תכנון מלא',
      description: 'תכנון מקצועי של כל פרטי החתונה'
    },
    {
      icon: Camera,
      title: 'צילום ווידאו',
      description: 'צוות צילום מקצועי לתיעוד האירוע'
    },
    {
      icon: Flower,
      title: 'עיצוב פרחים',
      description: 'עיצוב פרחים הודי מסורתי ומרהיב'
    },
    {
      icon: Music,
      title: 'מוזיקה ובידור',
      description: 'מוזיקה הודית חיה והופעות מחול'
    },
    {
      icon: Gift,
      title: 'תלבושות מסורתיות',
      description: 'תלבושות הודיות מעוצבות לזוג ולמשפחה'
    },
    {
      icon: Users,
      title: 'ליווי אורחים',
      description: 'ליווי מלא של האורחים לאורך השהייה'
    }
  ];

  const testimonials = [
    {
      name: 'רונית ואבי כהן',
      location: 'תל אביב',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      text: 'החתונה שלנו בהודו עם מלכה הייתה חלום שהתגשם! כל פרט היה מושלם - מהטקס המרגש ועד לחגיגה המדהימה. האורחים שלנו עדיין מדברים על החוויה הבלתי נשכחת.',
      weddingType: 'חתונה מלכותית בבנגלור',
      date: 'דצמבר 2023'
    },
    {
      name: 'דני ושרה לוי',
      location: 'חיפה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      text: 'מלכה הפכה את החתונה שלנו לאגדה! הטקס על החוף בגואה היה קסום, והאורחים נהנו מכל רגע. התכנון המקצועי שלה גרם לכל להיות מושלם.',
      weddingType: 'חתונה על החוף בגואה',
      date: 'פברואר 2024'
    },
    {
      name: 'יוסי ורחל גולן',
      location: 'ירושלים',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      text: 'החתונה ההינדית המסורתית שלנו הייתה חוויה רוחנית ותרבותית מדהימה. מלכה דאגה לכל הפרטים והטקס היה מרגש ואותנטי.',
      weddingType: 'חתונה הינדית מסורתית',
      date: 'נובמבר 2023'
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/Bride.jpg" 
            alt="חתונות בהודו"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              חתונות בהודו המופלאה
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              חוו את החתונה של החלומות שלכם בהודו הקסומה. מטקסים מסורתיים מרגשים 
              ועד חתונות מלכותיות מפוארות - נגשים את החלום שלכם
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              תכננו את החתונה שלכם
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
            <span className="text-blue-600 font-bold">חתונות בהודו</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              חתונה בהודו - חלום שמתגשם
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto hebrew-text leading-relaxed">
              הודו היא המקום המושלם לחתונה בלתי נשכחת. עם התרבות העשירה, הצבעים הזוהרים 
              והמסורות הקסומות, החתונה שלכם תהיה חוויה מיוחדת לכל החיים
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-red-50 p-8 rounded-xl border border-pink-200">
            <div className="flex items-start">
              <div className="text-4xl ml-4">
                <Sparkles className="w-12 h-12 text-pink-600" />
              </div>
              <div>
                <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                  מלכה מתמחה בארגון חתונות בהודו עבור זוגות ישראלים שרוצים חוויה ייחודית ואותנטית. 
                  עם הניסיון שלה בתרבות ההודית והקשרים המקומיים, היא יוצרת חתונות קסומות ובלתי נשכחות.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                  <strong>מלכה מארגנת חתונות בהודו לאחר שחיה במדינה ומכירה את המסורות והתרבות המקומית.</strong> 
                  כל חתונה מותאמת אישית לרצונות הזוג ומשלבת מסורות הודיות עם צרכים ישראליים.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Styles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              סגנונות חתונה בהודו
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              בחרו את הסגנון שמתאים לכם ביותר
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingStyles.map((style, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={style.image}
                  alt={style.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">{style.name}</h3>
                  <p className="text-gray-600 hebrew-text mb-4">{style.description}</p>
                  <div className="space-y-2">
                    {style.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2 flex-shrink-0" />
                        <span className="text-gray-700 hebrew-text text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              חבילות חתונה
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              חבילות מקיפות לחתונה מושלמת בהודו
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 ${
                  selectedPackage === pkg.id ? 'border-pink-500' : 'border-gray-200'
                }`}
                onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
              >
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 hebrew-text">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-pink-600 mb-2">{pkg.price}</div>
                    <div className="text-gray-600 hebrew-text">{pkg.guests} • {pkg.duration}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {pkg.features.slice(0, selectedPackage === pkg.id ? pkg.features.length : 4).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2 flex-shrink-0" />
                        <span className="text-gray-700 hebrew-text text-sm">{feature}</span>
                      </div>
                    ))}
                    {!selectedPackage && pkg.features.length > 4 && (
                      <div className="text-center mt-2">
                        <span className="text-blue-600 hebrew-text text-sm font-medium">לחצו לפרטים נוספים...</span>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onPageChange('contact');
                    }}
                    className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300"
                  >
                    בחרו חבילה זו
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              השירותים שלנו
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              כל מה שאתם צריכים לחתונה מושלמת בהודו
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingServices.map((service, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 hebrew-text">{service.title}</h3>
                <p className="text-gray-600 hebrew-text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              זוגות שחגגו איתנו
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              חוויות אמיתיות של זוגות ישראלים שחגגו בהודו
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl shadow-lg border border-pink-200">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-pink-200"
                  />
                  <div className="mr-4">
                    <h3 className="font-bold text-gray-900 hebrew-text">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm hebrew-text">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="bg-white px-3 py-2 rounded-lg mb-2">
                    <span className="text-pink-800 hebrew-text text-sm font-medium">{testimonial.weddingType}</span>
                  </div>
                  <div className="text-xs text-gray-600 hebrew-text">{testimonial.date}</div>
                </div>
                
                <p className="text-gray-700 hebrew-text leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים לחתונה של החלומות?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            צרו קשר עם מלכה עוד היום ונתחיל לתכנן את החתונה המושלמת שלכם בהודו הקסומה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              תכננו את החתונה
            </button>
            <a 
              href="https://wa.me/919980601979"
              className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
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

export default WeddingsPage;