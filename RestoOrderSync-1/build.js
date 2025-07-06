
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the client
console.log('Building client...');
execSync('npm run build', { stdio: 'inherit', cwd: process.cwd() });

// Copy server files to api directory for Vercel
console.log('Preparing API for Vercel...');
const apiDir = './api';
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir, { recursive: true });
}

// Convert TypeScript server files to JavaScript for Vercel
console.log('Converting server files...');
execSync('npx tsc server/*.ts --outDir api --target es2020 --module esnext --moduleResolution node --allowSyntheticDefaultImports', { stdio: 'inherit' });

console.log('Build complete for Vercel deployment!');
