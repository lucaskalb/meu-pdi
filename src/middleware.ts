import { NextRequest, NextResponse, NextFetchEvent } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

const authMiddleware = withMiddlewareAuthRequired({
  returnTo: '/api/auth/login'
});

export default async function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/api/auth/login') ||
    pathname.startsWith('/api/auth/logout') ||
    pathname.startsWith('/api/auth/callback')
  ) {
    return NextResponse.next(); // ⬅️ ignora intl e authMiddleware
  }

  const protectedPageRoute = /^\/(pt|en|es)\/pages(\/.*)?$/;
  const protectedApiRoute = pathname.startsWith('/api') && !pathname.startsWith('/api/auth');

  if (protectedPageRoute.test(pathname) || protectedApiRoute) {
    return authMiddleware(request, event);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};

