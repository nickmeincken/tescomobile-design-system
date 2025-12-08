import { html } from "lit";

import { Jumbotron } from "../../molecules/Jumbotron/Jumbotron";

export const Carousel = () => html`
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
`;

export const CardCarousel = () => html`
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
`;
