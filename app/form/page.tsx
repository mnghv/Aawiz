import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Form - Aawiz App',
    description: 'Contact form with validation using React Hook Form',
};

export default function FormPage() {
    return (
        <main className='min-h-screen relative overflow-hidden'>
            {/* Background gradient */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10' />

            {/* Animated background elements */}
            <div className='absolute top-20 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl dark:bg-sky-500/10' />

            <div className='relative z-10 p-8'>
                <div className='max-w-3xl mx-auto'>
                    <div className='flex justify-between items-center mb-12 animate-slide-up'>
                        <Link href='/'>
                            <Logo className='text-4xl font-extrabold' />
                        </Link>
                        <div className='flex items-center gap-4'>
                            <Link href='/dashboard'>
                                <Button variant='outline' className='gap-2'>
                                    <BarChart3 className='w-4 h-4' />
                                    Dashboard
                                </Button>
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>

                    <div
                        className='mb-8 animate-slide-up'
                        style={{ animationDelay: '0.1s' }}>
                        <h1 className='text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-500 dark:from-sky-400 dark:to-sky-300 bg-clip-text text-transparent'>
                            Contact Form
                        </h1>
                        <p className='text-lg text-slate-600 dark:text-sky-200/80'>
                            Fill out the form below and we'll get back to you as
                            soon as possible.
                        </p>
                    </div>

                    <div
                        className='animate-slide-up'
                        style={{ animationDelay: '0.2s' }}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
