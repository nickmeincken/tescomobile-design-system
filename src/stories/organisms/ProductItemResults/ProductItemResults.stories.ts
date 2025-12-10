import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { ProductItemResults } from './ProductItemResults';

const meta : Meta = {
  title: 'Design System/Organisms/Product Item Results',
  render: () => ProductItemResults(),
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ProductResults: Story = {};

