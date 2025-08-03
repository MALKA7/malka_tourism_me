import React from 'react';
import { X, Search, Phone, ChevronDown } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  hasSubmenu: boolean;
  submenu?: Array<{
    id: string;
    label: string;
  }>;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  currentPage: string;
  onPageChange: (page: string) => void;
  activeSubmenu: string | null;
  onToggleSubmenu: (itemId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  searchResults: string[];
  onSearchResultClick: (pageId: string) => void;
  getPageTitle: (pageId: string) => string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  menuItems,
  currentPage,
  onPageChange,
  activeSubmenu,
  onToggleSubmenu,
  searchQuery,
  onSearchChange,
  searchResults,
  onSearchResultClick,
  getPageTitle
}) => {
  if (!isOpen) return null;

  const handleMenuClick = (itemId: string, hasSubmenu: boolean) => {
    if (hasSubmenu) {
      onToggleSubmenu(itemId);
    } else {
      onPageChange(itemId);
      onClose();
    }
  };

  const handleSubmenuClick = (itemId: string) => {
    onPageChange(itemId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            תפריט ראשי
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="חיפוש באתר..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-3 bg-gray-50 rounded-lg p-2 max-h-40 overflow-y-auto">
              <div className="text-xs text-gray-500 mb-2 hebrew-text">תוצאות חיפוש:</div>
              {searchResults.slice(0, 5).map((result) => (
                <button
                  key={result}
                  className="w-full text-right px-3 py-2 text-sm text-gray-700 hover:bg-white rounded-lg transition-colors hebrew-text"
                  onClick={() => onSearchResultClick(result)}
                >
                  {getPageTitle(result)}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Menu Items */}
        <div className="p-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => handleMenuClick(item.id, item.hasSubmenu)}
                  className={`w-full flex items-center justify-between px-4 py-4 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === item.id || (item.submenu && item.submenu.some(sub => sub.id === currentPage))
                      ? 'text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-sm'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="hebrew-text">{item.label}</span>
                  </div>
                  {item.hasSubmenu && (
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                      activeSubmenu === item.id ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
                
                {/* Submenu */}
                {item.hasSubmenu && activeSubmenu === item.id && (
                  <div className="mt-2 mr-4 space-y-1 bg-gray-50 rounded-lg p-2">
                    {item.submenu?.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleSubmenuClick(subItem.id)}
                        className={`flex items-center w-full text-right px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                          currentPage === subItem.id
                            ? 'text-blue-700 bg-white shadow-sm border border-blue-200'
                            : 'text-gray-600 hover:text-blue-700 hover:bg-white'
                        }`}
                      >
                        <span className="font-medium hebrew-text">{subItem.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact */}
        <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 className="font-bold text-gray-900 mb-3 hebrew-text">צור קשר מהיר</h3>
          <div className="space-y-3">
            <a 
              href="https://wa.me/919980601979"
              className="flex items-center justify-center p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp text-lg ml-3"></i>
              <span className="font-medium hebrew-text">WhatsApp</span>
            </a>
            <a 
              href="tel:+919980601979"
              className="flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5 ml-3" />
              <span className="font-medium hebrew-text">התקשר עכשיו</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;