# Recomeço Profissional

Projeto acadêmico de uma ONG fictícia voltada à reinserção de pessoas desempregadas no mercado de trabalho, por meio de cursos gratuitos, oficinas, orientação de carreira e acompanhamento de encaminhamentos para vagas.

O sistema foi concebido no **Projeto Integrador Extensionista I** como um **Sistema de Gestão de Participantes e Cursos**. Nesta etapa, a aplicação apresenta a interface inicial e consulta uma API Express para verificar a comunicação com o servidor.

## Tecnologias

- Vite+ com JavaScript Vanilla
- HTML e CSS
- Node.js e Express
- Git e GitHub

## Pré-requisitos

- Node.js 22.18 ou superior
- npm

## Como executar

No terminal, dentro da pasta do projeto, instale as dependências:

```bash
npm install
```

Inicie a API em um terminal:

```bash
npm run api
```

Em outro terminal, inicie o site:

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador. A seção **Estado do sistema** deve exibir **Status da API: ok** e a data e hora da resposta.

No Windows PowerShell, caso a execução do comando `npm` seja bloqueada, é possível utilizar `npm.cmd` nos mesmos comandos.

## API

A rota `GET /api/health` responde com um JSON semelhante a:

```json
{
  "status": "ok",
  "timestamp": "2026-11-19T16:00:00.000Z"
}
```

A data e hora são geradas no momento da requisição. A interface consulta `/api/health`, e o proxy do `vite.config.ts` encaminha a chamada para o servidor Express na porta 3001.

## Configurações

O arquivo `.env` contém configurações locais e está incluído no `.gitignore`. O arquivo `.env.example` documenta as variáveis disponíveis. A porta padrão da API é `3001`.

## Organização

```text
recomeco-profissional/
├── server/
│   └── index.js
├── src/
│   ├── main.js
│   └── style.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.ts
```

## Continuidade do projeto

No planejamento do PIE I, o sistema prevê o cadastro de participantes e cursos, registro de participações/presenças, acompanhamento de encaminhamentos e relatórios. O modelo de dados elaborado naquela etapa contempla **Participante**, **Curso**, **Participacao** e **Encaminhamento**. Essas funcionalidades são previstas para as próximas etapas; ainda não estão implementadas nesta versão inicial.
