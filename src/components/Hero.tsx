import { useTranslation } from 'react-i18next';
import { AndroidIcon, AppleIcon } from './Icons';
import { useMemo } from 'react';

export function Hero() {
  const { t } = useTranslation();

  const isAndroid = useMemo(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android/.test(userAgent);
  }, []);

  return (
    <section style={{ padding: '2rem 0', textAlign: 'center' }}>
      <div className="container">
        <h2 className="animate-slide-up hero-title-responsive text-nowrap" style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(45deg, var(--color-primary), var(--color-primary-hover))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800 }}>
          {t('app_title')}
        </h2>
        <p className="animate-slide-up delay-100" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--color-text-secondary)' }}>
          {t('app_description')}
        </p>

        <p className="animate-slide-up delay-200" style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--color-text)' }}>
          {t('download_suggestion')}
        </p>

        <div className="animate-slide-up delay-300 download-buttons-container" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {isAndroid ? (
            <>
              <button disabled style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', fontSize: '1.2rem', opacity: 0.6, cursor: 'not-allowed', backgroundColor: 'var(--color-surface)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
                <AndroidIcon size={28} />
                <span>Android <small style={{ display: 'block', fontSize: '0.7em' }}>({t('coming_soon')})</small></span>
              </button>
              <a href="https://apps.apple.com/us/app/bible-planner-reading-plans/id6756151777" target="_blank" rel="noopener noreferrer" className="animate-shine" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', fontSize: '1.2rem', backgroundColor: 'var(--color-primary)', color: 'var(--color-button-text)', border: '1px solid var(--color-primary)', textDecoration: 'none', borderRadius: '8px', transition: 'transform 0.2s', cursor: 'pointer', boxShadow: '0 4px 14px rgba(var(--color-primary-rgb), 0.4)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <AppleIcon size={28} />
                <span>iOS</span>
              </a>
            </>
          ) : (
            <>
              <a href="https://apps.apple.com/us/app/bible-planner-reading-plans/id6756151777" target="_blank" rel="noopener noreferrer" className="animate-shine" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', fontSize: '1.2rem', backgroundColor: 'var(--color-primary)', color: 'var(--color-button-text)', border: '1px solid var(--color-primary)', textDecoration: 'none', borderRadius: '8px', transition: 'transform 0.2s', cursor: 'pointer', boxShadow: '0 4px 14px rgba(var(--color-primary-rgb), 0.4)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <AppleIcon size={28} />
                <span>iOS</span>
              </a>
              <button disabled style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', fontSize: '1.2rem', opacity: 0.6, cursor: 'not-allowed', backgroundColor: 'var(--color-surface)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
                <AndroidIcon size={28} />
                <span>Android <small style={{ display: 'block', fontSize: '0.7em' }}>({t('coming_soon')})</small></span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
