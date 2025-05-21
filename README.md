# HonoJS Boilerplate
This repository contains the backend API, built with HonoJS, a small, fast, and modern web framework for the Edge and Node.js. It's designed for high performance and a streamlined development experience, leveraging TypeScript for robust type safety.

## Features
- HonoJS Powered: Leverages Hono's minimalist API, high performance, and suitability for Edge environments (like Cloudflare Workers, Vercel Edge Functions).
- TypeScript First: Fully type-safe codebase for enhanced developer experience and fewer runtime errors.
- Modular Architecture: Clear separation of concerns using a familiar MVC-like pattern (Controllers, Models, Routes) for better organization and scalability.
- Efficient Routing: Defined API routes in `src/routes/` for clear endpoint management.
- Configuration Management: Easy handling of environment-specific settings.
- Bun Integration: Optimized for `bun` for fast dependency management and execution.

## Project Structure
The project's directory layout is designed for clarity and maintainability:
```tree
.
├── .git/                 # Git version control
├── node_modules/         # Project dependencies
├── public/               # Static assets or public files (if applicable)
├── src/                  # All source code
│   ├── __test__/         # Unit and integration tests
│   ├── config/           # Application-wide configurations (e.g., database, constants)
│   ├── controllers/      # Handles incoming requests, processes data, and sends responses
│   ├── models/           # Defines data structures and interacts with the database
│   ├── routes/           # Defines API endpoints and links them to controllers
│   ├── types/            # Custom TypeScript type definitions and interfaces
│   ├── utils/            # Reusable utility functions
│   └── index.ts          # Main application entry point and server setup
├── .env.sample           # Template for environment variables
├── .gitignore            # Specifies intentionally untracked files to ignore
├── .prettierignore       # Files/directories to ignore during Prettier formatting
├── .prettierrc           # Prettier configuration file for code formatting
├── bun.lockb             # Bun lock file for consistent dependency resolution
├── package-lock.json     # npm lock file (if npm is also used)
├── package.json          # Project metadata, scripts, and dependencies
├── README.md             # This documentation file
└── tsconfig.json         # TypeScript compiler configuration
```
## Quick Start
Get the API up and running in a few simple steps:
1. Clone: `git clone https://github.com/rnyll-pntnr/honojs-boilerplate`
2. Navigate: `cd honojs-boilerplate`
3. Env: `cp .env.sample .env.development and fill in details.`
4. Install:
```bash
bun install
or
npm install
```
5. Run:
```bash
bun run dev
or
npm run dev
```
Your HonoJS API should now be running at `http://localhost:3000` (or the port specified in your .env).

## Getting Started
Detailed instructions for setting up your development environment.

### Prerequisites
- Node.js: It's recommended to use the latest LTS version.
- Bun: If you don't have it, install it via:
```bash
curl -fsSL https://bun.sh/install | bash
```


### Installation
1. Clone the repository:
```bash
git clone https://github.com/rnyll-pntnr/honojs-boilerplate
cd honojs-boilerplate
```
2. Install dependencies:
```bash
bun install
or
npm install
```
(If you prefer npm, you can use npm install instead, but bun is recommended for this project.)

### Environment Variables
The application uses environment variables for sensitive data and configuration.

1. Create .env: Copy the example environment file:
```bash
cp .env.sample .env.development
```
2. Configure .env: Open the .env file and populate it with your specific settings.
```bash
# Example .env content
PORT=3000
DATABASE_URL="your_database_connection_string_here"
# Add any other API keys, secrets, or configuration variables
```
Important: The .env file is ignored by Git and should never be committed to your repository.

### Running the Application
To start the development server with hot-reloading:
```bash
bun dev
or
npm run dev
```
This will typically make your API accessible at `http://localhost:<PORT>` (e.g., `http://localhost:3000`).

## Available Scripts
The `package.json` includes several scripts for common tasks:

- `bun/npm run dev`: Starts the application in development mode with live reloading.

- `bun/npm run build`: Compiles the TypeScript source code into JavaScript.

- `bun/npm run start`: Builds the project and starts the compiled application (for production).

- `bun/npm run test`: Executes all tests found in `src/__test__/`.

- `bun/npm run format`: Formats the code using Prettier based on .prettierrc.

(Please verify and update these scripts based on your actual `package.json`.)

## Testing
Automated tests are located in the `src/__test__/` directory.

To run the test suite:
```bash
bun test
or
npm run test
```
## Deployment
N/A

## License
N/A