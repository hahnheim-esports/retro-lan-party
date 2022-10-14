import { c as create_ssr_component } from "../../../chunks/index.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import "axios";
import showdown from "showdown";
dayjs.extend(relativeTime);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-1ynghuh{padding-bottom:0.5rem}.imageContainer.svelte-1ynghuh{display:flex;align-items:center;justify-content:flex-end}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new showdown.Converter();
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1bgjjbs -->${$$result.title = `<title>Hahnheim eSports - Retro LAN Party - TERMINE</title>`, ""}<!-- HEAD_svelte-1bgjjbs -->`, ""}

<section class="${"max-w-6xl mx-auto py-10"}"><h1>Unsere Termine f\xFCr 2022</h1>
  <div class="${"spacer"}"></div>
  <div class="${"grid grid-cols-5 gap-5"}"><div class="${"col-span-2"}">${``}</div>
    <div class="${"col-span-3 imageContainer svelte-1ynghuh"}"><img src="${"termine.webp"}" alt="${"Termine"}"></div></div>
</section>`;
});
export {
  Page as default
};
