import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { HomePage } from './HomePage';

const meta : Meta = {
  title: 'Design System/Templates/HomePage',
  render: () => HomePage(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Homepage: Story = {};
