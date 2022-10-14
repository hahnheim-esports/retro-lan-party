import { c as create_ssr_component, b as subscribe, e as escape, d as null_to_empty, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs{position:sticky;top:0px;background-color:#363acc;opacity:0.9;width:100%;height:80px;filter:drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));z-index:9999}header.svelte-1eqc7xs section.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs{margin-left:auto;margin-right:auto;max-width:72rem;height:100%}header.svelte-1eqc7xs section .logoArea.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs{height:80px;width:80px;padding:0.75rem;position:absolute}header.svelte-1eqc7xs section nav.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs{width:100%}@media(min-width: 640px){header.svelte-1eqc7xs section nav.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs{max-width:640px}}@media(min-width: 768px){header.svelte-1eqc7xs section nav.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs{max-width:768px}}@media(min-width: 1024px){header.svelte-1eqc7xs section nav.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs{max-width:1024px}}@media(min-width: 1280px){header.svelte-1eqc7xs section nav.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs{max-width:1280px}}@media(min-width: 1536px){header.svelte-1eqc7xs section nav.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs{max-width:1536px}}header.svelte-1eqc7xs section nav.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs{margin-left:auto;margin-right:auto;display:flex;justify-content:center;align-items:center;height:100%}header.svelte-1eqc7xs section nav ul.svelte-1eqc7xs.svelte-1eqc7xs.svelte-1eqc7xs{list-style-type:none}header.svelte-1eqc7xs section nav ul.svelte-1eqc7xs>li.svelte-1eqc7xs.svelte-1eqc7xs{display:inline-block}header.svelte-1eqc7xs section nav ul.svelte-1eqc7xs>li.svelte-1eqc7xs>a.svelte-1eqc7xs{color:white;padding:0.25rem;margin:0.5rem 1.5rem;transition:all 0.3s ease;border-bottom:3px solid transparent}header.svelte-1eqc7xs section nav ul.svelte-1eqc7xs>li.svelte-1eqc7xs>a.svelte-1eqc7xs:hover,header.svelte-1eqc7xs section nav ul.svelte-1eqc7xs>li.svelte-1eqc7xs>a.active.svelte-1eqc7xs{border-bottom:2px solid white}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<header class="${"svelte-1eqc7xs"}"><section class="${"svelte-1eqc7xs"}"><div class="${"logoArea svelte-1eqc7xs"}"><a href="${"/"}"><img src="${"esports-logo.webp"}" alt="${"Retro LAN Party"}"></a></div>
    <nav class="${"svelte-1eqc7xs"}"><ul class="${"svelte-1eqc7xs"}"><li class="${"svelte-1eqc7xs"}"><a href="${"/news"}" class="${escape(null_to_empty($page.routeId === "news" ? "active" : ""), true) + " svelte-1eqc7xs"}">News</a></li>
        <li class="${"svelte-1eqc7xs"}"><a href="${"/termine"}" class="${escape(null_to_empty($page.routeId === "termine" ? "active" : ""), true) + " svelte-1eqc7xs"}">Termine</a></li>
        <li class="${"svelte-1eqc7xs"}"><a href="${"/team"}" class="${escape(null_to_empty($page.routeId === "team" ? "active" : ""), true) + " svelte-1eqc7xs"}">Team</a></li>
        <li class="${"svelte-1eqc7xs"}"><a href="${"/konzept"}" class="${escape(null_to_empty($page.routeId === "konzept" ? "active" : ""), true) + " svelte-1eqc7xs"}">Konzept</a></li></ul></nav></section>
</header>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-zrkmwm.svelte-zrkmwm{background-color:#363acc;opacity:0.9;width:100%;height:180px;z-index:9999}footer.svelte-zrkmwm section a.svelte-zrkmwm{color:white}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-zrkmwm"}"><section class="${"max-w-6xl mx-auto py-10"}"><a href="${"/impressum"}" class="${"svelte-zrkmwm"}">Impressum</a></section>
</footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mainContentContainer.svelte-1if0rfl{min-height:calc(100vh - 260px)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "HEADER").$$render($$result, {}, {}, {})}

<div class="${"mainContentContainer svelte-1if0rfl"}">${slots.default ? slots.default({}) : ``}</div>

${validate_component(Footer, "FOOTER").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
