import { html } from 'lit';
import { ClubCardStripe } from '../../atoms/ClubCard/ClubCard';
import { Label } from '../../atoms/Label/Label';
import { SwatchItem } from '../../atoms/Swatches/SwatchItem';
import { TextWithIcon } from '../../atoms/TextWithIcon/TextWithIcon';

export interface ProductItemProps {
  brand?: string;
  product?: string;
  productImg?: string;
  price?: string;
  productURL?: string;
  contractLength?: string;
}

export const ProductItem = ({
  brand,
  product,
  productImg,
  price,
  productURL,
  contractLength
}:ProductItemProps) => html`
<div class="product-item has-promo-labels" itemprop="itemListElement" data-contract="AUSTANDARD,AUIMMEDIATE,PAYG,SIM Free" itemscope="" itemtype="http://schema.org/ListItem">
  <meta itemprop="position" content="1" />
  <div class="result-wrapper" itemprop="item" itemscope="" itemtype="http://schema.org/Product">
    <meta itemprop="url" content="${productURL || '/shop/apple/iphone-17-pro-max'}" />
    <div class="result-content">
      <div class="result-pre-content">
        <div class="result-content__row">
          <div class="result-promotion-top-line"></div>
        </div>
        <div class="product-title-holder">
          <div class="product-title-holder__title-wrapper">
            <div class="product-item-brand">${brand || 'Apple'}</div>
            <h3 itemprop="name" class="result-title">${product || 'iPhone 17 Pro Max'}</h3>
          </div>
          <div class="promotions">
            ${Label({title: 'Offer', classType: 'offer'})}
            ${Label({title: 'New', classType: 'new'})}
          </div>
        </div>
      </div>
      <div class="result-thumbnail">
        <div class="spinning-loader" style="display: none"></div>
        <img
          itemprop="image"
          src="${productImg || 'https://www.tescomobile.com/media/catalog/product/i/p/iphone_17_pro_max_deep_blue_pdp_image_position_1__gben_3.png?width=265&amp;height=265&amp;canvas=265,265&amp;optimize=low&amp;fit=bounds'}"
          alt="${product || 'iPhone 17 Pro Max'}"
          width="206"
          height="265"
          fetchpriority="high"
          loading="eager"
        />
        <div class="product-item-swatches">
          ${SwatchItem({ swatchColour: '#eaeaed' })}
          ${SwatchItem({ swatchColour: '#3d8cc7' })}
          ${SwatchItem({ swatchColour: '#ffa600' })}
          <div class="icon icon-add"></div>
        </div>
      </div>
      <div class="result-lower-content">
        <div class="ratings">
          <div class="result-sub-content">
            <span class="offers-text">From</span>
            <div itemprop="offers" itemscope="" itemtype="http://schema.org/Offer" class="price">
              <meta itemprop="price" content="${price || '48.49'}" />
              <meta itemprop="priceCurrency" content="GBP" />
              <div class="price-wrapper">
                <div>£${price || '48.49'}</div>
              </div>
            </div>
            <span class="offers-text"> a month</span>
            <div class="deal-contract-length">
              <p>${contractLength || '36-month contract'}</p>
            </div>
          </div>
          <div class="contract">
            with a phone credit contract <b>0% APR</b>
          </div>
        </div>
        ${ClubCardStripe({
          title: 'Clubcard Prices available on selected deals'
        })}
        <div class="promo-bottom-holder">
          <div class="product-item-promo">
            <svg class="icon"><use xlink:href="./svg/sprite.svg#offers"></use></svg>
            <svg class="icon"><use xlink:href="./svg/sprite.svg#apple"></use></svg>
            <svg class="icon"><use xlink:href="./svg/sprite.svg#apple"></use></svg>
            <span class="text">
              7 offers available <span class="details">see details</span>
            </span>
            <div class="product-item-dialog">
              <div class="close"><svg class="icon"><use xlink:href="./svg/sprite.svg#close"></use></svg></div>
              <div class="title">Offers</div>
              ${TextWithIcon({ icon: 'offers', text: 'No EU roaming fees'})}
              ${TextWithIcon({ icon: 'apple', text: 'Get 3 months of Apple Fitness+ free when you buy any new Apple iPhone'})}
              ${TextWithIcon({ icon: 'apple', text: 'Get 3 months of Apple TV+ free when you buy any new Apple iPhone'})}
              ${TextWithIcon({ icon: 'apple', text: 'Get 3 months free Apple Music'})}
              ${TextWithIcon({ icon: 'apple', text: 'Get 3 months of Apple Arcade free when you buy an Apple device'})}
              ${TextWithIcon({ icon: 'apple', text: 'Get 3 months of Apple News+'})}
              ${TextWithIcon({ icon: 'offers', text: 'Clubcard Prices – Frozen for your contract'})}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
  const el = document.querySelector('.product-item-promo');
  const handleToggle = () => el.classList.toggle('active');

  el.onclick = () => handleToggle();
</script>
`;
