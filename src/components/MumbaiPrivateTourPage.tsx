import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Building, Waves, Mountain, Globe, Award, Shield, Play, ChevronDown, ChevronUp } from 'lucide-react';

interface MumbaiPrivateTourPageProps {
  onPageChange: (page: string) => void;
}

const MumbaiPrivateTourPage: React.FC<MumbaiPrivateTourPageProps> = ({ onPageChange }) => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const mumbaiPhotos = [
    {
      title: 'שער הכניסה להודו',
      description: 'האנדרטה המפורסמת ביותר במומבאי, שנבנתה לכבוד ביקור המלך ג\'ורג\' החמישי. מקום מושלם לתמונות זיכרון.',
      image: '/mumbai gateway.jpg'
    },
    {
      title: 'מלון טאג\' מהאל פאלאס',
      description: 'מלון היוקרה המפורסם של מומבאי, סמל של אלגנטיות ויוקרה. אחד המלונות הטובים בעולם.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מרין דרייב - המחרוזת של המלכה',
      description: 'הטיילת המפורסמת של מומבאי, המכונה "המחרוזת של המלכה". מקום מושלם לצפייה בשקיעה.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'חוף ג\'והו',
      description: 'החוף הפופולרי ביותר במומבאי, מקום מפגש של מקומיים ותיירים. מפורסם באוכל הרחוב הטעים.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'סלאם דהרבי',
      description: 'אחד השכונות העניות הגדולות בעולם, אך גם מקום של חיים ותוססות. סיור מרתק ומעורר השראה.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'תחנת רכבת ויקטוריה טרמינוס',
      description: 'תחנת הרכבת ההיסטורית והמרשימה ביותר במומבאי. אתר מורשת עולמי של אונסק"ו.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'שוק קרופורד',
      description: 'השוק הצבעוני והסואן של מומבאי. מקום מושלם לקניות ולחוויית התרבות המקומית.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מקדש סידהיווינאיאק',
      description: 'מקדש הינדי מפורסם המוקדש לאל גנש. מקום של תפילה ורוחניות בלב העיר הסואנת.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'גני הנגינג',
      description: 'הגנים התלויים המפורסמים של מומבאי, מקום שקט ויפה בלב העיר. נוף מדהים על הים.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מוזיאון הנסיך מויילס',
      description: 'מוזיאון אמנות ותרבות עשיר, המציג את ההיסטוריה והתרבות של מערב הודו.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'בית הכנסת קנסת אליהו',
      description: 'בית הכנסת הגדול והיפה ביותר במומבאי, מקום של קהילה יהודית עתיקה ופעילה.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מחוז הכותנה',
      description: 'האזור העסקי והפיננסי של מומבאי, מקום של גורדי שחקים ועסקים בינלאומיים.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'איי אלפנטה',
      description: 'מערות עתיקות עם פסלים הינדיים מרהיבים. אתר מורשת עולמי של אונסק"ו.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'שוק זאווארי בזאר',
      description: 'שוק התכשיטים המפורסם של מומבאי. מקום מושלם לקניית תכשיטים מסורתיים הודיים.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'גשר בנדרה-וורלי',
      description: 'הגשר המודרני והמרשים של מומבאי, סמל של הפיתוח והמודרניזציה של העיר.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'פארק שיווג\'י',
      description: 'הפארק הגדול והירוק של מומבאי, מקום מושלם למנוחה ולפיקניק בלב העיר.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מקדש מהלקשמי',
      description: 'מקדש הינדי יפהפה המוקדש לאלת העושר והשגשוג. מקום של ברכה ותפילה.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'רציף ששון',
      description: 'הרציף ההיסטורי של מומבאי, מקום של פעילות ימית ונוף יפה על המפרץ.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'שוק קולאבה קוזווי',
      description: 'שוק רחוב צבעוני ותוסס, מקום מושלם לקניות זולות וחוויה אותנטית.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מוזיאון ד"ר בהאו דאג\'י לאד',
      description: 'המוזיאון הוותיק ביותר במומבאי, המציג אוספים עשירים של אמנות ותרבות הודית.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'גן החיות של מומבאי',
      description: 'גן החיות הגדול והמגוון של מומבאי, מקום מושלם למשפחות ולאוהבי טבע.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מקדש בבולנאת',
      description: 'מקדש שיווה עתיק ומקודש, אחד המקדשים החשובים ביותר במומבאי.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'חוף ורסובה',
      description: 'חוף שקט ויפה בצפון מומבאי, מקום מושלם לבריחה מההמולה של העיר.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'פארק סנג\'אי גנדהי',
      description: 'פארק לאומי בלב מומבאי, מקום של טבע פראי ושקט בתוך העיר הגדולה.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'שוק לינקינג רוד',
      description: 'רחוב הקניות המפורסם של מומבאי, מקום של אופנה, מסעדות ובידור.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מקדש איסקון',
      description: 'מקדש הרה קרישנה המודרני והיפה, מקום של רוחניות ושלווה.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'חוף אקסה',
      description: 'חוף פראי ושקט בצפון מומבאי, מקום מושלם לשקיעות רומנטיות.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מוזיאון מני בהוון',
      description: 'מוזיאון מיניאטורות מרתק, המציג את ההיסטוריה של הודו בצורה ייחודית.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'גלובל ויפאסנה פגודה',
      description: 'פגודה בודהיסטית מרשימה, מקום של מדיטציה ושלווה רוחנית.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'שוק פלורה פאונטיין',
      description: 'שוק הפרחים הצבעוני של מומבאי, מקום של ריחות וצבעים מדהימים.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מקדש סידהי ווינאיאק',
      description: 'מקדש גנש מפורסם ומקודש, יעד עלייה לרגל חשוב עבור הינדים.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'נמל התעופה צ\'טרפטי שיווג\'י',
      description: 'נמל התעופה הבינלאומי של מומבאי, שער הכניסה לעיר ולהודו עבור מיליוני תיירים.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'רחוב מוחמד עלי',
      description: 'רחוב מסחרי תוסס בלב מומבאי, מקום של קניות, אוכל ותרבות מקומית.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מקדש מומבאדווי',
      description: 'מקדש הינדי עתיק המוקדש לאלת מומבאי, מקום של מסורת ואמונה עמוקה.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'פארק אובאי',
      description: 'פארק ירוק ושקט בלב מומבאי, מקום מושלם למנוחה ולפעילות ספורטיבית.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    }
  ];

  const tourOptions = [
    {
      title: 'סיור בוקר',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      startTime: '06:00',
      endTime: '12:00',
      transport: 'רכב פרטי מזוגן',
      guide: 'מדריך דובר עברית ואנגלית',
      highlights: ['שער הכניסה להודו', 'מרין דרייב', 'סלאם דהרבי', 'שוק קרופורד']
    },
    {
      title: 'סיור יום מלא',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      startTime: '09:00',
      endTime: '18:00',
      transport: 'רכב פרטי מזוגן',
      guide: 'מדריך דובר עברית ואנגלית',
      highlights: ['כל האתרים העיקריים', 'ארוחת צהריים', 'איי אלפנטא', 'קניות']
    },
    {
      title: 'סיור לילה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      startTime: '17:00',
      endTime: '23:00',
      transport: 'רכב פרטי מזוגן',
      guide: 'מדריך דובר עברית ואנגלית',
      highlights: ['מרין דרייב בלילה', 'שווקי לילה', 'מסעדות מקומיות', 'חיי לילה']
    }
  ];

  const vehicles = [
    {
      name: 'אוטובוס',
      image: '/transport bus.png',
      capacity: '25-35 נוסעים',
      aircon: 'מזגן מלא',
      driver: 'נהג מקצועי',
      suitable: 'קבוצות גדולות'
    },
    {
      name: 'טויוטה אינובה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      capacity: '6-7 נוסעים',
      aircon: 'מזגן מלא',
      driver: 'נהג מקצועי',
      suitable: 'משפחות קטנות'
    },
    {
      name: 'סוויפט דזיירה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      capacity: '4 נוסעים',
      aircon: 'מזגן מלא',
      driver: 'נהג מקצועי',
      suitable: 'זוגות'
    }
  ];

  const testimonials = [
    {
      name: 'דוד ושרה כהן',
      location: 'תל אביב',
      rating: 5,
      text: 'הסיור הפרטי במומבאי עם מלכה היה פשוט מדהים! ראינו את כל האתרים החשובים והמדריכה הייתה מקצועית ומעניינת. בהחלט נחזור!'
    },
    {
      name: 'משפחת לוי',
      location: 'חיפה',
      rating: 5,
      text: 'חוויה בלתי נשכחת! הילדים נהנו מכל רגע והמדריכה דיברה עברית מושלמת. הרכב היה נוח והנהג מקצועי. ממליצים בחום!'
    },
    {
      name: 'אבי ומירי גולן',
      location: 'ירושלים',
      rating: 5,
      text: 'הסיור הכי טוב שעשינו בהודו! מלכה הראתה לנו את מומבאי האמיתית - לא רק האתרים התיירותיים. שירות מעולה!'
    },
    {
      name: 'יוסי אברהם',
      location: 'באר שבע',
      rating: 5,
      text: 'מדריכה מקצועית ברמה הכי גבוהה! הסיור היה מאורגן בצורה מושלמת והתמורה לכסף מעולה. בהחלט שווה!'
    },
    {
      name: 'משפחת רוזן',
      location: 'נתניה',
      rating: 5,
      text: 'הסיור הפרטי אפשר לנו לראות את מומבאי בקצב שלנו. המדריכה הייתה סבלנית ומקצועית. חוויה מומלצת לכל המשפחה!'
    }
  ];

  const faqItems = [
    {
      question: 'כמה זמן אורך הסיור הפרטי במומבאי?',
      answer: 'הסיור הפרטי יכול להיות בין 4 שעות (חצי יום) ל-12 שעות (יום מלא). אנחנו מתאימים את משך הסיור לפי הרצונות והצרכים שלכם.'
    },
    {
      question: 'האם המדריכה דוברת עברית?',
      answer: 'כן! מלכה היא ישראלית שחיה בהודו מאז 2010 ומדברת עברית שוטפת. היא גם דוברת אנגלית והינדית ברמה גבוהה.'
    },
    {
      question: 'מה כלול במחיר הסיור?',
      answer: 'במחיר כלולים: רכב פרטי מזוגן עם נהג, מדריכה בעברית, כניסות לאתרים, מים וחטיפים קלים. ארוחות אינן כלולות אלא אם כן מוזמנות מראש.'
    },
    {
      question: 'איך מזמינים את הסיור?',
      answer: 'ניתן להזמין דרך WhatsApp, טלפון או אימייל. מומלץ להזמין לפחות יום מראש, במיוחד בעונת השיא (נובמבר-מרץ).'
    },
    {
      question: 'האם אפשר לשנות את מסלול הסיור?',
      answer: 'בהחלט! זה הקסם של הסיור הפרטי - אנחנו מתאימים את המסלול לפי העניינים והרצונות שלכם. ניתן לשנות גם במהלך הסיור.'
    },
    {
      question: 'מה המחיר של הסיור הפרטי?',
      answer: 'המחיר תלוי במשך הסיור, מספר המשתתפים וסוג הרכב. סיור חצי יום מתחיל מ-$80 לאדם, יום מלא מ-$150 לאדם.'
    },
    {
      question: 'האם הסיור מתאים לילדים?',
      answer: 'כן! הסיור מתאים מאוד למשפחות עם ילדים. אנחנו מתאימים את הקצב והאתרים לגיל הילדים ודואגים שכולם ייהנו.'
    },
    {
      question: 'מה קורה אם יורד גשם?',
      answer: 'הסיור ממשיך גם בגשם! יש לנו רכבים מזוגנים ואנחנו מתאימים את המסלול למקומות מקורים. בגשם חזק מאוד ניתן לדחות.'
    },
    {
      question: 'האם אפשר לעשות קניות במהלך הסיור?',
      answer: 'בהחלט! אנחנו יכולים לכלול עצירות קניות במסלול. מלכה מכירה את המקומות הטובים ביותר לקניות במחירים הוגנים.'
    },
    {
      question: 'איך מגיעים לנקודת המפגש?',
      answer: 'אנחנו יכולים לאסוף אתכם מהמלון, מנמל התעופה או מכל מקום אחר במומבאי. השירות כלול במחיר הסיור.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/mumbai gateway.jpg" 
            alt="סיורי יום - מומבאי טיול פרטית"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              סיורי יום - מומבאי טיול פרטית
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              גלו את קסמי מומבאי עם מדריכה ישראלית מקצועית בסיור פרטי מותאם אישית
            </p>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            הטיול המבוקש והאהוב ביותר
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            מאות תיירים ישראלים בוחרים בסיור הפרטי שלנו במומבאי כל שנה
          </p>
          <button 
            onClick={() => onPageChange('contact')}
            className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 px-12 py-6 rounded-lg text-2xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
          >
            צור קשר
          </button>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              גלריית תמונות ממומבאי
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              35 האתרים המרתקים ביותר שתבקרו בהם בסיור הפרטי
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {mumbaiPhotos.map((photo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hebrew-text">{photo.title}</h3>
                  <p className="text-gray-600 hebrew-text text-sm leading-relaxed">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Selection Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              בחר סיור במומבאי
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              שלושה סוגי סיורים פרטיים לבחירתכם
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourOptions.map((tour, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">{tour.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 ml-3" />
                      <span className="hebrew-text">{tour.startTime} - {tour.endTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Car className="w-5 h-5 text-green-600 ml-3" />
                      <span className="hebrew-text">{tour.transport}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-purple-600 ml-3" />
                      <span className="hebrew-text">{tour.guide}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-2 hebrew-text">עיקרי הסיור:</h4>
                    <ul className="space-y-1">
                      {tour.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                          <span className="hebrew-text text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => onPageChange('contact')}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    בחר סיור זה
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              צור קשר לפרטים
            </button>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              הסעות במומבאי
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              בחרו את הרכב המתאים לקבוצה שלכם
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <img 
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">{vehicle.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-blue-600 ml-3" />
                      <span className="hebrew-text">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="w-5 h-5 text-green-600 ml-3" />
                      <span className="hebrew-text">{vehicle.aircon}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-purple-600 ml-3" />
                      <span className="hebrew-text">{vehicle.driver}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-600 ml-3" />
                      <span className="hebrew-text">מתאים ל{vehicle.suitable}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => onPageChange('contact')}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    בחר רכב זה
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              צור קשר לפרטים
            </button>
          </div>
        </div>
      </section>

      {/* Multimedia Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              סרטונים ממומבאי
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              קבלו טעימה מהחוויה שמחכה לכם
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg"
                  alt="סרטון מומבאי 1"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold hebrew-text">סיור במומבאי - חלק 1</h3>
                <p className="text-gray-600 hebrew-text text-sm">שער הכניסה להודו ומרין דרייב</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg"
                  alt="סרטון מומבאי 2"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold hebrew-text">סיור במומבאי - חלק 2</h3>
                <p className="text-gray-600 hebrew-text text-sm">סלאם דהרבי ושווקים מקומיים</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg"
                  alt="סרטון מומבאי 3"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold hebrew-text">סיור במומבאי - חלק 3</h3>
                <p className="text-gray-600 hebrew-text text-sm">איי אלפנטא ואתרים היסטוריים</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 hebrew-text">
              מה אומרים הלקוחות שלנו
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center ml-3">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 hebrew-text">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm hebrew-text">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 hebrew-text leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              צור קשר לפרטים
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              שאלות ותשובות
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              כל מה שרציתם לדעת על הסיור הפרטי במומבאי
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-right p-6 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer flex justify-between items-center"
                >
                  <span className="font-bold text-gray-900 hebrew-text">{item.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="p-6 bg-white border-t border-gray-200">
                    <p className="text-gray-700 hebrew-text leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים לחוות את מומבאי?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            הזמינו עכשיו את הסיור הפרטי שלכם במומבאי עם מלכה - המדריכה הישראלית המנוסה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              הזמינו עכשיו
            </button>
            <a 
              href="https://wa.me/919980601979"
              className="bg-yellow-500 text-green-900 hover:bg-yellow-400 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
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

export default MumbaiPrivateTourPage;