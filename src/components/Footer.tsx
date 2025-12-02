import { useTranslation } from 'react-i18next';

interface FooterProps {
    onNavigate: (page: 'home' | 'privacy') => void;
}

export function Footer({ onNavigate }: FooterProps) {
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--color-border)', marginTop: 'auto' }}>
            <div className="container">
                <button
                    onClick={() => onNavigate('privacy')}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        marginBottom: '0.5rem',
                        transition: 'color 0.2s',
                        textDecoration: 'underline'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                    {t('privacy_policy')}
                </button>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>{t('footer_text', { year: currentYear })}</p>
            </div>
        </footer>
    );
}
