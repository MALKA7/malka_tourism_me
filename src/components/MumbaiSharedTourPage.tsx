import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Building, Waves, Mountain, Globe, Award, Shield, Play, ChevronDown, ChevronUp, X } from 'lucide-react';

interface MumbaiSharedTourPageProps {
  onPageChange: (page: string) => void;
}

const MumbaiSharedTourPage: React.FC<MumbaiSharedTourPageProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState('included');

  const mumbaiPhotos = [
    {
      title: 'שער הכניסה להודו',
      image: '/mumbai gateway.jpg'
    },
    {
      title: 'מכבסה פתוחה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'שכונת סלאם דהרבי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'רכבת מקומית',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'שווקים צבעוניים',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    }
  ];

  const tabContent = {
    included: {
      title: 'כלול',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">איסוף והחזרה לנקודת מפגש</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">תחבורה פרטית עם נהג</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">הדרכה בעברית</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">8 שעות סיור</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">ביקור באתרים מרכזיים</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">חוויות תרבותיות</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">ליווי מקצועי</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">תמיכה במהלך הסיור</span>
            </div>
          </div>
        </div>
      )
    },
    notIncluded: {
      title: 'לא כלול במחיר',
      content: (
        <div className="space-y-3">
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">ארוחות ושתייה</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">כניסות לאתרים</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">תשלום על מצלמות</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">ביטוחים שונים</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">טיפים לנותני שירות</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">קניות אישיות</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">שעות נוספות</span>
          </div>
        </div>
      )
    },
    pricing: {
      title: 'מחיר',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$150</div>
            <div className="text-gray-700 hebrew-text">מחיר לאדם בקבוצה של 10 אנשים 150 דולר</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-900 mb-2 hebrew-text">מעל גיל 13</h4>
              <p className="text-gray-700 hebrew-text text-sm">הטיול לא מתאים לילדים</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-2 hebrew-text">תשלומים</h4>
              <p className="text-gray-700 hebrew-text text-sm">אפשרות לתשלום במספר תשלומים</p>
            </div>
          </div>
        </div>
      )
    },
    terms: {
      title: 'תנאים',
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-900 mb-2 hebrew-text">ביטול</h4>
            <p className="text-gray-700 hebrew-text text-sm">ביטול עד 48 שעות לפני הטיול</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-2 hebrew-text">שינויים</h4>
            <p className="text-gray-700 hebrew-text text-sm">שינויים במסלול אפשריים עד 24 שעות לפני</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-900 mb-2 hebrew-text">דרישות</h4>
            <p className="text-gray-700 hebrew-text text-sm">נדרש להגיע בזמן לנקודת המפגש</p>
          </div>
        </div>
      )
    },
    notes: {
      title: 'הערות',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">נקודת איסוף משער הודו מול מלון טאג' בקולבה</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">המסלול עשוי להשתנות בהתאם לתנאי מזג האוויר ונסיבות מקומיות.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">מומלץ להגיע 15 דקות לפני שעת האיסוף.</p>
          </div>
        </div>
      )
    }
  };

  const testimonials = [
    {
      name: 'תומר כנעני',
      location: 'קבוצת חברים של נהגי אגד',
      rating: 5,
      text: 'היינו קבוצה של 14 מטיילים והכל התנהל בצורה טובה במשך יומיים למדנו המון על מומבאי בפרט והודו בכלל יש לציין את הידע הרב של מלכה וצורת ההדרכה כולנו מודים לה מאוד על ההדרכה והשרות הנלווה.'
    },
    {
      name: 'קבוצת מנהלי ברמד העולמית',
      location: 'ספטמבר 2025',
      rating: 5,
      text: 'מלכה היא מהות ההצדקה לטיול מאורגן, למי שמתלבט אם לנסות להכיר את העיר לבד או במתכונת הזו. מלכה הכירה לנו את החיים המקומיים באופן הכי Hands-On שיכולה להיות. היא הצליחה להעביר לנו חוויה של האדם ההודי האמיתי. חוויה שלעולם לא תוכל ולא תעז לעשות בעצמך. נשארתי עם חוויה צרובה לכל החיים'
    },
    {
      name: 'צפריר גרינברג, צוות אל על',
      location: 'יולי 2018',
      rating: 5,
      text: 'ליום הסיור במומבאי, בדגש של טיול אחר, אנחנו רוצים להמליץ בחום רב על מדריכה נהדרת. שמה מלכה אירני, ישראלית שנשואה להודי ומתגוררת בהודו שנים רבות. מלכה בעלת ידע רב על התרבות, ההיסטוריה והחיים בהודו. שולטת בשפה המקומית.'
    },
    {
      name: 'דבורה אורן',
      location: 'טיול נשים - מרץ 2025',
      rating: 5,
      text: 'הייתי במומבאי לא פעם… אהבתי אותה וחזרתי אליה שוב, הפעם עם קבוצת של חברות, במסגרת טיול מאורגן בדרום הודו. מלכה הובילה אותנו בעיר המהממת הזאת, בבטחה ובאהבה לעיר, בה חיה שנים ואותה מכירה על כל פניה.'
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/mumbai gateway.jpg" 
            alt="גלה את מומבאי: סיור קבוצתי בן 8 שעות"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              גלה את מומבאי: סיור קבוצתי בן 8 שעות
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
            הצטרפו לסיור קבוצתי מרתק במומבאי עם מדריכה ישראלית מקצועית. גלו את הבירה הכלכלית של הודו, 
            חוו את התרבות המקומית והכירו את האתרים המפורסמים ביותר של העיר. סיור של 8 שעות מלאות 
            עם קבוצה קטנה ואינטימית שמאפשרת חוויה אישית ומעמיקה.
          </p>
        </div>
      </section>

      {/* Mumbai Photos Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              תמונות ממומבאי
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              הצצה לאתרים המרכזיים שנבקר בהם
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {mumbaiPhotos.map((photo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 hebrew-text text-center">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מוכנים לצאת לדרך? הנה הפרטים
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="flex flex-wrap border-b border-gray-200">
              {Object.entries(tabContent).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-4 font-medium hebrew-text transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="p-8">
              {tabContent[activeTab as keyof typeof tabContent].content}
            </div>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              תחבורה לסיור
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              מיניבוס נוח ומזוגן לקבוצה
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <img 
                src="/transport bus.png"
                alt="מיניבוס לסיור קבוצתי"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text text-center">מיניבוס מזוגן</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 hebrew-text">עד 10 נוסעים</h4>
                    <p className="text-gray-600 hebrew-text text-sm">קבוצה קטנה ואינטימית</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 hebrew-text">מזוגן</h4>
                    <p className="text-gray-600 hebrew-text text-sm">נוחות מלאה</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 hebrew-text">נהג מקצועי</h4>
                    <p className="text-gray-600 hebrew-text text-sm">ניסיון רב בעיר</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 hebrew-text">בטיחות</h4>
                    <p className="text-gray-600 hebrew-text text-sm">רכב מבוטח ובטוח</p>
                  </div>
                </div>
              </div>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 hebrew-text leading-relaxed italic">"{testimonial.text}"</p>
                <div className="text-center">
                  <div className="font-bold text-gray-900 hebrew-text">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm hebrew-text">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            הצטרפו לסיור הקבוצתי במומבאי
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            מוכנים לחוויה בלתי נשכחת במומבאי עם קבוצה? 
            מלכה תדאג לכל הפרטים ותעניק לכם סיור מושלם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              הצטרפו לסיור
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

export default MumbaiSharedTourPage;