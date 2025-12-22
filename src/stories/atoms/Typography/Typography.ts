import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

export interface TypeProps {
  heading?: string;
  content?: string;
  display?: 'display-1' | 'display-2' | 'display-3';
  style?: 'font-sm' | 'font-md' | 'font-lg' | 'font-xl' | 'font-xxl';
}


export const Display1 = ({ heading, display }:TypeProps) => {
  return html`<h1 class="${display || 'display-1'}">${heading || 'Display One'}</h1>`;
}

export const Display2 = ({ heading, display }:TypeProps) => {
  return html`<h1 class="${display || 'display-2'}">${heading || 'Display Two'}</h1>`;
}

export const Display3 = ({ heading, display }:TypeProps) => {
  return html`<h1 class="${display || 'display-3'}">${heading || 'Display Three'}</h1>`;
}

export const Head1 = ({ heading }:TypeProps) => {
  return html`<h1>${heading || 'heading1'}</h1>`;
}

export const Head2 = ({ heading }:TypeProps) => {
  return html`<h2>${heading || 'heading2'}</h2>`;
}

export const Head3 = ({ heading }:TypeProps) => {
  return html`<h3>${heading || 'heading3'}</h3>`;
}

export const Head4 = ({ heading }:TypeProps) => {
  return html`<h4>${heading || 'heading4'}</h4>`;
}

export const Head5 = ({ heading }:TypeProps) => {
  return html`<h5>${heading || 'heading5'}</h5>`;
}

export const Head6 = ({ heading }:TypeProps) => {
  return html`<h6>${heading || 'heading6'}</h6>`;
}

export const Para = ({ content, style }:TypeProps) => {
  return html`<p class=${ifDefined(style)}>${unsafeHTML(content)}</p>`;
}
