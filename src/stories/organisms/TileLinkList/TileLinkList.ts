import { html } from "lit";
import { TileLinkItem } from "../../molecules/TileLinkItem/TileLinkItem";

export interface PageProps {}

export const TileLinkList = () => html`
<div class="cmp tilelink">
  ${TileLinkItem()}
  ${TileLinkItem()}
  ${TileLinkItem()}
  ${TileLinkItem()}
  ${TileLinkItem()}
  ${TileLinkItem()}
  ${TileLinkItem()}
  ${TileLinkItem()}
  ${TileLinkItem()}
</div>

`;
