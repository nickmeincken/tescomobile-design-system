import { html } from 'lit';

export const ProductItem = () => html`
  <div
    class="product-item has-promo-labels"
    itemprop="itemListElement"
    data-contract="AUSTANDARD,AUIMMEDIATE,PAYG,SIM Free"
    itemscope=""
    itemtype="http://schema.org/ListItem"
  >
    <meta itemprop="position" content="1" />
    <div
      class="result-wrapper"
      itemprop="item"
      itemscope=""
      itemtype="http://schema.org/Product"
    >
      <meta itemprop="url" content="/shop/apple/iphone-17-pro-max" />
      <a
        class="result"
        href="/shop/apple/iphone-17-pro-max"
        data-objectid="198640"
        data-indexname="prod_default_products"
        data-position="1"
        data-queryid="04d790cc57dc25b6946a72c5884dfb2b"
      >
        <div class="result-content">
          <div class="result-pre-content">
            <div class="result-content__row">
              <div class="result-promotion-top-line"></div>
            </div>
            <div class="product-title-holder">
              <div class="product-title-holder__title-wrapper">
                <div class="product-item-brand">Apple</div>
                <h3 itemprop="name" class="result-title">iPhone 17 Pro Max</h3>
              </div>
              <div class="promotions">
                <div class="label offer">
                  <div class="text">Offer</div>
                </div>
                <div class="label new">
                  <div class="text"> New</div>
                </div>
              </div>
            </div>
          </div>
          <div class="result-thumbnail">
            <div class="spinning-loader" style="display: none"></div>
            <img
              itemprop="image"
              src="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_1__gben_3.png?width=265&amp;height=265&amp;canvas=265,265&amp;optimize=low&amp;fit=bounds"
              alt="Apple iPhone 17 Pro Max"
              width="265"
              height="265"
              fetchpriority="high"
              loading="eager"
            />
            <div class="product-item-swatches">
              <div class="swatch" style="background: #eaeaed"></div>
              <div class="swatch" style="background: #3d8cc7"></div>
              <div class="swatch" style="background: #ffa600"></div>
              <div class="icon icon-add"></div>
            </div>
          </div>
          <div class="result-lower-content">
            <div class="ratings">
              <div class="result-sub-content">
                <span class="offers-text"> From</span>
                <div
                  itemprop="offers"
                  itemscope=""
                  itemtype="http://schema.org/Offer"
                  class="price"
                >
                  <meta itemprop="price" content="48.49" />
                  <meta itemprop="priceCurrency" content="GBP" />
                  <div class="price-wrapper">
                    <div>£48.49</div>
                  </div>
                </div>
                <span class="offers-text"> a month</span>

                <style>
                  #html-body [data-pb-style="X9XD2KK"] {
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
                    data-enable-parallax="0"
                    data-parallax-speed="0.5"
                    data-background-images="{}"
                    data-background-type="image"
                    data-video-loop="true"
                    data-video-play-only-visible="true"
                    data-video-lazy-load="true"
                    data-video-fallback-src=""
                    data-element="inner"
                    data-pb-style="X9XD2KK"
                  >
                    <div
                      data-content-type="html"
                      data-appearance="default"
                      data-element="main"
                      data-decoded="true"
                    >
                      <div class="deal-contract-length">
                        <p>36-month contract</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contract">
                with a phone credit contract <b>0% APR</b>
              </div>
            </div>
            <div class="clubcard-stripe">
              <div class="clubcard-stripe__logo">
                <span> Clubcard Price</span>
              </div>
              <div class="clubcard-stripe__info">
                Clubcard Prices available on selected deals
              </div>
            </div>
            <div class="promo-bottom-holder">
              <div class="product-item-promo">
                <span class="icon icon-offers"></span>
                <span class="icon icon-apple"></span>
                <span class="icon icon-apple"></span>
                <span class="text">
                  7 offers available <span class="details">see details</span>
                </span>
                <div class="product-item-dialog">
                  <div class="close"><span class="icon icon-close"></span></div>
                  <div class="title">Offers</div>
                  <div class="promo-item">
                    <span class="icon icon-offers"></span>
                    <span class="text">No EU roaming fees</span>
                  </div>
                  <div class="promo-item">
                    <span class="icon icon-apple"></span>
                    <span class="text"
                      >Get 3 months of Apple Fitness+ free when you buy any new
                      Apple iPhone</span
                    >
                  </div>
                  <div class="promo-item">
                    <span class="icon icon-apple"></span>
                    <span class="text"
                      >Get 3 months of Apple TV+ free when you buy any new Apple
                      iPhone</span
                    >
                  </div>
                  <div class="promo-item">
                    <span class="icon icon-apple"></span>
                    <span class="text">Get 3 months free Apple Music</span>
                  </div>
                  <div class="promo-item">
                    <span class="icon icon-apple"></span>
                    <span class="text"
                      >Get 3 months of Apple Arcade free when you buy an Apple
                      device</span
                    >
                  </div>
                  <div class="promo-item">
                    <span class="icon icon-apple"></span>
                    <span class="text">Get 3 months of Apple News+</span>
                  </div>
                  <div class="promo-item">
                    <span class="icon icon-offers"></span>
                    <span class="text"
                      >Clubcard Prices – Frozen for your contract</span
                    >
                  </div>
                </div>
              </div>
              <div class="result-bottom"></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
`;
