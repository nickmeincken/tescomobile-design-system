import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { TileLinkList } from './TileLinkList';


const meta : Meta = {
  title: 'Design System/Organisms/Tile Link List',
  render: () => TileLinkList(),
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const TileLink: Story = {};
