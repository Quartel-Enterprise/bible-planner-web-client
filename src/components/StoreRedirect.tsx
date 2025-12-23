import { useEffect } from 'react';
import { useStoreLinks } from '../hooks/useStoreLinks';

interface StoreRedirectProps {
    platform: 'ios' | 'android';
}

export const StoreRedirect = ({ platform }: StoreRedirectProps) => {
    const { appStoreUrl, playStoreUrl } = useStoreLinks();

    useEffect(() => {
        const targetUrl = platform === 'ios' ? appStoreUrl : playStoreUrl;
        if (targetUrl) {
            window.location.replace(targetUrl);
        }
    }, [platform, appStoreUrl, playStoreUrl]);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-color)'
        }}>
            <p>Redirecting to store...</p>
        </div>
    );
};
