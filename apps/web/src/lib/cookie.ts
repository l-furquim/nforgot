import Cookies from 'js-cookie';

const COOKIE_OPTIONS = { path: '/' };

export const setCookie = (key: string, value: string, options?: Cookies.CookieAttributes) => {
    Cookies.set(key, value, { ...COOKIE_OPTIONS, ...options });
};

export const getCookie = (key: string) => {
    return Cookies.get(key);
};

export const removeCookie = (key: string, options?: Cookies.CookieAttributes) => {
    Cookies.remove(key, { ...COOKIE_OPTIONS, ...options });
};