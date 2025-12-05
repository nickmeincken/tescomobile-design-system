import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { ChatNow } from './ChatNow';

const meta : Meta = {
  title: 'Design System/Molecules/Chat Now',
  render: () => ChatNow(),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ChatNowOverlay: Story = {};
