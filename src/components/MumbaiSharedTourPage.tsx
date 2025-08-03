import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, CreditCard, Info, AlertTriangle, DollarSign } from 'lucide-react';

interface MumbaiSharedTourPageProps {
  onPageChange: (page: string) => void;
}

const MumbaiSharedTourPage: React.FC<MumbaiSharedTourPageProps> = ({ onPageChange }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [groupSize, setGroupSize] = useState(10);
  const [showPayment, setShowPayment] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [selectedTourDate, setSelectedTourDate] = useState<string | null>(null);

  const calculatePrice = () => {
    if (groupSize >= 10) return 150;
    if (groupSize === 9) return 170;
    if (groupSize === 8) return 190;
    return 200; // Default for smaller groups
  };

  const getVehicleType = () => {
    if (groupSize <= 2) return 'Private Car';
    if (groupSize <= 4) return 'Toyota Innova';
    return 'Tempo Traveler/Urbania';
  };

  const tourDates = [
    { 
      date: '15 במרץ 2024', 
      status: 'פעיל', 
      seatsLeft: 3, 
      totalSeats: 10, 
      price: 150,
      dayOfWeek: 'יום שישי'
    },
    { 
      date: '22 במרץ 2024', 
      status: 'פעיל', 
      seatsLeft: 7, 
      totalSeats: 10, 
      price: 150,
      dayOfWeek: 'יום שישי'
    },
    { 
      date: '29 במרץ 2024', 
      status: 'מלא', 
      seatsLeft: 0, 
      totalSeats: 10, 
      price: 150,
      dayOfWeek: 'יום שישי'
    },
    { 
      date: '5 באפריל 2024', 
      status: 'פעיל', 
      seatsLeft: 5, 
      totalSeats: 10, 
      price: 150,
      dayOfWeek: 'יום שישי'
    },
    { 
      date: '12 באפריל 2024', 
      status: 'פעיל', 
      seatsLeft: 2, 
      totalSeats: 10, 
      price: 170,
      dayOfWeek: 'יום שישי'
    },
    { 
      date: '19 באפריל 2024', 
      status: 'פעיל', 
      seatsLeft: 8, 
      totalSeats: 10, 
      price: 150,
      dayOfWeek: 'יום שישי'
    },
    { 
      date: '26 באפריל 2024', 
      status: 'מלא', 
      seatsLeft: 0, 
      totalSeats: 10, 
      price: 150,
      dayOfWeek: 'יום שישי'
    },
    { 
      date: '3 במאי 2024', 
      status: 'פעיל', 
      seatsLeft: 6, 
      totalSeats: 10, 
      price: 150,
      dayOfWeek: 'יום שישי'
    },
    { 
      date: '10 במאי 2024', 
      status: 'פעיל', 
      seatsLeft: 4, 
      totalSeats: 10, 
      price: 150,
      dayOfWeek: 'יום שישי'
    }
  ];

  const tourItinerary = [
    { time: '06:00', activity: 'איסוף מהמלון' },
    { time: '06:30', activity: 'רציפי ששון - נמל היסטורי' },
    { time: '08:00', activity: 'סלאם דהרבי - סיור מודרך' },
    { time: '10:00', activity: 'שליחי מזון - תופעה ייחודית' },
    { time: '11:30', activity: 'שער הכניסה להודו ומלון טאג\'' },
    { time: '13:00', activity: 'ארוחת צהריים מקומית' },
    { time: '14:30', activity: 'מקדש מהלקשמי ושוק קרופורד' },
    { time: '16:00', activity: 'חוף מרין דרייב' },
    { time: '17:00', activity: 'החזרה למלון' }
  ];

  const faqItems = [
    {
      question: 'הסיור חרג מעל 8 שעות, כמה עלי לשלם תוספת?',
      answer: 'במידה וחורגים יש לשלם לפי שעה או חלק ממנה מחיר של 20 דולר לאדם ללא תלות בסוג רכב.'
    },
    {
      question: 'האם החזרה לשדה תעופה כלולה במחיר?',
      answer: 'הסיורים הינם מאיסוף מהמלון ועד החזרה למלון. במידה ועליכם להגיע לשדה התעופה ישנה תוספת של 20 דולר לאדם.'
    },
    {
      question: 'איך אפשר להבטיח סיור פרטי?',
      answer: 'בתשלום תוספת של 200 דולר הסיור יהיה מובטח לך ולקבוצתך במידה ואתם מעל 4 אנשים.'
    },
    {
      question: 'מהן העונות לסיורים במומבאי?',
      answer: 'סיורים במומבאי הם החל מספטמבר/אוקטובר ועד מרץ/אפריל. סיורים בעונה החמה אפשריים בהחלט.'
    },
    {
      question: 'מה הלבוש המתאים לסיור?',
      answer: 'לבוש הולם בהודו הינו חולצה ארוכה המכסה את הבטן ואת הכתפיים ומכנס המכסה את הרגליים עד לברכיים.'
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/mumbai gateway.jpg" 
            alt="סיור משותף במומבאי"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              סיור משותף במומבאי
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              הצטרפו לסיור קבוצתי מודרך במומבאי עם מלכה - המדריכה הישראלית המנוסה. 
              סיור של 8 שעות עם תחבורה נוחה וכניסות לאתרים
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowPayment(true)}
                className="btn-primary text-lg px-8 py-4"
              >
                הזמינו עכשיו
              </button>
              <button 
                onClick={() => setShowFAQ(true)}
                className="btn-secondary text-lg px-8 py-4"
              >
                שאלות ותשובות
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <button onClick={() => onPageChange('home')} className="breadcrumb-item">בית</button>
            <span className="breadcrumb-separator">←</span>
            <button onClick={() => onPageChange('city-tours')} className="breadcrumb-item">סיורי ערים</button>
            <span className="breadcrumb-separator">←</span>
            <span className="text-blue-600 font-bold">סיור משותף במומבאי</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 hebrew-text">
                  הכר את מומבאי הפרטית - סיור משותף
                </h2>
                
                <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-200">
                  <div className="flex items-start">
                    <div className="text-4xl ml-4">
                      <Users className="w-12 h-12 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                        סיור מודרך מלא (8 שעות) במומבאי, נאווי מומבאי, ת'אנה והסביבה – 
                        עם מדריכה ישראלית מקצועית ודוברת עברית.
                      </p>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                        <strong>מלכה מדריכה לאחר שחיה בהודו ובזמן שהיא עדיין כאן ומעודכנת על המדינה.</strong> 
                        הסיור כולל תחבורה נוחה, כניסות לאתרים והדרכה מקיפה.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  מה כולל הסיור המשותף?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">תחבורה נוחה</h4>
                      <p className="text-gray-700 hebrew-text">רכב מוזמן עם נהג מקצועי לכל משך הסיור</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">כניסות לאתרים</h4>
                      <p className="text-gray-700 hebrew-text">כל דמי הכניסה לאתרים והמוזיאונים כלולים במחיר</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">הדרכה מקיפה</h4>
                      <p className="text-gray-700 hebrew-text">הדרכה מקצועית בעברית עם הסברים מפורטים על ההיסטוריה והתרבות</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 hebrew-text">קבוצה קטנה</h4>
                      <p className="text-gray-700 hebrew-text">עד 10 משתתפים לחוויה אישית יותר</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  מחירי הסיור המשותף
                </h3>

                <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">$150</div>
                      <div className="text-gray-700 hebrew-text font-medium">10 משתתפים</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$170</div>
                      <div className="text-gray-700 hebrew-text font-medium">9 משתתפים</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-purple-600 mb-2">$190</div>
                      <div className="text-gray-700 hebrew-text font-medium">8 משתתפים</div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-700 hebrew-text">
                      המחירים תלויים במחירי כרטיסי טיסה מאחר ומלכה מגיעה בטיסה
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
                <div className="text-center mb-6">
                  <img 
                    src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" 
                    alt="מלכה"
                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 hebrew-text">מלכה איראני</h3>
                  <p className="text-gray-700 hebrew-text">מדריכה ישראלית בהודו</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600 ml-3" />
                    <span className="text-gray-800">+91-9980601979</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600 ml-3" />
                    <span className="text-gray-800">Malka@shalom-india.com</span>
                  </div>
                  <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 ml-3 mt-1" />
                    <span className="text-gray-800">מומבאי, הודו</span>
                  </div>
                </div>

                <button 
                  onClick={() => setShowPayment(true)}
                  className="w-full btn-primary py-4 text-lg"
                >
                  הזמינו סיור משותף
                </button>
              </div>

              {/* Vehicle Types */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text text-center">סוגי רכבים</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">רכב פרטי</span>
                      <Car className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">עד 2 אנשים</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">Toyota Innova</span>
                      <Car className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">3-4 אנשים</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">Tempo Traveler</span>
                      <Car className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">5+ אנשים</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Availability Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              תאריכי סיורים זמינים
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">בחרו את התאריך המתאים לכם</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourDates.map((tour, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg p-6 border-2 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedTourDate === tour.date 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300'
                } ${tour.status === 'מלא' ? 'opacity-60' : ''}`}
                onClick={() => tour.status === 'פעיל' && setSelectedTourDate(tour.date)}
              >
                {/* Date and Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 text-blue-600 ml-3" />
                    <div>
                      <div className="font-bold text-gray-900 hebrew-text">{tour.date}</div>
                      <div className="text-sm text-gray-600 hebrew-text">{tour.dayOfWeek}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    tour.status === 'פעיל' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {tour.status}
                  </div>
                </div>

                {/* Seats Available */}
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-purple-600 ml-3" />
                  <div className="flex items-center">
                    {[...Array(tour.totalSeats)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-4 h-4 rounded-full mx-1 ${
                          i < tour.seatsLeft ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                    <span className="mr-2 font-medium text-gray-700 hebrew-text">
                      {tour.seatsLeft}/{tour.totalSeats} מקומות
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center mb-4">
                  <DollarSign className="w-6 h-6 text-green-600 ml-3" />
                  <span className="text-2xl font-bold text-green-600">${tour.price}</span>
                  <span className="text-gray-600 hebrew-text mr-2">לאדם</span>
                </div>

                {/* Tour Duration */}
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-orange-600 ml-3" />
                  <span className="text-gray-700 hebrew-text font-medium">
                    סיור יום מלא מ-9 בבוקר עד 5 בערב
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Itinerary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מסלול הטיול
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              תוכנית מפורטת לסיור יום מלא במומבאי
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {tourItinerary.map((item, index) => (
                <div key={index} className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center ml-4 font-bold text-lg shadow-lg">
                    {item.time}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 hebrew-text text-lg mb-1">{item.activity}</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 ml-2" />
                      <span className="hebrew-text">משך הביקור: 45-60 דקות</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-gray-700 hebrew-text text-center font-medium">
                <strong>הערה:</strong> המסלול עשוי להשתנות בהתאם לתנועה ולתנאי מזג האוויר
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים להצטרף לטיול המאורגן במומבאי?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            הזמינו עכשיו את מקומכם בסיור המשותף במומבאי עם מלכה - 
            המדריכה הישראלית המנוסה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowPayment(true)}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              הצטרפו לטיול המאורגן במומבאי
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

      {/* Recommended Tours */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              טיולים נוספים שעשויים לעניין אתכם
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Delhi Tour */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg"
                alt="דלהי"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">סיור בדלהי</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 ml-2" />
                    <span className="hebrew-text">זמין יומית</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 ml-2" />
                    <span className="hebrew-text">8 שעות</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Car className="w-4 h-4 ml-2" />
                    <span className="hebrew-text">כולל רכב ונהג</span>
                  </div>
                </div>
                <p className="text-gray-600 hebrew-text mb-4">
                  גלו את הבירה ההיסטורית של הודו עם האתרים המפורסמים
                </p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  למדו עוד
                </button>
              </div>
            </div>

            {/* Bangalore Tour */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg"
                alt="בנגלור"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">סיור בבנגלור</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 ml-2" />
                    <span className="hebrew-text">3 פעמים בשבוע</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 ml-2" />
                    <span className="hebrew-text">7 שעות</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Car className="w-4 h-4 ml-2" />
                    <span className="hebrew-text">כולל רכב ונהג</span>
                  </div>
                </div>
                <p className="text-gray-600 hebrew-text mb-4">
                  עיר הגנים ובירת הטכנולוגיה של הודו
                </p>
                <button 
                  onClick={() => onPageChange('bangalore-tours')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  למדו עוד
                </button>
              </div>
            </div>

            {/* Goa Tour */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg"
                alt="גואה"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">סיור בגואה</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 ml-2" />
                    <span className="hebrew-text">לפי דרישה</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 ml-2" />
                    <span className="hebrew-text">6 שעות</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Car className="w-4 h-4 ml-2" />
                    <span className="hebrew-text">רכב או אופנוע</span>
                  </div>
                </div>
                <p className="text-gray-600 hebrew-text mb-4">
                  חופים טרופיים ותרבות פורטוגזית ייחודית
                </p>
                <button 
                  onClick={() => onPageChange('goa-tours')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  למדו עוד
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 hebrew-text">הזמנת סיור משותף במומבאי</h2>
                <button 
                  onClick={() => setShowPayment(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">תאריך הסיור</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Group Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">מספר משתתפים</label>
                  <select
                    value={groupSize}
                    onChange={(e) => setGroupSize(parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1} {i === 0 ? 'משתתף' : 'משתתפים'}</option>
                    ))}
                  </select>
                </div>

                {/* Vehicle Type Display */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 hebrew-text">
                    <strong>סוג רכב:</strong> {getVehicleType()}
                  </p>
                </div>

                {/* Price Summary */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium hebrew-text">מחיר לאדם:</span>
                    <span className="text-2xl font-bold text-blue-600">${calculatePrice()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium hebrew-text">סה"כ:</span>
                    <span className="text-2xl font-bold text-green-600">${calculatePrice() * groupSize}</span>
                  </div>
                </div>

                {/* Contact Form */}
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
                    <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">מלון</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="שם המלון במומבאי" />
                  </div>
                </div>

                {/* Payment Button */}
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
                    <CreditCard className="w-5 h-5 inline ml-2" />
                    המשך לתשלום PayPal
                  </button>
                  <p className="text-sm text-gray-600 text-center hebrew-text">
                    תשלום מאובטח דרך PayPal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Modal */}
      {showFAQ && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 hebrew-text">שאלות ותשובות</h2>
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
                      <p className="text-gray-700 hebrew-text">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              יש שאלות? צרו קשר
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">טלפון</h3>
              <p className="text-gray-700 hebrew-text">+91-9980601979</p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">אימייל</h3>
              <p className="text-gray-700 hebrew-text">Malka@shalom-india.com</p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">מיקום</h3>
              <p className="text-gray-700 hebrew-text">מומבאי, הודו</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MumbaiSharedTourPage;