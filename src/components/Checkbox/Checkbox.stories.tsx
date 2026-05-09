import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'neutral', 'dark'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'ringed'],
    },
    shape: {
      control: 'select',
      options: ['default', 'circle'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    intent: 'primary',
    variant: 'solid',
    size: 'md',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Subscribe to newsletter',
    description: 'We will send you a weekly update on the latest features.',
    intent: 'primary',
    variant: 'solid',
  },
};

export const VariantsMatrix: Story = {
  render: () => {
    const intents = ['primary', 'success', 'danger', 'neutral', 'dark'] as const;
    const variants = ['solid', 'outline', 'ghost', 'ringed'] as const;
    const sizes = ['xl', 'lg', 'md', 'sm', 'xs'] as const;
    const shapes = ['default', 'circle'] as const;

    return (
      <div className="flex flex-col gap-16 p-8 bg-surface-page min-h-screen">
        {shapes.map((shape) => (
          <div key={shape} className="flex flex-col gap-8">
            <h2 className="text-xl font-bold capitalize text-night-900 border-b pb-2">{shape} Shape</h2>
            
            <div className="flex flex-col gap-12">
              {variants.map((variant) => (
                <div key={variant} className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">{variant} Variant</h3>
                  
                  <div className="flex gap-12 overflow-x-auto pb-4">
                    {/* Normal States */}
                    <div className="flex gap-4">
                      {sizes.map((size) => (
                        <div key={size} className="flex flex-col gap-3">
                          {intents.map((intent) => (
                            <Checkbox 
                              key={`${intent}-${size}-checked`} 
                              intent={intent} 
                              variant={variant} 
                              shape={shape}
                              size={size}
                              defaultChecked
                            />
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className="w-px bg-night-200" /> {/* Divider */}

                    {/* Unchecked States */}
                    <div className="flex gap-4">
                      {sizes.map((size) => (
                        <div key={`unchecked-${size}`} className="flex flex-col gap-3">
                          {intents.map((intent) => (
                            <Checkbox 
                              key={`${intent}-${size}-unchecked`} 
                              intent={intent} 
                              variant={variant} 
                              shape={shape}
                              size={size}
                            />
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className="w-px bg-night-200" /> {/* Divider */}

                    {/* Disabled States */}
                    <div className="flex gap-4 opacity-70">
                      {sizes.map((size) => (
                        <div key={`disabled-${size}`} className="flex flex-col gap-3">
                          {intents.map((intent) => (
                            <Checkbox 
                              key={`${intent}-${size}-disabled`} 
                              intent={intent} 
                              variant={variant} 
                              shape={shape}
                              size={size}
                              defaultChecked
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
          </div>
        ))}
      </div>
    );
  },
};

