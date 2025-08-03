import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Anchor, Fish, Globe, Award, Shield, Play } from 'lucide-react';

interface KochiToursPageProps {
  onPageChange: (page: string) => void;
}

const KochiToursPage: React.FC<KochiToursPageProps> = ({ onPageChange }) => {
  const [expandedSite, setExpandedSite] = useState<number | null>(null);

  const tourSites = [
    {
      name: 'רשתות דיג סיניות',
      image: '/kerala boat.jpg',
      description: 'רשתות דיג עתיקות מהתקופה הסינית - סמל העיר קוצ\'י',
      details: `רשתות הדיג הסיניות הן הסמל המפורסם ביותר של קוצ'י. רשתות אלו הובאו לכאן על ידי סוחרים סינים במאה ה-14 והן עדיין בשימוש היום. הרשתות פועלות על עקרון מנוף ומאפשרות לדייגים לתפוס דגים בצורה יעילה. הביקור כאן מאפשר לראות את הדייגים בפעולה, להכיר את שיטות הדיג המסורתיות ולצלם את אחד הנופים הכי מפורסמים בהודו. השקיעה כאן היא מרהיבה במיוחד.`
    },
    {
      name: 'ארמון מטנצ\'רי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'ארמון היסטורי עם ציורי קיר מרהיבים ואוסף חפצי אמנות',
      details: `ארמון מטנצ'רי הוא ארמון היסטורי מרהיב שנבנה במאה ה-16 על ידי הפורטוגזים ושופץ על ידי טיפו סולטן. הארמון מציג אדריכלות קרלית מסורתית עם השפעות פורטוגזיות והולנדיות. הארמון מפורסם בציורי הקיר המרהיבים שלו המתארים סצנות מהמהבהרטה והרמיאנה. כיום הארמון משמש כמוזיאון ומציג אוסף עשיר של כלי נשק עתיקים, ציורים ופסלים. הביקור כאן מאפשר להכיר את ההיסטוריה המלכותית של קרלה.`
    },
    {
      name: 'בית כנסת פרדסי',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'בית הכנסת הפעיל הכי עתיק בחבר העמים הבריטי',
      details: `בית הכנסת הפרדסי בקוצ'י הוא בית הכנסת הפעיל הכי עתיק בחבר העמים הבריטי, שנבנה ב-1568. בית הכנסת משרת את הקהילה היהודית המקומית שהגיעה לכאן לפני מאות שנים. הבניין מציג אדריכלות ייחודית עם רצפות קרמיקה סינית מרהיבות, נברשות בלגיות עתיקות וארון קודש מפואר. בית הכנסת מכיל גם מוזיאון קטן עם חפצים יהודיים היסטוריים. הביקור כאן מאפשר להכיר את ההיסטוריה היהודית בהודו ואת הקהילה הקטנה אך הפעילה.`
    },
    {
      name: 'כנסיית סנט פרנסיס',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'הכנסייה האירופית הכי עתיקה בהודו',
      details: `כנסיית סנט פרנסיס היא הכנסייה האירופית הכי עתיקה בהודו, שנבנתה ב-1503 על ידי הפורטוגזים. הכנסייה מפורסמת בזכות העובדה שוואסקו דה גאמה, הימאי הפורטוגזי המפורסם, נקבר כאן לראשונה לפני שגופתו הועברה לפורטוגל. הכנסייה מציגה אדריכלות קולוניאלית פשוטה אך מרשימה ומכילה לוחות זיכרון היסטוריים. הביקור כאן מאפשר להכיר את ההיסטוריה הקולוניאלית של הודו ואת השפעת האירופים על התרבות המקומית.`
    },
    {
      name: 'שוק התבלינים',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'שוק ארומטי עם תבלינים, תה וקפה מקומיים',
      details: `שוק התבלינים של קוצ'י הוא אחד השווקים הארומטיים והצבעוניים ביותר בהודו. השוק פועל מאז המאה ה-14 ומציע מגוון עצום של תבלינים טריים, תה, קפה, אגוזים ופירות יבשים. כאן תוכלו למצוא את התבלינים הכי איכותיים בהודו במחירים הוגנים. השוק הוא חוויה חושית מלאה עם ריחות מדהימים וצבעים עזים. הסוחרים המקומיים ישמחו להסביר על התבלינים השונים ועל השימושים שלהם במטבח ההודי.`
    },
    {
      name: 'מוזיאון הפולקלור של קרלה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'מוזיאון עם אוסף עשיר של אמנות ותרבות קרלה',
      details: `מוזיאון הפולקלור של קרלה מציג את התרבות העשירה והמגוונת של מדינת קרלה. המוזיאון כולל אוסף מרהיב של תלבושות מסורתיות, כלי נגינה עתיקים, פסלים דתיים, ציורים מקומיים וחפצי יומיום מהעבר. המוזיאון מציג גם הדגמות של ריקודים מסורתיים כמו קתקלי ומוהיניאטם. הביקור כאן מאפשר להכיר לעומק את התרבות הקרלית, המסורות המקומיות ואת האמנות המסורתית של דרום הודו.`
    },
    {
      name: 'איי בולגטי',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'אי ירוק עם מלונות יוקרה ונופים מרהיבים',
      details: `איי בולגטי הוא אי קטן וירוק הממוקם במרחק של 10 דקות שייט מקוצ'י. האי מציע נופים מרהיבים של תעלות המים, יערות קוקוס ושקיעות עוצרות נשימה. האי מכיל מלונות יוקרה, ספא מסורתי ומסעדות מעולות. כאן תוכלו ליהנות משייט רגוע בתעלות, טיול ביער הקוקוס וחוויה של שלווה מוחלטת. האי מושלם למי שרוצה לחוות את הצד השקט והטבעי של קרלה.`
    },
    {
      name: 'פורט קוצ\'י',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'העיר העתיקה עם רחובות מרוצפים ובתים קולוניאליים',
      details: `פורט קוצ'י היא העיר העתיקה והמקסימה של קוצ'י, עם רחובות מרוצפים צרים ובתים קולוניאליים צבעוניים. האזור מציג שילוב ייחודי של אדריכלות פורטוגזית, הולנדית ובריטית עם השפעות הודיות. כאן תמצאו גלריות אמנות, בתי קפה נעימים, חנויות עתיקות ומסעדות אותנטיות. הטיול ברגל ברחובות פורט קוצ'י הוא כמו מסע בזמן, כאשר כל פינה מספרת סיפור היסטורי מרתק על המפגש בין תרבויות.`
    }
  ];

  const tourInfo = [
    { icon: MapPin, label: 'התחלה', value: 'קוצ\'י' },
    { icon: MapPin, label: 'סיום', value: 'קוצ\'י' },
    { icon: Clock, label: 'משך', value: '8 שעות' },
    { icon: Users, label: 'סגנון סיור', value: 'פרטי, משותף' },
    { icon: Globe, label: 'שפה', value: 'עברית ואנגלית' },
    { icon: Users, label: 'גודל קבוצה', value: 'עד 10' },
    { icon: Calendar, label: 'סוג סיור', value: 'סיור היסטורי ותרבותי' },
    { icon: Star, label: 'רמת קושי', value: 'נמוכה' }
  ];

  const keyFeatures = [
    {
      title: 'סיורים פרטיים',
      description: 'רכב פרטי עם נהג, איסוף והחזרה למלון',
      icon: Car
    },
    {
      title: 'סיורים משותפים',
      description: 'המשתתף הראשון קובע את מסלול הסיור',
      icon: Users
    },
    {
      title: 'מדריכה מקצועית',
      description: 'הדרכה בעברית עם מלכה - המדריכה הישראלית',
      icon: Award
    },
    {
      title: 'תחבורה נוחה',
      description: 'רכב מזוגן עם נהג מקצועי למשך 7-8 שעות',
      icon: Shield
    }
  ];

  const whyChooseUs = [
    '⛵ הכרת רשתות הדיג הסיניות המפורסמות',
    '🇮🇱 מדריכה ישראלית דוברת עברית',
    '🏛️ ביקור באתרים היסטוריים ייחודיים',
    '🚗 רכב מזוגן ונהג כלולים בכל סיור',
    '⭐ חוויות אותנטיות עם הדייגים המקומיים',
    '📞 תמיכה ועזרה 24/7 לאורך כל הטיול',
    '🌊 שייט בתעלות המים של קרלה',
    '💝 חוויות בלתי נשכחות במלכת הים הערבי'
  ];

  const galleryImages = [
    '/kerala boat.jpg',
    'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
    'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
    'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
    'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
    'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
    'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
    'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
  ];

  const vehicles = [
    {
      name: 'רכב פרטי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      passengers: '1-2',
      description: 'רכב פרטי נוח ומזוגן עם נהג מקצועי'
    },
    {
      name: 'טויוטה אינובה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      passengers: '3-6',
      description: 'רכב משפחתי נוח עם מקום לכל המשפחה'
    },
    {
      name: 'טמפו טרוולר',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      passengers: '7-12',
      description: 'רכב גדול לקבוצות עם נוחות מקסימלית'
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/kerala boat.jpg" 
            alt="קוצ'י - סיורי יום"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              קוצ'י - סיורי יום היסטוריים
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              גלו את "מלכת הים הערבי" - קוצ'י, עיר הנמל ההיסטורית של קרלה. 
              שילוב מרתק של תרבויות עם נופים מרהיבים
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              הזמינו סיור בקוצ'י
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
            <button onClick={() => onPageChange('day-tours')} className="breadcrumb-item">סיורי יום</button>
            <span className="breadcrumb-separator">←</span>
            <span className="text-blue-600 font-bold">קוצ'י - סיורי יום</span>
          </div>
        </div>
      </div>

      {/* Tour Information Panel */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 hebrew-text">פרטי הסיור</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tourInfo.map((info, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <info.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600 hebrew-text font-medium">{info.label}</div>
                <div className="text-lg font-bold text-gray-900 hebrew-text">{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מה מייחד את הסיורים שלנו?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 hebrew-text">{feature.title}</h3>
                <p className="text-gray-600 hebrew-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Sites Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              אתרי הסיור בקוצ'י
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              גלו את האתרים ההיסטוריים והתרבותיים של מלכת הים הערבי
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourSites.map((site, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={site.image}
                  alt={site.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">{site.name}</h3>
                  <p className="text-gray-600 hebrew-text mb-4">{site.description}</p>
                  
                  {expandedSite === index && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-gray-700 hebrew-text leading-relaxed">{site.details}</p>
                    </div>
                  )}
                  
                  <button
                    onClick={() => setExpandedSite(expandedSite === index ? null : index)}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors hebrew-text"
                  >
                    {expandedSite === index ? 'הסתר פרטים' : 'הצג פרטים'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              למה לבחור בסיור בקוצ'י?
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              גלו את "מלכת הים הערבי" עם מדריכה ישראלית מקצועית
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl mb-16 border border-blue-200">
            <div className="flex items-start">
              <div className="text-4xl ml-4">
                <Anchor className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                  קוצ'י, הידועה כ"מלכת הים הערבי", היא עיר נמל היסטורית עם תרבות עשירה 
                  ואתרים מרתקים. מרשתות הדיג הסיניות ועד לכנסיות עתיקות.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                  <strong>מלכה מדריכה בקוצ'י לאחר שביקרה במקום פעמים רבות ומכירה את האזור היטב.</strong> 
                  חוויה אותנטית עם הבנה עמוקה של התרבות המקומית והצרכים הישראליים.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-green-600 ml-3 flex-shrink-0" />
                <span className="text-gray-800 hebrew-text">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              סרטוני סיורים בקוצ'י
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              צפו בסרטונים מסיורים קודמים בקוצ'י עם מלכה
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/UucnPiiA7C8?start=107"
                  title="סיור בקוצ'י עם מלכה - חלק 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">
                  סיור בקוצ'י עם מלכה - חלק 1
                </h3>
                <p className="text-gray-600 hebrew-text">
                  צפו בסיור מקיף בקוצ'י עם מלכה המדריכה הישראלית
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/xSoGgmTdpKA"
                  title="גלו את קוצ'י עם מלכה - חלק 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">
                  גלו את קוצ'י עם מלכה - חלק 2
                </h3>
                <p className="text-gray-600 hebrew-text">
                  המשך הסיור המרתק במלכת הים הערבי
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים לגלות את קוצ'י?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            הזמינו עכשיו סיור יום בקוצ'י עם מלכה - 
            חוויה היסטורית ותרבותית מרתקת
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              הזמינו עכשיו
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
    </div>
  );
};

export default KochiToursPage;