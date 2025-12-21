
export const useDeviceDetection = () => {
    const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent.toLowerCase();

    const isAndroid = /android/.test(userAgent);
    const isIos = /iphone|ipad|ipod/.test(userAgent);
    const isMac = /macintosh|mac os x/.test(userAgent) && !isIos;
    const isApple = isIos || isMac;
    const isDesktop = !isAndroid && !isApple;

    return { isAndroid, isApple, isIos, isMac, isDesktop };
};
