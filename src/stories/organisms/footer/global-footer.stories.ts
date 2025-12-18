import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { GlobalFoot } from './global-footer';

const meta : Meta = {
  title: 'Design System/Organisms/Global Footer',
  render: () => GlobalFoot(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Footer: Story = {};
