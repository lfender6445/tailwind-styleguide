
const code = ".styleguide-section.svelte-1f566k2.svelte-1f566k2{display:flex;margin-bottom:var(--section-margin)}.styleguide-section.svelte-1f566k2.svelte-1f566k2:last-of-type{margin-bottom:0}.left.svelte-1f566k2.svelte-1f566k2{width:var(--left-column-width);margin-right:var(--common-gutter);position:relative}.sticky.svelte-1f566k2.svelte-1f566k2{position:sticky;top:var(--common-gutter)}.right.svelte-1f566k2.svelte-1f566k2{flex:1}h2.svelte-1f566k2.svelte-1f566k2{font-size:2rem;font-weight:800}em.svelte-1f566k2.svelte-1f566k2{font-style:normal;color:#999}.variants.svelte-1f566k2.svelte-1f566k2{display:flex;flex-wrap:wrap;margin-top:10px}.variants.svelte-1f566k2 li.svelte-1f566k2{padding:4px 12px;font-size:0.8rem;margin-right:8px;margin-bottom:8px;background-color:var(--primary-color);color:#FFF;font-weight:600;border-radius:12px;border-top-left-radius:0;box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05)}@media(max-width: 768px){.styleguide-section.svelte-1f566k2.svelte-1f566k2{flex-direction:column}.left.svelte-1f566k2.svelte-1f566k2{flex:1;width:auto;margin:0 0 var(--common-gutter) 0}}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);