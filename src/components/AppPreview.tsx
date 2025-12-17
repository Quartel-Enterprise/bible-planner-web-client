import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

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
        MSStream ?: never;
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
        <section style={{ padding: '0 0 4rem', textAlign: 'center' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Video Container */}
                <div
                    className="app-preview-container animate-fade-in"
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '320px', // Typical phone width
                        aspectRatio: '1080/2338',
                        borderRadius: '16px', // Standard rounded corners
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)', // Soft shadow
                        background: '#000',
                        margin: '0 auto',
                        flexShrink: 0
                    }}
                >
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1`}
                        title="App Preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'block', // Removes bottom white space (inline gap)
                            border: 'none',
                        }}
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
