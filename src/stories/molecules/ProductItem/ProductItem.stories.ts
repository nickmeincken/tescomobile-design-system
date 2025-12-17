import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { ProductItem } from './ProductItem';
import type { ProductItemProps } from './ProductItem';

const meta : Meta = {
  title: 'Design System/Molecules/Product Item',
  render: (args) => ProductItem(args),
  tags: ['autodocs'],
  argTypes: {
    brand: {
      control: { type: 'text' }
    },
    product: {
      control: { type: 'text' }
    },
    productImg: {
      control: { type: 'text' }
    },
    productURL: {
      control: { type: 'text' }
    },
    price: {
      control: { type: 'text' }
    },
    contractLength: {
      control: { type: 'text' }
    },
  }
} satisfies Meta<ProductItemProps>;

export default meta;
type Story = StoryObj<ProductItemProps>;

export const DefaultProductItem: Story = {
  args: {
    brand: 'Apple',
    product: 'iPhone 17 Pro Max',
    productImg: 'https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_1__gben_3.png',
    productURL: '/shop/apple/iphone-17-pro-max',
    price: '48.49',
    contractLength: '36-month contract',
  }
};
