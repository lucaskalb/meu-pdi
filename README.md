# MeuPDI

Um projeto Next.js simples configurado com TypeScript, Tailwind CSS e internacionalização (i18n), pronto para deploy na Vercel.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **next-intl** - Internacionalização completa
- **ESLint** - Linter para qualidade de código

## 🌍 Idiomas Suportados

- 🇧🇷 **Português** (pt) - Padrão
- 🇺🇸 **Inglês** (en)

## 📦 Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre no diretório
cd meu-pdi

# Instale as dependências
npm install
```

## 🛠️ Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Abra http://localhost:3000 no seu navegador
# O projeto redirecionará automaticamente para /pt
```

## 🏗️ Build

```bash
# Crie uma build de produção
npm run build

# Inicie o servidor de produção
npm start
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🌍 Internacionalização

O projeto usa `next-intl` para internacionalização completa:

### Estrutura de Mensagens
```
messages/
├── pt.json    # Mensagens em português
└── en.json    # Mensagens em inglês
```

### URLs
- `/pt` - Versão em português
- `/en` - Versão em inglês
- `/` - Redireciona para `/pt` (padrão)

### Como Usar
```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('welcome');
  
  return <h1>{t('title')}</h1>;
}
```

## 🚀 Deploy na Vercel

Este projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório GitHub à Vercel
2. A Vercel detectará automaticamente que é um projeto Next.js
3. O deploy será feito automaticamente a cada push
4. As rotas internacionalizadas funcionarão automaticamente

## 📁 Estrutura do Projeto

```
meu-pdi/
├── src/
│   ├── app/
│   │   ├── [locale]/        # Rotas internacionalizadas
│   │   │   ├── page.tsx     # Página principal
│   │   │   └── layout.tsx   # Layout da localização
│   │   ├── layout.tsx       # Layout raiz
│   │   └── globals.css      # Estilos globais
│   └── components/
│       └── LanguageSwitcher.tsx
├── messages/                 # Arquivos de mensagens
│   ├── pt.json
│   └── en.json
├── public/                   # Arquivos estáticos
├── i18n.ts                  # Configuração de i18n
├── middleware.ts            # Middleware de redirecionamento
└── package.json
```

## 🎨 Personalização

Para começar a desenvolver:

1. Edite `src/app/[locale]/page.tsx` para modificar a página principal
2. Modifique `src/app/[locale]/layout.tsx` para alterar o layout
3. Adicione novas mensagens em `messages/pt.json` e `messages/en.json`
4. Crie novos componentes em `src/components/`
5. Configure o Tailwind CSS conforme necessário

## 📄 Licença

Este projeto está sob a licença MIT.
