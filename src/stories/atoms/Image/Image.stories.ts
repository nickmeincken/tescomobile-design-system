import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { html } from 'lit';

const meta : Meta = {
  title: 'Design System/Atoms/Images',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const LogoImage: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Standard logo sizes range from 250 to 400 px in width and can be square (1:1) or rectangular (3:2). For example, for a 250 px width, a 150 px height is recommended. Since logos require transparency, you should use the PNG format.',
      },
    },
  },
  render: () => html`<a href="https://www.tescomobile.com/" class="logo" title="Tesco Mobile" aria-label="Store Logo">
      <svg><use xlink:href="/svg/sprite.svg#tescomobile-logo"></use></svg>
      <span>Tesco Mobile</span>
    </a>`,
};

export const BannerImage: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Website banners can have a different size depending on their purpose and placement. Common banner ad sizes are leaderboard (728 x 90 px), wide skyscraper (320 x 50px) and medium rectangle (300 x 250 px), but you’ll have to check with the ad platform.',
      },
    },
  },
  render: () => html`<img src="https://placehold.co/250x250/WebP" />`,
};

export const HeroImage: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The ideal size for a website hero image (full-screen) is 1280 x 720 pixels at an aspect ratio of 16:9. However, depending on the site’s design, it can be up to 1800 px in width. Also, maintaining a 72ppi will provide both clarity and a small file size for hero images.',
      },
    },
  },
  render: () => html`<img src="https://placehold.co/1280x720/WebP" />`,
};
