import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';

const checkboxVariants = cva(
  'peer shrink-0 flex items-center justify-center transition-all duration-default ease-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&_svg]:opacity-0 peer-checked:[&_svg]:opacity-100 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
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
        outline: 'border',
        ghost: 'border-transparent bg-transparent',
        ringed: 'border transition-all',
      },
      shape: {
        default: 'rounded',
        circle: 'rounded-full',
      },
      size: {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-8 h-8',
      },
    },
    compoundVariants: [
      // Solid Variants
      { intent: 'primary', variant: 'solid', className: 'border-night-300 bg-white peer-checked:border-primary-500 peer-checked:bg-primary-500 text-white' },
      { intent: 'success', variant: 'solid', className: 'border-night-300 bg-white peer-checked:border-success-500 peer-checked:bg-success-500 text-white' },
      { intent: 'danger', variant: 'solid', className: 'border-night-300 bg-white peer-checked:border-error-500 peer-checked:bg-error-500 text-white' },
      { intent: 'neutral', variant: 'solid', className: 'border-night-300 bg-white peer-checked:border-night-400 peer-checked:bg-night-400 text-white' },
      { intent: 'dark', variant: 'solid', className: 'border-night-300 bg-white peer-checked:border-night-900 peer-checked:bg-night-900 text-white' },

      // Outline Variants
      { intent: 'primary', variant: 'outline', className: 'border-primary-500 bg-transparent text-primary-500' },
      { intent: 'success', variant: 'outline', className: 'border-success-500 bg-transparent text-success-500' },
      { intent: 'danger', variant: 'outline', className: 'border-error-500 bg-transparent text-error-500' },
      { intent: 'neutral', variant: 'outline', className: 'border-night-400 bg-transparent text-night-400' },
      { intent: 'dark', variant: 'outline', className: 'border-night-900 bg-transparent text-night-900' },

      // Ghost Variants
      { intent: 'primary', variant: 'ghost', className: 'text-primary-500' },
      { intent: 'success', variant: 'ghost', className: 'text-success-500' },
      { intent: 'danger', variant: 'ghost', className: 'text-error-500' },
      { intent: 'neutral', variant: 'ghost', className: 'text-night-400' },
      { intent: 'dark', variant: 'ghost', className: 'text-night-900' },

      // Ringed Variants
      { intent: 'primary', variant: 'ringed', className: 'border-night-300 bg-white peer-checked:border-transparent peer-checked:bg-primary-500 peer-checked:ring-2 peer-checked:ring-primary-500 peer-checked:ring-offset-2 peer-checked:ring-offset-white text-white' },
      { intent: 'success', variant: 'ringed', className: 'border-night-300 bg-white peer-checked:border-transparent peer-checked:bg-success-500 peer-checked:ring-2 peer-checked:ring-success-500 peer-checked:ring-offset-2 peer-checked:ring-offset-white text-white' },
      { intent: 'danger', variant: 'ringed', className: 'border-night-300 bg-white peer-checked:border-transparent peer-checked:bg-error-500 peer-checked:ring-2 peer-checked:ring-error-500 peer-checked:ring-offset-2 peer-checked:ring-offset-white text-white' },
      { intent: 'neutral', variant: 'ringed', className: 'border-night-300 bg-white peer-checked:border-transparent peer-checked:bg-night-400 peer-checked:ring-2 peer-checked:ring-night-400 peer-checked:ring-offset-2 peer-checked:ring-offset-white text-white' },
      { intent: 'dark', variant: 'ringed', className: 'border-night-300 bg-white peer-checked:border-transparent peer-checked:bg-night-900 peer-checked:ring-2 peer-checked:ring-night-900 peer-checked:ring-offset-2 peer-checked:ring-offset-white text-white' },
    ],
    defaultVariants: {
      intent: 'primary',
      variant: 'solid',
      shape: 'default',
      size: 'md',
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, intent, variant, shape, size, ...props }, ref) => {
    const iconSizes = {
      xs: 8,
      sm: 10,
      md: 14,
      lg: 16,
      xl: 20,
    };

    const currentSize = size || 'md';
    const checkSize = iconSizes[currentSize as keyof typeof iconSizes] || 14;

    return (
      <label className={cn("inline-flex items-start gap-2 cursor-pointer group", props.disabled && "cursor-not-allowed")}>
        <div className="relative flex items-center justify-center shrink-0 pt-0.5">
          <input
            type="checkbox"
            className="peer sr-only"
            ref={ref}
            {...props}
          />
          <div className={cn(checkboxVariants({ intent, variant, shape, size }), className)}>
            <Check size={checkSize} strokeWidth={shape === 'circle' ? 2.5 : 3} className="transition-all duration-200" />
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

Checkbox.displayName = 'Checkbox';

