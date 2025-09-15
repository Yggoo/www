# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Development Environment

This project uses **Dev Containers** for a consistent development experience. The environment includes:

- **Node.js LTS** with npm
- **Docker** support (Docker-outside-of-Docker)
- **TypeScript** and **ESLint** pre-configured
- **VS Code extensions** for Vue.js, TypeScript, and more
- **GitHub Actions runner** (act) for local testing

### Getting Started

1. **Gitpod**: Open in Gitpod - the dev container will start automatically
2. **VS Code**: Use "Dev Containers: Reopen in Container" command
3. **GitHub Codespaces**: Will automatically use the dev container

The development server will be available on port 3000 with automatic port forwarding.

> **Note**: This project has been migrated from Gitpod Classic (.gitpod.yml) to Dev Containers. See [DEVCONTAINER_MIGRATION.md](./DEVCONTAINER_MIGRATION.md) for details.

## Setup

### Environment Variables

Copy the example environment file and configure your API keys:

```bash
cp .env.example .env
```

Edit `.env` and add your Unsplash access key:
- Get your Unsplash access key from [https://unsplash.com/developers](https://unsplash.com/developers)
- Add it to your `.env` file: `UNSPLASH_ACCESS_KEY=your_key_here`

**Note**: If no Unsplash key is provided, the app will use fallback placeholder images from Lorem Picsum.

### Dependencies

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
