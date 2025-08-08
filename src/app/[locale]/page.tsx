import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('welcome');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
      <div className="absolute top-4 right-4">

        <LanguageSwitcher />
      </div>
      
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          {t('subtitle')}
        </p>
        <div className="space-y-4">
          <p className="text-gray-500">
            {t('features.typescript')}
          </p>
          <p className="text-gray-500">
            {t('features.vercel')}
          </p>
          <p className="text-gray-500">
            {t('features.edit', { file: 'src/app/[locale]/page.tsx' })}
          </p>

        </div>
      </div>
    </div>
  );
}
