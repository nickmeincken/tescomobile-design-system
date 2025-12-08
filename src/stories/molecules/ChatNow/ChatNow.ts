import { html } from 'lit';
import { Button } from '../../atoms/Button/Button';

export const ChatNow = () => html`
  <div class="chatnow">
    <a class="close" href="#">
      <svg class="icon"><use xlink:href="./svg/sprite.svg#close"></use></svg>
      <span class="visually-hidden">close</span>
    </a>
    <div class="chatnow_content">
      <svg class="mx-3"><use xlink:href="./svg/sprite.svg#comments"></use></svg>
      <h5 class="mb-3">Need help?</h5>
      <p>Chat with our experts</p>
    </div>
    ${Button({
      hierachy: 'secondary',
      size: 'md',
      label: 'Chat now'
    })}
  </div>
`;
