import { html } from "lit";
import { Button } from "../../atoms/Button/Button";

export const ProductActionBar = () => html`
<div class="action-bar">
  <div class="action-bar_content">
    <div class="action-bar__pdp-bundle-data" data-bind="afterRender: paygActionBarData">
      <div class="monthly-total">
        <span data-bind="i18n: 'Monthly total'" class="label">Monthly total</span>
        <span data-bind="text: getFormattedPrice(monthlyTotal)" class="price">£55.99</span>
      </div>
      <div class="monthly-total-clubcard clubcard-price-wrapper">
        <span data-bind="i18n: 'Clubcard Price'" class="clubcard-price-label">Clubcard Price</span>
        <span data-bind="text: $parent.getFormattedPrice(clubCardPrice)" class="clubcard-price-value">£49.99</span>
      </div>
      ${Button({
        label: "Add to basket",
        hierachy: "primary",
        cartIcon: "basket",
        cart: true
      })}
    </div>

    <div class="payg-price-wrapper payg-add-to-cart-btn payg-price-update" style="display: none">
      <div class="custom-price">
        <span class="custom-price-container regular-price">
          <span class="price-label" data-bind="i18n: 'Pay as you go'">Pay as you go</span>
          <span class="price-wrapper">
            <span class="price"></span>
          </span>
        </span>
        <span class="custom-price-container old-price" style="display: none">
          <span class="price-label" data-bind="i18n: 'Was'">Was</span>
          <span class="price-wrapper">
            <span class="price"></span>
          </span>
        </span>
        <div class="action-button">
          <a class="action primary" data-bind="i18n: 'Buy now', afterRender: emulateAddToBasketPayAsYouGo" id="emulate-button-pay-as-you-go" target="_blank">Buy now</a>
        </div>
      </div>
    </div>

    <div class="sim-free-wrapper sim-free-add-to-cart-btn sim-price-update" style="display: none">
      <div class="custom-price">
        <span class="custom-price-container regular-price"
          ><span class="price-label" data-bind="i18n: 'SIM-Free'">SIM-Free</span>
          <span class="price-wrapper"><span class="price"></span> </span></span
        ><span class="custom-price-container old-price" style="display: none"
          ><span class="price-label" data-bind="i18n: 'Was'">Was</span>
          <span class="price-wrapper"><span class="price"></span></span
        ></span>
        <div class="action-button">
          <a
            class="action primary"
            id="emulate-button-sim-free"
            target="_blank"
            data-bind="afterRender: emulateAddToBasketSimFree"
            ><span data-bind="i18n: 'Add to basket'">Add to basket</span></a
          >
        </div>
      </div>
    </div>
  </div>
</div>
`;
