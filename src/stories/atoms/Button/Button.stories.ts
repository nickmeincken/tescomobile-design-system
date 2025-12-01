import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { fn } from 'storybook/test';

import type { ButtonProps } from './Button';
import { Button } from './Button';

const meta = {
  title: 'Design System/Atoms/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    hierachy: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    icon: false,
    hierachy: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    icon: false,
    hierachy: 'secondary',
    label: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    icon: false,
    hierachy: 'tertiary',
    label: 'Button',
  },
};

export const Icon: Story = {
  args: {
    icon: true,
    hierachy: 'tertiary',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    icon: false,
    size: 'lg',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    icon: false,
    size: 'sm',
    label: 'Button',
  },
};
