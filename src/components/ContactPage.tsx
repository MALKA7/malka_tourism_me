import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Globe, Star, CheckCircle, User, Calendar, Shield, Award } from 'lucide-react';

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">{method.title}</h3>
                <p className="text-gray-600 hebrew-text mb-4 font-medium">{method.value}</p>
                <p className="text-gray-500 hebrew-text text-sm mb-6">{method.description}</p>
                <a 
                  href={method.action}
                  className={`inline-block bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  צרו קשר
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ml-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 hebrew-text">שלחו לנו הודעה</h2>
                  <p className="text-gray-600 hebrew-text">נחזור אליכם תוך 24 שעות</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">שם מלא *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="השם שלכם"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">אימייל *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">טלפון</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="מספר הטלפון שלכם"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">גודל קבוצה</label>
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">בחרו גודל קבוצה</option>
                      <option value="1">1 אדם</option>
                      <option value="2">2 אנשים</option>
                      <option value="3-4">3-4 אנשים</option>
                      <option value="5-8">5-8 אנשים</option>
                      <option value="9+">9+ אנשים</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">תאריכי נסיעה משוערים</label>
                  <input
                    type="text"
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="לדוגמה: מרץ 2024 או גמיש"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">נושא *</label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">בחרו נושא</option>
                    <option value="trip-planning">תכנון טיול מותאם אישית</option>
                    <option value="organized-tour">טיול מאורגן</option>
                    <option value="city-tour">סיור עיר</option>
                    <option value="accommodation">אירוח אישי</option>
                    <option value="transport">שירותי הסעות</option>
                    <option value="other">אחר</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 hebrew-text">הודעה *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="ספרו לנו על הטיול שאתם מתכננים, תחומי העניין שלכם, ואיך נוכל לעזור..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="loading-spinner ml-3"></div>
                      שולח הודעה...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 ml-2" />
                      שלחו הודעה
                    </div>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* About Malka */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <img 
                    src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" 
                    alt="מלכה אירני"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300 shadow-lg"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 hebrew-text">מלכה אירני</h3>
                  <p className="text-gray-700 hebrew-text font-medium">מדריכה ישראלית מקצועית בהודו</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 hebrew-text leading-relaxed text-center mb-6">
                  חיה בהודו מאז 2010 ומתמחה בטיולים מותאמים אישית לישראלים. 
                  בעלת ניסיון עשיר בהדרכה, תכנון והפקת טיולים ברחבי הודו.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {whyChooseMalka.map((item, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                      <item.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-bold text-sm text-gray-900 hebrew-text mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600 hebrew-text">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center ml-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 hebrew-text">שעות זמינות</h3>
                    <p className="text-gray-600 hebrew-text">שעות הודו (UTC+5:30)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <span className="hebrew-text font-medium">{schedule.day}</span>
                        <div className="text-xs text-gray-500 hebrew-text">{schedule.status}</div>
                      </div>
                      <span className="text-gray-600 hebrew-text font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center ml-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 hebrew-text">השירותים שלנו</h3>
                    <p className="text-gray-600 hebrew-text">מה אנחנו יכולים לעזור לכם</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <service.icon className="w-5 h-5 text-green-600 ml-3 flex-shrink-0" />
                      <span className="hebrew-text">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 hebrew-text">
            צריכים תשובה מהירה?
          </h2>
          <p className="text-xl mb-8 hebrew-text leading-relaxed opacity-95">
            לשאלות דחופות או לתיאום מהיר, צרו קשר ישירות בוואטסאפ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919980601979"
              className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 inline ml-2" />
              WhatsApp
            </a>
            <a 
              href="tel:+919980601979"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              <Phone className="w-5 h-5 inline ml-2" />
              התקשרו עכשיו
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;