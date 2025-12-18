import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { SwiperCarousel } from './Carousel';
import { Card } from '../../molecules/Card/Card';

const meta : Meta = {
  title: 'Design System/Organisms/Carousel',
  render: () => SwiperCarousel(),
  tags: ['autodocs', 'experimental'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const HeroCarousel: Story = {};
export const ContentCarousel: Story = {
  render: () => html`
    <div class="cmp cmp-carousel">
      <swiper-container class="content-carousel" autoplay="true" init="false" loop="true">
        <swiper-slide>
          ${Card({
            heading: 'Card Heading',
            content: 'lorem ipsum dolor',
            cardimg: 'https://placehold.co/400x300/WebP',
          })}
        </swiper-slide>
        <swiper-slide>
          ${Card({
            heading: 'Card Heading',
            content: 'lorem ipsum dolor',
            cardimg: 'https://placehold.co/400x300/WebP',
          })}
        </swiper-slide>
        <swiper-slide>
          ${Card({
            heading: 'Card Heading',
            content: 'lorem ipsum dolor',
            cardimg: 'https://placehold.co/400x300/WebP',
          })}
        </swiper-slide>
        <swiper-slide>
          ${Card({
            heading: 'Card Heading',
            content: 'lorem ipsum dolor',
            cardimg: 'https://placehold.co/400x300/WebP',
          })}
        </swiper-slide>
        <swiper-slide>
          ${Card({
            heading: 'Card Heading',
            content: 'lorem ipsum dolor',
            cardimg: 'https://placehold.co/400x300/WebP',
          })}
        </swiper-slide>
        <swiper-slide>
          ${Card({
            heading: 'Card Heading',
            content: 'lorem ipsum dolor',
            cardimg: 'https://placehold.co/400x300/WebP',
          })}
        </swiper-slide>
        <swiper-slide>
          ${Card({
            heading: 'Card Heading',
            content: 'lorem ipsum dolor',
            cardimg: 'https://placehold.co/400x300/WebP',
          })}
        </swiper-slide>
      </swiper-container>
      <div class="swiper-controls">
        <button class="button-control" aria-pressed="false">
          <span class="screen-reader-text">Pause</span>
          <span class="playpause pause">
            <svg class="pause-btn">
              <use xlink:href="./svg/sprite.svg#pause"></use>
            </svg>
            <svg class="play-btn">
              <use xlink:href="./svg/sprite.svg#play"></use>
            </svg>
          </span>
        </button>
        <span class="divider">|</span>
        <div class="sw-btn-prev">
          <svg>
            <use xlink:href="./svg/sprite.svg#back"></use>
          </svg>
        </div>
        <div class="swiper-pagination"></div>
        <div class="sw-btn-next">
          <svg>
            <use xlink:href="./svg/sprite.svg#forward"></use>
          </svg>
        </div>
      </div>
    </div>
    <script>
      const swiperEl = document.querySelector('.content-carousel');
      const swiperParams = {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        breakpoints: {
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        },
        a11y: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.sw-btn-next',
          prevEl: '.sw-btn-prev',
        },
        autoplay: {
          pauseOnMouseEnter: true,
        },
        on: {
          afterInit: function (contentSlider) {
            const controlBtn = document.querySelector(
              '.button-control'
            );
            controlBtn.addEventListener('click', function () {
              if (this.getAttribute('aria-pressed') === 'false') {
                contentSlider.autoplay.stop();
                this.querySelector('.screen-reader-text').textContent = 'Play';
                this.querySelector('.playpause').classList.remove(
                  'pause'
                );
                this.querySelector('.playpause').classList.add(
                  'play'
                );
                this.setAttribute('aria-pressed', 'true');
              } else {
                contentSlider.autoplay.start();
                this.querySelector('.screen-reader-text').textContent = 'Pause';
                this.querySelector('.playpause').classList.remove(
                  'play'
                );
                this.querySelector('.playpause').classList.add(
                  'pause'
                );
                this.setAttribute('aria-pressed', 'false');
              }
            });
          },
        },
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    </script>
  `
};
