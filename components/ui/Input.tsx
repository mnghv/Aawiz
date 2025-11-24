import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold mb-2.5 text-slate-700 dark:text-sky-300">
            {label}
          </label>
        )}
        <input
          className={cn(
            'flex h-12 w-full rounded-lg border-2 border-blue-400 bg-white/80 backdrop-blur-sm px-4 py-3 text-sm',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-blue-500/60',
            'focus:outline-none focus:border-blue-600 transition-all duration-200',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'dark:border-sky-500/50 dark:bg-slate-800/80 dark:text-sky-200 dark:placeholder:text-sky-400/60',
            'dark:focus:border-sky-400',
            error && 'border-red-500 dark:border-red-400 focus:border-red-600 dark:focus:border-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

