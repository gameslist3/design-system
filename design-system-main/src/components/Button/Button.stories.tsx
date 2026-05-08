import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Mail, ArrowRight, Trash2 } from 'lucide-react';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive', 'outline'],
    },
    size: {
      control: 'select',
      options: ['button-sm', 'button-md', 'button-lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'button-md',
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button {...args} leftIcon={<Mail size={16} />}>
          Email Login
        </Button>
        <Button {...args} variant="secondary" rightIcon={<ArrowRight size={16} />}>
          Get Started
        </Button>
        <Button {...args} variant="destructive" leftIcon={<Trash2 size={16} />}>
          Delete Account
        </Button>
      </div>
    </div>
  ),
  args: {
    size: 'button-md',
  },
};

export const Loading: Story = {
  args: {
    children: 'Saving Changes',
    loading: true,
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};


export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="destructive">Destructive</Button>
      <Button {...args} variant="outline">Outline</Button>
    </div>
  ),
  args: {
    size: 'button-md',
  },
};
