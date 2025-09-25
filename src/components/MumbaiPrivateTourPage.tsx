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
      question: 'יש לנו כמה שעות המתנה במומבאי. האם מומלץ לצאת לעיר לסיור?',
      answer: 'במומבאי יש שני שדות תעופה, לכן חובה לוודא מראש האם שדה התעופה שבו נחתתם הוא אותו שדה שממנו תמריאו. לאחר הבנת זה, צריך לחשב 1.5-2 שעות ליציאה מביקורת הדרכונים ועוד 2 שעות המתנה לפני טיסות פנים. לפעמים טיסות בינלאומיות מתעכבות, לכן אם יש לכם יותר מ-5 שעות, אפשר לשקול יציאה לעיר. שימו לב שנסיעה בכל כיוון לדרום מומבאי לוקחת 1-1.5 שעות.'
    },
    {
      question: 'אנחנו נוסעים כחלק מסיור משותף עם נוסעים שאנחנו לא מכירים ושלא מתארחים באותו מלון. האם תבואי לאסוף אותנו או שנגיע בעצמנו?',
      answer: 'אני בדרך כלל אוספת נוסעים ממלונות ומחזירה אותם למלונות. בסיורים משותפים, כל עוד המלונות נמצאים בדרום מומבאי או ליד שדה התעופה באופן מרוכז (כל הנוסעים בדרום מומבאי או כל הנוסעים ליד שדה התעופה), כלומר אני לא צריכה לסטות מהמסלול (שדה תעופה באזור אנדהרי לדרום מומבאי) או להאריך שעות השכרת הרכב, אאסוף ואחזיר את כולם במסגרת סיור של 8 שעות. אולם, אם חלק מהנוסעים נמצאים מחוץ למסלול, תהיה תוספת של 10 דולר לאדם, או שהנוסע יכול לבחור לא לשלם את התוספת של 10 דולר הזו ולהגיע ליעד הראשון בעצמו ולחזור למלון בעצמו.'
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
      answer: 'אני מגיעה לסיורים בטיסה ובדרך כלל נוחתת בבוקר וחוזרת בערב. כרטיס הטיסה נרכש ברגע ששולחת מקדמה. במקרה זה, ההגעה שלי למומבאי והחזרה כבר מובטחות, אבל יש אפשרות לשלם מחיר נוסף שישמש לשינויי כרטיסים כדי שהסיור יוכל להתקיים.'
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
              רכבים לסיור במומבאי
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
                <a 
                  href="https://www.youtube.com/watch?v=xSoGgmTdpKA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://img.youtube.com/vi/xSoGgmTdpKA/maxresdefault.jpg"
                    alt="חוויה בלתי נשכחת במומבאי עם מלכה אירני"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </a>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold hebrew-text mb-2">חוויה בלתי נשכחת במומבאי עם מלכה אירני!</h3>
                <p className="text-gray-600 hebrew-text text-sm leading-relaxed mb-3">
                  בואו איתי למסע חווייתי שייקח אתכם אל לב העיר התוססת! נרוץ לרכבת כמו המקומיים במשחק "המירוץ לרכבת", נגלה איך שליחי המזון האגדיים של מומבאי מתפקדים ללא טעויות, נטייל בשווקים הצבעוניים ונחווה את העיר דרך העיניים של מי שחי בה באמת!
                </p>
                <p className="text-blue-600 hebrew-text text-sm font-medium">
                  📍 בואו לחוות את מומבאי בצורה מרגשת, מצחיקה ומלאת אנרגיה!<br/>
                  👀 צפו בסרטון עכשיו ותנו לייק אם גם אתם רוצים להצטרף להרפתקה הבאה!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <a 
                  href="https://www.youtube.com/watch?v=EFyEt2Jo1DQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://img.youtube.com/vi/EFyEt2Jo1DQ/maxresdefault.jpg"
                    alt="10 Facts of Mumbai"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </a>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold hebrew-text mb-2">10 Facts of Mumbai</h3>
                <p className="text-gray-600 hebrew-text text-sm leading-relaxed">
                  Welcome to Mumbai — India's financial powerhouse, Bollywood capital, and the city that never sleeps! 
                  In this short video, discover 10 fascinating facts about Mumbai that reveal its charm.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <a 
                  href="https://www.youtube.com/watch?v=UucnPiiA7C8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://img.youtube.com/vi/UucnPiiA7C8/maxresdefault.jpg"
                    alt="הפרסיים זורשתריאנים של מומבאי מאת מלכה אירני"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </a>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold hebrew-text mb-2">הפרסיים זורשתריאנים של מומבאי מאת מלכה אירני</h3>
                <p className="text-gray-600 hebrew-text text-sm leading-relaxed">
                  הפרסים של מומבאי הם צאצאי קהילה זורואסטרית שהיגרה מאיראן להודו לפני מאות שנים. הם ידועים בשם "פרסים" ושמרו על תרבותם, דתם ושפתם הייחודית. הקהילה תרמה רבות לפיתוח מומבאי בתחומים כמו עסקים, תעשייה, אמנות וחינוך. בתי התפילה שלהם, אטש-בהרם (מקדשי האש), משמרים את מסורת האש הקדושה. היום, הם ממשיכים לשמור על זהותם הייחודית תוך השתלבות בחברה ההודית הרב-תרבותית.
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
                  className="w-full text-right p-6 bg-[#0A2540] hover:bg-blue-800 text-white transition-colors cursor-pointer flex justify-between items-center"
                >
                  <span className="font-bold text-white hebrew-text">{item.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
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