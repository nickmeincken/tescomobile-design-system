import { html } from 'lit';
import { AccordionItem } from '../../molecules/AccordionItem/AccordionItem';
export interface AccordionProps {
  cols?: boolean;
}

 export const Accordion = ({
  cols,
 }: AccordionProps) => html`
 <div class="accordion ${cols? 'twocol' : ''}">
    ${AccordionItem({
      heading: 'Card Heading',
      content: 'lorem ipsum dolor',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'Card Heading',
      content: 'lorem ipsum dolor',
      name: 'faq'
    })}
    ${AccordionItem({
      heading: 'Card Heading',
      content: 'lorem ipsum dolor',
      name: 'faq'
    })}
 </div>
 `;
