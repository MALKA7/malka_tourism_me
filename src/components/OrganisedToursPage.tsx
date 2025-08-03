import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, ArrowLeft, Calendar, Award, Globe, Camera } from 'lucide-react';

interface OrganisedToursPageProps {
  onPageChange: (page: string) => void;
}

const OrganisedToursPage: React.FC<OrganisedToursPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/organised tours.png" 
            alt="טיולים מאורגנים בהודו"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              טיולים מאורגנים בהודו
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              הצטרפו לטיולים הקבוצתיים המיוחדים שלנו עם מלכה. חוויות בלתי נשכחות 
              עם קבוצות קטנות של ישראלים בליווי מדריכה מקצועית
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              הצטרפו לטיול מאורגן
            </button>
          </div>
        </div>
      </section>

      {/* Running Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 overflow-hidden shadow-md">
        <div className="running-banner whitespace-nowrap">
          <span className="mx-8">ההרשמה נפתחה - מקומות מוגבלים</span>
          <span className="mx-8">הרשמו לטיול המאורגן הקרוב לקרלה בהנחייתה של מלכה</span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <button onClick={() => onPageChange('home')} className="breadcrumb-item">בית</button>
            <span className="breadcrumb-separator">←</span>
            <button onClick={() => onPageChange('services')} className="breadcrumb-item">שירותים</button>
            <span className="breadcrumb-separator">←</span>
            <span className="text-blue-600 font-bold">טיולים מאורגנים</span>
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
                  טיולים מאורגנים עם מלכה
                </h2>
                
                <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-200">
                  <div className="flex items-start">
                    <div className="text-4xl ml-4">
                      <Globe className="w-12 h-12 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                        הטיולים המאורגנים שלנו מיועדים לישראלים שרוצים לחוות את הודו בצורה מעמיקה 
                        ואותנטית, בליווי מדריכה ישראלית מקצועית שחיה בהודו.
                      </p>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                        <strong>מלכה מדריכה את הטיולים לאחר שחיה בהודו ובזמן שהיא עדיין כאן ומעודכנת על המדינה.</strong> 
                        קבוצות קטנות של עד 12 משתתפים לחוויה אישית ומיוחדת.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  הטיולים המאורגנים שלנו
                </h3>

                <div className="grid grid-cols-1 gap-8 mb-8">
                  {/* Kerala Tour */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <img 
                      src="/Kerala.png" 
                      alt="קרלה"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">
                        הודו בשלושה טעמים
                      </h4>
                      <p className="text-gray-700 leading-relaxed hebrew-text mb-4">
                        טיול שמתחיל בקצב המהיר של מומבאי, העיר הענקית והמרתקת שמציעה שילוב בלתי נגמר של המודרני והמסורתי. 
                        תיהנו מהרחובות הסואנים, מהשווקים הצבעוניים ומתרבות עשירה, ותבינו את מהות העיר שתמיד במרוץ קדימה.
                        לאחר מכן, תעברו לבנגלור, בירת הטכנולוגיה של הודו, מקום שבו היי-טק וחדשנות נפגשים עם קסם מקומי. 
                        כאן תרגישו את האווירה המיוחדת של העיר, המשלבת בין עתיד לבין מסורת, בין תעשייה לבין טבע.
                        החלק האחרון יוביל אתכם לקרלה – האזור הירוק, השקט והקסום של הודו.
                      </p>
                      <div className="flex items-center justify-between">
                        <button 
                          onClick={() => onPageChange('kerala')}
                          className="btn-primary"
                        >
                          קראו עוד
                        </button>
                        <span className="text-2xl font-bold text-blue-600">$1,200</span>
                      </div>
                    </div>
                  </div>

                  {/* Kolkata Tour */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <img 
                      src="/kolkata.png" 
                      alt="קולקטה"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">
                        מהבירה הכלכלית לתרבותית – הודו בין קצוות
                      </h4>
                      <p className="text-gray-700 leading-relaxed hebrew-text mb-4">
                        הצטרפו למסע נדיר ממערב למזרח הודו – טיול צבעוני מסעיר שיטיל אור על שני עולמות שונים כל כך באותה מדינה. 
                        במומבאי, לב ההודו המודרנית – שווקים, קולנוע, גורדי שחקים ונשמה גדולה. משם נמשיך בטיסה ללב המזרח – 
                        מדינת מערב בנגל. נגיע לכולכתא, העיר שמכונה "עיר האושר": בירתה התרבותית של הודו, מקום הולדתו של טאגור, 
                        ושל תה חם בלב חם. ולסיום – הרפתקה ייחודית בטבע: שייט וספארי בשמורת הסונדרבן.
                      </p>
                      <div className="flex items-center justify-between">
                        <button 
                          onClick={() => onPageChange('kolkata')}
                          className="btn-primary"
                        >
                          קראו עוד
                        </button>
                        <span className="text-2xl font-bold text-blue-600">$1,400</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  מה כולל הטיול המאורגן?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">הדרכה מקצועית</h4>
                      <p className="text-gray-700 hebrew-text">מדריכה ישראלית מנוסה לכל הטיול</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">לינה במלונות איכותיים</h4>
                      <p className="text-gray-700 hebrew-text">מלונות נבחרים ובדוקים</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">כל ההסעות</h4>
                      <p className="text-gray-700 hebrew-text">תחבורה נוחה לכל הטיול</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">ארוחות כלולות</h4>
                      <p className="text-gray-700 hebrew-text">ארוחות בוקר וחלק מהארוחות</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">כניסות לאתרים</h4>
                      <p className="text-gray-700 hebrew-text">כל דמי הכניסה כלולים</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">קבוצה קטנה</h4>
                      <p className="text-gray-700 hebrew-text">עד 12 משתתפים לחוויה אישית</p>
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
                  <p className="text-gray-700 hebrew-text">מדריכת טיולים מאורגנים</p>
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
                  הצטרפו לטיול
                </button>
              </div>

              {/* Next Tours Card */}
              <div className="bg-orange-50 rounded-xl p-8 border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text text-center">הטיולים הקרובים</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">קרלה - מרץ 2024</span>
                      <span className="font-bold text-blue-600 text-sm">4 מקומות</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">14 ימים מלאים</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">קולקטה - מאי 2024</span>
                      <span className="font-bold text-green-600 text-sm">6 מקומות</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">12 ימים מלאים</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-700 hebrew-text text-center font-bold">
                    מקומות מוגבלים - הרשמו עכשיו!
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
              למה לבחור בטיולים המאורגנים שלנו?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">קבוצות קטנות</h3>
              <p className="text-gray-600 hebrew-text">עד 12 משתתפים לחוויה אישית ומיוחדת</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">חוויות אותנטיות</h3>
              <p className="text-gray-600 hebrew-text">גישה למקומות שתיירים רגילים לא מגיעים אליהם</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">מדריכה מקצועית</h3>
              <p className="text-gray-600 hebrew-text">מלכה מלווה אתכם בכל שלב של הטיול</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים להצטרף לטיול מאורגן?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            צרו קשר עוד היום להרשמה לטיול המאורגן הקרוב עם מלכה - 
            המדריכה הישראלית המנוסה בהודו
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              הצטרפו לטיול
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
              מה אומרים המשתתפים
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">חוויות אמיתיות של ישראלים שהשתתפו בטיולים המאורגנים</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "הטיול לקרלה עם מלכה היה מדהים! הקבוצה הקטנה יצרה אווירה משפחתית 
                והמקומות שביקרנו היו פשוט קסומים. חוויה בלתי נשכחת!"
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">רונית ואבי כהן</div>
              <div className="testimonial-location text-gray-600">תל אביב</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "מלכה הראתה לנו את הודו האמיתית. הטיול המאורגן היה מושלם - 
                כל הפרטים מסודרים והחוויות היו אותנטיות ומרגשות."
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
                "הטיול לקולקטה היה הרפתקה אמיתית! מלכה דאגה לכל הפרטים 
                והקבוצה הייתה נהדרת. בהחלט נצטרף לטיול הבא!"
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">דוד ושרה גולן</div>
              <div className="testimonial-location text-gray-600">ירושלים</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganisedToursPage;