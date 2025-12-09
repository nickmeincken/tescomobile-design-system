import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { Breadcrumb } from './Breadcrumb';

const meta : Meta = {
  title: 'Design System/Molecules/Breadcrumb',
  render: () => Breadcrumb(),
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const DefaultBreadcrumb: Story = {};
