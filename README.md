# CriaTech 🚀

Site institucional da CriaTech — sistemas de gestão (BarberPro, CriaOficina), sites de alta conversão e design digital.

## 🛠️ Stack

![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS**
- **Framer Motion** — animações de entrada, scroll reveal, hover e transições
- **Canvas custom** para o fundo de partículas (leve, sem dependência extra)
- Export 100% estático (`output: 'export'`), hospedado no GitHub Pages via GitHub Actions

## ✨ Funcionalidades

- Hero centralizado com stats animadas e banner de novidade
- Sistemas próprios (BarberPro e CriaOficina) em destaque
- Portfólio com filtros por categoria e modal de projeto animado (estilo janela)
- Menu mobile em tela cheia com animação de abertura/fechamento
- Botão flutuante de WhatsApp, voltar ao topo e barra de progresso de rolagem
- Cursor customizado e partículas reagindo ao mouse
- SEO técnico: metadata, Open Graph, JSON-LD, sitemap e robots gerados no build

## 🚀 Como executar

```bash
npm install
npm run dev       # ambiente de desenvolvimento em http://localhost:3000
npm run build     # gera o export estático em ./out
```

## 📦 Deploy

O deploy para o GitHub Pages (domínio `criatech.online`) acontece automaticamente via
`.github/workflows/deploy.yml` a cada push na branch `main`. É necessário que o repositório
tenha o **GitHub Pages configurado com a fonte "GitHub Actions"** (Settings → Pages → Source).

---
Desenvolvido por Vitor Guilherme & Lucas Moreira
