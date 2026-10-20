import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with an API path (/api, /_next)
  // - … if they contain a file extension (e.g. favicon.ico, images, sitemap.xml)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
