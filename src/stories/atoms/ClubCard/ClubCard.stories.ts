import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { ClubCardProps } from './ClubCard';
import { ClubCardStripe } from './ClubCard';

const meta = {
  title: 'Design System/Atoms/Club Card Strip',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: (args) => ClubCardStripe(args),
    argTypes: {
      title: {
        control: { type: 'text' }
      },
    },
} satisfies Meta<ClubCardProps>;

export default meta;
type Story = StoryObj<ClubCardProps>;

export const ClubCardTitle: Story = {
  args: {
    title: 'Clubcard Prices available on selected deals',
  }
};

export const ClubCardPrice: Story = {
  args: {
    title: '£32.99 a month',
  }
};
