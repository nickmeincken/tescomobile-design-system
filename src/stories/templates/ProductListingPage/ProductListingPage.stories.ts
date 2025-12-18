import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { ProductListingPage } from './ProductListingPage';

const meta : Meta = {
  title: 'Design System/Templates/Product Listing Page',
  render: () => ProductListingPage()
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const PLP: Story = {};
