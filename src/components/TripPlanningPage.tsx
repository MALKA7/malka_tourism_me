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

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              איך זה עובד?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
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