import { useTranslation } from 'react-i18next';
import { AppleIcon, AndroidIcon } from './Icons';
import { useInView } from '../hooks/useInView';
import { useMemo } from 'react';

export function CTASection() {
    const { t } = useTranslation();
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const isAppleDevice = useMemo(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        return /macintosh|mac os x|iphone|ipad|ipod/.test(userAgent);
    }, []);

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className={isInView ? 'animate-slide-up' : ''}
            style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)',
                padding: '3rem 2rem',
                textAlign: 'center',
            }}
        >
            <div className="container">
                <h2
                    style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'var(--color-button-text)',
                        marginBottom: '1rem',
                        lineHeight: 1.2,
                    }}
                >
                    {t('cta_title')}
                </h2>
                <p
                    style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-button-text)',
                        marginBottom: '2rem',
                        opacity: 0.95,
                    }}
                >
                    {t('cta_subtitle')}
                </p>

                <div
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                    }}
                >
                    {isAppleDevice ? (
                        <>
                            <a
                                href="https://apps.apple.com/us/app/bible-planner-reading-plans/id6756151777"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    transition: 'transform 0.2s',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.75rem 1.5rem',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                    }}
                                >
                                    <AppleIcon size={28} />
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{t('download_on_the')}</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>App Store</div>
                                    </div>
                                </div>
                            </a>

                            <div
                                style={{
                                    display: 'inline-block',
                                    opacity: 0.6,
                                    cursor: 'not-allowed',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.75rem 1.5rem',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                    }}
                                >
                                    <AndroidIcon size={28} />
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{t('get_it_on')}</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Google Play</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                style={{
                                    display: 'inline-block',
                                    opacity: 0.6,
                                    cursor: 'not-allowed',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.75rem 1.5rem',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                    }}
                                >
                                    <AndroidIcon size={28} />
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{t('get_it_on')}</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Google Play</div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://apps.apple.com/us/app/bible-planner-reading-plans/id6756151777"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    transition: 'transform 0.2s',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.75rem 1.5rem',
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        borderRadius: '8px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                    }}
                                >
                                    <AppleIcon size={28} />
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{t('download_on_the')}</div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>App Store</div>
                                    </div>
                                </div>
                            </a>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
