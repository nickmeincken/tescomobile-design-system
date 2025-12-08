import { html } from 'lit';

export const TileLinkItem = () => html`
<div class="tilelink_item">
  <a href="#">
    <svg class="icon"><use xlink:href="./svg/sprite.svg#account"></use></svg>
    <span>Label</span>
  </a>
</div>
`;
