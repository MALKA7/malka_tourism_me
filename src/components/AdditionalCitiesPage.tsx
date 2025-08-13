import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Building, Waves, Mountain, Globe, Award, Shield } from 'lucide-react';

interface AdditionalCitiesPageProps {
  onPageChange: (page: string) => void;
}

const AdditionalCitiesPage: React.FC<AdditionalCitiesPageProps> = ({ onPageChange }) => {
  const cities = [
    {
      name: 'בנגלור',
      subtitle: 'עיר הגנים ובירת הטכנולוגיה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'גלו את "עיר הגנים" של הודו - בנגלור, בירת הטכנולוגיה עם ההיסטוריה העשירה.',
      highlights: [
        'ארמון טיפו סולטן',
        'גנים בוטניים לאל באג',
        'מקדש בול העתיק',
        'ארמון בנגלור המפואר',
        'שוק KR מרקט הצבעוני',
        'פארק קובון הירוק'
      ],
      duration: '8 שעות',
      price: '$120-180',
      onClick: () => onPageChange('bangalore-tours')
    },
    {
      name: 'גואה',
      subtitle: 'פנינת החוף הטרופי',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'גלו את פנינת החוף של הודו - גואה, עם החופים הטרופיים והתרבות הפורטוגזית.',
      highlights: [
        'חוף באגה הפופולרי',
        'חוף קלנגוט התוסס',
        'פנאג\'י - הבירה הקסומה',
        'כנסיית בום ג\'זוס',
        'שוק מפלם הלילי',
        'מפלי דודסגר'
      ],
      duration: '8 שעות',
      price: '$100-150',
      onClick: () => onPageChange('goa-tours')
    },
    {
      name: 'קוצ\'י',
      subtitle: 'מלכת הים הערבי',
      image: '/kerala boat.jpg',
      description: 'גלו את "מלכת הים הערבי" - קוצ\'י, עיר הנמל ההיסטורית של קרלה.',
      highlights: [
        'רשתות דיג סיניות מפורסמות',
        'ארמון מטנצ\'רי ההיסטורי',
        'בית כנסת פרדסי עתיק',
        'כנסיית סנט פרנסיס',
        'שוק התבלינים הארומטי',
        'פורט קוצ\'י העתיקה'
      ],
      duration: '8 שעות',
      price: '$110-160',
      onClick: () => onPageChange('kochi-tours')
    },
    {
      name: 'דלהי',
      subtitle: 'הבירה ההיסטורית',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'גלו את הבירה ההיסטורית של הודו עם האתרים המפורסמים והתרבות העשירה.',
      highlights: [
        'המצודה האדומה',
        'שער הודו',
        'מסגד ג\'אמה',
        'קבר הומיון',
        'קוטב מינאר',
        'שוק צ\'אנדני צ\'וק'
      ],
      duration: '8 שעות',
      price: '$130-200',
      onClick: () => onPageChange('contact')
    },
    {
      name: 'אגרה',
      subtitle: 'עיר הטאג\' מהאל',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'בקרו באחד מפלאי העולם - הטאג\' מהאל המפורסם ואתרים נוספים באגרה.',
      highlights: [
        'הטאג\' מהאל בשקיעה',
        'מצודת אגרה האדומה',
        'קבר איתמאד-אוד-דאולה',
        'מהתאב באג הנטוש',
        'שווקי אגרה המסורתיים',
        'מלאכת השיש המקומית'
      ],
      duration: '10 שעות',
      price: '$150-250',
      onClick: () => onPageChange('contact')
    },
    {
      name: 'ג\'איפור',
      subtitle: 'העיר הוורודה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'גלו את "העיר הוורודה" של רג\'סטאן עם הארמונות המלכותיים והתרבות הצבעונית.',
      highlights: [
        'ארמון הרוחות (האווה מהאל)',
        'מצודת אמבר',
        'ארמון העיר',
        'מצפה הכוכבים ג\'נטר מנטר',
        'שווקי ג\'איפור הצבעוניים',
        'מלאכת יד מקומית'
      ],
      duration: '10 שעות',
      price: '$140-220',
      onClick: () => onPageChange('contact')
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 hebrew-text">
            ערים נוספות בהודו
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto hebrew-text leading-relaxed">
            גלו ערים מרתקות נוספות בהודו עם מלכה - המדריכה הישראלית המנוסה. 
            כל עיר מציעה חוויה ייחודית ובלתי נשכחת
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <button onClick={() => onPageChange('home')} className="breadcrumb-item">בית</button>
            <span className="breadcrumb-separator">←</span>
            <button onClick={() => onPageChange('day-tours')} className="breadcrumb-item">סיורי יום</button>
            <span className="breadcrumb-separator">←</span>
            <span className="text-blue-600 font-bold">ערים נוספות</span>
          </div>
        </div>
      </div>

      {/* Cities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              בחרו את היעד הבא שלכם
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              כל עיר מציעה חוויה ייחודית עם מדריכה ישראלית מקצועית
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-200"
                onClick={city.onClick}
              >
                <img 
                  src={city.image}
                  alt={city.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 hebrew-text">{city.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3 hebrew-text">{city.subtitle}</p>
                  <p className="text-gray-600 hebrew-text mb-4 leading-relaxed">{city.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {city.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2 flex-shrink-0" />
                        <span className="text-gray-700 hebrew-text text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 ml-2" />
                      <span className="text-gray-700 hebrew-text font-medium">{city.duration}</span>
                    </div>
                    <div className="text-xl font-bold text-blue-600">{city.price}</div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    למדו עוד
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מה מייחד את הסיורים שלנו?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">תחבורה נוחה</h3>
              <p className="text-gray-600 hebrew-text">רכבים מזוגנים עם נהגים מקצועיים</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">מדריכה בעברית</h3>
              <p className="text-gray-600 hebrew-text">הדרכה מקצועית בעברית עם מלכה</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">ניסיון מוכח</h3>
              <p className="text-gray-600 hebrew-text">15 שנות ניסיון בהדרכה בהודו</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">בטיחות מלאה</h3>
              <p className="text-gray-600 hebrew-text">נסיעות בטוחות עם תמיכה 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מסלולים פופולריים
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              המסלולים הכי מבוקשים בין הערים השונות
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">המשולש הזהב</h3>
              <p className="text-gray-700 hebrew-text mb-4">דלהי → אגרה → ג'איפור</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-blue-600 ml-2" />
                  <span className="text-gray-700 hebrew-text">5-7 ימים</span>
                </div>
                <div className="flex items-center">
                  <Car className="w-4 h-4 text-blue-600 ml-2" />
                  <span className="text-gray-700 hebrew-text">כולל רכב ונהג</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-blue-600 ml-2" />
                  <span className="text-gray-700 hebrew-text">המסלול הכי פופולרי</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">דרום הודו הקלאסי</h3>
              <p className="text-gray-700 hebrew-text mb-4">בנגלור → מייסור → קוצ'י → מונאר</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-green-600 ml-2" />
                  <span className="text-gray-700 hebrew-text">10-14 ימים</span>
                </div>
                <div className="flex items-center">
                  <Car className="w-4 h-4 text-green-600 ml-2" />
                  <span className="text-gray-700 hebrew-text">כולל רכב ונהג</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-green-600 ml-2" />
                  <span className="text-gray-700 hebrew-text">טבע ותרבות</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים לגלות ערים נוספות בהודו?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            צרו קשר עם מלכה עוד היום ונתחיל לתכנן את הסיורים שלכם 
            בערים המרתקות של הודו
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              תכננו את הסיור שלכם
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

export default AdditionalCitiesPage;