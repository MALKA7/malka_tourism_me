import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Trees as Tree, Building, DollarSign, Globe, Award, Shield, Play } from 'lucide-react';

interface BangaloreToursPageProps {
  onPageChange: (page: string) => void;
}

const BangaloreToursPage: React.FC<BangaloreToursPageProps> = ({ onPageChange }) => {
  const [expandedSite, setExpandedSite] = useState<number | null>(null);

  const tourSites = [
    {
      name: 'ארמון טיפו סולטן',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'ארמון קיץ של טיפו סולטן עם אדריכלות הודו-איסלאמית מרהיבה',
      details: `ארמון טיפו סולטן הוא אחד מהאתרים ההיסטוריים החשובים ביותר בבנגלור. נבנה במאה ה-18 על ידי הסולטן טיפו, שליט מייסור, והוא מציג אדריכלות הודו-איסלאמית מרהיבה. הארמון בנוי מעץ טיק ומעוטר בציורי קיר יפהפיים ופסלים מפוארים. הביקור כאן מאפשר להכיר את ההיסטוריה העשירה של דרום הודו ואת סיפורו של אחד השליטים החשובים במאבק נגד הקולוניאליזם הבריטי.`
    },
    {
      name: 'גנים בוטניים לאל באג',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'גנים בוטניים היסטוריים עם מגוון עצים נדירים ובית זכוכית ויקטוריאני',
      details: `הגנים הבוטניים לאל באג הם אחד המקומות הירוקים והיפים ביותר בבנגלור. נוסדו ב-1760 על ידי חיידר עלי ובנו טיפו סולטן, והם משתרעים על פני 240 דונם. הגנים מכילים מגוון עצום של צמחים נדירים מרחבי העולם, כולל עצי בניאן עתיקים, פרחים טרופיים ובית זכוכית ויקטוריאני מרהיב. זהו מקום מושלם לטיול רגוע ולהכרת הטבע הטרופי של דרום הודו.`
    },
    {
      name: 'מקדש בול',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'מקדש הינדי עתיק המוקדש לשיווה עם אדריכלות דרוידית מרהיבה',
      details: `מקדש בול הוא אחד המקדשים העתיקים והחשובים ביותר בבנגלור. נבנה במאה ה-16 על ידי קמפה גאודה, מייסד בנגלור, והוא מוקדש לאל שיווה. המקדש מציג אדריכלות דרוידית מסורתית עם מגדל גבוה ופסלים מפוארים. המקדש פעיל עד היום ומושך אלפי מתפללים מדי יום. הביקור כאן מאפשר להכיר את הדת ההינדית ואת המסורות הדתיות של דרום הודו.`
    },
    {
      name: 'ארמון בנגלור',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'ארמון מפואר בסגנון טיודור עם חצרות יפהפיות וחדרי מלוכה',
      details: `ארמון בנגלור הוא ארמון מפואר שנבנה ב-1887 על ידי משפחת ודיאר, השליטים לשעבר של מייסור. הארמון בנוי בסגנון טיודור אנגלי עם השפעות הודיות ומציג אדריכלות מרהיבה. הארמון כולל חדרי מלוכה מפוארים, ציורי קיר יפהפיים, רהיטים עתיקים וגינות מטופחות. הביקור כאן מאפשר להכיר את אורח החיים של המלוכה ההודית ואת ההיסטוריה של בנגלור.`
    },
    {
      name: 'שוק KR מרקט',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'שוק צבעוני ותוסס עם פירות, פרחים ותבלינים מקומיים',
      details: `שוק KR מרקט הוא אחד השווקים הצבעוניים והתוססים ביותר בבנגלור. השוק פועל מאז 1928 ומציע מגוון עצום של מוצרים טריים - פירות טרופיים, ירקות, פרחים ארומטיים ותבלינים מקומיים. השוק הוא חוויה חושית מלאה עם ריחות, צבעים וקולות של הודו האמיתית. הביקור כאן מאפשר להכיר את התרבות המקומית ולקנות מוצרים אותנטיים במחירים הוגנים.`
    },
    {
      name: 'פארק קובון',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'פארק ירוק גדול במרכז העיר עם אגם ופעילויות פנאי',
      details: `פארק קובון הוא אחד הפארקים הגדולים והיפים ביותר בבנגלור, המשתרע על פני 300 דונם במרכז העיר. הפארק כולל אגם יפהפה, שבילי הליכה מטופחים, גינות פרחים צבעוניות ומגוון פעילויות פנאי. זהו מקום פופולרי בקרב המקומיים לפעילות ספורט, פיקניקים ורגעי שלווה. הפארק מציע נוף יפה של העיר ומהווה נקודת מנוחה מושלמת במהלך הסיור.`
    },
    {
      name: 'מקדש ISKCON',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'מקדש מודרני וצבעוני המוקדש לקרישנה עם אדריכלות מרהיבה',
      details: `מקדש ISKCON בנגלור הוא אחד המקדשים המודרניים והמרהיבים ביותר בעיר. נבנה על ידי תנועת הארי קרישנה והוא מוקדש לאל קרישנה. המקדש מציג אדריכלות מודרנית מרהיבה עם כיפות זהובות, עמודים מפוארים וגינות מטופחות. המקדש כולל גם מוזיאון, מסעדה צמחונית ומרכז תרבותי. הביקור כאן מאפשר להכיר את הדת ההינדית המודרנית ואת תנועת הארי קרישנה.`
    },
    {
      name: 'גנים הממשלתיים',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'גנים היסטוריים עם מוזיאון, ספרייה ואקווריום',
      details: `הגנים הממשלתיים של בנגלור הם מתחם תרבותי ובילוי מרכזי בעיר. הגנים נוסדו ב-1864 ומשתרעים על פני 300 דונם במרכז העיר. המתחם כולל גנים מטופחים, מוזיאון המדינה, ספרייה מרכזית, אקווריום ותיאטרון. זהו מקום פופולרי בקרב המשפחות המקומיות ומציע שילוב מושלם של טבע, תרבות וחינוך. הביקור כאן מאפשר להכיר את החיים התרבותיים של בנגלור.`
    }
  ];

  const tourInfo = [
    { icon: MapPin, label: 'התחלה', value: 'בנגלור' },
    { icon: MapPin, label: 'סיום', value: 'בנגלור' },
    { icon: Clock, label: 'משך', value: '8 שעות' },
    { icon: Users, label: 'סגנון סיור', value: 'פרטי, משותף' },
    { icon: Globe, label: 'שפה', value: 'עברית ואנגלית' },
    { icon: Users, label: 'גודל קבוצה', value: 'עד 10' },
    { icon: Calendar, label: 'סוג סיור', value: 'סיור עיר בוקר' },
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
    '🇮🇱 מדריכה ישראלית דוברת עברית',
    '🏛️ 15 שנות ניסיון בהדרכה בהודו',
    '🚗 רכב מזוגן ונהג כלולים בכל סיור',
    '⭐ מאות לקוחות מרוצים וביקורות מעולות',
    '🎯 סיורים מותאמים אישית לפי הרצונות שלכם',
    '📞 תמיכה ועזרה 24/7 לאורך כל הטיול',
    '🏆 הכרת המקומות הכי אותנטיים בבנגלור',
    '💝 חוויות בלתי נשכחות עם הבנה תרבותית עמוקה'
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
            alt="בנגלור - סיורי יום"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              בנגלור - סיורי יום פרטיים
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              גלו את "עיר הגנים" של הודו - בנגלור, בירת הטכנולוגיה עם ההיסטוריה העשירה. 
              סיורי יום מקיפים עם מדריכה ישראלית מקצועית
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              הזמינו סיור בבנגלור
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
            <span className="text-blue-600 font-bold">בנגלור - סיורי יום</span>
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
              אתרי הסיור בבנגלור
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              גלו את האתרים המרכזיים והמרתקים ביותר בעיר הגנים
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
              למה לבחור בסיור בבנגלור?
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              גלו את "עיר הגנים" של הודו עם מדריכה ישראלית מקצועית
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl mb-16 border border-blue-200">
            <div className="flex items-start">
              <div className="text-4xl ml-4">
                <Tree className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                  בנגלור, הידועה כ"עיר הגנים", היא בירת הטכנולוגיה של הודו ומציעה שילוב מרתק 
                  של מודרניות ומסורת. עם הפארקים הירוקים, הארמונות ההיסטוריים והתרבות התוססת.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                  <strong>מלכה מדריכה בבנגלור לאחר שחיה בעיר ובזמן שהיא עדיין כאן ומעודכנת על העיר.</strong> 
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
              סרטוני סיורים בבנגלור
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              צפו בסרטונים מסיורים קודמים בבנגלור עם מלכה
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/UucnPiiA7C8?start=107"
                  title="סיור בבנגלור עם מלכה - חלק 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">
                  סיור בבנגלור עם מלכה - חלק 1
                </h3>
                <p className="text-gray-600 hebrew-text">
                  צפו בסיור מקיף בבנגלור עם מלכה המדריכה הישראלית
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/xSoGgmTdpKA"
                  title="גלו את בנגלור עם מלכה - חלק 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">
                  גלו את בנגלור עם מלכה - חלק 2
                </h3>
                <p className="text-gray-600 hebrew-text">
                  המשך הסיור המרתק בעיר הגנים של הודו
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
            מוכנים לגלות את בנגלור?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            הזמינו עכשיו סיור יום מקיף בבנגלור עם מלכה - 
            המדריכה הישראלית שחיה בעיר
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

export default BangaloreToursPage;