import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                // Light theme: white and blue
                primary: {
                    light: '#3b82f6', // Blue
                    DEFAULT: '#2563eb', // Blue-600
                    dark: '#1e40af', // Blue-800
                },
                // Dark theme: sky blue and dark slate
                dark: {
                    bg: '#0f172a', // Slate-900 (dark slate)
                    surface: '#1e293b', // Slate-800
                    accent: '#0ea5e9', // Sky-500 (sky blue)
                    'accent-light': '#38bdf8', // Sky-400
                },
            },
        },
    },
    plugins: [],
};
export default config;
