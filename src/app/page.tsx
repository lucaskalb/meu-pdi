export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Bem-vindo ao MeuPDI
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Seu projeto Next.js está pronto para começar!
        </p>
        <div className="space-y-4">
          <p className="text-gray-500">
            ✨ Configurado com TypeScript e Tailwind CSS
          </p>
          <p className="text-gray-500">
            🚀 Pronto para deploy na Vercel
          </p>
          <p className="text-gray-500">
            📝 Comece editando <code className="bg-gray-200 px-2 py-1 rounded">src/app/page.tsx</code>
          </p>
        </div>
      </div>
    </div>
  );
}
