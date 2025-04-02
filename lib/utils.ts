import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const setCookie = (key: string, value: string, expires = 0, domain = null) => {
  const expireStr = expires ? `;expires=${expires.toString()}` : '';
  const pathStr = domain ? `;path=/;domain=${domain}` : ';path=/';
  document.cookie = `${key}=${value}${expireStr}${pathStr}`;
};

export const removeCookie = (key: string, removeSubDomain = false) => {
  const pathStr = ';path=/;';
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC${pathStr}`;

  if (removeSubDomain) {
    const pathStrWithDomain = `;path=/;domain=${`localhost`}`;
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC${pathStrWithDomain}`;
  }
};
export const getCookie = (key: string) => {
  const name = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return null;
};