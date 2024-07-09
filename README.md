# Simple E-commerce Platform for Spices and Essential Oils from Indonesia

This repository contains the source code for a simple e-commerce platform focused on selling spices and essential oils from Indonesia. The project is built using modern web technologies including Vite, Shadcn UI, TypeScript, and React Router DOM.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display a list of available spices and essential oils
- Detailed product pages
- Shopping cart functionality
- User authentication (optional)
- Responsive design

## Technologies

- [Vite](https://vitejs.dev/)
- [Shadcn UI](https://shadcn.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- Bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/simple-ecommerce.git
cd simple-ecommerce
```

2. Install dependencies using Bun:

```bash
bun install
```

### Running the Development Server

Start the development server with:

```bash
bun dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the project for production, run:

```bash
bun build
```

The built files will be in the `dist` directory.

## Project Structure

```
spice-oil-frontend/
├── node_modules/
├── src/
│   ├── components/
│   ├── lib/
│   ├── routes/
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── bun.lockb
├── components.json
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

- **src/components/**: Reusable UI components
- **src/routes/**: React Router routes configuration
- **src/main.tsx**: Main application component
- **src/index.tsx**: Entry point for the React application

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize this README to match your project's specific requirements and details.
