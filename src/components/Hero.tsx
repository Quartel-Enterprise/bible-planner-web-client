import { useTranslation } from 'react-i18next';
import { AndroidIcon, AppleIcon } from './Icons';
import { useMemo } from 'react';
import { useInView } from '../hooks/useInView';
import { useStoreLinks } from '../hooks/useStoreLinks';
import { logEvent } from '../analytics';

export function Hero() {
  const { t } = useTranslation();
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const isAndroid = useMemo(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android/.test(userAgent);
  }, []);

  const { playStoreUrl, appStoreUrl } = useStoreLinks();



  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`hero-section ${isInView ? 'animate-responsive-left' : 'animate-responsive-left-initial'}`}>
      <div className="container">
        <h2 className={`hero-title-responsive text-nowrap ${isInView ? 'animate-slide-up' : 'animate-slide-up-initial'}`} style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(45deg, var(--color-primary), var(--color-primary-hover))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800 }}>
          {t('app_title')}
        </h2>
        <p className={`delay-100 ${isInView ? 'animate-slide-up' : 'animate-slide-up-initial'}`} style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--color-text-secondary)' }}>
          {t('app_description')}
        </p>

        <p className={`delay-200 ${isInView ? 'animate-slide-up' : 'animate-slide-up-initial'}`} style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--color-text)' }}>
          {t('download_suggestion')}
        </p>

        <div className={`delay-300 download-buttons-container ${isInView ? 'animate-slide-up' : 'animate-slide-up-initial'}`} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {isAndroid ? (
            <>
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer"
                onClick={() => logEvent({ name: 'download_click', params: { platform: 'android', origin: 'hero' } })}
                className="animate-shine"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', fontSize: '1.2rem', backgroundColor: 'var(--color-primary)', color: 'var(--color-button-text)', border: '1px solid var(--color-primary)', textDecoration: 'none', borderRadius: '8px', transition: 'transform 0.2s', cursor: 'pointer', boxShadow: '0 4px 14px rgba(var(--color-primary-rgb), 0.4)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <AndroidIcon size={28} />
                <span>Android</span>
              </a>
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer"
                onClick={() => logEvent({ name: 'download_click', params: { platform: 'ios', origin: 'hero' } })}
                className="animate-shine" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', fontSize: '1.2rem', backgroundColor: 'var(--color-primary)', color: 'var(--color-button-text)', border: '1px solid var(--color-primary)', textDecoration: 'none', borderRadius: '8px', transition: 'transform 0.2s', cursor: 'pointer', boxShadow: '0 4px 14px rgba(var(--color-primary-rgb), 0.4)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <AppleIcon size={28} />
                <span>iOS</span>
              </a>
            </>
          ) : (
            <>
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer"
                onClick={() => logEvent({ name: 'download_click', params: { platform: 'ios', origin: 'hero' } })}
                className="animate-shine" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', fontSize: '1.2rem', backgroundColor: 'var(--color-primary)', color: 'var(--color-button-text)', border: '1px solid var(--color-primary)', textDecoration: 'none', borderRadius: '8px', transition: 'transform 0.2s', cursor: 'pointer', boxShadow: '0 4px 14px rgba(var(--color-primary-rgb), 0.4)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <AppleIcon size={28} />
                <span>iOS</span>
              </a>
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer"
                onClick={() => logEvent({ name: 'download_click', params: { platform: 'android', origin: 'hero' } })}
                className="animate-shine"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', fontSize: '1.2rem', backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', border: '1px solid var(--color-border)', textDecoration: 'none', borderRadius: '8px', transition: 'transform 0.2s', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <AndroidIcon size={28} />
                <span>Android</span>
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
