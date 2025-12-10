import { html } from 'lit';
import { GlobalNav } from '../../organisms/header/global-nav';
import { SwiperCarousel } from '../../organisms/Swiper/Swiper';
import { Accordion } from '../../organisms/Accordion/Accordion';
import { TileLinkList } from '../../organisms/TileLinkList/TileLinkList';
import { GlobalFoot } from '../../organisms/footer/global-footer';
export interface PageProps {}

export const Page = () => html`
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
