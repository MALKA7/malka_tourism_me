import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Trees as Tree, Waves, Plane, Hotel } from 'lucide-react';

interface WestSouthTourPageProps {
  onPageChange: (page: string) => void;
}

const WestSouthTourPage: React.FC<WestSouthTourPageProps> = ({ onPageChange }) => {
  const itinerary = [
    { day: 'יום 1-2', location: 'מומבאי', activities: 'הגעה, סיור בעיר, שער הכניסה להודו, מוזיאון גנדי, בוליווד' },
    { day: 'יום 3-4', location: 'בנגלור', activities: 'טיסה לבנגלור, סיור בעיר הגנים, ארמון טיפו סולטן' },
    { day: 'יום 5-7', location: 'מייסור', activities: 'ארמון המהרג\'ה, שוק דוואר, גנים בריינדוון' },
    { day: 'יום 8-10', location: 'קוצ\'י', activities: 'רשתות דיג סיניות, פורט קוצ\'י, שוק התבלינים' },
    { day: 'יום 11-13', location: 'מונאר', activities: 'מטעי תה, אגם מטופטי, פארק אראוויקורם' },
    { day: 'יום 14-16', location: 'אלפי', activities: 'שייט בתעלות המים, כפר דייגים, עיסוי איורוודי' },
    { day: 'יום 17', location: 'חזרה', activities: 'טיסה חזרה דרך קוצ\'י או בנגלור' }
  ];

  const highlights = [
    'שייט בתעלות המים של קרלה (Backwaters)',
    'ביקור במטעי התה של מונאר',
    'הופעת קתקלי - ריקוד מסורתי של קרלה',
    'עיסוי איורוודי מסורתי',
    'טיול ביער הטרופי ותצפית על חיות בר',
    'ביקור בכפר דייגים מסורתי',
    'טעימות מהמטבח הקרלי המפורסם',
    'שייט בשקיעה באגמי קרלה',
    'סיור בארמונות מייסור ההיסטוריים',
    'חוויה תרבותית עמוקה בדרום הודו'
  ];

  const tourFeatures = [
    {
      icon: Hotel,
      title: 'מלונות יוקרה',
      description: 'לינה במלונות 4-5 כוכבים נבחרים'
    },
    {
      icon: Car,
      title: 'תחבורה פרטית',
      description: 'רכב פרטי עם נהג מקצועי לכל הטיול'
    },
    {
      icon: Users,
      title: 'קבוצה קטנה',
      description: 'עד 12 משתתפים לחוויה אישית'
    },
    {
      icon: Star,
      title: 'מדריכה מקצועית',
      description: 'מלכה מלווה אתכם לכל הטיול'
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/Kerala.png" 
            alt="טיול ממערב לדרום הודו"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              טיול ממערב לדרום הודו
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              "הודו בשלושה טעמים" - מסע מרתק ממומבאי הסואנת דרך בנגלור הטכנולוגית 
              אל קרלה הירוקה והשקטה. 17 ימים של חוויות בלתי נשכחות
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              הצטרפו לטיול
            </button>
          </div>
        </div>
      </section>

      {/* Running Banner */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 overflow-hidden shadow-md">
        <div className="running-banner whitespace-nowrap">
          <span className="mx-8">הרשמו עכשיו לטיול ממערב לדרום הודו - מקומות מוגבלים</span>
          <span className="mx-8">חוויה בלתי נשכחת עם מלכה המדריכה הישראלית</span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <button onClick={() => onPageChange('home')} className="breadcrumb-item">בית</button>
            <span className="breadcrumb-separator">←</span>
            <button onClick={() => onPageChange('organized-tours')} className="breadcrumb-item">טיולים מאורגנים</button>
            <span className="breadcrumb-separator">←</span>
            <span className="text-blue-600 font-bold">טיול ממערב לדרום הודו</span>
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
                  הודו בשלושה טעמים - ממערב לדרום
                </h2>
                
                <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-200">
                  <div className="flex items-start">
                    <div className="text-4xl ml-4">
                      <Tree className="w-12 h-12 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text mb-4">
                        טיול שמתחיל בקצב המהיר של מומבאי, העיר הענקית והמרתקת שמציעה שילוב בלתי נגמר 
                        של המודרני והמסורתי. לאחר מכן, תעברו לבנגלור, בירת הטכנולוגיה של הודו.
                      </p>
                      <p className="text-lg text-gray-800 leading-relaxed hebrew-text">
                        <strong>החלק האחרון יוביל אתכם לקרלה – האזור הירוק, השקט והקסום של הודו.</strong> 
                        כאן תצללו לתוך חוויות טבע מרהיבות ותיהנו מהשקט והשלווה של האזור.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  תוכנית הטיול - 17 ימים
                </h3>

                <div className="space-y-4 mb-8">
                  {itinerary.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2 hebrew-text">{item.day} - {item.location}</h4>
                          <p className="text-gray-700 hebrew-text">{item.activities}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6 hebrew-text">
                  הדגשים המיוחדים של הטיול
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 ml-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 hebrew-text">{highlight}</span>
                    </div>
                  ))}
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
                  <h3 className="text-2xl font-bold text-gray-900 hebrew-text">מלכה אירני</h3>
                  <p className="text-gray-700 hebrew-text">מדריכת הטיול לדרום הודו</p>
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
                    <span className="text-gray-800">בנגלור, הודו</span>
                  </div>
                </div>

                <button 
                  onClick={() => onPageChange('contact')}
                  className="w-full btn-primary py-4 text-lg"
                >
                  הצטרפו לטיול
                </button>
              </div>

              {/* Tour Details Card */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text text-center">פרטי הטיול</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">משך הטיול</span>
                      <span className="font-bold text-blue-600 text-xl">17 ימים</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">כולל טיסות פנים</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">גודל קבוצה</span>
                      <span className="font-bold text-green-600 text-xl">8-12</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">משתתפים מקסימום</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 hebrew-text font-bold">מחיר לאדם</span>
                      <span className="font-bold text-purple-600 text-xl">$1,400</span>
                    </div>
                    <p className="text-sm text-gray-600 hebrew-text">כולל הכל חוץ מטיסות בינלאומיות</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-700 hebrew-text text-center font-bold">
                    מקומות מוגבלים - הרשמו עכשיו!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מה מייחד את הטיול?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourFeatures.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 hebrew-text">{feature.title}</h3>
                <p className="text-gray-600 hebrew-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים לחוות את הודו בשלושה טעמים?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            הצטרפו לטיול המאורגן ממערב לדרום הודו עם מלכה - 
            חוויה בלתי נשכחת של 17 ימים בהודו המופלאה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              הצטרפו לטיול
            </button>
            <a 
              href="https://wa.me/919980601979"
              className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 inline-block"
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

export default WestSouthTourPage;