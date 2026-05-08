import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const typographyVariants = cva('font-sans', {
  variants: {
    variant: {
      h1: 'text-h1 font-extrabold tracking-tight text-night-900',
      h2: 'text-h2 font-semibold tracking-tight text-night-900',
      h3: 'text-h3 font-semibold tracking-tight text-night-900',
      h4: 'text-h4 font-semibold tracking-tight text-night-900',
      h5: 'text-h5 font-semibold text-night-900',
      h6: 'text-h6 font-semibold text-night-900',
      // Body variants from Figma
      lg: 'text-lg text-night-700',
      md: 'text-md text-night-700',
      sm: 'text-sm text-night-700',
      smx: 'text-smx text-night-600',
      smxl: 'text-smxl text-night-600',
      smxx: 'text-smxx text-night-600',
      // Functional aliases
      p: 'text-md leading-7 text-night-700',
      lead: 'text-lg text-night-500',
      muted: 'text-smx text-night-400',
    },

  },
  defaultVariants: {
    variant: 'p',
  },
});


export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export const Typography = ({
  className,
  variant,
  as: Component = 'p',
  ...props
}: TypographyProps) => {
  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
};
