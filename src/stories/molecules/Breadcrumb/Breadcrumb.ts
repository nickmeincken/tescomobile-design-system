import { html } from 'lit';

export const Breadcrumb = () => html`
<div class="breadcrumb">
  <ol>
    <li>
      <a href="https://www.tescomobile.com/">
        Home
      </a>
    </li>
    <li>
      <a href="#">
        Level 2
      </a>
    </li>
    <li>
      <a href="#">
        Level 3
      </a>
    </li>
    <li>
      Level 4
    </li>
  </ol>
</div>
`;
