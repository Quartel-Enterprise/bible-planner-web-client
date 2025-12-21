import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDeviceDetection } from './useDeviceDetection';
import { useStoreLinks } from './useStoreLinks';
import { logEvent } from '../analytics';
import { DownloadConfirmationModal } from '../components/DownloadConfirmationModal';

export function useDownloadConfirmation() {
    const { t } = useTranslation();
    const { isApple, isAndroid, isIos, isMac } = useDeviceDetection();
    const { playStoreUrl, appStoreUrl } = useStoreLinks();

    const [isOpen, setIsOpen] = useState(false);
    const [config, setConfig] = useState<{
        clickedUrl: string;
        recommendedUrl: string;
        clickedStoreName: string;
        recommendedStoreName: string;
        currentPlatform: string;
    } | null>(null);

    const handleDownload = (targetPlatform: 'ios' | 'android', targetUrl: string, e?: React.MouseEvent) => {
        // Logic:
        // isApple = true, target = android -> Warning (Suggest iOS)
        // isAndroid = true, target = ios -> Warning (Suggest Android)
        // Others (Windows/Linux) -> No warning

        const isMismatch = (isApple && targetPlatform === 'android') || (isAndroid && targetPlatform === 'ios');

        if (isMismatch) {
            e?.preventDefault();

            const currentPlatform = isIos ? 'iOS' : (isMac ? 'macOS' : 'Android');
            const recommendedStoreName = isApple ? t('option_ios') : t('option_android');
            const clickedStoreName = targetPlatform === 'ios' ? t('option_ios') : t('option_android');
            const recommendedUrl = isApple ? appStoreUrl : playStoreUrl;

            setConfig({
                clickedUrl: targetUrl,
                recommendedUrl,
                clickedStoreName,
                recommendedStoreName,
                currentPlatform
            });
            logEvent({
                name: 'download_confirmation_view',
                params: {
                    current_platform: currentPlatform,
                    clicked_store: clickedStoreName,
                    recommended_store: recommendedStoreName
                }
            });
            setIsOpen(true);
        } else {
            // No mismatch, allow default behavior or manually open if preventDefault was called elsewhere (safe to just return true/false or do nothing if standard <a> tag)
            // But if we use this on onClick, and standard behavior is navigation, we don't need to do anything if we didn't preventDefault.
            // If the caller needs to manually navigate (e.g. button not a tag), they can check return value or we handle it.
            // For <a> tags with href, simply NOT calling preventDefault is enough.
        }
    };

    const onConfirm = () => {
        if (config) {
            logEvent({ name: 'download_confirmation_confirm', params: { recommended_store: config.recommendedStoreName } });
            window.open(config.recommendedUrl, '_blank');
        }
        setIsOpen(false);
    };

    const onContinue = () => {
        if (config) {
            logEvent({ name: 'download_confirmation_continue', params: { clicked_store: config.clickedStoreName } });
            window.open(config.clickedUrl, '_blank');
        }
        setIsOpen(false);
    };

    const onDismiss = () => {
        logEvent({ name: 'download_confirmation_dismiss', params: { method: 'close_button' } });
        setIsOpen(false);
    };

    const modalElement = (
        <DownloadConfirmationModal
            isOpen={isOpen}
            onClose={onDismiss}
            onConfirm={onConfirm}
            onContinue={onContinue}
            title={t('modal_title')}
            message={t('modal_message', {
                currentPlatform: config?.currentPlatform,
                recommendedStore: config?.recommendedStoreName
            })}
            confirmText={t('modal_confirm', { recommendedStore: config?.recommendedStoreName })}
            cancelText={t('modal_cancel', { clickedStore: config?.clickedStoreName })}
        />
    );

    return {
        handleDownload,
        DownloadConfirmationModal: modalElement
    };
}
