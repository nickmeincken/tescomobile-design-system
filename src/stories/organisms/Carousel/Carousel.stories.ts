import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { Carousel } from './Carousel';
import { CardStrip } from "../CardStrip/CardStrip";

const meta : Meta = {
  title: 'Design System/Organisms/Carousel',
  render: () => Carousel(),
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is just a pure CSS carousel experiment, it will be replaced by the full Swiper Element carousel.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const HeroCarousel: Story = {};
export const CardCarousel: Story = {
  render: () => html`
    <div class="carousel">
      <ul>
        <li>
          ${CardStrip()}
        </li>
        <li>
          ${CardStrip()}
        </li>
        <li>
          ${CardStrip()}
        </li>
      </ul>
    </div>
  `
};
