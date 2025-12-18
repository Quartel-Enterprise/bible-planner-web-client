import { useTranslation } from 'react-i18next';
import { BookOpen, BarChart2, WifiOff } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Features() {
    const { t } = useTranslation();
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const features = [
        {
            icon: <BookOpen size={32} />,
            title: t('reading_plans'),
            description: t('reading_plans_desc')
        },
        {
            icon: <BarChart2 size={32} />,
            title: t('progress_tracking'),
            description: t('progress_tracking_desc')
        },
        {
            icon: <WifiOff size={32} />,
            title: t('offline_first'),
            description: t('offline_first_desc')
        },

    ];

    return (
        <section ref={ref as React.RefObject<HTMLElement>} style={{ padding: '2rem 0 4rem 0', backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <h3 className={`features-title-responsive ${isInView ? 'animate-slide-up' : 'animate-slide-up-initial'}`} style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', fontWeight: 700 }}>
                    {t('features_intro')} <span className="app-title-break">{t('app_title')}?</span>
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {features.map((feature, index) => (
                        <div key={index} className={isInView ? 'animate-slide-up' : 'animate-slide-up-initial'} style={{
                            padding: '2rem',
                            backgroundColor: 'var(--color-bg)',
                            borderRadius: '1rem',
                            border: '1px solid var(--color-border)',
                            transition: 'transform 0.2s',
                            cursor: 'default',
                            animationDelay: `${index * 0.1}s`
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
                                {feature.icon}
                            </div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{feature.title}</h4>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
