import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '~/utils/misc'

const wrapperVariants = cva('flex mb-8 w-full', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col'
    },
    position: {
      left: 'justify-start',
      right: 'text-right justify-end',
      center: 'text-center justify-center'
    },
    spacing: {
      none: 'gap-0',
      xs: 'gap-2',
      sm: 'gap-4',
      md: 'gap-8',
      lg: 'gap-12',
      xl: 'gap-16'
    }
  },
  defaultVariants: {
    direction: 'row',
    position: 'center',
    spacing: 'none'
  }
})

interface WrapperProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof wrapperVariants> {
  children: React.ReactNode
}

export const Wrapper = React.forwardRef<HTMLElement, WrapperProps>(
  ({ children, direction, position, spacing, className, ...rest }, ref) => {
    return (
      <section
        ref={ref}
        {...rest}
        className={cn(wrapperVariants({ direction, position, spacing }), className)}
      >
        {children}
      </section>
    )
  }
)

Wrapper.displayName = 'Wrapper'
