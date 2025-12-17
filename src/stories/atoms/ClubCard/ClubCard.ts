import { html } from 'lit';

export interface ClubCardProps {
  title?: string;
}

export const ClubCardStripe = ({ title }:ClubCardProps) => {
  return html`<div class="clubcard-stripe">
    <div class="clubcard-stripe__logo">
      Clubcard Price
    </div>
    <div class="clubcard-stripe__info">
      ${title || 'Clubcard Prices available on selected deals'}
    </div>
  </div>`
};
