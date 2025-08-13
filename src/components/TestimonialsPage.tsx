import React, { useState } from 'react';
import { Star, Play, MapPin, Calendar, Users, Heart, Quote, Camera, Globe } from 'lucide-react';

interface TestimonialsPageProps {
  onPageChange: (page: string) => void;
}

const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onPageChange }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null);
  const [readTestimonials, setReadTestimonials] = useState<Set<number>>(new Set());

  const videoTestimonials = [
    {
      id: 1,
      thumbnail: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      title: 'משפחת כהן - טיול לקרלה',
      duration: '3:45',
      description: 'חוויה מדהימה עם מלכה בקרלה - הטיול של החלומות',
      customerName: 'משפחת כהן',
      location: 'תל אביב',
      tourType: 'טיול מאורגן לקרלה',
      date: 'מרץ 2024',
      groupSize: '4 אנשים'
    },
    {
      id: 2,
      thumbnail: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      title: 'דני ושרה - סיור במומבאי',
      duration: '2:30',
      description: 'סיור פרטי במומבאי שהיה בלתי נשכח',
      customerName: 'דני ושרה לוי',
      location: 'חיפה',
      tourType: 'סיור פרטי במומבאי',
      date: 'פברואר 2024',
      groupSize: '2 אנשים'
    },
    {
      id: 3,
      thumbnail: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      title: 'משפחת גולן - הודו בשלושה טעמים',
      duration: '4:12',
      description: 'טיול מאורגן מושלם עם הדרכה מקצועית',
      customerName: 'משפחת גולן',
      location: 'ירושלים',
      tourType: 'טיול מאורגן',
      date: 'ינואר 2024',
      groupSize: '6 אנשים'
    }
  ];

  const writtenTestimonials = [
    {
      id: 1,
      name: 'מורן מינה',
      location: 'חיפה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: 'ינואר 2025',
      tour: 'אמרנו לה שאנחנו רוצים עוד יום',
      text: 'מלכה חד משמעית עשתה לנו את הטיול במומבי! הגענו לעיר קצת מפוחדים מכל הסיפורים על ערים גדולות בהודו ופחדנו לאבד את עצמינו ולהיכנס לשוק. מלכה הנגישה לנו הכל בצורה הכי אותנטית ונחמדה שיש, עיצבה את הסיור לפי מה שרצינו וגם לחצה על דברים שחשבנו שפחות מעניינים והתגלו כמדהימים ושווים אפילו לשום ב-5 בבוקר. נהנו איתה כלכך שבסוף היום הראשון אמרנו לה שאנחנו רוצים עוד יום למרות שלא תיכננו! מומלצת בחום! מלכה המדריכה הכי טובה!',
      externalLink: 'https://www.lmt.co.il/example-link',
      platform: 'למטייל',
      gradient: 'from-purple-100 to-pink-100'
    },
    {
      id: 2,
      name: 'תומר כנעני',
      location: 'ישראל',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: '2019',
      tour: 'יש לציין את הידע הרב של מלכה וצורת ההדרכה',
      text: 'היינו קבוצה של 14 מטיילים והכל התנהל בצורה טובה במשך יומיים למדנו המון על מומבאי בפרט והודו בכלל יש לציין את הידע הרב של מלכה וצורת ההדרכה כולנו מודים לה מאוד על ההדרכה והשרות הנלווה',
      externalLink: 'https://www.google.com/review2',
      platform: 'Google Reviews',
      gradient: 'from-blue-100 to-indigo-100'
    },
    {
      id: 3,
      name: 'דולב פרץ',
      location: 'חיפה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: '2019',
      tour: 'הכל הרגיש איתה קליל כיפי ומאוד מקצועי',
      text: 'לקחנו את שירותיה של מלכה לטיול במומבאי ההחלטה לשכור את מלכה כמדריכה הייתה פשוט מושלמת ושדרגה את הטיול בכמה רמות! הכל הרגיש איתה קליל כיפי ומאוד מקצועי הרגיש שהיא ערה מאוד לאיך אנחנו מרגישים לגבי כל מקום ולפי זה פעלה, מלכה לקחה אותנו וסיפרה לנו על מקומות שבלעדיה לא היינו שומעים עליהם ובטח שלא היינו מגיעים לבקר בהם ונהנים מהמראות של מומבאי האמיתית',
      externalLink: 'https://www.facebook.com/review3',
      platform: 'Facebook',
      gradient: 'from-green-100 to-emerald-100'
    },
    {
      id: 4,
      name: 'ליאת כבירי',
      location: 'שמשית',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: '2019',
      tour: 'טיול בדרום הודו - קרלה עם מלכה אירני',
      text: 'שלום, מעוניינת לשתף אתכם בחוויה נהדרת שחוויתי (וזאת משום הבחירה הנכונה באדם הנכון- מלכה אירני). הנדון ארע במסגרת טיול נושא במדינת קרלה עם קבוצה אינטימית ומופלאה אשר אליה הגעתי במקרה (אבל כפי שאתם יודעים שום דבר אינו במקרה.). באמצעות קבוצה זו טיילתי בדרום הודו במדינת קרלה שבה מלכה אירני מתמחה. במאמר מוסגר חשוב לי לציין שמלכה הולכת ובודקת את כל המקומות אליה היא שולחת את מטייליה (לא להאמין איזו השקעה מבחינתה ודיוק עד לרמת הפרטים הקטנים ביותר - מקצוענות לשמה! ) הטיול כלל מלונות ברמה גבוהה, אך לא זה העיקר ולא זה מה שהשאיר רושם כי אם הידע הנרחב על המקום, עיבוד המידע והעברתו באופן ברור, מרתק, מהימן וכל כך מסקרן- הכל באווירה נפלאה, מכילה ומחבקת שגרמה לי להתרגשות חיובית, ידעתי מכל הנ"ל שאני בידיים טובות ושאני בידי אשת מקצוע שמכירה את השטח וגם קשובה לבקשותיי וצרכיי. לסיום- יש טיול בהודו לפני מלכה אירני ויש טיול בהודו אחרי מלכה אירני. זהו אחד מהטיולים הבלתי נשכחים! כל כך מוקירה ורק רוצה לומר - תודה לך מלכה אירני על חווית חושים מסעירה אשר שווה את כל ההשקעה',
      externalLink: 'https://www.booking.com/review4',
      platform: 'Booking.com',
      gradient: 'from-yellow-100 to-orange-100'
    },
    {
      id: 5,
      name: 'רבקה רענן',
      location: 'ישראל',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: '2014',
      tour: 'היא לא מדריכה רגילה, היא נותנת את כל הסיפורים ומשלבת גם את נקודת מבטם של ההודים',
      text: 'עם מלכה תאמתי כחודש לפני הגעתנו למומבאי (דבר חשוב ביותר כדי שתהיה זמינה) . טיילנו ארבע נשים בגילאים 50-79. מלכה פגשה אותנו בלובי המלון בו גרנו. אישה נעימה, לבבית ומלאת אור וליוותה אותנו במהלך יום שלם. מלכה חיה כבר מספר שנים בהודו, מה שמאפשר לה לתבל כל אתר ומקום בסיפורים נהדרים מחיי היומיום. היא לא מדריכה רגילה, היא נותנת את כל הסיפורים ומשלבת גם את נקודת מבטם של ההודים. מהר מאוד נדבקנו בהתלהבות שלה. מלכה מסתובבת במומבאי בחופשיות ובביטחה וגם אנחנו הסתובבנו איתה בבטחה ברחובות הסואנים של מומבאי, גם בשכונות העוני הקשות ביותר. מלכה הפכה עבורנו את מומבאי לחוויה בלתי נשכחת של סיפורים, צבעים ריחות וטעמים. ממליצה בחום רב לכל מי שרוצה לחוות מומבאי אחרת לקחת את מלכה',
      externalLink: 'https://www.tripadvisor.com/review5',
      platform: 'TripAdvisor',
      gradient: 'from-red-100 to-pink-100'
    },
    {
      id: 6,
      name: 'בתיה ומיכאל ויינר',
      location: 'ישראל',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: 'אוקטובר 2018',
      tour: 'תודה למלכה על הכול - על המקצועיות שלה ועל הלב זהב',
      text: 'מי 25.10.18 עד 04.11.18 אנחנו הינו בהודו. תודה ענקית למלכה אירני, על ארגון של הטיול שלנו. תודה על הלב ונשמה שהיא נתנה למשפחה שלנו. בגלל מלכה אנחנו ראינו הודו מזוית הכי יפה שאפשר. בכול מקום היה לנו נהג ורכב צמוד ומדריכים מעולים. אנחנו קבלנו תוכנית של הטיול מדויק ומענין עם המלצות ברורות. במשך כול הטיול אנחנו קבלנו עזרה והסבר בכול השאילות. תמיד היה לנו למי לפנות. ראינו את הודו כי מדינה יפה, מאוד מענינת ושונה ממקום למקום: דלהי, בנגלור, קוצ\'ן, טקאדי, אלפי. אנחנו כבר חולמים לחזור עוד פעם להודו ולעבור שוב את החויה. תודה למלכה על הכול - על המקצועיות שלה ועל הלב זהב. בתיה ו מיכאל',
      externalLink: 'https://www.google.com/review6',
      platform: 'Google Reviews',
      gradient: 'from-teal-100 to-cyan-100'
    },
    {
      id: 7,
      name: 'צפריר גרינברג',
      location: 'ישראל',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: 'יולי 2018',
      tour: 'הכל תוך כדי אכפתיות, דאגה, מקצועיות, כריזמה, הפגנת ידע רב וחשיבה על כל פרט ופרט.',
      text: 'ליום הסיור במומבאי, בדגש של "טיול אחר", אנחנו רוצים להמליץ בחום רב על מדריכה נהדרת. שמה מלכה אירני, ישראלית שנשואה להודי ומתגוררת בהודו שנים רבות. מלכה בעלת ידע רב על התרבות, ההיסטוריה והחיים בהודו. שולטת בשפה המקומית. בחרנו מספר אתרים לסיור במומבאי, מתוך רשימה ארוכה שמלכה הציעה. מלכה אספה אותנו מהמלון ברכב נוח ונעים, ובדרך שמענו את סיפור חייה המרתק. בקרנו בעיר באתרים שונים ומעניינים כגון, רציפי ששון, שכונת הסלאם ושכונת העדה הפרסית הזרתוסטרה (דת מונותאיסטית פרסית עתיקה). והכל תוך כדי אכפתיות, דאגה, מקצועיות, כריזמה, הפגנת ידע רב וחשיבה על כל פרט ופרט. אין ספק שבזכותה הסיור כאן הפך למיוחד, מעניין ומרתק. את יום הסיור העמוס, מלא הרשמים והחוויות סיימנו בארוחה מדהימה בביתם של מארחים נפלאים מהעדה הפרסית תוך כדי שמיעת פרטים וסיפורים על מנהגי העדה. ובקיצור יום סיור נפלא עם מלכה המקסימה, המרתקת והנהדרת שווה ומעניין. תודה ענקית צוות אלעל יולי 2018',
      externalLink: 'https://www.facebook.com/review7',
      platform: 'Facebook',
      gradient: 'from-pink-100 to-rose-100'
    },
    {
      id: 8,
      name: 'נילי להב',
      location: 'ישראל',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: '2014',
      tour: 'ללא עצותיה של מלכה, לא הייתי מגיעה לרמה כזאת של טיול.',
      text: 'אין לי מילים לתאר את טוב הלב, המקצועיות, הסבלנות והנתינה הרבה של מלכה. למרות שלא התאפשר מבחינת הלו"ז לצאת לסיורים עם מלכה, לקחה מלכה אחראיות על הטיול הראשון שלי בהודו שהוא מבחינתי, הגשמת חלום. מלכה הקדישה שעות רבות לתכנון מסלול מעניין ומהנה, במינימום ימים שעמדו לרשותנו. יצרה קשר עם חברות תעופה להזמנת טיסות פנים ועם נהג שילווה אותנו. מיותר לציין כי היה זה מסע מדהים, מגוון ומרתק. ללא עצותיה של מלכה, לא הייתי מגיעה לרמה כזאת של טיול. חלומי התגשם! תודה לך מלכה יקרה!',
      externalLink: 'https://www.tripadvisor.com/review8',
      platform: 'TripAdvisor',
      gradient: 'from-green-100 to-lime-100'
    },
    {
      id: 9,
      name: 'אפרת רפפורט',
      location: 'ישראל',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: '2015',
      tour: 'היא גם יודעת לתקשר עם כל אחד בכישרון רב - קטן, גדול, עשיר ועני - וכולם משתפים איתה פעולה ומזמינים אותה לעולם שלהם. בזכות הכישרון הזה, זכיתי לכמה חוויות יוצאות דופן',
      text: 'עצרתי במומבאי בדרך חזרה מנסיעת עסקים מוקדם יותר החודש. היה לי יום אחד שלם עד לטיסה והיה לי חשוב להספיק ולראות את העיר - בחרתי במלכה אחרי שקראתי כמה ביקורות כאן באתר למטייל. אחרי היום הזה, אני שמחה להצטרף להמלצות החמות. מומבאי היא עיר מדהימה. אני משוכנעת שהיה לי קשה יותר להבין את זה בלי מלכה. מלכה לא רק מדברת את השפה המקומית, היא גם יודעת לתקשר עם כל אחד בכישרון רב - קטן, גדול, עשיר ועני - וכולם משתפים איתה פעולה ומזמינים אותה לעולם שלהם. בזכות הכישרון הזה, זכיתי לכמה חוויות יוצאות דופן. למשל, בזמן שצפינו בתופעת שליחי ארוחת הצהריים המדהימה (Dabbawala), אחד מהשליחים הזמין אותנו לחלק איתו ארוחות צהריים ברחבי העיר, וחשף אותי לצד אחר לגמרי של החיים במומבאי. החוייה הזו הייתה אותנטית לחלוטין וקרתה בספונטיות בגלל שמלכה התעניינה בו ובחיים שלו. החוויה הזו מצטרפת לשורה ארוכה של חוויות: מנסיעת רכבת צפופה (חוויה בלתי נשכחת), דרך סיור בסמטאות של הסלאם דהראבי, שווקים צבעוניים ועוד. מלכה מכירה כל פינה בעיר, מפגינה ידע רב, ובקלילות רבה יוזמת שיחות עם עוברי אורח כדי לשמוע את דעתם. יש במלכה את הגמישות להתאים את התכנית של הסיור לאדם ולתחומי העניין שלו. כך למשל, היא שינתה את מקום ארוחת הצהריים כי היא החליטה שאני לא נמצאת בהודו מספיק זמן כדי לשרוד את המקום המקורי עליו חשבה :) . היא התמקחה עבורי בשוק, ודאגה להפסקת קפה כשהייתי צריכה כזו. הסיור היה אידיאלי - הייתי מאחלת סיור היכרות כזה לכל אחד שמגיע למומבאי בפעם הראשונה. מלכה ידעה שאני מסתובבת בהודו לבדי מספר ימים לפני פגישתנו והייתה זמינה לכל שאלה ובעיה - האם מסוכן לעשות כך וכך, איך כדאי להעביר כמה שעות עד נסיעה וכן הלאה. המלצה חמה',
      externalLink: 'https://www.google.com/review9',
      platform: 'Google Reviews',
      gradient: 'from-blue-100 to-cyan-100'
    },
    {
      id: 10,
      name: 'אדם מגן',
      location: 'שוהם',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: '2016',
      tour: 'מלכה לא דילגה עם אף פרט בתכנון ובהתאמת הסיור לטעמי האישי – אתרי יעד, הסעות, מגוון החוויות, קצב הסיור, אוכל, זמנים, קניות, קבוצתי או אישי, רכב צמוד או לא; שום דבר לא הושאר לספק',
      text: 'ממליץ בחום רב על מלכה אירני לסיור מודרך בעיר מומבאי. כאשר יצרתי קשר עם מלכה מיד הבנתי שיש כאן ערך מוסף; מעבר ליתרון של סיור בשפה העברית (ניתן לערוך אותו גם באנגלית), מלכה לא דילגה עם אף פרט בתכנון ובהתאמת הסיור לטעמי האישי – אתרי יעד, הסעות, מגוון החוויות, קצב הסיור, אוכל, זמנים, קניות, קבוצתי או אישי, רכב צמוד או לא; שום דבר לא הושאר לספק וכך יצאנו ליום מדהים בעיר מדהימה. הסיור כלל מראות, קולות, ריחות, צבעים ותנועה המשולבים בסיפורים על מיתולוגיה, על ההתפתחות ההיסטורית של העיר ועל התרבות העכשווית. גם במהלך הסיור מלכה הפגינה גמישות רבה וערכנו התאמות עפ"י הצורך, עפ"י הקצב ועפ"י מצב הרוח. כך שהחוויה הייתה מלאה ושלמה. כיף גדול ותודה גדולה לשלום-מומבאי ולמלכה בפרט על חוויה נפלאה ובלתי נשכחת… עם טעם של עוד.',
      externalLink: 'https://www.google.com/review17',
      platform: 'Google Reviews',
      gradient: 'from-slate-100 to-gray-100'
    },
    {
      id: 11,
      name: 'שמחה עובדיה',
      location: 'ישראל',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: '2017',
      tour: 'למי שמחפש את החוויה ההודית הביתית, השונה ולא מוכרת למטייל הישראלי הממוצע – מוזמן להתארח אצל מלכה בבנגלור.',
      text: 'אני אישה בת 72 המטיילת בגפי. יצרתי קשר עם מלכה כדי להגיע לביתה שבבנגלור, וברגע שמלכה הבינה שיש לי בעיה – היא שינסָה מותניים ועזרה לי בהכול, עוד לפני שהייתי אורחת שלה. היא סייעה לי בסידור טיסות, מציאת מקום לינה במומבאי, הדריכה אותי היכן לטייל, ארגנה עבורי מוניות, ואף פגשה אותי במומבאי וליוותה אותי לביתה בבנגלור. חשוב לציין שמלכה כבר אינה גרה במתחם הקודם אלא עברה לדירה במתחם חדש ומרהיב, עם מתקנים ברמה של מלון 5 כוכבים והרגשה של חו"ל. כשהגעתי הופתעתי לגלות עולם אחר בהודו – חוויתי את אורח חייהם של הודים אמידים ונהניתי מכל רגע. החדר היה מסודר, נקי, עם מקלחת ושירותים מערביים פרטיים, מים חמים, מאוורר תקרה, חלון גדול לנוף המתחם, ומיטה זוגית נוחה. מלכה ומשפחתה קיבלו אותי בחום מהשנייה הראשונה – שיחקתי עם ילדיה, אכלתי עימם והרגשתי ממש כבת בית. למי שמחפש חוויה הודית ביתית ואותנטית, אך שונה מזו של רוב המטיילים הישראלים – האירוח אצל מלכה בבנגלור מומלץ מכל הלב. בנוסף, מלכה מציעה כיום גם סיורים מודרכים בעברית בבנגלור וניתן לפנות אליה בכל עניין.',
      externalLink: 'https://www.google.com/review18',
      platform: 'Google Reviews',
      gradient: 'from-indigo-100 to-blue-100'
    },
    {
      id: 12,
      name: 'אביה להב',
      location: 'ישראל',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: '2017',
      tour: 'החוויה שלי אצל מלכה הייתה נעימה ומרתקת, נהניתי מכל רגע במחיצת משפחתה וילדיה.',
      text: 'ממליץ בחום רב על מלכה אירני לסיור מודרך בעיר מומבאי. לכל המגיעים לבנגלור, רציתי להמליץ על אירוח נהדר וחוויות שנחרטו בליבי. האירוח הינו בבית משולב, של ישראלית הנשואה להודי, ולהם שני ילדים מקסימים המנעימים את הזמן לכל אורח בבית. בית מפנק, והחדר גדול וכולל שירותים ומקלחת. אשת המשפחה, מלכה איראני, הינה מדריכת טיולים בעצמה, ועורכת סיורים באזור וכן בעיר הגדולה – מומבאי. החוויה שלי אצל מלכה הייתה נעימה ומרתקת, נהניתי מכל רגע במחיצת משפחתה וילדיה. ממליץ בחום לכל אורח להגיע ולחוות את הודו דרכה. מומלץ בעיקר לאנשים שרוצים להתפנק ולהכיר את הודו קצת אחרת. הבית נמצא במתחם מאובזר ונעים, הכולל גנים מטופחים, חדר כושר, ספא וגני משחקים לילדים. כלל המתחם סגור ומיועד למבקרי המקום. השהות בבית נעימה וכוללת את כל מה שהמבקר באזור צריך כדי להיות באווירה שקטה ונינוחה.',
      externalLink: 'https://www.google.com/review19',
      platform: 'Google Reviews',
      gradient: 'from-emerald-100 to-teal-100'
    },
    {
      id: 13,
      name: 'עידו שחר',
      location: 'אוניברסיטת חיפה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: 'דצמבר 2015',
      tour: 'מלכה – מדריכת טיולים ממין אחר',
      text: 'אני מבקש להמליץ בחום על גב\' מלכה איראני – "מדריכת טיולים ממין אחר". מלכה היא ישראלית שהתגוררה במומבאי מספר שנים, נשואה לבן זוג הודי ומגדלת בעיר את ילדה. למלכה יש היכרות עמוקה עם העיר והסביבה; השהות עימה לא רק מהנה ומעשירה, אלא גם חושפת בפני המטייל את הרבדים התרבותיים, החברתיים וההיסטוריים של העיר הלכה למעשה ובהקשרם הרחב. בניגוד למדריכי טיולים רבים שיצא לי לפגוש במהלך השנים, מלכה אינה מתמקדת אך ורק ב"מקומות חובה", אלא שמה דגש על התאמה אישית לצורכי המטייל, ובכך מגבירה את ההנאה מהחוויה. היא מביאה שילוב נדיר בין מקצועיות, רגישות, סבלנות ואהבת אדם, ויוצרת קשר אנושי אמיתי הן עם המקומיים והן עם המטיילים עצמם. במהלך יומיים בהם שהיתי במומבאי, ניצלתי את ההזדמנות להצטרף לסיור בהדרכתה. התרשמתי מאוד מהידע הרחב שלה על ההיסטוריה, התרבות, הכלכלה והחברה המקומית, מהשילוב בין אתרים מוכרים לבין פינות חבויות, ומהיכולת שלה להתאים את המסלול גם תוך כדי תנועה בהתאם לקצב הקבוצה ולתחומי העניין שעלו. מלכה אף ידעה להוביל אותנו למקומות מיוחדים שאיפשרו לנו לפגוש את "הודו" האותנטית, אך מבלי להתרחק יתר על המידה. אני ממליץ בחום לכל מי שמגיע למומבאי לא לוותר על ההזדמנות להצטרף לחוויה הייחודית של סיור בעיר בהדרכתה של מלכה.',
      externalLink: 'https://www.google.com/review20',
      platform: 'Google Reviews',
      gradient: 'from-cyan-100 to-blue-100'
    },
    {
      id: 14,
      name: 'ניסים רוהקר, רוני אהרון וחנניה אטדגי',
      location: 'ישראל',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: '2015',
      tour: 'את פשוט תותחית בכל הקשור להודו',
      text: 'מלכה שלום, תודה על הכל, היה מאוד כיף הטיול לדלהי שסגרת לי ולחברים שלי. היינו שמחים ומרוצים מכל הבחינות – ידע, אמינות, יושר ומקצועיות. אני ממליץ בחום לכל המטיילים והמעוניינים. את פשוט תותחית בכל הקשור להודו. תמשיכי ותצליחי בכל מעשי ידייך.',
      externalLink: 'https://www.google.com/review21',
      platform: 'Google Reviews',
      gradient: 'from-orange-100 to-red-100'
    }
  ];

  const handleTestimonialClick = (testimonialId: number) => {
    setReadTestimonials(prev => new Set(prev).add(testimonialId));
    setActiveTestimonial(activeTestimonial === testimonialId ? null : testimonialId);
  };

  const statistics = [
    { number: '500+', label: 'לקוחות מרוצים', icon: Users },
    { number: '15', label: 'שנות ניסיון', icon: Calendar },
    { number: '98%', label: 'שביעות רצון', icon: Heart },
    { number: '50+', label: 'יעדים בהודו', icon: MapPin }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 hebrew-text">
            המלצות מלקוחות
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto hebrew-text leading-relaxed">
            גלו מה אומרים ישראלים שחוו את הודו עם מלכה אירני - המדריכה הישראלית המנוסה
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <p className="text-gray-600 hebrew-text font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              המלצות וידאו
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              צפו בחוויות אמיתיות של ישראלים שטיילו בהודו עם מלכה
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button 
                      onClick={() => setSelectedVideo(video.id.toString())}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                    >
                      <Play className="w-8 h-8 text-blue-600 mr-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">{video.title}</h3>
                  <p className="text-gray-600 hebrew-text mb-4">{video.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 ml-2" />
                      <span className="hebrew-text">{video.customerName}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 ml-2" />
                      <span className="hebrew-text">{video.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 ml-2" />
                      <span className="hebrew-text">{video.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 ml-2" />
                      <span className="hebrew-text">{video.tourType}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              המלצות כתובות
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              קראו על החוויות המדהימות של לקוחותינו
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {writtenTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                onClick={() => handleTestimonialClick(testimonial.id)}
                className={`rounded-xl shadow-lg p-8 border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer bg-gradient-to-br ${
                  readTestimonials.has(testimonial.id) 
                    ? 'from-blue-200 to-purple-200 border-blue-500' 
                    : testimonial.gradient
                } ${
                  activeTestimonial === testimonial.id 
                    ? 'border-blue-500 shadow-2xl' 
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
                  />
                  <div className="mr-4">
                    <h3 className="font-bold text-gray-900 hebrew-text">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm hebrew-text">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 space-y-2">
                  <div className="bg-blue-50 px-3 py-2 rounded-lg">
                    <div className="flex items-center text-sm text-blue-800">
                      <Globe className="w-4 h-4 ml-2" />
                      <span className="hebrew-text font-medium">{testimonial.tour}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 ml-1" />
                      <span className="hebrew-text">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 hebrew-text leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href={testimonial.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium hebrew-text transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    צפו בהמלצה ב{testimonial.platform} ←
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים לחוויה בלתי נשכחת בהודו?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            הצטרפו למאות הישראלים שכבר חוו את הודו עם מלכה אירני - 
            המדריכה הישראלית המנוסה והמקצועית
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              צרו קשר עם מלכה
            </button>
            <a 
              href="https://wa.me/919980601979"
              className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold hebrew-text">וידאו המלצה</h3>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 hebrew-text">כאן יוצג הווידאו</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;