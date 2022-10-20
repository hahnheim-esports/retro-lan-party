import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { L as Loader } from "../../chunks/loader.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-pwgujh_START -->${$$result.title = `<title>Hahnheim eSports</title>`, ""}<!-- HEAD_svelte-pwgujh_END -->`, ""}

<section><div class="${"innerContainer"}">${validate_component(Loader, "LOADER").$$render($$result, {}, {}, {})}</div></section>`;
});
export {
  Page as default
};
