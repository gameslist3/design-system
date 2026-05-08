import React from 'react';
import { cn } from '../../utils/cn';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-night-900/50 backdrop-blur-sm animate-in fade-in duration-default">
      <div 
        className={cn(
          "relative w-full max-w-lg bg-white rounded-xl shadow-2xl animate-in zoom-in-95 duration-default",
          className
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {title && <h3 className="text-lg font-semibold text-night-900">{title}</h3>}
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-night-100 transition-colors text-night-500"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
