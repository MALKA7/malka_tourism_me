import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, ArrowLeft, Calendar, Award, Map } from 'lucide-react';

interface TripPlanningPageProps {
  onPageChange: (page: string) => void;
}

const TripPlanningPage: React.FC<TripPlanningPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <img 
            src="/plan tour.png" 
            alt="תכנון טיול בהודו"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              תכנון טיול בהודו המופלאה
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              גלו את קסמי הודו עם מלכה - המדריכה הישראלית המנוסה. תכנון מקצועי ומותאם אישית 
              לטיול החלומות שלכם בארץ הצבעים והריחות
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              בואו נתחיל לתכנן את המסע
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
            <span className="text-blue-600 font-bold">תכנון טיול בהודו</span>
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
                  למה לבחור בתכנון טיול מקצועי להודו?
                </h2>
                
                <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-200">
                  <div className="flex items-start">
                    <div className="text-4xl ml-4">
                      <Map className="w-12 h-12 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                        הודו היא מדינה מורכבת ומרתקת עם אינסוף אפשרויות. תכנון טיול נכון יכול להפוך את החוויה שלכם 
                        מטיול רגיל לחוויה בלתי נשכחת. עם 15 שנות ניסיון בהודו, אני יודעת בדיוק איך לתכנן עבורכם 
                        את הטיול המושלם בארץ הקסומה הזו.
                      </p>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                        <strong>מלכה מתכננת את הטיולים לאחר שחיה בהודו ובזמן שהיא עדיין כאן ומעודכנת על המדינה.</strong> 
                        מהמקדשים העתיקים של ורנאסי ועד לחופי גואה הטרופיים, מהרי ההימלאיה המושלגים ועד למדבריות רג'סטאן - 
                        אני אעזור לכם לגלות את הודו האמיתית.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  מה כולל שירות התכנון המקצועי?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">מפה מפורטת של הודו ומסלול מותאם אישית</h4>
                      <p className="text-gray-700 hebrew-text">תכנון מפורט להבנת הרצונות והצרכים שלכם</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">הצעות לטיסות פנים</h4>
                      <p className="text-gray-700 hebrew-text">המלצות על טיסות פנימיות בהודו</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">המלצות מלונות מבדוקים</h4>
                      <p className="text-gray-700 hebrew-text">אני עובדת עם מלונות שביקרתי בהם ואירחתי בהם בעצמי, על מנת להבטיח סטנדרט גבוה של שירות. כמובן, אם יש לכם העדפה למלון ספציפי, ניתן לשלב אותו בתכנון.</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">אטרקציות ויעדים מרכזיים</h4>
                      <p className="text-gray-700 hebrew-text">המלצות על האתרים החשובים ביותר</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">עד שתי אפשרויות לשינוי במסלול</h4>
                      <p className="text-gray-700 hebrew-text">גמישות בתכנון לפי הצרכים שלכם</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">תמיכה לאורך הטיול</h4>
                      <p className="text-gray-700 hebrew-text">זמינות לשאלות ועזרה במהלך הטיול</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8">
                  <p className="text-gray-800 hebrew-text font-medium">
                    <strong>הערה חשובה:</strong> בשלב זה אינני ממליצה על מלונות, שכן יש שפע של מלונות טובים בכל יעד, 
                    אלא אם כן יש לכם בקשה ספציפית.
                  </p>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  איך זה עובד?
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">יצירת קשר ראשונית</h4>
                      <p className="text-gray-700 hebrew-text text-lg">צרו קשר ונקבע שיחת ייעוץ ראשונית חינם</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">שיחת ייעוץ מפורטת</h4>
                      <p className="text-gray-700 hebrew-text text-lg">נכיר, נבין את הרצונות שלכם ונתחיל לתכנן</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">הכנת תכנית מפורטת</h4>
                      <p className="text-gray-700 hebrew-text text-lg">תקבלו תכנית טיול מפורטת עם כל הפרטים</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">ליווי והתאמות</h4>
                      <p className="text-gray-700 hebrew-text text-lg">נעשה התאמות לפי הצורך ונלווה אתכם עד היציאה</p>
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
                  <p className="text-gray-700 hebrew-text">מדריכה ישראלית בהודו</p>
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
                  בואו נתחיל לתכנן
                </button>
              </div>

              {/* Pricing Card */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text text-center">מחירי שירות התכנון</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">ייעוץ ראשוני</span>
                      <span className="font-bold text-green-600 text-xl">חינם</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">שיחת היכרות וייעוץ ראשוני</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">טיול עד 10 ימים</span>
                      <span className="font-bold text-blue-600 text-xl">$200</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">תכנון מקיף לטיול קצר</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">טיול מעל 10 ימים</span>
                      <span className="font-bold text-purple-600 text-xl">$350</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">תכנון מקיף לטיול ארוך</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 hebrew-text text-center">
                    כולל ליווי מלא לאורך כל הטיול ותמיכה 24/7
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
            מוכנים להתחיל את המסע להודו?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            צרו קשר עוד היום לייעוץ ראשוני חינם ונתחיל לתכנן את הטיול של החלומות שלכם 
            לארץ הקסומה והמופלאה
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מה אומרים הלקוחות
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">חוויות אמיתיות של ישראלים שטיילו בהודו עם מלכה</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "מלכה תכננה לנו טיול מושלם! כל פרט היה מדויק והמלצותיה היו פשוט מעולות. 
                חזרנו עם זיכרונות לכל החיים מהודו המדהימה."
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">דני ושרה כהן</div>
              <div className="testimonial-location text-gray-600">תל אביב</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "השירות המקצועי של מלכה חסך לנו המון זמן וכסף. הטיול היה בדיוק מה שחלמנו עליו - 
                הודו אמיתית ומרתקת."
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">משפחת לוי</div>
              <div className="testimonial-location text-gray-600">חיפה</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "תכנון מדויק, המלצות מעולות ותמיכה לאורך כל הדרך. הודו עם מלכה זה משהו אחר לגמרי!"
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">יוסי אברהם</div>
              <div className="testimonial-location text-gray-600">ירושלים</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripPlanningPage;