import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { TileLinkItem } from './TileLinkItem';

const meta : Meta = {
  title: 'Design System/Molecules/Tile Link Item',
  render: () => TileLinkItem(),
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const TileLink: Story = {};
