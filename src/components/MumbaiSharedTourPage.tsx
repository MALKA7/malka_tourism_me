import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Building, Waves, Mountain, Globe, Award, Shield, Play, ChevronDown, ChevronUp } from 'lucide-react';

interface MumbaiSharedTourPageProps {
  onPageChange: (page: string) => void;
}

const MumbaiSharedTourPage: React.FC<MumbaiSharedTourPageProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState('itinerary');

  const tabContent = {
    itinerary: {
      title: 'מסלול הטיול',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3 hebrew-text">בוקר (8:00-12:00)</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="hebrew-text">• איסוף מהמלון</li>
                <li className="hebrew-text">• שער הכניסה להודו</li>
                <li className="hebrew-text">• מכבסה פתוחה</li>
                <li className="hebrew-text">• שכונת סלאם דהרבי</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3 hebrew-text">צהריים (12:00-16:00)</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="hebrew-text">• ארוחת צהריים</li>
                <li className="hebrew-text">• שכונה פרסית</li>
                <li className="hebrew-text">• מרין דרייב</li>
                <li className="hebrew-text">• חזרה למלון</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    included: {
      title: 'כלול במחיר',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">תחבורה במיניבוס</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">הדרכה בעברית</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">8 שעות סיור</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">איסוף והחזרה למלון</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">מדריך מקומי באתרי מורשת</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">ארוחת צהריים</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">מים במהלך הסיור</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">ליווי מקצועי</span>
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
            <span className="w-5 h-5 text-red-600 ml-2">✗</span>
            <span className="hebrew-text">כניסות לאתרים</span>
          </div>
          <div className="flex items-center">
            <span className="w-5 h-5 text-red-600 ml-2">✗</span>
            <span className="hebrew-text">משקאות נוספים</span>
          </div>
          <div className="flex items-center">
            <span className="w-5 h-5 text-red-600 ml-2">✗</span>
            <span className="hebrew-text">קניות אישיות</span>
          </div>
          <div className="flex items-center">
            <span className="w-5 h-5 text-red-600 ml-2">✗</span>
            <span className="hebrew-text">טיפים</span>
          </div>
        </div>
      )
    },
    pricing: {
      title: 'מחיר',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$80</div>
            <div className="text-gray-700 hebrew-text">מחיר לאדם</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2 hebrew-text">הנחות</h4>
              <p className="text-gray-700 hebrew-text text-sm">הנחה לילדים מתחת לגיל 12</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-2 hebrew-text">תשלום</h4>
              <p className="text-gray-700 hebrew-text text-sm">תשלום מראש נדרש</p>
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
            <p className="text-gray-700 hebrew-text">המסלול עשוי להשתנות בהתאם לתנאי התנועה ונסיבות מקומיות.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">מומלץ להגיע 15 דקות לפני שעת האיסוף.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">הסיור מתקיים בכל מזג אוויר.</p>
          </div>
        </div>
      )
    }
  };

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
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              הצטרפו לסיור המשותף במומבאי – חוויה ייחודית בתאריכים קבועים! הסיור מתקיים ברכב מיניבוס נוח המתאים ל-12 משתתפים בלבד, לכן חשוב להירשם מראש ולשמור את מקומכם. במהלך 8 שעות מרתקות נגלה יחד את סודות העיר, כולל עצירה לארוחת צהריים טעימה. אל תחמיצו את ההזדמנות לחוות את מומבאי בצורה אותנטית ומלאת חוויות!
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              הזמינו מקום בסיור
            </button>
          </div>
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
              גלריה של תמונות מהעיר המרתקת
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/mumbai gateway.jpg"
                alt="שער הכניסה להודו"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">שער הכניסה להודו</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/mumbai slum.jpg"
                alt="שכונת סלאם דהרבי"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">שכונת סלאם דהרבי</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg"
                alt="מכבסה פתוחה"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">מכבסה פתוחה</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg"
                alt="שכונה פרסית"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">שכונה פרסית</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg"
                alt="מרין דרייב"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">מרין דרייב</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              הרכב שלנו
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/transport bus.png"
                alt="מיניבוס לסיור במומבאי"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text text-center">מיניבוס</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 hebrew-text font-medium">5-11 נוסעים</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 hebrew-text font-medium">רכב ממוזג</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 hebrew-text font-medium">נהג מקצועי</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 hebrew-text font-medium">8 שעות</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section with Tabs */}
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
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/tours w malka 2.png"
                alt="מלכה עם קבוצה נוספת"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 hebrew-text leading-relaxed italic">"הסיור המשותף במומבאי היה מדהים! קבוצה קטנה ואינטימית, מדריכה מקצועית והרבה כיף. ממליצים בחום!"</p>
              <div className="text-center">
                <div className="font-bold text-gray-900 hebrew-text">דני ושרה</div>
                <div className="text-gray-600 text-sm hebrew-text">תל אביב</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 hebrew-text leading-relaxed italic">"חוויה בלתי נשכחת! הכרנו מטיילים נוספים והמדריכה הראתה לנו את מומבאי האמיתית. שווה כל שקל!"</p>
              <div className="text-center">
                <div className="font-bold text-gray-900 hebrew-text">משפחת כהן</div>
                <div className="text-gray-600 text-sm hebrew-text">חיפה</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 hebrew-text leading-relaxed italic">"הסיור הקבוצתי אפשר לנו להכיר אנשים חדשים ולחוות את מומבאי יחד. אווירה נהדרת!"</p>
              <div className="text-center">
                <div className="font-bold text-gray-900 hebrew-text">אבי ומירי</div>
                <div className="text-gray-600 text-sm hebrew-text">ירושלים</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 hebrew-text leading-relaxed italic">"מלכה מדריכה מעולה! הסיור היה מאורגן בצורה מושלמת והקבוצה הייתה נעימה. בהחלט נחזור!"</p>
              <div className="text-center">
                <div className="font-bold text-gray-900 hebrew-text">יוסי ורחל</div>
                <div className="text-gray-600 text-sm hebrew-text">באר שבע</div>
              </div>
            </div>
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
            מוכנים לחוויה בלתי נשכחת במומבאי עם קבוצה קטנה ואינטימית? 
            מלכה תדאג לכל הפרטים ותעניק לכם סיור מושלם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              הזמינו מקום בסיור
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