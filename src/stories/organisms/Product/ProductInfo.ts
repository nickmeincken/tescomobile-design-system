import { html } from "lit";
import { ProductTypeSwitcher } from "./ProductTypeSwitcher";
import { ClubCardStripe } from "../../atoms/ClubCard/ClubCard";

export const ProductInfo = () => html`
  <div class="product-info-main">
    <div class="result-promotion-top-line">
      <div data-bind="scope: 'tm-product-labels'">
        <div class="tm-product-labels">
          <div data-bind="attr:{ class: 'label '+className }" class="label offer">
            <div class="text" data-bind="text: $data.text">Offer</div>
          </div>
        </div>
      </div>
    </div>
    <div class="product attribute manufacturer has-product-label">
      <div class="value">Apple</div>
    </div>
    <div class="page-title-wrapper product">
      <h1 class="page-title">
        <span class="base" data-ui-id="page-title-wrapper">Apple iPhone 17 Pro Max</span>
      </h1>
    </div>
    <div class="product-info-price">
      <div class="payg-price-wrapper payg-price-update" style="display: none">
        <div class="label-next-to-price"><span>Includes pay as you go SIM card</span></div>
      </div>
      <div class="sim-free-wrapper sim-price-update" style="display: none">
        <div class="label-next-to-price"><span>SIM card not included</span></div>
      </div>
      <div class="product-info-stock-sku">
        <div class="product attribute sku">
          <strong class="type">SKU</strong>
          <div class="value">IP7X2BL</div>
        </div>
      </div>
    </div>

    <div class="product attribute overview">
      <div
        class="value"
        data-readmore=""
        aria-expanded="false"
        id="undefined1"
        style="height: 50px; width: 610px; overflow: hidden; max-height: none;"
      >
        iPhone 17 Pro Max. The most powerful iPhone ever. Brilliant 6.9-inch display<sup>1</sup>, aluminium unibody design, A19 Pro chip, all 48MP rear cameras and best-ever battery life.
      </div>
      <a class="read-more" href="#" data-readmore-toggle="undefined1" aria-controls="undefined1"
        >Read more</a
      >
    </div>
    <div class="view-phone-details"><a href="#description">View full phone details</a></div>

    ${ClubCardStripe({
      title: 'Save £216 over your contract'
    })}
    ${ProductTypeSwitcher()}


    <div class="product-add-form">
      <form
        data-product-sku="D-IP17X-3"
        action="https://www.tescomobile.com/checkout/cart/add/uenc/aHR0cHM6Ly93d3cudGVzY29tb2JpbGUuY29tL3Nob3AvYXBwbGUvaXBob25lLTE3LXByby1tYXg~/product/198640/"
        method="post"
        id="product_addtocart_form"
        novalidate="novalidate"
      >
        <input type="hidden" name="product" value="198640" /><input
          type="hidden"
          name="selected_configurable_option"
          value=""
        /><input type="hidden" name="related_product" id="related-products-field" value="" /><input
          type="hidden"
          name="item"
          value="198640"
        /><input name="form_key" type="hidden" value="lXtru9GkjYJBuaYN" />
        <div class="bundle-options-wrapper">
          <div
            class="product-options-wrapper"
            id="product-options-wrapper"
            data-hasrequired="* Required Fields"
          >
            <div class="fieldset" tabindex="0">
              <fieldset class="fieldset fieldset-bundle-options">
                <div id="tm-deal-device-wrapper" data-bind="scope:'tm-deal-device'">
                  <!-- ko template: getTemplate() -->
                  <div class="field option" data-bind="afterRender: selectDeviceOptionsAfterRender">
                    <div class="fieldset" tabindex="0">
                      <br
                        class="swatch-opt"
                        data-role="swatch-options"
                      /><!-- ko foreach: { data: deviceSwatches, as: 'option' } -->
                      <div class="swatch-attribute">
                        <span
                          class="swatch-attribute-label"
                          data-bind="text: option.attribute_label"
                          >Colour</span
                        >
                        <div
                          aria-activedescendant=""
                          tabindex="0"
                          aria-invalid="false"
                          aria-required="true"
                          role="listbox"
                          class="swatch-attribute-options clearfix"
                        >
                          <!-- ko foreach: { data: option.swatches, as: 'swatch' } -->
                          <div
                            class="swatch-option deal-device enabled"
                            index="0"
                            aria-checked="false"
                            tabindex="0"
                            option-type="1"
                            role="option"
                            data-bind="click: function() { $parents[1].selectSwatch($data) },css: {'enabled': swatch.enabled(), 'disabled': !swatch.enabled(), 'selected': swatch.selected()}"
                          >
                            <!-- ko if: swatch.color -->
                            <span
                              data-bind="style: { background: swatch.color }"
                              class="swatch-color"
                              style="background: rgb(234, 234, 237);"
                            ></span
                            ><!-- /ko --><!-- ko ifnot: swatch.color --><!-- /ko -->
                            <span data-bind="text: swatch.label">Silver</span>
                          </div>
                          <div
                            class="swatch-option deal-device enabled"
                            index="0"
                            aria-checked="false"
                            tabindex="0"
                            option-type="1"
                            role="option"
                            data-bind="click: function() { $parents[1].selectSwatch($data) },css: {'enabled': swatch.enabled(), 'disabled': !swatch.enabled(), 'selected': swatch.selected()}"
                          >
                            <!-- ko if: swatch.color -->
                            <span
                              data-bind="style: { background: swatch.color }"
                              class="swatch-color"
                              style="background: rgb(255, 166, 0);"
                            ></span
                            ><!-- /ko --><!-- ko ifnot: swatch.color --><!-- /ko -->
                            <span data-bind="text: swatch.label">Cosmic Orange</span>
                          </div>
                          <div
                            class="swatch-option deal-device enabled selected"
                            index="0"
                            aria-checked="false"
                            tabindex="0"
                            option-type="1"
                            role="option"
                            data-bind="click: function() { $parents[1].selectSwatch($data) },css: {'enabled': swatch.enabled(), 'disabled': !swatch.enabled(), 'selected': swatch.selected()}"
                          >
                            <!-- ko if: swatch.color -->
                            <span
                              data-bind="style: { background: swatch.color }"
                              class="swatch-color"
                              style="background: rgb(61, 139, 199);"
                            ></span
                            ><!-- /ko --><!-- ko ifnot: swatch.color --><!-- /ko -->
                            <span data-bind="text: swatch.label">Deep Blue</span>
                          </div>
                          <!-- /ko -->
                        </div>
                      </div>
                      <div class="swatch-attribute">
                        <span
                          class="swatch-attribute-label"
                          data-bind="text: option.attribute_label"
                          >Storage</span
                        >
                        <div
                          aria-activedescendant=""
                          tabindex="0"
                          aria-invalid="false"
                          aria-required="true"
                          role="listbox"
                          class="swatch-attribute-options clearfix"
                        >
                          <!-- ko foreach: { data: option.swatches, as: 'swatch' } -->
                          <div
                            class="swatch-option deal-device enabled selected"
                            index="0"
                            aria-checked="false"
                            tabindex="0"
                            option-type="1"
                            role="option"
                            data-bind="click: function() { $parents[1].selectSwatch($data) },css: {'enabled': swatch.enabled(), 'disabled': !swatch.enabled(), 'selected': swatch.selected()}"
                          >
                            <!-- ko if: swatch.color --><!-- /ko --><!-- ko ifnot: swatch.color -->
                            <span class="swatch-no-color"></span
                            ><!-- /ko -->
                            <span data-bind="text: swatch.label">256GB</span>
                          </div>
                          <div
                            class="swatch-option deal-device enabled"
                            index="0"
                            aria-checked="false"
                            tabindex="0"
                            option-type="1"
                            role="option"
                            data-bind="click: function() { $parents[1].selectSwatch($data) },css: {'enabled': swatch.enabled(), 'disabled': !swatch.enabled(), 'selected': swatch.selected()}"
                          >
                            <!-- ko if: swatch.color --><!-- /ko --><!-- ko ifnot: swatch.color -->
                            <span class="swatch-no-color"></span
                            ><!-- /ko -->
                            <span data-bind="text: swatch.label">512GB</span>
                          </div>
                          <div
                            class="swatch-option deal-device enabled"
                            index="0"
                            aria-checked="false"
                            tabindex="0"
                            option-type="1"
                            role="option"
                            data-bind="click: function() { $parents[1].selectSwatch($data) },css: {'enabled': swatch.enabled(), 'disabled': !swatch.enabled(), 'selected': swatch.selected()}"
                          >
                            <!-- ko if: swatch.color --><!-- /ko --><!-- ko ifnot: swatch.color -->
                            <span class="swatch-no-color"></span
                            ><!-- /ko -->
                            <span data-bind="text: swatch.label">1TB</span>
                          </div>
                          <!-- /ko -->
                        </div>
                      </div>
                      <!-- /ko -->
                    </div>
                  </div>
                  <div class="stock-container in-stock" data-bind="css: stockClass">
                    <span class="stock-message" data-bind="html: stockAvailability">In stock</span>
                  </div>
                  <!-- /ko -->
                </div>
                <div id="tm-deal-device-stock-wrapper" data-bind="scope:'tm-deal-device-stock'">
                  <!-- ko template: getTemplate() -->
                  <div
                    class="store-stock-container"
                    data-bind="blockLoader: isLoading, afterRender: collapsibleLookup"
                  >
                    <!-- ko if: inStoreStockAvailable() --><!-- /ko -->
                    <div id="postcode-stock-lookup" data-collapsible="true" role="tablist">
                      <label
                        class="label-stock-lookup"
                        for="postcode_stock_lookup"
                        data-bind="text: lookupLabel"
                        role="tab"
                        aria-selected="false"
                        aria-expanded="false"
                        tabindex="0"
                        >Check local stock</label
                      >
                      <div
                        class="form-holder"
                        role="tabpanel"
                        aria-hidden="true"
                        style="display: none;"
                      >
                        <input
                          type="text"
                          data-bind="attr: { placeholder: placeHolderText }"
                          name="postcode_stock_lookup"
                          placeholder="Postcode"
                        />
                        <button class="action secondary" data-bind="click: storeLookup">
                          <span data-bind="text: buttonLabel">Search</span>
                        </button>
                        <div class="stock-legend">
                          <div data-bind="i18n: 'In stock'" class="stock-legend__item in-stock">
                            In stock
                          </div>
                          <div data-bind="i18n: 'Low stock'" class="stock-legend__item low-stock">
                            Low stock
                          </div>
                          <div
                            data-bind="i18n: 'Out of stock'"
                            class="stock-legend__item out-of-stock"
                          >
                            Out of stock
                          </div>
                        </div>
                        <div class="error-message" data-bind="text: errorMessage"></div>
                        <div class="stock-lookup-results">
                          <!-- ko foreach: { data: storeList, as: 'store' } --><!-- /ko -->
                          <div class="more-less" data-bind="click: showMore">
                            <span class="label" data-bind="text: moreText">Show more</span>
                            <span class="icon icon-arrow-down" data-bind="css: moreClass"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- ko if: isStockAlertEnabled --><!-- /ko -->
                  </div>
                  <!-- /ko -->
                </div>
                <div
                  id="tm-deal-device-sim-preference"
                  data-bind="scope:'tm-deal-device-sim-preference'"
                >
                  <!-- ko template: getTemplate() -->
                  <div
                    data-bind="class: 'sim-request-info', visible: visible"
                    class="sim-request-info"
                    style="display: none;"
                  >
                    <input name="sim_preference" type="hidden" data-bind="value: simPreference()" />
                    <div class="sub-items">
                      <!-- ko foreach: elems() -->
                      <!-- ko template: getTemplate() -->
                      <div class="subitem esim-info" data-bind="visible: visible">
                        <div class="esim-info__icon"></div>
                        <div class="esim-info__content">
                          <h4 class="esim-info__title" data-bind="text: title">eSIM</h4>
                          <p data-bind="text: message">This phone uses an eSIM.</p>
                          <div class="esim-info__link">
                            <a
                              href="#"
                              data-bind="i18n: 'Find out more', attr: { class: index + '-show-modal' }"
                              class="qr-esim-info-show-modal"
                              >Find out more</a
                            >
                          </div>
                        </div>
                      </div>
                      <!-- /ko -->
                      <!-- ko template: getTemplate() -->
                      <div
                        class="subitem esim-info"
                        data-bind="visible: visible"
                        style="display: none;"
                      >
                        <div class="esim-info__icon"></div>
                        <div class="esim-info__content">
                          <h4 class="esim-info__title" data-bind="text: title">eSIM</h4>
                          <p data-bind="text: message">
                            This phone uses an eSIM. Simply connect to WI-FI to activate it.
                          </p>
                          <div class="esim-info__link">
                            <a
                              href="#"
                              data-bind="i18n: 'Find out more', attr: { class: index + '-show-modal' }"
                              class="digital-download-esim-info-show-modal"
                              >Find out more</a
                            >
                          </div>
                        </div>
                      </div>
                      <!-- /ko --><!-- /ko -->
                    </div>
                  </div>
                  <!-- /ko -->
                </div>
                <div class="tm-option-wrapper option-type-device">
                  <div class="field option  required">
                    <label class="label" for="bundle-option-300247"
                      ><span>iPhone 17 Pro Max</span></label
                    >
                    <div class="control">
                      <select
                        id="bundle-option-300247"
                        name="bundle_option[300247]"
                        data-selector="bundle_option[300247]"
                        class="bundle-option-300247 product bundle option bundle-option-select change-container-classname"
                        data-validate="{required:true}"
                        aria-required="true"
                      >
                        <option value="" disabled="disabled">Choose a selection...</option>
                        <option value="340361" selected="selected">
                          iPhone 17 Pro Max 256GB Silver +£35.99
                        </option>
                        <option value="340370">
                          iPhone 17 Pro Max 256GB Cosmic Orange +£35.99
                        </option>
                        <option value="340376">iPhone 17 Pro Max 256GB Deep Blue +£35.99</option>
                        <option value="340364" disabled="disabled">
                          iPhone 17 Pro Max 512GB Silver +£41.99
                        </option>
                        <option value="340373" disabled="disabled">
                          iPhone 17 Pro Max 512GB Cosmic Orange +£41.99
                        </option>
                        <option value="340379" disabled="disabled">
                          iPhone 17 Pro Max 512GB Deep Blue +£41.99
                        </option>
                        <option value="340367" disabled="disabled">
                          iPhone 17 Pro Max 1TB Silver +£47.99
                        </option>
                        <option value="340382" disabled="disabled">
                          iPhone 17 Pro Max 1TB Deep Blue +£47.99
                        </option>
                      </select>
                      <div id="option-tier-prices-300247" class="option-tier-prices">
                        <div
                          data-role="selection-tier-prices"
                          data-selection-id="340361"
                          class="selection-tier-prices"
                          style="display: none;"
                        ></div>
                        <div
                          data-role="selection-tier-prices"
                          data-selection-id="340370"
                          class="selection-tier-prices"
                          style="display: none;"
                        ></div>
                        <div
                          data-role="selection-tier-prices"
                          data-selection-id="340376"
                          class="selection-tier-prices"
                        ></div>
                        <div
                          data-role="selection-tier-prices"
                          data-selection-id="340364"
                          class="selection-tier-prices"
                          style="display: none;"
                        ></div>
                        <div
                          data-role="selection-tier-prices"
                          data-selection-id="340373"
                          class="selection-tier-prices"
                          style="display: none;"
                        ></div>
                        <div
                          data-role="selection-tier-prices"
                          data-selection-id="340379"
                          class="selection-tier-prices"
                          style="display: none;"
                        ></div>
                        <div
                          data-role="selection-tier-prices"
                          data-selection-id="340367"
                          class="selection-tier-prices"
                          style="display: none;"
                        ></div>
                        <div
                          data-role="selection-tier-prices"
                          data-selection-id="340382"
                          class="selection-tier-prices"
                          style="display: none;"
                        ></div>
                      </div>
                      <div class="nested">
                        <div class="field qty qty-holder">
                          <label class="label" for="bundle-option-300247-qty-input"
                            ><span>Quantity</span></label
                          >
                          <div class="control">
                            <input
                              disabled="disabled"
                              id="bundle-option-300247-qty-input"
                              class="input-text qty qty-disabled"
                              type="number"
                              min="0"
                              data-validate='{"validate-item-quantity":[]}'
                              name="bundle_option_qty[300247]"
                              data-selector="bundle_option_qty[300247]"
                              value="1"
                              aria-required="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tm-option-wrapper option-type-tariff">
                  <div class="field option  required">
                    <label class="label"
                      ><span>Choose your data</span>
                      <a href="/data-calculator" target="_blank" id="tariff-hint"
                        >Data calculator</a
                      >
                    </label>
                    <div class="control">
                      <div class="nested options-list">
                        <div class="field choice visible">
                          <span class="dl-tariff-real-price" style="display: none">12.5</span>
                          <span class="dl-product-data-name" style="display: none"
                            >3GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-345967"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="345967"
                            aria-required="true"
                          /><label class="label" for="bundle-option-300250-345967"
                            ><div class="allowance">3GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£48.49 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice">
                          <span class="dl-tariff-real-price" style="display: none">12.5</span>
                          <span class="dl-product-data-name" style="display: none"
                            >3GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-342662"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="342662"
                            aria-required="true"
                            disabled="disabled"
                          /><label class="label" for="bundle-option-300250-342662"
                            ><div class="allowance">3GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£48.49 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice visible">
                          <span class="dl-tariff-real-price" style="display: none">15</span>
                          <span class="dl-product-data-name" style="display: none"
                            >6GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-345970"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="345970"
                            aria-required="true"
                          /><label class="label" for="bundle-option-300250-345970"
                            ><div class="allowance">6GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£50.99 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice">
                          <span class="dl-tariff-real-price" style="display: none">15</span>
                          <span class="dl-product-data-name" style="display: none"
                            >6GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-342665"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="342665"
                            aria-required="true"
                            disabled="disabled"
                          /><label class="label" for="bundle-option-300250-342665"
                            ><div class="allowance">6GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£50.99 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice visible">
                          <span class="dl-tariff-real-price" style="display: none">17.5</span>
                          <span class="dl-product-data-name" style="display: none"
                            >12GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-345973"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="345973"
                            aria-required="true"
                          /><label class="label" for="bundle-option-300250-345973"
                            ><div class="allowance">12GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£53.49 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice">
                          <span class="dl-tariff-real-price" style="display: none">17.5</span>
                          <span class="dl-product-data-name" style="display: none"
                            >12GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-342668"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="342668"
                            aria-required="true"
                            disabled="disabled"
                          /><label class="label" for="bundle-option-300250-342668"
                            ><div class="allowance">12GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£53.49 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice visible">
                          <span class="dl-tariff-real-price" style="display: none">20</span>
                          <span class="dl-product-data-name" style="display: none"
                            >25GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-345976"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="345976"
                            aria-required="true"
                            checked="checked"
                          /><label class="label" for="bundle-option-300250-345976"
                            ><div class="allowance">25GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£55.99 <span>a month</span></div>
                              <span class="clubcard-price-wrapper">
                                <span class="clubcard-price-label">Clubcard Price</span>
                                <span class="clubcard-price-value"
                                  ><span>£49.99</span> a month</span
                                >
                              </span>
                            </div></label
                          >
                        </div>
                        <div class="field choice">
                          <span class="dl-tariff-real-price" style="display: none">20</span>
                          <span class="dl-product-data-name" style="display: none"
                            >25GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-342671"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="342671"
                            aria-required="true"
                            disabled="disabled"
                          /><label class="label" for="bundle-option-300250-342671"
                            ><div class="allowance">25GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£55.99 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice visible">
                          <span class="dl-tariff-real-price" style="display: none">22.5</span>
                          <span class="dl-product-data-name" style="display: none"
                            >50GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-345979"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="345979"
                            aria-required="true"
                          /><label class="label" for="bundle-option-300250-345979"
                            ><div class="allowance">50GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£58.49 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice tariff-nudge-tooltip">
                          <span class="dl-tariff-real-price" style="display: none">22.5</span>
                          <span class="dl-product-data-name" style="display: none"
                            >50GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-342674"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="342674"
                            aria-required="true"
                            disabled="disabled"
                          /><label class="label tooltip-toggle" for="bundle-option-300250-342674"
                            ><div class="allowance">50GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£58.49 <span>a month</span></div>
                            </div></label
                          >
                          <div class="tooltip-content">
                            <span class="icon icon-close"></span>Double data for an extra £2.50 per
                            month
                          </div>
                        </div>
                        <div class="field choice visible tariff-nudge-tooltip">
                          <span class="dl-tariff-real-price" style="display: none">25</span>
                          <span class="dl-product-data-name" style="display: none"
                            >100GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-345982"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="345982"
                            aria-required="true"
                          /><label class="label tooltip-toggle" for="bundle-option-300250-345982"
                            ><div class="allowance">100GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£60.99 <span>a month</span></div>
                              <span class="clubcard-price-wrapper">
                                <span class="clubcard-price-label">Clubcard Price</span>
                                <span class="clubcard-price-value"
                                  ><span>£54.99</span> a month</span
                                >
                              </span>
                            </div></label
                          >
                          <div class="tooltip-content">
                            <span class="icon icon-close"></span>Quadruple data for an extra £5 per
                            month.
                          </div>
                        </div>
                        <div class="field choice">
                          <span class="dl-tariff-real-price" style="display: none">25</span>
                          <span class="dl-product-data-name" style="display: none"
                            >100GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-342677"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="342677"
                            aria-required="true"
                            disabled="disabled"
                          /><label class="label" for="bundle-option-300250-342677"
                            ><div class="allowance">100GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£60.99 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice visible">
                          <span class="dl-tariff-real-price" style="display: none">27.5</span>
                          <span class="dl-product-data-name" style="display: none"
                            >250GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-345985"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="345985"
                            aria-required="true"
                          /><label class="label" for="bundle-option-300250-345985"
                            ><div class="allowance">250GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£63.49 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice">
                          <span class="dl-tariff-real-price" style="display: none">27.5</span>
                          <span class="dl-product-data-name" style="display: none"
                            >250GB data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-342680"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="342680"
                            aria-required="true"
                            disabled="disabled"
                          /><label class="label" for="bundle-option-300250-342680"
                            ><div class="allowance">250GB<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£63.49 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice visible">
                          <span class="dl-tariff-real-price" style="display: none">30</span>
                          <span class="dl-product-data-name" style="display: none"
                            >Unlimited data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-345988"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="345988"
                            aria-required="true"
                          /><label class="label" for="bundle-option-300250-345988"
                            ><div class="allowance">Unlimited<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£65.99 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div class="field choice">
                          <span class="dl-tariff-real-price" style="display: none">30</span>
                          <span class="dl-product-data-name" style="display: none"
                            >Unlimited data bundles</span
                          >
                          <input
                            type="radio"
                            class="radio product bundle option change-container-classname"
                            id="bundle-option-300250-342683"
                            data-validate="{'validate-one-required-by-name':true}"
                            name="bundle_option[300250]"
                            data-selector="bundle_option[300250]"
                            value="342683"
                            aria-required="true"
                            disabled="disabled"
                          /><label class="label" for="bundle-option-300250-342683"
                            ><div class="allowance">Unlimited<span>data </span></div>
                            <div class="price">
                              <div class="regular-price-wrapper">£65.99 <span>a month</span></div>
                            </div></label
                          >
                        </div>
                        <div id="bundle-option-300250-container"></div>
                        <div class="field qty qty-holder">
                          <label class="label" for="bundle-option-300250-qty-input"
                            ><span>Quantity</span></label
                          >
                          <div class="control">
                            <input
                              disabled="disabled"
                              id="bundle-option-300250-qty-input"
                              class="input-text qty qty-disabled"
                              type="number"
                              name="bundle_option_qty[300250]"
                              data-selector="bundle_option_qty[300250]"
                              value="1"
                              aria-required="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    ${ClubCardStripe({
                      title: 'Save £216 over your contract'
                    })}
                    <div class="cc-savings-benefits" data-bind="scope: 'tm-clubcard-benefits'">
                      <!-- ko template: getTemplate() --><!-- ko if: ((!clubCardPrice() && isPayM()) && !hasClubCard) && clubcardBenefits() --><!-- /ko --><!-- /ko -->
                    </div>
                    <div class="data-plan-wrapper">
                      <div class="data-plan__title"><span>All our tariffs come with </span></div>
                      <div class="data-plan data-plan__minutes">
                        <span class="icon icon-comments"></span>Unlimited minutes
                      </div>
                      <div class="data-plan data-plan__sms">Unlimited texts</div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="fieldset fieldset-tm-bundle-options">
                <div class="field option" data-collapsible="true" role="tablist">
                  <label class="label" for="bundle-option-tm_puf"><span>Upfront cost</span></label>
                  <div
                    class="option-collapsible"
                    role="tab"
                    aria-selected=""
                    aria-expanded=""
                    tabindex="0"
                  >
                    <span class="selected-price puf-price ccp"> £0 </span>
                    <span class="collapsible-action">Change</span>
                  </div>
                  <div
                    class="control"
                    data-fieldname="dynamic_bundle_option[tm_puf]"
                    role="tabpanel"
                    aria-hidden="true"
                    style="display: none;"
                  >
                    <div class="field choice">
                      <input
                        type="radio"
                        id="tm_puf_0"
                        name="dynamic_bundle_option[tm_puf]"
                        value="0"
                        checked="checked"
                      /><label class="label" for="tm_puf_0"><span>£0</span></label>
                    </div>
                    <div class="field choice">
                      <input
                        type="radio"
                        id="tm_puf_60"
                        name="dynamic_bundle_option[tm_puf]"
                        value="60"
                      /><label class="label" for="tm_puf_60"><span>£60</span></label>
                    </div>
                    <div class="field choice">
                      <input
                        type="radio"
                        id="tm_puf_120"
                        name="dynamic_bundle_option[tm_puf]"
                        value="120"
                      /><label class="label" for="tm_puf_120"><span>£120</span></label>
                    </div>
                    <div class="field choice">
                      <input
                        type="radio"
                        id="tm_puf_180"
                        name="dynamic_bundle_option[tm_puf]"
                        value="180"
                      /><label class="label" for="tm_puf_180"><span>£180</span></label>
                    </div>
                    <div class="field choice all">
                      <input
                        type="radio"
                        class="bundle-option-tm_puf"
                        name="dynamic_bundle_option[tm_puf]"
                        value="all"
                        id="bundle-option-all-tm_puf"
                      /><label class="label ccp" for="bundle-option-all-tm_puf">
                        <span class="full-price-wrapper">
                          <span class="full-price-label">Full price</span>
                          <span class="full-price-value">£1,296</span>
                        </span>
                        <span class="clubcard-price-wrapper">
                          <span class="clubcard-price-label">Clubcard Price</span>
                          <span class="clubcard-price-value">
                            <span>£1,287</span>
                          </span>
                        </span></label
                      >
                    </div>
                  </div>
                </div>
                <div class="field option" data-collapsible="true" role="tablist">
                  <label class="label" for="bundle-option-tm_tenure"
                    ><span>Contract length</span></label
                  >
                  <div
                    class="option-collapsible"
                    role="tab"
                    aria-selected=""
                    aria-expanded=""
                    tabindex="0"
                  >
                    <span class="selected-price tenure-price"> 36 months </span>
                    <span class="collapsible-action">Change</span>
                  </div>
                  <div
                    class="control"
                    data-fieldname="dynamic_bundle_option[tm_tenure]"
                    role="tabpanel"
                    aria-hidden="true"
                    style="display: none;"
                  >
                    <div class="field choice 12">
                      <input
                        type="radio"
                        class="bundle-option-tm_tenure"
                        name="dynamic_bundle_option[tm_tenure]"
                        value="12"
                        id="bundle-option-12-tm_tenure"
                      /><label class="label" for="bundle-option-12-tm_tenure"
                        ><span>12</span></label
                      >
                    </div>
                    <div class="field choice 18">
                      <input
                        type="radio"
                        class="bundle-option-tm_tenure"
                        name="dynamic_bundle_option[tm_tenure]"
                        value="18"
                        id="bundle-option-18-tm_tenure"
                      /><label class="label" for="bundle-option-18-tm_tenure"
                        ><span>18</span></label
                      >
                    </div>
                    <div class="field choice 24">
                      <input
                        type="radio"
                        class="bundle-option-tm_tenure"
                        name="dynamic_bundle_option[tm_tenure]"
                        value="24"
                        id="bundle-option-24-tm_tenure"
                      /><label class="label" for="bundle-option-24-tm_tenure"
                        ><span>24</span></label
                      >
                    </div>
                    <div class="field choice 30">
                      <input
                        type="radio"
                        class="bundle-option-tm_tenure"
                        name="dynamic_bundle_option[tm_tenure]"
                        value="30"
                        id="bundle-option-30-tm_tenure"
                      /><label class="label" for="bundle-option-30-tm_tenure"
                        ><span>30</span></label
                      >
                    </div>
                    <div class="field choice 36">
                      <input
                        type="radio"
                        class="bundle-option-tm_tenure"
                        name="dynamic_bundle_option[tm_tenure]"
                        value="36"
                        id="bundle-option-36-tm_tenure"
                        checked="checked"
                      /><label class="label" for="bundle-option-36-tm_tenure"
                        ><span>36</span></label
                      >
                    </div>
                  </div>
                </div>
              </fieldset>
              <div data-bind="scope:'tm-tenure-hint-modal'" class="no-display">
                <!-- ko template: getTemplate() --><!-- /ko -->
              </div>
            </div>
          </div>
          <div class="product-options-bottom"></div>
        </div>
        <div id="bundleSummary" class="block-bundle-summary">
          <div class="content">
            <div class="bundle-info">
              <div data-bind="scope:'pdp-summary'">
                <!-- ko template: getTemplate() --><!-- ko if: isPayM() -->
                <div class="prices-summary">
                  <!-- ko if: !isBau() -->
                  <div class="info">
                    <div class="contract">
                      <!-- ko if: !isAui() -->
                      <span data-bind="i18n: 'Phone contract'" class="label">Phone contract</span>
                      <span data-bind="text: getFormattedPrice(deviceMonthlyPrice)" class="price"
                        >£35.99</span
                      ><!-- ko if: deviceClubCardPrice() > 0 -->
                      <div class="clubcard-wrapper">
                        <span data-bind="i18n: 'Clubcard Price'" class="clubcard-price-label"
                          >Clubcard Price</span
                        >
                        <span
                          data-bind="text: getFormattedPrice(deviceClubCardPrice)"
                          class="clubcard-price-value"
                          >£35.74</span
                        >
                      </div>
                      <!-- /ko --><!-- /ko --><!-- ko if: isAui() --><!-- /ko -->
                    </div>
                    <!-- ko if: $data.tariffData() -->
                    <div class="data">
                      <!-- ko if: $data.tariffData().allowance_data --><span
                        class="allowance-data-item label"
                        ><span data-bind="text: $data.tariffData().allowance_data" class="value"
                          >25GB</span
                        >
                        <span data-bind="i18n: 'data'" class="label-after">data</span> </span
                      ><!-- /ko --><span
                        data-bind="text: getFormattedPrice($data.tariffData().price)"
                        class="price"
                        >£20</span
                      ><!-- ko if: $data.tariffData().clubcard_price && $data.tariffData().clubcard_price > 0 -->
                      <div class="clubcard-wrapper">
                        <span data-bind="i18n: 'Clubcard Price'" class="clubcard-price-label"
                          >Clubcard Price</span
                        >
                        <span
                          data-bind="text: getFormattedPrice($data.tariffData().clubcard_price)"
                          class="clubcard-price-value"
                          >£14.25</span
                        >
                      </div>
                      <!-- /ko -->
                    </div>
                    <!-- /ko -->
                  </div>
                  <!-- /ko -->
                  <div class="total">
                    <span data-bind="i18n: 'Total monthly cost'" class="label"
                      >Total monthly cost</span
                    >
                    <span data-bind="text: getFormattedPrice(monthlyTotal)" class="price"
                      >£55.99</span
                    ><!-- ko if: clubCardPrice -->
                    <div class="clubcard-wrapper">
                      <span data-bind="i18n: 'Clubcard Price'" class="clubcard-price-label"
                        >Clubcard Price</span
                      >
                      <span
                        data-bind="text: getFormattedPrice(clubCardPrice)"
                        class="clubcard-price-value"
                        >£49.99</span
                      >
                    </div>
                    <!-- /ko --><!-- ko if: clubCardPrice -->
                    <div class="clubcard-savings-info">
                      <div class="clubcard-logo">
                        <span>Lower prices</span> <span>Clubcard Price</span>
                      </div>
                      <span data-bind="html: updateSavings()"
                        >Clubcard Prices – Frozen for your contract <br />You'll save
                        <strong>£216</strong> over 36 months.</span
                      >
                    </div>
                    <!-- /ko --><!-- ko if:isPriceRiseEnabled --><!-- ko ifnot: isAui && isScdProduct -->
                    <div class="price-rise-copy">
                      <span data-bind="html: getPriceRiseCopy()"
                        ><style>
                          #html-body [data-pb-style="XGG3B6P"] {
                            justify-content: flex-start;
                            display: flex;
                            flex-direction: column;
                            background-position: left top;
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-attachment: scroll;
                          }
                        </style>
                        <div
                          data-content-type="row"
                          data-appearance="contained"
                          data-element="main"
                        >
                          <div
                            class="message notice price-rise-copy__row"
                            data-enable-parallax="0"
                            data-parallax-speed="0.5"
                            data-background-images="{}"
                            data-background-type="image"
                            data-video-loop="true"
                            data-video-play-only-visible="true"
                            data-video-lazy-load="true"
                            data-video-fallback-src=""
                            data-element="inner"
                            data-pb-style="XGG3B6P"
                          >
                            <div
                              data-content-type="text"
                              data-appearance="default"
                              data-element="main"
                            >
                              <div class="price-rise-copy__wrapper">
                                <p
                                  style="font-size: 16px;color: #666666;text-align: left;margin-bottom: 0;font-weight: 500;"
                                >
                                  Non-Clubcard Price deals are subject to an annual price increase.
                                  Please add this deal to your basket and view the basket to see the
                                  price increase details for the minimum contract period.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div></span
                      >
                    </div>
                    <!-- /ko --><!-- /ko -->
                  </div>
                  <!-- ko if: $data.tariffData() -->
                  <div class="footer">
                    <div class="tariffs">
                      <!-- ko if: isBau() && $data.tariffData().allowance_data --><!-- /ko --><!-- ko if: isBau() && $data.tariffData().tariff_tenure --><!-- /ko --><!-- ko if: !isBau() && !isAui() && $data.tariffData().tariff_tenure --><span
                        class="tenure"
                        ><span data-bind="text: getTenure()">36 months</span> </span
                      ><!-- /ko --><!-- ko if: !isAui() --><span
                        data-bind="text: getPuf()"
                        class="puf"
                        >£0 upfront</span
                      ><!-- /ko -->
                    </div>
                    <!-- ko if: !isBau() && !isAui() -->
                    <div>
                      <span
                        ><!-- ko i18n: "You'll have two contracts - " --><span
                          >You'll have two contracts - </span
                        ><!-- /ko --> </span
                      ><a class="tenure-hint" id="tenure-hint" href="#"
                        ><!-- ko i18n: "Find out why" --><span>Find out why</span
                        ><!-- /ko --></a
                      >
                    </div>
                    <!-- /ko -->
                  </div>
                  <!-- /ko -->
                </div>
                <!-- /ko --><!-- /ko -->
              </div>
              <div class="product-details">
                <div class="box-tocart">
                  <div class="fieldset">
                    <div class="field qty">
                      <label class="label" for="qty"><span>Qty</span></label>
                      <div class="control">
                        <input
                          type="number"
                          name="qty"
                          id="qty"
                          min="0"
                          value="1"
                          title="Qty"
                          class="input-text qty"
                          data-validate='{"required-number":true,"validate-item-quantity":{"maxAllowed":10000}}'
                        />
                      </div>
                    </div>
                    <div class="actions">
                      <button
                        type="submit"
                        title="Add to basket"
                        class="action primary tocart"
                        id="product-addtocart-button"
                      >
                        <span>Add to basket</span>
                      </button>
                      <div id="instant-purchase" data-bind="scope:'instant-purchase'">
                        <!-- ko template: getTemplate() --><!-- ko if: showButton() --><!-- /ko --><!-- /ko -->
                      </div>
                      <input type="hidden" name="deal-contract-type" value="AUS" />
                      <div data-bind="scope:'tm-upgrade-button'">
                        <!-- ko template: getTemplate() --><!-- ko if: !isLoggedIn() || isEligibleForPhoneUpgrade() -->
                        <div
                          id="upgrade-button"
                          class="upgrade-button"
                          data-bind="afterRender: setUpgradeBtnLabel"
                        >
                          <a class="action secondary upgrade" data-bind="click: isExistingCustomer"
                            ><span data-bind="text: upgradeBtnLabel">Upgrade to this phone</span></a
                          >
                        </div>
                        <!-- /ko --><!-- /ko -->
                      </div>
                      <div data-bind="scope: 'tm-is-clubcard'" id="is-clubcard-wrapper">
                        <!-- ko template: getTemplate() --><input
                          type="hidden"
                          name="is_clubcard"
                          value="0"
                        /><!-- /ko -->
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="price-box price-configured_price"
                  data-role="priceBox"
                  data-product-id="198640"
                  data-price-box="product-id-198640"
                >
                  <p class="price-as-configured">
                    <span class="price-container price-configured_price tax weee">
                      <span
                        id="product-price-198640"
                        data-price-amount="48.49"
                        data-price-type="finalPrice"
                        class="price-wrapper "
                        ><span class="price">£55.99</span></span
                      >
                    </span>
                  </p>
                </div>
                <div
                  class="delivery-counter-wrapper courier"
                  data-bind="scope: 'product-page-delivery-message'"
                >
                  <!-- ko template: getTemplate() -->
                  <div
                    data-bind="class: (getStockStatus() &amp;&amp; isActive()) ? 'active-content' : 'inactive-content'"
                    class="product-page-delivery-message active-content"
                  >
                    <span data-bind="html: cmsContent, afterRender:restartTicker()"
                      ><style>
                        #html-body [data-pb-style="CUFWURA"] {
                          justify-content: flex-start;
                          display: flex;
                          flex-direction: column;
                          background-position: left top;
                          background-size: cover;
                          background-repeat: no-repeat;
                          background-attachment: scroll;
                        }
                      </style>
                      <div data-content-type="row" data-appearance="contained" data-element="main">
                        <div
                          data-enable-parallax="0"
                          data-parallax-speed="0.5"
                          data-background-images="{}"
                          data-background-type="image"
                          data-video-loop="true"
                          data-video-play-only-visible="true"
                          data-video-lazy-load="true"
                          data-video-fallback-src=""
                          data-element="inner"
                          data-pb-style="CUFWURA"
                        >
                          <div
                            data-content-type="html"
                            data-appearance="default"
                            data-element="main"
                            data-decoded="true"
                          >
                            <div class="delivery-wrapper">
                              <div class="timer-is-valid">
                                Order in the next
                                <span class="ticker delivery-counter"
                                  ><span class="time-counter hour" style="display: inline-block;"
                                    ><span data-container="hour" class="value time-counter"
                                      >05</span
                                    >
                                    <span class="label time-counter">hrs&nbsp;</span> </span
                                  ><span class="time-counter minute" style="display: inline-block;"
                                    ><span data-container="minute" class="value time-counter"
                                      >55</span
                                    >
                                    <span class="label time-counter">mins&nbsp;</span> </span
                                  ><span class="time-counter second" style="display: inline-block;"
                                    ><span data-container="second" class="value time-counter"
                                      >59</span
                                    >
                                    <span class="label time-counter">secs&nbsp;</span></span
                                  ></span
                                >
                                for free UK delivery tomorrow with <span class="dpd"></span>
                              </div>
                              <div class="timer-isnot-valid">
                                <a
                                  href="/help/getting-started/orders-and-delivery/order-tracking-and-delivery"
                                  target="_blank"
                                  >Free UK delivery</a
                                >
                                available with <span class="dpd"></span>
                              </div>
                            </div>
                          </div>
                        </div></div
                    ></span>
                  </div>
                  <!-- /ko -->
                </div>
                <div class="payg-add-to-cart-btn payg-price-update" style="display: none">
                  <div class="custom-price">
                    <span class="custom-price-container regular-price"
                      ><span class="price-label">Pay as you go</span>
                      <span class="price-wrapper"><span class="price">£1,199</span></span></span
                    >
                    <span class="custom-price-container old-price" style="display: none"
                      ><span class="price-label">Was</span>
                      <span class="price-wrapper"><span class="price"></span></span
                    ></span>
                  </div>
                  <div class="box-tocart add-to-cart-custom-wrapper">
                    <a
                      href="https://www.tesco.com/phones/products/00195950639223"
                      class="action primary tocart ean-number"
                      target="_blank"
                      ><span>Buy now</span></a
                    >
                  </div>
                </div>
                <div class="sim-free-add-to-cart-btn sim-price-update" style="display: none">
                  <div class="custom-price">
                    <span class="custom-price-container regular-price"
                      ><span class="price-label">SIM-Free</span>
                      <span class="price-wrapper"><span class="price">£1,199</span></span></span
                    >
                    <span class="custom-price-container old-price" style="display: none"
                      ><span class="price-label">Was</span>
                      <span class="price-wrapper"><span class="price"></span></span
                    ></span>
                  </div>
                  <div class="box-tocart add-to-cart-custom-wrapper">
                    <a
                      href="https://www.tesco.com/phones/products/00195950639223"
                      class="action primary tocart ean-number"
                      target="_blank"
                      ><span>Buy now</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="bundle-summary active" data-collapsible="true" role="tablist">
              <strong
                class="subtitle"
                aria-controls="bundle-summary"
                role="tab"
                aria-selected="false"
                aria-expanded="true"
                tabindex="0"
                >Here's what it means to you</strong
              >
              <div
                id="bundle-summary"
                data-container="product-summary"
                role="tabpanel"
                aria-hidden="false"
              >
                <ul class="bundle items no-display">
                  <li>
                    <strong class="label">iPhone 17 Pro Max:</strong>
                    <div data-container="options">
                      <div>1 x iPhone 17 Pro Max 256GB Deep Blue</div>
                    </div>
                  </li>
                  <li>
                    <strong class="label">Tariffs for iPhone 17 Pro Max:</strong>
                    <div data-container="options">
                      <div>1 x Usage contract (1 month rolling)</div>
                    </div>
                  </li>
                </ul>
                <script data-template="bundle-summary" type="text/x-magento-template">
                  <li>
                      <strong class="label"><%- data._label_ %>:</strong>
                      <div data-container="options"></div></li>
                </script>
                <script data-template="bundle-option" type="text/x-magento-template">
                  <div><%- data._quantity_ %> x <%- data._label_ %></div>
                </script>
                <div class="what-it-means" data-bind="scope:'tm-what-it-means'">
                  <!-- ko template: getTemplate() -->
                  <table summary="Here's what it means to you">
                    <tbody data-bind="css: {'has-ccp': $data.deviceClubCardPrice &gt; 0}">
                      <!-- ko if: $data.deviceClubCardPrice -->
                      <tr class="ccp-summary-header">
                        <th scope="row"></th>
                        <th data-bind="i18n: 'Regular price'">Regular price</th>
                        <th data-bind="i18n: 'Clubcard price'">Clubcard price</th>
                      </tr>
                      <!-- /ko -->
                      <tr>
                        <th scope="row">
                          <!-- ko i18n: 'Monthly phone payment'--><span>Monthly phone payment</span
                          ><!-- /ko -->
                        </th>
                        <td data-bind="text: getFormattedPrice(monthlyPhonePayment)">£35.99</td>
                        <!-- ko if: $data.deviceClubCardPrice -->
                        <td data-bind="text: getFormattedPrice($data.deviceClubCardPrice)">
                          £35.74
                        </td>
                        <!-- /ko -->
                      </tr>
                      <tr>
                        <th scope="row">
                          <!-- ko i18n: 'Upfront phone cost' --><span>Upfront phone cost</span
                          ><!-- /ko -->
                        </th>
                        <td data-bind="text: getFormattedPrice(puf)">£0</td>
                        <!-- ko if: $data.deviceClubCardPrice -->
                        <td data-bind="text: getFormattedPrice(puf)">£0</td>
                        <!-- /ko -->
                      </tr>
                      <tr>
                        <th scope="row">
                          <!-- ko i18n: 'Total phone payment' --><span>Total phone payment</span
                          ><!-- /ko --><!-- ko ifnot: $data.deviceClubCardPrice --><!-- /ko -->
                        </th>
                        <td>
                          <!-- ko if: $data.deviceClubCardPrice -->
                          <span
                            class="total-breakdown regular"
                            data-bind="text: totalPaymentBreakdown"
                            >£35.99 x 36 months + £0 = </span
                          ><!-- /ko -->
                          <span data-bind="text: getFormattedPrice(totalPhonePayment)"
                            >£1,295.64</span
                          >
                        </td>
                        <!-- ko if: $data.deviceClubCardPrice -->
                        <td>
                          <span
                            class="total-breakdown regular"
                            data-bind="text: totalPaymentBreakdownClubCard"
                            >£35.74 x 36 months + £0 =
                          </span>
                          <span data-bind="text: getFormattedPrice(totalPhonePaymentClubCard)"
                            >£1,286.64</span
                          >
                        </td>
                        <!-- /ko -->
                      </tr>
                      <tr>
                        <th scope="row">
                          <!-- ko i18n: 'Length of agreement' --><span>Length of agreement</span
                          ><!-- /ko -->
                        </th>
                        <td data-bind="text: getTenure()">36 months</td>
                        <!-- ko if: $data.deviceClubCardPrice -->
                        <td data-bind="text: getTenure()">36 months</td>
                        <!-- /ko -->
                      </tr>
                      <tr>
                        <th scope="row">
                          <!-- ko i18n: 'Cash price' --><span>Cash price</span
                          ><!-- /ko -->
                        </th>
                        <td data-bind="text: getFormattedPrice(totalPhonePayment)">£1,295.64</td>
                        <!-- ko if: $data.deviceClubCardPrice -->
                        <td data-bind="text: getFormattedPrice(totalPhonePaymentClubCard)">
                          £1,286.64
                        </td>
                        <!-- /ko -->
                      </tr>
                      <tr>
                        <th scope="row">
                          <!-- ko i18n: 'Credit amount' --><span>Credit amount</span
                          ><!-- /ko -->
                        </th>
                        <td data-bind="text: getFormattedPrice(creditAmount)">£1,295.64</td>
                        <!-- ko if: $data.deviceClubCardPrice -->
                        <td data-bind="text: getFormattedPrice(creditAmountClubCard)">£1,286.64</td>
                        <!-- /ko -->
                      </tr>
                      <tr>
                        <th scope="row">
                          <!-- ko i18n: 'Interest rate (fixed)' --><span>Interest rate (fixed)</span
                          ><!-- /ko -->
                        </th>
                        <td data-bind="text: getInterestRate()">0%</td>
                        <!-- ko if: $data.deviceClubCardPrice -->
                        <td data-bind="text: getInterestRate()">0%</td>
                        <!-- /ko -->
                      </tr>
                      <tr>
                        <th scope="row">
                          <!-- ko i18n: 'APR representative' --><span>APR representative</span
                          ><!-- /ko -->
                        </th>
                        <td data-bind="text: getArp()">0%</td>
                        <!-- ko if: $data.deviceClubCardPrice -->
                        <td data-bind="text: getArp()">0%</td>
                        <!-- /ko -->
                      </tr>
                    </tbody>
                  </table>
                  <!-- /ko -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
`;
