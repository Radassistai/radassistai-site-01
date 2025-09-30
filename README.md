
# RadAssist AI - NHS Radiology Support Platform

## Overview
RadAssist AI is an AI-powered platform designed to support NHS radiology teams by preventing missed follow-ups across all imaging pathways and linking backlog data directly to real reporting capacity.

## Features
- **Follow-up Tracking**: Monitor patient follow-ups across all imaging pathways
- **Real-time Backlog Management**: Connect backlog volumes with actual radiologist reporting capacity
- **NHS Integration**: Designed specifically for NHS workflow requirements
- **Nigeria Talent Hub**: Supporting healthcare innovation while creating opportunities for Nigerian students

## Tech Stack
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v7
- **Icons**: Remix Icons + FontAwesome
- **Internationalization**: React i18next

## Project Structure
```
src/
├── components/
│   └── ui/
│       └── Logo.tsx
├── pages/
│   ├── home/
│   │   └── page.tsx
│   ├── hub-nigeria/
│   │   └── page.tsx
│   └── NotFound.tsx
├── router/
│   ├── config.tsx
│   └── index.ts
├── i18n/
│   ├── index.ts
│   └── local/
│       └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd radassist-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
```

## Deployment
This project is configured for Azure Static Web Apps with automatic CI/CD via GitHub Actions.

### Environment Variables
- `BASE_PATH`: Base path for deployment (default: '/')
- `IS_PREVIEW`: Preview mode flag

## Features

### Main Platform
- NHS-focused AI dashboard
- Follow-up tracking system
- Backlog vs capacity visualization
- Pilot program application system

### Nigeria Hub
- Talent recruitment platform
- Role-based applications (AI Interns, Dev Interns, Research Assistants)
- Student opportunity management
- Global collaboration features

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License
Private - RadAssist AI Platform

## Contact
- Main: contact@radassistai.com
- Nigeria Hub: nigeria@radassistai.com

---
*Built with React + TypeScript + Tailwind CSS*

