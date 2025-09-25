import React, { useState } from 'react';
import { Menu, X, Search, Phone, ChevronDown, Mail, Facebook } from 'lucide-react';
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
        { id: 'visa-assistance', label: 'סיורים מאורגנים' }
      ]
    },
    {
      id: 'day-tours',
      label: 'סיורי יום',
      hasSubmenu: true,
      submenu: [
        { id: 'mumbai-private', label: 'מומבאי – טיול פרטי' },
        { id: 'mumbai-shared', label: 'מומבאי – טיול משותף' },
        { id: 'delhi-tours', label: 'דלהי – טיול פרטי' },
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
    },
    {
      id: 'english',
      label: 'English',
      hasSubmenu: false
    }
  ];

  const allPages = [
    'home', 'about', 'services', 'day-tours', 'organized-tours', 'testimonials', 'blog', 'contact', 'additional-cities',
    'trip-planning', 'trip-execution', 'hebrew-guiding', 'personal-hosting', 
    'transport-services', 'visa-assistance', 'mumbai-shared', 'mumbai-private', 
    'west-south-tour', 'west-east-tour', 'additional-cities'
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
      'west-south-tour': 'טיול ממערב לדרום הודו',
      'west-east-tour': 'טיול ממערב למזרח הודו',
      'additional-cities': 'ערים נוספות',
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
      <header className="bg-[#0A2540] shadow-lg border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => onPageChange('home')}
                className="flex items-center space-x-3 space-x-reverse hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/Logo.png" 
                  alt="India by Malka Logo"
                  className="h-16 w-auto object-contain"
                />
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
                        ? 'text-blue-300 bg-gradient-to-r from-blue-900 to-blue-800 border border-blue-600 shadow-sm'
                        : 'text-white hover:text-blue-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-700'
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
                    <div className="absolute top-full right-0 mt-2 w-80 bg-[#0A2540] rounded-xl shadow-xl border border-blue-600 py-2 z-50">
                      {item.submenu?.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleSubmenuClick(subItem.id)}
                          className={`flex items-center w-full text-right px-6 py-3 text-sm transition-all duration-200 ${
                            currentPage === subItem.id
                              ? 'text-blue-300 bg-gradient-to-r from-blue-800 to-blue-700 border-r-4 border-blue-400'
                              : 'text-white hover:text-blue-300 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-700'
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
                    className="w-48 px-4 py-2 pr-10 border border-blue-600 bg-blue-900 text-white placeholder-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-right hebrew-text"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-300" />
                </div>
                
                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-[#0A2540] rounded-lg shadow-xl border border-blue-600 py-2 z-50 max-h-60 overflow-y-auto">
                    <div className="px-4 py-2 text-xs text-blue-300 border-b border-blue-600 hebrew-text">
                      תוצאות חיפוש:
                    </div>
                    {searchResults.slice(0, 8).map((result) => (
                      <button
                        key={result}
                        className="w-full text-right px-4 py-3 text-sm text-white hover:bg-blue-800 hover:text-blue-300 transition-colors hebrew-text"
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
              className="lg:hidden p-2 text-white hover:text-blue-300 hover:bg-blue-800 rounded-lg transition-all duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden px-4 pb-4 bg-[#0A2540]">
          <div className="relative">
            <input
              type="text"
              placeholder="חיפוש באתר..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 pr-10 border border-blue-600 bg-blue-900 text-white placeholder-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-right hebrew-text"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-300" />
          </div>
          
          {/* Mobile Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-2 bg-[#0A2540] rounded-lg shadow-lg border border-blue-600 py-2 max-h-48 overflow-y-auto">
              <div className="px-4 py-2 text-xs text-blue-300 border-b border-blue-600 hebrew-text">
                תוצאות חיפוש:
              </div>
              {searchResults.slice(0, 6).map((result) => (
                <button
                  key={result}
                  className="w-full text-right px-4 py-3 text-sm text-white hover:bg-blue-800 transition-colors hebrew-text"
                  onClick={() => handleSearchResultClick(result)}
                >
                  {getPageTitle(result)}
                </button>
              ))}
            </div>
          )}
          
          {/* Mobile WhatsApp */}
          <div className="flex items-center justify-center mt-4">
            <a 
              href="https://wa.me/919980601979"
              className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp למלכה"
            >
              <i className="fab fa-whatsapp text-lg group-hover:scale-110 transition-transform duration-200"></i>
            </a>
          </div>
        </div>
      </header>

      {/* Fixed Social Media Sidebar */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
        <a 
          href="https://www.facebook.com/groups/680827564461843"
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group"
          title="הצטרפו לקבוצת הפייסבוק שלנו"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </a>
        
        <a 
          href="mailto:malka@shalom-india.com?subject=Ref:%20Indiabymalka%20website"
          className="flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group"
          title="שלחו אימייל למלכה"
        >
          <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </a>
        
        <a 
          href="https://www.instagram.com/indiabymalka/"
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group"
          title="עקבו אחרינו באינסטגרם"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram text-lg group-hover:scale-110 transition-transform duration-200"></i>
        </a>
        
        <a 
          href="https://www.youtube.com/@INDIABYMALKA"
          className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group"
          title="צפו בסרטונים שלנו ביוטיוב"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube text-lg group-hover:scale-110 transition-transform duration-200"></i>
        </a>
        
        <a 
          href="https://wa.me/919980601979"
          className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group"
          target="_blank"
          rel="noopener noreferrer"
          title="שלחו הודעה בוואטסאפ"
        >
          <i className="fab fa-whatsapp text-lg group-hover:scale-110 transition-transform duration-200"></i>
        </a>
      </div>
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