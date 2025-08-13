import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4 hebrew-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">הודו עם מלכה</div>
            <p className="text-slate-300 hebrew-text mb-4">
              טיולים מותאמים אישית להודו עם מדריכה ישראלית מנוסה
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://wa.me/919980601979" className="social-icon whatsapp hover:scale-110 transition-transform shadow-lg" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="social-icon facebook hover:scale-110 transition-transform shadow-lg" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon instagram hover:scale-110 transition-transform shadow-lg" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon youtube hover:scale-110 transition-transform shadow-lg" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hebrew-text text-blue-200">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onPageChange('home')}
                  className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:translate-x-1 transform duration-200"
                >
                  בית
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('about')}
                  className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:translate-x-1 transform duration-200"
                >
                  אודות
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('organized-tours')}
                  className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:translate-x-1 transform duration-200"
                >
                  טיולים מאורגנים
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('weddings')}
                  className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:translate-x-1 transform duration-200"
                >
                  חתונות בהודו
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hebrew-text text-blue-200">שירותים</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onPageChange('trip-planning')}
                  className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:translate-x-1 transform duration-200"
                >
                  תכנון טיול בהודו
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('hebrew-guiding')}
                  className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:translate-x-1 transform duration-200"
                >
                  הדרכה בעברית
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('organised-tours')}
                  className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:translate-x-1 transform duration-200"
                >
                  טיולים מאורגנים
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('personal-hosting')}
                  className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:translate-x-1 transform duration-200"
                >
                  אירוח אישי
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hebrew-text text-blue-200">פרטי התקשרות</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 ml-3 text-blue-300" />
                <span className="text-slate-300">+91-9980601979</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 ml-3 text-blue-300" />
                <span className="text-slate-300">Malka@shalom-india.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 ml-3 mt-1 text-blue-300" />
                <span className="text-slate-300">
                  Devanahalli, Bangalore Rural,<br />
                  562110, Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Menu Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center space-x-6 space-x-reverse text-sm">
            <button 
              onClick={() => onPageChange('mumbai-private')}
              className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:scale-105 transform duration-200"
            >
              מומבאי
            </button>
            <button 
              onClick={() => onPageChange('bangalore-tours')}
              className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:scale-105 transform duration-200"
            >
              בנגלור
            </button>
            <button 
              onClick={() => onPageChange('goa-tours')}
              className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:scale-105 transform duration-200"
            >
              גואה
            </button>
            <button 
              onClick={() => onPageChange('kochi-tours')}
              className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:scale-105 transform duration-200"
            >
              קוצ'י
            </button>
            <button 
              onClick={() => onPageChange('west-south-tour')}
              className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:scale-105 transform duration-200"
            >
              דרום הודו
            </button>
            <button 
              onClick={() => onPageChange('west-east-tour')}
              className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:scale-105 transform duration-200"
            >
              מזרח הודו
            </button>
            <button 
              onClick={() => onPageChange('weddings')}
              className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:scale-105 transform duration-200"
            >
              חתונות
            </button>
            <button 
              onClick={() => onPageChange('testimonials')}
              className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:scale-105 transform duration-200"
            >
              המלצות
            </button>
            <button 
              onClick={() => onPageChange('blog')}
              className="text-slate-300 hover:text-blue-200 transition-colors hebrew-text hover:scale-105 transform duration-200"
            >
              בלוג
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2 hebrew-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">הודו עם מלכה</div>
            <p className="text-sm text-slate-400">© כל הזכויות שמורות למלכה איראני</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;