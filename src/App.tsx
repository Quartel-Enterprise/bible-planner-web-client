import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { PrivacyPolicy } from './components/PrivacyPolicy'

function App() {
  const { t, i18n } = useTranslation();

  // Initialize theme from system preference or default to light
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [currentPage, setCurrentPage] = useState<'home' | 'privacy'>('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Update page title based on current page and language
  useEffect(() => {
    if (currentPage === 'home') {
      document.title = t('app_title');
    } else {
      document.title = `${t('privacy_policy')} - ${t('app_title')}`;
    }
  }, [currentPage, t, i18n.language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavigate = (page: 'home' | 'privacy') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header theme={theme} toggleTheme={toggleTheme} onNavigate={handleNavigate} />
      <main style={{ flex: 1 }}>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Features />
          </>
        ) : (
          <PrivacyPolicy />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
