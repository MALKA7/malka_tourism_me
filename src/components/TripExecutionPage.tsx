import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, ArrowLeft, Calendar, Award, Map, Hotel, Car, Shield } from 'lucide-react';

interface TripExecutionPageProps {
  onPageChange: (page: string) => void;
}

const TripExecutionPage: React.FC<TripExecutionPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/booking.png" 
            alt="הפקת טיול בהודו"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              הפקת טיול בהודו המופלאה
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              מהתכנון לביצוע - מלכה מלווה אתכם בכל שלב של הטיול. הזמנת מלונות, הסעות ושירותים 
              מקצועיים עם ליווי אישי ומחירים מיוחדים
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              בואו נתחיל את ההפקה
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
            <span className="text-blue-600 font-bold">הפקת טיול בהודו</span>
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
                  הפקת טיול מקצועית בהודו
                </h2>
                
                <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-200">
                  <div className="flex items-start">
                    <div className="text-4xl ml-4">
                      <Hotel className="w-12 h-12 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                        כאשר אתם מטיילים בהודו, אני רוצה שאתם תהנו מהחוויה המלאה – בלי הפתעות או אתגרים שניתן למנוע מראש. אני נוסעת בעצמי למלונות, מתרשמת מהשהות במקום ומבינה אילו חדרים, שירותים ומתקנים יתאימו לכם באמת. לפעמים מלון נראה נפלא בתמונות, אך בפועל צריך להשתמש בשרפרף כדי להגיע למיטה או לרדת במדרגות כדי להגיע לספא – כל פרט כזה אני מתעדת ומדייקת כדי שתיהנו ממלון שמתאים בדיוק לכם.
                      </p>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                        גם חברות הנהגים וההסעות נבדקות בקפידה – אני פוגשת אותן בכנסים, בוחנת את השירות שלהן ומקיימת קשר רציף לאורך כל הטיול. אני תמיד מאחורי הקלעים, דואגת שהכל יתנהל בצורה חלקה, כדי שאתם תוכלו להתרכז בליהנות מהתרבות, מהטעמים ומהנופים של הודו.
                       </p>
                       <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                        עם התכנון וההפקה שלי, כל מסלול מותאם אישית, כל המלון והנהג נבחרים בקפידה, וכל פרט קטן נבדק מראש – כך שהחוויה שלכם תהיה מותאמת, נוחה ובטוחה, ואתם רק צריכים להתרגש ולהתמלא בחוויות חדשות.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Video Section */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                    איך נבחרים המלונות לטיול שלכם
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed hebrew-text mb-6">
                    בסרטון הזה אני לוקחת אתכם איתי לעולם שבו אני חיה כבר שנים – הודו. כאן אני חושפת איך אני בוחרת את המלונות עבור הטיולים שאני מתכננת – לא סתם לפי המלצות באינטרנט, אלא מתוך ביקורים אישיים, היכרות עם הספקים והתנסות אמיתית.
                  </p>
                  <div className="max-w-4xl mx-auto">
                    <div className="relative bg-black rounded-xl overflow-hidden shadow-xl">
                      <div className="aspect-video">
                        <iframe
                          className="w-full h-full"
                          src="https://www.youtube.com/embed/FKf0AZp_-Mc"
                          title="הפקת טיול בהודו עם מלכה"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  למה לבחור בשירותי התכנון שלי
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Hotel className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 hebrew-text text-center">עבודה ישירה עם המלונות</h4>
                    <p className="text-gray-700 hebrew-text text-center text-sm leading-relaxed">ביקור אישי בחדרים והיכרות עם הצוות</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 hebrew-text text-center">שמירה על סטנדרט גבוה וגמישות</h4>
                    <p className="text-gray-700 hebrew-text text-center text-sm leading-relaxed">התאמת המלונות לצרכים של המטיילים ושינויים לפי הצורך</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 hebrew-text text-center">הנחות והטבות</h4>
                    <p className="text-gray-700 hebrew-text text-center text-sm leading-relaxed">עד 15% הנחה מהמחירים באתרי המלונות, כך שתשלום העמלה מתקזז ואתם מקבלים את החבילה באותו מחיר</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 hebrew-text text-center">הכרות עם מסלולים ואטרקציות</h4>
                    <p className="text-gray-700 hebrew-text text-center text-sm leading-relaxed">המלצות על מסעדות, מדריכים ועזרה עם כניסה לאתרים</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 hebrew-text text-center">קשר רציף עם הנהג</h4>
                    <p className="text-gray-700 hebrew-text text-center text-sm leading-relaxed">הדרכה על מסלול הסיור, שעות נסיעה ופרטים לוגיסטיים לחוויה חלקה</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 hebrew-text text-center">ליווי יומי ושירות אישי</h4>
                    <p className="text-gray-700 hebrew-text text-center text-sm leading-relaxed">הדרכה לגבי טיפים, טיפים מעשיים ושירות ליווי בטלפון עד הכניסה לחדר</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 hebrew-text text-center">ליווי מקצועי ומומחיות בהודו</h4>
                    <p className="text-gray-700 hebrew-text text-center text-sm leading-relaxed">ליווי לאורך כל הטיול וסיוע עם בקשות שונות לחוויה מותאמת אישית</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  איך זה עובד?
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">קבלת תכנית הטיול</h4>
                      <p className="text-gray-700 hebrew-text text-lg">לאחר שתכננו את הטיול, מתחילה ההפקה המקצועית</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">בדיקת מלונות אישית</h4>
                      <p className="text-gray-700 hebrew-text text-lg">מלכה נוסעת למלונות, בודקת אותם ומספקת המלצות מדויקות</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">הזמנות והסדרים</h4>
                      <p className="text-gray-700 hebrew-text text-lg">הזמנת מלונות, הסעות ושירותים נוספים עם מחירים מיוחדים</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text text-xl">ליווי במהלך הטיול</h4>
                      <p className="text-gray-700 hebrew-text text-lg">תמיכה יומית בטלפון עד שתיכנסו לחדר ותהיו מרוצים</p>
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
                  בואו נתחיל את ההפקה
                </button>
              </div>

              {/* Pricing Card */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text text-center">מחירי שירותי ההפקה</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">עמלה על הזמנות</span>
                      <span className="font-bold text-green-600 text-xl">15%</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">מהזמנות מלונות והסעות</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">מינימום הזמנה</span>
                      <span className="font-bold text-blue-600 text-xl">$400</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">לכל חבילת טיול, התכנון מתחיל מ-400$, גם אם 15% מהחבילה יוצא פחות.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">הנחות מיוחדות</span>
                      <span className="font-bold text-purple-600 text-xl">עד 15%</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">ממחירי האתרים הרגילים</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 hebrew-text text-center">
                    כולל ליווי יומי בטלפון עד שתיכנסו לחדר ותהיו מרוצים
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מה כולל השירות?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hotel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">בדיקת מלונות אישית</h3>
              <p className="text-gray-600 hebrew-text">מלכה בודקת כל מלון בעצמה לפני ההמלצה</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">שירותי הסעות מקצועיים</h3>
              <p className="text-gray-600 hebrew-text">נהגים מנוסים ואמינים עם רכבים איכותיים</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text">ליווי מלא</h3>
              <p className="text-gray-600 hebrew-text">תמיכה יומית עד שתהיו מרוצים לחלוטין</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים להתחיל את ההפקה?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            צרו קשר עוד היום ונתחיל את ההפקה המקצועית של הטיול שלכם להודו 
            עם מלכה - המדריכה הישראלית המנוסה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              בואו נתחיל את ההפקה
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
            <p className="text-xl text-gray-600 hebrew-text">חוויות אמיתיות של ישראלים שהפיקו טיולים בהודו עם מלכה</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "מלכה הפיקה לנו טיול מושלם! המלונות היו בדיוק כמו שהיא תיארה והנהגים היו מקצועיים ואמינים. 
                השירות האישי שלה עשה את כל ההבדל."
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">רונית ואבי גולן</div>
              <div className="testimonial-location text-gray-600">רמת גן</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "ההפקה המקצועית של מלכה חסכה לנו הרבה כאב ראש. היא דאגה לכל הפרטים והמלונות היו מעולים. 
                בהחלט נחזור אליה לטיול הבא!"
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">משפחת כהן</div>
              <div className="testimonial-location text-gray-600">נתניה</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="testimonial-text hebrew-text text-gray-700 mb-4 italic">
                "השירות של מלכה הוא ברמה אחרת לגמרי. היא באמת בדקה כל מלון בעצמה וזה נראה בתוצאות. 
                הטיול היה מדהים!"
              </p>
              <div className="testimonial-author hebrew-text font-bold text-gray-900">דוד ומירי לוי</div>
              <div className="testimonial-location text-gray-600">באר שבע</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripExecutionPage;