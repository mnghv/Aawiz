import { Metadata } from 'next';
import { DashboardContent } from '@/components/DashboardContent';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Dashboard - Aawiz App',
    description: 'Dashboard displaying data from public API',
};

export default function DashboardPage() {
    return (
        <main className='min-h-screen relative overflow-hidden'>
            {/* Background gradient */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10' />
            
            {/* Animated background elements */}
            <div className='absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl dark:bg-sky-500/10' />
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl dark:bg-sky-400/10' />
            
            <div className='relative z-10 p-8'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex justify-between items-center mb-12 animate-slide-up'>
                        <Link href='/'>
                            <Logo className='text-4xl font-extrabold' />
                        </Link>
                        <div className='flex items-center gap-4'>
                            <Link href='/form'>
                                <Button variant='outline' className='gap-2'>
                                    <FileText className='w-4 h-4' />
                                    Contact Form
                                </Button>
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className='mb-10 animate-slide-up' style={{ animationDelay: '0.1s' }}>
                        <h1 className='text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-500 dark:from-sky-400 dark:to-sky-300 bg-clip-text text-transparent'>
                            Dashboard
                        </h1>
                        <p className='text-lg text-slate-600 dark:text-sky-200/80'>
                            Real-time data from JSONPlaceholder API
                        </p>
                    </div>
                    
                    <div className='animate-slide-up' style={{ animationDelay: '0.2s' }}>
                        <DashboardContent />
                    </div>
                </div>
            </div>
        </main>
    );
}
