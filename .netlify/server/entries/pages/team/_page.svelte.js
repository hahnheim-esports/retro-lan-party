import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each, i as add_attribute } from "../../../chunks/index.js";
import { s as setClient, q as query, m as myclient, d as GET_TEAM } from "../../../chunks/queries.js";
import { L as Loader } from "../../../chunks/loader.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".innerContainer.svelte-17vsjbo.svelte-17vsjbo{display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 340px)\n}.memberContainer.svelte-17vsjbo.svelte-17vsjbo{display:grid;grid-template-columns:repeat(4, minmax(0, 1fr));gap:2.5rem\n}.memberContainer.svelte-17vsjbo .memberEntry.svelte-17vsjbo{display:flex;flex-direction:column;padding-top:2.5rem;padding-bottom:2.5rem\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $team, $$unsubscribe_team;
  setClient(myclient);
  const team = query(GET_TEAM);
  $$unsubscribe_team = subscribe(team, (value) => $team = value);
  $$result.css.add(css);
  $$unsubscribe_team();
  return `${$$result.head += `<!-- HEAD_svelte-cf17wx -->${$$result.title = `<title>Hahnheim eSports - Retro LAN Party - TEAM</title>`, ""}<!-- HEAD_svelte-cf17wx -->`, ""}

<section class="${"max-w-6xl mx-auto py-10"}">${$team.loading ? `<div class="${"innerContainer svelte-17vsjbo"}">${validate_component(Loader, "LOADER").$$render($$result, {}, {}, {})}</div>` : `${$team.error ? `<p>Ein Fehler ist aufgetreten: ${escape($team.error.message)}</p>` : `${$team.data ? `<h1>Unsder Team</h1>
    <div class="${"memberContainer  svelte-17vsjbo"}">${each($team.data["teamMembers"], (member) => {
    return `<div class="${"memberEntry svelte-17vsjbo"}">${member.image ? `<div class="${"memberImage"}"><img${add_attribute("src", member.image.url, 0)}${add_attribute("alt", member.image.caption, 0)}>
              ${member.image.caption ? `<div class="${"caption"}">${escape(member.image.caption)}</div>` : ``}
            </div>` : ``}
          <div class="${"newsContent"}"><h3>${escape(member.name)}</h3>
            <p>${escape(member.description)}</p></div>
        </div>`;
  })}</div>` : ``}`}`}
</section>`;
});
export {
  Page as default
};
