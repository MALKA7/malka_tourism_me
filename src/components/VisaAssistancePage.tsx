import React from 'react';
import { MapPin, Clock, Users, Star, Phone, Mail, CheckCircle, Calendar, Award, Shield, Globe, Heart, Car, Hotel, MessageCircle, FileText, CreditCard, Import as Passport, Plane, Building } from 'lucide-react';

interface VisaAssistancePageProps {
  onPageChange: (page: string) => void;
}

const VisaAssistancePage: React.FC<VisaAssistancePageProps> = ({ onPageChange }) => {
  const visaServices = [
    {
      icon: Passport,
      title: 'ויזה תיירותית',
      description: 'סיוע בהגשת בקשה לויזה תיירותית להודו'
    },
    {
      icon: Building,
      title: 'ויזה עסקית',
      description: 'ויזות עסקיות לפגישות ועסקים בהודו'
    },
    {
      icon: Users,
      title: 'ויזה קבוצתית',
      description: 'ויזות לקבוצות וטיולים מאורגנים'
    },
    {
      icon: Calendar,
      title: 'ויזה מהירה',
      description: 'שירות מהיר לויזות דחופות'
    }
  ];

  const requiredDocuments = [
    'דרכון בתוקף לפחות 6 חודשים',
    'תמונה פספורט צבעונית',
    'טופס בקשה מלא',
    'אישור הזמנת טיסות',
    'אישור הזמנת מלון',
    'אישור כספי מהבנק'
  ];

  const processSteps = [
    {
      number: 1,
      icon: MessageCircle,
      title: 'יעוץ ראשוני',
      description: 'בדיקת הדרישות והמסמכים הנדרשים'
    },
    {
      number: 2,
      icon: FileText,
      title: 'הכנת מסמכים',
      description: 'עזרה במילוי הטפסים והכנת המסמכים'
    },
    {
      number: 3,
      icon: CreditCard,
      title: 'הגשת הבקשה',
      description: 'הגשת הבקשה לקונסוליה ההודית'
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'מעקב ואיסוף',
      description: 'מעקב אחר הבקשה ואיסוף הויזה'
    }
  ];

  const visaTypes = [
    {
      type: 'ויזה תיירותית',
      duration: 'עד 90 יום',
      price: '$50-80',
      processing: '3-7 ימי עבודה'
    },
    {
      type: 'ויזה עסקית',
      duration: 'עד 180 יום',
      price: '$80-120',
      processing: '5-10 ימי עבודה'
    },
    {
      type: 'ויזה מהירה',
      duration: 'עד 30 יום',
      price: '$100-150',
      processing: '1-3 ימי עבודה'
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" 
            alt="סיוע בויזה להודו"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 hebrew-text">
              סיוע בויזה להודו
            </h1>
            <p className="text-xl mb-8 leading-relaxed hebrew-text opacity-95">
              קבלו עזרה מקצועית בהגשת בקשה לויזה להודו. מלכה תלווה אתכם בכל התהליך 
              ותוודא שתקבלו את הויזה בזמן ובקלות
            </p>
            <button 
              onClick={() => onPageChange('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              קבלו עזרה בויזה
            </button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <button onClick={() => onPageChange('home')} className="breadcrumb-item">בית</button>
            <span className="breadcrumb-separator">←</span>
            <button onClick={() => onPageChange('services')} className="breadcrumb-item">שירותים</button>
            <span className="breadcrumb-separator">←</span>
            <span className="text-blue-600 font-bold">סיוע בויזה להודו</span>
          </div>
        </div>
      </div>

      {/* Visa Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              סוגי ויזות להודו
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              שירותי ויזה מקצועיים לכל סוג של נסיעה
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaServices.map((service, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-text">{service.title}</h3>
                <p className="text-gray-600 hebrew-text leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              מסמכים נדרשים
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              רשימת המסמכים הנדרשים להגשת בקשה לויזה
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 ml-4 flex-shrink-0" />
                    <span className="text-gray-800 hebrew-text font-medium">{document}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              תהליך קבלת הויזה
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              4 שלבים פשוטים לקבלת ויזה להודו
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center ml-4 flex-shrink-0 font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                <div className="mr-4">
                  <step.icon className="w-8 h-8 text-blue-600 mb-2" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-3 hebrew-text text-xl">{step.title}</h4>
                  <p className="text-gray-700 hebrew-text leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types and Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              סוגי ויזות ומחירים
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              בחרו את סוג הויזה המתאים לכם
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text text-center">{visa.type}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 hebrew-text font-medium">משך שהייה:</span>
                    <span className="text-blue-600 font-bold">{visa.duration}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700 hebrew-text font-medium">מחיר:</span>
                    <span className="text-green-600 font-bold">{visa.price}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-gray-700 hebrew-text font-medium">זמן עיבוד:</span>
                    <span className="text-yellow-600 font-bold">{visa.processing}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => onPageChange('contact')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  הגישו בקשה
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" 
                  alt="מלכה"
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300"
                />
                <h3 className="text-2xl font-bold text-gray-900 hebrew-text">מלכה אירני</h3>
                <p className="text-gray-700 hebrew-text">יועצת ויזות להודו</p>
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
                קבלו עזרה בויזה
              </button>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 hebrew-text">למה לבחור בנו?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ml-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 hebrew-text">ניסיון מוכח</h4>
                    <p className="text-gray-600 hebrew-text text-sm">15 שנות ניסיון בסיוע לישראלים</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center ml-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 hebrew-text">שירות אמין</h4>
                    <p className="text-gray-600 hebrew-text text-sm">מאות ויזות שאושרו בהצלחה</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center ml-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 hebrew-text">ידע מקומי</h4>
                    <p className="text-gray-600 hebrew-text text-sm">מכירה את התהליכים מקרוב</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center ml-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 hebrew-text">תמיכה מלאה</h4>
                    <p className="text-gray-600 hebrew-text text-sm">ליווי אישי לאורך כל התהליך</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            מוכנים להגיש בקשה לויזה?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed">
            צרו קשר עוד היום וקבלו עזרה מקצועית בהגשת בקשה לויזה להודו. 
            מלכה תדאג שהתהליך יהיה חלק ומהיר
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              התחילו את התהליך
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

export default VisaAssistancePage;