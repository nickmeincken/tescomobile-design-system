import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { LabelProps } from './Label';
import { Label } from './Label';

const meta = {
  title: 'Design System/Atoms/Label',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: (args) => Label(args),
  argTypes: {
    classType: {
      control: { type: 'select' },
      options: ['offer', 'new'],
    },
  },
} satisfies Meta<LabelProps>;

export default meta;
type Story = StoryObj<LabelProps>;

export const LabelOffer: Story = {
  args: {
    title: 'Offer',
    classType: 'offer'
  },
};

export const LabelNew: Story = {
  args: {
    title: 'New',
    classType: 'new'
  },
};
