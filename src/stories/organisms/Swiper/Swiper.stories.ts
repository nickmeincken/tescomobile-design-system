import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { SwiperCarousel } from './Swiper';

const meta : Meta = {
  title: 'Design System/Organisms/Swiper',
  render: () => SwiperCarousel(),
  tags: ['autodocs', 'experimental'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const HeroSwiper: Story = {};
