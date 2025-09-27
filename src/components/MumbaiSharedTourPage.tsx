import React, { useState } from 'react';
import { Users, MapPin, Calendar, Clock, Star, Phone, Mail, CheckCircle, Car, Shield, Award, Navigation, X } from 'lucide-react';

interface MumbaiSharedTourPageProps {
  onPageChange: (page: string) => void;
}

const MumbaiSharedTourPage: React.FC<MumbaiSharedTourPageProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState('itinerary');

  const mumbaiPhotos = [
    {
      src: '/mumbai gateway.jpg',
      alt: 'שער הכניסה להודו - מומבאי'
    },
    {
      src: '/mumbai slum.jpg',
      alt: 'שכונות עוני במומבאי'
    },
    {
      src: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      alt: 'רחובות מומבאי'
    },
    {
      src: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      alt: 'תרבות מומבאי'
    },
    {
      src: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      alt: 'חיי רחוב במומבאי'
    }
  ];

  const tabContent = {
    itinerary: {
      title: 'מסלול',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3 hebrew-text">בוקר (08:00-12:00)</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="hebrew-text">• איסוף מנקודת המפגש</li>
                <li className="hebrew-text">• שער הכניסה להודו</li>
                <li className="hebrew-text">• מכבסה פתוחה</li>
                <li className="hebrew-text">• נסיעה ברכבת מקומית</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3 hebrew-text">אחר הצהריים (12:00-16:00)</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="hebrew-text">• ארוחת צהריים (אם מעל 10 מטיילים)</li>
                <li className="hebrew-text">• שווקים מקומיים</li>
                <li className="hebrew-text">• משחק המירוץ לרכבת</li>
                <li className="hebrew-text">• חזרה לנקודת המפגש</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    included: {
      title: 'כלול',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">רכב ונהג</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">הדרכה בעברית</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">סיור של 8 שעות</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">איסוף והחזרה לנקודת מפגש</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">ארוחת צהריים במידה ויש מעל 10 מטיילים ומעלה</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">כניסה למכבסה</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">כרטיס נסיעה ברכבת</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">משחק המירוץ לרכבת</span>
            </div>
          </div>
        </div>
      )
    },
    notIncluded: {
      title: 'לא כלול',
      content: (
        <div className="space-y-3">
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">לא כולל ארוחה אם יש מתחת לעשרה מטיילים</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">שתייה</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">קניות</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">טיפים</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">ביטוח</span>
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
            <div className="text-gray-700 hebrew-text">לאדם</div>
          </div>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-gray-700 hebrew-text text-sm">* המחיר הוא לאדם מעל גיל 13</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-gray-700 hebrew-text text-sm">הטיול לא מתאים לילדים</p>
            </div>
          </div>
        </div>
      )
    },
    notes: {
      title: 'הערות',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">הסיור מתקיים בימים קבועים כל שבוע - יש לוודא זמינות מראש.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">מקסימום 12 משתתפים לסיור לחוויה אישית ואיכותית.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">נדרש לבוש הולם לביקור באתרים דתיים ומקומות ציבוריים.</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/mumbai gateway.jpg" 
            alt="סיור קבוצתי במומבאי"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hebrew-text">
            סיור קבוצתי במומבאי – הצטרפו עכשיו!
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed hebrew-text opacity-95">
            חוו את מומבאי המרתקת עם קבוצה של ישראלים במסע מודרך מקצועי
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 px-12 py-6 rounded-lg text-2xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              רשמו אותי לסיור
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
            <button onClick={() => onPageChange('day-tours')} className="breadcrumb-item">סיורי ערים</button>
            <span className="breadcrumb-separator">←</span>
            <span className="text-blue-600 font-bold">סיור משותף במומבאי</span>
          </div>
        </div>
      </div>

      {/* Professional Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                סיור משותף במומבאי - חוויה ייחודית
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                הצטרפו לסיור המשותף במומבאי – חוויה ייחודית בימים קבועים כל שבוע! הסיור מתקיים ברכב מיניבוס נוח המתאים ל-12 משתתפים בלבד, לכן חשוב להירשם מראש ולשמור את מקומכם. במהלך 8 שעות מרתקות נגלה יחד את סודות העיר בחוויה מקומית. אל תחמיצו את ההזדמנות לחוות את מומבאי בצורה אותנטית ומלאת חוויות!
              </p>
            </div>

            <div className="text-center mt-8">
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                הזמינו מקום בסיור
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              גלריית תמונות ממומבאי
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              הציצו על האתרים המרתקים שתבקרו בסיור
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {mumbaiPhotos.map((photo, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium hebrew-text text-center">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Interface Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מוכנים לצאת לדרך? הנה הפרטים
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            {/* Tab Headers */}
            <div className="flex flex-wrap border-b border-gray-200">
              {Object.entries(tabContent).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 px-6 py-4 font-medium hebrew-text transition-all duration-300 ${
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              התחבורה שלנו
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              מיניבוס נוח ובטוח לחוויה מושלמת
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Minibus Photo */}
            <div className="order-2 lg:order-1">
              <img 
                src="/transport bus.png"
                alt="מיניבוס לסיור במומבאי"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Transport Features */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 hebrew-text">עד 12 נוסעים</h3>
                  <p className="text-gray-600 hebrew-text text-sm">קבוצה אינטימית לחוויה אישית</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 hebrew-text">רכב ממוזג</h3>
                  <p className="text-gray-600 hebrew-text text-sm">נוחות מקסימלית בכל מזג אוויר</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 hebrew-text">נהג מקצועי</h3>
                  <p className="text-gray-600 hebrew-text text-sm">נהגים מנוסים ואמינים</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Navigation className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 hebrew-text">מסלול מותאם</h3>
                  <p className="text-gray-600 hebrew-text text-sm">מסלול מתוכנן בקפידה לחוויה מלאה</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים להצטרף לסיור?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            מקומות מוגבלים! הזמינו עכשיו את מקומכם בסיור הקבוצתי במומבאי
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              רשמו אותי לסיור
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