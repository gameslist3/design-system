import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'lead', 'large', 'small', 'muted'],
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// TODO: update args once Figma values are in
export const Heading1: Story = {
  args: {
    children: 'Heading 1',
    variant: 'h1',
    as: 'h1',
  },
};

export const Paragraph: Story = {
  args: {
    children: 'This is a paragraph of text.',
    variant: 'p',
    as: 'p',
  },
};

export const Muted: Story = {
  args: {
    children: 'Muted text content',
    variant: 'muted',
    as: 'span',
  },
};
