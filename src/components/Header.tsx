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
      text: 'מלכה היא מהות ההצדקה לטיול מאורגן, למי שמתלבט אם לנסות להכיר את העיר לבד או במתכונת הזו. מלכה הכירה לנו את החיים המקומיים באופן הכי Hands-On שיכולה להיות. היא הצליחה לה