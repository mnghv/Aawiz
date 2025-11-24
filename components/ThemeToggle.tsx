'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className='w-24 h-10' />;
    }

    return (
        <Button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            variant='outline'
            className='gap-2'
        >
            {theme === 'dark' ? (
                <>
                    <Sun className='w-4 h-4' />
                    Light
                </>
            ) : (
                <>
                    <Moon className='w-4 h-4' />
                    Dark
                </>
            )}
        </Button>
    );
}

