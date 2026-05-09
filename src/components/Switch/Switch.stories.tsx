import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import React from 'react';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'neutral', 'dark'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'ringed'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Toggle setting',
    intent: 'primary',
    variant: 'solid',
    size: 'md',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Enable notifications',
    description: 'Receive push notifications for new messages.',
    intent: 'primary',
    variant: 'solid',
  },
};

export const VariantsMatrix: Story = {
  render: () => {
    const intents = ['primary', 'success', 'danger', 'neutral', 'dark'] as const;
    const variants = ['solid', 'soft', 'ringed'] as const;
    const sizes = ['xl', 'lg', 'md', 'sm'] as const;

    return (
      <div className="flex flex-col gap-16 p-8 bg-surface-page min-h-screen">
        {variants.map((variant) => (
          <div key={variant} className="flex flex-col gap-8">
            <h2 className="text-xl font-bold capitalize text-night-900 border-b pb-2">{variant} Variant</h2>
            
            <div className="flex flex-col gap-12">
              {intents.map((intent) => (
                <div key={intent} className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">{intent}</h3>
                  
                  <div className="flex gap-16 overflow-x-auto pb-4 items-end">
                    {/* Checked States */}
                    <div className="flex gap-8 items-center">
                      {sizes.map((size) => (
                        <Switch 
                          key={`${intent}-${size}-checked`} 
                          intent={intent} 
                          variant={variant} 
                          size={size}
                          defaultChecked
                        />
                      ))}
                    </div>

                    <div className="w-px h-12 bg-night-200" /> {/* Divider */}

                    {/* Unchecked States */}
                    <div className="flex gap-8 items-center">
                      {sizes.map((size) => (
                        <Switch 
                          key={`${intent}-${size}-unchecked`} 
                          intent={intent} 
                          variant={variant} 
                          size={size}
                        />
                      ))}
                    </div>

                    <div className="w-px h-12 bg-night-200" /> {/* Divider */}

                    {/* Disabled States (Checked) */}
                    <div className="flex gap-8 items-center">
                      {sizes.map((size) => (
                        <Switch 
                          key={`${intent}-${size}-disabled-checked`} 
                          intent={intent} 
                          variant={variant} 
                          size={size}
                          defaultChecked
                          disabled
                        />
                      ))}
                    </div>

                    <div className="w-px h-12 bg-night-200" /> {/* Divider */}

                    {/* Disabled States (Unchecked) */}
                    <div className="flex gap-8 items-center">
                      {sizes.map((size) => (
                        <Switch 
                          key={`${intent}-${size}-disabled-unchecked`} 
                          intent={intent} 
                          variant={variant} 
                          size={size}
                          disabled
                        />
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

