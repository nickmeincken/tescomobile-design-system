import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { GlobalNav } from './global-nav';

const meta : Meta = {
  title: 'Design System/Organisms/Global Header',
  render: () => GlobalNav(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Header: Story = {};
