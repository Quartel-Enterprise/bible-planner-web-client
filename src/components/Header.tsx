import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun, Globe } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    onNavigate: (page: 'home' | 'privacy') => void;
}

export function Header({ theme, toggleTheme, onNavigate }: HeaderProps) {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsLanguageMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        const isPrivacy = location.pathname.includes('/privacy');
        navigate(`/${lng}${isPrivacy ? '/privacy' : ''}`);
        setIsLanguageMenuOpen(false);
    };

    // Get the base language (e.g., 'pt-BR' -> 'pt') to match our resources keys
    const currentLang = i18n.language.split('-')[0];

    const getInstagramUrl = () => {
        const instagramUrl = 'https://www.instagram.com/';
        const baseInstagramUser = "bible.planner";
        const baseUrl = instagramUrl + baseInstagramUser;
        switch (currentLang) {
            case 'pt': return baseUrl + '.brasil';
            case 'es': return baseUrl + '.espanol';
            default: return baseUrl;
        }
    };

    const languages = [
        { code: 'en', label: t('language_en') },
        { code: 'pt', label: t('language_pt') },
        { code: 'es', label: t('language_es') }
    ];

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                        onClick={() => onNavigate('home')}
                    >
                        <img src="/logo.png" alt="Bible Planner Logo" style={{ width: '32px', height: '32px' }} />
                        <h1 className="header-title" style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 700 }}>{t('app_title')}</h1>
                    </div>

                    <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--color-border)' }} />

                    <a
                        href={getInstagramUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'var(--color-text-secondary)',
                            transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                        aria-label="Instagram"
                    >
                        <InstagramIcon size={20} />
                    </a>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }} ref={menuRef}>
                        <button
                            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem',
                                color: 'var(--color-text-secondary)'
                            }}
                            aria-label="Change language"
                        >
                            <Globe size={20} />
                        </button>

                        {isLanguageMenuOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                right: 0,
                                marginTop: '0.5rem',
                                backgroundColor: 'var(--color-surface)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px var(--color-shadow)',
                                padding: '0.5rem',
                                zIndex: 1000,
                                minWidth: '160px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.25rem'
                            }}>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        style={{
                                            textAlign: 'left',
                                            background: currentLang === lang.code ? 'var(--color-primary)' : 'transparent',
                                            color: currentLang === lang.code ? 'var(--color-button-text)' : 'var(--color-text)',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '6px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            width: '100%',
                                            fontSize: '0.95rem',
                                            transition: 'background-color 0.2s'
                                        }}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
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
