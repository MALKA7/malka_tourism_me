import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, ArrowLeft, Calendar, Award, Map, MessageCircle, CreditCard, FileText, Send, Briefcase } from 'lucide-react';

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
              תכנון מקצועי ומותאם אישית 
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

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Malka Details Section */}
          <section className="malka-details">
            <div className="details-container flex flex-wrap gap-8 items-start">
              
              {/* Left Column: Pricing Table */}
              <div className="left-column flex-1 min-w-[280px]">
                <div className="pricing-table bg-blue-50 p-6 rounded-xl shadow-lg border border-blue-200">
                  <h3 className="text-center mb-5 text-blue-900 text-xl font-bold hebrew-text">מחירי שירות התכנון</h3>
                  <div className="price-item border border-blue-200 p-4 rounded-lg mb-3 bg-white">
                    <div className="text-2xl font-bold text-blue-600 mb-2">$350</div>
                    <p className="text-sm text-gray-700 hebrew-text m-0">טיול עד 10 ימים – תכנון מקיף לטיול קצר</p>
                  </div>
                  <div className="price-item border border-green-200 p-4 rounded-lg bg-white">
                    <div className="text-2xl font-bold text-green-600 mb-2">$500</div>
                    <p className="text-sm text-gray-700 hebrew-text m-0">טיול מעל 11 ימים – תכנון מקיף לטיול ארוך</p>
                  </div>
                </div>
              </div>

              {/* Right Column: How It Works Steps */}
              <div className="right-column flex-[1.5] min-w-[320px]">
                <div className="steps bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <h3 className="text-center mb-5 text-blue-900 text-xl font-bold hebrew-text">איך זה עובד?</h3>
                  <div className="steps-grid flex flex-col gap-4">
                    
                    <div className="step-item flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                      <div className="step-number bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div className="step-content">
                        <h4 className="m-0 mb-1 text-base text-blue-900 font-bold hebrew-text">יצירת קשר ראשוני</h4>
                        <p className="m-0 text-sm leading-relaxed hebrew-text">יצירת קשר ראשוני בוואטס אפ לשיחה קצרה של 15 דקות</p>
                      </div>
                    </div>

                    <div className="step-item flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                      <div className="step-number bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      <div className="step-content">
                        <h4 className="m-0 mb-1 text-base text-blue-900 font-bold hebrew-text">תשלום</h4>
                        <p className="m-0 text-sm leading-relaxed hebrew-text">הבנת תנאי תשלום וביצוע תשלום</p>
                      </div>
                    </div>

                    <div className="step-item flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                      <div className="step-number bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="step-content">
                        <h4 className="m-0 mb-1 text-base text-blue-900 font-bold hebrew-text">שיחת ייעוץ מפורטת</h4>
                        <p className="m-0 text-sm leading-relaxed hebrew-text">שיחת וואטס אפ להבנת אילוצים, זמני הגעה, תחומי עניין וכדומה בשיחה ארוכה</p>
                      </div>
                    </div>

                    <div className="step-item flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                      <div className="step-number bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="step-content">
                        <h4 className="m-0 mb-1 text-base text-blue-900 font-bold hebrew-text">הכנת תוכנית כתובה</h4>
                        <p className="m-0 text-sm leading-relaxed hebrew-text">הכנת תוכנית כתובה והצגתה בשיחות זום</p>
                      </div>
                    </div>

                    <div className="step-item flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                      <div className="step-number bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        <Send className="w-4 h-4" />
                      </div>
                      <div className="step-content">
                        <h4 className="m-0 mb-1 text-base text-blue-900 font-bold hebrew-text">שליחת התוכנית</h4>
                        <p className="m-0 text-sm leading-relaxed hebrew-text">לאחר אישור התוכנית שליחתה למטייל</p>
                      </div>
                    </div>

                    <div className="step-item flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                      <div className="step-number bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div className="step-content">
                        <h4 className="m-0 mb-1 text-base text-blue-900 font-bold hebrew-text">הפקת הטיול</h4>
                        <p className="m-0 text-sm leading-relaxed hebrew-text">הפקת הטיול בפועל</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מה כולל שירות התכנון המקצועי?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-3xl block mb-2">🗺️</span>
              <p className="text-sm hebrew-text font-medium text-gray-800">מפות הודו</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-3xl block mb-2">📅</span>
              <p className="text-sm hebrew-text font-medium text-gray-800">ימי מסלול וטיסות פנים</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-3xl block mb-2">📏</span>
              <p className="text-sm hebrew-text font-medium text-gray-800">מרחקים משוערים</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-3xl block mb-2">🏞️</span>
              <p className="text-sm hebrew-text font-medium text-gray-800">מסלולים יומיים עם אטרקציות מקומיות</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-3xl block mb-2">📖</span>
              <p className="text-sm hebrew-text font-medium text-gray-800">מידע עיוני על היעדים</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-3xl block mb-2">📡</span>
              <p className="text-sm hebrew-text font-medium text-gray-800">מידע שימושי כמו תקשורת וציוד מומלץ</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-3xl block mb-2">🚆</span>
              <p className="text-sm hebrew-text font-medium text-gray-800">הצעות לטיסות פנים, רכבות ואוטובוסים</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-3xl block mb-2">✏️</span>
              <p className="text-sm hebrew-text font-medium text-gray-800">השירות כולל עד שני שינויים במסלול</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-3xl block mb-2">🏨</span>
              <p className="text-sm hebrew-text font-medium text-gray-800">לא ניתנות המלצות למלונות – הבחירה עצמאית</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-3xl block mb-2">🚗</span>
              <p className="text-sm hebrew-text font-medium text-gray-800">לא ניתנות המלצות לנהגים או מדריכים</p>
            </div>
          </div>
        </div>
      </section>

      {/* Malka Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              למה לבחור במלכה לתכנון הטיול שלכם?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-4xl block mb-3">📚</span>
              <p className="text-gray-800 hebrew-text text-sm">ידע מעמיק על תרבות, היסטוריה ואתרי חובה בהודו</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-4xl block mb-3">💡</span>
              <p className="text-gray-800 hebrew-text text-sm">טיפים והמלצות שמגיעים רק ממי שחיה ומכירה את הודו מקרוב</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-4xl block mb-3">📝</span>
              <p className="text-gray-800 hebrew-text text-sm">מסלולים מותאמים אישית לפי תחומי העניין והעדפותיכם</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-4xl block mb-3">🛎️</span>
              <p className="text-gray-800 hebrew-text text-sm">תכנון מקצועי של כל שלב בטיול – לוגיסטיקה, מלונות, תחבורה ואטרקציות</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-4xl block mb-3">🔍</span>
              <p className="text-gray-800 hebrew-text text-sm">דאגה לכל הפרטים הקטנים, כדי שהטיול יהיה חלק ומהנה</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-4xl block mb-3">💰</span>
              <p className="text-gray-800 hebrew-text text-sm">חיסכון בזמן ובכסף בזכות הידע המקומי והקשרים עם ספקים מהימנים</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-4xl block mb-3">🌏</span>
              <p className="text-gray-800 hebrew-text text-sm">שילוב חוויות אותנטיות וייחודיות שאינן נפוצות במדריכים רגילים</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-4xl block mb-3">🤝</span>
              <p className="text-gray-800 hebrew-text text-sm">תמיכה לאורך כל תהליך התכנון – מהרעיונות הראשוניים ועד לאישור הסופי של המסלול</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <span className="text-4xl block mb-3">💖</span>
              <p className="text-gray-800 hebrew-text text-sm">מלכה היא מקצועית רגישה שמכבדת כל טיול וכל מטייל</p>
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
            בואו נקיים שיחת היכרות בת 15 דקות – ללא התחייבות – כדי שנבין יחד את הצרכים והחלומות שלכם ונתחיל לבנות את תוכנית הטיול האישית להודו
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
                "מלכה תכננה לנו טיול בדרום הודו למשך 3 חודשים, במקצועיות רבה. ענתה בסבלנות לכל שאלה ומלווה אותנו לאורך כל הדרך."
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">מלי</div>
              <div className="testimonial-location text-gray-600">ישראל</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "אני ואמי נעזרנו במלכה כדי לתכנן את טיולינו בקרלה, קיבלנו ייעוץ ברמה גבוהה מאוד, מקצועי, מתוכנן היטב, ממליצות מאוד! אישה מקסימה שיודעת את העבודה ומכירה את באיזור בצורה מעולה."
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">רעות</div>
              <div className="testimonial-location text-gray-600">ישראל</div>
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