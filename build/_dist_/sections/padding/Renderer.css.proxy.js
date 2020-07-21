
const code = "table.svelte-2nse5c.svelte-2nse5c{width:auto}thead.svelte-2nse5c.svelte-2nse5c{font-weight:600;color:#999}tbody.svelte-2nse5c tr.svelte-2nse5c{border-bottom:1px solid #EFEFEF}tbody.svelte-2nse5c td.svelte-2nse5c{padding:8px 0}.measure.svelte-2nse5c.svelte-2nse5c{font-weight:600;padding-right:16px;text-align:right}.unit.svelte-2nse5c.svelte-2nse5c{color:#333;font-weight:normal;font-size:0.8rem}.block.svelte-2nse5c.svelte-2nse5c{background-color:#CCC;height:24px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);