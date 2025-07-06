
# Deploying to Vercel

This project has been configured for Vercel deployment. Follow these steps:

## Prerequisites
1. Install Vercel CLI: `npm i -g vercel`
2. Make sure you have a PostgreSQL database (like Neon or PlanetScale)

## Deployment Steps

1. **Build for Vercel:**
   ```bash
   npm run build:vercel
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```

3. **Set Environment Variables:**
   In your Vercel dashboard, add:
   - `DATABASE_URL`: Your PostgreSQL connection string

4. **Push Database Schema:**
   ```bash
   npm run db:push
   ```

## Important Notes
- The API routes are converted to Vercel serverless functions
- Static files are served from the built client
- Database connections are handled per request (serverless)
- Make sure your DATABASE_URL supports connection pooling

## Local Development
For local development, continue using:
```bash
npm run dev
```

This will run the original Express server with Vite.
