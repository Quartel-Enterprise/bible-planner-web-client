import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink } from 'lucide-react';

interface DownloadConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void; // Go to recommended
    onContinue: () => void; // Continue to clicked (wrong)
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
}

export const DownloadConfirmationModal: React.FC<DownloadConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    onContinue,
    title,
    message,
    confirmText,
    cancelText
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 200); // Matches CSS animation duration
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen || isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, isVisible]);

    if ((!isOpen && !isVisible) || !mounted) return null;

    const overlayAnimationClass = isOpen ? 'modal-overlay-animate-enter' : 'modal-overlay-animate-exit';
    const contentAnimationClass = isOpen ? 'modal-content-animate-enter' : 'modal-content-animate-exit';

    return createPortal(
        <div
            className={overlayAnimationClass}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                backdropFilter: 'blur(4px)',
                padding: '1rem'
            }}
            onClick={onClose}
        >
            <div
                className={contentAnimationClass}
                style={{
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text)',
                    borderRadius: '16px',
                    padding: '2rem',
                    maxWidth: '480px',
                    width: '100%',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    border: '1px solid var(--color-border)',
                    position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>{title}</h3>
                    <button
                        onClick={onClose}
                        style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: '4px' }}
                    >
                        <X size={20} />
                    </button>
                </div>

                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                    {message}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <button
                        onClick={onConfirm}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'var(--color-primary)',
                            color: 'var(--color-button-text)',
                            border: 'none',
                            padding: '0.875rem',
                            borderRadius: '8px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontSize: '1rem',
                            transition: 'opacity 0.2s'
                        }}
                    >
                        {confirmText}
                        <ExternalLink size={18} />
                    </button>

                    <button
                        onClick={onContinue}
                        style={{
                            backgroundColor: 'transparent',
                            color: 'var(--color-text-secondary)',
                            border: '1px solid var(--color-border)',
                            padding: '0.75rem',
                            borderRadius: '8px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            marginTop: '0.5rem'
                        }}
                    >
                        {cancelText}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};
