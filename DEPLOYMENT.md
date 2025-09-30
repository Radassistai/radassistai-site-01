# Deployment Guide

## Quick Setup for Your Repository

### 1. Clone and Setup
```bash
git clone <your-repo-url>
cd radassist-ai
npm install
```

### 2. Development
```bash
npm run dev
```
Visit `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```
Output will be in the `out/` directory.

## Deployment Options

### Option 1: Azure Static Web Apps (Recommended)
The project is already configured for Azure Static Web Apps with the included GitHub Actions workflow.

1. Push your code to GitHub
2. Create an Azure Static Web App resource
3. Connect it to your GitHub repository
4. The workflow in `.github/workflows/azure-static-web-apps.yml` will handle automatic deployments

### Option 2: Netlify
1. Build the project: `npm run build`
2. Deploy the `out/` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `out`

### Option 3: Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `out`

### Option 4: GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `out/` folder to GitHub Pages
3. Make sure to set the correct base path if deploying to a subdirectory

## Environment Variables
- `BASE_PATH`: Set this if deploying to a subdirectory (default: '/')
- `IS_PREVIEW`: Set to true for preview deployments

## Image Replacements
The project currently uses placeholder image URLs. Replace these with your own images:
- Hero background images
- Dashboard screenshots
- Team photos

## Form Integration
The contact and application forms currently log to console. Replace with your preferred form handling service:
- Formspree
- Netlify Forms
- Custom API endpoint

## Customization
- Update colors in `tailwind.config.ts`
- Modify content in page components
- Add your own branding and images
- Update contact information and links