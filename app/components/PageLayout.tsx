import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '~/utils/misc'

const containerVariants = cva(' flex-grow p-1', {
  variants: {
    fullWidth: {
      true: 'p-0 m-auto sm:w-9/12 sm:p-2 w-full',
      false: 'p-4 sm:p-8 md:w-3/4'
    }
  },
  defaultVariants: {
    fullWidth: false
  }
})

interface PageLayoutProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof containerVariants> {
  children: React.ReactNode
}

export const PageLayout = React.forwardRef<HTMLElement, PageLayoutProps>(
  ({ children, className, fullWidth }, ref) => {
    return (
      <main ref={ref} className='flex min-h-screen flex-col'>
        <div className='flex flex-col items-center justify-center bg-primary/80 py-4'>Menu</div>
        <section className={cn(containerVariants({ fullWidth }), className)}>{children}</section>
        <div className='flex justify-center bg-primary/80 py-4'>
          <p className='text-lg'>Created with love by TuxiMetal</p>
        </div>
      </main>
    )
  }
)

PageLayout.displayName = 'PageLayout'
