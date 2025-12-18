import { html } from 'lit';
import { GlobalNav } from '../../organisms/header/global-nav';
import { SwiperCarousel } from '../../organisms/Carousel/Carousel';
import { Accordion } from '../../organisms/Accordion/Accordion';
import { TileLinkList } from '../../organisms/TileLinkList/TileLinkList';
import { GlobalFoot } from '../../organisms/footer/global-footer';

export const HomePage = () => html`
  ${GlobalNav()}
  <main>
    ${SwiperCarousel()}
    ${TileLinkList()}
    ${Accordion({
      cols: false
    })}
  </main>
  ${GlobalFoot()}
`;
