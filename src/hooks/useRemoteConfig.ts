import { useEffect, useState } from 'react';
import { fetchAndActivate, getBoolean, onConfigUpdate } from 'firebase/remote-config';
import { remoteConfig } from '../firebase';

export function useRemoteConfig() {
    const [showInstagram, setShowInstagram] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                // Initial fetch
                await fetchAndActivate(remoteConfig);
                const showInsta = getBoolean(remoteConfig, 'show_instagram');
                setShowInstagram(showInsta);
            } catch (error) {
                console.error("Error fetching remote config:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchConfig();

        // Real-time listener
        const unsubscribe = onConfigUpdate(remoteConfig, {
            next: () => {
                fetchAndActivate(remoteConfig).then(() => {
                    const showInsta = getBoolean(remoteConfig, 'show_instagram');
                    setShowInstagram(showInsta);
                });
            },
            error: (error) => {
                console.error("Remote config update error:", error);
            },
            complete: () => { }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return { showInstagram, loading };
}
