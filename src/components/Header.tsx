import { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun, Globe, Menu, X, Download } from 'lucide-react';
import { InstagramIcon, GooglePlayIcon, AppleIcon } from './Icons';
import { useStoreLinks } from '../hooks/useStoreLinks';
import { useDeviceDetection } from '../hooks/useDeviceDetection';
import { useDownloadConfirmation } from '../hooks/useDownloadConfirmation';
import { logEvent } from '../analytics';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    onNavigate: (page: 'home' | 'privacy') => void;
}

const useMenuCloseOnBack = (
    isOpen: boolean,
    closeMenu: () => void,
    menuId: string,
    dismissMethodRef: React.MutableRefObject<string>
) => {
    useEffect(() => {
        if (isOpen) {
            window.history.pushState({ [`${menuId}Open`]: true }, '', window.location.href);

            const handlePopState = () => {
                const method = dismissMethodRef.current || 'back_button';
                if (method === 'back_button') {
                    // Only log if it's an actual back button press (implied)
                }
                closeMenu();
                // Reset is up to the closer usually, but for mobile menu specifics:
                if (menuId === 'mobile_menu') {
                    logEvent({ name: 'menu_dismiss', params: { menu_id: 'mobile_menu', method } });
                    dismissMethodRef.current = 'back_button';
                }
            };

            window.addEventListener('popstate', handlePopState);
            return () => window.removeEventListener('popstate', handlePopState);
        }
    }, [isOpen, closeMenu, menuId, dismissMethodRef]);
};

export function Header({ theme, toggleTheme, onNavigate }: HeaderProps) {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const { isApple, isIos, isAndroid } = useDeviceDetection();
    const isAppleDevice = isApple;

    const { handleDownload, DownloadConfirmationModal } = useDownloadConfirmation();

    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);
    const [isDownloadMenuClosing, setIsDownloadMenuClosing] = useState(false);
    const [isLanguageMenuClosing, setIsLanguageMenuClosing] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileTriggerRef = useRef<HTMLButtonElement>(null);
    const downloadMenuRef = useRef<HTMLDivElement>(null);
    const dismissMethodRef = useRef<'back_button' | 'toggle_button' | 'click_outside' | 'navigation' | 'close_icon'>('back_button');

    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            dismissMethodRef.current = 'close_icon';
            window.history.back();
        } else {
            dismissMethodRef.current = 'back_button'; // Reset default
            setIsMobileMenuOpen(true);
        }
    };

    const closeMobileMenu = useCallback(() => {
        if (isMobileMenuOpen) {
            dismissMethodRef.current = 'click_outside';
            window.history.back();
        }
    }, [isMobileMenuOpen]);

    const closeDownloadMenu = useCallback(() => {
        logEvent({ name: 'menu_dismiss', params: { menu_id: 'download_menu', method: dismissMethodRef.current } });
        setIsDownloadMenuClosing(true);
        setTimeout(() => {
            setIsDownloadMenuOpen(false);
            setIsDownloadMenuClosing(false);
            dismissMethodRef.current = 'back_button'; // Reset
        }, 200); // Match animation duration
    }, []);

    const closeLanguageMenu = useCallback(() => {
        logEvent({ name: 'menu_dismiss', params: { menu_id: 'language_menu', method: dismissMethodRef.current } });
        setIsLanguageMenuClosing(true);
        setTimeout(() => {
            setIsLanguageMenuOpen(false);
            setIsLanguageMenuClosing(false);
            dismissMethodRef.current = 'back_button'; // Reset
        }, 200); // Match animation duration
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;

            if (menuRef.current && !menuRef.current.contains(target)) {
                if (isLanguageMenuOpen && !isLanguageMenuClosing) {
                    dismissMethodRef.current = 'click_outside';
                    window.history.back();
                }
            }

            if (downloadMenuRef.current && !downloadMenuRef.current.contains(target)) {
                if (isDownloadMenuOpen && !isDownloadMenuClosing) {
                    dismissMethodRef.current = 'click_outside';
                    window.history.back();
                }
            }

            if (isMobileMenuOpen &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(target) &&
                mobileTriggerRef.current &&
                !mobileTriggerRef.current.contains(target)) {
                closeMobileMenu();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, isMobileMenuOpen, isDownloadMenuOpen, isDownloadMenuClosing, isLanguageMenuOpen, isLanguageMenuClosing, closeMobileMenu, closeDownloadMenu, closeLanguageMenu]);

    // Removed useEffect that triggered on location change to avoid cascading renders

    // Helper to close all simple menus (not history-bound mobile menu necessarily, but good for cleanup)
    const closeDropdowns = () => {
        if (isLanguageMenuOpen && !isLanguageMenuClosing) {
            closeLanguageMenu();
        }
        if (isDownloadMenuOpen && !isDownloadMenuClosing) {
            closeDownloadMenu();
        }
    };

    const handleLogoClick = (target: 'icon' | 'text') => {
        logEvent({ name: 'logo_click', params: { target } });
        dismissMethodRef.current = 'navigation';
        closeDropdowns();
        if (isMobileMenuOpen) {
            dismissMethodRef.current = 'navigation';
            setIsMobileMenuOpen(false); // Direct close for navigation, bypassing history if simpler or handle standard
        }
        onNavigate('home');
    }

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        const isPrivacy = location.pathname.includes('/privacy');
        const isTerms = location.pathname.includes('/terms');

        let path = `/${language}`;
        if (isPrivacy) path += '/privacy';
        if (isTerms) path += '/terms';

        navigate(path);
        closeDropdowns();
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    useMenuCloseOnBack(isMobileMenuOpen, () => setIsMobileMenuOpen(false), 'mobile_menu', dismissMethodRef as any);
    useMenuCloseOnBack(isDownloadMenuOpen, closeDownloadMenu, 'download_menu', dismissMethodRef as any);
    useMenuCloseOnBack(isLanguageMenuOpen, closeLanguageMenu, 'language_menu', dismissMethodRef as any);

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

    const { playStoreUrl, appStoreUrl } = useStoreLinks();

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
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                    >
                        <img
                            src="/logo.png"
                            alt="Bible Planner Logo"
                            width={32}
                            height={32}
                            style={{ width: '32px', height: '32px' }}
                            onClick={() => handleLogoClick('icon')}
                        />
                        <h1
                            className="header-title"
                            style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 700 }}
                            onClick={() => handleLogoClick('text')}
                        >
                            {t('app_title')}
                        </h1>
                    </div>

                    <div className="desktop-only-item" style={{ gap: '1rem' }}>
                        <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--color-border)' }} />

                        <a
                            href={getInstagramUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => logEvent({ name: 'social_click', params: { platform: 'instagram', origin: 'header_desktop' } })}
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
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }} ref={downloadMenuRef}>
                        <button
                            onClick={() => {
                                if (isIos) {
                                    logEvent({ name: 'download_click', params: { platform: 'ios', origin: 'header_main_button' } });
                                    window.open(appStoreUrl, '_blank');
                                    return;
                                }
                                if (isAndroid) {
                                    logEvent({ name: 'download_click', params: { platform: 'android', origin: 'header_main_button' } });
                                    window.open(playStoreUrl, '_blank');
                                    return;
                                }

                                if (!isDownloadMenuOpen) {
                                    logEvent({ name: 'menu_click', params: { menu_id: 'download_menu' } });
                                    setIsDownloadMenuOpen(true);
                                } else {
                                    dismissMethodRef.current = 'toggle_button';
                                    window.history.back();
                                }
                            }}
                            className="primary-button animate-pulse download-action-button"
                        >
                            <Download size={18} />
                            <span className="desktop-text text-nowrap">{t('download')}</span>
                            <span className="mobile-text-short">{t('download_short')}</span>
                        </button>

                        {isDownloadMenuOpen && (
                            <div className={isDownloadMenuClosing ? "dropdown-menu-exit" : "dropdown-menu-enter"} style={{
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
                                minWidth: '180px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.25rem'
                            }}>
                                {isAppleDevice ? (
                                    <>
                                        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="menu-item" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '6px',
                                            color: 'var(--color-text)',
                                            fontSize: '0.95rem',
                                            textDecoration: 'none',
                                            transition: 'background-color 0.2s'
                                        }}
                                            onClick={(e) => {
                                                logEvent({ name: 'download_click', params: { platform: 'ios', origin: 'header_menu' } });
                                                handleDownload('ios', appStoreUrl, e);
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            <AppleIcon size={20} />
                                            <span>{t('option_ios')}</span>
                                        </a>
                                        <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="menu-item" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '6px',
                                            color: 'var(--color-text)',
                                            fontSize: '0.95rem',
                                            textDecoration: 'none',
                                            transition: 'background-color 0.2s'
                                        }}
                                            onClick={(e) => {
                                                logEvent({ name: 'download_click', params: { platform: 'android', origin: 'header_menu' } });
                                                handleDownload('android', playStoreUrl, e);
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            <GooglePlayIcon size={20} />
                                            <span>{t('option_android')}</span>
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="menu-item" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '6px',
                                            color: 'var(--color-text)',
                                            fontSize: '0.95rem',
                                            textDecoration: 'none',
                                            transition: 'background-color 0.2s'
                                        }}
                                            onClick={(e) => {
                                                logEvent({ name: 'download_click', params: { platform: 'android', origin: 'header_menu' } });
                                                handleDownload('android', playStoreUrl, e);
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            <GooglePlayIcon size={20} />
                                            <span>{t('option_android')}</span>
                                        </a>
                                        <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="menu-item" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '6px',
                                            color: 'var(--color-text)',
                                            fontSize: '0.95rem',
                                            textDecoration: 'none',
                                            transition: 'background-color 0.2s'
                                        }}
                                            onClick={(e) => {
                                                logEvent({ name: 'download_click', params: { platform: 'ios', origin: 'header_menu' } });
                                                handleDownload('ios', appStoreUrl, e);
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            <AppleIcon size={20} />
                                            <span>{t('option_ios')}</span>
                                        </a>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="desktop-actions">
                        <div style={{ position: 'relative' }} ref={menuRef}>
                            <button
                                onClick={() => {
                                    if (!isLanguageMenuOpen) {
                                        logEvent({ name: 'menu_click', params: { menu_id: 'language_menu' } });
                                        setIsLanguageMenuOpen(true);
                                    } else {
                                        dismissMethodRef.current = 'toggle_button';
                                        window.history.back();
                                    }
                                }}
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
                                <div className={isLanguageMenuClosing ? "dropdown-menu-exit" : "dropdown-menu-enter"} style={{
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
                                            onClick={() => {
                                                changeLanguage(lang.code);
                                                logEvent({ name: 'language_change', params: { language: lang.code } });
                                            }}
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
                            onClick={() => {
                                toggleTheme();
                                logEvent({ name: 'theme_change', params: { theme: theme === 'light' ? 'dark' : 'light' } });
                            }}
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

                    <button
                        ref={mobileTriggerRef}
                        className={`mobile-menu-trigger ${isMobileMenuOpen ? 'open' : ''}`}
                        onClick={() => {
                            if (!isMobileMenuOpen) {
                                logEvent({ name: 'menu_click', params: { menu_id: 'mobile_menu' } });
                            } else {
                                logEvent({ name: 'menu_dismiss', params: { menu_id: 'mobile_menu' } });
                            }
                            toggleMobileMenu();
                        }}
                        aria-label="Toggle mobile menu"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            color: 'var(--color-text)',
                            outline: 'none'
                        }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div
                ref={mobileMenuRef}
                className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
                aria-hidden={!isMobileMenuOpen}
                style={{
                    position: 'fixed',
                    top: '73px',
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--color-bg)',
                    borderBottom: '1px solid var(--color-border)',
                    padding: '1rem',
                    zIndex: 99,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: '0 4px 12px var(--color-shadow)',
                    visibility: isMobileMenuOpen ? 'visible' : 'hidden',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s'
                }}>
                <a
                    href={getInstagramUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => logEvent({ name: 'social_click', params: { platform: 'instagram', origin: 'mobile_menu' } })}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        backgroundColor: 'var(--color-surface)'
                    }}
                >
                    <InstagramIcon size={20} />
                    <span>Instagram</span>
                </a>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-secondary)', padding: '0 0.5rem' }}>
                        {t('language')}
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    changeLanguage(lang.code);
                                    logEvent({ name: 'language_change', params: { language: lang.code } });
                                }}
                                style={{
                                    textAlign: 'center',
                                    background: currentLang === lang.code ? 'var(--color-primary)' : 'var(--color-surface)',
                                    color: currentLang === lang.code ? 'var(--color-button-text)' : 'var(--color-text)',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem'
                                }}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => {
                        toggleTheme();
                        logEvent({ name: 'theme_change', params: { theme: theme === 'light' ? 'dark' : 'light' } });
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        backgroundColor: 'var(--color-surface)',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--color-text)',
                        fontSize: '1rem'
                    }}
                >
                    <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>

                <div style={{ borderTop: '1px solid var(--color-border)', margin: '0.5rem 0' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <button onClick={() => {
                        logEvent({ name: 'select_content', params: { content_type: 'legal', item_id: 'privacy_policy', origin: 'mobile_menu' } });
                        navigate(`/${currentLang}/privacy`);
                        setIsMobileMenuOpen(false);
                    }} style={{ textAlign: 'left', padding: '0.5rem' }}>{t('privacy_policy')}</button>
                    <button onClick={() => {
                        logEvent({ name: 'select_content', params: { content_type: 'legal', item_id: 'terms_of_service', origin: 'mobile_menu' } });
                        navigate(`/${currentLang}/terms`);
                        setIsMobileMenuOpen(false);
                    }} style={{ textAlign: 'left', padding: '0.5rem' }}>{t('terms_of_service')}</button>
                </div>
            </div>
            {DownloadConfirmationModal}
        </header >
    );
}
