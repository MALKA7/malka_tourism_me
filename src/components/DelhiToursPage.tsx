import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Building, Waves, Mountain, Globe, Award, Shield, Play, ChevronDown, ChevronUp } from 'lucide-react';

interface DelhiToursPageProps {
  onPageChange: (page: string) => void;
}

const DelhiToursPage: React.FC<DelhiToursPageProps> = ({ onPageChange }) => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const delhiPhotos = [
    {
      title: 'המצודה האדומה',
      description: 'מבנה מודרני בצורת פרח לוטוס הפתוח לכל הדתות. האדריכלות המרשימה והאווירה השקטה הופכות אותו לאחד האתרים המבוקרים ביותר בעיר.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'קבר הומאיון',
      description: 'מונומנט מונגולי מפואר מהמאה ה-16, ששימש השראה לבניית הטאג\' מהאל. הגנים המסוגננים סביבו מוסיפים שלווה מיוחדת לאתר.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'באר מדרגות',
      description: 'בארות מדרגות עתיקות כמו אגרסן קי באולי מספרות על הנדסה מופלאה מהעבר. המקום מעניק הצצה להיסטוריה ולחיי היומיום של תושבי דלהי הקדומה.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מטרו דלהי',
      description: 'אחת ממערכות התחבורה הנקיות והמתקדמות בהודו. הנסיעה במטרו היא גם חוויה מקומית וגם דרך נוחה להגיע לאתרים המרכזיים.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'שוק צ\'נדני',
      description: 'שוק ססגוני בן מאות שנים, לב ליבה של העיר העתיקה. אפשר למצוא כאן תבלינים, בדים, תכשיטים ואוכל רחוב בלתי נשכח.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'שער הודו',
      description: 'אנדרטת מלחמה מרשימה שהוקמה לכבוד החיילים ההודים שנפלו. בערב המקום מתמלא תאורה, משפחות ומבקרים.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'המבצר האדום',
      description: 'סמל לשלטון המוגולי בדלהי ואתר מורשת עולמית. החומות האדומות מספרות את תפארת ההיסטוריה של הודו.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'Delhi Haat',
      description: 'שוק פתוח בסגנון כפרי המציג אמנות, מלאכות יד ואוכל מכל רחבי הודו. מקום נהדר לטעימות ולקניות מיוחדות.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'קוטוב מינאר',
      description: 'המינרט הגבוה בעולם שנבנה מלבנים. האתר כולל גם מסגדים ומבנים קדומים שממחישים את תחילת האדריכלות האיסלאמית בהודו.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'מסגד ג\'מה',
      description: 'המסגד הגדול ביותר בהודו, שנבנה בידי שאה ג\'האן. מרפסתו מציעה תצפית מרהיבה על העיר העתיקה.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מקדש הסיקים',
      description: 'מקדש סיקי מפורסם עם בריכת מים קדושה. המבקרים מוזמנים להשתתף בארוחות חינם שמבושלות ומוגשות מדי יום.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'ג\'נטר מנטר',
      description: 'מצפה כוכבים מהמאה ה-18 עם מבנים גיאומטריים מרתקים. שימש למדידות אסטרונומיות ולוח שנה אסטרולוגי.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מסגד הסופיים (Nizamuddin Dargah)',
      description: 'מקום עלייה לרגל לצאצאי הסופים בדלהי. בערבים אפשר לשמוע כאן מופעי קוואלי מסורתיים שמושכים מבקרים מכל העולם.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'האוס קז',
      description: 'שכונה היסטורית עם מבנים מימי הסולטנות, לצד חנויות בוטיק, גלריות ובתי קפה אופנתיים. שילוב של עבר ועתיד בלב העיר.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'גני לודהי',
      description: 'פארק ירוק עם קברים מימי הסולטנות. מקום אהוב לטיולים רגליים, ריצה ופיקניקים.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'שוק קהן',
      description: 'אחד השווקים היוקרתיים בדלהי, המשלב חנויות מותגים לצד מסעדות וחנויות ספרים. פופולרי בקרב מקומיים ותיירים.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'בית הנשיא',
      description: 'מעונו הרשמי של נשיא הודו, מבנה קולוניאלי מרהיב. בחורף ניתן לבקר גם בגנים הפורחים הצמודים לו.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'בית משפט לצרכנים',
      description: 'סמל להתפתחות המשפטית והמודרנית בעיר. מעניק הצצה למערכת החוקית של הודו בפועל.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'הטסת עפיפונים',
      description: 'פעילות פופולרית בדלהי, במיוחד בחג מַקר סַנקרַנטי. השמיים מתמלאים צבעים ויוצרים אווירה חגיגית.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg'
    },
    {
      title: 'קונוט פלייס',
      description: 'לב העסקים והקניות של דלהי, בנוי במעגלים בסגנון קולוניאלי בריטי. עמוס חנויות, מסעדות וחיי לילה.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    },
    {
      title: 'מקדש גנש',
      description: 'מקדש קטן אך אהוב המוקדש לאל גנש. רבים מגיעים להתפלל כאן לפני תחילת פרויקטים חדשים.',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
    }
  ];

  const tourOptions = [
    {
      title: 'סיור בדלהי',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      startTime: '10:00',
      endTime: '18:00',
      transport: 'רכב ממוזג',
      guide: 'מדריך דובר עברית ואנגלית',
      highlights: ['הטסת עפיפונים על גגות דלהי הישנה', 'נסיעה במטרו', 'סיור רגלי', 'מקדש סיקי', 'נסיעה באוטו ריקשה בשווקים']
    },
    {
      title: 'סיור באגרה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      startTime: '06:00',
      endTime: '20:00',
      transport: 'רכב ממוזג',
      guide: 'מדריך דובר עברית ואנגלית',
      highlights: ['הטאג\' מהאל', 'מצודת אגרה', 'shero cafe']
    },
    {
      title: 'סיור למטורה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      startTime: '07:00',
      endTime: '19:00',
      transport: 'רכב ממוזג',
      guide: 'מדריך דובר עברית ואנגלית',
      highlights: ['טקס תפילה הינדי עם מנורת אש', 'שיט על נהר ימונה', 'מומלץ בחג ההולי במיוחד']
    },
    {
      title: 'סיור בתפירה אישית',
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
      name: 'מיניבוס',
      image: '/transport bus.png',
      capacity: '5-11 נוסעים',
      aircon: 'רכב ממוזג',
      driver: 'נהג מקצועי',
      suitable: ''
    },
    {
      name: 'טויוטה אינובה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      capacity: '3-4 נוסעים',
      aircon: 'רכב ממוזג',
      driver: 'נהג מקצועי',
      suitable: ''
    },
    {
      name: 'סוויפט דזייר',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      capacity: '1-2 נוסעים',
      aircon: 'רכב ממוזג',
      driver: 'נהג מקצועי',
      suitable: ''
    }
  ];

  const testimonials = [
    {
      name: 'דוד ושרה כהן',
      location: 'תל אביב',
      rating: 5,
      text: 'הסיור הפרטי בדלהי עם מלכה היה פשוט מדהים! ראינו את כל האתרים החשובים והמדריכה הייתה מקצועית ומעניינת. בהחלט נחזור!'
    },
    {
      name: 'משפחת לוי',
      location: 'חיפה',
      rating: 5,
      text: 'חוויה בלתי נשכחת בדלהי! הילדים נהנו מכל רגע והמדריכה דיברה עברית מושלמת. הרכב היה נוח והנהג מקצועי. ממליצים בחום!'
    }
  ];

  const faqItems = [
    {
      question: 'יצאנו שעה מאוחר כי התעכבנו בארוחת הבוקר. מה תהיה שעת החזרה שלנו למלון?',
      answer: 'שעות הסיור מחושבות כ-8 שעות מזמן האיסוף המתוכנן. לדוגמה, אם סיור מתוכנן ב-8 בבוקר ואמור להסתיים ב-4 אחר הצהריים, הסיור יסתיים ב-4 אחר הצהריים כיוון שזו שעת החזרה, ללא קשר לכך שהתחיל מאוחר. לחלופין, יש אפשרות להאריך את הסיור עקב העיכוב הבוקר כדי להשלים את התוכנית המלאה, בתוספת תשלום לפי סוג הרכב.'
    },
    {
      question: 'החלטנו לא לחזור למלון בסיום הסיור אלא לנסוע לשדה התעופה. האם הסעה לשדה התעופה כלולה במחיר?',
      answer: 'הסיורים כוללים איסוף מהמלון והחזרה למלון. אם אתם צריכים להגיע לשדה התעופה, יש תוספת של 20 דולר לאדם להסעה לשדה התעופה.'
    },
    {
      question: 'אפשר לעצור לארוחה?',
      answer: 'במהלך הסיורים אני מתקדמת לפי קצב הקבוצה. אם יש בקשה לארוחה או כל שינוי אחר, אני מאוד גמישה, אבל צריך להיות מוכנים מראש. לדוגמה, ארוחת צהריים מוגשת בדרך כלל בין 13:00-15:00 לפי שעות הצהריים של העיר. ארוחות אינן כלולות במחיר הסיור.'
    },
    {
      question: 'יש לנו מכנסיים קצרים לסיור - האם זה לבוש הולם?',
      answer: 'לבוש הולם בהודו כולל חולצה ארוכה המכסה את הבטן ואת הכתפיים, ומכנס המכסה את הרגליים עד לברכיים. חולצות או מכנסיים לא צריכים להיות צמודים כמו לגינס. אם אתם לבושים אחרת, אבקש מכם לפני תחילת הסיור לרכוש צעיף לכיסוי האזורים הנדרשים לבטיחותכם וחוויית הליכה נוחה ברחוב.'
    },
    {
      question: 'יש לנו כמה שעות המתנה בדלהי. האם מומלץ לצאת לעיר לסיור?',
      answer: 'בדלהי יש שדה תעופה אחד, לכן חובה לוודא מראש את זמני הטיסה. צריך לחשב 1.5-2 שעות ליציאה מביקורת הדרכונים ועוד 2 שעות המתנה לפני טיסות פנים. לפעמים טיסות בינלאומיות מתעכבות, לכן אם יש לכם יותר מ-5 שעות, אפשר לשקול יציאה לעיר. שימו לב שנסיעה בכל כיוון במרכז דלהי לוקחת 1-1.5 שעות.'
    },
    {
      question: 'אנחנו נוסעים כחלק מסיור משותף עם נוסעים שאנחנו לא מכירים ושלא מתארחים באותו מלון. האם תבואי לאסוף אותנו או שנגיע בעצמנו?',
      answer: 'אני בדרך כלל אוספת נוסעים ממלונות ומחזירה אותם למלונות. בסיורים משותפים, כל עוד המלונות נמצאים במרכז דלהי באופן מרוכז, כלומר אני לא צריכה לסטות מהמסלול או להאריך שעות השכרת הרכב, אאסוף ואחזיר את כולם במסגרת סיור של 8 שעות. אולם, אם חלק מהנוסעים נמצאים מחוץ למסלול, תהיה תוספת של 10 דולר לאדם, או שהנוסע יכול לבחור לא לשלם את התוספת של 10 דולר הזו ולהגיע ליעד הראשון בעצמו ולחזור למלון בעצמו.'
    },
    {
      question: 'זה היום הראשון שלנו בהודו. אפשר לקחת אותנו להמיר דולרים?',
      answer: 'אני בדרך כלל לא סוטה מהמסלול כדי שנוכל לראות ולחוות יותר. אם תרצו שאמיר עבורכם דולרים, אנא הודיעו לי מראש כדי שאוכל להגיע לסיור עם הסכום המומר. דולרים ישנים משנת 2001 ומטה, כמו גם שטרות מתחת ל-100 דולר, לא יומרו בשער גבוה.'
    },
    {
      question: 'לא סידרנו שעות נוספות מראש אבל רוצים להמשיך לחקור את העיר, האם אפשר להאריך את הסיור עד שעות מאוחרות?',
      answer: 'שעות סיור נוספות מקובלות. המחיר לתוספת הוא 15 דולר לאדם לשעה או חלק ממנה (עבור שירות רכב ומדריכה).'
    },
    {
      question: 'אני לא רוצה שנוסעים נוספים יצטרפו לסיור הקבוצתי שלנו. איך אפשר להבטיח את זה?',
      answer: 'הסיורים הם סיורים משותפים, ואם יש נוסעים שרוצים להצטרף, הסיור פתוח לכך, אלא אם אתם הנוסע הראשון שיצר קשר לתאריך ועדיין אין נוסעים אחרים שיצרו קשר לתאריך שלכם. בתשלום נוסף, הסיור יהיה מובטח לכם ולקבוצתכם אם אתם מעל 4 אנשים.'
    },
    {
      question: 'שילמתי מקדמה לסיור איתך, אבל חברת התעופה שינתה לי את ימי ביקור העיר ליום למחרת. האם אפשר לשנות את תאריך הסיור בשלב זה?',
      answer: 'אני מגיעה לסיורים בטיסה ובדרך כלל נוחתת בבוקר וחוזרת בערב. כרטיס הטיסה נרכש ברגע ששולחת מקדמה. במקרה זה, ההגעה שלי לדלהי והחזרה כבר מובטחות, אבל יש אפשרות לשלם מחיר נוסף שישמש לשינויי כרטיסים כדי שהסיור יוכל להתקיים.'
    },
    {
      question: 'מדוע את מציינת שאת משתפת פעולה עם מדריך נוסף באתרי מורשת?',
      answer: 'בהודו, הנהלים מחייבים שלאתרי מורשת והיסטוריה ייכנס רק מדריך מוסמך בעל רישיון רשמי. כמדריכה תרבותית אני מתמקדת בהיכרות עם חיי היום-יום, תרבות, אוכל ושווקים, ולכן בשילוב מדריך מקומי מוסמך אני מבטיחה לכם גם עמידה בכללים וגם חוויה מלאה: ידע היסטורי מדויק לצד ההקשר התרבותי הרחב שאני מעניקה.'
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
            src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg" 
            alt="סיורי יום - דלהי טיול פרטי"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              סיורי יום - דלהי טיול פרטי
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              גלו את קסמי דלהי עם מדריכה ישראלית מקצועית בסיור פרטי מותאם אישית
            </p>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 hebrew-text">
            חוויה מבוקשת בקרב מטיילים
          </h2>
          <button 
            onClick={() => onPageChange('contact')}
            className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            צור קשר
          </button>
        </div>
      </section>

      {/* Guide Description Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
            אני מדריכה תרבותית המתמחה בהיכרות עם חיי היום-יום, אוכל, שווקים ותרבות. לאתרי מורשת והיסטוריה אני משתפת פעולה עם מדריכים מוסמכים בעלי רישיון.
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              אתרים פופולריים בדלהי
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              אין אפשרות לראות את כל האתרים ביום אחד
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {delhiPhotos.map((photo, index) => (
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
              בחר סיור בדלהי או סביבתה
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
                    <div className="flex items-center">
                      <span className="text-lg ml-3">🏛️</span>
                      <span className="hebrew-text text-sm">שיתוף פעולה עם מדריך מקומי מוסמך באתרי מורשת</span>
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
              רכבים לסיור בדלהי
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              הרכב המתאים לסיור שלכם נקבע לפי מספר המשתתפים ויהיה אחד מהרכבים המופיעים מטה
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
                    {vehicle.suitable && (
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-orange-600 ml-3" />
                        <span className="hebrew-text">מתאים ל{vehicle.suitable}</span>
                      </div>
                    )}
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

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              סרטונים מדלהי
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              קבלו טעימה מהחוויה שמחכה לכם
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <a 
                  href="https://www.youtube.com/@indiabymalka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg"
                    alt="ערוץ יוטיוב הודו עם מלכה"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </a>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold hebrew-text mb-2">ערוץ יוטיוב הודו עם מלכה</h3>
                <p className="text-gray-600 hebrew-text text-sm leading-relaxed">
                  בקרו בערוץ היוטיוב שלנו לסרטונים נוספים על הודו, טיפים לטיולים וחוויות מרתקות
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <a 
                  href="https://youtu.be/MHy1LtsetN4?si=2bYiL-SVeXtwVh3j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg"
                    alt="סיור בדלהי עם מלכה"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </a>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold hebrew-text mb-2">סיור בדלהי עם מלכה</h3>
                <p className="text-gray-600 hebrew-text text-sm leading-relaxed">
                  צפו בסרטון מסיור מרתק בדלהי עם מלכה והכירו את האתרים המרכזיים של הבירה ההיסטורית
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 hebrew-text">
              מה אומרים הלקוחות שלנו
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              כל מה שרציתם לדעת על הסיור הפרטי בדלהי
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
            מוכנים לחוות את דלהי?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            הזמינו עכשיו את הסיור הפרטי שלכם בדלהי עם מלכה - המדריכה הישראלית המנוסה
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

export default DelhiToursPage;