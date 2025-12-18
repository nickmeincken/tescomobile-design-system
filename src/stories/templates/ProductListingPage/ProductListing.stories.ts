import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { ProductListing } from './ProductListing';

const meta : Meta = {
  title: 'Design System/Templates/Product Listing Page',
  render: () => ProductListing()
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ProductListingPage: Story = {};
