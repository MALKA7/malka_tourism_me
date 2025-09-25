import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Globe, Star, CheckCircle, User, Calendar, Shield, Award, Users, Facebook, Instagram, Youtube } from 'lucide-react';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    travelDates: '',
    groupSize: '',
    interests: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'טלפון',
      value: '+91-9980601979',
      description: 'זמינה 24/7 לשאלות דחופות',
      action: 'tel:+919980601979',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91-9980601979',
      description: 'התקשרות מהירה ונוחה',
      action: 'https://wa.me/919980601979',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Mail,
      title: 'אימייל',
      value: 'Malka@shalom-india.com',
      description: 'לפניות מפורטות ותכנון',
      action: 'mailto:Malka@shalom-india.com',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: MapPin,
      title: 'מיקום',
      value: 'בנגלור, הודו',
      description: 'צפון בנגלור, קרנטקה',
      action: '#',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const workingHours = [
    { day: 'ראשון - חמישי', hours: '09:00 - 20:00', status: 'זמינה' },
    { day: 'שישי', hours: '09:00 - 15:00', status: 'זמינה' },
    { day: 'שבת', hours: 'זמינה לחירום', status: 'חירום בלבד' }
  ];

  const services = [
    { name: 'תכנון טיול מותאם אישית', icon: Globe },
    { name: 'הפקת טיול מקצועית', icon: Award },
    { name: 'הדרכה בעברית', icon: User },
    { name: 'טיולים מאורגנים', icon: Users },
    { name: 'אירוח אישי', icon: MapPin },
    { name: 'שירותי הסעות', icon: Shield }
  ];

  const whyChooseMalka = [
    {
      icon: Award,
      title: '15 שנות ניסיון',
      description: 'חיה בהודו מאז 2010 ומכירה את המדינה כמו כף ידה'
    },
    {
      icon: Shield,
      title: 'שירות אמין',
      description: 'מאות לקוחות מרוצים וביקורות מעולות'
    },
    {
      icon: Globe,
      title: 'ידע מקומי',
      description: 'מדברת הינדית ומכירה את התרבות המקומית'
    },
    {
      icon: User,
      title: 'הדרכה בעברית',
      description: 'מדריכה ישראלית מקצועית ודוברת עברית'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-xl shadow-xl p-8 text-center border border-gray-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 hebrew-text">
              תודה על פנייתכם!
            </h2>
            <p className="text-gray-600 hebrew-text mb-6 leading-relaxed">
              קיבלנו את הודעתכם ומלכה תחזור אליכם בהקדם האפשרי. 
              בדרך כלל אנו מגיבים תוך 24 שעות.
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                שלחו הודעה נוספת
              </button>
              <a 
                href="https://wa.me/919980601979"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp לתגובה מהירה
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Send className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 hebrew-text">
            צרו קשר עם מלכה
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto hebrew-text leading-relaxed">
            מוכנים לתכנן את הטיול של החלומות שלכם להודו? מלכה אירני כאן לעזור לכם בכל שלב
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              דרכי התקשרות
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              בחרו את הדרך הנוחה לכם ביותר ליצירת קשר
            </p>
            <p className="text-lg text-gray-700 hebrew-text mt-4">
              נשמח לענות לפנייתכם בדרך כלל בתוך 24–48 שעות
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">{method.title}</h3>
                <p className="text-gray-600 hebrew-text mb-4 font-medium">{method.value}</p>
                <p className="text-gray-500 hebrew-text mb-4">{method.description}</p>
                <a 
                  href={method.action}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Send className="w-4 h-4 mr-2" />
                  צור קשר
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-20 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 hebrew-text">
              בוחרים בנו שוב ושוב – לחוויות בלתי נשכחות
            </h2>
            <p className="text-xl text-blue-200 hebrew-text">
              בזכות המקצועיות, החום האנושי והחוויות הייחודיות – הם חוזרים אלינו פעם אחר פעם
            </p>
          </div>

          {/* Country Flags */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🇮🇹</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text">איטליה</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🇺🇸</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text">ארה"ב</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🇨🇦</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text">קנדה</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🇿🇦</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text">דרום אפריקה</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🇮🇱</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text">ישראל</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🇲🇽</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text">מקסיקו</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🇨🇳</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text">סין</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🇧🇷</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text">ברזיל</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200">
                <span className="text-2xl">🇬🇧</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text">אנגליה</span>
            </div>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200 p-2">
                <span className="text-xs font-bold text-blue-600 text-center">BERMAD</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text text-center">ברמד</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200 p-2">
                <span className="text-xs font-bold text-blue-600 text-center">EL AL</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text text-center">אל על</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200 p-2">
                <span className="text-xs font-bold text-blue-600 text-center">KNESSET</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text text-center">כנסת</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200 p-2">
                <span className="text-xs font-bold text-blue-600 text-center">DR. FISCHER</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text text-center">ד"ר פישר</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200 p-2">
                <span className="text-xs font-bold text-blue-600 text-center">LAGENTA</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text text-center">לג'נדה</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200 p-2">
                <span className="text-xs font-bold text-blue-600 text-center">EGGED</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text text-center">אגד</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center mb-2 border border-gray-200 p-2">
                <span className="text-xs font-bold text-blue-600 text-center hebrew-text">שוקולד השחר</span>
              </div>
              <span className="text-sm text-gray-600 hebrew-text text-center">שוקולד השחר</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hebrew-text">
              שלחו לנו הודעה
            </h2>
            <p className="text-xl text-gray-600 hebrew-text">
              מלאו את הפרטים ונחזור אליכם בהקדם
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">
                    שם מלא *
                  </label>
                  <div className="relative">
                    <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="הכניסו את שמכם המלא"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">
                    אימייל *
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">
                    טלפון
                  </label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+972-50-1234567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="travelDates" className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">
                    תאריכי נסיעה משוערים
                  </label>
                  <div className="relative">
                    <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="למשל: מרץ 2024"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">
                  נושא הפנייה *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hebrew-text"
                >
                  <option value="">בחרו נושא</option>
                  <option value="trip-planning">תכנון טיול</option>
                  <option value="hebrew-guiding">הדרכה בעברית</option>
                  <option value="personal-hosting">אירוח אישי</option>
                  <option value="transport">שירותי הסעות</option>
                  <option value="visa">עזרה בויזה</option>
                  <option value="other">אחר</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">
                  הודעה *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="ספרו לנו על הטיול שאתם מתכננים, מספר המטיילים, תחומי עניין מיוחדים וכל מידע נוסף שיעזור לנו לעזור לכם..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      שולח הודעה...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      שלח הודעה
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 hebrew-text">
            עקבו אחרינו ברשתות החברתיות
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300 transform hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-300 transform hover:scale-110"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;