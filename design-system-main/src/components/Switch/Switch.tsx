import React from 'react';
import { cn } from '../../utils/cn';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only peer"
            ref={ref}
            {...props}
          />
          <div className={cn(
            "w-11 h-6 bg-night-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-night-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500",
            className
          )} />
        </div>
        {label && (
          <span className="ms-3 text-sm font-medium text-night-700 group-hover:text-night-900 transition-colors">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
