import { html } from 'lit';
import { Carousel } from '../../organisms/Carousel/Carousel';
import { GlobalNav } from '../../organisms/header/global-nav';
import { GlobalFoot } from '../../organisms/footer/global-footer';
import { CardStrip } from '../../organisms/CardStrip/CardStrip';
import { Accordion } from '../../organisms/Accordion/Accordion';
import { TileLinkList } from '../../organisms/TileLinkList/TileLinkList';

export interface PageProps {}

export const Page = () => html`
  ${GlobalNav()}
  <main>
    ${Carousel()}
    ${TileLinkList()}
    ${CardStrip()}
    ${Accordion({
      cols: false
    })}
  </main>
  ${GlobalFoot()}
`;
