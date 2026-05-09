import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const trackVariants = cva(
  'absolute inset-0 rounded-full transition-colors duration-200 ease-in-out border border-transparent',
  {
    variants: {
      intent: {
        primary: '',
        success: '',
        danger: '',
        neutral: '',
        dark: '',
      },
      variant: {
        solid: '',
        soft: '',
        ringed: '',
      },
    },
    compoundVariants: [
      // Solid Variants
      { intent: 'primary', variant: 'solid', className: 'bg-night-200 peer-checked:bg-primary-500 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2' },
      { intent: 'success', variant: 'solid', className: 'bg-night-200 peer-checked:bg-success-500 peer-focus-visible:ring-2 peer-focus-visible:ring-success-500 peer-focus-visible:ring-offset-2' },
      { intent: 'danger', variant: 'solid', className: 'bg-night-200 peer-checked:bg-error-500 peer-focus-visible:ring-2 peer-focus-visible:ring-error-500 peer-focus-visible:ring-offset-2' },
      { intent: 'neutral', variant: 'solid', className: 'bg-night-200 peer-checked:bg-night-400 peer-focus-visible:ring-2 peer-focus-visible:ring-night-400 peer-focus-visible:ring-offset-2' },
      { intent: 'dark', variant: 'solid', className: 'bg-night-200 peer-checked:bg-night-900 peer-focus-visible:ring-2 peer-focus-visible:ring-night-900 peer-focus-visible:ring-offset-2' },

      // Soft Variants
      { intent: 'primary', variant: 'soft', className: 'bg-primary-50 peer-checked:bg-primary-500 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2' },
      { intent: 'success', variant: 'soft', className: 'bg-success-50 peer-checked:bg-success-500 peer-focus-visible:ring-2 peer-focus-visible:ring-success-500 peer-focus-visible:ring-offset-2' },
      { intent: 'danger', variant: 'soft', className: 'bg-error-50 peer-checked:bg-error-500 peer-focus-visible:ring-2 peer-focus-visible:ring-error-500 peer-focus-visible:ring-offset-2' },
      { intent: 'neutral', variant: 'soft', className: 'bg-night-50 peer-checked:bg-night-400 peer-focus-visible:ring-2 peer-focus-visible:ring-night-400 peer-focus-visible:ring-offset-2' },
      { intent: 'dark', variant: 'soft', className: 'bg-night-100 peer-checked:bg-night-900 peer-focus-visible:ring-2 peer-focus-visible:ring-night-900 peer-focus-visible:ring-offset-2' },

      // Ringed Variants
      { intent: 'primary', variant: 'ringed', className: 'bg-transparent border-night-300 peer-checked:border-transparent peer-checked:bg-primary-500 peer-checked:ring-2 peer-checked:ring-primary-500 peer-checked:ring-offset-2 peer-checked:ring-offset-white' },
      { intent: 'success', variant: 'ringed', className: 'bg-transparent border-night-300 peer-checked:border-transparent peer-checked:bg-success-500 peer-checked:ring-2 peer-checked:ring-success-500 peer-checked:ring-offset-2 peer-checked:ring-offset-white' },
      { intent: 'danger', variant: 'ringed', className: 'bg-transparent border-night-300 peer-checked:border-transparent peer-checked:bg-error-500 peer-checked:ring-2 peer-checked:ring-error-500 peer-checked:ring-offset-2 peer-checked:ring-offset-white' },
      { intent: 'neutral', variant: 'ringed', className: 'bg-transparent border-night-300 peer-checked:border-transparent peer-checked:bg-night-400 peer-checked:ring-2 peer-checked:ring-night-400 peer-checked:ring-offset-2 peer-checked:ring-offset-white' },
      { intent: 'dark', variant: 'ringed', className: 'bg-transparent border-night-300 peer-checked:border-transparent peer-checked:bg-night-900 peer-checked:ring-2 peer-checked:ring-night-900 peer-checked:ring-offset-2 peer-checked:ring-offset-white' },
    ],
    defaultVariants: {
      intent: 'primary',
      variant: 'solid',
    },
  }
);

const thumbVariants = cva(
  'absolute left-0 top-0 rounded-full transition-all duration-200 ease-in-out shadow-sm border border-transparent',
  {
    variants: {
      intent: {
        primary: '',
        success: '',
        danger: '',
        neutral: '',
        dark: '',
      },
      variant: {
        solid: '',
        soft: '',
        ringed: '',
      },
      size: {
        sm: 'w-3 h-3 m-[2px] peer-checked:translate-x-4',
        md: 'w-4 h-4 m-[2px] peer-checked:translate-x-5',
        lg: 'w-5 h-5 m-[2px] peer-checked:translate-x-6',
        xl: 'w-7 h-7 m-[2px] peer-checked:translate-x-8',
      },
    },
    compoundVariants: [
      // Solid Variants
      { variant: 'solid', className: 'bg-white border-night-200 peer-checked:border-transparent' },
      
      // Soft Variants
      { intent: 'primary', variant: 'soft', className: 'bg-primary-500 peer-checked:bg-white peer-checked:border-transparent' },
      { intent: 'success', variant: 'soft', className: 'bg-success-500 peer-checked:bg-white peer-checked:border-transparent' },
      { intent: 'danger', variant: 'soft', className: 'bg-error-500 peer-checked:bg-white peer-checked:border-transparent' },
      { intent: 'neutral', variant: 'soft', className: 'bg-night-400 peer-checked:bg-white peer-checked:border-transparent' },
      { intent: 'dark', variant: 'soft', className: 'bg-night-900 peer-checked:bg-white peer-checked:border-transparent' },

      // Ringed Variants
      { variant: 'ringed', className: 'bg-night-300 peer-checked:bg-white border-transparent' },
    ],
    defaultVariants: {
      intent: 'primary',
      variant: 'solid',
      size: 'md',
    },
  }
);

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof thumbVariants> {
  label?: string;
  description?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, description, intent = 'primary', variant = 'solid', size = 'md', ...props }, ref) => {
    const containerSizes = {
      sm: 'w-8 h-4',
      md: 'w-10 h-5',
      lg: 'w-12 h-6',
      xl: 'w-16 h-8',
    };

    const currentSize = size || 'md';

    return (
      <label className={cn("inline-flex items-start gap-3 cursor-pointer group", props.disabled && "cursor-not-allowed opacity-50")}>
        <div className={cn("relative shrink-0", containerSizes[currentSize as keyof typeof containerSizes], className)}>
          <input
            type="checkbox"
            className="peer sr-only"
            ref={ref}
            {...props}
          />
          <div className={cn(trackVariants({ intent, variant }))} />
          <span className={cn(thumbVariants({ intent, variant, size }))} />
        </div>
        
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <span className="text-sm font-medium text-night-700 group-hover:text-night-900 transition-colors">
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs mt-0.5 text-night-500">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

