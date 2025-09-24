import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Award, Shield, Globe, Heart, Car, Hotel, MessageCircle, FileText, CreditCard } from 'lucide-react';

interface OrganizedToursPageProps {
  onPageChange: (page: string) => void;
}

const OrganizedToursPage: React.FC<OrganizedToursPageProps> = ({ onPageChange }) => {
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
      passengerCount: 20
    }
  ];

  const suitableFor = [
    {
      icon: Users,
      title: 'משפחות עם ילדים',
      description: 'חוויות מותאמות למשפחות עם פעילויות לכל הגילאים'
    },
    {
      icon: Heart,
      title: 'קבוצות חברים',
      description: 'טיולים מהנים וחווייתיים לקבוצות חברים'
    },
    {
      icon: Globe,
      title: 'קבוצות פרטיות של 6–20 אנשים',
      description: 'טיולים מותאמים לקבוצות בגדלים שונים'
    },
    {
      icon: MessageCircle,
      title: 'מטיילים שרוצים חוויה אישית בעברית',
      description: 'הדרכה מקצועית בעברית עם הבנה תרבותית'
    }
  ];

  const services = [
    {
      icon: MapPin,
      title: 'בניית מסלול מותאם אישית',
      description: 'לפי הצרכים, התקציב והעדפות'
    },
    {
      icon: Hotel,
      title: 'תיאום מלונות',
      description: 'רק מקומות שנבדקו על ידי מלכה'
    },
    {
      icon: Car,
      title: 'שירותי רכב',
      description: 'רכבים פרטיים, מיניבוסים או אוטובוסים לקבוצות'
    },
    {
      icon: Users,
      title: 'מדריכה בעברית',
      description: 'אפשרות שמלכה תצטרף לטיול בכל נקודה בהודו'
    },
    {
      icon: Phone,
      title: 'סיוע שוטף',
      description: 'ליווי טלפוני ועזרה בכל בקשה'
    }
  ];

  const processSteps = [
    {
      number: 1,
      icon: MessageCircle,
      title: 'ייעוץ והבנת מחירי תכנון והפקה',
      description: 'יצירת קשר ראשוני להבנת הצרכים והתקציב'
    },
    {
      number: 2,
      icon: CreditCard,
      title: 'תשלום ראשוני להבטחת המשך תהליך',
      description: 'תשלום ראשוני להתחלת התהליך המקצועי'
    },
    {
      number: 3,
      icon: FileText,
      title: 'מסירת תוכנית טיול',
      description: 'לאחר שתוכנית הטיול תועבר בכתב, מתחילה הפקה בפועל של המסלול'
    },
    {
      number: 4,
      icon: Hotel,
      title: 'הצגת תמחור ומלונות',
      description: 'מלכה מספקת תמחור מפורט יחד עם רשימת המלונות שבהם היא בדקה והתנסתה, לרבות עלות רכבים ולפי בקשה גם מדריכים וכניסות לאתרים'
    },
    {
      number: 5,
      icon: CheckCircle,
      title: 'שינויים והתאמות',
      description: 'במידת הצורך, מבוצעים שינויים והתאמות עד לאישור הסופי של המטייל'
    },
    {
      number: 6,
      icon: Calendar,
      title: 'תשלום סופי והזמנות',
      description: 'לאחר אישור התוכנית הסופי, מתבצע תשלום מלא והזמנת החדרים, רכבים ושירותים נלווים'
    },
    {
      number: 7,
      icon: Shield,
      title: 'ליווי בהודו',
      description: 'במהלך הטיול, מתקיים ליווי יומי אישי והנכונות לסייע בכל בקשה או צורך שצץ במהלך המסע'
    }
  ];

  const uniqueAdvantages = [
    'מלכה חיה בהודו מעל 15 שנה',
    'ניסיון עשיר בהדרכת קבוצות ומשפחות ישראליות',
    'הבנה מלאה בצרכים ישראליים (כשרות, ילדים, נוחות)',
    'קשרים ישירים עם נהגים, מדריכים ומלונות – ללא מתווכים'
  ];

  const testimonials = [
    {
      name: 'תומר כנעני',
      location: 'קבוצת חברים של נהגי אגד',
      rating: 5,
      text: 'היינו קבוצה של 14 מטיילים והכל התנהל בצורה טובה במשך יומיים למדנו המון על מומבאי בפרט והודו בכלל יש לציין את הידע הרב של מלכה וצורת ההדרכה כולנו מודים לה מאוד על ההדרכה והשרות הנלווה.'
    },
    {
      name: 'קבוצת חברים מחיפה',
      location: 'חיפה',
      rating: 5,
      text: 'הטיול הכי טוב שעשינו! מלכה דאגה לכל הפרטים והמלונות היו מעולים. בהחלט נחזור אליה לטיול הבא בהודו.'
    },
    {
      name: 'משפחת לוי',
      location: 'ירושלים',
      rating: 5,
      text: 'שירות מקצועי ברמה הכי גבוהה! הילדים נהנו מכל רגע והמדריכה דיברה עברית מושלמת. ממליצים בחום!'
    },
    {
      name: 'קבוצת נשים מרמת גן',
      location: 'רמת גן',
      rating: 5,
      text: 'חוויה בלתי נשכחת! מלכה הראתה לנו את הודו האמיתית עם הדרכה מקצועית ואישית. הטיול היה מאורגן בצורה מושלמת.'
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/organised tours.png" 
            alt="סיורים בעברית לקבוצות בהודו"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              סיורים בעברית לקבוצות בהודו – עם מלכה
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              טיולים מאורגנים מקצועיים לקבוצות עם הדרכה בעברית ותכנון מותאם אישית
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              צור קשר לתכנון הטיול שלכם
            </button>
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              למי מתאים?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {suitableFor.map((item, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-text">{item.title}</h3>
                <p className="text-gray-600 hebrew-text leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מה השירות כולל?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 hebrew-text">{service.title}</h3>
                <p className="text-gray-600 hebrew-text text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              איך זה עובד?
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              שלבי הפקת טיול בהודו עם מלכה
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                <div className="mr-4">
                  <step.icon className="w-8 h-8 text-blue-600 mb-2" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-3 hebrew-text text-xl">{step.title}</h4>
                  <p className="text-gray-700 hebrew-text leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              יתרונות ייחודיים
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {uniqueAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-center p-6 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-800 hebrew-text font-medium leading-relaxed">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מה אומרים הלקוחות
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">חוויות אמיתיות של קבוצות ישראליות שטיילו עם מלכה</p>
          </div>

          {/* Photos with Malka and Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/tours w malka.png"
                alt="מלכה עם קבוצה גדולה"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-lg font-medium hebrew-text text-center">מלכה עם קבוצה בטיול מאורגן</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/organised tours.png"
                alt="קבוצה גדולה בטיול"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-lg font-medium hebrew-text text-center">קבוצות ישראליות בהודו</p>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 hebrew-text leading-relaxed italic mb-4 text-sm">
                  "{testimonial.text}"
                </p>
                
                <div className="text-center">
                  <div className="font-bold text-gray-900 hebrew-text">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm hebrew-text">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            צור קשר עם מלכה ותתחיל לתכנן את הטיול שלכם בהודו
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            מוכנים לחוויה בלתי נשכחת בהודו עם קבוצה שלכם? 
            מלכה תדאג לכל הפרטים ותעניק לכם טיול מושלם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              תכננו את הטיול שלכם
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

export default OrganizedToursPage;