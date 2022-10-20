import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, i as each } from "../../../chunks/index.js";
import { s as setClient, q as query, m as myclient, a as GET_CONTENT_IMPRINT } from "../../../chunks/queries.js";
import showdown from "showdown";
import { L as Loader } from "../../../chunks/loader.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $contentSnippets, $$unsubscribe_contentSnippets;
  setClient(myclient);
  const contentSnippets = query(GET_CONTENT_IMPRINT);
  $$unsubscribe_contentSnippets = subscribe(contentSnippets, (value) => $contentSnippets = value);
  let converter = new showdown.Converter();
  function convertMarkDown(input) {
    return converter.makeHtml(input);
  }
  $$unsubscribe_contentSnippets();
  return `${$$result.head += `<!-- HEAD_svelte-7ywfs1_START -->${$$result.title = `<title>Hahnheim eSports - Retro LAN Party - IMPRESSUM</title>`, ""}<!-- HEAD_svelte-7ywfs1_END -->`, ""}

<section>${$contentSnippets.loading ? `<div class="${"innerContainer"}">${validate_component(Loader, "LOADER").$$render($$result, {}, {}, {})}</div>` : `${$contentSnippets.error ? `<p>Ein Fehler ist aufgetreten: ${escape($contentSnippets.error.message)}</p>` : `${$contentSnippets.data ? `<div class="${"contentContainer "}">${each($contentSnippets.data["contentSnippets"], (snippet) => {
    return `<h1>${escape(snippet.headline)}</h1>
        <div class="${"spacer"}"></div>
        <div class="${"markupContent"}"><!-- HTML_TAG_START -->${convertMarkDown(snippet.content)}<!-- HTML_TAG_END --></div>`;
  })}</div>` : ``}`}`}</section>`;
});
export {
  Page as default
};
