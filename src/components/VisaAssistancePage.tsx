import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, ArrowLeft, Calendar, Award, FileText, Shield, Globe } from 'lucide-react';

interface VisaAssistancePageProps {
  onPageChange: (page: string) => void;
}

const VisaAssistancePage: React.FC<VisaAssistancePageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" 
            alt="סיוע בויזה והכנות לטיול"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              סיוע בויזה והכנות לטיול
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              קבלו עזרה מקצועית בהכנת כל המסמכים הנדרשים לטיול להודו. 
              מויזה ועד ביטוח נסיעות - נדאג שתהיו מוכנים לחלוטין
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              קבלו עזרה בהכנות
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
            <span className="text-blue-600 font-bold">סיוע בויזה והכנות לטיול</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 hebrew-text">
                  הכנות מקצועיות לטיול להודו
                </h2>
                
                <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-200">
                  <div className="flex items-start">
                    <div className="text-4xl ml-4">
                      <FileText className="w-12 h-12 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                        הכנות לטיול להודו יכולות להיות מורכבות ומבלבלות. עם הניסיון שלנו, 
                        נעזור לכם להכין את כל המסמכים הנדרשים ונוודא שאתם מוכנים לחלוטין.
                      </p>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                        <strong>מלכה מסייעת בהכנות לאחר שעברה את כל התהליכים בעצמה ויודעת בדיוק מה נדרש.</strong> 
                        עזרה מקצועית ואישית לכל שלב בהכנות לטיול.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  מה כולל השירות?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">סיוע בויזה להודו</h4>
                      <p className="text-gray-700 hebrew-text">הדרכה מלאה למילוי הטפסים וקבלת ויזה תיירות</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">ייעוץ לטיסות</h4>
                      <p className="text-gray-700 hebrew-text">המלצות על חברות תעופה ומסלולי טיסה מומלצים</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">ביטוח נסיעות</h4>
                      <p className="text-gray-700 hebrew-text">עזרה בבחירת ביטוח נסיעות מתאים להודו</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">רשימת ארוזים</h4>
                      <p className="text-gray-700 hebrew-text">רשימה מפורטת של מה לארוז לטיול בהודו</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">חיסונים ובריאות</h4>
                      <p className="text-gray-700 hebrew-text">מידע על חיסונים נדרשים והמלצות בריאות</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">טיפים והכנה תרבותית</h4>
                      <p className="text-gray-700 hebrew-text">הכנה מנטלית ותרבותית לחוויה בהודו</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  איך זה עובד?
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">יצירת קשר ראשונית</h4>
                      <p className="text-gray-700 hebrew-text text-lg">צרו קשר ונקבע שיחת ייעוץ לגבי ההכנות הנדרשות</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">הכנת רשימת מטלות</h4>
                      <p className="text-gray-700 hebrew-text text-lg">נכין עבורכם רשימה מפורטת של כל מה שצריך לעשות</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">ליווי בתהליך</h4>
                      <p className="text-gray-700 hebrew-text text-lg">נלווה אתכם בכל שלב עד לקבלת כל המסמכים</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">בדיקה סופית</h4>
                      <p className="text-gray-700 hebrew-text text-lg">וידוא שכל המסמכים מוכנים לפני היציאה</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
                <div className="text-center mb-6">
                  <img 
                    src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" 
                    alt="מלכה"
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 hebrew-text">מלכה אירני</h3>
                  <p className="text-gray-700 hebrew-text">יועצת נסיעות להודו</p>
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
                  קבלו עזרה בהכנות
                </button>
              </div>

              {/* Pricing Card */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text text-center">מחירי השירות</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">ייעוץ ראשוני</span>
                      <span className="font-bold text-green-600 text-xl">חינם</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">שיחת ייעוץ ראשונית</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">חבילת הכנות מלאה</span>
                      <span className="font-bold text-blue-600 text-xl">$100</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">כל השירותים כלולים</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 hebrew-text text-center">
                    כולל ליווי מלא עד לקבלת כל המסמכים
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים להתחיל את ההכנות?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            צרו קשר עוד היום לקבלת עזרה מקצועית בהכנת כל המסמכים 
            הנדרשים לטיול להודו
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              ייעוץ ראשוני חינם
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

export default VisaAssistancePage;