# 📦 Projeto Pessoal — API REST Node.js

API REST construída com **Node.js + Express + Sequelize + PostgreSQL**, seguindo arquitetura **MVC** com separação clara de responsabilidades.

---

## 🛠 Tecnologias

- **Node.js** — runtime
- **Express** — framework HTTP
- **Sequelize** — ORM
- **PostgreSQL** — banco de dados
- **bcrypt** — hash de senhas
- **jsonwebtoken** — autenticação JWT

---

## 🗂 Estrutura do Projeto

```
src/
├── app.js                     # Inicialização do Express, middlewares e rotas
├── server.js                  # Entry point — sobe o servidor e conecta ao DB
├── config/database.js         # Configuração do Sequelize
├── database/migrations/       # Migrations das tabelas
├── database/seeders/          # Seeders de dados iniciais
├── middlewares/
│   ├── logMiddleware.js       # Log de todas as requisições
│   └── LoginRequired.js       # Middleware de proteção por JWT
├── models/                    # (User.js, Logger.js, index.js)
├── controllers/               # (UserController.js, TokenController.js)
├── services/                  # (UserService.js, LogService.js, LoginService.js)
└── routes/                    # (index.js, userRoutes.js)
```

---

## 📌 Endpoints Disponíveis

### Usuários

| Método | Endpoint     | Descrição           | Body                        | Response                              |
|--------|--------------|---------------------|-----------------------------|---------------------------------------|
| GET    | `/users`     | Lista todos usuários| —                           | `[{ id, name, email, created_at }]`  |
| GET    | `/users/:id` | Busca um usuário    | —                           | `{ id, name, email, created_at }`    |
| POST   | `/users`     | Cria um usuário     | `{ name, email, password }` | `{ id, name, email, created_at }`    |
| PUT    | `/users/:id` | Atualiza um usuário | `{ name?, email?, password? }` | `{ id, name, email, created_at }` |

### Autenticação

| Método | Endpoint  | Descrição  | Body                      | Response     |
|--------|-----------|------------|---------------------------|-------------|
| POST   | `/tokens` | Faz login  | `{ email, password }`     | `{ token }` |

O token JWT retornado tem expiração de **7 dias** e deve ser enviado nos próximos requests como:
```
Authorization: Bearer <token>
```

---

## 🗺️ Roadmap

- ✅ Módulo de Users (CRUD completo)
- ✅ Sistema de Logger automático (middleware)
- ✅ Autenticação JWT (LoginService + TokenController + LoginRequired)
- ☐ Migrations das tabelas `users` e `loggers`
- ☐ Módulo de Habits
- ☐ Módulo de Expenses
- ☐ Validações de entrada (Yup/Joi)

---

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite .env com suas credenciais do PostgreSQL

# Rodar o servidor
npm run dev
```
