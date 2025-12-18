import { html } from 'lit';
import { ProductInfo } from '../../organisms/Product/ProductInfo';
import { ProductAccordion } from '../../organisms/Product/ProductAccordion';
import { ProductActionBar } from '../../organisms/Product/ProductActionBar';
import { ProductGallery } from '../../organisms/Product/ProductGallery';

export const ProductListing = () => html`
  ${ProductActionBar()}
  ${ProductInfo()}
  ${ProductGallery()}
  ${ProductAccordion()}
`;
