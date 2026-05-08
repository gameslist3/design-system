import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// TODO: update args once Figma values are in
export const Default: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    alt: 'Avatar',
    size: 'md',
  },
};

export const Fallback: Story = {
  args: {
    fallback: 'JD',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    size: 'lg',
  },
};
