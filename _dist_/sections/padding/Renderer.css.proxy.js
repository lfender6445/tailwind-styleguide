
const code = ".swatch.svelte-u076z8.svelte-u076z8,.swatch-fill.svelte-u076z8.svelte-u076z8{width:32px;height:32px;border-top-left-radius:8px;border-bottom-left-radius:8px}table.svelte-u076z8.svelte-u076z8{width:100%}tbody.svelte-u076z8 tr.svelte-u076z8{border-bottom:1px solid var(--subtle-color)\n\t}thead.svelte-u076z8 td.svelte-u076z8{font-weight:600}td.svelte-u076z8.svelte-u076z8{padding:4px 8px}td.svelte-u076z8.svelte-u076z8:first-child{padding-left:0}.swatch.svelte-u076z8.svelte-u076z8{box-sizing:content-box;background-color:var(--less-subtle-color)}.swatch-fill.svelte-u076z8.svelte-u076z8{background-color:var(--primary-color)}.measurement.svelte-u076z8.svelte-u076z8{text-align:right}.unit.svelte-u076z8.svelte-u076z8{font-size:0.8rem;color:#999;display:inline-block;padding-left:4px}.description.svelte-u076z8.svelte-u076z8{margin-bottom:var(--common-gutter)}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);