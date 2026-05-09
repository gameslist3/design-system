import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Mail, CircleArrowRight, Trash2, CircleArrowLeft } from 'lucide-react';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'neutral'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'ghost', 'ringed'],
    },
    size: {
      control: 'select',
      options: ['button-sm', 'button-md', 'button-lg', 'icon'],
    },
    shape: {
      control: 'select',
      options: ['default', 'pill'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Sign In',
    intent: 'primary',
    variant: 'solid',
    size: 'button-md',
  },
};

export const VariantsMatrix: Story = {
  render: () => {
    const intents = ['primary', 'success', 'danger', 'neutral'] as const;
    const variants = ['solid', 'outline', 'soft', 'ghost', 'ringed'] as const;

    return (
      <div className="flex flex-col gap-8">
        {variants.map((variant) => (
          <div key={variant} className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">{variant}</h3>
            <div className="flex gap-4">
              {intents.map((intent) => (
                <Button key={intent} intent={intent} variant={variant}>
                  {intent}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button intent="primary" variant="solid" shape="default">
        Default Shape
      </Button>
      <Button intent="primary" variant="solid" shape="pill">
        Pill Shape
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button {...args} leftIcon={<CircleArrowLeft size={16} />}>
          Sign In
        </Button>
        <Button {...args} intent="success" variant="outline" rightIcon={<CircleArrowRight size={16} />}>
          Next Step
        </Button>
        <Button {...args} intent="danger" variant="soft" leftIcon={<Trash2 size={16} />} rightIcon={<CircleArrowRight size={16} />}>
          Delete & Continue
        </Button>
        <Button {...args} intent="neutral" variant="ghost" size="icon" leftIcon={<Mail size={20} />} />
      </div>
    </div>
  ),
  args: {
    size: 'button-md',
    intent: 'primary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Saving Changes',
    loading: true,
    intent: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    intent: 'primary',
  },
};
