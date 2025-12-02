import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe } from 'lucide-react';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    onNavigate: (page: 'home' | 'privacy') => void;
}

export function Header({ theme, toggleTheme, onNavigate }: HeaderProps) {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const cycleLanguage = () => {
        const languages = ['en', 'pt', 'es'];
        const currentIndex = languages.indexOf(currentLang);
        const nextIndex = (currentIndex + 1) % languages.length;
        changeLanguage(languages[nextIndex]);
    };

    // Get the base language (e.g., 'pt-BR' -> 'pt') to match our resources keys
    const currentLang = i18n.language.split('-')[0];

    return (
        <header style={{
            padding: '1rem 0',
            borderBottom: '1px solid var(--color-border)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--color-bg)',
            zIndex: 100
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                    onClick={() => onNavigate('home')}
                >
                    <img src="/logo.png" alt="Bible Planner Logo" style={{ width: '32px', height: '32px' }} />
                    <h1 className="header-title" style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 700 }}>{t('app_title')}</h1>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <Globe
                            size={20}
                            style={{ color: 'var(--color-text-secondary)', cursor: 'pointer' }}
                            onClick={cycleLanguage}
                        />
                        <select
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={currentLang}
                            className="language-select"
                            style={{
                                background: 'transparent',
                                color: 'var(--color-text)',
                                border: 'none',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                outline: 'none',
                                marginLeft: '0.5rem'
                            }}
                        >
                            <option value="en">English</option>
                            <option value="pt">Português</option>
                            <option value="es">Español</option>
                        </select>
                    </div>

                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            padding: '0.5rem',
                            display: 'flex',
                            border: '1px solid var(--color-border)',
                            borderRadius: '50%'
                        }}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
