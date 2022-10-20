import { c as create_ssr_component } from "./index.js";
const loader_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loader-dual-ring.svelte-bzuswm{display:inline-block;width:110px;height:110px}.loader-dual-ring.svelte-bzuswm:after{content:'';display:block;width:88px;height:88px;margin:12px;border-radius:50%;border:10px solid var(--primary);border-color:var(--primary) transparent var(--primary) transparent;animation:svelte-bzuswm-dual-ring-spin 1.2s linear infinite}@keyframes svelte-bzuswm-dual-ring-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"loader-dual-ring svelte-bzuswm"}"></div>`;
});
export {
  Loader as L
};
