import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { TypeProps } from './Typography';
import {
  Head1,
  Head2,
  Head3,
  Head4,
  Head5,
  Head6,
  Display1,
  Display2,
  Display3,
  Para
} from './Typography';
const meta = {
  title: 'Design System/Atoms/Content Typography',
  tags: ['autodocs'],
  argTypes: {
    heading: { type: 'string'},
    display: {
      control: { type: 'select' },
      options: ['display-1', 'display-2', 'display-3']
    },
  },
} satisfies Meta<TypeProps>;

export default meta;
type Story = StoryObj<TypeProps>;

export const DisplayOne: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Display class names can be applied to any block level element from h1-h6 or even paragraph tags or span. We should limit the use only to heading areas where we want the content to stand out.',
      },
    },
  },
  render: (args) => Display1(args),
  args: {
    display: 'display-1',
    heading: 'Display One'
  }
};

export const DisplayTwo: Story = {
  render: (args) => Display2(args),
  args: {
    display: 'display-2',
    heading: 'Display Two'
  }
};

export const DisplayThree: Story = {
  render: (args) => Display3(args),
  args: {
    display: 'display-3',
    heading: 'Display Three'
  }
};

export const Heading1: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Standard block level elements. the .h* class styling can be applied to',
      },
    },
  },
  render: (args) => Head1(args),
  args: {
    heading: 'heading one'
  }
};

export const Heading2: Story = {
  render: (args) => Head2(args),
  args: {
    heading: 'heading Two'
  }
};

export const Heading3: Story = {
  render: (args) => Head3(args),
  args: {
    heading: 'heading Three'
  }
};

export const Heading4: Story = {
  render: (args) => Head4(args),
  args: {
    heading: 'heading Four'
  }
};

export const Heading5: Story = {
  render: (args) => Head5(args),
  args: {
    heading: 'heading Five'
  }
};

export const Heading6: Story = {
  render: (args) => Head6(args),
  args: {
    heading: 'heading Six'
  }
};

export const Paragraph: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Below is an example of basic paragraph formatting.',
      },
    },
  },
  render: (args) => Para(args),
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
};

export const SmallText: Story = {
  render: (args) => Para(args),
  args: {
    style: 'font-sm',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
};

export const MediumText: Story = {
  render: (args) => Para(args),
  args: {
    style: 'font-md',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
};

export const LargeText: Story = {
  render: (args) => Para(args),
  args: {
    style: 'font-lg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
};

export const ExtraLargeText: Story = {
  render: (args) => Para(args),
  args: {
    style: 'font-xl',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
};

export const ExtraExtraLargeText: Story = {
  render: (args) => Para(args),
  args: {
    style: 'font-xxl',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
};

export const StrongTag: Story = {
  render: (args) => Para(args),
  args: {
    content: '<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong>'
  }
};

export const SmallTag: Story = {
  render: (args) => Para(args),
  args: {
    content: '<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>'
  }
};

export const SupTag: Story = {
  render: (args) => Para(args),
  args: {
    content: 'Lorem ipsum<sup>1</sup> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
};

export const SubTag: Story = {
  render: (args) => Para(args),
  args: {
    content: 'Lorem ipsum<sub>1</sub> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
};

export const Underline: Story = {
  render: (args) => Para(args),
  args: {
    content: '<u>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</u>'
  }
};
