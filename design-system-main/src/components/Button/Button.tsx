import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-default ease-default focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-sm hover:shadow-md',
        secondary: 'bg-green-500 text-white hover:bg-green-600 shadow-sm hover:shadow-md',
        ghost: 'hover:bg-primary-50 text-primary-600',
        destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-sm hover:shadow-md',
      },
      size: {
        'button-sm': 'h-8 px-3 text-xs rounded-sm gap-1.5',
        'button-md': 'h-10 px-4 text-sm rounded-md gap-2',
        'button-lg': 'h-12 px-6 text-base rounded-lg gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'button-md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({
  variant,
  size,
  loading,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <span className="animate-spin mr-2">
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </span>
      ) : (
        leftIcon && <span className="flex items-center">{leftIcon}</span>
      )}
      
      {children}
      
      {!loading && rightIcon && (
        <span className="flex items-center">{rightIcon}</span>
      )}
    </button>
  );
};
