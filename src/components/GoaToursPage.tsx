import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Waves, Sun, Globe, Award, Shield, Play } from 'lucide-react';

interface GoaToursPageProps {
  onPageChange: (page: string) => void;
}

const GoaToursPage: React.FC<GoaToursPageProps> = ({ onPageChange }) => {
  const [expandedSite, setExpandedSite] = useState<number | null>(null);

  const tourSites = [
    {
      name: 'חוף באגה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'חוף פופולרי עם מסעדות על החוף ופעילויות ימיות',
      details: `חוף באגה הוא אחד החופים הפופולריים ביותר בצפון גואה. החוף מציע שילוב מושלם של חול זהוב, מים כחולים צלולים ומסעדות מעולות על החוף. כאן תוכלו ליהנות מפעילויות ימיות מגוונות כמו גלישה, פרה-סיילינג וסקי מים. החוף מציע גם חיי לילה תוססים עם ברים ומועדונים על החוף. באגה מושלם למי שמחפש שילוב של רגיעה ובילוי.`
    },
    {
      name: 'חוף קלנגוט',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'החוף הכי מפורסם בגואה עם חיי לילה תוססים',
      details: `חוף קלנגוט הוא החוף הכי מפורסם ותוסס בגואה. החוף מציע חול רך וזהוב, גלים מושלמים לגלישה ושפע של פעילויות. כאן תמצאו מגוון רחב של מסעדות, ברים ומועדונים שפועלים עד השעות הקטנות. החוף מציע גם קניות במחירים טובים, עיסויים על החוף ופעילויות ספורט ימיות. קלנגוט הוא המקום המושלם למי שרוצה לחוות את האנרגיה הצעירה של גואה.`
    },
    {
      name: 'חוף אנג\'ונה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'חוף שקט ויפה עם שקיעות מרהיבות',
      details: `חוף אנג'ונה הוא אחד החופים השקטים והיפים ביותר בצפון גואה. החוף מציע אווירה רגועה ושלווה, מושלם למי שמחפש מנוחה ורגיעה. החוף מפורסם בשקיעות המרהיבות שלו, כאשר השמש שוקעת באופק הים הערבי. כאן תוכלו ליהנות מעיסויים על החוף, מסעדות דגים טריים ובתי קפה נעימים. אנג'ונה מושלם למי שרוצה לחוות את הצד השקט והרומנטי של גואה.`
    },
    {
      name: 'פנאג\'י - הבירה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'בירת גואה עם אדריכלות פורטוגזית מקסימה',
      details: `פנאג'י, בירת גואה, היא עיר קטנה וקסומה עם אדריכלות פורטוגזית מרהיבה. העיר מציגה שילוב ייחודי של תרבות הודית ופורטוגזית עם בתים צבעוניים, כנסיות עתיקות ורחובות מרוצפים. כאן תוכלו לבקר במוזיאונים, גלריות אמנות ושווקים מקומיים. העיר מציעה גם מסעדות מעולות עם מטבח גואני אותנטי ובתי קפה נעימים לאורך הנהר מנדובי.`
    },
    {
      name: 'כנסיית בום ג\'זוס',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'כנסייה היסטורית ואתר מורשת עולמית של אונסק"ו',
      details: `כנסיית בום ג'זוס היא אחת הכנסיות החשובות ביותר בגואה ואתר מורשת עולמית של אונסק"ו. הכנסייה נבנתה במאה ה-16 על ידי הפורטוגזים והיא מוקדשת לישו הטוב. הכנסייה מפורסמת בזכות גופתו של פרנסיס חאווייר, הקדוש הפטרון של גואה, השמורה בתיבה כסופה מפוארת. האדריכלות הבארוקית המרהיבה והאמנות הדתית הופכים את הביקור כאן לחוויה רוחנית ותרבותית מיוחדת.`
    },
    {
      name: 'שוק מפלם',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'שוק לילה צבעוני עם מוצרי יד ואוכל רחוב',
      details: `שוק מפלם הוא שוק הלילה הכי מפורסם בגואה, הפועל בימי שישי בלבד. השוק מציע מגוון עצום של מוצרי יד, תכשיטים, בגדים, תבלינים ומזכרות ייחודיות. כאן תוכלו לטעום מאוכל הרחוב הגואני המפורסם, לשמוע מוזיקה חיה ולחוות את האווירה הבוהמיינית של גואה. השוק הוא מקום מושלם לקניות במחירים טובים ולחוויה תרבותית אותנטית.`
    },
    {
      name: 'מפלי דודסגר',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'מפלים מרהיבים בעונת הגשמים (יוני-ספטמבר)',
      details: `מפלי דודסגר הם אחד הפלאים הטבעיים של גואה, במיוחד בעונת הגשמים. המפלים נמצאים במרחק של כשעה נסיעה מהחופים הראשיים ומציעים חוויה טבעית מרהיבה. המים צוללים מגובה של 310 מטר ויוצרים נוף עוצר נשימה. הביקור כאן כולל טיול קצר ביער הטרופי, שחייה בבריכות הטבעיות וצילומים מרהיבים. זהו מקום מושלם למי שרוצה לחוות את הטבע הפראי של גואה.`
    },
    {
      name: 'מקדש מנגש',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'מקדש הינדי עתיק עם פסלים מרהיבים',
      details: `מקדש מנגש הוא אחד המקדשים ההינדיים החשובים ביותר בגואה. המקדש מוקדש לאל גנש, אל החכמה והמזל הטוב, והוא מציג אדריכלות הינדית מסורתית עם פסלים מפוארים וחצרות יפהפיות. המקדש פעיל עד היום ומושך אלפי מתפללים, במיוחד בחגים הינדיים. הביקור כאן מאפשר להכיר את הדת ההינדית, המסורות המקומיות ולחוות את האווירה הרוחנית של גואה ההינדית.`
    }
  ];

  const tourInfo = [
    { icon: MapPin, label: 'התחלה', value: 'גואה' },
    { icon: MapPin, label: 'סיום', value: 'גואה' },
    { icon: Clock, label: 'משך', value: '8 שעות' },
    { icon: Users, label: 'סגנון סיור', value: 'פרטי, משותף' },
    { icon: Globe, label: 'שפה', value: 'עברית ואנגלית' },
    { icon: Users, label: 'גודל קבוצה', value: 'עד 10' },
    { icon: Calendar, label: 'סוג סיור', value: 'סיור חופים ותרבות' },
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
    '🏖️ הכרת החופים הכי יפים בגואה',
    '🇮🇱 מדריכה ישראלית דוברת עברית',
    '🏛️ ביקור באתרים היסטוריים ותרבותיים',
    '🚗 רכב מזוגן ונהג כלולים בכל סיור',
    '⭐ חוויות אותנטיות עם המקומיים',
    '📞 תמיכה ועזרה 24/7 לאורך כל הטיול',
    '🌊 פעילויות ימיות ואטרקציות טבע',
    '💝 חוויות בלתי נשכחות בפנינת החוף של הודו'
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
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
            src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg" 
            alt="גואה - סיורי יום"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              גואה - סיורי יום טרופיים
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              גלו את פנינת החוף של הודו - גואה, עם החופים הטרופיים, התרבות הפורטוגזית 
              והאווירה הרגועה. סיורי יום מותאמים לכל הטעמים
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              הזמינו סיור בגואה
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
            <span className="text-blue-600 font-bold">גואה - סיורי יום</span>
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
              אתרי הסיור בגואה
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              גלו את החופים הטרופיים והאתרים התרבותיים של גואה
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
                    {expandedSite === index ? 'הסתר פרטים' : 'קרא עוד'}
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
              למה לבחור בסיור בגואה?
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              גלו את פנינת החוף של הודו עם מדריכה ישראלית מקצועית
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl mb-16 border border-blue-200">
            <div className="flex items-start">
              <div className="text-4xl ml-4">
                <Waves className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                  גואה היא פנינת החוף של הודו עם חופים טרופיים מרהיבים, תרבות פורטוגזית ייחודית 
                  ואווירה רגועה. מהחופים הזהובים ועד לכנסיות ההיסטוריות.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                  <strong>מלכה מדריכה בגואה לאחר שביקרה במקום פעמים רבות ומכירה את האזור היטב.</strong> 
                  חוויה אותנטית עם הבנה עמוקה של התרבות המקומית והצרכים הישראליים.
                </p>
              </div>
            </div>
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
              סרטוני סיורים בגואה
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              צפו בסרטונים מסיורים קודמים בגואה עם מלכה
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/UucnPiiA7C8?start=107"
                  title="סיור בגואה עם מלכה - חלק 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">
                  סיור בגואה עם מלכה - חלק 1
                </h3>
                <p className="text-gray-600 hebrew-text">
                  צפו בסיור מקיף בגואה עם מלכה המדריכה הישראלית
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/xSoGgmTdpKA"
                  title="גלו את גואה עם מלכה - חלק 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">
                  גלו את גואה עם מלכה - חלק 2
                </h3>
                <p className="text-gray-600 hebrew-text">
                  המשך הסיור המרתק בפנינת החוף של הודו
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
            מוכנים לחוות את גואה?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            הזמינו עכשיו סיור יום בגואה עם מלכה - 
            חוויה טרופית בלתי נשכחת
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

export default GoaToursPage;