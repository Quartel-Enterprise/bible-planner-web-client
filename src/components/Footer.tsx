import { useTranslation } from 'react-i18next';
import { logEvent } from '../analytics';

interface FooterProps {
    onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

export function Footer({ onNavigate }: FooterProps) {
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--color-border)', marginTop: 'auto' }}>
            <div className="container">
                <div className="desktop-only-item" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => {
                            logEvent({ name: 'select_content', params: { content_type: 'legal', item_id: 'privacy_policy', origin: 'footer' } });
                            onNavigate('privacy');
                        }}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            transition: 'color 0.2s',
                            textDecoration: 'underline',
                            outline: 'none'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                    >
                        {t('privacy_policy')}
                    </button>
                    <span className="footer-separator" style={{ color: 'var(--color-text-secondary)', alignSelf: 'center' }}>|</span>
                    <button
                        onClick={() => {
                            logEvent({ name: 'select_content', params: { content_type: 'legal', item_id: 'terms_of_service', origin: 'footer' } });
                            onNavigate('terms');
                        }}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            transition: 'color 0.2s',
                            textDecoration: 'underline',
                            outline: 'none'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                    >
                        {t('terms_of_service')}
                    </button>
                </div>
                <p className="footer-text-responsive" style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>{t('footer_text', { year: currentYear })}</p>
            </div>
        </footer>
    );
}
