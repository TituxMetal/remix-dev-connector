import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '~/utils/misc'

const buttonVariants = cva(
  'cursor-pointer rounded-lg transition duration-200 ease-in-out relative disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        info: 'hover:bg-info/30 hover:text-info border-2 border-info/80 bg-info/40 text-info',
        success:
          'border-success/80 bg-success/40 border-2 text-success hover:bg-success/30 hover:text-success'
      },
      size: {
        normal: 'text-lg px-2 py-2',
        large: 'text-xl px-4 py-3 font-bold'
      }
    },
    defaultVariants: {
      size: 'normal'
    }
  }
)

interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...rest }, ref) => {
    return (
      <button {...rest} ref={ref} className={cn(buttonVariants({ variant, size }), className)}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
