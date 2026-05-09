import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const inputWrapperVariants = cva(
  'relative flex items-center w-full border transition-all duration-default ease-default focus-within:ring-2 focus-within:ring-offset-1',
  {
    variants: {
      intent: {
        default: 'border-night-200 focus-within:border-primary-500 focus-within:ring-primary-500',
        primary: 'border-primary-500 focus-within:ring-primary-500',
        error: 'border-error-500 focus-within:ring-error-500',
        warning: 'border-warning-500 focus-within:ring-warning-500',
      },
      variant: {
        solid: 'bg-white text-night-900',
        soft: 'bg-primary-50 text-night-900',
        ringed: '',
      },
      shape: {
        default: 'rounded-md',
        pill: 'rounded-full',
      },
      size: {
        'input-sm': 'h-8 px-3 text-xs',
        'input-md': 'h-10 px-4 text-sm',
        'input-lg': 'h-12 px-6 text-base',
      },
      isDisabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      }
    },
    compoundVariants: [
      { variant: 'soft', intent: 'default', className: 'border-transparent focus-within:border-primary-500' },
      { variant: 'ringed', intent: 'default', className: 'bg-night-200 text-white ring-2 ring-night-200 ring-offset-2 ring-offset-white border-transparent' },
      { variant: 'ringed', intent: 'primary', className: 'bg-primary-500 text-white ring-2 ring-primary-500 ring-offset-2 ring-offset-white border-transparent' },
      { variant: 'ringed', intent: 'error', className: 'bg-error-500 text-white ring-2 ring-error-500 ring-offset-2 ring-offset-white border-transparent' },
      { variant: 'ringed', intent: 'warning', className: 'bg-warning-500 text-white ring-2 ring-warning-500 ring-offset-2 ring-offset-white border-transparent' },
    ],
    defaultVariants: {
      intent: 'default',
      variant: 'solid',
      shape: 'default',
      size: 'input-md',
      isDisabled: false,
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputWrapperVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
  floatingLabel?: React.ReactNode;
  label?: React.ReactNode;
  labelIcon?: React.ReactNode;
  wrapperClassName?: string;
  containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    wrapperClassName, 
    containerClassName,
    intent = 'default', 
    variant = 'solid', 
    shape, 
    size, 
    disabled, 
    leftIcon, 
    rightIcon, 
    rightElement,
    floatingLabel, 
    label,
    labelIcon,
    type, 
    ...props 
  }, ref) => {
    
    const iconColorClass = 
      variant === 'ringed' ? 'text-white' :
      intent === 'error' ? 'text-error-500' : 
      intent === 'warning' ? 'text-warning-500' : 
      intent === 'primary' ? 'text-primary-500' : 'text-night-400';

    const labelColorClass = iconColorClass;

    const inputContent = (
      <div className={cn(inputWrapperVariants({ intent, variant, shape, size, isDisabled: disabled }), rightElement && '!pr-1', wrapperClassName)}>
        {floatingLabel && (
          <span 
            className={cn(
              "absolute -top-2 right-4 px-1 text-[10px] font-semibold tracking-wide flex items-center gap-1",
              variant === 'solid' ? 'bg-white' : variant === 'soft' ? 'bg-primary-50' : 'bg-transparent',
              labelColorClass
            )}
          >
            {floatingLabel}
          </span>
        )}
        
        {leftIcon && (
          <span className={cn("shrink-0 flex items-center justify-center mr-2", iconColorClass)}>
            {leftIcon}
          </span>
        )}
        
        <input
          type={type}
          className={cn(
            "w-full bg-transparent focus:outline-none disabled:cursor-not-allowed",
            variant === 'ringed' ? "placeholder:text-white/60" : "placeholder:text-night-400",
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        
        {rightIcon && !rightElement && (
          <span className={cn("shrink-0 flex items-center justify-center ml-2", iconColorClass)}>
            {rightIcon}
          </span>
        )}

        {rightElement && (
          <div className="shrink-0 flex items-center justify-center ml-2 h-full">
            {rightElement}
          </div>
        )}
      </div>
    );

    if (label) {
      return (
        <div className={cn("flex flex-col gap-1.5 w-full", containerClassName)}>
          <label className="text-sm font-medium text-night-700 flex items-center gap-2">
            {label}
            {labelIcon && <span className="text-night-400">{labelIcon}</span>}
          </label>
          {inputContent}
        </div>
      );
    }

    return inputContent;
  }
);

Input.displayName = 'Input';

