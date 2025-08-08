// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

const authMiddleware = withMiddlewareAuthRequired({
  returnTo: '/api/auth/login',
  loginPath: '/api/auth/login',
});

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ⛔️ Evita qualquer tipo de interceptação pelo middleware em rotas Auth0
  if (
    pathname.startsWith('/api/auth/login') ||
    pathname.startsWith('/api/auth/logout') ||
    pathname.startsWith('/api/auth/callback')
  ) {
    return NextResponse.next(); // ⬅️ ignora intl e authMiddleware
  }

  // Protege rotas como /pt/pages/dashboard
  const protectedPageRoute = /^\/(pt|en|es)\/pages(\/.*)?$/;
  const protectedApiRoute = pathname.startsWith('/api') && !pathname.startsWith('/api/auth');

  if (protectedPageRoute.test(pathname) || protectedApiRoute) {
    return authMiddleware(request);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Tudo exceto arquivos estáticos e rotas especiais
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};

