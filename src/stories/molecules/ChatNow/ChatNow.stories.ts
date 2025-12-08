import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { ChatNow } from './ChatNow';

const meta : Meta = {
  title: 'Design System/Molecules/Chat Now',
  render: () => ChatNow(),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'This is a model for directing users to the chat now functionality. This is just a simple example of how some things can be done with pure CSS and HTML.',
      },
    },
  }
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ChatNowOverlay: Story = {};
