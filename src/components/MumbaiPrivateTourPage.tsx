import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Building, Waves, Mountain, Globe, Award, Shield, Play, ChevronDown, ChevronUp } from 'lucide-react';

interface MumbaiPrivateTourPageProps {
  onPageChange: (page: string) => void;
}

const MumbaiPrivateTourPage: React.FC<MumbaiPrivateTourPageProps> = ({ onPageChange }) => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const mumbaiPhotos = [
    {
      title: 'מכבסה',
      description: 'המכבסה הפתוחה הגדולה בעולם, בה מאות כובסים עובדים בשיטות מסורתיות. המקום הפך לאתר תיירותי ייחודי המדגים את חיי היום-יום של מומבאי.',
      image: '/mumbai gateway.jpg'
    },
    {
      title: 'מקדש מהלקשמי',
      description: 'אחד המקדשים הפופולריים ביותר בעיר, המוקדש לאלה מהלקשמי. מושך אליו המונים בעיקר בתקופת הפסטיבלים ההינדואיים.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מסגד חאג\'י עלי',
      description: 'מסגד ציורי הבנוי בלב הים, אליו מגיעים בהליכה על סוללה. מקום עלייה לרגל ומבנה איקוני של מומבאי.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'פארק קמלה נרו וגנים תלויים',
      description: 'גנים יפים על גבעה עם נוף פנורמי אל העיר ומפרץ מומבאי. מקום פופולרי לטיול ולמנוחה.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מוזיאון של גנדי',
      description: 'מוזיאון המוקדש למהטמה גנדי, מציג את חייו ופועלו ההיסטורי. כולל מכתבים, תמונות וחפצים אישיים.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'שכונה פרסית בדאדר',
      description: 'קהילה פרסית ותיקה במרכז העיר. מדגימה את הרב-תרבותיות הייחודית של מומבאי.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'שליחי ארוחת צהריים',
      description: 'רשת שליחים אגדית שמעבירה מדי יום מאות אלפי ארוחות לעובדים בעיר. נחשבת לפלא לוגיסטי עולמי.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'שער הכניסה להודו',
      description: 'מבנה מונומנטלי על קו החוף, סמל היסטורי של העיר. דרכו נכנסו הבריטים והיום הוא אתר חובה לתיירים.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'ספריית דיוויד ששון',
      description: 'ספרייה היסטורית שנבנתה על ידי הסוחר היהודי דיוויד ששון. משמשת עד היום מרכז תרבותי חשוב.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'רציפי ששון',
      description: 'אזור נמל מסחרי שהוקם במימון משפחת ששון. שימש מרכז מסחר חשוב בתקופת הקולוניאליזם.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'אזור האורות האדומים',
      description: 'אחד מרובעי הזנות הגדולים והוותיקים בהודו. משקף צדדים חברתיים מורכבים של מומבאי.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'שוק קלבדבי',
      description: 'שוק צבעוני ותוסס המציע בגדים, תכשיטים ומוצרי פולחן. מקום מעניין להכיר את חיי הרחוב של מומבאי.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מוזיאון הפרסים',
      description: 'מוקדש להיסטוריה ולתרבות של הקהילה הפרסית בעיר. מדגים את תרומתה לפיתוח כלכלי וחברתי.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מוזיאון הנסיך מווילס',
      description: 'אחד המוזיאונים הגדולים בהודו. כולל אוספי אמנות, פסלים ועתיקות.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'פארק סנג\'י גנדי ומערות קנרי',
      description: 'שמורת טבע גדולה עם גן חיות, וגם מערות חצובות בנות אלפי שנים. אתר שמחבר בין טבע להיסטוריה.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מקדש איסקון',
      description: 'מקדש מודרני לתנועת ההרקרישנה. מבוקש בקרב תיירים ומקומיים כאחד.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מוזיאון אלברט וויקטוריה',
      description: 'מוזיאון לאומנויות שימושיות והיסטוריה של מומבאי. ידוע באוספים ייחודיים ומוצגים מרהיבים.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'ארוחה בבית משפחה בהורי',
      description: 'חוויה קולינרית אותנטית של קהילת הבהורים. מאפשרת להכיר מקרוב תרבות ואירוח מקומי.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מלון טאג\' מהאל פאלאס',
      description: 'מלון מפואר ואייקוני ליד שער הודו. סמל של יוקרה והיסטוריה בעיר.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'תחנת ויקטוריה',
      description: 'תחנת רכבת מונומנטלית בסגנון גותי ויקטוריאני. אתר מורשת עולמית של אונסק"ו.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'שוק קרופורד',
      description: 'שוק סיטונאי ותיק שבו נמכרים פירות, ירקות, תבלינים ובדים. מרכז מסחר חי ותוסס.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מקדש מומבא דוי',
      description: 'מקדש המוקדש לאלת מומבא, שעל שמה נקראת העיר מומבאי. אתר דתי חשוב במיוחד לתושבים מקומיים.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'כפר דייגים קולי',
      description: 'הכפרים העתיקים של קהילת הקולי, דייגים המקוריים של העיר. מציגים אורח חיים מסורתי בלב הכרך.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'בית כנסת אליהו',
      description: 'אחד מבתי הכנסת המפורסמים של יהדות מומבאי. מעיד על נוכחות קהילה יהודית בעיר.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'שכונת סלאם דהרבי',
      description: 'השכונה הצפופה ביותר באסיה, המשלבת עוני עם יזמות מרשימה. מפורסמת מסרטים ותיירות חברתית.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'חוף צ\'ופטי',
      description: 'חוף פופולרי לבילוי ערב, טיולים וחגיגות פסטיבלים. מרכזי במיוחד בחג הגנש צ\'טורטי.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'אי אלפנטה',
      description: 'אי סמוך למומבאי עם מערות חצובות מהמאה ה-5. אתר מורשת עולמית של אונסק"ו.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'גלריה לאמנויות',
      description: 'גלריה ידועה המציגה אמנות מודרנית ועכשווית. מקום מפגש לאמנים ולמבקרים.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'שוק הגנבים',
      description: 'שוק פשפשים מפורסם שבו ניתן למצוא עתיקות, חפצים ישנים ופריטים ייחודיים.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'גן החיות',
      description: 'גן החיות המרכזי של העיר. משלב שמירת טבע עם בילוי למשפחות.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'פלנטריום נרו',
      description: 'מרכז אסטרונומיה מודרני המוקדש לג\'ווהרלל נרו. פופולרי בקרב ילדים ומבוגרים.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'קידזניה לילדים',
      description: 'מתחם חווייתי שבו ילדים מתנסים בעבודות ומקצועות שונים. מציע חינוך דרך משחק.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מקדש סידיוינייקה',
      description: 'מקדש פופולרי לאל גנש, אליו מגיעים מדי יום אלפי מתפללים. נחשב למקום קדוש במיוחד.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מרוץ סוסים במהלקשמי',
      description: 'מרוצי סוסים ידועים הנערכים במרכז העיר. אירוע חברתי ובידורי חשוב.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'תופעת סריסים הודים',
      description: 'קהילת היג\'רות, בעלת נוכחות תרבותית וחברתית בעיר. מהווה חלק בלתי נפרד מהחברה ההודית.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'סיור ברכבת מקומית',
      description: 'חוויה עוצמתית להכיר את חיי היום-יום של מיליוני נוסעים במומבאי. נחשבת ללב הפועם של העיר.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    }
  ];

  const tourOptions = [
    {
      title: 'סיור בוקר',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      startTime: '06:00',
      endTime: '14:00',
      transport: 'רכב ממוזג',
      guide: 'מדריך דובר עברית ואנגלית',
      highlights: ['רציפי ששון ושוק הפרחים בדאדר', 'נסיעה ברכבת']
    },
    {
      title: 'סיור יום',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      startTime: '08:00',
      endTime: '16:00',
      transport: 'רכב ממוזג',
      guide: 'מדריך דובר עברית ואנגלית',
      highlights: ['שכונת סלאם', 'שכונה פרסית', 'שליחי מזון', 'מכבסה וסיור ברכבת']
    },
    {
      title: 'סיור לילה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      startTime: '11:00',
      endTime: '19:00',
      transport: 'רכב ממוזג',
      guide: 'מדריך דובר עברית ואנגלית',
      highlights: ['תחנת ויקטוריה', 'בניין העיריה', 'אזור האורות האדומים', 'סיור ברכבת']
    },
    {
      title: 'טיול מותאם אישית',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      startTime: 'בהתאם ללוח זמנים שלך',
      endTime: '',
      transport: 'רכב ממוזג',
      guide: 'מדריך דובר עברית ואנגלית',
      highlights: ['מותאם לבחירתך מרשימת אתרים']
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
              אתרים פופולריים במומבאי
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              אין אפשרות לראות את כל האתרים ביום אחד
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
              סוגי סיורים פרטיים לבחירתכם
            </p>
            <p className="text-lg text-gray-700 hebrew-text mt-4 max-w-4xl mx-auto leading-relaxed">
              כל הסיורים שלנו פתוחים למשתתפים נוספים – וככל שמצטרפים יותר משתתפים, המחיר לכל אחד יורד. 
              אם אתם מעוניינים בחוויה פרטית ואינטימית, ניתן לשריין את הסיור רק עבורכם בתוספת תשלום.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      <span className="hebrew-text">{tour.endTime ? `${tour.startTime} - ${tour.endTime}` : tour.startTime}</span>
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