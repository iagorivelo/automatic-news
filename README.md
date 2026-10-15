# Pulso — blog de notícias

Blog moderno e minimalista em **Next.js + Tailwind + Supabase**. Leitores acessam sem login; admins entram em `/admin` para criar, publicar/despublicar e excluir posts.

> O robô de notícias automático (RSS + Gemini + cron) foi removido. Os posts que ele já publicou continuam no banco e no ar normalmente.

**Demo:** [automatic-news.vercel.app](https://automatic-news.vercel.app) · **No portfólio:** [iagorivelo.vercel.app/projects/automatic-news](https://iagorivelo.vercel.app/projects/automatic-news)

## Como rodar

1. **Instale as dependências**:

   ```bash
   npm install
   ```

2. **Crie a tabela no Supabase**: rode `supabase/schema.sql` no SQL Editor do projeto (e `supabase/migration-add-images.sql` se a tabela for anterior às imagens).

3. **Configure o `.env`** (use o `.env.example` como base):

   | Variável | O que é |
   | --- | --- |
   | `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` | Conexão com o Supabase (só no servidor) |
   | `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Credenciais de login do admin |
   | `AUTH_SECRET` | String aleatória longa para assinar a sessão |

4. **Suba o servidor**:

   ```bash
   npm run dev
   ```

   Blog: <http://localhost:3000> · Admin: <http://localhost:3000/admin>

## Estrutura

```
supabase/schema.sql       → tabela posts
src/lib/categories.ts     → categorias (editorias) do blog
src/lib/posts.ts          → acesso aos posts no Supabase
src/lib/auth.ts           → sessão do admin (JWT em cookie httpOnly)
src/proxy.ts              → proteção das rotas /admin
src/app/page.tsx          → home pública com filtro por categoria
src/app/post/[slug]/      → página do post (Markdown renderizado)
src/app/admin/            → painel: novo post, publicar/excluir
src/app/api/              → login/logout e CRUD de posts
```
