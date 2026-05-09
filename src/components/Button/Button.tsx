import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-default ease-default focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
  {
    variants: {
      intent: {
        primary: '',
        success: '',
        danger: '',
        neutral: '',
      },
      variant: {
        solid: '',
        outline: '',
        soft: '',
        ghost: '',
        ringed: '',
      },
      size: {
        'button-sm': 'h-8 px-3 text-xs gap-1.5',
        'button-md': 'h-10 px-4 text-sm gap-2',
        'button-lg': 'h-12 px-6 text-base gap-2.5',
        'icon': 'h-10 w-10 p-0',
      },
      shape: {
        default: '',
        pill: 'rounded-full',
      },
    },
    compoundVariants: [
      // Shape defaults based on size (if not pill)
      { size: 'button-sm', shape: 'default', className: 'rounded-sm' },
      { size: 'button-md', shape: 'default', className: 'rounded-md' },
      { size: 'button-lg', shape: 'default', className: 'rounded-lg' },
      { size: 'icon', shape: 'default', className: 'rounded-md' },

      // Primary
      { intent: 'primary', variant: 'solid', className: 'bg-primary-500 text-white hover:bg-primary-600 shadow-sm hover:shadow-md border border-transparent' },
      { intent: 'primary', variant: 'outline', className: 'border border-primary-500 text-primary-500 hover:bg-primary-50 bg-white' },
      { intent: 'primary', variant: 'soft', className: 'bg-primary-50 text-primary-700 hover:bg-primary-100 border border-transparent' },
      { intent: 'primary', variant: 'ghost', className: 'hover:bg-primary-50 text-primary-600 border border-transparent' },
      { intent: 'primary', variant: 'ringed', className: 'bg-primary-500 text-white hover:bg-primary-600 ring-2 ring-primary-500 ring-offset-2 ring-offset-white' },

      // Success
      { intent: 'success', variant: 'solid', className: 'bg-success-500 text-white hover:bg-success-600 shadow-sm hover:shadow-md border border-transparent' },
      { intent: 'success', variant: 'outline', className: 'border border-success-500 text-success-500 hover:bg-success-50 bg-white' },
      { intent: 'success', variant: 'soft', className: 'bg-success-50 text-success-700 hover:bg-success-100 border border-transparent' },
      { intent: 'success', variant: 'ghost', className: 'hover:bg-success-50 text-success-600 border border-transparent' },
      { intent: 'success', variant: 'ringed', className: 'bg-success-500 text-white hover:bg-success-600 ring-2 ring-success-500 ring-offset-2 ring-offset-white' },

      // Danger
      { intent: 'danger', variant: 'solid', className: 'bg-error-500 text-white hover:bg-error-600 shadow-sm hover:shadow-md border border-transparent' },
      { intent: 'danger', variant: 'outline', className: 'border border-error-500 text-error-500 hover:bg-error-50 bg-white' },
      { intent: 'danger', variant: 'soft', className: 'bg-error-50 text-error-700 hover:bg-error-100 border border-transparent' },
      { intent: 'danger', variant: 'ghost', className: 'hover:bg-error-50 text-error-600 border border-transparent' },
      { intent: 'danger', variant: 'ringed', className: 'bg-error-500 text-white hover:bg-error-600 ring-2 ring-error-500 ring-offset-2 ring-offset-white' },

      // Neutral
      { intent: 'neutral', variant: 'solid', className: 'bg-secondary-900 text-white hover:bg-secondary-800 shadow-sm hover:shadow-md border border-transparent' },
      { intent: 'neutral', variant: 'outline', className: 'border border-neutral-300 text-secondary-900 hover:bg-neutral-50 bg-white' },
      { intent: 'neutral', variant: 'soft', className: 'bg-neutral-100 text-secondary-800 hover:bg-neutral-200 border border-transparent' },
      { intent: 'neutral', variant: 'ghost', className: 'hover:bg-neutral-100 text-secondary-700 border border-transparent' },
      { intent: 'neutral', variant: 'ringed', className: 'bg-secondary-900 text-white hover:bg-secondary-800 ring-2 ring-secondary-900 ring-offset-2 ring-offset-white' },
    ],
    defaultVariants: {
      intent: 'primary',
      variant: 'solid',
      size: 'button-md',
      shape: 'default',
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({
  intent,
  variant,
  size,
  shape,
  loading,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ intent, variant, size, shape }), className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <span className="animate-spin shrink-0 flex items-center justify-center">
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </span>
      ) : (
        leftIcon && <span className="shrink-0 flex items-center justify-center">{leftIcon}</span>
      )}
      
      {children}
      
      {!loading && rightIcon && (
        <span className="shrink-0 flex items-center justify-center">{rightIcon}</span>
      )}
    </button>
  );
};
