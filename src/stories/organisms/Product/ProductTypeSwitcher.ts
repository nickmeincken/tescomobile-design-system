import { html } from "lit";

export const ProductTypeSwitcher = () => html`
<div class="product-type-switcher">
  <div class="product-options-wrapper">
    <div class="swatch-attribute">
      <span class="swatch-attribute-label">Choose how you'd like to pay</span>
      <div class="swatch-attribute-options" data-bind="scope: 'contract_type_switcher'">
        <div class="swatch-option-item pay-monthly selected" data-name="paym" data-bind="click: function() {switchType('paym')}, css: {'selected' : contractType() === 'paym'}">
          <span>Pay monthly</span>
        </div>
        <div class="swatch-option-item pay-as-you-go" data-name="payg" data-bind="click: function() {switchType('payg')}, css: {'selected' : contractType() === 'payg'}">
          <span>Pay as you go</span>
        </div>
        <div class="swatch-option-item sim-free" data-name="simo" data-bind="click: function() {switchType('simfree')}, css: {'selected' : contractType() === 'simfree'}">
          <span>SIM-Free</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;
