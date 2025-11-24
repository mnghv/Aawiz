import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'md', ...props }, ref) => {
        return (
            <button
                className={cn(
                    'inline-flex items-center justify-center rounded-lg font-semibold',
                    'transition-all duration-200 ease-out',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    'disabled:pointer-events-none disabled:opacity-50',
                    'active:scale-95',
                    {
                        [`bg-gradient-to-r from-blue-700 to-blue-600 text-white hover:from-blue-800 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/30 dark:from-sky-500 dark:to-sky-400 dark:hover:from-sky-400 dark:hover:to-sky-300 dark:text-slate-900 dark:hover:shadow-sky-500/30`]:
                            variant === 'default',
                        [`border-2 border-blue-400 bg-transparent hover:bg-blue-50 hover:border-blue-500 hover:shadow-md dark:border-sky-500 dark:hover:bg-slate-800/50 dark:text-sky-400`]:
                            variant === 'outline',
                        [`hover:bg-blue-50 dark:hover:bg-slate-800/50 dark:text-sky-400`]:
                            variant === 'ghost',
                        [`h-8 px-3 text-sm`]: size === 'sm',
                        [`h-10 px-4`]: size === 'md',
                        [`h-12 px-6 text-lg`]: size === 'lg',
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
