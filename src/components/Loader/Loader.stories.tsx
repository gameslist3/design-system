import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import React from 'react';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'neutral', 'dark'],
    },
    variant: {
      control: 'select',
      options: ['ring', 'dots', 'dashed', 'gradient'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    intent: 'primary',
    variant: 'ring',
    size: 'md',
    label: 'Loading...',
  },
};

export const VariantsMatrix: Story = {
  render: () => {
    const variants = ['ring', 'dots', 'dashed', 'gradient'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    return (
      <div className="flex gap-24 p-12 bg-surface-page min-h-screen">
        
        {/* Primary Block */}
        <div className="flex flex-col gap-12 bg-white p-12 rounded-2xl shadow-sm border border-night-100">
          <h2 className="text-xl font-bold text-night-900 mb-4 border-b pb-2">Primary Loaders</h2>
          {variants.map((variant) => (
            <div key={`primary-${variant}`} className="flex gap-12 items-end">
              {sizes.map((size) => (
                <Loader 
                  key={`primary-${variant}-${size}`} 
                  intent="primary" 
                  variant={variant} 
                  size={size} 
                  label="Loading..." 
                />
              ))}
            </div>
          ))}
        </div>

        {/* Success Block */}
        <div className="flex flex-col gap-12 bg-white p-12 rounded-2xl shadow-sm border border-night-100">
          <h2 className="text-xl font-bold text-night-900 mb-4 border-b pb-2">Success Loaders</h2>
          {variants.map((variant) => (
            <div key={`success-${variant}`} className="flex gap-12 items-end">
              {sizes.map((size) => (
                <Loader 
                  key={`success-${variant}-${size}`} 
                  intent="success" 
                  variant={variant} 
                  size={size} 
                  label="Loading..." 
                />
              ))}
            </div>
          ))}
        </div>

      </div>
    );
  },
};
