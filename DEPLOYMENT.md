# Deployment Guide for Render

This guide explains how to deploy the United Works Pte. Ltd. corporate website to Render.

## Prerequisites

- A Render account
- Node.js 18+ installed locally for testing
- Git repository with the project code

## Render Deployment Steps

### 1. Connect Repository
1. Log into your Render dashboard
2. Click "New +" and select "Web Service"
3. Connect your Git repository
4. Select this repository

### 2. Configure Build Settings
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Environment**: `Node`
- **Node Version**: `18` (or latest)

### 3. Environment Variables
Set the following environment variables in Render dashboard:
- `NODE_ENV`: `production`
- `PORT`: (automatically set by Render)
- `GEMINI_API_KEY`: (if you have one)

### 4. Deploy
1. Click "Create Web Service"
2. Render will automatically build and deploy your application
3. Your site will be available at the provided URL

## Local Testing

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start the production server
npm start
```

## Project Structure

- `server.js`: Express server for serving the React app in production
- `package.json`: Updated with production scripts and dependencies
- `vite.config.ts`: Configured for production builds
- `render.yaml`: Render deployment configuration (optional)

## Troubleshooting

### Build Failures
- Ensure all dependencies are listed in `package.json`
- Check that Node.js version is 18+
- Verify all environment variables are set

### Runtime Issues
- Check Render logs for error messages
- Ensure the `PORT` environment variable is available
- Verify that the `dist` folder is properly built

### Performance Optimization
- The build is optimized with code splitting
- Static assets are served efficiently
- React Router is configured for client-side routing

## Support

For deployment issues, check:
1. Render dashboard logs
2. Build output in Render
3. Local testing results
