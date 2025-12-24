import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

export interface AccordionProps {
  heading?: string;
  content?: string;
  name?: string;
}

 export const AccordionItem = ({
  heading,
  content,
  name,
 }: AccordionProps) => html`
<details name="${ifDefined(name)}" class="accordion_details">
  <summary class="accordion_header">
    ${heading || 'Summary title'}
    <svg class="icon"><use xlink:href="./svg/sprite.svg#expand"></use></svg>
  </summary>
  <div class="accordion_content">
      <p>${content || 'Some content'}</p>
  </div>
</details>
 `;
