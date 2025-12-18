import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { html } from 'lit';

const meta : Meta = {
  title: 'Design System/Templates/Layout',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const AsideLeft: Story = {
  render: () => html`<div class="demo container aside aside-left"><aside>Aside</aside><section>Column</section></div>`,
};

export const AsideRight: Story = {
  render: () => html`<div class="demo container aside aside-right"><section>Column</section><aside>Aside</aside></div>`,
};

export const OneColumn: Story = {
  render: () => html`<div class="demo container one-col"><div>Column</div></div>`,
};

export const TwoColumn: Story = {
  render: () => html`<div class="demo container two-col"><div>Column</div><div>Column</div></div>`,
};

export const ThreeColumn: Story = {
  render: () => html`<div class="demo container three-col"><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const FourColumn: Story = {
  render: () => html`<div class="demo container four-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const FiveColumn: Story = {
  render: () => html`<div class="demo container five-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const SixColumn: Story = {
  render: () => html`<div class="demo container six-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const SevenColumn: Story = {
  render: () => html`<div class="demo container seven-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const EightColumn: Story = {
  render: () => html`<div class="demo container eight-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const NineColumn: Story = {
  render: () => html`<div class="demo container nine-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const TenColumn: Story = {
  render: () => html`<div class="demo container ten-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const ElevenColumn: Story = {
  render: () => html`<div class="demo container eleven-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};

export const TwelveColumn: Story = {
  render: () => html`<div class="demo container twelve-col"><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div><div>Column</div></div>`,
};
