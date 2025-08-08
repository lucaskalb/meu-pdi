import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';


export const metadata: Metadata = {
  title: "MeuPDI - Bem-vindo",
  description: "Projeto Next.js com TypeScript e Tailwind CSS",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
