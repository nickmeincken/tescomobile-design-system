import { html } from 'lit';

export interface HeroProps {
  contentY?: 'top' | 'middle' | 'bottom';
  contentX?: 'left' | 'center' | 'right';
}

export const HeroImage = ({contentX, contentY}: HeroProps) => html`
  <header class=${['hero-image', `hero-${contentX || 'left'}`, `hero-${contentY || 'bottom'}`].join(' ')}>
    <img src="https://placehold.co/1280x430/WebP" />
    <div class="content">
      <h2>Hero Title</h2>
      <p>This is the hero description</p>
    </div>
  </header>
`;
