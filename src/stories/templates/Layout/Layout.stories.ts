import type { Meta, StoryObj } from '@storybook/web-components-vite';

import type { PageProps } from './Layout';
import { Page } from './Layout';

import { html } from 'lit';

const meta : Meta = {
  title: 'Design System/Templates/Layout',
  render: () => Page(),
  tags: ['autodocs'],
} satisfies Meta<PageProps>;

export default meta;
type Story = StoryObj<PageProps>;

export const HomePage: Story = {};

export const AsideLeft: Story = {
  render: () => html`<div class="container aside aside-left"><aside>Aside</aside><section>Column</section></div>`,
};

export const AsideRight: Story = {
  render: () => html`<div class="container aside aside-right"><section>Column</section><aside>Aside</aside></div>`,
};

export const OneColumn: Story = {
  render: () => html`<div class="container one-col"><div>Column</div></div>`,
};

export const TwoColumn: Story = {
  render: () => html`<div class="container two-col"><div>Column</div><div>Column</div></div>`,
};

export const ThreeColumn: Story = {
  render: () => html`<div class="container three-col"><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const FourColumn: Story = {
  render: () => html`<div class="container four-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const FiveColumn: Story = {
  render: () => html`<div class="container five-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const SixColumn: Story = {
  render: () => html`<div class="container six-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const SevenColumn: Story = {
  render: () => html`<div class="container seven-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const EightColumn: Story = {
  render: () => html`<div class="container eight-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const NineColumn: Story = {
  render: () => html`<div class="container nine-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const TenColumn: Story = {
  render: () => html`<div class="container ten-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const ElevenColumn: Story = {
  render: () => html`<div class="container eleven-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const TwelveColumn: Story = {
  render: () => html`<div class="container twelve-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};
