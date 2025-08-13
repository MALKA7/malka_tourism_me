import React, { useState } from 'react';
import { Menu, X, Search, Phone, ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const menuItems = [
    {
      id: 'home',
      label: 'בית',
      hasSubmenu: false
    },
    {
      id: 'about', 
      label: 'אודות',
      hasSubmenu: false
    },
    {
      id: 'services', 
      label: 'שירותים',
      hasSubmenu: true,
      submenu: [
        { id: 'trip-planning', label: 'תכנון טיול מותאם אישית' },
        { id: 'trip-execution', label: 'הפקת טיול מקצועית' },
        { id: 'hebrew-guiding', label: 'הדרכה בעברית' },
        { id: 'personal-hosting', label: 'אירוח אישי בווילה' },
        { id: 'transport-services', label: 'שירותי הסעות ונהג' },
        { id: 'visa-assistance', label: 'סיוע בויזה והכנות' }
      ]
    },
    {
      id: 'day-tours',
      label: 'סיורי יום',
      hasSubmenu: true,
      submenu: [
        { id: 'mumbai-private', label: 'מומבאי – טיול פרטי' },
        { id: 'mumbai-shared', label: 'מומבאי – טיול משותף' },
        { id: 'additional-cities', label: 'ערים נוספות' }
      ]
    },
    {
      id: 'organized-tours',
      label: 'טיולים מאורגנים',
      hasSubmenu: true,
      submenu: [
        { id: 'west-south-tour', label: 'טיול ממערב לדרום הודו' },
        { id: 'west-east-tour', label: 'טיול ממערב למזרח הודו' }
      ]
    },
    {
      id: 'weddings',
      label: 'חתונות בהודו',
      hasSubmenu: false
    },
    {
      id: 'testimonials', 
      label: 'המלצות',
      hasSubmenu: false
    },
    {
      id: 'blog',
      label: 'בלוג',
      hasSubmenu: false
    },
    {
      id: 'contact',
      label: 'צור קשר',
      hasSubmenu: false
    }
  ];

  const allPages = [
    'home', 'about', 'services', 'day-tours', 'organized-tours', 'weddings', 'testimonials', 'blog', 'contact', 'additional-cities',
    'trip-planning', 'trip-execution', 'hebrew-guiding', 'personal-hosting', 
    'transport-services', 'visa-assistance', 'mumbai-shared', 'mumbai-private', 'west-south-tour', 'west-east-tour'
  ];

  const getPageTitle = (pageId: string): string => {
    const pageTitles: { [key: string]: string } = {
      'home': 'בית',
      'about': 'אודות',
      'services': 'שירותים',
      'day-tours': 'סיורי יום',
      'organized-tours': 'טיולים מאורגנים',
      'weddings': 'חתונות בהודו',
      'trip-planning': 'תכנון טיול מותאם אישית',
      'trip-execution': 'הפקת טיול מקצועית',
      'hebrew-guiding': 'הדרכה בעברית',
      'personal-hosting': 'אירוח אישי בווילה',
      'transport-services': 'שירותי הסעות ונהג',
      'visa-assistance': 'סיוע בויזה והכנות',
      'mumbai-shared': 'מומבאי - סיור משותף',
      'mumbai-private': 'מומבאי - סיור פרטי',
      'additional-cities': 'ערים נוספות',
      'west-south-tour': 'טיול ממערב לדרום הודו',
      'west-east-tour': 'טיול ממערב למזרח הודו',
      'testimonials': 'המלצות',
      'blog': 'בלוג',
      'contact': 'צור קשר'
    };
    return pageTitles[pageId] || pageId;
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 1) {
      const results = allPages.filter(page => 
        getPageTitle(page).includes(query) || 
        page.includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchResultClick = (pageId: string) => {
    onPageChange(pageId);
    setSearchQuery('');
    setSearchResults([]);
  };

  const toggleSubmenu = (itemId: string) => {
    setActiveSubmenu(activeSubmenu === itemId ? null : itemId);
  };

  const handleMenuClick = (itemId: string, hasSubmenu: boolean) => {
    if (hasSubmenu) {
      toggleSubmenu(itemId);
    } else {
      onPageChange(itemId);
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = (itemId: string) => {
    onPageChange(itemId);
    setActiveSubmenu(null);
  };

  return (
    <>
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => onPageChange('home')}
                className="flex items-center space-x-3 space-x-reverse hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">מ</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hebrew-text">
                    הודו עם מלכה
                  </div>
                  <div className="text-sm text-gray-600 hebrew-text">
                    מדריכה ישראלית מקצועית
                  </div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
              {menuItems.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => handleMenuClick(item.id, item.hasSubmenu)}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === item.id || (item.submenu && item.submenu.some(sub => sub.id === currentPage))
                        ? 'text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-sm'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100'
                    }`}
                  >
                    <span className="hebrew-text">{item.label}</span>
                    {item.hasSubmenu && (
                      <ChevronDown className={`w-4 h-4 mr-2 transition-transform duration-300 ${
                        activeSubmenu === item.id ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>
                  
                  {/* Desktop Submenu */}
                  {item.hasSubmenu && activeSubmenu === item.id && (
                    <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                      {item.submenu?.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleSubmenuClick(subItem.id)}
                          className={`flex items-center w-full text-right px-6 py-3 text-sm transition-all duration-200 ${
                            currentPage === subItem.id
                              ? 'text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 border-r-4 border-blue-500'
                              : 'text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100'
                          }`}
                        >
                          <span className="font-medium hebrew-text">{subItem.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Contact */}
            <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
              {/* Search */}
              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="חיפוש..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-48 px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right hebrew-text"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                
                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 max-h-60 overflow-y-auto">
                    <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-200 hebrew-text">
                      תוצאות חיפוש:
                    </div>
                    {searchResults.slice(0, 8).map((result) => (
                      <button
                        key={result}
                        className="w-full text-right px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors hebrew-text"
                        onClick={() => handleSearchResultClick(result)}
                      >
                        {getPageTitle(result)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Button */}
              <a 
                href="https://wa.me/919980601979"
                className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-lg ml-2"></i>
                <span className="font-medium hebrew-text">WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="חיפוש באתר..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right hebrew-text"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          {/* Mobile Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-48 overflow-y-auto">
              <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-200 hebrew-text">
                תוצאות חיפוש:
              </div>
              {searchResults.slice(0, 6).map((result) => (
                <button
                  key={result}
                  className="w-full text-right px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors hebrew-text"
                  onClick={() => handleSearchResultClick(result)}
                >
                  {getPageTitle(result)}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
        currentPage={currentPage}
        onPageChange={onPageChange}
        activeSubmenu={activeSubmenu}
        onToggleSubmenu={toggleSubmenu}
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
        searchResults={searchResults}
        onSearchResultClick={handleSearchResultClick}
        getPageTitle={getPageTitle}
      />
    </>
  );
};

export default Header;