import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Car, Camera, Building, Waves, Plane, Hotel, Play, RotateCcw, X } from 'lucide-react';

interface WestSouthTourPageProps {
  onPageChange: (page: string) => void;
}

const WestSouthTourPage: React.FC<WestSouthTourPageProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const flipCards = [
    {
      front: 'ניסיון של 15 שנה',
      back: 'מלכה חיה בהודו מאז 2010 ומכירה את המדינה כמו כף ידה. ניסיון עשיר בהדרכה ותכנון טיולים.'
    },
    {
      front: 'מדריכה דוברת עברית',
      back: 'הדרכה מקצועית בעברית עם הבנה עמוקה של הצרכים הישראליים והתרבות המקומית.'
    },
    {
      front: 'קבוצות קטנות',
      back: 'עד 12 משתתפים בלבד לחוויה אישית ומותאמת לכל אחד מהמשתתפים.'
    },
    {
      front: 'מלונות נבחרים',
      back: 'מלכה בודקת כל מלון בעצמה ובוחרת רק את המלונות הטובים ביותר עבורכם.'
    },
    {
      front: 'תמיכה 24/7',
      back: 'זמינות מלאה לאורך כל הטיול לכל שאלה, בעיה או צורך שיעלה.'
    },
    {
      front: 'מחירים שקופים',
      back: 'ללא עלויות נסתרות - כל המחירים ברורים ושקופים מראש.'
    },
    {
      front: 'חוויות אותנטיות',
      back: 'לא רק אתרים תיירותיים - חוויות אמיתיות של התרבות וההיסטוריה ההודית.'
    }
  ];

  const tabContent = {
    itinerary: {
      title: 'מסלול הטיול',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3 hebrew-text">ימים 1-5: מומבאי</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="hebrew-text">• שער הכניסה להודו</li>
                <li className="hebrew-text">• סלאם דהרבי</li>
                <li className="hebrew-text">• מרין דרייב</li>
                <li className="hebrew-text">• בוליווד</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3 hebrew-text">ימים 6-10: בנגלור</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="hebrew-text">• ארמון טיפו סולטן</li>
                <li className="hebrew-text">• גנים בוטניים</li>
                <li className="hebrew-text">• מקדש בול</li>
                <li className="hebrew-text">• שוק KR מרקט</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg md:col-span-2">
              <h4 className="font-bold text-purple-900 mb-3 hebrew-text">ימים 11-15: קרלה</h4>
              <ul className="space-y-2 text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="hebrew-text">• שייט בתעלות המים</li>
                <li className="hebrew-text">• מטעי תה במונאר</li>
                <li className="hebrew-text">• עיסוי איורוודי</li>
                <li className="hebrew-text">• הופעת קתקלי</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    accommodation: {
      title: 'לינה',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3 hebrew-text">מלונות 4-5 כוכבים</h4>
            <p className="text-gray-700 hebrew-text">מלונות נבחרים שמלכה בדקה אישית ומאושרים לאיכות גבוהה.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-bold text-green-900 mb-3 hebrew-text">חדרים זוגיים</h4>
            <p className="text-gray-700 hebrew-text">חדרים נוחים עם כל השירותים הנדרשים לשהייה נעימה.</p>
          </div>
        </div>
      )
    },
    included: {
      title: 'כלול במחיר',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">לינה במלונות 4-5 כוכבים</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">ארוחת בוקר יומית</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">תחבורה פרטית עם נהג</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">הדרכה בעברית</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">כניסות לאתרים</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">טיסות פנים</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">ביטוח נסיעות</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
              <span className="hebrew-text">תמיכה 24/7</span>
            </div>
          </div>
        </div>
      )
    },
    notIncluded: {
      title: 'לא כלול',
      content: (
        <div className="space-y-3">
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">טיסות בינלאומיות</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">ארוחות צהריים וערב</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">הוצאות אישיות</span>
          </div>
          <div className="flex items-center">
            <X className="w-5 h-5 text-red-600 ml-2" />
            <span className="hebrew-text">ויזה להודו</span>
          </div>
        </div>
      )
    },
    pricing: {
      title: 'מחיר',
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$1,400</div>
            <div className="text-gray-700 hebrew-text">מחיר לאדם בחדר זוגי</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2 hebrew-text">הנחות</h4>
              <p className="text-gray-700 hebrew-text text-sm">הנחה של 10% לזוגות צעירים</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-2 hebrew-text">תשלומים</h4>
              <p className="text-gray-700 hebrew-text text-sm">אפשרות לתשלום במספר תשלומים</p>
            </div>
          </div>
        </div>
      )
    },
    terms: {
      title: 'תנאים',
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-900 mb-2 hebrew-text">ביטול</h4>
            <p className="text-gray-700 hebrew-text text-sm">ביטול עד 30 יום לפני הטיול - החזר מלא</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-2 hebrew-text">שינויים</h4>
            <p className="text-gray-700 hebrew-text text-sm">שינויים במסלול אפשריים עד 14 יום לפני היציאה</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-900 mb-2 hebrew-text">דרישות</h4>
            <p className="text-gray-700 hebrew-text text-sm">נדרש דרכון בתוקף לפחות 6 חודשים וויזה להודו</p>
          </div>
        </div>
      )
    },
    notes: {
      title: 'הערות',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">המסלול עשוי להשתנות בהתאם לתנאי מזג האוויר ונסיבות מקומיות.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">מומלץ להגיע יום לפני תחילת הטיול להתאקלמות.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-700 hebrew-text">כל המשתתפים מקבלים חבילת מידע מפורטת לפני היציאה.</p>
          </div>
        </div>
      )
    }
  };

  const futureTours = [
    {
      name: 'הודו בשלושה טעמים',
      dates: '15-30 במרץ 2024',
      guide: 'מלכה אירני',
      status: 'פתוח להרשמה'
    },
    {
      name: 'הודו בשלושה טעמים',
      dates: '10-25 באפריל 2024',
      guide: 'מלכה אירני',
      status: 'מלא'
    },
    {
      name: 'הודו בשלושה טעמים',
      dates: '5-20 במאי 2024',
      guide: 'מלכה אירני',
      status: 'פתוח להרשמה'
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl font-bold mb-4 hebrew-text">
              טיול ממערב לדרום הודו
            </h1>
            <p className="text-lg mb-8 leading-relaxed hebrew-text opacity-95">
              מסע של 15 ימים ממומבאי דרך בנגלור ועד לקרלה הקסומה
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              גלו את המחירים
            </button>
          </div>
        </div>
      </section>

      {/* Section 1 - Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              טעימה מהאזור
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-200 rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-10 h-10 text-white mr-2" />
                  </div>
                  <p className="text-gray-600 hebrew-text">וידאו טעימה מהטיול</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 hebrew-text mt-4 italic">
              עוד לא יצאתם – אבל כבר אפשר לדמיין אתכם שם
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Photo + Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              המסע – הסיפור המלא
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/Kerala.png" 
                alt="קרלה הקסומה"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text">
                טיול שמתחיל בקצב המהיר של מומבאי, העיר הענקית והמרתקת שמציעה שילוב בלתי נגמר של המודרני והמסורתי. 
                תיהנו מהרחובות הסואנים, מהשווקים הצבעוניים ומתרבות עשירה, ותבינו את מהות העיר שתמיד במרוץ קדימה.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text">
                לאחר מכן, תעברו לבנגלור, בירת הטכנולוגיה של הודו, מקום שבו היי-טק וחדשנות נפגשים עם קסם מקומי. 
                כאן תרגישו את האווירה המיוחדת של העיר, המשלבת בין עתיד לבין מסורת, בין תעשייה לבין טבע.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed hebrew-text">
                החלק האחרון יוביל אתכם לקרלה – האזור הירוק, השקט והקסום של הודו. 
                כאן תצללו לתוך חוויות טבע מרהיבות, תיהנו מתעלות מים יפהפיות, תיהנו מהשקט ומהשלווה של האזור, 
                ותתמלאו באנרגיה מחודשת מהסביבה המיוחדת הזו.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - 7 Flip Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              למה לטייל עם מלכה אירני?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flipCards.map((card, index) => (
              <div 
                key={index}
                className="relative h-48 cursor-pointer"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}>
                  {/* Front */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center p-6">
                    <div className="text-center">
                      <RotateCcw className="w-8 h-8 text-white mx-auto mb-3" />
                      <h3 className="text-white font-bold hebrew-text text-lg">{card.front}</h3>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg flex items-center justify-center p-6 rotate-y-180 border border-gray-200">
                    <p className="text-gray-700 hebrew-text text-center leading-relaxed">{card.back}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מוכנים לצאת לדרך? הנה הפרטים
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="flex flex-wrap border-b border-gray-200">
              {Object.entries(tabContent).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-4 font-medium hebrew-text transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="p-8">
              {tabContent[activeTab as keyof typeof tabContent].content}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Future Tours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              טיולים עתידיים
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-right hebrew-text font-semibold">שם הטיול</th>
                  <th className="px-6 py-4 text-right hebrew-text font-semibold">תאריכים</th>
                  <th className="px-6 py-4 text-right hebrew-text font-semibold">מדריכה</th>
                  <th className="px-6 py-4 text-right hebrew-text font-semibold">סטטוס טיול</th>
                </tr>
              </thead>
              <tbody>
                {futureTours.map((tour, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 hebrew-text font-medium">{tour.name}</td>
                    <td className="px-6 py-4 hebrew-text">{tour.dates}</td>
                    <td className="px-6 py-4 hebrew-text">{tour.guide}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium hebrew-text ${
                        tour.status === 'פתוח להרשמה' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {tour.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WestSouthTourPage;