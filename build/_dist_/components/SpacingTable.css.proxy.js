
const code = "em.svelte-1avbn07{font-style:normal}.table.svelte-1avbn07{display:grid;grid-template-columns:1fr 1fr 6fr;align-items:stretch}.cell.svelte-1avbn07{display:flex;align-items:center;padding:4px 8px;border-bottom:1px solid var(--subtle-color)}.cell.svelte-1avbn07:nth-child(3n - 2){padding-left:0}.cell.svelte-1avbn07:nth-child(3n){padding-right:0}.heading.svelte-1avbn07{font-weight:600}.measurement.svelte-1avbn07{text-align:right}.cell.heading.svelte-1avbn07{border:none}.cell.measurement.svelte-1avbn07{justify-content:flex-end}.cell.slot.svelte-1avbn07{overflow:hidden}.unit.svelte-1avbn07{font-size:0.8rem;color:#999;display:inline-block;padding-left:4px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);