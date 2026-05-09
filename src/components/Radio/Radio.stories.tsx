import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { X } from 'lucide-react';
import React from 'react';
import { cn } from '../../utils/cn';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'neutral', 'dark'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Select option',
    intent: 'primary',
    variant: 'solid',
    size: 'md',
  },
};

export const VariantsMatrix: Story = {
  render: () => {
    const intents = ['primary', 'success', 'danger', 'neutral', 'dark'] as const;
    const variants = ['solid', 'outline'] as const;
    const sizes = ['xl', 'lg', 'md', 'sm'] as const;

    return (
      <div className="flex flex-col gap-12 p-8 bg-surface-page min-h-screen">
        {variants.map((variant) => (
          <div key={variant} className="flex flex-col gap-6">
            <h2 className="text-lg font-bold capitalize text-night-900 border-b pb-2">{variant} Variant</h2>
            
            <div className="flex gap-12 overflow-x-auto pb-4">
              {/* Checked States */}
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <div key={`checked-${size}`} className="flex flex-col gap-4">
                    {intents.map((intent) => (
                      <Radio 
                        key={`${intent}-${size}-checked`} 
                        intent={intent} 
                        variant={variant} 
                        size={size}
                        name={`matrix-${variant}-checked`}
                        defaultChecked={intent === 'primary'} // Just to show one checked if they were an actual group, but here we force them
                        checked
                        readOnly
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="w-px bg-night-200" /> {/* Divider */}

              {/* Unchecked States */}
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <div key={`unchecked-${size}`} className="flex flex-col gap-4">
                    {intents.map((intent) => (
                      <Radio 
                        key={`${intent}-${size}-unchecked`} 
                        intent={intent} 
                        variant={variant} 
                        size={size}
                        checked={false}
                        readOnly
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="w-px bg-night-200" /> {/* Divider */}

              {/* Disabled States */}
              <div className="flex gap-4 opacity-70">
                {sizes.map((size) => (
                  <div key={`disabled-${size}`} className="flex flex-col gap-4">
                    {intents.map((intent) => (
                      <Radio 
                        key={`${intent}-${size}-disabled`} 
                        intent={intent} 
                        variant={variant} 
                        size={size}
                        checked
                        disabled
                      />
                    ))}
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    );
  },
};

const Tag = ({ 
  intent, 
  variant, 
  label, 
  defaultChecked, 
  disabled 
}: { 
  intent: 'primary' | 'success' | 'danger' | 'neutral' | 'dark', 
  variant: 'solid' | 'outline',
  label: string,
  defaultChecked?: boolean,
  disabled?: boolean
}) => {
  const getContainerClasses = () => {
    if (disabled) return 'bg-night-50 border-night-200 text-night-400 cursor-not-allowed';
    
    // Tag background logic based on image
    if (intent === 'primary') return 'bg-primary-50 border-transparent text-primary-600 hover:bg-primary-100';
    if (intent === 'success') return 'bg-success-50 border-transparent text-success-600 hover:bg-success-100';
    if (intent === 'neutral') return 'bg-night-50 border-transparent text-night-600 hover:bg-night-100';
    
    // For "Tenant" and "White-label" in the image which have white backgrounds
    return 'bg-white border-night-200 text-night-700 hover:bg-night-50 border';
  };

  return (
    <label className={cn(
      "flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors cursor-pointer border",
      getContainerClasses()
    )}>
      <Radio 
        intent={intent} 
        variant={variant} 
        name={`tag-group-${variant}${disabled ? '-disabled' : ''}`} 
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      <span className="text-sm font-medium">{label}</span>
      <button 
        type="button" 
        className={cn(
          "ml-1 hover:opacity-100 transition-opacity flex items-center justify-center",
          disabled ? "opacity-50 cursor-not-allowed" : "opacity-70"
        )}
        disabled={disabled}
      >
        <X size={14} strokeWidth={3} />
      </button>
    </label>
  );
};

export const TagComposition: Story = {
  render: () => (
    <div className="flex flex-col gap-12 p-8 bg-surface-page min-h-screen">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Solid Variant Tags</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Tag intent="primary" variant="solid" label="Admin" defaultChecked />
          <Tag intent="success" variant="solid" label="Approves" />
          <Tag intent="neutral" variant="solid" label="User" />
          <Tag intent="primary" variant="solid" label="Tenant" />
          <Tag intent="neutral" variant="solid" label="White-label" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Outline Variant Tags</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Tag intent="primary" variant="outline" label="Admin" defaultChecked />
          <Tag intent="success" variant="outline" label="Approves" />
          <Tag intent="neutral" variant="outline" label="User" />
          <Tag intent="primary" variant="outline" label="Tenant" />
          <Tag intent="neutral" variant="outline" label="White-label" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Disabled Solid Tags</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Tag intent="primary" variant="solid" label="Admin" defaultChecked disabled />
          <Tag intent="success" variant="solid" label="Approves" disabled />
          <Tag intent="neutral" variant="solid" label="User" disabled />
          <Tag intent="primary" variant="solid" label="Tenant" disabled />
          <Tag intent="neutral" variant="solid" label="White-label" disabled />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Disabled Outline Tags</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Tag intent="primary" variant="outline" label="Admin" defaultChecked disabled />
          <Tag intent="success" variant="outline" label="Approves" disabled />
          <Tag intent="neutral" variant="outline" label="User" disabled />
          <Tag intent="primary" variant="outline" label="Tenant" disabled />
          <Tag intent="neutral" variant="outline" label="White-label" disabled />
        </div>
      </div>
    </div>
  )
};
