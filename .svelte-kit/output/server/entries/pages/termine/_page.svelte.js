import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each } from "../../../chunks/index.js";
import { s as setClient, q as query, m as myclient, e as GET_APPOINTMENTS } from "../../../chunks/queries.js";
import { T as Time } from "../../../chunks/Time.js";
import { L as Loader } from "../../../chunks/loader.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".innerContainer.svelte-5a5vey{display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 340px)}h3.svelte-5a5vey{padding-bottom:0.5rem}.imageContainer.svelte-5a5vey{display:flex;align-items:center;justify-content:flex-end}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $appointments, $$unsubscribe_appointments;
  setClient(myclient);
  const appointments = query(GET_APPOINTMENTS);
  $$unsubscribe_appointments = subscribe(appointments, (value) => $appointments = value);
  $$result.css.add(css);
  $$unsubscribe_appointments();
  return `${$$result.head += `<!-- HEAD_svelte-1bgjjbs -->${$$result.title = `<title>Hahnheim eSports - Retro LAN Party - TERMINE</title>`, ""}<!-- HEAD_svelte-1bgjjbs -->`, ""}

<section class="${"max-w-6xl mx-auto py-10"}">${$appointments.loading ? `<div class="${"innerContainer svelte-5a5vey"}">${validate_component(Loader, "LOADER").$$render($$result, {}, {}, {})}</div>` : `${$appointments.error ? `<p>Ein Fehler ist aufgetreten: ${escape($appointments.error.message)}</p>` : `${$appointments.data ? `<h1>Unsere Termine f\xFCr 2022</h1>
    <div class="${"spacer"}"></div>
    <div class="${"grid grid-cols-5 gap-5"}"><div class="${"col-span-2"}">${each($appointments.data.appointments, ({ name, description, date }) => {
    return `<h3 class="${"svelte-5a5vey"}">${validate_component(Time, "Time").$$render($$result, { timestamp: date, format: "DD.MM.YYYY" }, {}, {})}</h3>
          ${name ? `<p>${escape(name)}</p>` : ``}
          ${description ? `<p>${escape(description)}</p>` : ``}`;
  })}</div>
      <div class="${"col-span-3 imageContainer svelte-5a5vey"}"><img src="${"termine.webp"}" alt="${"Termine"}"></div></div>` : ``}`}`}
</section>`;
});
export {
  Page as default
};
