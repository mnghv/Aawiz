# Aawiz Next.js 14 Application

A modern Next.js 14 application demonstrating best practices with forms, dashboard, reusable components, and dark mode support.

## Features

✅ **Form with Validation** - Contact form using React Hook Form and Zod validation  
✅ **Dashboard Page** - Fetches and displays data from JSONPlaceholder API  
✅ **Reusable UI Components** - Button, Card, and Input components  
✅ **Dark/Light Mode Toggle** - Theme switching with next-themes  
✅ **SEO Optimized** - Proper metadata for all pages  
✅ **TypeScript** - Fully typed with TypeScript  
✅ **Tailwind CSS** - Modern styling with Tailwind CSS  

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
aawiz/
├── app/
│   ├── dashboard/     # Dashboard page with API data
│   ├── form/          # Contact form page
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout with SEO
│   └── page.tsx       # Home page
├── components/
│   ├── ui/            # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── ContactForm.tsx
│   ├── DashboardContent.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
└── lib/
    └── utils.ts       # Utility functions
```

## Pages

- **/** - Home page with navigation
- **/form** - Contact form with validation
- **/dashboard** - Dashboard displaying posts from API

## Components

### Button
Reusable button component with variants (default, outline, ghost) and sizes.

### Card
Container component for content sections.

### Input
Form input with label, error handling, and dark mode support.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Technologies Used

- **Next.js 14** - React framework
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **next-themes** - Dark mode support
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **lucide-react** - Icon library

## Color Scheme

- **Light Theme**: White background with blue accents
- **Dark Theme**: Dark slate background with sky blue accents

## License

MIT

