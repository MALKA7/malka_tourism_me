import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, CreditCard, Info, AlertTriangle, ChevronDown, ChevronUp, Play, Globe, Award, Shield, Camera } from 'lucide-react';

interface MumbaiPrivateTourPageProps {
  onPageChange: (page: string) => void;
}

const MumbaiPrivateTourPage: React.FC<MumbaiPrivateTourPageProps> = ({ onPageChange }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [groupSize, setGroupSize] = useState(2);
  const [showPayment, setShowPayment] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [expandedSite, setExpandedSite] = useState<number | null>(null);

  const calculatePrice = () => {
    return 200; // Base private tour price
  };

  const getVehicleType = () => {
    if (groupSize <= 2) return 'רכב פרטי';
    if (groupSize <= 4) return 'טויוטה אינובה';
    return 'טמפו טרוולר/אורבניה';
  };

  const getPrivacySurcharge = () => {
    return groupSize >= 4 ? 200 : 0;
  };

  const youtubeVideos = [
    {
      id: 'mumbai-tour-1',
      title: 'סיור במומבאי עם מלכה - חלק 1',
      description: 'גלו את מומבאי האמיתית עם מלכה אירני',
      videoId: 'UucnPiiA7C8',
      startTime: 107
    },
    {
      id: 'mumbai-tour-2',
      title: 'חוויות אותנטיות במומבאי - חלק 2',
      description: 'הכירו את התרבות המקומית והאנשים',
      videoId: 'xSoGgmTdpKA',
      startTime: 0
    }
  ];

  const tourSites = [
    {
      name: 'דובי גאט (המכבסה הגדולה)',
      description: 'שכונה של כובסים במומבאי המכבסים את הכביסה של העיר',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'דובי גאט היא אחת האטרקציות הייחודיות ביותר במומבאי. זוהי שכונה שלמה של כובסים שמכבסים את הכביסה של כל העיר במשך מאות שנים. תוכלו לראות את התהליך המסורתי של כביסה ידנית, ייבוש הבגדים על חבלים ענקיים, ולהבין איך מערכת זו עובדת עד היום. זהו מקום מרתק שמציג את הודו המסורתית והעובדת.'
    },
    {
      name: 'מקדש מהלקשמי',
      description: 'אחד המקדשים המפורסמים ביותר של מומבאי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'מקדש מהלקשמי הוא מקדש הינדי עתיק המוקדש לאלת העושר והשגשוג מהלקשמי. המקדש נבנה במאה ה-18 ומהווה מרכז רוחני חשוב לתושבי מומבאי. האדריכלות המרהיבה, הפסלים המפוארים והאווירה הרוחנית הייחודית הופכים את הביקור כאן לחוויה בלתי נשכחת.'
    },
    {
      name: 'מסגד חאג\'י עלי',
      description: 'מסגד ומקום עלייה לקברו של סייד פאר חג\'י עלי',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'מסגד חאג\'י עלי הוא אחד המקומות הקדושים ביותר במומבאי. המסגד נבנה על אי קטן המחובר לחוף בדרך צרה שנחשפת רק בשעות השפל. המקום מקודש הן למוסלמים והן להינדים, והוא מהווה סמל לסובלנות הדתית במומבאי. האדריכלות הלבנה המרהיבה והמיקום הייחודי על המים יוצרים נוף עוצר נשימה.'
    },
    {
      name: 'פארק קמלה נרו והגנים התלויים',
      description: 'נוף מרהיב של מרין דרייב וגורדי השחקים',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'הגנים התלויים הם פארק יפהפה הממוקם על גבעה במרכז מומבאי. מכאן נשקף נוף מרהיב של מרין דרייב, הים הערבי וגורדי השחקים של העיר. הפארק מעוצב בסגנון אנגלי עם דשא ירוק, פרחים צבעוניים ועצים עתיקים. זהו מקום מושלם לצילומים ולהנאה מהנוף הפנורמי של מומבאי.'
    },
    {
      name: 'המוזיאון של גנדי',
      description: 'מוקד פעילותו הפוליטית של גנדי במומבאי',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'מוזיאון גנדי ממוקם במני בהוון, הבית שבו חי מהטמה גנדי במשך 17 שנים. המוזיאון מציג את חייו, פילוסופיית הא-אלימות שלו ותרומתו למאבק לעצמאות הודו. תוכלו לראות חפצים אישיים, מכתבים, תמונות ומסמכים היסטוריים. זהו מקום חובה לכל מי שרוצה להבין את ההיסטוריה המודרנית של הודו.'
    },
    {
      name: 'השכונה הפרסית בדאדר',
      description: 'השכונה הפרסית היחידה שלא מוקפת חומה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'השכונה הפרסית בדאדר היא קהילה ייחודית של זורואסטרים (פרסים) במומבאי. זוהי השכונה הפרסית היחידה שאינה מוקפת חומה ופתוחה לביקור. תוכלו לראות את האדריכלות הייחודית, בתי הכנסת הפרסיים (אגיארי), ולהכיר את התרבות והמסורות של קהילה עתיקה זו שהגיעה להודו לפני מאות שנים.'
    },
    {
      name: 'שליחי ארוחות צהריים (דבהוואלה)',
      description: 'תופעה ייחודית למומבאי של העברת אוכל חם',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'מערכת הדבהוואלה היא תופעה ייחודית למומבאי שזוכה להכרה עולמית. מדי יום, אלפי שליחים אוספים ארוחות בוקר טריות מבתים ומעבירים אותן לעובדים במשרדים ברחבי העיר. המערכת פועלת ברמת דיוק של 99.9% ללא שימוש בטכנולוגיה מתקדמת. זהו דוגמה מרתקת ליעילות ולארגון הודי מסורתי.'
    },
    {
      name: 'שער הכניסה להודו',
      description: 'הוקם להנציח את ביקור המלך ג\'ורג\' החמישי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'שער הכניסה להודו הוא הסמל הכי מפורסם של מומבאי. הוא נבנה ב-1924 להנצחת ביקור המלך ג\'ורג\' החמישי והמלכה מרי בהודו. השער בנוי בסגנון הודו-סרצני מרהיב ומהווה נקודת ציון מרכזית. מכאן יוצאות סירות לאי אלפנטה, וזהו מקום מפגש פופולרי לתיירים ומקומיים כאחד.'
    },
    {
      name: 'מלון הטאג\'',
      description: 'מלון חמישה כוכבים היסטורי',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'מלון טאג\' מהל פאלאס הוא מלון יוקרה אייקוני שנבנה ב-1903. המלון מפורסם באדריכלות המרהיבה שלו, השירות המעולה והמיקום המושלם מול שער הכניסה להודו. המלון שרד את פיגועי הטרור ב-2008 ונחשב לסמל של חוסן ויוקרה. גם אם אינכם מתארחים במלון, כדאי להיכנס ולראות את הלובי המפואר והאדריכלות הייחודית.'
    },
    {
      name: 'תחנת ויקטוריה + בנין העיריה',
      description: 'אתר מורשת עולמית של אונסק"ו',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'תחנת צ\'טרפטי שיווג\'י (לשעבר ויקטוריה טרמינוס) היא אחת מתחנות הרכבת היפות בעולם ואתר מורשת עולמית של אונסק"ו. האדריכלות הוויקטוריאנית הגותית המרהיבה, הפסלים המפוארים והפרטים המורכבים הופכים אותה למופת אמנותי. בנין העיריה הסמוך בנוי באותו סגנון ומהווה יחד איתה קומפלקס אדריכלי מרהיב.'
    },
    {
      name: 'שוק קרופורד',
      description: 'אחד השווקים המפורסמים ביותר של דרום מומבאי',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'שוק קרופורד (כיום שוק מהטמה ג\'יוטיבה פולה) הוא שוק צבעוני ותוסס במרכז מומבאי. כאן תמצאו פירות טריים, ירקות, תבלינים, בגדים ומוצרי יד. האדריכלות הבריטית הקולוניאלית של הבניין מרהיבה, והאווירה הסואנת והצבעונית מציגה את מומבאי האמיתית. זהו מקום מושלם לחוות את החיים המקומיים ולקנות מזכרות.'
    },
    {
      name: 'מקדש מומבא דוי',
      description: 'מוקדש לאלה מומבא, הפטרונית של דייגי קולי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'מקדש מומבא דוי מוקדש לאלה מומבא, האלה הפטרונית של דייגי קולי - התושבים המקוריים של מומבאי. המקדש עתיק ומקודש, ושמה של העיר מומבאי נגזר משמה של האלה. המקדש ממוקם בלב שכונת דייגים מסורתית, ומכאן תוכלו להבין את השורשים ההיסטוריים של העיר ואת התרבות המקומית של קהילת הדייגים.'
    },
    {
      name: 'כפר הדייגים קולי',
      description: 'התושבים המקוריים של מומבאי כשהיתה 7 איים',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'קהילת קולי היא קהילת הדייגים המקורית של מומבאי, שחיה כאן עוד לפני שהעיר הפכה למטרופולין ענק. הם התושבים הילידיים של שבעת האיים שהתאחדו ליצור את מומבאי המודרנית. בכפר הדייגים תוכלו לראות את אורח החיים המסורתי, סירות דיג צבעוניות, רשתות דיג ולהכיר את התרבות העתיקה שעדיין קיימת בלב העיר המודרנית.'
    },
    {
      name: 'בית כנסת אליהו',
      description: 'בית כנסת ספרדי בן 150 שנה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: `בית הכנסת אליהו הוא בית כנסת ספרדי היסטורי שנבנה ב-1884. זהו אחד מבתי הכנסת הפעילים במומבאי ומשרת את הקהילה היהודית המקומית. האדריכלות יפהפיה עם חלונות ויטראז, ארון הקודש המפואר והפרטים האמנותיים הופכים אותו למקום מיוחד. הביקור כאן מאפשר להכיר את ההיסטוריה היהודית במומבאי ואת הקהילה הקטנה אך הפעילה.`
    },
    {
      name: 'שכונת הסלאם דהרבי',
      description: 'אחד ממשכנות העוני הגדולות בעולם',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'דהרבי הוא אחד ממשכנות העוני הגדולים בעולם, שבו חיים למעלה ממיליון איש. למרות התנאים הקשים, זוהי קהילה תוססת ופעילה עם תעשיות קטנות, בתי ספר ומרכזי קהילה. הסיור מתנהל בכבוד ובהבנה, ומאפשר להבין את האתגרים והחוזקות של החיים בתנאים אלה. זוהי חוויה מעוררת מחשבה שמציגה צד אחר של מומבאי.'
    },
    {
      name: 'חוף צ\'ופטי',
      description: 'חוף ציבורי מפורסם בחגיגות גאנש',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'חוף צ\'ופטי הוא חוף ציבורי פופולרי במומבאי, המפורסם במיוחד בזמן פסטיבל גאנש צ\'טורתי. במהלך הפסטיבל, אלפי פסלי גאנש מובאים לחוף לטקס הטבלה בים. החוף מציע נוף יפה של הים הערבי, אווירה תוססת עם רוכלים ומוכרי אוכל רחוב, ואפשרות לראות את החיים המקומיים של תושבי מומבאי.'
    },
    {
      name: 'אי אלפנטה',
      description: 'מערות היסטוריות במרחק 10 ק"מ מהחוף',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'אי אלפנטה הוא אתר מורשת עולמית של אונסק"ו הממוקם במרחק שעה בסירה ממומבאי. האי מכיל מערות עתיקות מהמאה ה-5-8 עם פסלים מרהיבים של אלים הינדיים, במיוחד שיווה. המערה הראשית מכילה את הפסל המפורסם של שיווה משולש הראשים. הנסיעה בסירה והביקור במערות מהווים חוויה היסטורית ותרבותית מרתקת.'
    },
    {
      name: 'רציפי ששון',
      description: 'אחד מהרציפים העתיקים ביותר במומבאי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'רציפי ששון הם רציפי דיג היסטוריים שנבנו במאה ה-19. זהו מקום תוסס בשעות הבוקר המוקדמות כשסירות הדיג חוזרות עם הדגים הטריים. תוכלו לראות את שוק הדגים הצבעוני, דייגים מתקנים רשתות, ולחוות את האווירה האותנטית של מומבאי העובדת. זהו מקום מצוין להבין את החיים הכלכליים והתרבותיים של העיר.'
    },
    {
      name: 'גלריה לאמנות מודרנית',
      description: 'מוזיאון אמנות מודרנית מוביל בהודו',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'הגלריה הלאומית לאמנות מודרנית במומבאי מציגה אוסף מרהיב של אמנות הודית מודרנית ועכשווית. המוזיאון מכיל יצירות של אמנים הודיים מובילים מהמאה ה-19 ועד היום. האוסף כולל ציורים, פסלים, גרפיקה ואמנות דיגיטלית. זהו מקום מושלם להכיר את האמנות ההודית המודרנית ולהבין את הזרמים התרבותיים בהודו העכשווית.'
    },
    {
      name: 'רובע האורות האדומים',
      description: 'אזור היסטורי עם סיפורים מרתקים',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'רובע האורות האדומים במומבאי הוא אזור היסטורי עם סיפורים מורכבים ומרתקים. הסיור מתנהל בכבוד ובהבנה, ומתמקד בהיבטים החברתיים, ההיסטוריים והתרבותיים של האזור. תוכלו ללמוד על ההיסטוריה של המקום, האתגרים החברתיים והמאמצים לשיקום ושיפור התנאים. זהו סיור חינוכי שמציג צד מורכב של החברה ההודית.'
    },
    {
      name: 'שוק צ\'ור בזאר (שוק הגנבים)',
      description: 'שוק עתיקות ומוצרי יד מפורסם',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'שוק צ\'ור בזאר, הידוע כ"שוק הגנבים", הוא שוק עתיקות מפורסם במומבאי. כאן תמצאו אוסף מדהים של עתיקות, מוצרי יד, תכשיטים, ספרים עתיקים, כלי בית וינטג\' ופריטים נדירים. השוק פועל כבר מאות שנים והוא מקום מצוין למציאות ולמזכרות ייחודיות. האווירה הצבעונית והמגוונת הופכת את הביקור לחוויה מרתקת.'
    },
    {
      name: 'שוק קלבדוי',
      description: 'שוק תבלינים ומוצרי דת מסורתי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'שוק קלבדוי הוא שוק מסורתי המתמחה בתבלינים, מוצרי דת ותכשיטים. זהו אחד השווקים העתיקים ביותר במומבאי, עם חנויות משפחתיות שפועלות כבר דורות. תוכלו להריח את הארומות המדהימות של התבלינים, לראות מוצרי דת הינדיים מסורתיים ולחוות את האווירה האותנטית של שוק הודי מסורתי.'
    },
    {
      name: 'גן החיות והאקווריום',
      description: 'גן חיות היסטורי ואקווריום מרכזי',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'גן החיות של מומבאי הוא אחד הגנים העתיקים ביותר בהודו, שנוסד ב-1861. הגן מכיל מגוון רחב של בעלי חיים מהודו ומרחבי העולם, כולל נמרים, אריות, פילים וציפורים נדירות. האקווריום הסמוך מציג דגים טרופיים ויצורי ים מהים הערבי. זהו מקום מושלם למשפחות ולמי שמעוניין בטבע ובחיות.'
    },
    {
      name: 'פלנטריום נהרו',
      description: 'פלנטריום מתקדם עם מופעי כוכבים',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'פלנטריום נהרו הוא מרכז מדעי מתקדם המציג מופעי כוכבים מרהיבים ותערוכות אסטרונומיה. המופעים מוקרנים על כיפה ענקית ומציגים את השמים, הכוכבים והגלקסיות בצורה מרתקת. זהו מקום חינוכי ומעניין במיוחד למשפחות עם ילדים, ומאפשר להבין את מקומנו ביקום בצורה מרתקת ונגישה.'
    },
    {
      name: 'מוזיאון הנסיך מוויילס',
      description: 'מוזיאון אמנות והיסטוריה מוביל',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'מוזיאון הנסיך מוויילס (כיום מוזיאון צ\'טרפטי שיווג\'י מהרג\') הוא מוזיאון מוביל במומבאי עם אוסף עשיר של אמנות, ארכיאולוגיה והיסטוריה טבעית. המוזיאון מכיל פסלים עתיקים, ציורים, כלי נשק היסטוריים, מטבעות עתיקים ואוסף מרהיב של אמנות הודית. הבניין עצמו הוא יצירת אמנות אדריכלית בסגנון הודו-סרצני.'
    },
    {
      name: 'מקדש סידהיווינאיק',
      description: 'מקדש גאנש מפורסם ומקודש',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'מקדש סידהיווינאיק הוא אחד המקדשים המפורסמים והמקודשים ביותר במומבאי, המוקדש לאל גאנש. המקדש נבנה ב-1801 ומושך מיליוני מבקרים מדי שנה. האמונה הרווחת היא שגאנש כאן מגשים משאלות, ולכן מגיעים אליו אנשים מכל רחבי הודו. האווירה הרוחנית, הטקסים הצבעוניים והאנרגיה החיובית הופכים את הביקור לחוויה רוחנית מיוחדת.'
    },
    {
      name: 'הפארק הלאומי סנג\'יי גנדי ומערות קנהרי',
      description: 'פארק לאומי עירוני ומערות בודהיסטיות עתיקות',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'הפארק הלאומי סנג\'יי גנדי הוא פארק לאומי ייחודי הממוקם בתוך גבולות העיר מומבאי. הפארק מכיל יערות טרופיים, אגמים ומגוון עשיר של חיות בר כולל נמרים, צבאים ומאות מיני ציפורים. מערות קנהרי הן מערות בודהיסטיות עתיקות מהמאה ה-1-9 עם פסלים ותבליטים מרהיבים. זהו מקום מושלם לבריחה מהעיר הסואנת ולחיבור עם הטבע.'
    },
    {
      name: 'מירוצי סוסים במהלקשמי',
      description: 'מסלול מירוצים היסטורי ואלגנטי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'מסלול המירוצים במהלקשמי הוא מסלול מירוצי סוסים אלגנטי ויוקרתי שנוסד ב-1883. המסלול פועל בעונת המירוצים (נובמבר-אפריל) ומציע אווירה של יוקרה ומסורת. האדריכלות הקולוניאלית היפה, הגנים המטופחים והאווירה האריסטוקרטית הופכים את הביקור לחוויה ייחודית. גם אם אינכם מעוניינים במירוצים, המקום מציע הצצה לעולם האליטה של מומבאי.'
    },
    {
      name: 'מקדש איסקון',
      description: 'מקדש קרישנה מודרני וצבעוני',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'מקדש איסקון במומבאי הוא מקדש מודרני ומרהיב המוקדש לקרישנה. המקדש נבנה בסגנון מסורתי עם אדריכלות מרהיבה, פסלים צבעוניים ואווירה רוחנית מיוחדת. המקדש מציע טקסים יומיים, שירי הקרה (מנטרות), ואוכל צמחוני טעים. זהו מקום מושלם להכיר את הרוחניות ההינדית המודרנית ולחוות אווירה של שלווה ושמחה.'
    },
    {
      name: 'חוויה עם קהילת ההיג\'רה',
      description: 'מפגש תרבותי ייחודי עם קהילת הטרנסג\'נדרים',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'קהילת ההיג\'רה היא קהילת טרנסג\'נדרים מסורתית בהודו עם היסטוריה עתיקה ותפקיד תרבותי חשוב. המפגש מתנהל בכבוד ובהבנה, ומאפשר להכיר את התרבות, המסורות והאתגרים של קהילה זו. תוכלו ללמוד על התפקיד ההיסטורי שלהם בחברה ההודית, האמונות הקשורות אליהם ואורח החיים הייחודי שלהם.'
    },
    {
      name: 'ביקור אצל משפחה פרסית וארוחה',
      description: 'חוויה אותנטית עם משפחה פרסית מקומית',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'ביקור אצל משפחה פרסית זורואסטרית הוא חוויה תרבותית אותנטית ומיוחדת. תוכלו להכיר את המסורות העתיקות, הפילוסופיה הזורואסטרית, ולטעום מהמטבח הפרסי המסורתי. המשפחות הפרסיות במומבאי שומרות על מסורות עתיקות ומציעות הצצה לתרבות ייחודית שהגיעה להודו לפני אלפי שנים. זוהי הזדמנות נדירה לחוות אירוח אותנטי ולהבין תרבות מרתקת.'
    },
    {
      name: 'חוויית נסיעה ברכבת',
      description: 'נסיעה ברכבת המקומית הסואנת של מומבאי',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      details: 'מערכת הרכבות המקומית של מומבאי מעבירה מעל 7 מיליון נוסעים מדי יום והיא עורק החיים של העיר. חוויית הנסיעה ברכבת המקומית מאפשרת להבין איך תושבי מומבאי מתנהלים בחיי היומיום. תוכלו לראות את הדינמיקה החברתית, הארגון הספונטני והאנרגיה הבלתי פוסקת של העיר. זוהי חוויה אותנטית שמציגה את מומבאי האמיתית.'
    },
    {
      name: 'מוזיאון ויקטוריה ואלברט',
      description: 'מוזיאון אמנות דקורטיבית ועיצוב',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      details: 'מוזיאון ויקטוריה ואלברט במומבאי (כיום מוזיאון ד"ר בהאו דאג\'י לאד) הוא מוזיאון מוביל לאמנות דקורטיבית ועיצוב. המוזיאון מכיל אוסף מרהיב של טקסטיל, תכשיטים, כלי חרס, רהיטים ואמנות יישומית מהודו ומרחבי העולם. הבניין עצמו הוא יצירת אמנות אדריכלית בסגנון הודו-סרצני. זהו מקום מושלם להכיר את האמנות וההיסטוריה התרבותית של הודו.'
    }
  ];

  const vehicleOptions = [
    {
      type: 'רכב פרטי',
      passengers: '1-2',
      description: 'רכב סדאן נוח עם מיזוג אוויר',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      icon: '🚗'
    },
    {
      type: 'טויוטה אינובה',
      passengers: '3-4',
      description: 'רכב רחב ונוח עם מיזוג אוויר',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      icon: '🚙'
    },
    {
      type: 'טמפו טרוולר/אורבניה',
      passengers: '5+',
      description: 'הטוב ביותר לקבוצות של 5 או יותר',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      icon: '🚌'
    }
  ];

  const tourInfo = [
    { label: 'נקודת התחלה', value: 'מומבאי', icon: MapPin },
    { label: 'נקודת סיום', value: 'מומבאי', icon: MapPin },
    { label: 'משך הסיור', value: '8 שעות', icon: Clock },
    { label: 'סגנון הסיור', value: 'משותף, פרטי', icon: Users },
    { label: 'שפה', value: 'אנגלית ועברית', icon: Globe },
    { label: 'גודל קבוצה', value: 'מקסימום 10', icon: Users },
    { label: 'סוג הסיור', value: 'סיור עיר בוקר', icon: Calendar },
    { label: 'רמת פעילות', value: 'נמוכה', icon: Award }
  ];

  const sampleItinerary = [
    { time: '06:00', activity: 'איסוף מהמלון' },
    { time: '06:30', activity: 'רציפי ששון' },
    { time: '09:00', activity: 'סלאם דהרבי' },
    { time: '10:30', activity: 'סיור ברכבת' },
    { time: '11:15', activity: 'שליחי מזון' },
    { time: '12:15', activity: 'שער הכניסה ומלון טאג\'' },
    { time: '14:00', activity: 'הגעה למלון' }
  ];

  const whyChooseUs = [
    {
      icon: '🗣️',
      title: 'סיורים בעברית במומבאי',
      description: 'מדריכה דוברת עברית שפת אם עם ידע מקומי עמוק'
    },
    {
      icon: '✈️',
      title: 'הסעות לשדה התעופה',
      description: 'שירותי איסוף והורדה נוחים'
    },
    {
      icon: '💱',
      title: 'המרת כסף',
      description: 'השערים הטובים ביותר והמרת מטבע בטוחה'
    },
    {
      icon: '📋',
      title: 'ייעוץ ותכנון נסיעות להודו',
      description: 'תכנון טיול מלא וייעוץ מקצועי'
    },
    {
      icon: '🎬',
      title: 'הפקת טיול אישית',
      description: 'חוויות מותאמות אישית במיוחד עבורכם'
    },
    {
      icon: '🏠',
      title: '15 שנים בהודו',
      description: 'ניסיון נרחב של חיים בהודו'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'חיה במומבאי וגידלה ילדים',
      description: 'הבנה עמוקה של החיים המקומיים והתרבות'
    },
    {
      icon: '🤝',
      title: 'חוויות אותנטיות עם מקומיים',
      description: 'אינטראקציות אמיתיות עם קהילות מומבאי'
    }
  ];

  const testimonials = [
    {
      name: 'רונית ואבי כהן',
      location: 'תל אביב',
      rating: 5,
      text: 'מלכה הדריכה אותנו במומבאי בצורה מדהימה! ההדרכה בעברית עזרה לנו להבין את התרבות ההודית בצורה עמוקה יותר.'
    },
    {
      name: 'משפחת לוי',
      location: 'חיפה',
      rating: 5,
      text: 'הסיור עם מלכה היה הדבר הכי טוב בטיול שלנו להודו. היא מכירה כל פינה במומבאי וההסברים שלה בעברית היו מרתקים.'
    },
    {
      name: 'דני אברהם',
      location: 'ירושלים',
      rating: 5,
      text: 'מדריכה מקצועית ברמה הכי גבוהה! מלכה הראתה לנו את הודו האמיתית והסבירה הכל בעברית ברורה ומעניינת.'
    }
  ];

  const faqItems = [
    {
      question: 'הסיור חרג מעל 8 שעות, כמה עלי לשלם תוספת?',
      answer: 'הנהג והרכב הינם מטעם חברה חיצונית במידה וחורגים יש לשלם לפי שעה או חלק ממנה מחיר של 20 דולר לאדם ללא תלות בסוג רכב.'
    },
    {
      question: 'יצאנו באיחור של שעה משום שהתעכבנו בארוחת בוקר, מה תהיה שעת חזרה למלון?',
      answer: 'חישוב שעות הסיור הינו 8 שעות מרגע קביעת שעת איסוף ולכן לדוגמא, אם סיור נקבע בשעה 8 ואמור להסתיים בשעה 4 הסיור יגמר בשעה 4 מאחר וזהו שעת החזרה למרות שהחל באיחור או אפשרות של הארכה מפאת איחור הבוקר על מנת לסיים את התוכניה בתשלום תוספת חריגה עבור סוג הרכב.'
    },
    {
      question: 'החלטנו לא לחזור למלון בסוף הסיור אלא לשדה התעופה, האם החזרה לשדה תעופה כלולה במחיר?',
      answer: 'הסיורים הינם מאיסוף מהמלון ועד החזרה למלון. במידה ועליכם להגיע לשדה התעופה ישנה תוספת של 20 דולר לאדם להעברה לשדה.'
    },
    {
      question: 'בבוקר הרגשתי טוב ואילו במהלך הטיול החלו לי כאבי בטן ושלשולים, במידה ואני רוצה לקצר את הסיור, מה המחיר?',
      answer: 'הודו ידועה בהפתעות בריאותיות הקשורות לאוכל ובטן, במקרה שמטייל קבע סיור אך נמנע ממנו להמשיך או להגיע לסיור בשל בעיה בריאותית, מחיר מלא יגבה ממנו כפיצוי על התחיבות מקום הישיבה ברכב ועל השירות שניתן מטעמי.'
    },
    {
      question: 'שלמתי מקדמה לסיור איתך אך חברת התעופה שנתה לי את ימי הביקור בעיר ליום למחרת, האם אפשר לשנות את תאריך הסיור בשלב כזה?',
      answer: 'אני מגיעה לסיור בטיסה ולרוב נוחתת בבוקר וחוזרת בערב, כרטיס הטיסה נרכש ברגע שנשלחת מקדמה, במקרה הנ"ל הגעתי למומבאי וחזרתי כבר מובטחת אך ישנה אפשרות לשלם תוספת מחיר שתשמש לשינוי כרטיס על מנת שסיור יצא לפועל.'
    },
    {
      question: 'אני לא מעוניין לצרף מטיילים נוספים לסיור הקבוצתי שלנו. איך אפשר להבטיח הדבר?',
      answer: 'הסיורים הינם סיורים משותפים ואם ישנם מטיילים שרוצים להצטרף הסיור פתוח לכך אלא אם כן אתה מטייל ראשון שפנה לתאריך ועדיין אין מטיילים אחרים שפנו לתאריך שלך, בתשלום תוספת של 200 דולר הסיור יהיה מובטח לך ולקבוצתך במידה ואתם מעל 4 אנשים.'
    },
    {
      question: 'האם אפשר לעצור לארוחה?',
      answer: 'בסיורים אני מתקדמת לפי קצב הקבוצה, אם יש בקשה לארוחה או כל שינוי אחר אני מאוד גמישה אך יש להיות ערוכים מראש, למשל: ארוחות צהרים הם מוגשות לרוב בין השעות 1-3 בצהריים בהתאם לשעות ארוחת הצהריים בעיר, הארוחה לא כלולה במחיר סיור.'
    },
    {
      question: 'אני מעוניין בליווי לקניות ולא בסיור, מה המחירים?',
      answer: 'הסיורים שלי הינם סיורי הדרכה ולא ליווי, אני נוהגת במקרים כאלו למסור את פרטי המטייל לקולגות שלי, במידה ולקוח מתעקש על שירותיי – יש לפנות אליי במייל להצעת מחיר.'
    },
    {
      question: 'אנו רוצים להתחיל את הסיור משעה 12 האם זה אומר שאנו נשלם תוספת מאחר והשעה הינה לאחר השעה 7 בערב?',
      answer: 'סיורי ערב הן בתוספת מחיר (כנהוג במומבאי), סיור שנגרר לשעה 8 אינו נחשב סיור ערב, במקרים ספציפיים אלו יש לפנות אליי מבעוד מועד להבנת תוספת המחיר.'
    },
    {
      question: 'במידה ולא סגרנו מראש על שעות נוספות אך מאחר ואנו רוצים להמשיך להכיר את העיר האם יש אפשרות להמשך סיור עד שעה מאוחרת?',
      answer: 'תוספת בשעות סיור הינה מקובלת המחיר לתוספת הינה 10 דולר לאדם לשעה או לחלק ממנה (לרכב ושעת הדרכה)'
    },
    {
      question: 'יש לנו מכנסי שורט קצרים לסיור – האם זה לבוש הולם?',
      answer: 'לבוש הולם בהודו הינו חולצה ארוכה המכסה את הבטן, את הכתפיים ומכנס המכסה את הרגליים עד לברכיים, חולצה או מכנס אשר לא צמודים כמו טייץ, במידה ואת לבושה אחרת אני אבקש ממך לפני התחלת סיור לרכוש צעיף אשר יכסה את האזורים המתבקשים למען בטחונך והרגשה נעימה בהליכה ברחוב.'
    },
    {
      question: 'בשדה התעופה פרטו לנו בשער אחר מהשער ששלום אינדיה המרה לנו את המחיר לרופי- מדוע?',
      answer: 'שער ההמרה שאני מתחייסת אליו על מנת להמיר את הדולר לרופי הינו שער המכירה של הדולר לפי בנק הודו ולא שער המלון או שדה התעופה.'
    },
    {
      question: 'זהו היום האחרון שלנו בהודו ולא נשאר לנו רופי – האם אפשר לשלם בדולר ויורו?',
      answer: 'התשלום המקובל הינו ברופי בלבד לפי שער המכירה היציג של הדולר מול הרופי.'
    },
    {
      question: 'זהו היום הראשון שלנו בהודו האם תוכלי לקחת אותנו להמיר את הדולרים?',
      answer: 'אני לא נוהגת לסטות מהמסלול על מנת שנוכל להספיק לראות ולחוות יותר, במידה ותרצו שאפרוט לכם דולרים, נא יידעו אותי מראש על מנת שאגיע לסיור עם הסכום המומר. דולר ישן משנת 2001 ומטה, כמו כן שטרות מתחת ל 100 לא יומרו בשער גבוה.'
    },
    {
      question: 'אנו מעוניינים בסיור אחר – מה האפשרויות?',
      answer: 'באמתחתי סיורים בהתאם לתחומי העניין שלכם, פנו אליי ונבנה סיור יחד.'
    },
    {
      question: 'הרכב והנהג לא לטעמינו, האם אפשר לעשות שינויים?',
      answer: 'החברה החיצונית הינה חברה מסודרת ועובדת עם תיירים אך יתכן מצב והרכב או הנהג העממי לא לטעמכם, אי אפשר לעשות שינויים במקרים כאלו לאחר הרכב הוזמן, יש לציין שמקרה כזה לא קרה לי מאחר ואני עובדת עם חברה הגונה בטוחה ואמינה.'
    },
    {
      question: 'מהן העונות לסיורים במומבאי?',
      answer: 'סיורים במומבאי הם החל מספטמבר/אוקטובר ועד מרץ/אפריל, סיורים בעונה החמה אפריל ומאי אפשריים בהחלט, במקרים כאלו אני ממליצה על סיורי בוקר או ערב וסיורים בעונה הגשומה לא ממעיטים מערך הטיול אלא מוסיפים להבנת התשתית ואורחות העיר.'
    },
    {
      question: 'יש לנו המתנה של מספר שעות במומבאי, האם יציאה לעיר לסיור מומלצת?',
      answer: 'במומבאי קיימים שתי שדות תעופה כך שעליכם לברר מבעוד מועד האם שדה התעופה שבו נחתתם הוא גם השדה שממנו תמריאו, לאחר הבנה זו עליכם לחשב שעה וחצי לשעתיים ליציאה ממחלקת דרכונים ועוד שעתיים המתנה לפני טיסת פנים, לעיתים טיסות בינלאומיות מאחרות כך שאם יש לכם יותר מ-5 שעות אתם יכולים לשקול לצאת לעיר. קחו לתשומת לבכם שנסיעה לכל כיוון לדרום העיר היא בין שעה ושעה וחצי.'
    },
    {
      question: 'אנו מטיילים במסגרת של סיור משותף עם מטיילים שאנו לא מכירים ולא שוהים באותו מלון, האם תבואי לאסוף אותנו או שעלינו להגיע עצמאית?',
      answer: 'אני נוהגת להגיע לאסוף מטיילים מהמלונות ולהחזיר אותם למלונות, בסיור משותף כל זמן שמלונות הינם בתחום דרום מומבאי או ליד שדה תעופה בצורה מרוכזת (המטיילים כולם בדרום מומבאי או המטיילים כולם ליד שדה התעופה) כלומר אני לא נאלצת לסטות מהמסלול (שדה תעופה באזור אנדהרי ועד דרום מומבאי) או להאריך את שעות השכרת הרכב אני אאסוף את כולם ואחזיר את כולם במסגרת סיור של 8 שעות אך אם חלק מהמטיילים נמצאים מחוץ למסלול תהיה תוספת של 10 דולר לאדם במקרה זה למחיר יום הסיור או שהמטייל יבחר באפשרות השנייה לא לשלם תוספת זו של 10 דולר ויגיע ליעד הראשון בכוחות עצמו וגם יחזור למלון בכוחות עצמו.'
    }
  ];

  const recommendedTours = [
    {
      name: 'סיורי דלהי',
      location: 'דלהי',
      frequency: 'יומי',
      duration: '8 שעות',
      withCar: true,
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'גלו את בירת הודו עם האתרים ההיסטוריים והמודרניים'
    },
    {
      name: 'סיורי בנגלור',
      location: 'בנגלור',
      frequency: 'יומי',
      duration: '6 שעות',
      withCar: true,
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'עיר הגנים ובירת הטכנולוגיה של הודו'
    },
    {
      name: 'סיורי גואה',
      location: 'גואה',
      frequency: 'יומי',
      duration: '7 שעות',
      withCar: true,
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      description: 'חופים טרופיים ותרבות פורטוגזית ייחודית'
    }
  ];

  return (
    <div className="min-h-screen fade-in" dir="rtl" lang="he">
      {/* ניווט */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 space-x-reverse text-sm">
            <button onClick={() => onPageChange('home')} className="text-blue-600 hover:text-blue-800 hebrew-text">בית</button>
            <span className="text-gray-400">←</span>
            <button onClick={() => onPageChange('day-tours')} className="text-blue-600 hover:text-blue-800 hebrew-text">סיורי יום</button>
            <span className="text-gray-400">←</span>
            <span className="text-blue-800 font-bold hebrew-text">מומבאי - סיור פרטי</span>
          </div>
        </div>
      </div>

      {/* באנר ראשי */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/mumbai gateway.jpg" 
            alt="גלו את מומבאי עם מלכה אירני"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 hebrew-text">
              גלו את מומבאי עם מלכה אירני
            </h1>
            <p className="text-2xl mb-8 leading-relaxed hebrew-text opacity-95">
              מדריכה ישראלית דוברת עברית
            </p>
            <p className="text-xl mb-12 leading-relaxed hebrew-text opacity-90 max-w-3xl">
              חוו את מומבאי האמיתית עם סיור פרטי בהדרכת מלכה אירני - מדריכה ישראלית שחיה במומבאי ומכירה כל פינה בעיר המדהימה הזו. קבלו תובנות אותנטיות והדרכה בעברית לאורך כל המסע.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowPayment(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                הזמינו את ההרפתקה במומבאי עכשיו
              </button>
              <button 
                onClick={() => onPageChange('contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                צרו קשר עם מלכה לסיורים מותאמים
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* סרטוני יוטיוב */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              צפו בסרטונים מהסיורים שלנו
            </h2>
            <p className="text-xl text-gray-600 hebrew-text max-w-3xl mx-auto">
              הכירו את מומבאי דרך העיניים של מלכה - סרטונים אמיתיים מהסיורים שלנו
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="relative">
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.videoId}${video.startTime ? `?start=${video.startTime}` : ''}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">{video.title}</h3>
                  <p className="text-gray-600 hebrew-text">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* מידע על הסיור */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              פרטי הסיור
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tourInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 hebrew-text">{info.label}</h3>
                <p className="text-lg font-semibold text-blue-600 hebrew-text">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* אתרי הסיור - 32 אתרים */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              32 אתרי הסיור במומבאי
            </h2>
            <p className="text-xl text-gray-600 hebrew-text max-w-3xl mx-auto">
              גלו את המקומות הכי מרתקים במומבאי עם הסיורים המודרכים הפרטיים שלנו. כל אתר מציע תובנות ייחודיות על התרבות והיסטוריה העשירה של העיר.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourSites.map((site, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <img 
                  src={site.image}
                  alt={site.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hebrew-text">{site.name}</h3>
                  <p className="text-gray-600 hebrew-text text-sm leading-relaxed mb-4">
                    {site.description}
                  </p>
                  <button 
                    onClick={() => setExpandedSite(expandedSite === index ? null : index)}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm hebrew-text flex items-center"
                  >
                    {expandedSite === index ? 'סגור פרטים' : 'למדו עוד'} 
                    {expandedSite === index ? <ChevronUp className="w-4 h-4 mr-2" /> : <ChevronDown className="w-4 h-4 mr-2" />}
                  </button>
                  
                  {expandedSite === index && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-gray-700 hebrew-text text-sm leading-relaxed">
                        {site.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* אפשרויות רכב */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              כלול רכב ונהג למשך 7-8 שעות
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              בחרו את הרכב המושלם לגודל הקבוצה שלכם ולהעדפות הנוחות
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicleOptions.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="text-6xl mb-4">{vehicle.icon}</div>
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1 space-x-reverse">
                    {[...Array(parseInt(vehicle.passengers.split('-')[1] || vehicle.passengers.replace('+', '')))].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">👤</span>
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hebrew-text">{vehicle.type}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-3 hebrew-text">{vehicle.passengers} נוסעים</p>
                <p className="text-gray-600 hebrew-text">{vehicle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* תוכנית סיור לדוגמה */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              תוכנית סיור בוקר לדוגמה
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              תוכנית סיור פרטי טיפוסית של 8 שעות (ניתנת להתאמה לפי העדפותיכם)
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-right font-semibold hebrew-text">שעה</th>
                    <th className="px-6 py-4 text-right font-semibold hebrew-text">פעילות</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleItinerary.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                      <td className="px-6 py-4 font-bold text-blue-600">{item.time}</td>
                      <td className="px-6 py-4 text-gray-800 hebrew-text">{item.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-yellow-50 border-t border-yellow-200">
              <p className="text-sm text-gray-700 hebrew-text">
                <strong>הערה:</strong> זוהי תוכנית לדוגמה. סיורים פרטיים ניתנים להתאמה מלאה לפי תחומי העניין וההעדפות שלכם.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* למה לבחור בנו */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              למה לבחור בסיורים שלנו במומבאי?
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              חוו את מומבאי עם מומחית מקומית שמבינה גם את התרבות הישראלית וגם את ההודית
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 hebrew-text">{item.title}</h3>
                <p className="text-gray-600 hebrew-text text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">סיורים פרטיים</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 hebrew-text">
                  <CheckCircle className="w-5 h-5 text-green-600 ml-3" />
                  כולל רכב ונהג פרטי
                </li>
                <li className="flex items-center text-gray-700 hebrew-text">
                  <CheckCircle className="w-5 h-5 text-green-600 ml-3" />
                  איסוף והורדה מהמלון
                </li>
                <li className="flex items-center text-gray-700 hebrew-text">
                  <CheckCircle className="w-5 h-5 text-green-600 ml-3" />
                  מסלול מותאם אישית
                </li>
                <li className="flex items-center text-gray-700 hebrew-text">
                  <CheckCircle className="w-5 h-5 text-green-600 ml-3" />
                  הדרכה בעברית
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">סיורים משותפים</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 hebrew-text">
                  <CheckCircle className="w-5 h-5 text-green-600 ml-3" />
                  המשתתף הראשון קובע את המסלול
                </li>
                <li className="flex items-center text-gray-700 hebrew-text">
                  <CheckCircle className="w-5 h-5 text-green-600 ml-3" />
                  קבוצות קטנות עד 10 אנשים
                </li>
                <li className="flex items-center text-gray-700 hebrew-text">
                  <CheckCircle className="w-5 h-5 text-green-600 ml-3" />
                  מחירים אטרקטיביים
                </li>
                <li className="flex items-center text-gray-700 hebrew-text">
                  <CheckCircle className="w-5 h-5 text-green-600 ml-3" />
                  הזדמנות להכיר מטיילים אחרים
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* גלריית תמונות */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              גלריית תמונות מהסיורים
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              תמונות אמיתיות מהסיורים שלנו במומבאי
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl cursor-pointer group transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={`https://images.pexels.com/photos/${index % 2 === 0 ? '3581368' : '1007426'}/pexels-photo-${index % 2 === 0 ? '3581368' : '1007426'}.jpeg`}
                  alt={`תמונה ${index} מהסיור`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* מידע על מפגש */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מידע על איסוף והורדה
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-text">נקודות איסוף</h3>
              <p className="text-gray-600 hebrew-text">איסוף מכל מלון בדרום מומבאי או ליד שדה התעופה</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-text">שעות איסוף</h3>
              <p className="text-gray-600 hebrew-text">בדרך כלל 06:00-07:00 בבוקר (ניתן לתיאום)</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-text">החזרה</h3>
              <p className="text-gray-600 hebrew-text">החזרה למלון או לשדה התעופה (בתוספת תשלום)</p>
            </div>
          </div>
        </div>
      </section>

      {/* המלצות */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מה אומרים המטיילים שלנו
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              חוויות אמיתיות של מטיילים ישראלים שגילו את מומבאי עם מלכה
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 hebrew-text mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-gray-900 hebrew-text">{testimonial.name}</div>
                  <div className="text-gray-600 hebrew-text text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* הודעה על מידע טיסות */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertTriangle className="w-8 h-8 text-yellow-600 ml-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">מידע חשוב על טיסות</h3>
              <p className="text-gray-800 hebrew-text leading-relaxed">
                מלכה מגיעה בטיסה, לכן המחירים תלויים בעלויות כרטיסי הטיסה ועלולים להשתנות. הזמנה מוקדמת מבטיחה יציבות מחירים וזמינות סיור. הסיורים פתוחים למטיילים נוספים ואינם פרטיים (חלה תוספת לסיור פרטי).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* שאלות ותשובות */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              שאלות ותשובות
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              כל מה שצריך לדעת על הסיורים במומבאי
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqItems.slice(0, 5).map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-right bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  >
                    <span className="font-bold text-gray-900 hebrew-text">{item.question}</span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 hebrew-text leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setShowFAQ(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hebrew-text"
            >
              צפו בכל השאלות והתשובות
            </button>
          </div>
        </div>
      </section>

      {/* תנאים והגבלות */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">תנאים והגבלות</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 hebrew-text">תקשורת</h4>
              <p className="text-gray-700 hebrew-text">באמצעות אימייל ווואטסאפ בלבד</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 hebrew-text">תמחור</h4>
              <p className="text-gray-700 hebrew-text">מחיר לאדם ליום סיור</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 hebrew-text">רכב ונהג</h4>
              <p className="text-gray-700 hebrew-text">זמינות של 8 שעות כלולה</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 hebrew-text">הסעות לשדה תעופה</h4>
              <p className="text-gray-700 hebrew-text">20 דולר לאדם לכל כיוון</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 hebrew-text">תשלום מקדמה</h4>
              <p className="text-gray-700 hebrew-text">200 דולר נדרשים (עלות טיסה לא מוחזרת)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 hebrew-text">קוד לבוש</h4>
              <p className="text-gray-700 hebrew-text">אכיפת קוד לבוש תרבותי</p>
            </div>
          </div>
        </div>
      </section>

      {/* טיולים מומלצים */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מומלץ - טיולים נוספים שעשויים לעניין אתכם
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              גלו יעדים נוספים בהודו עם מלכה
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendedTours.map((tour, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <img 
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">{tour.name}</h3>
                  <p className="text-gray-600 hebrew-text text-sm mb-4">{tour.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500 hebrew-text">מיקום:</span>
                      <span className="font-medium text-gray-900 hebrew-text">{tour.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 hebrew-text">תדירות:</span>
                      <span className="font-medium text-gray-900 hebrew-text">{tour.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 hebrew-text">משך:</span>
                      <span className="font-medium text-gray-900 hebrew-text">{tour.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 hebrew-text">כולל רכב:</span>
                      <span className="font-medium text-gray-900 hebrew-text">{tour.withCar ? 'כן' : 'לא'}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors hebrew-text">
                    למדו עוד
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* קריאה לפעולה סופית */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים לגלות את מומבאי?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            הזמינו את הסיור הפרטי שלכם במומבאי עוד היום וחוו את העיר כמו שמעולם לא חוויתם עם מלכה אירני
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowPayment(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hebrew-text"
            >
              <CreditCard className="w-5 h-5 inline ml-2" />
              תשלום מאובטח דרך PayPal
            </button>
            <button 
              onClick={() => onPageChange('contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hebrew-text"
            >
              בדקו זמינות ומחירים
            </button>
          </div>
        </div>
      </section>

      {/* מודל תשלום */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 hebrew-text">הזמנת סיור פרטי במומבאי</h2>
                <button 
                  onClick={() => setShowPayment(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* בחירת תאריך */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">תאריך הסיור</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* גודל קבוצה */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">מספר מטיילים</label>
                  <select
                    value={groupSize}
                    onChange={(e) => setGroupSize(parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {[...Array(15)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1} {i === 0 ? 'מטייל' : 'מטיילים'}</option>
                    ))}
                  </select>
                </div>

                {/* הצגת סוג רכב */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 hebrew-text">
                    <strong>סוג רכב:</strong> {getVehicleType()}
                  </p>
                </div>

                {/* סיכום מחירים */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium hebrew-text">מחיר בסיס לאדם:</span>
                    <span className="text-2xl font-bold text-blue-600">${calculatePrice()}</span>
                  </div>
                  {getPrivacySurcharge() > 0 && (
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium hebrew-text">תוספת פרטיות:</span>
                      <span className="text-2xl font-bold text-yellow-600">${getPrivacySurcharge()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="text-lg font-medium hebrew-text">סה"כ:</span>
                    <span className="text-2xl font-bold text-green-600">${(calculatePrice() * groupSize) + getPrivacySurcharge()}</span>
                  </div>
                </div>

                {/* טופס יצירת קשר */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">שם מלא</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">אימייל</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">טלפון</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">מלון במומבאי</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="שם המלון והאזור" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">העדפות מיוחדות</label>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg" rows={3} placeholder="אתרים ספציפיים שתרצו לבקר או שינויים בסיור"></textarea>
                  </div>
                </div>

                {/* כפתור תשלום */}
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors hebrew-text">
                    <CreditCard className="w-5 h-5 inline ml-2" />
                    המשך לתשלום PayPal
                  </button>
                  <p className="text-sm text-gray-600 text-center hebrew-text">
                    עיבוד תשלום מאובטח דרך PayPal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* מודל שאלות ותשובות */}
      {showFAQ && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 hebrew-text">שאלות ותשובות מלאות</h2>
                <button 
                  onClick={() => setShowFAQ(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <div className="p-4 bg-gray-50">
                      <h3 className="font-bold text-gray-900 hebrew-text">{item.question}</h3>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-gray-700 hebrew-text leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MumbaiPrivateTourPage;