# 🍔 DevBurger

<p align="center">
  <img src="./src/assets/Logo.png" alt="DevBurger Logo" width="250"/>
</p>

<p align="center">
  <strong>Aplicação Full Stack para gerenciamento e realização de pedidos de uma hamburgueria.</strong>
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker)

</p>

---

# 📖 Sobre o projeto

O **DevBurger** é uma aplicação **Full Stack** desenvolvida para simular um sistema completo de pedidos online para uma hamburgueria.

A aplicação possui dois ambientes distintos:

- 👤 Área do Cliente
- 🛠️ Painel Administrativo

O cliente pode:

- Criar sua conta
- Fazer login
- Navegar pelo cardápio
- Adicionar produtos ao carrinho
- Finalizar pedidos utilizando o **Stripe**

O administrador pode:

- Gerenciar pedidos
- Cadastrar produtos
- Editar produtos
- Fazer upload de imagens
- Definir produtos em oferta
## 🔐 Login

<p align="center">
  <img src="./github/login.png" width="900"/>
</p>
---

# ✨ Funcionalidades

## 👤 Área do Cliente

- ✅ Cadastro de usuários
- ✅ Login com autenticação JWT
- ✅ Cardápio dinâmico
- ✅ Produtos separados por categorias
- ✅ Carrinho de compras
- ✅ Alteração de quantidade dos produtos
- ✅ Checkout
- ✅ Pagamento com Stripe

---

## 🛠️ Área Administrativa

- ✅ Login Administrativo
- ✅ Dashboard
- ✅ Cadastro de Produtos
- ✅ Upload de Imagens
- ✅ Cadastro por Categorias
- ✅ Controle de Produtos em Oferta
- ✅ Listagem de Produtos
- ✅ Edição de Produtos
- ✅ Gerenciamento de Pedidos

---

# 🖥️ Demonstração

## 🔐 Login

> Adicione aqui o print da tela de Login

---

## 📝 Cadastro

> Adicione aqui o print da tela de Cadastro

---

## 📦 Painel Administrativo

> Adicione aqui o print da listagem de produtos

---

## ➕ Cadastro de Produto

> Adicione aqui o print da tela de cadastro

---

## 💳 Checkout

> Adicione aqui o print do Stripe

---

# 🚀 Tecnologias Utilizadas

## Front-end

- React
- React Router DOM
- Styled Components
- React Hook Form
- Yup
- Axios

### Back-end

- Node.js
- Express
- JWT
- Bcrypt
- Multer

### Banco de Dados

- PostgreSQL
- Sequelize ORM
- MongoDB

### Pagamentos

- Stripe

### Ferramentas

- Git
- GitHub
- Docker
- VS Code

---

# 📂 Estrutura do Projeto

```text
DevBurger
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── routes
│   ├── services
│   └── styles
│
├── backend
│   ├── src
│   ├── controllers
│   ├── database
│   ├── middleware
│   ├── models
│   ├── routes
│   └── uploads
│
└── README.md
```

---

# 🔐 Autenticação

O projeto utiliza:

- JWT (JSON Web Token)
- Bcrypt para criptografia de senhas
- Rotas protegidas
- Controle de acesso para administradores

---

# 💳 Pagamentos

A integração com o **Stripe** permite realizar pagamentos de forma segura durante os testes da aplicação.

---

# 📸 Upload de Imagens

O upload de imagens é realizado utilizando o **Multer**, permitindo que administradores adicionem fotos aos produtos.

---

# 🎯 Objetivo

Este projeto foi desenvolvido com o objetivo de consolidar conhecimentos em:

- React
- Node.js
- APIs REST
- PostgreSQL
- MongoDB
- Docker
- Upload de Arquivos
- Autenticação JWT
- Integração com Stripe

---

# 📈 Aprendizados

Durante o desenvolvimento foram praticados conceitos como:

- Componentização
- Hooks do React
- CRUD Completo
- Consumo de APIs
- Upload de Arquivos
- Autenticação JWT
- Docker
- PostgreSQL
- MongoDB
- Integração com Stripe
- Arquitetura MVC
- Organização de Código

---

# 🚀 Como executar

## Clone o repositório

```bash
git clone https://github.com/OzielCosta-Dev/devburger.git
```

---

## Front-end

```bash
cd frontend

npm install

npm run dev
```

---

## Back-end

```bash
cd backend

npm install

npm run dev
```

---

# 👨‍💻 Desenvolvedor

## Oziel do Nascimento Costa

Desenvolvedor Full Stack em transição de carreira.

- 💼 LinkedIn: https://www.linkedin.com/in/ozielcosta-dev/
- 🐙 GitHub: https://github.com/OzielCosta-Dev

---

# ⭐ Gostou do projeto?

Se este projeto foi útil ou interessante para você, deixe uma ⭐ no repositório.

Isso incentiva a criação de novos projetos e contribui para o crescimento da comunidade.

---

<p align="center">
Feito com ❤️ por <strong>Oziel Costa</strong>
</p>
