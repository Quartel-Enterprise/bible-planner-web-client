
export const useDeviceDetection = () => {
    const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent.toLowerCase();

    const isAndroid = /android/.test(userAgent);
    const isApple = /macintosh|mac os x|iphone|ipad|ipod/.test(userAgent);
    const isDesktop = !isAndroid && !isApple; // Rough approximation for Windows/Linux desktop

    return { isAndroid, isApple, isDesktop };
};
