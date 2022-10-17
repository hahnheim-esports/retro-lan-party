import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { L as Loader } from "../../chunks/loader.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".innerContainer.svelte-1s7p2jv{display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 340px)\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-pwgujh -->${$$result.title = `<title>Hahnheim eSports</title>`, ""}<!-- HEAD_svelte-pwgujh -->`, ""}

<section class="${"max-w-6xl mx-auto py-10"}"><div class="${"innerContainer svelte-1s7p2jv"}">${validate_component(Loader, "LOADER").$$render($$result, {}, {}, {})}</div>
</section>`;
});
export {
  Page as default
};
