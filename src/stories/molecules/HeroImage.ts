import { html } from 'lit';

export const HeroImage = () => html`
  <header class="hero-image">
    <img src="https://placehold.co/1280x430/WebP" />
    <div class="content">
      <h2>Hero Title</h2>
      <p>This is the hero description</p>
    </div>
  </header>
`;
