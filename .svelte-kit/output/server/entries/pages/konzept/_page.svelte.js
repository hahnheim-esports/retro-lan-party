import { c as create_ssr_component } from "../../../chunks/index.js";
import "axios";
import showdown from "showdown";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new showdown.Converter();
  return `${$$result.head += `<!-- HEAD_svelte-10pw22n -->${$$result.title = `<title>Hahnheim eSports - Retro LAN Party - KONZEPT</title>`, ""}<!-- HEAD_svelte-10pw22n -->`, ""}
<section class="${"max-w-6xl mx-auto py-10"}">${``}</section>`;
});
export {
  Page as default
};
