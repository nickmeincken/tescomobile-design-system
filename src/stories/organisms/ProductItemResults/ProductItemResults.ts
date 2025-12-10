import { html } from 'lit';
import { ProductItem } from '../../molecules/ProductItem/ProductItem';

 export const ProductItemResults = () => html`
 <div class="grid grid-results">
  ${ProductItem()}
  ${ProductItem()}
  ${ProductItem()}
  ${ProductItem()}
  ${ProductItem()}
  ${ProductItem()}
  ${ProductItem()}
  ${ProductItem()}
 </div>`;
