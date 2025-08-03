import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, ArrowLeft, Calendar, Award, Map, User, Globe } from 'lucide-react';

interface HebrewGuidingPageProps {
  onPageChange: (page: string) => void;
}

const HebrewGuidingPage: React.FC<HebrewGuidingPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/tours w malka.png" 
            alt="הדרכה בעברית בהודו"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              הדרכה בעברית ברחבי הודו
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              גלו את הודו עם מדריכה ישראלית מקצועית ודוברת עברית. חוויות אותנטיות 
              עם הבנה עמוקה של התרבות המקומית והצרכים הישראליים
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              הזמינו הדרכה בעברית
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
            <span className="text-blue-600 font-bold">הדרכה בעברית בהודו</span>
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
                  הכר את מומבאי הפרטית
                </h2>
                
                <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-200">
                  <div className="flex items-start">
                    <div className="text-4xl ml-4">
                      <User className="w-12 h-12 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                        סיור מודרך מלא (8 שעות) במומבאי, נאווי מומבאי, ת'אנה והסביבה – 
                        עם מדריכה ישראלית מקצועית ודוברת עברית.
                      </p>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                        <strong>מלכה מדריכה בעברית לאחר שחיה בהודו ובזמן שהיא עדיין כאן ומעודכנת על המדינה.</strong> 
                        חוויה אותנטית עם הבנה עמוקה של התרבות המקומית והצרכים הישראליים.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  מה כולל הסיור?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">תחבורה נוחה</h4>
                      <p className="text-gray-700 hebrew-text">רכב מוזמן עם נהג מקצועי לכל משך הסיור</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">כניסות לאתרים</h4>
                      <p className="text-gray-700 hebrew-text">כל דמי הכניסה לאתרים והמוזיאונים כלולים במחיר</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">הדרכה מקיפה</h4>
                      <p className="text-gray-700 hebrew-text">הדרכה מקצועית בעברית עם הסברים מפורטים על ההיסטוריה והתרבות</p>
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
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">יצירת קשר ותיאום</h4>
                      <p className="text-gray-700 hebrew-text text-lg">צרו קשר לתיאום מועד הסיור והעדפות אישיות</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">איסוף ממלון</h4>
                      <p className="text-gray-700 hebrew-text text-lg">איסוף נוח מהמלון שלכם בשעה מוסכמת</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">סיור מודרך מלא</h4>
                      <p className="text-gray-700 hebrew-text text-lg">8 שעות של סיור מקיף עם הדרכה בעברית</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">החזרה למלון</h4>
                      <p className="text-gray-700 hebrew-text text-lg">החזרה נוחה למלון בסיום הסיור</p>
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
                  הזמינו הדרכה
                </button>
              </div>

              {/* Pricing Card */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text text-center">מחירי הדרכה</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">סיור יום מלא (8 שעות)</span>
                      <span className="font-bold text-blue-600 text-xl">$150</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">כולל תחבורה, כניסות והדרכה</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">סיור חצי יום (4 שעות)</span>
                      <span className="font-bold text-green-600 text-xl">$80</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">כולל תחבורה, כניסות והדרכה</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 hebrew-text text-center">
                    כולל הדרכה מקצועית בעברית ותמיכה מלאה
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
            מוכנים לגלות את הודו בעברית?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            צרו קשר עוד היום להזמנת סיור מודרך בעברית עם מלכה - 
            המדריכה הישראלית המנוסה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              הזמינו הדרכה
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
            <p className="text-xl text-gray-600 hebrew-text">חוויות אמיתיות של ישראלים שקיבלו הדרכה בעברית עם מלכה</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "מלכה הדריכה אותנו במומבאי בצורה מדהימה! ההדרכה בעברית עזרה לנו להבין את התרבות 
                ההודית בצורה עמוקה יותר. חוויה בלתי נשכחת!"
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">יוסי ורחל כהן</div>
              <div className="testimonial-location text-gray-600">תל אביב</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "הסיור עם מלכה היה הדבר הכי טוב בטיול שלנו להודו. היא מכירה כל פינה במומבאי 
                וההסברים שלה בעברית היו מרתקים."
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
                "מדריכה מקצועית ברמה הכי גבוהה! מלכה הראתה לנו את הודו האמיתית 
                והסבירה הכל בעברית ברורה ומעניינת."
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">דני אברהם</div>
              <div className="testimonial-location text-gray-600">ירושלים</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HebrewGuidingPage;