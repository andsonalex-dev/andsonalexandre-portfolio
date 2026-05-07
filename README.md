# Andson Alexandre — Portfólio EBAC

Portfólio pessoal desenvolvido com **Next.js 16**, **React 19**, **TypeScript** e **Bootstrap 5**.  
Apresenta experiência, habilidades, projetos e formas de contato.

## Tecnologias

- [Next.js 16](https://nextjs.org) com App Router
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Bootstrap 5](https://getbootstrap.com)
- [Google Fonts](https://fonts.google.com) — Space Grotesk + Manrope

## Estrutura

```
src/app/
├── components/       # Header, Hero, Nav, Section
├── sections/         # About, Skills, Projects, Contact
├── data/             # projects.json, skills.json
└── projetos/[id]/    # Página de detalhes de projeto
public/
├── background/       # Imagem de fundo do Hero
├── thumbs/           # Thumbnails dos projetos
└── perfil/           # Foto de perfil
```

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Adicionando projetos

Edite `src/app/data/projects.json`. Cada projeto aceita os seguintes campos:

```json
{
  "id": 3,
  "title": "Nome do projeto",
  "description": "Descrição breve.",
  "status": "Publicado",
  "image_cover": "/thumbs/thumb-nome.jpg",
  "full_image": null,
  "link": "https://url-do-projeto.com",
  "technologies": ["React", "Laravel"]
}
```

> Quando `full_image` for preenchido com o caminho da imagem, ela aparece automaticamente na página de detalhes do projeto.

## Deploy

O projeto está publicado na [Vercel](https://vercel.com). Qualquer push na branch `main` dispara um novo deploy automaticamente.
