import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Logo } from '@/components/Logo';
import { FileText, BarChart3 } from 'lucide-react';

export default function Home() {
    return (
        <main className='min-h-screen relative overflow-hidden'>
            {/* Background gradient */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10' />

            {/* Animated background elements */}
            <div className='absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl dark:bg-sky-500/10 animate-float' />
            <div
                className='absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl dark:bg-sky-400/10 animate-float'
                style={{ animationDelay: '2s' }}
            />

            <div className='relative z-10 p-8'>
                <div className='max-w-6xl mx-auto'>
                    {/* Header */}
                    <div className='flex justify-between items-center mb-12 animate-slide-up'>
                        <Logo className='text-5xl font-extrabold' />
                        <ThemeToggle />
                    </div>

                    {/* Hero Section */}
                    <div
                        className='text-center mb-16 animate-slide-up'
                        style={{ animationDelay: '0.1s' }}>
                        <h1 className='text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-500 dark:from-sky-400 dark:to-sky-300 bg-clip-text text-transparent'>
                            Welcome to Aawiz
                        </h1>
                        <p className='text-xl text-slate-600 dark:text-sky-200/80 max-w-2xl mx-auto'>
                            A modern Next.js application showcasing advanced
                            frontend development practices
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className='grid gap-8 md:grid-cols-2 mt-12'>
                        <Card
                            className='animate-slide-up'
                            style={{ animationDelay: '0.2s' }}>
                            <div className='flex items-center gap-4 mb-6'>
                                <div className='p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-sky-500 dark:to-sky-600 shadow-lg'>
                                    <FileText
                                        size={28}
                                        className='text-white'
                                    />
                                </div>
                                <h2 className='text-3xl font-bold text-slate-800 dark:text-sky-300'>
                                    Contact Form
                                </h2>
                            </div>
                            <p className='text-slate-600 dark:text-sky-200/80 mb-6 text-lg leading-relaxed'>
                                A fully validated contact form built with React
                                Hook Form and Zod schema validation. Features
                                real-time error handling and smooth user
                                experience.
                            </p>
                            <Link href='/form' className='block'>
                                <Button className='w-full group'>
                                    <span className='group-hover:translate-x-1 transition-transform inline-block'>
                                        Go to Form →
                                    </span>
                                </Button>
                            </Link>
                        </Card>

                        <Card
                            className='animate-slide-up'
                            style={{ animationDelay: '0.3s' }}>
                            <div className='flex items-center gap-4 mb-6'>
                                <div className='p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-sky-500 dark:to-sky-600 shadow-lg'>
                                    <BarChart3
                                        size={28}
                                        className='text-white'
                                    />
                                </div>
                                <h2 className='text-3xl font-bold text-slate-800 dark:text-sky-300'>
                                    Dashboard
                                </h2>
                            </div>
                            <p className='text-slate-600 dark:text-sky-200/80 mb-6 text-lg leading-relaxed'>
                                Interactive dashboard that fetches and displays
                                data from a public API. Includes loading states,
                                error handling, and real-time data refresh
                                capabilities.
                            </p>
                            <Link href='/dashboard' className='block'>
                                <Button className='w-full group'>
                                    <span className='group-hover:translate-x-1 transition-transform inline-block'>
                                        Go to Dashboard →
                                    </span>
                                </Button>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}
