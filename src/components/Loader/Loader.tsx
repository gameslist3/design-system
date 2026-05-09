import React from 'react';
import { cn } from '../../utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const loaderVariants = cva(
  'flex flex-col items-center justify-center',
  {
    variants: {
      intent: {
        primary: 'text-primary-500',
        success: 'text-success-500',
        danger: 'text-error-500',
        neutral: 'text-night-500',
        dark: 'text-night-900',
      },
      variant: {
        ring: '',
        dots: '',
        dashed: '',
        gradient: '',
      },
      size: {
        xs: 'w-4 h-4',
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16',
      },
    },
    defaultVariants: {
      intent: 'primary',
      variant: 'ring',
      size: 'md',
    },
  }
);

export interface LoaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof loaderVariants> {
  label?: string;
}

const RingLoader = ({ sizeClass, intentClass }: { sizeClass: string, intentClass: string }) => (
  <svg className={cn("animate-spin", sizeClass, intentClass)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
    <path d="M12 2A10 10 0 0 1 22 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const DotsLoader = ({ sizeClass, intentClass }: { sizeClass: string, intentClass: string }) => (
  <svg className={cn("animate-[spin_1s_steps(12)_infinite]", sizeClass, intentClass)} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {[...Array(12)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 12 12)`}>
        <circle cx="12" cy="3" r="2" style={{ opacity: 1 - (i / 12) }} />
      </g>
    ))}
  </svg>
);

const DashedLoader = ({ sizeClass, intentClass }: { sizeClass: string, intentClass: string }) => (
  <svg className={cn("animate-[spin_1s_steps(12)_infinite]", sizeClass, intentClass)} viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    {[...Array(12)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 12 12)`}>
        <line x1="12" y1="2" x2="12" y2="6.5" strokeWidth="2.5" strokeLinecap="round" style={{ opacity: 1 - (i / 12) }} />
      </g>
    ))}
  </svg>
);

const GradientLoader = ({ sizeClass, intentClass }: { sizeClass: string, intentClass: string }) => (
  <div 
    className={cn("rounded-full animate-spin", sizeClass, intentClass)} 
    style={{ 
      background: `conic-gradient(transparent 10%, currentColor 100%)`, 
      maskImage: 'radial-gradient(circle, transparent 75%, black 76%)', 
      WebkitMaskImage: 'radial-gradient(circle, transparent 75%, black 76%)' 
    }} 
  />
);

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, label, intent = 'primary', variant = 'ring', size = 'md', ...props }, ref) => {
    
    // We separate the size/intent classes from the container so we can apply them directly to the SVG
    // to keep the container layout clean and predictable.
    const sizeMap = {
      xs: 'w-4 h-4',
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    };
    
    const intentMap = {
      primary: 'text-primary-500',
      success: 'text-success-500',
      danger: 'text-error-500',
      neutral: 'text-night-500',
      dark: 'text-night-900',
    };

    const sizeClass = sizeMap[size || 'md'];
    const intentClass = intentMap[intent || 'primary'];

    const renderLoader = () => {
      switch (variant) {
        case 'dots': return <DotsLoader sizeClass={sizeClass} intentClass={intentClass} />;
        case 'dashed': return <DashedLoader sizeClass={sizeClass} intentClass={intentClass} />;
        case 'gradient': return <GradientLoader sizeClass={sizeClass} intentClass={intentClass} />;
        case 'ring':
        default: 
          return <RingLoader sizeClass={sizeClass} intentClass={intentClass} />;
      }
    };

    return (
      <div 
        ref={ref} 
        className={cn("flex flex-col items-center justify-center gap-2", className)} 
        {...props}
      >
        {renderLoader()}
        {label && (
          <span className="text-sm font-medium text-night-600 tracking-wide">
            {label}
          </span>
        )}
      </div>
    );
  }
);

Loader.displayName = 'Loader';
