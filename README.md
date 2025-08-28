# ChessDesonline — Deploy pronto para Render (Static Site)

Este repositório contém a versão pronta do site **ChessDesonline** (aula de aberturas e finais).
Coloque este repositório no GitHub e conecte-o ao Render para publicar como um *Static Site*.

## Arquivos incluídos
- `index.html` — página principal (conteúdo que você me enviou).
- `render.yaml` — exemplo de configuração para quem desejar usar infra-as-code (opcional).
- `.gitignore` — ignorar arquivos comuns.
- `LICENSE` — MIT (opcional).

## Passos rápidos (linha de comando)
1. Crie um repositório no GitHub (por exemplo: `chessdesonline`).
2. No seu computador, dentro da pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — ChessDesonline static site"
   git branch -M main
   git remote add origin https://github.com/<SEU_USUARIO>/<NOME_REPO>.git
   git push -u origin main
   ```
3. No Render:
   - Acesse https://render.com e faça login.
   - Clique em **New** → **Static Site**.
   - Conecte sua conta GitHub e selecione o repositório criado.
   - Branch: `main`
   - Build Command: (deixe vazio)
   - Publish Directory: `/` (ou deixe vazio; se necessário digite `.`)
   - Clique em **Create Static Site**.
4. O Render fará deploy automaticamente após a conexão — aguarde alguns instantes e seu site estará online.

## Usando `render.yaml` (opcional)
Se você prefere manter a configuração em código, existem várias maneiras de descrever seus serviços para Render. O arquivo `render.yaml` incluído é um *modelo* — ajuste `repo`/`name` conforme necessário antes de usar.

## Observações
- Este pacote é um site estático (HTML/CSS/JS). Não requer Node/Admin server.
- Se quiser um backend (API) ou HTTPS custom domain, posso também gerar uma versão com `package.json` e `server.js` (Express) — me diga se quiser.


---
## Deploy as a Node Web Service on Render (automatic)

Se você prefere rodar o site como um **Web Service** (Node/Express) em vez de um *Static Site*, siga estes passos:

1. Crie um repositório no GitHub e envie todo este diretório (incluindo `server.js`, `package.json` e a pasta `public/`).
2. No Render:
   - Clique em **New** → **Web Service**.
   - Conecte o repositório GitHub e selecione o repositório.
   - Branch: `main`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node 18+ (Render usa a versão especificada em `engines` do package.json)
3. Clique em **Create Web Service**. O Render irá executar `npm install` e depois `npm start`. O serviço ficará acessível em um domínio render fornecido automaticamente.

## Configurar domínio customizado (CNAME)

- Arquivo `CNAME` incluído como exemplo. Substitua o conteúdo por seu domínio real (ex.: `www.seudominio.com`) e envie para o repositório.
- No painel do Render, abra o serviço e vá em **Settings → Custom Domains** para adicionar seu domínio.
- No seu provedor DNS, crie um registro `CNAME` apontando `www` para o domínio do Render (ex.: `chessdesonline.onrender.com`) e, se quiser o root (`seudominio.com`), crie um ALIAS/aname conforme suportado pelo provedor.
- Após a propagação de DNS (pode levar até 24-48h), o Render emitirá automaticamente um certificado TLS para seu domínio.

## O que foi alterado nesta versão
- Separação de CSS (`public/style.css`) e JS (`public/script.js`) a partir do `index.html`.
- Arquivo `server.js` (Express) e `package.json` para rodar como Web Service.
- `CNAME` de exemplo para domínio customizado.
- Pequenas melhorias de responsividade e compactação básica dos assets.
