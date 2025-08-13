import React, { useState, useEffect } from 'react';
import { Heart, Globe, Users, Award, MapPin, Calendar, Camera } from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: '/Bride.jpg',
      alt: 'מלכה בהודו - חתונה הודית'
    },
    {
      src: '/indian baba.jpg',
      alt: 'בבא הודי - תרבות מקומית'
    },
    {
      src: '/indian ladies with sari.jpg',
      alt: 'נשים הודיות בסארי מסורתי'
    },
    {
      src: '/mumbai slum.jpg',
      alt: 'שכונות עוני במומבאי - הודו האמיתית'
    },
    {
      src: '/kerala boat.jpg',
      alt: 'סירות מסורתיות בקרלה'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Gallery Section */}
      <section className="relative h-96 overflow-hidden">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              מי היא מלכה אירני?
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              ישראלית שהתאהבה בהודו לפני 15 שנה ומאז לא הפסקה לחקור את המדינה המדהימה הזו
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" 
                alt="מלכה אירני"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 hebrew-text">
                שלום, אני מלכה אירני!
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text">
                ישראלית שהתאהבה בהודו לפני 15 שנה ומאז לא הפסקתי לחקור את המדינה המדהימה הזו. 
                אחרי שנים של נסיעות, למידה ויצירת קשרים עמוקים עם התרבות המקומית, החלטתי להקדיש את חיי 
                לעזור לישראלים אחרים לחוות את הקסם של הודו.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text">
                אני מתמחה בטיולים מותאמים אישית שמשלבים את האתרים הכי מרהיבים עם חוויות אותנטיות 
                שרק מקומיים יודעים עליהן. המטרה שלי היא שתחזרו הביתה עם זיכרונות לכל החיים 
                והבנה עמוקה יותר של התרבות ההודית.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text">
                בעברית, בביטחון ועם הרבה אהבה - ככה אני מדריכה את הטיולים שלי.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              הסיפור שלי
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text mb-6">
                הסיפור שלי מתחיל כאשר בהרם עבר לסרי לנקה לעבוד כמנהל בכיר עבור חברת בגדים אמריקאית. 
                אני, מלכה, גרתי ארבע שנים בסרי לנקה ועבדתי כדוגמנית בית של ויקטוריה סיקרט. 
                שנינו נפגשנו זמן קצר אחרי שברהם עבר למשרד בקולומבו.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text mb-6">
                סטטוס של עמיתים למשרד הכשיר את הקרקע לסטטוס של יחסים רומנטיים. לאחר שנה של חיים יחד, 
                ביום ההולדת של בהרם, ביקשה נפשי להפתיע את בהרם, רעיונות רקדנית הבטן שתשלח למקום העבודה שלו 
                או נסיעה בכדור פורח בוטלו כי רציתי מתנה מיוחדת ובל תשכח. ואז נמצאו לי הפתרונות.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text mb-6">
                בבוקר ה-8 באוגוסט, ביום הולדתו, הובלתי את בהרם לחדר שבו חיכו ידידינו הקרובים יחד עם כומר פרסי 
                ורשמת נישואין. באותו יום קיבל בהרם את מתנת חייו – אותי כאישה ורעיה.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text mb-6">
                שנתיים לאחר מכן התברכנו בתאומים, בת שנקראת בשם פרסי (על שם אמה האהובה של בהרם) 
                שכן בהרם הוא בן לדת הולכת ונכחדת, אמגושים בשפתינו או זורשתריאנים כמוכר לעולם ובן בעל שם יהודי. 
                הילדים נולדו בישראל בשנת 2010 שזו הייתה גם השנה שהיגרנו להודו. מומבאי, העיר שבה בהרם גדל והתחנך 
                קיבלה את פנינו ונשארנו לגור בעיר מדהימה זו שש שנים טובות.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text mb-6">
                במומבאי, הסיפור המיוחד שלנו והמשפחה הדו תרבותית שהקמנו גרמו למשיכה של מטיילים. 
                שילוב שתי התרבויות שאני מזוהה איתן, התרבות הישראלית וההודית נותנות לי את היתרון ליצור חווית טיול 
                ייחודית הזוכה להערכה מצד המטיילים. לאחר ששירותיי התיירות שלי הפכו פופולריים בהרם הצטרף אליי 
                ויחד הפכנו ליהות התרגום של המראות והתרבות ההודית.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text">
                בעשור האחרון צברתי ידע נרחב מעמיק ועשיר על תרבות המזרח ובפרט תרבותה של הודו לא רק בדרך התאוריה 
                אלא בדרך המעשית, לדוגמא: המרתי רישיון נהיגה לרישיון הודי, פתחתי עסק, למדתי תואר שני באוניברסיטת מומבאי, 
                עבדתי בבית חולים לחולי נפש במסגרת מקצועי כפסיכולוגית קלינית, התגוררתי בשכונה של דת הפרסים במומבאי 
                שלזרים אין כניסה אליה, שימשתי כדירקטורית לחברות הודיות בבנגלור ואת השאר אספר בטיולים עימי, 
                כל זה ועוד הופך אותי לבת המקום כך שאינני מציגה את הודו ממקום של ריחוק אלא ממקום של קרבה 
                כיון שקשרתי את גורלי בגורל התושבים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Photos Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              תמונות אותנטיות מחיי מלכה בהודו מ-2010
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              גלריה של תמונות אמיתיות מחיי מלכה בהודו
            </p>
            <p className="text-lg text-blue-600 hebrew-text mt-4 font-medium">
              רוצים להכיר אותי יותר? לחצו על התמונות וגלו עוד עובדות קטנות ומיוחדות עליי
            </p>
          </div>

          {/* Professional Photo Grid with Hover Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* Photo 1 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/Bride.jpg"
                alt="מלכה בהודו"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">אמא של הומאי ובן ארי</p>
                </div>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/indian ladies with sari.jpg"
                alt="תרבות הודית"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">יודעת לכתוב קצת בהינדית</p>
                </div>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/mumbai gateway.jpg"
                alt="מומבאי"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">נוהגת בקטנוע בהודו</p>
                </div>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/indian baba.jpg"
                alt="תרבות רוחנית"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">אני לא שותה קפה</p>
                </div>
              </div>
            </div>

            {/* Photo 5 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/mumbai slum.jpg"
                alt="הודו האמיתית"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">גרתי בדלהי מומבאי ובנגלור</p>
                </div>
              </div>
            </div>

            {/* Photo 6 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/kerala boat.jpg"
                alt="קרלה"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">פסיכולוגית קלינית בהכשרה</p>
                </div>
              </div>
            </div>

            {/* Photo 7 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/Holi girl.png"
                alt="חג הצבעים"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">בת לעדת היהודים ההרריים</p>
                </div>
              </div>
            </div>

            {/* Photo 8 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/dancers.png"
                alt="ריקודים הודיים"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">לא שותה אלכוהול</p>
                </div>
              </div>
            </div>

            {/* Photo 9 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/Paneer.png"
                alt="אוכל הודי"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">כבר לא אוכלת עוף ובשר</p>
                </div>
              </div>
            </div>

            {/* Photo 10 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/kolkata.png"
                alt="קולקטה"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">סרט הודי ראשון שראיתי היה בגיל 8</p>
                </div>
              </div>
            </div>

            {/* Photo 11 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/varanasi.jpg"
                alt="ורנאסי"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">גרתי בישראל, ארהב סרי לנקה והודו</p>
                </div>
              </div>
            </div>

            {/* Photo 12 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/tours w malka.png"
                alt="סיורים עם מלכה"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">הייתי דוגמנית בית של ויקטוריה סיקרט</p>
                </div>
              </div>
            </div>

            {/* Photo 13 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/Home stay malka.png"
                alt="אירוח אישי"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">אם הייתי יכולה לשנות מקצועי הייתי עורכת דין</p>
                </div>
              </div>
            </div>

            {/* Photo 14 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/transport bus.png"
                alt="תחבורה בהודו"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">בחרתי לילדי שמות ותאריכי לידה לפי הקבלה והנומרולוגיה</p>
                </div>
              </div>
            </div>

            {/* Photo 15 */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="/organised tours.png"
                alt="טיולים מאורגנים"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium hebrew-text text-center">בת מזל עקרב</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Description */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 max-w-3xl mx-auto border border-blue-200">
              <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">
                עוברו עם העכבר על התמונות לגילוי עובדות מעניינות
              </h3>
              <p className="text-gray-600 hebrew-text leading-relaxed">
                כל תמונה בגלריה מסתירה עובדה אישית ומעניינת על מלכה. 
                גלו את הסיפור האישי מאחורי המדריכה הישראלית המנוסה בהודו.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              הצוות
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" 
                    alt="מלכה אירני"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 hebrew-text">מלכה אירני</h3>
                  <p className="text-lg text-blue-600 mb-4 hebrew-text font-semibold">מייסדת החברה</p>
                  
                  <p className="text-gray-700 leading-relaxed hebrew-text mb-4">
                    מלכה היגרה להודו ב-2010 עם בעלה וילדיה התאומים בני חצי השנה. באוניברסיטת בומביי קיבלה מלכה 
                    תואר שני בפסיכולוגיה קלינית. בזמן שעבדה עם האוכלוסייה ההודית בבתי חולים פרטיים וציבוריים שונים 
                    ברחבי מומבאי, היא גם הדריכה ליוותה וייעצה למטיילים המגיעים להודו.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed hebrew-text mb-4">
                    ב-2016 עברה מלכה לבנגלור, בירת מדינת קרנטקה עם משפחתה לעבוד כדירקטורית בחברה פרטית. 
                    מלכה איננה רואה את עצמה כאנתרופולוגית, אלא כהודית למחצה. היא נוהגת בכבישי הודו, מבינה ומדברת הינדית, 
                    מבשלת אוכל הודי מסורתי, ומסוגלת לאכול מאכלים חריפים יותר מהמקומיים.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed hebrew-text">
                    מלכה אוהבת אהבה עזה ועמוקה את הודו; המוטו שלה <strong>"ברומא התנהג כרומאי"</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organized Tours Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Running Banner */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 overflow-hidden shadow-md mb-12 rounded-lg">
            <div className="running-banner whitespace-nowrap">
              <span className="mx-8">ההרשמה נפתחה - מקומות מוגבלים</span>
              <span className="mx-8">הרשמו לטיול המאורגן הקרוב לקרלה בהנחייתה של מלכה</span>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              טיולים מאורגנים
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kerala Tour */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <img 
                src="/Kerala.png" 
                alt="קרלה"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">
                  שם הטיול: הודו בשלושה טעמים
                </h3>
                <p className="text-gray-700 leading-relaxed hebrew-text mb-6">
                  טיול שמתחיל בקצב המהיר של מומבאי, העיר הענקית והמרתקת שמציעה שילוב בלתי נגמר של המודרני והמסורתי. 
                  תיהנו מהרחובות הסואנים, מהשווקים הצבעוניים ומתרבות עשירה, ותבינו את מהות העיר שתמיד במרוץ קדימה.
                  לאחר מכן, תעברו לבנגלור, בירת הטכנולוגיה של הודו, מקום שבו היי-טק וחדשנות נפגשים עם קסם מקומי. 
                  כאן תרגישו את האווירה המיוחדת של העיר, המשלבת בין עתיד לבין מסורת, בין תעשייה לבין טבע.
                  החלק האחרון יוביל אתכם לקרלה – האזור הירוק, השקט והקסום של הודו. כאן תצללו לתוך חוויות טבע מרהיבות, 
                  תיהנו מתעלות מים יפהפיות, תיהנו מהשקט ומהשלווה של האזור, ותתמלאו באנרגיה מחודשת מהסביבה המיוחדת הזו.
                </p>
                <button 
                  onClick={() => onPageChange('kerala')}
                  className="btn-primary"
                >
                  קראו עוד
                </button>
              </div>
            </div>

            {/* Kolkata Tour */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
              <img 
                src="/kolkata.png" 
                alt="קולקטה"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">
                  שם הטיול: מהבירה הכלכלית לתרבותית – הודו בין קצוות
                </h3>
                <p className="text-gray-700 leading-relaxed hebrew-text mb-6">
                  הצטרפו למסע נדיר ממערב למזרח הודו – טיול צבעוני מסעיר שיטיל אור על שני עולמות שונים כל כך באותה מדינה. 
                  במומבאי, לב ההודו המודרנית – שווקים, קולנוע, גורדי שחקים ונשמה גדולה. משם נמשיך בטיסה ללב המזרח – 
                  מדינת מערב בנגל. נגיע לכולכתא, העיר שמכונה "עיר האושר": בירתה התרבותית של הודו, מקום הולדתו של טאגור, 
                  ושל תה חם בלב חם. ולסיום – הרפתקה ייחודית בטבע: שייט וספארי בשמורת הסונדרבן, אזור הדלתא הגדול בעולם, 
                  ביתו של הטיגריס הבנגלי והקסם הפראי. הודו שונה. הודו עמוקה. הודו, שלא הכרתם.
                </p>
                <button 
                  onClick={() => onPageChange('kolkata')}
                  className="btn-primary"
                >
                  קראו עוד
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-6 hebrew-text">
              שירותי נוסעים בהודו
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="professional-card p-6 rounded-xl card-hover cursor-pointer group"
              onClick={() => onPageChange('trip-planning')}
            >
              <img 
                src="/plan tour.png" 
                alt="תכנון טיול בהודו"
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold mb-3 hebrew-text text-slate-800">תכנון טיול בהודו</h3>
              <p className="text-slate-600 hebrew-text">תכנון מפורט ומותאם אישית</p>
            </div>

            <div 
              className="professional-card p-6 rounded-xl card-hover cursor-pointer group"
              onClick={() => onPageChange('trip-execution')}
            >
              <img 
                src="/booking.png" 
                alt="הפקת טיול בהודו"
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold mb-3 hebrew-text text-slate-800">הפקת טיול בהודו</h3>
              <p className="text-slate-600 hebrew-text">ביצוע מקצועי של הטיול</p>
            </div>

            <div 
              className="professional-card p-6 rounded-xl card-hover cursor-pointer group"
              onClick={() => onPageChange('hebrew-guiding')}
            >
              <img 
                src="/tours w malka.png" 
                alt="הדרכה בעברית בהודו"
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold mb-3 hebrew-text text-slate-800">הדרכה בעברית בהודו</h3>
              <p className="text-slate-600 hebrew-text">מדריכה דוברת עברית</p>
            </div>

            <div 
              className="professional-card p-6 rounded-xl card-hover cursor-pointer group"
              onClick={() => onPageChange('transport-services')}
            >
              <img 
                src="/transport bus.png" 
                alt="שירותי הסעות ונהג"
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold mb-3 hebrew-text text-slate-800">שירותי הסעות ונהג</h3>
              <p className="text-slate-600 hebrew-text">הסעות בטוחות ונוחות</p>
            </div>

            <div 
              className="professional-card p-6 rounded-xl card-hover cursor-pointer group"
              onClick={() => onPageChange('personal-hosting')}
            >
              <img 
                src="/Home stay malka.png" 
                alt="אירוח אישי בהודו"
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold mb-3 hebrew-text text-slate-800">אירוח אישי בהודו</h3>
              <p className="text-slate-600 hebrew-text">לינה אותנטית אצל משפחות</p>
            </div>

            <div 
              className="professional-card p-6 rounded-xl card-hover cursor-pointer group"
              onClick={() => onPageChange('organised-tours')}
            >
              <img 
                src="/organised tours.png" 
                alt="טיולים מאורגנים בהודו"
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold mb-3 hebrew-text text-slate-800">טיולים מאורגנים בהודו</h3>
              <p className="text-slate-600 hebrew-text">טיולים קבוצתיים מאורגנים</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Malka */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              צרו קשר עם מלכה
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label hebrew-text">שם מלא</label>
                  <input type="text" className="form-input" placeholder="השם שלכם" />
                </div>
                <div>
                  <label className="form-label hebrew-text">אימייל</label>
                  <input type="email" className="form-input" placeholder="example@email.com" />
                </div>
              </div>
              
              <div>
                <label className="form-label hebrew-text">נושא</label>
                <input type="text" className="form-input" placeholder="נושא ההודעה" />
              </div>
              
              <div>
                <label className="form-label hebrew-text">הודעה</label>
                <textarea rows={6} className="form-input" placeholder="ספרו לנו על הטיול שאתם מתכננים..."></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                שלחו הודעה
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-white to-green-600 text-white relative overflow-hidden">
        {/* Indian Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3Ccircle cx='60' cy='30' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            <div>
              <div className="text-6xl font-bold text-white mb-2">3</div>
              <p className="text-xl hebrew-text">אזורים בהודו בהם מלכה חיה</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-2">15</div>
              <p className="text-xl hebrew-text">שנים שמלכה חיה בהודו</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-2">261</div>
              <p className="text-xl hebrew-text">נוסעים שקיבלו את עזרתה</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;