import { html } from 'lit';

export const ProductReview = () => html`
<div id="reevoo-reviews">
  <span class="reevoo-col">
    <reevoo-badge type="product" product-id="IP7X2BL" click-action="no_action" name="b_product_stars_rect_6" style="position: relative">
      <iframe scrolling="no" style="border: none; height: 38px; display: inline; width: 120px;"></iframe>
      <div class="resize-triggers">
        <div class="expand-trigger">
          <div style="width: 121px; height: 43px"></div>
        </div>
        <div class="contract-trigger"></div>
      </div>
    </reevoo-badge>
    <span class="read-review-link reevoo-event-trigger-overlay" data-reevoo-tab="product_view_reviews">
      Read reviews
    </span>
  </span>
</div>
`;
