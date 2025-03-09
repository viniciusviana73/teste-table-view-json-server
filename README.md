# Sobre

**Bem-vindo(a)!** Este projeto foi desenvolvido durante um teste prático na BeTalent. O objetivo do teste consiste em montar uma interface interativa que exiba os dados dos funcionários, sendo estes obtidos através de uma API simulada usando `json-server`.

A aplicação faz a consulta, lista os dados e permite pesquisar por nome, cargo e telefone, além de formatar as datas e os números de telefone de forma amigável. O design é responsivo, seguindo o protótipo definido no Figma.

---

## Dependências

- **Node.js** (v14 ou superior)
- **npm** ou **Yarn** (gerenciamento / instalação de dependências)
- **json-server** (para simulação da API)
- **React.js** com **TypeScript**
- **Tailwind CSS**

---

## Estrutura do Projeto

A estrutura do projeto segue uma organização clara e modular:

```
.
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── betalent-logo.svg
│   ├── components/
│   │   ├── header/
│   │   │   └── Header.tsx
│   │   ├── table/
│   │   │   └── Table.tsx
│   │   └── Loading.tsx
│   ├── services/
│   │   └── api.ts
│   ├── styles/
│   │   ├── App.css
│   │   └── loading.css
│   ├── types/
│   │   ├── Employee.ts
│   │   └── TableRowProps.ts
│   ├── utils/
│   │   ├── formatPhone.ts
│   ├── App.tsx
│   └── main.tsx
└── db/db.json
```

---

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/viniciusviana73/teste-table-view-json-server
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd teste-table-view-json-server/betalent-frontend-test
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

---

## Execução

1. **Inicie o json-server para simular a API:**

  No diretório do db.json (teste-table-view-json-server/db), execute:

   ```bash
   npx json-server --watch db.json --port 3000
   ```
   
   ou, utilizando yarn:
   
   ```bash
   yarn json-server --watch db.json --port 3000
   ```

2. **Execute a aplicação:**

  No diretório do front-end (teste-table-view-json-server/betalent-frontend-test), execute:

   ```bash
   npm run dev
   # ou
   yarn run dev
   ```

   A aplicação estará disponível em [http://localhost:5173](http://localhost:5173)