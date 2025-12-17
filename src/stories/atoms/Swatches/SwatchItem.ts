import { html } from 'lit';

export interface SwatchItemProps {
  swatchColour?: string;
}

export const SwatchItem = ({ swatchColour }:SwatchItemProps) => {
  return html`<div class="swatch" style="background-color: ${swatchColour || '#eaeaed'}"></div>`
};
