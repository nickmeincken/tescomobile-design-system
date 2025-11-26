import{T as m,x as d}from"./iframe-tFOvUPk9.js";import"./preload-helper-PPVm8Dsz.js";const p={ATTRIBUTE:1},y=s=>(...t)=>({_$litDirective$:s,values:t});let b=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const u="important",g=" !"+u,h=y(class extends b{constructor(s){if(super(s),s.type!==p.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce(((t,e)=>{const r=s[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(s,[t]){const{style:e}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?e.removeProperty(r):e[r]=null);for(const r in t){const o=t[r];if(o!=null){this.ft.add(r);const n=typeof o=="string"&&o.endsWith(g);r.includes("-")||n?e.setProperty(r,n?o.slice(0,-11):o,n?u:""):e[r]=o}}return m}}),_=({primary:s,backgroundColor:t,size:e,label:r,onClick:o})=>{const n=s?"storybook-button--primary":"storybook-button--secondary";return d`
    <button
      type="button"
      class=${["storybook-button",`storybook-button--${e||"medium"}`,n].join(" ")}
      style=${h({backgroundColor:t})}
      @click=${o}
    >
      ${r}
    </button>
  `},{fn:$}=__STORYBOOK_MODULE_TEST__,T={title:"Design System/Atoms/Button",tags:["autodocs"],render:s=>_(s),argTypes:{size:{control:{type:"select"},options:["small","medium","large"]}},args:{onClick:$()}},a={args:{primary:!0,label:"Button"}},c={args:{label:"Button"}},i={args:{size:"large",label:"Button"}},l={args:{size:"small",label:"Button"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...l.parameters?.docs?.source}}};const A=["Primary","Secondary","Large","Small"];export{i as Large,a as Primary,c as Secondary,l as Small,A as __namedExportsOrder,T as default};
