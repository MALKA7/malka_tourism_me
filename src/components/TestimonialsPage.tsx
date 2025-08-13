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
      name: 'אבי ומירי כהן',
      location: 'רמת גן',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: 'אוקטובר 2023',
      tour: 'שירותי הסעות',
      text: 'השירותי הסעות של מלכה הם ברמה הכי גבוהה! הנהגים מקצועיים, הרכבים נוחים ונקיים, והשירות אמין לחלוטין. נסענו איתם מבנגלור לגואה ובחזרה - הכל עבר חלק ובזמן. מלכה דאגה לכל הפרטים ואפילו התקשרה לוודא שהכל בסדר. שירות מעולה!',
      externalLink: 'https://www.google.com/review6',
      platform: 'Google Reviews',
      gradient: 'from-teal-100 to-cyan-100'
    },
    {
      id: 7,
      name: 'יוסי ורחל גולן',
      location: 'ירושלים',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: 'מרץ 2023',
      tour: 'חתונה הינדית מסורתית',
      text: 'מלכה ארגנה לנו חתונה הינדית מסורתית שהייתה פשוט קסומה! כל פרט היה מושלם - מהטקס המרגש ועד לחגיגה המדהימה. האורחים שלנו עדיין מדברים על החוויה הבלתי נשכחת. מלכה דאגה לכל הפרטים והטקס היה מרגש ואותנטי. תודה על החתונה של החלומות!',
      externalLink: 'https://www.facebook.com/review7',
      platform: 'Facebook',
      gradient: 'from-pink-100 to-rose-100'
    },
    {
      id: 8,
      name: 'משפחת אברהם',
      location: 'תל אביב',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: 'ינואר 2024',
      tour: 'טיול משפחתי מותאם לילדים',
      text: 'מלכה יצרה עבורנו טיול מושלם עם שלושת הילדים שלנו! היא ידעה בדיוק איך לעניין את הילדים ולגרום להם ליהנות מכל רגע. המלונות היו מתאימים למשפחות, הפעילויות מגוונות ומעניינות, והילדים למדו המון על התרבות ההודית. מלכה הפכה את הטיול למשפחתי לחוויה חינוכית ומהנה.',
      externalLink: 'https://www.tripadvisor.com/review8',
      platform: 'TripAdvisor',
      gradient: 'from-green-100 to-lime-100'
    },
    {
      id: 9,
      name: 'דני ושירה כהן',
      location: 'נתניה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: 'פברואר 2024',
      tour: 'חתונה על החוף בגואה',
      text: 'החתונה שלנו על החוף בגואה עם מלכה הייתה כמו מאגדה! השקיעה הרומנטית, הדקורציה הטרופית, והטקס המרגש - הכל היה מושלם. מלכה דאגה לכל פרט קטן והאורחים שלנו נהנו מכל רגע. התכנון המקצועי שלה גרם לכל להיות חלק ובלתי נשכח. תודה על החתונה של החלומות!',
      externalLink: 'https://www.google.com/review9',
      platform: 'Google Reviews',
      gradient: 'from-blue-100 to-cyan-100'
    },
    {
      id: 10,
      name: 'אורי ונועה לוי',
      location: 'חיפה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: 'נובמבר 2023',
      tour: 'טיול הירח דבש בקרלה',
      text: 'מלכה ארגנה לנו את טיול הירח דבש המושלם בקרלה! הבקתות על המים, השייט בתעלות, והעיסויים האיורוודיים - הכל היה רומנטי ומרגיע. מלכה הבינה בדיוק מה אנחנו מחפשים ויצרה עבורנו חוויה אינטימית ובלתי נשכחת. קרלה עם מלכה זה פשוט קסם!',
      externalLink: 'https://www.booking.com/review10',
      platform: 'Booking.com',
      gradient: 'from-purple-100 to-violet-100'
    },
    {
      id: 11,
      name: 'משה ורינה גרין',
      location: 'רמת גן',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: 'אוקטובר 2023',
      tour: 'טיול קולינרי במומבאי',
      text: 'כחובבי אוכל, חיפשנו חוויה קולינרית אותנטית בהודו. מלכה לקחה אותנו למקומות שרק מקומיים מכירים - דוכני רחוב מדהימים, מסעדות משפחתיות, ושווקי תבלינים ארומטיים. למדנו על המטבח ההודי, טעמנו מנות שלא ידענו שקיימות, והבנו את התרבות דרך האוכל. מלכה הפכה את מומבאי למסע קולינרי בלתי נשכח!',
      externalLink: 'https://www.yelp.com/review11',
      platform: 'Yelp',
      gradient: 'from-orange-100 to-amber-100'
    },
    {
      id: 12,
      name: 'עמית ותמר רוזן',
      location: 'הרצליה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: 'דצמבר 2023',
      tour: 'טיול צילום במומבאי',
      text: 'כצלמים מקצועיים, רצינו לתעד את הודו בצורה אותנטית. מלכה הובילה אותנו למקומות צילום מדהימים שרק היא מכירה - רחובות צבעוניים, שווקים סואנים, ופורטרטים של מקומיים. היא עזרה לנו ליצור קשר עם האנשים ולקבל את הרשותם לצילום. התמונות שצילמנו איתה הן הטובות ביותר מהטיול. מלכה הפכה את מומבאי לגלריה פתוחה!',
      externalLink: 'https://www.instagram.com/review12',
      platform: 'Instagram',
      gradient: 'from-indigo-100 to-purple-100'
    },
    {
      id: 13,
      name: 'שלומית ואבי דוד',
      location: 'באר שבע',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: 'ספטמבר 2023',
      tour: 'אירוח אישי בווילה',
      text: 'האירוח אצל מלכה בווילה הפרטית שלה היה חוויה מיוחדת ואותנטית! הרגשנו כמו בבית, האוכל היה טעים והאווירה משפחתית וחמה. מלכה וביהרם קיבלו אותנו בחום רב והראו לנו את הודו מזווית אחרת לגמרי. החיים הכפריים השקטים היו בדיוק מה שהיינו צריכים אחרי הטיול הסואן. זה היה הדבר הכי אותנטי בטיול!',
      externalLink: 'https://www.airbnb.com/review13',
      platform: 'Airbnb',
      gradient: 'from-emerald-100 to-teal-100'
    },
    {
      id: 14,
      name: 'רון ומיכל ברק',
      location: 'כפר סבא',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: 'מאי 2023',
      tour: 'טיול רוחני לוורנאסי',
      text: 'הטיול הרוחני לוורנאסי עם מלכה היה חוויה מעצבת! היא הובילה אותנו בעדינות דרך הטקסים הקדושים, הסבירה על המשמעויות הרוחניות, ועזרה לנו להבין את העומק של התרבות ההינדית. הטקס הערב על הגנגס היה מרגש עד דמעות. מלכה יודעת איך לגשת לנושאים רגישים בכבוד ובהבנה. חוויה רוחנית אמיתית!',
      externalLink: 'https://www.tripadvisor.com/review14',
      platform: 'TripAdvisor',
      gradient: 'from-violet-100 to-purple-100'
    },
    {
      id: 15,
      name: 'גיל ושירה מזרחי',
      location: 'פתח תקווה',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      rating: 5,
      date: 'יוני 2023',
      tour: 'טיול הרפתקאות בהימלאיה',
      text: 'הטיול להימלאיה עם מלכה היה הרפתקה של פעם בחיים! הטרקים בהרים, הנופים המרהיבים, והלינה בכפרים מקומיים - הכל היה מאורגן בצורה מושלמת. מלכה דאגה לכל הפרטים הלוגיסטיים ואפשרה לנו להתמקד בחוויה. הידע שלה על האזור והקשרים עם המקומיים עשו את כל ההבדל. הרפתקה בלתי נשכחת!',
      externalLink: 'https://www.google.com/review15',
      platform: 'Google Reviews',
      gradient: 'from-sky-100 to-blue-100'
    },
    {
      id: 16,
      name: 'אלון ודנה שפירא',
      location: 'רעננה',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      rating: 5,
      date: 'אוגוסט 2023',
      tour: 'טיול תרבותי לרג\'סטאן',
      text: 'הטיול לרג\'סטאן עם מלכה היה מסע בזמן! הארמונות המלכותיים, המדבר הצבעוני, והתרבות המקומית העשירה - הכל היה מרהיב. מלכה הכירה לנו משפחות מקומיות, ארגנה לנו לינה בהאוולי מסורתי, ולקחה אותנו לחוויות שרק היא יכולה לארגן. הידע שלה על ההיסטוריה והמסורות של רג\'סטאן הוא פשוט מדהים!',
      externalLink: 'https://www.booking.com/review16',
      platform: 'Booking.com',
      gradient: 'from-yellow-100 to-orange-100'
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