import { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
const Features = lazy(() => import('./components/Features').then(module => ({ default: module.Features })));

import { Footer } from './components/Footer'

const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./components/TermsOfService').then(module => ({ default: module.TermsOfService })));

function LanguageRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    let targetLang = 'en'; // default to English

    if (browserLang.startsWith('pt')) {
      targetLang = 'pt';
    } else if (browserLang.startsWith('es')) {
      targetLang = 'es';
    }

    // Redirect to detected language
    navigate(`/${targetLang}`, { replace: true });
  }, [navigate]);

  return null;
}

function AppContent() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  // Initialize theme from system preference or default to light
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Update language based on route
  useEffect(() => {
    if (lang && ['en', 'pt', 'es'].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // Update page title based on current page and language
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/privacy')) {
      document.title = `${t('privacy_policy')} - ${t('app_title')}`;
    } else if (path.includes('/terms')) {
      document.title = `${t('terms_of_service')} - ${t('app_title')}`;
    } else {
      document.title = t('app_title');
    }
  }, [t, i18n.language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavigate = (page: 'home' | 'privacy' | 'terms') => {
    const currentLang = i18n.language.split('-')[0];
    if (page === 'home') {
      navigate(`/${currentLang}`);
    } else if (page === 'privacy') {
      navigate(`/${currentLang}/privacy`);
    } else {
      navigate(`/${currentLang}/terms`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header theme={theme} toggleTheme={toggleTheme} onNavigate={handleNavigate} />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="" element={<><Hero /><Suspense fallback={null}><Features /></Suspense></>} />
          <Route path="privacy" element={<Suspense fallback={<div>Loading...</div>}><PrivacyPolicy /></Suspense>} />
          <Route path="terms" element={<Suspense fallback={<div>Loading...</div>}><TermsOfService /></Suspense>} />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Detect language and redirect */}
        <Route path="/" element={<LanguageRedirect />} />

        {/* Language-specific routes */}
        <Route path="/:lang/*" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
