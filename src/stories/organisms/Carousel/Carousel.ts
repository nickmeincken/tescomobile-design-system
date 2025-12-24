import { html } from "lit";
import { register } from 'swiper/element/bundle';
register();
import 'swiper/swiper-bundle.css';
import { Jumbotron } from "../../molecules/Jumbotron/Jumbotron";

export const SwiperCarousel = () => html`
<div class="cmp cmp-hero-carousel">
  <swiper-container class="hero-carousel" AutoplayOptions="true" init="false" loop="true">
    <swiper-slide>
      ${Jumbotron({
      desktopImg: 'https://placehold.co/1280x430/WebP',
      mobileImg: 'https://placehold.co/366x529/WebP',
      title: 'Hero Title',
      subtitle: 'This is the hero description',
      contentX: 'left',
      contentY: 'top',
    })}
    </swiper-slide>
    <swiper-slide>
      ${Jumbotron({
      desktopImg: 'https://placehold.co/1280x430/WebP',
      mobileImg: 'https://placehold.co/366x529/WebP',
      title: 'Hero Title',
      subtitle: 'This is the hero description',
      contentX: 'left',
      contentY: 'top',
    })}
    </swiper-slide>
    <swiper-slide>
      ${Jumbotron({
      desktopImg: 'https://placehold.co/1280x430/WebP',
      mobileImg: 'https://placehold.co/366x529/WebP',
      title: 'Hero Title',
      subtitle: 'This is the hero description',
      contentX: 'left',
      contentY: 'top',
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
  const swiperEl = document.querySelector('.hero-carousel');
  const swiperParams = {
    slidesPerView: 1,
    slidesPerGroup: 1,
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
`;
