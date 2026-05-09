import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const cardVariants = cva(
  'rounded-lg border bg-card text-card-foreground shadow-sm',
  {
    variants: {
      variant: {
        default: '', // TODO: fill from Figma
        elevated: '', // TODO: fill from Figma
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = ({ className, variant, ...props }: CardProps) => {
  return (
    <div className={cn(cardVariants({ variant }), className)} {...props} />
  );
};
