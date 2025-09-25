import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Award, Shield, Globe, Heart, Car, Hotel, MessageCircle, FileText, CreditCard } from 'lucide-react';

interface OrganizedToursPageProps {
  onPageChange: (page: string) => void;
}

const OrganizedToursPage: React.FC<OrganizedToursPageProps> = ({ onPageChange }) => {
  const vehicles = [
    {
      name: 'רכב פרטי',
      capacity: '1-2 נוסעים',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      passengerCount: 2
    },
    {
      name: 'SUV',
      capacity: '3-4 נוסעים',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      passengerCount: 4
    },
    {
      name: 'מיניו ואן',
      capacity: '5-10 נוסעים',
      image: '/transport bus.png',
      passengerCount: 10
    },
    {
      name: 'אוטובוסים',
      capacity: 'קבוצות גדולות',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      passengerCount: 20
    }
  ];

  const suitableFor = [
    {
      icon: Users,
      title: 'משפחות עם ילדים',
      description: 'חוויות מותאמות למשפחות עם פעילויות לכל הגילאים'
    },
    {
      icon: Heart,
      title: 'קבוצות חברים',
      description: 'טיולים מהנים וחווייתיים לקבוצות חברים'
    },
    {
      icon: Globe,
      title: 'קבוצות פרטיות של 6–20 אנשים',
      description: 'טיולים מותאמים לקבוצות בגדלים שונים'
    },
    {
      icon: MessageCircle,
      title: 'מטיילים שרוצים חוויה אישית בעברית',
      description: 'הדרכה מקצועית בעברית עם הבנה תרבותית'
    }
  ];

  const services = [
    {
      icon: MapPin,
      title: 'בניית מסלול מותאם אישית',
      description: 'לפי הצרכים, התקציב והעדפות'
    },
    {
      icon: Hotel,
      title: 'תיאום מלונות',
      description: 'רק מקומות שנבדקו על ידי מלכה'
    },
    {
      icon: Car,
      title: 'שירותי רכב',
      description: 'רכבים פרטיים, מיניבוסים או אוטובוסים לקבוצות'
    },
    {
      icon: Users,
      title: 'מדריכה בעברית',
      description: 'אפשרות שמלכה תצטרף לטיול בכל נקודה בהודו'
    },
    {
      icon: Phone,
      title: 'סיוע שוטף',
      description: 'ליווי טלפוני ועזרה בכל בקשה'
    }
  ];

  const processSteps = [
    {
      number: 1,
      icon: MessageCircle,
      title: 'ייעוץ והבנת מחירי תכנון והפקה',
      description: 'יצירת קשר ראשוני להבנת הצרכים והתקציב'
    },
    {
      number: 2,
      icon: CreditCard,
      title: 'תשלום ראשוני להבטחת המשך תהליך',
      description: 'תשלום ראשוני להתחלת התהליך המקצועי'
    },
    {
      number: 3,
      icon: FileText,
      title: 'מסירת תוכנית טיול',
      description: 'לאחר שתוכנית הטיול תועבר בכתב, מתחילה הפקה בפועל של המסלול'
    },
    {
      number: 4,
      icon: Hotel,
      title: 'הצגת תמחור ומלונות',
      description: 'מלכה מספקת תמחור מפורט יחד עם רשימת המלונות שבהם היא בדקה והתנסתה, לרבות עלות רכבים ולפי בקשה גם מדריכים וכניסות לאתרים'
    },
    {
      number: 5,
      icon: CheckCircle,
      title: 'שינויים והתאמות',
      description: 'במידת הצורך, מבוצעים שינויים והתאמות עד לאישור הסופי של המטייל'
    },
    {
      number: 6,
      icon: Calendar,
      title: 'תשלום סופי והזמנות',
      description: 'לאחר אישור התוכנית הסופי, מתבצע תשלום מלא והזמנת החדרים, רכבים ושירותים נלווים'
    },
    {
      number: 7,
      icon: Shield,
      title: 'ליווי בהודו',
      description: 'במהלך הטיול, מתקיים ליווי יומי אישי והנכונות לסייע בכל בקשה או צורך שצץ במהלך המסע'
    }
  ];

  const uniqueAdvantages = [
    'מלכה חיה בהודו מעל 15 שנה',
    'ניסיון עשיר בהדרכת קבוצות ומשפחות ישראליות',
    'הבנה מלאה בצרכים ישראליים (כשרות, ילדים, נוחות)',
    'קשרים ישירים עם נהגים, מדריכים ומלונות – ללא מתווכים'
  ];

  const testimonials = [
    {
      name: 'תומר כנעני',
      location: 'קבוצת חברים של נהגי אגד',
      rating: 5,
      text: 'היינו קבוצה של 14 מטיילים והכל התנהל בצורה טובה במשך יומיים למדנו המון על מומבאי בפרט והודו בכלל יש לציין את הידע הרב של מלכה וצורת ההדרכה כולנו מודים לה מאוד על ההדרכה והשרות הנלווה.'
    },
    {
      name: 'קבוצת מנהלי ברמד העולמית',
      location: 'ספטמבר 2025',
      rating: 5,
      text: 'מלכה היא מהות ההצדקה לטיול מאורגן, למי שמתלבט אם לנסות להכיר את העיר לבד או במתכונת הזו. מלכה הכירה לנו את החיים המקומיים באופן הכי Hands-On שיכולה להיות. היא הצליחה להעביר לנו חוויה של האדם ההודי האמיתי. חוויה שלעולם לא תוכל ולא תעז לעשות בעצמך. נשארתי עם חוויה צרובה לכל החיים'
    },
    {
      name: 'צפריר גרינברג, צוות אל על',
      location: 'יולי 2018',
      rating: 5,
      text: 'ליום הסיור במומבאי, בדגש של \'טיול אחר\', אנחנו רוצים להמליץ בחום רב על מדריכה נהדרת. שמה מלכה אירני, ישראלית שנשואה להודי ומתגוררת בהודו שנים רבות. מלכה בעלת ידע רב על התרבות, ההיסטוריה והחיים בהודו. שולטת בשפה המקומית. בחרנו מספר אתרים לסיור במומבאי, מתוך רשימה ארוכה שמלכה הציעה. מלכה אספה אותנו מהמלון ברכב נוח ונעים, ובדרך שמענו את סיפור חייה המרתק. בקרנו בעיר באתרים שונים ומעניינים כגון, רציפי ששון, שכונת הסלאם ושכונת העדה הפרסית הזרתוסטרה (דת מונותאיסטית פרסית עתיקה). והכל תוך כדי אכפתיות, דאגה, מקצועיות, כריזמה, הפגנת ידע רב וחשיבה על כל פרט ופרט. אין ספק שבזכותה הסיור כאן הפך למיוחד, מעניין ומרתק. את יום הסיור העמוס, מלא הרשמים והחוויות סיימנו בארוחה מדהימה בביתם של מארחים נפלאים מהעדה הפרסית תוך כדי שמיעת פרטים וסיפורים על מנהגי העדה. ובקיצור יום סיור נפלא עם מלכה המקסימה, המרתקת והנהדרת שווה ומעניין. תודה ענקית צוות אלעל יולי 2018'
    },
    {
      name: 'דבורה אורן',
      location: 'טיול נשים - מרץ 2025',
      rating: 5,
      text: `הייתי במומבאי לא פעם… אהבתי אותה וחזרתי אליה שוב, הפעם עם קבוצת של חברות, במסגרת טיול מאורגן בדרום הודו, בתקווה ובחרדה שלא אאכזב, שמע הגזמתי בציפיות מהעיר… ושם, בבוקרו של יום פגשנו את מלכה בלובי של מלון "טאג' מהאל", ארמון מהמם בפני עצמו, כיאה לנסיכות מארץ הקודש, כדי לגלות את קסמיה של העיר "המשוגעת" הזאת… וזה אפשרי רק עם מי שמשוגעת על מומבאי. מלכה הובילה אותנו בעיר המהממת הזאת, בבטחה ובאהבה לעיר, בה חיה שנים ואותה מכירה על כל פניה… ולעיר הזאת פנים נסתרות ומסתוריות. מומבאי מחר כבר לא תהיה מומבאי של היום. מלכה הסירה בפנינו את מסך המסתורין וכולנו התאהבנו, גם בעיר וגם במלכה. חיינו וחווינו את העיר ולא שבעו… אם היה תלוי בנו, היינו נשארות ימים נוספים ומכתירות את מלכה כמלכת מומבאי. כי היא באמת מלכה👸 תודה מכל הלב בשם חברותי ובשמי❤️`
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/organised tours.png" 
            alt="סיורים בעברית לקבוצות בהודו"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              סיורים בעברית לקבוצות בהודו
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              טיולים מאורגנים מקצועיים לקבוצות עם הדרכה בעברית ותכנון מותאם אישית
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              צור קשר ל