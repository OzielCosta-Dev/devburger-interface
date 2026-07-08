# DevBurger — Interface (Frontend)

Projeto frontend da aplicação DevBurger — interface de loja/admin feita em React + Vite.

## Descrição

Aplicação de exemplo para gerenciamento e venda de produtos (menu, carrinho, checkout via Stripe, painel admin). Contém componentes reutilizáveis, rotas de usuário/admin e integração com APIs (mockadas/local ou reais).

## Tecnologias

- React 18
- Vite
- Styled Components / Emotion
- React Router
- Stripe (cliente) — `@stripe/react-stripe-js`
- MUI (icons)

## Pré-requisitos

- Node.js 18+ (ou compatível)
- npm

## Instalação

1. Instale dependências:

```
npm install
```

2. Inicie o servidor de desenvolvimento:

```
npm run dev
```

## Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento (Vite)
- `npm run build` — gera build de produção
- `npm run preview` — serve o build localmente
- `npm run lint` — executa ESLint no diretório `src`

## Configuração

- As configurações do Stripe de cliente estão em [config/stripeConfig.js](config/stripeConfig.js).
- Dados mockados estão em `/public/mock-products.json` e `/public/mock-categories.json`.

Se for usar Stripe real, defina a chave pública no arquivo de configuração ou via variável de ambiente conforme sua estratégia de deploy.

## Estrutura do projeto (resumo)

- `src/components` — componentes UI (Botões, Cards, Carrossel, Tabela etc.)
- `src/containers` — pages/containers (Home, Menu, Cart, Admin, Orders)
- `src/hooks` — contextos e hooks (CartContext, UserContext)
- `src/services/api.js` — cliente Axios para chamadas à API backend
- `src/styles` — estilos globais e temas

## Como testar o checkout

- O componente de checkout usa Stripe — veja a pasta `src/components/Stripe/CheckoutForm`.
- Para testes locais sem Stripe real, use dados mock e fluxo de pagamento simulado do backend.

## Deploy

1. Gerar build:

```
npm run build
```

2. Fazer deploy do conteúdo da pasta `dist` no seu provedor (Netlify, Vercel, S3, etc.).

## Contribuição

Pull requests são bem-vindos. Abra uma issue para discutir mudanças maiores.

## Autor

Projeto entregue como trabalho final.

---

Arquivo criado: [README.md](README.md)
