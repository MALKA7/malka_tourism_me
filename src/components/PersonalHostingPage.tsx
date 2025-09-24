import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, ArrowLeft, Calendar, Award, Home, Wifi, Car, X } from 'lucide-react';

interface PersonalHostingPageProps {
  onPageChange: (page: string) => void;
}

const PersonalHostingPage: React.FC<PersonalHostingPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/Home stay malka.png" 
            alt="אירוח אישי בהודו"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              אירוח אישי בהודו
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              חוו את הודו האמיתית עם אירוח אישי אצל מלכה. 3 חדרים בווילה פרטית 
              בצפון בנגלור, 15 ק"מ מהנמל לרגעי שלווה כפריים לפני או אחרי הטיסה
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              הזמינו אירוח אישי
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
            <span className="text-blue-600 font-bold">אירוח אישי בהודו</span>
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
                  אירוח אישי בווילה פרטית
                </h2>
                
                <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-200">
                  <div className="flex items-start">
                    <div className="text-4xl ml-4">
                      <Home className="w-12 h-12 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                        מלכה מציעה אירוח אישי ב-3 חדרים בווילה הפרטית שלה בצפון בנגלור, 
                        במרחק של 15 ק"מ בלבד מנמל התעופה.
                      </p>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                        <strong>מושלם למי שמחפש רגעי שלווה כפריים לפני הטיסה או אחרי הטיסה לנחיתה קלה.</strong> 
                        חוויית אירוח אותנטית עם משפחה ישראלית בהודו.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  מה כולל האירוח?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">חדרים פרטיים</h4>
                      <p className="text-gray-700 hebrew-text">חדרים נוחים ומאובזרים בווילה פרטית</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">מיקום מושלם</h4>
                      <p className="text-gray-700 hebrew-text">15 ק"מ מנמל התעופה - נוח לטיסות</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">אווירה כפרית ושקטה</h4>
                      <p className="text-gray-700 hebrew-text">סביבה שלווה ורגועה הרחק מהעיר הסואנת</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">אירוח אישי</h4>
                      <p className="text-gray-700 hebrew-text">חוויה אותנטית עם משפחה ישראלית</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  מה לא כולל האירוח?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <X className="w-6 h-6 text-red-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">הסעות לנמל</h4>
                      <p className="text-gray-700 hebrew-text">הסעות לנמל התעופה לא כלולות במחיר</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <X className="w-6 h-6 text-red-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">ארוחות ביתיות</h4>
                      <p className="text-gray-700 hebrew-text">ארוחות לא כלולות במחיר האירוח</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  למי מתאים?
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">✈️</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">לפני הטיסה</h4>
                      <p className="text-gray-700 hebrew-text text-lg">רגעי שלווה אחרונים לפני החזרה לישראל</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">🛬</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">אחרי הטיסה</h4>
                      <p className="text-gray-700 hebrew-text text-lg">נחיתה רכה והתאקלמות הדרגתית להודו</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">🌿</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">חוויה כפרית</h4>
                      <p className="text-gray-700 hebrew-text text-lg">למי שרוצה לחוות את הודו הכפרית והשקטה</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">👨‍👩‍👧‍👦</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">משפחות</h4>
                      <p className="text-gray-700 hebrew-text text-lg">סביבה בטוחה ונוחה למשפחות עם ילדים</p>
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
                  <p className="text-gray-700 hebrew-text">מארחת ישראלית בהודו</p>
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
                    <span className="text-gray-800">צפון בנגלור, הודו</span>
                  </div>
                </div>

                <button 
                  onClick={() => onPageChange('contact')}
                  className="w-full btn-primary py-4 text-lg"
                >
                  הזמינו אירוח
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* House Photos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              הווילה והסביבה
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              תמונות מהווילה הפרטית והחוויות באזור
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* House Photos */}
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/Home stay malka.png"
                alt="הווילה הפרטית של מלכה"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">הווילה הפרטית</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg"
                alt="חדר אירוח נוח"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">חדרים נוחים ומאובזרים</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg"
                alt="גינה ואזור מנוחה"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">גינה ואזור מנוחה</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg"
                alt="אזור כפרי שקט"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">אזור כפרי שקט</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg"
                alt="נוף כפרי יפה"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">נוף כפרי יפה</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg"
                alt="אזור ישיבה חיצוני"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">אזור ישיבה חיצוני</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg"
                alt="חוויות מקומיות"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">חוויות מקומיות</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg"
                alt="סביבה טבעית"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">סביבה טבעית</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg"
                alt="משפחה ישראלית בהודו"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium hebrew-text text-center">משפחה ישראלית בהודו</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Experiences Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              חוויות מקומיות באזור
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              מה האזור יכול להציע לכם
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">שיעור בישול</h3>
              <p className="text-gray-700 hebrew-text leading-relaxed">
                שיעור בישול מהמטבח של דרום הודו עם גברת בינדו נייר - למדו להכין מנות מסורתיות אותנטיות
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">ארוחה על עלה בננה</h3>
              <p className="text-gray-700 hebrew-text leading-relaxed">
                ארוחת צהריים על עלה בננה בבית מקומי - חוויה קולינרית אותנטית בסגנון דרום הודי מסורתי
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">גבעת ננדי</h3>
              <p className="text-gray-700 hebrew-text leading-relaxed">
                טיול לגבעת ננדי (Nandi Hill) - נוף מרהיב, אוויר צח וחוויית טבע מדהימה במרחק נסיעה קצר
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">Isha Foundation</h3>
              <p className="text-gray-700 hebrew-text leading-relaxed">
                טיול ל-Isha Foundation לצפייה במופע לייזר בערב - חוויה רוחנית ויזואלית מרהיבה
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Special Section - Without Icons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              בנגלור מחוץ לשביל החומוס
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text">דוונהלי – Devanahalli</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3 hebrew-text">משמעות השם:</h4>
                  <p className="text-gray-700 hebrew-text leading-relaxed">
                    השם "דוונהלי" מורכב מהמילים בסנסקריט: "Deva" – אל, ו-"Nahalli" – כפר או מקום מגורים, כלומר "כפר של האלים" או "מקום מגורים של האלוהים".
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3 hebrew-text">מיקום גאוגרפי:</h4>
                  <p className="text-gray-700 hebrew-text leading-relaxed">
                    דוונהלי ממוקמת במדינת קארנאטא, כ-35 ק"מ מצפון לבנגלור, ליד נמל התעופה הבינלאומי של בנגלור (Kempegowda International Airport). היא נמצאת באזור גבעות ירוקות ונוף כפרי טיפוסי, קרובה גם לננדי הילס (Nandi Hills) ולמוסד איסה (Isha Foundation).
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3 hebrew-text">אוכלוסייה:</h4>
                  <p className="text-gray-700 hebrew-text leading-relaxed">
                    העיר היא עיירה קטנה עם כ-28,000–30,000 תושבים, רובם עוסקים בחקלאות, מסחר קטן ותיירות.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3 hebrew-text">מה יש בעיר ומה אפשר לעשות:</h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 hebrew-text leading-relaxed">
                      <strong>מבצר דוונהלי (Devanahalli Fort):</strong> מבצר עתיק מהמאה ה-16–17, ששימש מרכז מונרכי הודי, פתוח למבקרים עם סיורים במבנה ההיסטורי.
                    </p>
                    
                    <p className="text-gray-700 hebrew-text leading-relaxed">
                      <strong>מקדשים עתיקים:</strong> מספר מקדשים עם ארכיטקטורה מסורתית יפה.
                    </p>
                    
                    <p className="text-gray-700 hebrew-text leading-relaxed">
                      <strong>קרבה לננדי הילס ולמוסד איסה:</strong> ניתן לשלב ביקור בעיר עם טיולים בטבע, חוויות רוחניות ומדיטציה, והשתתפות בפעילויות במרכז איסה.
                    </p>
                    
                    <p className="text-gray-700 hebrew-text leading-relaxed">
                      <strong>פעילויות לתיירים בסביבה:</strong> מסלולי הליכה בטבע, טרקים קלים, סיורים בכפרים, שווקים מקומיים וחוויית כפר הודית אותנטית.
                    </p>
                    
                    <p className="text-gray-700 hebrew-text leading-relaxed">
                      <strong>גישה נוחה:</strong> בזכות הקרבה לנמל התעופה והכבישים הראשיים, העיר מהווה נקודת עצירה נוחה למטיילים.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3 hebrew-text">סיכום:</h4>
                  <p className="text-gray-700 hebrew-text leading-relaxed">
                    דוונהלי מציעה שילוב של היסטוריה, תרבות, טבע וחוויות רוחניות. היא מקום אידיאלי לעצירה קצרה או בסיס לטיולים בסביבה – לננדי הילס, למוסד איסה או לחוות חיי הכפר ההודי.
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
            מוכנים לחוויית אירוח אישית?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            צרו קשר עוד היום להזמנת אירוח אישי בווילה הפרטית של מלכה 
            בצפון בנגלור - החוויה הכי אותנטית בהודו
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              הזמינו אירוח
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
              מה אומרים האורחים
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">חוויות אמיתיות של ישראלים שהתארחו אצל מלכה</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "כשתכננתי את הטיול שלי בהודו, שאורגן על ידי מלכה אירני, קראתי המלצות קודמות וחשבתי שאגיע לדירה. 
                הופתעתי לגלות שמלכה עברה דירה, וכעת מדובר בוילה ענקית ומרשימה - חוויה שונה ומיוחדת הרבה יותר ממה שציפיתי! 
                הבית החדש הוא וילה מרווחת, עם מרפסת רחבה שמשקיפה על חצר ירוקה ויפהפייה. בערבים נהניתי לשבת שם ולהירגע באווירה השלווה. 
                החדר שקיבלתי היה עצום, עם שירותים פרטיים, מים חמים, מזגן, חלונות גדולים שמכניסים אור טבעי, ומיטה נוחה במיוחד. 
                ההגעה לבית משדה התעופה היא נוחה במיוחד - נסיעה במונית עולה בין 800 ל-1,000 רופי ולוקחת כ-20 דקות בלבד. 
                מעבר לאירוח המפנק, מלכה נתנה לי תחושה ביתית ודאגה לכל פרט. נסענו יחד ברכב שלה לסופר הקרוב, ובוקר אחד היא לקחה אותי לארוחת בוקר במסעדה מקומית - חוויה אותנטית שהוסיפה המון לטיול שלי. 
                מלכה היא מקומית עם ידע עצום על הודו, התרבות, והחיים היומיומיים שם. השיחות איתה, העצות והטיפים שקיבלתי ממנה הוסיפו לי המון להבנה של המקום ושל החיים האחרים שיש בהודו. 
                אם אתם מחפשים מקום מפנק, נוח ומיוחד בבנגלור - אני ממליצה בחום על האירוח אצל מלכה!"
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">יניב ברק</div>
              <div className="testimonial-location text-gray-600">ישראל</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "האירוח אצל מלכה היה מושלם! הווילה שקטה ונוחה, האוכל טעים והאווירה ביתית. 
                בדיוק מה שהיינו צריכים לפני הטיסה חזרה."
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">שרה ודוד גולן</div>
              <div className="testimonial-location text-gray-600">רמת השרון</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "חוויה מדהימה! מלכה קיבלה אותנו כמו משפחה. הילדים נהנו מהחצר והשקט, 
                ואנחנו מהאווירה הביתית הישראלית."
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">משפחת כהן</div>
              <div className="testimonial-location text-gray-600">פתח תקווה</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "המיקום מושלם - קרוב לנמל אבל רחוק מהרעש. האירוח של מלכה עשה את כל ההבדל 
                בטיול שלנו להודו."
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">אבי ומירי לוי</div>
              <div className="testimonial-location text-gray-600">הרצליה</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalHostingPage;