/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');


const GITHUB_USERNAME = "JackAnderson04";
const REPO_NAME = "personal-site";
const YOUR_NAME = "Jack Anderson";
const YOUR_EMAIL = "j04and3rson@gmail.com";

console.log('\x1b[34m%s\x1b[0m', 'Setting up your portfolio project and GitHub repository...');

try {
  // Create Next.js project
  console.log('\x1b[32m%s\x1b[0m', 'Creating Next.js project with TypeScript and Tailwind CSS...');
  execSync(`npx create-next-app@latest ${REPO_NAME} --typescript --tailwind --eslint`, { stdio: 'inherit' });

  // Navigate to project directory
  process.chdir(REPO_NAME);

  // Configure Git user
  execSync(`git config user.name "${YOUR_NAME}"`);
  execSync(`git config user.email "${YOUR_EMAIL}"`);

  // Create GitHub directory structure
  fs.mkdirSync(path.join('.github', 'workflows'), { recursive: true });

  // Create README.md file
  console.log('\x1b[32m%s\x1b[0m', 'Creating README.md...');
  fs.writeFileSync('README.md', `# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js** - React framework with server-side rendering and static site generation
- 📝 **TypeScript** - Type safety for better development experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📱 **Responsive Design** - Mobile-first approach for all screen sizes
- 🧩 **Component Reusability** - Well-structured, reusable components
- 🔄 **Framer Motion** - Smooth animations and transitions

# ...rest of README content...`);

  // Create GitHub Actions workflow
  console.log('\x1b[32m%s\x1b[0m', 'Creating GitHub Actions workflow...');
  fs.writeFileSync('.github/workflows/ci.yml', `name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Lint
      run: npm run lint
    
    - name: Build
      run: npm run build`);

  // Initialize Git repo (should already be done by create-next-app)
  // But we'll do it again just to be sure
  try {
    execSync('git init');
  } catch (e) {
    // Repo might already be initialized
  }

  // Add all files to staging
  execSync('git add .');

  // Make initial commit
  execSync('git commit -m "Initial commit: Portfolio website setup"');

  // Add remote GitHub repository
  console.log('\x1b[32m%s\x1b[0m', 'Adding GitHub remote repository...');
  execSync(`git remote add origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git`);

  // Push to GitHub
  console.log('\x1b[32m%s\x1b[0m', 'Pushing to GitHub...');
  execSync('git push -u origin main');

  console.log('\x1b[34m%s\x1b[0m', 'Setup complete! Your portfolio project has been created and pushed to GitHub.');
  console.log('\x1b[34m%s\x1b[0m', 'Next steps:');
  console.log(`1. Navigate to the project: \x1b[32mcd ${REPO_NAME}\x1b[0m`);
  console.log(`2. Install any additional dependencies: \x1b[32mnpm install\x1b[0m`);
  console.log(`3. Start the development server: \x1b[32mnpm run dev\x1b[0m`);
  console.log(`4. Open your browser at: \x1b[32mhttp://localhost:3000\x1b[0m`);

} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', 'Error during setup:');
  console.error(error);
}