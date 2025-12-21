import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

export const useStoreLinks = () => {
    const { i18n } = useTranslation();

    const playStoreUrl = useMemo(() => {
        const lang = (i18n.language || 'en').split('-')[0];
        const baseUrl = 'https://play.google.com/store/apps/details?id=com.quare.bibleplanner';
        if (lang === 'pt') return `${baseUrl}&hl=pt-BR`;
        if (lang === 'es') return `${baseUrl}&hl=es`;
        return baseUrl;
    }, [i18n.language]);

    const appStoreUrl = useMemo(() => {
        const lang = (i18n.language || 'en').split('-')[0];
        const baseUrl = 'https://apps.apple.com/us/app/bible-planner-reading-plans/id6756151777';
        if (lang === 'pt') return baseUrl.replace('/us/', '/br/');
        if (lang === 'es') return baseUrl.replace('/us/', '/es/');
        return baseUrl;
    }, [i18n.language]);

    return { playStoreUrl, appStoreUrl };
};
