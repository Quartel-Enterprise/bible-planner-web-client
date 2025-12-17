import { useState } from 'react';

export function VideoCard({ videoId }: { videoId: string }) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div
            className="app-preview-card animate-slide-up"
            onClick={() => setIsPlaying(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    setIsPlaying(true);
                }
            }}
            aria-label="Play App Preview Video"
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
                cursor: 'pointer',
                zIndex: 1,
            }}
        >
            {isPlaying ? (
                <iframe
                    className="video-element"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&loop=1&playlist=${videoId}&controls=1&showinfo=0&modestbranding=1`}
                    title="App Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        display: 'block'
                    }}
                ></iframe>
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
