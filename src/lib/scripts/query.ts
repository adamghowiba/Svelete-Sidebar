export const screenWidth = {
    phone: '500px',
    desktop: '1000px'
}
type ScreenTypes = keyof typeof screenWidth;
export function checkQuery(callback, query: ScreenTypes, once?: boolean) {
    const mediaQuery = window.matchMedia(`(max-width: ${screenWidth[query]})`);

    mediaQuery.addEventListener('change', () => callback(mediaQuery.matches));

    function remove() {
        mediaQuery.removeEventListener('change', callback);
    }

    return {
        remove,
        matches: mediaQuery.matches,
    }
}


export function addMediaQuery(callback, query: ScreenTypes, once?: boolean) {
    const mediaQuery = window.matchMedia(`(max-width: ${screenWidth[query]})`);

    mediaQuery.addEventListener('change', () => callback(mediaQuery.matches));

    function remove() {
        mediaQuery.removeEventListener('change', callback);
    }

    return {
        remove,
        matches: mediaQuery.matches,
    }
}