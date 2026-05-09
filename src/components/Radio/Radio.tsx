import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const radioVariants = cva(
  'peer shrink-0 flex items-center justify-center rounded-full transition-all duration-default ease-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed [&_span]:scale-0 peer-checked:[&_span]:scale-100',
  {
    variants: {
      intent: {
        primary: 'focus-visible:ring-primary-500',
        success: 'focus-visible:ring-success-500',
        danger: 'focus-visible:ring-error-500',
        neutral: 'focus-visible:ring-night-400',
        dark: 'focus-visible:ring-night-900',
      },
      variant: {
        solid: 'border',
        outline: 'border-2',
      },
      size: {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-8 h-8',
      },
    },
    compoundVariants: [
      // Solid Variants
      { intent: 'primary', variant: 'solid', className: 'border-night-300 bg-white peer-checked:border-primary-500 peer-checked:bg-primary-500' },
      { intent: 'success', variant: 'solid', className: 'border-night-300 bg-white peer-checked:border-success-500 peer-checked:bg-success-500' },
      { intent: 'danger', variant: 'solid', className: 'border-night-300 bg-white peer-checked:border-error-500 peer-checked:bg-error-500' },
      { intent: 'neutral', variant: 'solid', className: 'border-night-300 bg-white peer-checked:border-night-400 peer-checked:bg-night-400' },
      { intent: 'dark', variant: 'solid', className: 'border-night-300 bg-white peer-checked:border-night-900 peer-checked:bg-night-900' },

      // Outline Variants
      { intent: 'primary', variant: 'outline', className: 'border-night-300 bg-white peer-checked:border-primary-500' },
      { intent: 'success', variant: 'outline', className: 'border-night-300 bg-white peer-checked:border-success-500' },
      { intent: 'danger', variant: 'outline', className: 'border-night-300 bg-white peer-checked:border-error-500' },
      { intent: 'neutral', variant: 'outline', className: 'border-night-300 bg-white peer-checked:border-night-400' },
      { intent: 'dark', variant: 'outline', className: 'border-night-300 bg-white peer-checked:border-night-900' },
    ],
    defaultVariants: {
      intent: 'primary',
      variant: 'solid',
      size: 'md',
    },
  }
);

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof radioVariants> {
  label?: string;
  description?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, intent = 'primary', variant = 'solid', size = 'md', ...props }, ref) => {
    
    const getDotSize = (s: string) => {
      switch (s) {
        case 'sm': return 'w-1.5 h-1.5';
        case 'md': return 'w-2 h-2';
        case 'lg': return 'w-2.5 h-2.5';
        case 'xl': return 'w-3.5 h-3.5';
        default: return 'w-2 h-2';
      }
    };

    const getDotClasses = (i: string, v: string) => {
      if (v === 'solid') return 'bg-white';
      switch (i) {
        case 'primary': return 'bg-primary-500';
        case 'success': return 'bg-success-500';
        case 'danger': return 'bg-error-500';
        case 'neutral': return 'bg-night-400';
        case 'dark': return 'bg-night-900';
        default: return 'bg-primary-500';
      }
    };

    return (
      <label className={cn("inline-flex items-start gap-2 cursor-pointer group", props.disabled && "cursor-not-allowed")}>
        <div className="relative flex items-center justify-center shrink-0 pt-0.5">
          <input
            type="radio"
            className="peer sr-only"
            ref={ref}
            {...props}
          />
          <div className={cn(radioVariants({ intent, variant, size }), className)}>
            <span 
              className={cn(
                "rounded-full transition-transform duration-200",
                getDotSize(size || 'md'),
                getDotClasses(intent || 'primary', variant || 'solid')
              )} 
            />
          </div>
        </div>
        
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <span className={cn(
                "text-sm font-medium transition-colors",
                props.disabled ? "text-night-400" : "text-night-700 group-hover:text-night-900"
              )}>
                {label}
              </span>
            )}
            {description && (
              <span className={cn(
                "text-xs mt-0.5",
                props.disabled ? "text-night-300" : "text-night-500"
              )}>
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
