import React from 'react';
import { cn } from '../../utils/cn';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer group">
        <input
          type="checkbox"
          className={cn(
            "w-4 h-4 text-primary-600 bg-white border-night-300 rounded focus:ring-primary-500 focus:ring-2 transition-all cursor-pointer peer",
            className
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <span className="ms-2 text-sm font-medium text-night-700 group-hover:text-night-900 transition-colors peer-disabled:opacity-50">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
