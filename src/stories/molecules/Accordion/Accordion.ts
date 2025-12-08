import { html } from 'lit';

export interface AccordionProps {
  heading?: string;
  content?: string;
  cols?: boolean;
  name?: string;
}

 export const Accordion = ({
  heading,
  content,
  cols,
  name,
 }: AccordionProps) => html`
 <div class="accordion ${cols? 'twocol' : ''}">
   <details name="${name}" class="accordion_details">
    <summary class="accordion_header">
      ${heading || 'Summary title'}
      <svg class="icon"><use xlink:href="./svg/sprite.svg#expand"></use></svg>
    </summary>
    <div class="accordion_content">
        <p>${content || 'Some content'}</p>
    </div>
  </details>
  <details name="${name}" class="accordion_details">
    <summary class="accordion_header">
      ${heading || 'Summary title'}
      <svg class="icon"><use xlink:href="./svg/sprite.svg#expand"></use></svg>
    </summary>
    <div class="accordion_content">
        <p>${content || 'Some content'}</p>
    </div>
  </details>
  <details name="${name}" class="accordion_details">
    <summary class="accordion_header">
      ${heading || 'Summary title'}
      <svg class="icon"><use xlink:href="./svg/sprite.svg#expand"></use></svg>
    </summary>
    <div class="accordion_content">
        <p>${content || 'Some content'}</p>
    </div>
  </details>
 </div>
 `;
