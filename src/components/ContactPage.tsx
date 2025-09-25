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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hebrew-text">{method.title}</h3>
                <p className="text-gray-600 hebrew-text mb-4 font-medium">{method.value}</p>
                <p className="text-gray-500 hebrew