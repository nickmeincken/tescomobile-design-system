import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { AccordionProps } from './AccordionItem';
import { AccordionItem } from './AccordionItem';

const meta : Meta = {
  title: 'Design System/Molecules/Accordion Item',
  render: (args) => AccordionItem(args),
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: { type: 'text' }
    },
    content: {
      control: { type: 'text' }
    },
    name: {
      control: {type: 'select'},
      options: [ 'faq', ''],
    }
  }
} satisfies Meta<AccordionProps>;

export default meta;
type Story = StoryObj<AccordionProps>;

export const ItemAccordion: Story = {
  args: {
    heading: 'Card Heading',
    content: 'lorem ipsum dolor',
    name: 'faq'
  }
};

