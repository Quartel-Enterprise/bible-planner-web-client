import { useState, useEffect, useRef } from 'react';

declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

export function VideoCard({ videoId }: { videoId: string }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasEnded, setHasEnded] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const playerRef = useRef<any>(null);
    const [containerId] = useState(() => `youtube-player-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);

    useEffect(() => {
        // Load YouTube IFrame API
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        }

        // Set up the callback for when API is ready
        const checkYTReady = () => {
            if (window.YT && window.YT.Player) {
                setIsReady(true);
            } else {
                window.onYouTubeIframeAPIReady = () => {
                    setIsReady(true);
                };
            }
        };

        checkYTReady();
    }, []);

    useEffect(() => {
        if (isPlaying && isReady && !playerRef.current) {
            const initPlayer = () => {
                try {
                    playerRef.current = new window.YT.Player(containerId, {
                        videoId: videoId,
                        playerVars: {
                            autoplay: 1,
                            rel: 0,
                            controls: 1,
                            showinfo: 0,
                            modestbranding: 1,
                        },
                        events: {
                            onStateChange: (event: any) => {
                                // YT.PlayerState.ENDED = 0
                                if (event.data === 0) {
                                    setHasEnded(true);
                                }
                            },
                        },
                    });
                } catch (error) {
                    console.error('Error initializing YouTube player:', error);
                }
            };

            // Small delay to ensure DOM is ready
            setTimeout(initPlayer, 100);
        }
    }, [isPlaying, isReady, videoId, containerId]);

    const handleReplay = () => {
        setHasEnded(false);
        if (playerRef.current) {
            playerRef.current.seekTo(0);
            playerRef.current.playVideo();
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
        setHasEnded(false);
    };

    return (
        <div
            className="app-preview-card animate-slide-up"
            style={{
                position: 'relative',
                width: '300px',
                height: '650px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                background: '#000',
                margin: '0 auto',
                flexShrink: 0,
                cursor: isPlaying ? 'default' : 'pointer',
                zIndex: 1,
            }}
            onClick={!isPlaying ? handlePlay : undefined}
            role={!isPlaying ? "button" : undefined}
            tabIndex={!isPlaying ? 0 : undefined}
            onKeyDown={!isPlaying ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handlePlay();
                }
            } : undefined}
            aria-label={!isPlaying ? "Play App Preview Video" : undefined}
        >
            {isPlaying ? (
                <>
                    <div
                        id={containerId}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    {hasEnded && (
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(0, 0, 0, 0.7)',
                                zIndex: 100,
                            }}
                        >
                            <button
                                onClick={handleReplay}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '1rem 2rem',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'var(--color-button-text)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s, background-color 0.2s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                                }}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                    <path d="M3 3v5h5" />
                                </svg>
                                Replay
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt="App Preview Thumbnail"
                        className="video-thumbnail"
                        fetchPriority="high"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                    <div
                        className="play-button-overlay"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(0, 0, 0, 0.3)',
                            zIndex: 10
                        }}
                    >
                        <svg
                            className="yt-play-button"
                            version="1.1"
                            viewBox="0 0 68 48"
                            xmlns="http://www.w3.org/2000/svg"
                            width="68"
                            height="48"
                            style={{
                                display: 'block',
                                transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <path
                                className="ytp-large-play-button-bg"
                                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                fill="#F00"
                            ></path>
                            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
}
