# Portfolio Website Project

## Overview

This is a professional cybersecurity portfolio website for Jyoti Ranjan Barik, built as a full-stack application showcasing expertise in cybersecurity, certifications, skills, and professional experience. The website serves as a digital resume and portfolio platform for networking and job opportunities in the cybersecurity field.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with a custom dark cybersecurity theme using CSS variables for consistent theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible and customizable components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript and ES modules
- **Framework**: Express.js for REST API endpoints with middleware for request logging
- **Development**: Hot module replacement and development server integration with Vite
- **Storage**: In-memory storage implementation with interface pattern for potential database migration
- **Build**: esbuild for server-side bundling and deployment optimization

### Data Layer
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL) for scalable cloud database hosting
- **Schema Management**: Shared TypeScript schema definitions with Zod validation for type safety
- **Migrations**: Drizzle Kit for database schema migrations and version control

### Styling and Design System
- **Theme**: Custom dark cybersecurity-focused theme with blue and green accent colors
- **Typography**: Inter font family for modern, readable typography
- **Icons**: Font Awesome for consistent iconography throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Animations**: CSS animations and transitions for smooth user interactions

### Development Tools
- **Type Checking**: TypeScript with strict configuration for compile-time error prevention
- **Code Quality**: ESLint and Prettier integration for consistent code formatting
- **Development Experience**: Hot reload, error overlays, and development-specific tooling
- **Path Mapping**: Absolute imports with custom path aliases for cleaner code organization

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **TypeScript**: Full TypeScript support with strict type checking
- **Build Tools**: Vite for development and production builds, esbuild for server bundling

### UI and Styling Libraries
- **Component Library**: Radix UI primitives for accessible base components
- **Styling Framework**: Tailwind CSS with PostCSS for utility-first styling
- **UI Components**: shadcn/ui for pre-built, customizable React components
- **Icons**: Font Awesome for comprehensive icon library
- **Animations**: CSS transitions and Tailwind animation utilities

### Database and Data Management
- **ORM**: Drizzle ORM for type-safe database operations and query building
- **Database**: Neon Database (serverless PostgreSQL) for cloud-hosted database
- **Validation**: Zod for runtime type validation and schema parsing
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development and Deployment
- **Replit Integration**: Replit-specific plugins for development environment integration
- **Development Server**: Express.js with Vite middleware for full-stack development
- **Error Handling**: Runtime error modal for development debugging
- **Cartographer**: Replit cartographer for enhanced development experience

### Utility Libraries
- **State Management**: TanStack React Query for server state and caching
- **Form Handling**: React Hook Form with Hookform resolvers for form validation
- **Date Handling**: date-fns for date manipulation and formatting
- **Class Management**: clsx and class-variance-authority for conditional styling
- **Command Interface**: cmdk for command palette functionality