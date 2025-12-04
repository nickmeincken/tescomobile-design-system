import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { HeroProps } from './HeroImage';
import { HeroImage } from './HeroImage';

const meta : Meta = {
  title: 'Design System/Molecules/Hero Image',
  render: (args) => HeroImage(args),
  tags: ['autodocs'],
  argTypes: {
    contentX: {
      control: { type: 'select' },
      options: [ 'left', 'center', 'right' ],
    },
    contentY: {
      control: { type: 'select' },
      options: [ 'top', 'middle', 'bottom' ],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Hero is for the heading of the page, this is to draw in your customers',
      },
    },
  },
} satisfies Meta<HeroProps>;

export default meta;
type Story = StoryObj<HeroProps>;

export const HeroTopLeft: Story = {
  args: {
    contentX: 'left',
    contentY: 'top',
  }
};

export const HeroTopCenter: Story = {
  args: {
    contentX: 'center',
    contentY: 'top',
  }
};

export const HeroTopRight: Story = {
  args: {
    contentX: 'right',
    contentY: 'top',
  }
};

export const HeroCenterLeft: Story = {
  args: {
    contentX: 'left',
    contentY: 'middle',
  }
};

export const HeroCenterMiddle: Story = {
  args: {
    contentX: 'center',
    contentY: 'middle',
  }
};

export const HeroCenterRight: Story = {
  args: {
    contentX: 'right',
    contentY: 'middle',
  }
};

export const HeroBottomLeft: Story = {
  args: {
    contentX: 'left',
    contentY: 'bottom',
  }
};


export const HeroBottomCenter: Story = {
  args: {
    contentX: 'center',
    contentY: 'bottom',
  }
};

export const HeroBottomRight: Story = {
  args: {
    contentX: 'right',
    contentY: 'bottom',
  }
};
