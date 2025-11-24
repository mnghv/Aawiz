import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-blue-200/50 bg-white/80 backdrop-blur-sm p-6',
          'shadow-lg shadow-blue-500/5',
          'transition-all duration-300 ease-out',
          'dark:border-sky-500/20 dark:bg-slate-800/80',
          'dark:shadow-sky-500/10',
          hover && 'hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-300',
          hover && 'dark:hover:shadow-sky-500/20 dark:hover:border-sky-500/40',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

