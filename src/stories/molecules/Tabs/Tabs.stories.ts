import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { Tabs } from './Tabs';

const meta : Meta = {
  title: 'Design System/Molecules/Tabs',
  render: () => Tabs(),
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const DefaultTabs: Story = {};
