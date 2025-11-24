import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Aawiz Next.js App - Dashboard & Forms',
    description:
        'A modern Next.js 14 application with forms, dashboard, and dark mode support',
    keywords: ['Next.js', 'React', 'TypeScript', 'Dashboard', 'Forms'],
    authors: [{ name: 'Aawiz' }],
    icons: {
        icon: '/favicon.jpg',
        shortcut: '/favicon.jpg',
        apple: '/favicon.jpg',
    },
    openGraph: {
        title: 'Aawiz Next.js App',
        description: 'A modern Next.js 14 application',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aawiz Next.js App',
        description: 'A modern Next.js 14 application',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' suppressHydrationWarning className={inter.variable}>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider>
                    {children}
                    <Toaster
                        position='top-right'
                        toastOptions={{
                            duration: 4000,
                            style: {
                                background: 'var(--toast-bg)',
                                color: 'var(--toast-color)',
                                borderRadius: '12px',
                                padding: '16px',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                            },
                            success: {
                                iconTheme: {
                                    primary: '#10b981',
                                    secondary: '#fff',
                                },
                            },
                            error: {
                                iconTheme: {
                                    primary: '#ef4444',
                                    secondary: '#fff',
                                },
                            },
                        }}
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}
