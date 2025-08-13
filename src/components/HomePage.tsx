import React from 'react';
import { MapPin, Users, Star, Phone, Calendar, Award, ArrowLeft } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [countersStarted, setCountersStarted] = React.useState(false);
  
  const heroImages = [
    {
      src: '/mumbai gateway.jpg',
      title: 'הודו עם מלכה - טיולים מותאמים אישית',
      subtitle: 'חוויות בלתי נשכחות עם מדריכה ישראלית מנוסה'
    },
    {
      src: '/varanasi.jpg',
      title: 'גלו את קסמי הודו',
      subtitle: 'טיולים מאורגנים וסיורים פרטיים ברחבי הודו'
    },
    {
      src: '/Holi girl.png',
      title: 'מסעות אותנטיים בהודו',
      subtitle: '15 שנות ניסיון בליווי ישראלים ברחבי הודו'
    },
    {
      src: '/dancers.png',
      title: 'הודו המופלאה מחכה לכם',
      subtitle: 'חוויות תרבותיות עמוקות עם הדרכה בעברית'
    },
    {
      src: '/Paneer.png',
      title: 'טיולים בהודו ברמה אחרת',
      subtitle: 'מומבאי, בנגלור, קרלה וקולקטה עם מלכה'
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Counter animation effect
  React.useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.querySelector('.stats-section');
      if (statsSection && !countersStarted) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setCountersStarted(true);
          animateCounters();
        }
      }
    };

    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current).toString();
            setTimeout(updateCounter, 20);
          } else {
            counter.textContent = target.toString();
          }
        };
        
        updateCounter();
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [countersStarted]);

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hebrew-text">
            {heroImages[currentImageIndex].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed hebrew-text">
            {heroImages[currentImageIndex].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              תכננו את הטיול שלכם
            </button>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-secondary text-lg px-8 py-4"
            >
              צור קשר
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent mb-4 hebrew-text">
              למה לבחור בנו?
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto hebrew-text font-medium">
              אנחנו מתמחים בטיולים להודו עבור ישראלים ומספקים שירות אישי ומקצועי
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text text-blue-900">מדריכה דוברת עברית</h3>
              <p className="text-blue-700 hebrew-text leading-relaxed">מדריכה ישראלית מנוסה שמכירה את הודו כמו כף ידה</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text text-blue-900">טיולים מותאמים אישית</h3>
              <p className="text-blue-700 hebrew-text leading-relaxed">כל טיול מתוכנן במיוחד לפי הרצונות והתקציב שלכם</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text text-blue-900">ניסיון של שנים</h3>
              <p className="text-blue-700 hebrew-text leading-relaxed">מאות לקוחות מרוצים וניסיון רב בארגון טיולים להודו</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 hebrew-text text-blue-900">תמיכה 24/7</h3>
              <p className="text-blue-700 hebrew-text leading-relaxed">זמינות מלאה לאורך כל הטיול לכל שאלה או בעיה</p>
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent mb-4 hebrew-text">
              טיולים מאורגנים
            </h2>
            <p className="text-xl text-blue-700 hebrew-text font-medium">
              הצטרפו לטיולים הקבוצתיים המיוחדים שלנו
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kerala Tour */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <img 
                src="/Kerala.png" 
                alt="קרלה"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 hebrew-text">
                  שם הטיול: הודו בשלושה טעמים
                </h3>
                <p className="text-blue-700 leading-relaxed hebrew-text mb-6">
                  טיול שמתחיל בקצב המהיר של מומבאי, העיר הענקית והמרתקת שמציעה שילוב בלתי נגמר של המודרני והמסורתי. 
                  תיהנו מהרחובות הסואנים, מהשווקים הצבעוניים ומתרבות עשירה, ותבינו את מהות העיר שתמיד במרוץ קדימה.
                  לאחר מכן, תעברו לבנגלור, בירת הטכנולוגיה של הודו, מקום שבו היי-טק וחדשנות נפגשים עם קסם מקומי. 
                  כאן תרגישו את האווירה המיוחדת של העיר, המשלבת בין עתיד לבין מסורת, בין תעשייה לבין טבע.
                  החלק האחרון יוביל אתכם לקרלה – האזור הירוק, השקט והקסום של הודו.
                </p>
                <button 
                  onClick={() => onPageChange('west-south-tour')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  קראו עוד
                </button>
              </div>
            </div>

            {/* Kolkata Tour */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <img 
                src="/kolkata.png" 
                alt="קולקטה"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 hebrew-text">
                  שם הטיול: מהבירה הכלכלית לתרבותית – הודו בין קצוות
                </h3>
                <p className="text-blue-700 leading-relaxed hebrew-text mb-6">
                  הצטרפו למסע נדיר ממערב למזרח הודו – טיול צבעוני מסעיר שיטיל אור על שני עולמות שונים כל כך באותה מדינה. 
                  במומבאי, לב ההודו המודרנית – שווקים, קולנוע, גורדי שחקים ונשמה גדולה. משם נמשיך בטיסה ללב המזרח – 
                  מדינת מערב בנגל. נגיע לכולכתא, העיר שמכונה "עיר האושר": בירתה התרבותית של הודו.
                </p>
                <button 
                  onClick={() => onPageChange('west-east-tour')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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

      {/* Authentic Photos Gallery */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent mb-6 hebrew-text">
              תמונות אותנטיות
            </h2>
            <p className="text-xl text-blue-700 hebrew-text font-medium">
              גלריה של תמונות אמיתיות מהטיולים
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl cursor-pointer group transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <img 
                  src={`https://images.pexels.com/photos/${index % 2 === 0 ? '3581368' : '1007426'}/pexels-photo-${index % 2 === 0 ? '3581368' : '1007426'}.jpeg`}
                  alt={`תמונה ${index}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hebrew-text shadow-lg">
                    טיול בהודו
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-indigo-700 bg-clip-text text-transparent mb-4 hebrew-text">
              טיולים פופולריים
            </h2>
            <p className="text-xl text-blue-700 hebrew-text font-medium">
              הטיולים הכי מבוקשים שלנו
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div 
              className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              onClick={() => onPageChange('mumbai-private')}
            >
              <img 
                src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" 
                alt="מומבאי"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent"></div>
              <div className="absolute bottom-4 right-4 text-white">
                <h3 className="text-2xl font-bold hebrew-text shadow-lg">מומבאי - סיור פרטי</h3>
                <p className="text-sm hebrew-text shadow-lg">הבירה הכלכלית של הודו</p>
              </div>
            </div>

            <div 
              className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              onClick={() => onPageChange('bangalore-tours')}
            >
              <img 
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg" 
                alt="בנגלור"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent"></div>
              <div className="absolute bottom-4 right-4 text-white">
                <h3 className="text-2xl font-bold hebrew-text shadow-lg">בנגלור</h3>
                <p className="text-sm hebrew-text shadow-lg">בירת הטכנולוגיה</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-white to-green-600 text-white relative stats-section">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            <div>
              <div className="text-6xl font-bold text-white mb-2 counter" data-target="3">0</div>
              <p className="text-xl hebrew-text text-white">אזורים בהודו בהם מלכה חיה</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-2 counter" data-target="15">0</div>
              <p className="text-xl hebrew-text text-white">שנים שמלכה חיה בהודו</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-2 counter" data-target="261">0</div>
              <p className="text-xl hebrew-text text-white">נוסעים שקיבלו את עזרתה</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-800/30"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים להתחיל את ההרפתקה?
          </h2>
          <p className="text-xl mb-8 hebrew-text opacity-90">
            צרו קשר עוד היום ונתחיל לתכנן את הטיול של החלומות שלכם להודו
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              בואו נתכנן טיול
            </button>
            <button 
              onClick={() => onPageChange('organised-tours')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              טיולים מאורגנים
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;