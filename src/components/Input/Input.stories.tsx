import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { EyeOff } from 'lucide-react';
import React from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['default', 'primary', 'error', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'ringed'],
    },
    shape: {
      control: 'select',
      options: ['default', 'pill'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Continue with Google',
    intent: 'default',
    variant: 'solid',
  },
};

export const VariantsMatrix: Story = {
  render: () => {
    const intents = ['default', 'error', 'warning'] as const;
    const variants = ['solid', 'soft', 'ringed'] as const;

    return (
      <div className="flex gap-8">
        {variants.map((variant) => (
          <div key={variant} className="flex flex-col gap-4 w-64">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">{variant} Variant</h3>
            
            {intents.map((intent) => (
              <Input 
                key={intent} 
                intent={intent} 
                variant={variant} 
                placeholder="Continue with Google"
                leftIcon={<EyeOff size={18} />}
                rightIcon={<EyeOff size={18} />}
              />
            ))}

            {/* Error with label */}
            <Input 
              intent="error" 
              variant={variant} 
              placeholder="Continue with Google"
              leftIcon={<EyeOff size={18} />}
              rightIcon={<EyeOff size={18} />}
              floatingLabel="! incorrect"
            />

            {/* Warning with label */}
            <Input 
              intent="warning" 
              variant={variant} 
              placeholder="Continue with Google"
              leftIcon={<EyeOff size={18} />}
              rightIcon={<EyeOff size={18} />}
              floatingLabel="! incorrect"
            />

            {/* Disabled state */}
            <Input 
              intent="default" 
              variant={variant} 
              placeholder="Continue with Google"
              leftIcon={<EyeOff size={18} />}
              rightIcon={<EyeOff size={18} />}
              disabled
            />

            {/* Pill shape */}
            <Input 
              intent="default" 
              variant={variant} 
              shape="pill"
              placeholder="Continue with Google"
              leftIcon={<EyeOff size={18} />}
              rightIcon={<EyeOff size={18} />}
            />
          </div>
        ))}
      </div>
    );
  },
};

export const WithLabelAndGroups: Story = {
  render: () => (
    <div className="flex flex-col gap-10 max-w-2xl w-full p-6">
      {/* Block 1: Standard full-width input with label */}
      <Input
        label="Label"
        labelIcon={<EyeOff size={16} />}
        placeholder="Continue with Google"
        leftIcon={<EyeOff size={18} />}
        rightIcon={<EyeOff size={18} />}
      />

      {/* Block 2: A row of three inputs */}
      <div>
        <label className="text-sm font-medium text-night-700 flex items-center gap-2 mb-1.5">
          Label <span className="text-night-400"><EyeOff size={16} /></span>
        </label>
        <div className="flex gap-4">
          <Input
            placeholder="1"
            className="w-12 text-center"
            wrapperClassName="w-24"
            leftIcon={<EyeOff size={18} />}
            rightIcon={<EyeOff size={18} />}
          />
          <Input
            placeholder="ab"
            className="text-center"
            leftIcon={<EyeOff size={18} />}
            rightIcon={<EyeOff size={18} />}
          />
          <Input
            placeholder="1"
            className="w-12 text-center"
            wrapperClassName="w-24"
            leftIcon={<EyeOff size={18} />}
            rightIcon={<EyeOff size={18} />}
          />
        </div>
      </div>

      {/* Block 3: Phone number with Verify button */}
      <div className="flex gap-4 items-end">
        <Input
          label="Label"
          labelIcon={<EyeOff size={16} />}
          placeholder="+91"
          wrapperClassName="w-32 shrink-0"
          leftIcon={<EyeOff size={18} />}
        />
        <Input
          placeholder="Enter number"
          rightElement={
            <button className="h-full px-4 bg-primary-50 text-primary-500 text-sm font-semibold hover:bg-primary-100 transition-colors rounded-r-md border-l border-primary-100">
              Verify
            </button>
          }
        />
      </div>
    </div>
  ),
};
