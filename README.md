# Project Name: PGS

This project is a web application built with React, Vite, and PocketBase. It provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Project Structure

The project structure is as follows:

- **`public/`**: This directory contains static assets that are publicly accessible.
- **`src/`**: This directory contains the main source code for the application.
  - **`api/`**: This directory contains the API client for interacting with the PocketBase backend.
  - **`assets/`**: This directory contains static assets like images and fonts.
  - **`components/`**: This directory contains reusable UI components.
    - **`ui/`**: This directory contains UI components from [shadcn/ui](https://ui.shadcn.com/).
  - **`layout/`**: This directory contains layout components for different parts of the application.
  - **`lib/`**: This directory contains utility functions.
  - **`pages/`**: This directory contains the main pages of the application.
    - **`auth/`**: This directory contains authentication-related pages like Login and Register.
    - **`dashboard/`**: This directory contains pages for the main application dashboard.
  - **`routes.jsx`**: This File contains the main routing configuration for the application.
  - **`App.jsx`**: This is the main application component.
  - **`index.css`**: This file contains the main stylesheet for the application.
  - **`main.jsx`**: This is the main entry point for the application.
- **`.env`**: This file contains environment variables for the application.


## Features

### Styling and Components

The project uses [Tailwind CSS](https://tailwindcss.com/) for styling and [shadcn/ui](https://ui.shadcn.com/) for UI components. The `src/components/ui` directory contains the UI components from shadcn/ui, and the `src/components` directory contains other reusable components.

### Data Fetching and State Management

The project uses [React Query](https://tanstack.com/query/v5) for data fetching and state management. This helps in fetching, caching, and updating data from the PocketBase backend.

### Form Validation

The project uses [React Hook Form](https://react-hook-form.com/) for form validation. This helps in validating user input in forms like login and registration.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sajjadahammad/pgs-assessment.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory of the project and add the following environment variables:

   ```
   VITE_BASE_URL=http://localhost:8090 or hosted link given in teh assessment
   ```

4. **Start the PocketBase server:**

   Run the `pocketbase.exe` executable to start the PocketBase server.

5. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the development server and open the application in your browser at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run the following scripts:

- **`npm run dev`**: Runs the app in the development mode.
- **`npm run build`**: Builds the app for production to the `dist` folder.
- **`npm run lint`**: Lints the code using ESLint.
- **`npm run preview`**: Previews the production build locally.
