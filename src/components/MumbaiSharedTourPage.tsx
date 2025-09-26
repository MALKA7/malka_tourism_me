import React from 'react';
import { Users, MapPin, Calendar, Clock, Star, Phone, Mail, CheckCircle } from 'lucide-react';

interface MumbaiSharedTourPageProps {
  onPageChange: (page: string) => void;
}

const MumbaiSharedTourPage: React.FC<MumbaiSharedTourPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen fade-in">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="breadcrumb">
            <button onClick={() => onPageChange('home')} className="breadcrumb-item">בית</button>
            <span className="breadcrumb-separator">←</span>
            <button onClick={() => onPageChange('day-tours')} className="breadcrumb-item">סיורי ערים</button>
            <span className="breadcrumb-separator">←</span>
            <span className="text-blue-600 font-bold">סיור משותף במומבאי</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/mumbai gateway.jpg" 
            alt="סיור קבוצתי במומבאי"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hebrew-text">
            סיור קבוצתי במומבאי – הצטרפו עכשיו!
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed hebrew-text opacity-95">
            חוו את מומבאי המרתקת עם קבוצה של ישראלים במסע מודרך מקצועי
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 px-12 py-6 rounded-lg text-2xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              רשמו אותי לסיור
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MumbaiSharedTourPage;