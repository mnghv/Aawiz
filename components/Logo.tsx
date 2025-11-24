import Link from 'next/link';

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <Link 
            href='/' 
            className={`inline-block transition-transform duration-200 hover:scale-105 active:scale-95 ${className || ''}`}
        >
            <span
                className='text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 dark:from-sky-400 dark:via-sky-300 dark:to-sky-400 bg-clip-text text-transparent'
            >
                Aawiz
            </span>
        </Link>
    );
}

