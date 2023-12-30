import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '~/utils/misc'

const titleVariants = cva('py-2', {
  variants: {
    size: {
      normal: 'text-2xl sm:text-3xl md:text-4xl',
      large: 'text-3xl sm:text-4xl md:text-5xl'
    },
    position: {
      left: 'self-start',
      right: 'self-end',
      center: 'text-center'
    }
  },
  defaultVariants: {
    size: 'normal',
    position: 'left'
  }
})

interface LeadTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  children: React.ReactNode
}

const LeadTitle = React.forwardRef<HTMLHeadingElement, LeadTitleProps>(
  ({ children, size, position }, ref) => {
    return (
      <h1 ref={ref} className={cn(titleVariants({ size, position }))}>
        {children}
      </h1>
    )
  }
)

LeadTitle.displayName = 'LeadTitle'

const subtitleVariants = cva('py-4', {
  variants: {
    size: {
      normal: 'text-2xl sm:text-xl md:text-2xl',
      large: 'text-xl sm:text-2xl md:text-3xl p-4 sm:p-8'
    },
    position: {
      left: 'self-start',
      right: 'text-right self-end',
      center: 'text-center'
    }
  },
  defaultVariants: {
    size: 'normal',
    position: 'left'
  }
})

interface SubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof subtitleVariants> {
  children: React.ReactNode
}

const LeadSubtitle = React.forwardRef<HTMLParagraphElement, SubtitleProps>(
  ({ children, className, position, size, ...rest }, ref) => {
    return (
      <p ref={ref} {...rest} className={cn(subtitleVariants({ position, size }), className)}>
        {children}
      </p>
    )
  }
)

export const Lead = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

LeadSubtitle.displayName = 'LeadSubtitle'

Lead.Title = LeadTitle
Lead.Subtitle = LeadSubtitle
