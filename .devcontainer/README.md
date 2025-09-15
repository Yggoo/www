# Dev Container Configuration

This directory contains the Dev Container configuration for the Nuxt.js project.

## Files

- **`devcontainer.json`**: Main configuration file that defines the development environment
- **`Dockerfile`**: Custom Docker image with Node.js, Docker CLI, and development tools
- **`README.md`**: This documentation file

## Features

### Included Tools
- **Node.js LTS** (22.x) with npm
- **Docker CLI** with Docker-outside-of-Docker support
- **TypeScript** (latest)
- **act** (GitHub Actions runner for local testing)

### VS Code Extensions
- Error Lens (usernamehw.errorlens)
- ESLint (dbaeumer.vscode-eslint)
- Render CRLF (medo64.render-crlf)
- Vue Language Features (Vue.volar)
- TypeScript (ms-vscode.vscode-typescript-next)
- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
- JSON support (ms-vscode.vscode-json)

### Port Forwarding
- **3000**: Nuxt.js development server
- **3001**: Alternative development port
- **8080**: Additional service port

### Git Configuration
Automatically sets up git aliases:
- `git st` → `git status`
- `git co` → `git checkout`

## Usage

The dev container will automatically:
1. Build the custom Docker image with all required tools
2. Install npm dependencies (`npm install`)
3. Configure git aliases
4. Set up VS Code with the specified extensions and settings

To start development:
```bash
npm run dev
```

The development server will be available at the forwarded port 3000.

## Docker Support

The container includes Docker CLI with Docker-outside-of-Docker configuration, allowing you to:
- Build Docker images
- Run containers
- Use docker-compose
- Test containerized applications

The Docker daemon runs on the host, and the container connects to it via the mounted Docker socket.