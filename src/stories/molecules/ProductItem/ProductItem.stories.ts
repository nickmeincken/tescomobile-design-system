import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { ProductItem } from './ProductItem';

const meta : Meta = {
  title: 'Design System/Molecules/Product Item',
  render: () => ProductItem(),
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const DefaultProductItem: Story = {};
