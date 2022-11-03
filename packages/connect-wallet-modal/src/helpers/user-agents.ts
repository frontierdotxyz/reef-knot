import { UAParser } from 'ua-parser-js';

const parser = new UAParser();

export const os = parser.getOS();
export const isIOS = os.name === 'iOS';
export const isAndroid = os.name === 'Android';

export const device = parser.getDevice();
export const isMobile = device.type === 'mobile';
export const isTablet = device.type === 'tablet';
export const isMobileOrTablet = isMobile || isTablet;

export const checkIfBraveBrowser = async (): Promise<boolean> =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (navigator.brave && (await navigator.brave.isBrave())) || false;
