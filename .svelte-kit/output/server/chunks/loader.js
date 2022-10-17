import { c as create_ssr_component } from "./index.js";
const loader_svelte_svelte_type_style_lang = "";
const css = {
  code: ".loader-dual-ring.svelte-rkz4mp{display:inline-block;opacity:0.9;width:80px;height:80px}.loader-dual-ring.svelte-rkz4mp:after{content:'';display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #363acc;border-color:#363acc transparent #363acc transparent;animation:svelte-rkz4mp-dual-ring-spin 1.2s linear infinite}@keyframes svelte-rkz4mp-dual-ring-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"loader-dual-ring svelte-rkz4mp"}"></div>`;
});
export {
  Loader as L
};
