<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Blockchain at UC San Diego Website

This is the official website for Blockchain at UC San Diego, built with React, TypeScript, and Vite.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Deploy to GitHub Pages

This project uses GitHub Actions for automatic deployment to GitHub Pages.

### Automatic Deployment

The site is automatically deployed whenever you push changes to the `main` branch. No manual deployment steps are required!

### Manual Deployment

You can also trigger a deployment manually:

1. Go to your repository on GitHub
2. Navigate to the **Actions** tab
3. Select **"Deploy static content to Pages"** workflow
4. Click **"Run workflow"**

### GitHub Pages Settings

Make sure GitHub Pages is enabled in your repository:

1. Go to **Settings** → **Pages** in your repository
2. Under **Build and deployment**, select **GitHub Actions** as the source
3. The site will be available at: `https://Yanuk-K.github.io/BaSD`

### Local Development

For local development, use:

```bash
npm run dev
```

For production build testing:

```bash
npm run build
npm run preview
```

## Project Structure

- `components/` - React components for each section
- `assets.ts` - Static assets and imports
- `types.ts` - TypeScript type definitions
- `vite.config.ts` - Vite configuration for development and build

## Technologies Used

- React 19.2.0
- TypeScript
- Vite 6.2.0
- Tailwind CSS
- GitHub Actions for deployment
