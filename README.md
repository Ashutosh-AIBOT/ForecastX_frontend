# 🎨 [PROJECT_NAME] — Frontend

> [ONE LINE — what this UI does. What does the user see and do?]

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-purple?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Latest-cyan?style=flat-square&logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?style=flat-square&logo=docker)
![Status](https://img.shields.io/badge/Stage-v0_Skeleton-orange?style=flat-square)

---

## 📋 Table of Contents

- [What This Does](#-what-this-does)
- [UI Overview](#-ui-overview)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [API Connection](#-api-connection)
- [Version Roadmap](#-version-roadmap)
- [Author](#-author)

---

## 🧠 What This Does

> Fill this when you start building. Answer 3 things:
> 1. What does the user interact with?
> 2. What problem does this UI solve?
> 3. What pages or features exist?

**Current Status:** `v0` — Skeleton only. App loads. Connected to backend health check. No features built yet.

---

## 🖥️ UI Overview

> Add screenshots here when first screen is built.
> Even one screenshot of the homepage makes this repo 10x more credible to recruiters.
```
[ Add screenshot here ]
```

Full component and page design → [HLD_v0.md](./HLD_v0.md)

---

## 🗂️ Project Structure

| File / Folder | What It Covers |
|---|---|
| [README.md](./README.md) | You are here. Start here always. |
| [HLD_v0.md](./HLD_v0.md) | UI architecture — pages, components, state management, API plan |
| [LLD_v0.md](./LLD_v0.md) | Component tree, props design, hooks design, page-by-page breakdown |
| [API_CONTRACTS.md](./API_CONTRACTS.md) | Every backend API this frontend consumes — request, response, errors |
| [.env.example](./.env.example) | All frontend env vars with dummy values — copy to .env, never commit real .env |
| [RUNBOOK.md](./RUNBOOK.md) | Build, deploy, rollback frontend. CDN setup. Common build failures. |
| [SCALE_GUIDE.md](./SCALE_GUIDE.md) | Frontend performance strategy from 0 to 1 billion users |
| [SCALING_QUESTIONS.md](./SCALING_QUESTIONS.md) | 20 questions to ask before building any feature |
| [VERSION_ROADMAP.md](./VERSION_ROADMAP.md) | v0 to v4 — what UI changes at each stage, mindset per stage |
| [ADR/](./ADR/) | Architecture Decision Records — why React, why Vite, why Tailwind |

---

## ⚡ Quick Start

**Prerequisites:** Node 18+, Git
```bash
# 1. Clone the repo
git clone https://github.com/ashutosh/[REPO-NAME].git
cd [REPO-NAME]

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Open .env and fill in backend API URL

# 4. Start dev server
npm run dev

# 5. Open in browser
# http://localhost:5173
```

---

## 🔑 Environment Variables

| Variable | What It Is | Example |
|---|---|---|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:8000` |
| `VITE_ENVIRONMENT` | App environment | `development` |

> Add new variables here as you add them. Full list → [.env.example](./.env.example)

---

## 📡 API Connection

| What | Where |
|---|---|
| Backend repo | [Link backend repo here] |
| API base URL | Set via `VITE_API_BASE_URL` in your .env |
| Full API contracts | [API_CONTRACTS.md](./API_CONTRACTS.md) |

---

## 📌 Version Roadmap

| Version | Scale | What Gets Built |
|---|---|---|
| `v0` ← **you are here** | Local only | App loads. Connects to backend. Basic layout done. |
| `v1` | 0 → 10K users | Core UI features. Auth pages. Deployed on CDN. |
| `v2` | 10K → 500K | Performance. Lazy loading. Optimistic UI. Error boundaries. |
| `v3` | 500K → 10M | SSR. Edge caching. Multi-region CDN. |
| `v4` | 10M → 1B | Custom CDN. Full A/B testing infra. Observability on UI layer. |

> Full breakdown of every stage with mindset → [VERSION_ROADMAP.md](./VERSION_ROADMAP.md)

---

## 👤 Author

**Ashutosh**
[GitHub](https://github.com/ashutosh) · [LinkedIn](https://linkedin.com/in/ashutosh)

---

> *"First, solve the problem. Then, write the code."* — John Johnson
>
> _(Replace this with your own words when you finish this project.)_
