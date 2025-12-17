import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { SwatchItemProps } from './SwatchItem';
import { SwatchItem } from './SwatchItem';

const meta = {
  title: 'Design System/Atoms/Swatch Item',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: (args) => SwatchItem(args),
  argTypes: {
    swatchColour: {
      control: { type: 'text' }
    },
  },
} satisfies Meta<SwatchItemProps>;

export default meta;
type Story = StoryObj<SwatchItemProps>;

export const SwatchExample1: Story = {
  args: {
    swatchColour: '#eaeaed'
  },
};

export const SwatchExample2: Story = {
  args: {
    swatchColour: '#3d8cc7'
  },
};

export const SwatchExample3: Story = {
  args: {
    swatchColour: '#ffa600'
  },
};
