import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';

const meta : Meta = {
  title: 'Design System/Molecules/Accordion',
  render: (args) => Accordion(args),
  tags: ['autodocs'],
    argTypes: {
    heading: {
      control: { type: 'text' }
    },
    content: {
      control: { type: 'text' }
    },
    cols: {
      control: { type: 'boolean' }
    },
    name: {
      control: {type: 'select'},
      options: [ 'faq', ''],
    }
  }
} satisfies Meta<AccordionProps>;

export default meta;
type Story = StoryObj<AccordionProps>;

export const DefaultAccordion: Story = {
  args: {
    cols: false,
    heading: 'Card Heading',
    content: 'lorem ipsum dolor',
    name: 'faq'
  }
};

export const TwoColAccordion: Story = {
  args: {
    heading: 'Card Heading',
    content: 'lorem ipsum dolor',
    cols: true,
    name: ''
  }
};
