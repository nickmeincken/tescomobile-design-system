import { html } from 'lit';

export interface LabelProps {
  title?: string;
  classType?: 'new' | 'offer';
}

export const Label = ({ title, classType }:LabelProps) => {
  return html`<div class="label ${classType || 'offer'}">
    <div class="text">${title || 'Offer' }</div>
  </div>`
};
