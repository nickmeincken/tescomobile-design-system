import { html } from 'lit';
import { SwatchItem } from './SwatchItem';

export const Label = () => {
  return html`<div class="product-item-swatches">
    ${SwatchItem({ swatchColour: '#eaeaed' })}
    ${SwatchItem({ swatchColour: '#3d8cc7' })}
    ${SwatchItem({ swatchColour: '#ffa600' })}
    <div class="icon icon-add"></div>
  </div>`
};
