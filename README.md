# MeuPDI

Um projeto Next.js simples configurado com TypeScript e Tailwind CSS, pronto para deploy na Vercel.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **ESLint** - Linter para qualidade de código

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

## 🚀 Deploy na Vercel

Este projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório GitHub à Vercel
2. A Vercel detectará automaticamente que é um projeto Next.js
3. O deploy será feito automaticamente a cada push

## 📁 Estrutura do Projeto

```
meu-pdi/
├── src/
│   └── app/
│       ├── page.tsx      # Página principal
│       ├── layout.tsx    # Layout raiz
│       └── globals.css   # Estilos globais
├── public/               # Arquivos estáticos
├── package.json
└── README.md
```

## 🎨 Personalização

Para começar a desenvolver:

1. Edite `src/app/page.tsx` para modificar a página principal
2. Modifique `src/app/layout.tsx` para alterar o layout global
3. Adicione novos componentes em `src/app/`
4. Configure o Tailwind CSS em `tailwind.config.ts`

## 📄 Licença

Este projeto está sob a licença MIT.
