import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

// Services Pages (6)
import TripPlanningPage from './components/TripPlanningPage';
import TripExecutionPage from './components/TripExecutionPage';
import HebrewGuidingPage from './components/HebrewGuidingPage';
import PersonalHostingPage from './components/PersonalHostingPage';
import TransportServicesPage from './components/TransportServicesPage';
import VisaAssistancePage from './components/VisaAssistancePage';

// Day Tours Pages (3)
import MumbaiSharedTourPage from './components/MumbaiSharedTourPage';
import MumbaiPrivateTourPage from './components/MumbaiPrivateTourPage';
import AdditionalCitiesPage from './components/AdditionalCitiesPage';

// Organized Tours Pages (2)
import KeralaOrganizedTourPage from './components/KeralaOrganizedTourPage';
import KolkataOrganizedTourPage from './components/KolkataOrganizedTourPage';

// New Pages
import WeddingsPage from './components/WeddingsPage';
// Main Pages
import TestimonialsPage from './components/TestimonialsPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      // Main Pages (8)
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage onPageChange={setCurrentPage} />;
      
      // Services Pages (6)
      case 'trip-planning':
        return <TripPlanningPage onPageChange={setCurrentPage} />;
      case 'trip-execution':
        return <TripExecutionPage onPageChange={setCurrentPage} />;
      case 'hebrew-guiding':
        return <HebrewGuidingPage onPageChange={setCurrentPage} />;
      case 'personal-hosting':
        return <PersonalHostingPage onPageChange={setCurrentPage} />;
      case 'transport-services':
        return <TransportServicesPage onPageChange={setCurrentPage} />;
      case 'visa-assistance':
        return <VisaAssistancePage onPageChange={setCurrentPage} />;
      
      // Day Tours Pages (5)
      case 'mumbai-shared':
        return <MumbaiSharedTourPage onPageChange={setCurrentPage} />;
      case 'mumbai-private':
        return <div className="min-h-screen py-12 flex items-center justify-center fade-in">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 hebrew-text">עמוד בבנייה</h1>
            <p className="text-xl text-gray-600 mb-8 hebrew-text">העמוד שביקשתם עדיין בפיתוח</p>
            <button 
              onClick={() => setCurrentPage('home')}
              className="btn-primary"
            >
              חזרה לעמוד הבית
            </button>
          </div>
        </div>;
      case 'additional-cities':
        return <AdditionalCitiesPage onPageChange={setCurrentPage} />;
      
      // Organized Tours Pages (2)
      case 'west-south-tour':
        return <WestSouthTourPage onPageChange={setCurrentPage} />;
      case 'west-east-tour':
        return <WestEastTourPage onPageChange={setCurrentPage} />;
      
      // New Pages
      case 'weddings':
        return <WeddingsPage onPageChange={setCurrentPage} />;
      
      // Main Pages continued
      case 'testimonials':
        return <TestimonialsPage onPageChange={setCurrentPage} />;
      case 'blog':
        return <BlogPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage onPageChange={setCurrentPage} />;
      default:
        return (
          <div className="min-h-screen py-12 flex items-center justify-center fade-in">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 hebrew-text">עמוד בבנייה</h1>
              <p className="text-xl text-gray-600 mb-8 hebrew-text">העמוד שביקשתם עדיין בפיתוח</p>
              <button 
                onClick={() => setCurrentPage('home')}
                className="btn-primary"
              >
                חזרה לעמוד הבית
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;