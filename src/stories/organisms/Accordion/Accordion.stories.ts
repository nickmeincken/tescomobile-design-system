import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';

const meta : Meta = {
  title: 'Design System/Organisms/Accordion',
  render: (args) => Accordion(args),
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: { type: 'boolean' }
    },
  }
} satisfies Meta<AccordionProps>;

export default meta;
type Story = StoryObj<AccordionProps>;

export const DefaultAccordion: Story = {
  args: {
    cols: false,
  }
};

export const TwoColAccordion: Story = {
  args: {
    cols: true,
  }
};
