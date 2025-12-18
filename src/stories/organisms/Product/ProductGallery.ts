import { html } from "lit";
import { ProductPromos } from "./ProductPromos";

export const ProductGallery = () => html`
  <div class="product-media-wrapper">
    <div class="product media">
      <a id="gallery-prev-area" tabindex="-1"></a>
      <div class="action-skip-wrapper">
        <a class="action skip gallery-next-area" href="#gallery-next-area"
          ><span> Skip to the end of the images gallery</span></a
        >
      </div>
      <div class="gallery-placeholder" data-gallery-role="gallery-placeholder" style="">
        <img
          alt="main product photo"
          class="gallery-placeholder__image"
          fetchpriority="high"
          src="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_1__gben_3_5_2.png?optimize=low&amp;fit=bounds&amp;height=430&amp;width=290&amp;canvas=290:430"
        />
        <div class="fotorama--hidden"></div>
        <style>
          .fotorama1766046021180 .fotorama__nav--thumbs .fotorama__nav__frame {
            padding: 2px;
            height: 90px;
          }
          .fotorama1766046021180 .fotorama__thumb-border {
            height: 90px;
            border-width: 2px;
            margin-top: 2px;
          }
        </style>
        <div class="fotorama-item fotorama fotorama1766046021180" data-gallery-role="gallery">
          <div data-gallery-role="fotorama__focusable-start" tabindex="-1"></div>
          <div
            class="fotorama__wrap fotorama__wrap--css3 fotorama__wrap--slide fotorama__wrap--no-controls"
            style="min-width: 0px;"
          >
            <div
              class="fotorama__stage"
              data-fotorama-stage="fotorama__stage"
              style="left: 72px; height: 440px; width: 520px;"
            >
              <div
                class="fotorama__fullscreen-icon"
                data-gallery-role="fotorama__fullscreen-icon"
                tabindex="0"
                aria-label="Exit fullscreen"
                role="button"
                style="right: 72px;"
              ></div>
              <div
                class="fotorama__arr fotorama__arr--prev"
                tabindex="0"
                role="button"
                aria-label="Previous"
                data-gallery-role="arrow"
                style="display: none;"
              >
                <div class="fotorama__arr__arr"></div>
              </div>
              <div
                class="fotorama__stage__shaft fotorama__grab"
                tabindex="0"
                data-gallery-role="stage-shaft"
                style="max-width: 448px; transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); margin-left: 0px; width: 520px;"
              >
                <div
                  class="fotorama__stage__frame magnify-wheel-loaded fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img fotorama__active"
                  aria-hidden="false"
                  data-active="true"
                  style="left: 0px;"
                  href="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_1__gben_2.png?width=290&amp;height=430&amp;canvas=290,430&amp;optimize=low&amp;fit=bounds"
                >
                  <img
                    src="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_1__gben_2.png?width=290&amp;height=430&amp;canvas=290,430&amp;optimize=low&amp;fit=bounds"
                    alt="iPhone 17 Pro Max 256GB Deep Blue - Front and back view
"
                    class="fotorama__img"
                    aria-hidden="false"
                    width="290"
                    height="430"
                  />
                </div>
                <div
                  class="fotorama__stage__frame fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img"
                  aria-hidden="true"
                  style="left: -522px;"
                  href="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_8__gben_2.jpg?width=290&amp;height=430&amp;canvas=290,430&amp;optimize=low&amp;fit=bounds"
                >
                  <img
                    src="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_8__gben_2.jpg?width=290&amp;height=430&amp;canvas=290,430&amp;optimize=low&amp;fit=bounds"
                    alt="iPhone 17 Pro Max 256GB Deep Blue - Whats in the box
"
                    class="fotorama__img"
                    aria-hidden="false"
                    width="290"
                    height="430"
                  />
                </div>
                <div
                  class="fotorama__stage__frame fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img"
                  aria-hidden="true"
                  style="left: 522px;"
                  href="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_3__gben_2.png?width=290&amp;height=430&amp;canvas=290,430&amp;optimize=low&amp;fit=bounds"
                >
                  <img
                    src="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_3__gben_2.png?width=290&amp;height=430&amp;canvas=290,430&amp;optimize=low&amp;fit=bounds"
                    alt="iPhone 17 Pro Max 256GB Deep Blue - CAmera
"
                    class="fotorama__img"
                    aria-hidden="false"
                    width="290"
                    height="430"
                  />
                </div>
              </div>
              <div
                class="fotorama__arr fotorama__arr--next"
                tabindex="0"
                role="button"
                aria-label="Next"
                data-gallery-role="arrow"
                style="display: none; right: 72px;"
              >
                <div class="fotorama__arr__arr"></div>
              </div>
              <div class="fotorama__video-close"></div>
              <div
                class="fotorama__zoom-in zoom-in-loaded"
                data-gallery-role="fotorama__zoom-in"
                aria-label="Zoom in"
                role="button"
                tabindex="0"
              ></div>
              <div
                class="fotorama__zoom-out zoom-out-loaded"
                data-gallery-role="fotorama__zoom-out"
                aria-label="Zoom out"
                role="button"
                tabindex="0"
              ></div>
              <div class="fotorama__spinner"></div>
            </div>
            <div
              class="fotorama__nav-wrap fotorama__nav-wrap--vertical"
              data-gallery-role="nav-wrap"
              style=""
            >
              <div
                class="fotorama__thumb__arr fotorama__thumb__arr--left"
                role="button"
                aria-label="Previous"
                data-gallery-role="arrow"
                tabindex="-1"
              >
                <div class="fotorama__thumb--icon"></div>
              </div>
              <div
                class="fotorama__nav fotorama__nav--thumbs fotorama__shadows--bottom"
                style="height: 440px; width: 70px;"
              >
                <div
                  class="fotorama__nav__shaft fotorama__grab"
                  style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);"
                >
                  <div
                    class="fotorama__thumb-border"
                    style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); width: 70px; height: 90px;"
                  ></div>
                  <div
                    class="fotorama__nav__frame fotorama__nav__frame--thumb fotorama__active"
                    tabindex="0"
                    role="button"
                    data-gallery-role="nav-frame"
                    data-nav-type="thumb"
                    aria-label="iPhone 17 Pro Max 256GB Deep Blue - Front and back view
"
                    style="width: 70px;"
                    data-active="true"
                  >
                    <div
                      class="fotorama__thumb fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img"
                    >
                      <img
                        src="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_1__gben_2.png?width=70&amp;height=90&amp;canvas=70,90&amp;optimize=low&amp;fit=bounds"
                        alt="iPhone 17 Pro Max 256GB Deep Blue - Front and back view
"
                        class="fotorama__img"
                        aria-hidden="false"
                        width="70"
                        height="90"
                      />
                    </div>
                  </div>
                  <div
                    class="fotorama__nav__frame fotorama__nav__frame--thumb"
                    tabindex="0"
                    role="button"
                    data-gallery-role="nav-frame"
                    data-nav-type="thumb"
                    aria-label="iPhone 17 Pro Max 256GB Deep Blue - CAmera
"
                    style="width: 70px;"
                  >
                    <div
                      class="fotorama__thumb fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img"
                    >
                      <img
                        src="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_3__gben_2.png?width=70&amp;height=90&amp;canvas=70,90&amp;optimize=low&amp;fit=bounds"
                        alt="iPhone 17 Pro Max 256GB Deep Blue - CAmera
"
                        class="fotorama__img"
                        aria-hidden="false"
                        width="70"
                        height="90"
                      />
                    </div>
                  </div>
                  <div
                    class="fotorama__nav__frame fotorama__nav__frame--thumb"
                    tabindex="0"
                    role="button"
                    data-gallery-role="nav-frame"
                    data-nav-type="thumb"
                    aria-label="iPhone 17 Pro Max 256GB Deep Blue - Side view
"
                    style="width: 70px;"
                  >
                    <div
                      class="fotorama__thumb fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img"
                    >
                      <img
                        src="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_4__gben_2.png?width=70&amp;height=90&amp;canvas=70,90&amp;optimize=low&amp;fit=bounds"
                        alt="iPhone 17 Pro Max 256GB Deep Blue - Side view
"
                        class="fotorama__img"
                        aria-hidden="false"
                        width="70"
                        height="90"
                      />
                    </div>
                  </div>
                  <div
                    class="fotorama__nav__frame fotorama__nav__frame--thumb"
                    tabindex="0"
                    role="button"
                    data-gallery-role="nav-frame"
                    data-nav-type="thumb"
                    aria-label="iPhone 17 Pro Max 256GB Deep Blue - Features
"
                    style="width: 70px;"
                  >
                    <div
                      class="fotorama__thumb fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img"
                    >
                      <img
                        src="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_6__gben_2.jpg?width=70&amp;height=90&amp;canvas=70,90&amp;optimize=low&amp;fit=bounds"
                        alt="iPhone 17 Pro Max 256GB Deep Blue - Features
"
                        class="fotorama__img"
                        aria-hidden="false"
                        width="70"
                        height="90"
                      />
                    </div>
                  </div>
                  <div
                    class="fotorama__nav__frame fotorama__nav__frame--thumb"
                    tabindex="0"
                    role="button"
                    data-gallery-role="nav-frame"
                    data-nav-type="thumb"
                    aria-label="iPhone 17 Pro Max 256GB Deep Blue - Range
"
                    style="width: 70px;"
                  >
                    <div
                      class="fotorama__thumb fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img"
                    >
                      <img
                        src="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_7__gben_2.png?width=70&amp;height=90&amp;canvas=70,90&amp;optimize=low&amp;fit=bounds"
                        alt="iPhone 17 Pro Max 256GB Deep Blue - Range
"
                        class="fotorama__img"
                        aria-hidden="false"
                        width="70"
                        height="90"
                      />
                    </div>
                  </div>
                  <div
                    class="fotorama__nav__frame fotorama__nav__frame--thumb"
                    tabindex="0"
                    role="button"
                    data-gallery-role="nav-frame"
                    data-nav-type="thumb"
                    aria-label="iPhone 17 Pro Max 256GB Deep Blue - Whats in the box
"
                    style="width: 70px;"
                  >
                    <div
                      class="fotorama__thumb fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img"
                    >
                      <img
                        src="https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_8__gben_2.jpg?width=70&amp;height=90&amp;canvas=70,90&amp;optimize=low&amp;fit=bounds"
                        alt="iPhone 17 Pro Max 256GB Deep Blue - Whats in the box
"
                        class="fotorama__img"
                        aria-hidden="false"
                        width="70"
                        height="90"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="fotorama__thumb__arr fotorama__thumb__arr--right"
                role="button"
                aria-label="Next"
                data-gallery-role="arrow"
                tabindex="-1"
              >
                <div class="fotorama__thumb--icon"></div>
              </div>
            </div>
          </div>
          <div data-gallery-role="fotorama__focusable-end" tabindex="-1"></div>
        </div>
        <div
          class="magnifier-preview magnify-hidden"
          data-gallery-role="magnifier"
          id="preview"
          style="display: none;"
        ></div>
      </div>
      <div class="gallery-cta"><div class="fullscreen-img tesco-gallery-fullscreen-btn"></div></div>
      <div class="action-skip-wrapper">
        <a class="action skip gallery-prev-area" href="#gallery-prev-area"
          ><span> Skip to the beginning of the images gallery</span></a
        >
      </div>
      <a id="gallery-next-area" tabindex="-1"></a>
    </div>
    ${ProductPromos()}
  </div>
`;
