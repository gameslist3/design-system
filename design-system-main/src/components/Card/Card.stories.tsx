import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// TODO: update args once Figma values are in
export const Default: Story = {
  args: {
    children: <div className="p-6">Card Content</div>,
    variant: 'default',
  },
};

export const Elevated: Story = {
  args: {
    children: <div className="p-6">Elevated Card</div>,
    variant: 'elevated',
  },
};
