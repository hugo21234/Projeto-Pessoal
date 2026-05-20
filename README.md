# Projeto Pessoal — API REST Full-Stack

API REST com autenticação completa, controle de acesso e integração com banco de dados relacional. Arquitetura modular orientada a produção com separação clara de responsabilidades.

---

## 🚀 Tecnologias

| Camada | Tecnologia |
|---|---|
| Runtime | Node.js |
| Framework | Express 5 |
| Banco de dados | PostgreSQL |
| ORM | Sequelize + Sequelize CLI |
| Autenticação | JWT (jsonwebtoken) + Bcrypt |
| Segurança | Helmet · CORS |
| Dev tooling | Nodemon · Sucrase · ESLint |

---

## 📁 Estrutura do Projeto

```
Projeto-Pessoal/
├── backend/
│   ├── src/
│   │   ├── config/          # Configuração do banco de dados
│   │   ├── controllers/     # Lógica de negócio por recurso
│   │   ├── database/        # Conexão e migrations
│   │   ├── middlewares/     # Autenticação JWT e validações
│   │   ├── models/          # Models Sequelize
│   │   ├── routes/          # Definição de rotas
│   │   ├── services/        # Regras de negócio desacopladas
│   │   ├── app.js           # Configuração do Express
│   │   └── server.js        # Entry point
│   ├── .env.example
│   └── package.json
└── frontend/
```

---

## ⚙️ Como rodar localmente

### Pré-requisitos
- Node.js 18+
- PostgreSQL rodando localmente ou via Docker

### Instalação

```bash
# Clone o repositório
git clone https://github.com/hugo21234/Projeto-Pessoal.git
cd Projeto-Pessoal/backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais
```

### Variáveis de Ambiente

```env
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/db_name
JWT_SECRET=sua_chave_secreta
```

### Banco de dados

```bash
# Rodar migrations
npm run migrate
```

### Desenvolvimento

```bash
npm run dev
```

### Produção

```bash
npm run build
npm start
```

---

## 🔐 Autenticação

O sistema utiliza **JWT (JSON Web Token)** para autenticação stateless:

1. Usuário realiza cadastro — senha armazenada com hash via **Bcrypt**
2. Login retorna token JWT assinado
3. Rotas protegidas validam token via middleware antes de processar a requisição

---

## 📜 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia em modo desenvolvimento com hot reload |
| `npm run build` | Compila para produção com Sucrase |
| `npm start` | Inicia versão compilada |
| `npm run migrate` | Executa migrations do banco |
| `npm run lint` | Verifica padrões de código com ESLint |

---

## 👤 Autor

**Hugo Figueiredo**
Engenharia de Software · Universidade Cruzeiro do Sul

[![GitHub](https://img.shields.io/badge/GitHub-hugo21234-181717?style=flat&logo=github)](https://github.com/hugo21234)
[![Email](https://img.shields.io/badge/Email-hugo.deoliveira.legacy@gmail.com-D14836?style=flat&logo=gmail)](mailto:hugo.deoliveira.legacy@gmail.com)
