import { html } from 'lit';

export interface TextWithIconProps {
  icon?: 'apple' | 'offers';
  text?: string;
}

export const TextWithIcon = ({
  icon,
  text
}:TextWithIconProps) => {
  return html`<div class="promo-item">
    <svg class="icon"><use xlink:href="./svg/sprite.svg#${icon || 'apple'}"></use></svg>
    <span class="text">${text || 'Get 3 months of Apple Fitness+ free when you buy any new Apple iPhone'}</span>
  </div>`
};
