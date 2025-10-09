import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import './i18n';

// Components
import {Navigation} from './components/Navigation';
import {LoadingAnimation} from './components/LoadingAnimation';
// import PrayerWall from './components/PrayerWall'; // TODO: Funcționalitate de adăugat mai târziu
import { CookieBanner } from './components/CookieBanner';

// Pages
import {HomePage} from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import {AdminDashboard} from './pages/AdminDashboard';
import {AboutPage} from './pages/AboutPage';
import {ProjectsPage} from './pages/ProjectsPage';
import {EventsPage} from './pages/EventsPage';
// import {BookPage} from './pages/BookPage'; // TODO: Pagina comentată - doar secțiunea din home rămâne activă
import {ContactPage} from './pages/ContactPage';
import {PrivacyPage} from './pages/PrivacyPage';
import {TermsPage} from './pages/TermsPage';
import { Form } from './form/Form';
import { Table } from './table/Table';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <LoadingAnimation isLoading={isLoading} />
        
        {!isLoading && (
          <div>
            <Navigation />
            <Toaster position="top-right" />
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/events" element={<EventsPage />} />
              {/* <Route path="/book" element={<BookPage />} /> */} {/* TODO: Pagina comentată - doar secțiunea din home rămâne activă */}
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/form" element={<Form />} />
              <Route path="/table" element={<Table />} />
              <Route path="/tabel-admin-amicus-2024-secret" element={<Table />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/admin-dashboard-amicus-internal-2024" element={<AdminDashboard />} />
              {/* <Route path="/prayer-wall" element={<PrayerWall />} /> */} {/* TODO: Funcționalitate de adăugat mai târziu */}
            </Routes>
            
            <CookieBanner />
          </div>
        )}
      </div>
    </Router>
  );
}
