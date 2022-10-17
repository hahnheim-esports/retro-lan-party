import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, h as each, i as add_attribute } from "../../../chunks/index.js";
import { s as setClient, q as query, m as myclient, c as GET_NEWS } from "../../../chunks/queries.js";
import { T as Time } from "../../../chunks/Time.js";
import { L as Loader } from "../../../chunks/loader.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".innerContainer.svelte-ha0vb2.svelte-ha0vb2{display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 340px)}.newsContainer.svelte-ha0vb2.svelte-ha0vb2{display:flex;flex-direction:column}.newsContainer.svelte-ha0vb2 .newsEntry.svelte-ha0vb2{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:2.5rem;padding-top:2.5rem;padding-bottom:2.5rem}.newsContainer.svelte-ha0vb2 .newsEntry .date.svelte-ha0vb2{font-size:1rem;opacity:0.6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $news, $$unsubscribe_news;
  setClient(myclient);
  const news = query(GET_NEWS);
  $$unsubscribe_news = subscribe(news, (value) => $news = value);
  $$result.css.add(css);
  $$unsubscribe_news();
  return `${$$result.head += `<!-- HEAD_svelte-tsnur7 -->${$$result.title = `<title>Hahnheim eSports - Retro LAN Party - NEWS</title>`, ""}<!-- HEAD_svelte-tsnur7 -->`, ""}

<section class="${"max-w-6xl mx-auto py-10"}">${$news.loading ? `<div class="${"innerContainer svelte-ha0vb2"}">${validate_component(Loader, "LOADER").$$render($$result, {}, {}, {})}</div>` : `${$news.error ? `<p>Ein Fehler ist aufgetreten: ${escape($news.error.message)}</p>` : `${$news.data ? `<h1>Die aktuellsten News</h1>
    <div class="${"newsContainer  svelte-ha0vb2"}">${each($news.data["newsEntries"], (entry) => {
    var _a;
    return `<div class="${"newsEntry svelte-ha0vb2"}"><div class="${"newsContent"}"><h3>${escape(entry.title)}</h3>
            <p class="${"date svelte-ha0vb2"}">${validate_component(Time, "Time").$$render(
      $$result,
      {
        timestamp: entry.published,
        format: "DD.MM.YYYY - HH:mm"
      },
      {},
      {}
    )}</p>
            <p>${escape(entry.copy)}</p></div>
          ${((_a = entry.newsImages) == null ? void 0 : _a.length) ? `<div class="${"newsImage"}"><img${add_attribute("src", entry.newsImages[0].url, 0)}${add_attribute("alt", entry.newsImages[0].caption, 0)}>
              ${entry.newsImages[0].caption ? `<div class="${"caption"}">${escape(entry.newsImages[0].caption)}</div>` : ``}
            </div>` : ``}
        </div>`;
  })}</div>` : ``}`}`}
</section>`;
});
export {
  Page as default
};
