import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// TODO: update args once Figma values are in
export const Default: Story = {
  args: {
    placeholder: 'Type something...',
    variant: 'default',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Invalid input',
    variant: 'error',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};
