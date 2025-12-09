import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { Carousel } from './Carousel';
import { CardStrip } from "../CardStrip/CardStrip";
import { Jumbotron } from "../../molecules/Jumbotron/Jumbotron";

const meta : Meta = {
  title: 'Design System/Organisms/Carousel',
  render: () => Carousel(),
  tags: ['autodocs', 'experimental'],
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

export const HeroCarousel: Story = {
  render: () => html`
    <div class="carousel">
      <ul>
        <li>
          ${Jumbotron({
            desktopImg: 'https://placehold.co/1280x430/WebP',
            mobileImg: 'https://placehold.co/366x529/WebP',
            title: 'Hero Title',
            subtitle: 'This is the hero description',
            contentX: 'left',
            contentY: 'top',
          })}
        </li>
        <li>
          ${Jumbotron({
            desktopImg: 'https://placehold.co/1280x430/WebP',
            mobileImg: 'https://placehold.co/366x529/WebP',
            title: 'Hero Title',
            subtitle: 'This is the hero description',
            contentX: 'center',
            contentY: 'top',
          })}
        </li>
        <li>
          ${Jumbotron({
            desktopImg: 'https://placehold.co/1280x430/WebP',
            mobileImg: 'https://placehold.co/366x529/WebP',
            title: 'Hero Title',
            subtitle: 'This is the hero description',
            contentX: 'right',
            contentY: 'top',
          })}
        </li>
      </ul>
    </div>
  `
};
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
