import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, i as each, d as null_to_empty } from "../../../chunks/index.js";
import { s as setClient, q as query, m as myclient, e as GET_APPOINTMENTS } from "../../../chunks/queries.js";
import { T as Time } from "../../../chunks/Time.js";
import { L as Loader } from "../../../chunks/loader.js";
const contactWidget_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".outerContactWidgetContainer.svelte-1ar7pqp.svelte-1ar7pqp{width:100%;background:var(--secondary)}.outerContactWidgetContainer.svelte-1ar7pqp .innerContactWidgetContainer.svelte-1ar7pqp{margin-left:auto;margin-right:auto;max-width:80rem;padding:4rem 0 2.5rem 0}.outerContactWidgetContainer.svelte-1ar7pqp .innerContactWidgetContainer .contactData.svelte-1ar7pqp{padding:0 15%}.outerContactWidgetContainer.svelte-1ar7pqp .innerContactWidgetContainer .contactData h2.svelte-1ar7pqp,.outerContactWidgetContainer.svelte-1ar7pqp .innerContactWidgetContainer .contactData p.svelte-1ar7pqp,.outerContactWidgetContainer.svelte-1ar7pqp .innerContactWidgetContainer .contactData a.svelte-1ar7pqp{color:#ffffff}",
  map: null
};
const Contact_widget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"outerContactWidgetContainer svelte-1ar7pqp"}"><div class="${"innerContactWidgetContainer svelte-1ar7pqp"}"><div class="${"contactData svelte-1ar7pqp"}"><h2 class="${"svelte-1ar7pqp"}">Kontakt</h2>
      <p class="${"svelte-1ar7pqp"}">Tim Kandel<br>
        Tel.: 0176 6334 3433
      </p>
      <p class="${"svelte-1ar7pqp"}">Email: <a href="${"mailt:esportshahnheim@gmx.de"}" class="${"svelte-1ar7pqp"}">esportshahnheim@gmx.de</a></p></div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".appointmentContainer.svelte-ycye5r.svelte-ycye5r{padding-bottom:2rem}.appointmentContainer.svelte-ycye5r h3.svelte-ycye5r{padding:0}.appointmentContainer.svelte-ycye5r h3.futurDate.svelte-ycye5r{color:var(--grey)}.appointmentContainer.svelte-ycye5r p.svelte-ycye5r{padding:0;font-size:1.25rem}.appointmentContainer.svelte-ycye5r p.appointmentName.svelte-ycye5r{padding:0.25rem 0}img.fluidImage.svelte-ycye5r.svelte-ycye5r{width:100%;height:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $appointments, $$unsubscribe_appointments;
  setClient(myclient);
  const appointments = query(GET_APPOINTMENTS);
  $$unsubscribe_appointments = subscribe(appointments, (value) => $appointments = value);
  $$result.css.add(css);
  $$unsubscribe_appointments();
  return `${$$result.head += `<!-- HEAD_svelte-1bgjjbs_START -->${$$result.title = `<title>Hahnheim eSports - Retro LAN Party - TERMINE</title>`, ""}<!-- HEAD_svelte-1bgjjbs_END -->`, ""}

<section>${$appointments.loading ? `<div class="${"innerContainer"}">${validate_component(Loader, "LOADER").$$render($$result, {}, {}, {})}</div>` : `${$appointments.error ? `<p>Ein Fehler ist aufgetreten: ${escape($appointments.error.message)}</p>` : `${$appointments.data ? `<h1>Unsere Termine f\xFCr 2022</h1>
    <div class="${"spacer"}"></div>
    <div class="${"grid grid-cols-5 gap-5"}"><div class="${"col-span-2 "}">${each($appointments.data["appointments"], ({ name, description, date, pastEvent }) => {
    return `<div class="${"appointmentContainer svelte-ycye5r"}"><h3 class="${escape(null_to_empty(!pastEvent ? "futurDate" : ""), true) + " svelte-ycye5r"}">${validate_component(Time, "Time").$$render($$result, { timestamp: date, format: "DD.MM.YYYY" }, {}, {})}</h3>
            ${name ? `<p class="${"appointmentName svelte-ycye5r"}">${escape(name)}</p>` : ``}
            ${description ? `<p class="${"appointmentDescription svelte-ycye5r"}">${escape(description)}</p>` : ``}
          </div>`;
  })}</div>
      <div class="${"col-span-3 flex justify-end items-center"}"><img src="${"https://media.graphassets.com/qxgnZYoAR6wuw6OAyZdU"}" alt="${"Termine"}" class="${"fluidImage svelte-ycye5r"}"></div></div>` : ``}`}`}</section>
${validate_component(Contact_widget, "CONTACTWIDGET").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
