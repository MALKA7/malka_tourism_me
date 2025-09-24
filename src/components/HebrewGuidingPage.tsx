import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, ArrowLeft, Calendar, Award, Map, User, Globe, X, Car, Plane, Hotel, Info } from 'lucide-react';

interface HebrewGuidingPageProps {
  onPageChange: (page: string) => void;
}

const HebrewGuidingPage: React.FC<HebrewGuidingPageProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = React.useState('included');

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
                  הדרכה בעברית בהודו
                </h2>
                
                {/* Three Photos Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="/mumbai gateway.jpg"
                      alt="מטייל יחיד בודק יעד"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium hebrew-text text-center">מטיילים יחידים ביעד אחד</p>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="/tours w malka.png"
                      alt="קבוצה עם מדריכה באתר היסטורי"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium hebrew-text text-center">קבוצות ביעד אחד עם הדרכה</p>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src="/organised tours.png"
                      alt="קבוצה פרטית בטיול רב-יומי"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium hebrew-text text-center">קבוצות פרטיות בטיול רב-יומי</p>
                    </div>
                  </div>
                </div>

                {/* Detailed Text Section */}
                <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-200">
                  <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-6">
                    מלכה מדריכה בעברית בהודו מאז 2010, ומציעה חוויות אותנטיות עם הבנה עמוקה של התרבות המקומית והצרכים של מטיילים ישראלים. מלכה אינה מגיעה מישראל להדרכה אלא חיה ומדריכה מתוך הודו. היא גרה 5 שנים במערב הודו, 8 שנים בדרום הודו ושנתיים בצפון הודו, מה שמעניק לה הבנה מקיפה על הודו, תרבותה ותושביה. היא מכירה את המקומות הייחודיים במדינה, כולל כאלה שתיירים רגילים אינם מגיעים אליהם, ומספקת הדרכה מקצועית ומותאמת אישית.
                  </p>
                  
                  <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-6">
                    מלכה היא ישראלית, בעלת תואר שני בפסיכולוגיה, וגידלה את ילדיה בהודו, מה שמעניק לה הבנה מלאה של הצרכים של משפחות וילדים המטיילים בארץ. בעלה מקומי, והיא עצמה נוהגת ברחבי הודו, מבשלת מאכלים הודיים, וכל חבריה הם הודיים, מה שמעמיק את היכרותה עם התרבות המקומית והחיים האמיתיים במדינה.
                  </p>
                  
                  <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-6">
                    ההדרכות של מלכה יכולות להתבצע בכל יעד בהודו, והיא מגיעה בטיסה ממקום למקום כדי להדריך את המטיילים. ההדרכות יכולות להיות <strong>יום אחד בלבד עבור מטייל אחד או יותר</strong>, <strong>יום אחד עבור קבוצת מטיילים שהגיעה יחד ורוצה הדרכה ביעד אחד בלבד</strong>, או <strong>למשך כל הטיול בהודו</strong>, בהתאם לצרכי המטיילים.
                  </p>
                  
                  <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                    מלכה יכולה גם לעזור בהזמנת רכבים ליום ההדרכה, כדי להבטיח נוחות וניידות מקסימלית במהלך הטיול.
                  </p>
                </div>

                {/* Tab Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                  {/* Tab Headers */}
                  <div className="flex border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab('included')}
                      className={`flex-1 px-6 py-4 font-medium hebrew-text transition-all duration-300 ${
                        activeTab === 'included'
                          ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      כלול
                    </button>
                    <button
                      onClick={() => setActiveTab('notIncluded')}
                      className={`flex-1 px-6 py-4 font-medium hebrew-text transition-all duration-300 ${
                        activeTab === 'notIncluded'
                          ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      לא כלול
                    </button>
                  </div>
                  
                  {/* Tab Content */}
                  <div className="p-8">
                    {activeTab === 'included' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
                          <span className="hebrew-text">תחבורה</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
                          <span className="hebrew-text">הדרכה בעברית</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
                          <span className="hebrew-text">בניית מסלול יומי</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
                          <span className="hebrew-text">8 שעות סיור</span>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'notIncluded' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <X className="w-5 h-5 text-red-600 ml-2" />
                          <span className="hebrew-text">ארוחות ושתייה</span>
                        </div>
                        <div className="flex items-center">
                          <X className="w-5 h-5 text-red-600 ml-2" />
                          <span className="hebrew-text">כניסות לאתרים</span>
                        </div>
                        <div className="flex items-center">
                          <X className="w-5 h-5 text-red-600 ml-2" />
                          <span className="hebrew-text">תשלום על מצלמות</span>
                        </div>
                        <div className="flex items-center">
                          <X className="w-5 h-5 text-red-600 ml-2" />
                          <span className="hebrew-text">ביטוחים שונים</span>
                        </div>
                        <div className="flex items-center">
                          <X className="w-5 h-5 text-red-600 ml-2" />
                          <span className="hebrew-text">טיפים לנותני שירות</span>
                        </div>
                        <div className="flex items-center">
                          <X className="w-5 h-5 text-red-600 ml-2" />
                          <span className="hebrew-text">קניות אישיות</span>
                        </div>
                      </div>
                    )}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text text-center">מה חשוב לדעת על מחיר ההדרכה</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-blue-600 ml-3 flex-shrink-0" />
                      <h4 className="text-gray-800 hebrew-text font-bold">סיור יום מלא (8 שעות)</h4>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-green-600 ml-3 flex-shrink-0" />
                      <p className="text-sm text-gray-600 hebrew-text">מחיר משתנה בהתאם למספר המשתתפים</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-purple-600 ml-3 flex-shrink-0" />
                      <p className="text-sm text-gray-600 hebrew-text">הדרכה בעברית או אנגלית לפי בקשה</p>
                    </div>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <Car className="w-5 h-5 text-blue-600 ml-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700 hebrew-text">כולל רכב ממוזג ונהג</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <Plane className="w-5 h-5 text-green-600 ml-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700 hebrew-text">המחיר כולל טיסות של מלכה ליעד</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <Hotel className="w-5 h-5 text-purple-600 ml-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700 hebrew-text">הוצאות מחיה, לינה ונסיעה</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <Calendar className="w-5 h-5 text-orange-600 ml-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700 hebrew-text">מלכה מגיעה בטיסה לילה לפני הסיור</span>
                  </div>
                  
                  <div className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <Info className="w-5 h-5 text-yellow-600 ml-3 flex-shrink-0" />
                    <span className="text-sm text-gray-700 hebrew-text font-medium">יש לסגור את הסיור מבעוד מועד ובתיאום מראש</span>
                  </div>
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
                "שלום, מעוניינת לשתף אתכם בחוויה נהדרת שחוויתי (וזאת משום הבחירה הנכונה באדם הנכון- מלכה אירני). 
                הנדון ארע במסגרת טיול נושא במדינת קרלה עם קבוצה אינטימית ומופלאה אשר אליה הגעתי במקרה (אבל כפי שאתם יודעים שום דבר אינו במקרה.). 
                באמצעות קבוצה זו טיילתי בדרום הודו במדינת קרלה שבה מלכה אירני מתמחה. 
                במאמר מוסגר חשוב לי לציין שמלכה הולכת ובודקת את כל המקומות אליה היא שולחת את מטייליה (לא להאמין איזו השקעה מבחינתה ודיוק עד לרמת הפרטים הקטנים ביותר - מקצוענות לשמה!). 
                הטיול כלל מלונות ברמה גבוהה, אך לא זה העיקר ולא זה מה שהשאיר רושם כי אם הידע הנרחב על המקום, עיבוד המידע והעברתו באופן ברור, מרתק, מהימן וכל כך מסקרן- הכל באווירה נפלאה, מכילה ומחבקת שגרמה לי להתרגשות חיובית, ידעתי מכל הנ\"ל שאני בידיים טובות ושאני בידי אשת מקצוע שמכירה את השטח וגם קשובה לבקשותיי וצרכיי. 
                לסיום- יש טיול בהודו לפני מלכה אירני ויש טיול בהודו אחרי מלכה אירני. זהו אחד מהטיולים הבלתי נשכחים! 
                כל כך מוקירה ורק רוצה לומר - תודה לך מלכה אירני על חווית חושים מסעירה אשר שווה את כל ההשקעה."
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">ליאת כבירי, שמשית</div>
              <div className="testimonial-location text-gray-600">ישראל</div>
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