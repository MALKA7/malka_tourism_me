import React from 'react';
import { ChevronLeft, Home } from 'lucide-react';

interface BreadcrumbItem {
  id: string;
  label: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, currentPage }) => {
  const pageLabels: { [key: string]: string } = {
    'home': 'בית',
    'about': 'אודות מלכה',
    'services': 'שירותי נסיעות',
    'tours': 'טיולים וסיורים',
    'trip-planning': 'תכנון טיול מותאם אישית',
    'trip-execution': 'הפקת טיול מקצועית',
    'hebrew-guiding': 'הדרכה בעברית',
    'personal-hosting': 'אירוח אישי בווילה',
    'transport-services': 'שירותי הסעות ונהג',
    'mumbai-shared': 'מומבאי - סיור משותף',
    'mumbai-private': 'מומבאי - סיור פרטי',
    'kerala': 'טיול מאורגן לקרלה',
    'kolkata': 'טיול מאורגן לקולקטה',
    'testimonials': 'המלצות לקוחות',
    'blog': 'בלוג הודו',
    'contact': 'צור קשר'
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-4 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 space-x-reverse text-sm" aria-label="Breadcrumb">
          <div className="flex items-center">
            <Home className="w-4 h-4 text-blue-600 ml-2" />
            {items.map((item, index) => (
              <React.Fragment key={item.id}>
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors hebrew-text hover:underline"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span className="text-gray-500 hebrew-text">{item.label}</span>
                )}
                {index < items.length - 1 && (
                  <ChevronLeft className="w-4 h-4 text-gray-400 mx-2" />
                )}
              </React.Fragment>
            ))}
            {items.length > 0 && <ChevronLeft className="w-4 h-4 text-gray-400 mx-2" />}
            <span className="text-blue-800 font-bold hebrew-text">
              {pageLabels[currentPage] || currentPage}
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;