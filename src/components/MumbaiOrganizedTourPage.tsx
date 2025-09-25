import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Building, Waves, Mountain, Globe, Award, Shield, Play, ChevronDown, ChevronUp, X } from 'lucide-react';

interface MumbaiOrganizedTourPageProps {
  onPageChange: (page: string) => void;
}

const MumbaiOrganizedTourPage: React.FC<MumbaiOrganizedTourPageProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState('route');

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
      title: 'רכבת מקומית',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'שווקים צבעוניים',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מסגד חאג\'י עלי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    }
  ];

  const tabContent = {
    route: {
      title: 'מסלול',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3 hebrew-text">בוקר (10:00-13:00)</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="hebrew-text">• איסוף מנקודת מפגש מרכזית</li>
                <li className="hebrew-text">• שער הכניסה להודו</li>
                <li className="hebrew-text">• מלון טאג' מהאל</li>
                <li className="hebrew-text">• רציפי ששון</li>
                <li className="hebrew-text">• שוק הפרחים</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3 hebrew-text">אחר הצהריים (13:00-18:00)</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="hebrew-text">• ארוחת צהריים (אם יש מעל 10 מטיילים)</li>
                <li className="hebrew-text">• ביקור במכבסה הפתוחה</li>
                <li className="hebrew-text">• נסיעה ברכבת מקומית</li>
                <li className="hebrew-text">• משחק המירוץ לרכבת</li>
                <li className="hebrew-text">• החזרה לנקודת המפגש</li>
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
            <div className="text-gray-700 hebrew-text">מחיר הינו 150$ לאדם</div>
          </div>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-gray-700 hebrew-text text-sm">* המחיר הוא לאדם מעל גיל 13</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-gray-700 hebrew-text text-sm">* ילדים מתחת לגיל 13 מקבלים הנחה</p>
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
            <p className="text-gray-700 hebrew-text">הסיור מתקיים בתאריכים קבועים מראש - יש להירשם מראש.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">מקסימום 12 משתתפים לסיור לחוויה אישית ואיכותית.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">נקודת המפגש תימסר לאחר ההרשמה.</p>
          </div>
        </div>
      )
    }
  };

  const transportFeatures = [
    {
      icon: Users,
      title: 'מיניבוס נוח',
      description: 'רכב מזוגן המתאים ל-12 נוסעים'
    },
    {
      icon: Shield,
      title: 'נהג מקצועי',
      description: 'נהג מנוסה ואמין'
    },
    {
      icon: Clock,
      title: 'לוח זמנים קבוע',
      description: 'סיור של 8 שעות מדויקות'
    },
    {
      icon: MapPin,
      title: 'נקודת מפגש מרכזית',
      description: 'איסוף והחזרה ממקום נוח'
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/mumbai gateway.jpg" 
            alt="גלה את מומבאי - סיור מאורגן"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl font-bold mb-4 hebrew-text">
              גלה את מומבאי
            </h1>
            <p className="text-2xl mb-8 leading-relaxed hebrew-text opacity-95">
              סיור מאורגן בן 8 שעות
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              הירשמו לסיור
            </button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl leading-relaxed hebrew-text">
            הצטרפו לסיור המשותף במומבאי – חוויה ייחודית בתאריכים קבועים! הסיור מתקיים ברכב מיניבוס נוח המתאים ל-12 משתתפים בלבד, לכן חשוב להירשם מראש ולשמור את מקומכם. במהלך 8 שעות מרתקות נגלה יחד את סודות העיר, כולל עצירה לארוחת צהריים טעימה. אל תחמיצו את ההזדמנות לחוות את מומבאי בצורה אותנטית ומלאת חוויות!
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              אתרים במומבאי
            </h2>
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

      {/* Tabbed Interface */}
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
              התחבורה שלנו
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Minibus Photo */}
            <div className="text-center">
              <img 
                src="/transport bus.png"
                alt="מיניבוס לסיור מומבאי"
                className="w-full max-w-md mx-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Transport Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {transportFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hebrew-text">{feature.title}</h3>
                  <p className="text-gray-600 hebrew-text text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים להצטרף לסיור המשותף?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            הירשמו עכשיו לסיור המשותף במומבאי - מקומות מוגבלים!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              הירשמו עכשיו
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

export default MumbaiOrganizedTourPage;