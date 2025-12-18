import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { HomePage } from '../templates/Homepage/HomePage';

const meta : Meta = {
  title: 'Design System/Pages/Home',
  render: () => HomePage(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Home: Story = {};
