import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { VideoCard } from './VideoCard';

// Video IDs
const VIDEOS = {
    pt: {
        android: 'S9nmKZkdisU',
        ios: '_-IfhjINZGY',
    },
    en: {
        android: 'pK_arldzMWY',
        ios: 'u01hLh5iYiI',
    },
    es: {
        android: '7PUfGIYP10g',
        ios: 'nTsk06Jvtl4',
    },
};

declare global {
    interface Window {
        MSStream?: never;
    }
}

export function AppPreview() {
    const { i18n } = useTranslation();

    const isApple = useMemo(() => {
        // Logic: macOS or iOS -> use iOS video
        // Others -> use Android video
        const userAgent = navigator.userAgent || '';

        // Check for iOS (iPhone, iPad, iPod)
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return true;
        }

        // Check for macOS
        // Uses userAgent as the standard way to detect OS for marketing content
        return /Macintosh|Mac OS X/.test(userAgent);
    }, []);

    const videoId = useMemo(() => {
        const currentLang = i18n.language || 'en';
        const lang = currentLang.split('-')[0]; // 'pt-BR' -> 'pt'

        // Default to 'en' if language not supported
        const langKey = (['pt', 'es'].includes(lang) ? lang : 'en') as keyof typeof VIDEOS;

        const osKey = isApple ? 'ios' : 'android';

        return VIDEOS[langKey][osKey];
    }, [i18n.language, isApple]);

    return (
        <section className="app-preview-section" style={{ textAlign: 'center' }}>
            <div className="container app-preview-wrapper"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <VideoCard key={videoId} videoId={videoId} />
            </div>
        </section>
    );
}
