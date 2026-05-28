# DJL Developer Portfolio

Portfolio profissional, moderno e internacionalizado para **Diogo Luis**.

## Stack

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- shadcn/ui style components
- next-intl (PT, EN, FR)
- Lucide Icons

## Funcionalidades

- Dark mode por padrão com troca manual para light mode
- Internacionalização com rotas por locale (`/pt`, `/en`, `/fr`)
- SEO com metadata dinâmica, Open Graph, `robots.ts` e `sitemap.ts`
- Estrutura escalável (`app`, `components`, `constants`, `data`, `hooks`, `lib`, `messages`, `styles`, `types`)
- Conteúdo baseado em ficheiros locais e pronto para migrar para CMS/backend no futuro

## Desenvolvimento

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:3000`.

## Build para produção

```bash
npm run build
npm run start
```

## Deploy

Projeto preparado para deploy na [Vercel](https://vercel.com/).

### Variáveis na Vercel

**SEO (domínio canónico):**

- `NEXT_PUBLIC_SITE_URL` — URL pública do site (ex.: `https://diogo-jose-luis-developer.vercel.app` ou domínio customizado). Se não definires, a Vercel usa `VERCEL_URL` automaticamente.

**Formulário de contacto (SMTP):** `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`, `MAIL_ENCRYPTION`, `MAIL_FROM_ADDRESS`, `MAIL_FROM_NAME`, `CONTACT_TO_EMAIL`
