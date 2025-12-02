import { html } from 'lit';
import { HeroImage } from '../../molecules/HeroImage';
import { GlobalNav } from '../../molecules/header/global-nav';
import { GlobalFooter } from '../../molecules/footer/global-footer';

export interface PageProps {}

export const Page = () => html`
  ${GlobalNav()}
  <main>
    ${HeroImage()}
    <article>
    </article>
  </main>
  ${GlobalFooter()}
`;
