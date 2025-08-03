import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, ArrowLeft, Calendar, Award, Car, Shield, Navigation } from 'lucide-react';

interface TransportServicesPageProps {
  onPageChange: (page: string) => void;
}

const TransportServicesPage: React.FC<TransportServicesPageProps> = ({ onPageChange }) => {
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

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 hebrew-text">
                  שירותי הסעות מקצועיים בהודו
                </h2>
                
                <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-200">
                  <div className="flex items-start">
                    <div className="text-4xl ml-4">
                      <Car className="w-12 h-12 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                        נסיעות בהודו יכולות להיות מאתגרות, אבל עם השירותים שלנו תוכלו להתמקד 
                        בחוויה ולא בדאגות. אנחנו מספקים נהגים מקצועיים ואמינים עם רכבים איכותיים.
                      </p>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                        <strong>מלכה עובדת עם נהגים מנוסים שהיא מכירה אישית ובודקת את איכות השירות.</strong> 
                        כל הנהגים דוברים אנגלית ומכירים את הדרכים והאתרים הטוב ביותר.
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
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">נהגים מקצועיים</h4>
                      <p className="text-gray-700 hebrew-text">נהגים מנוסים, אמינים ודוברי אנגלית</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">רכבים איכותיים</h4>
                      <p className="text-gray-700 hebrew-text">רכבים נוחים, נקיים ומזוגנים</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">גמישות במסלולים</h4>
                      <p className="text-gray-700 hebrew-text">אפשרות לשינויים במסלול לפי הצרכים</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">ביטוח מלא</h4>
                      <p className="text-gray-700 hebrew-text">כל הרכבים מבוטחים ובטוחים לנסיעה</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">תמיכה 24/7</h4>
                      <p className="text-gray-700 hebrew-text">זמינות מלאה לעזרה במהלך הנסיעה</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">מחירים שקופים</h4>
                      <p className="text-gray-700 hebrew-text">ללא עלויות נסתרות - מחיר קבוע מראש</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  סוגי שירותים
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">🚗</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">הסעות בעיר</h4>
                      <p className="text-gray-700 hebrew-text text-lg">נסיעות קצרות בתוך העיר לאתרים ולקניות</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">🛣️</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">נסיעות בין ערים</h4>
                      <p className="text-gray-700 hebrew-text text-lg">מסעות ארוכים בין יעדים שונים בהודו</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">✈️</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">הסעות לנמל תעופה</h4>
                      <p className="text-gray-700 hebrew-text text-lg">הסעות נוחות ובזמן לנמלי התעופה</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">🏛️</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">סיורים מודרכים</h4>
                      <p className="text-gray-700 hebrew-text text-lg">נהג שמכיר את האתרים ויכול להדריך</p>
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

              {/* Pricing Card */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text text-center">מחירי הסעות</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">בתוך העיר</span>
                      <span className="font-bold text-blue-600 text-xl">$30-50</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">לפי מרחק ומשך הנסיעה</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">בין ערים</span>
                      <span className="font-bold text-green-600 text-xl">$80-150</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">לפי מרחק ויעד</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">יום מלא</span>
                      <span className="font-bold text-purple-600 text-xl">$100-200</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">8 שעות עם נהג</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 hebrew-text text-center">
                    כולל דלק, נהג ותמיכה מלאה
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              למה לבחור בנו?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">בטיחות מקסימלית</h3>
              <p className="text-gray-600 hebrew-text">נהגים מנוסים ורכבים מבוטחים</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">ידע מקומי</h3>
              <p className="text-gray-600 hebrew-text">נהגים שמכירים את הדרכים הטובות ביותר</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">נוחות מלאה</h3>
              <p className="text-gray-600 hebrew-text">רכבים מזוגנים ונוחים לנסיעות ארוכות</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מה אומרים הלקוחות
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">חוויות אמיתיות של ישראלים שהשתמשו בשירותי ההסעות שלנו</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "הנהג שמלכה סידרה לנו היה מעולה! נהיגה בטוחה, רכב נוח ומזוגן, 
                והוא הכיר את כל האתרים. שירות ברמה הכי גבוהה!"
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">אבי ושרה כהן</div>
              <div className="testimonial-location text-gray-600">רמת גן</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "נסענו עם הנהג שלהם מבנגלור לגואה - נסיעה של 6 שעות שעברה בקלות. 
                הנהג היה מקצועי והרכב נוח מאוד."
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">משפחת לוי</div>
              <div className="testimonial-location text-gray-600">נתניה</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "שירות הסעות מצוין! הנהג הגיע בזמן, הרכב היה נקי ונוח, 
                והמחירים הוגנים. בהחלט נשתמש שוב!"
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">דוד ומירי גולן</div>
              <div className="testimonial-location text-gray-600">באר שבע</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportServicesPage;