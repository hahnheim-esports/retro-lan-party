import { c as create_ssr_component, v as validate_component, m as missing_component, i as each, f as add_attribute, b as subscribe, e as escape } from "../../../chunks/index.js";
import { s as setClient, q as query, m as myclient, c as GET_NEWS } from "../../../chunks/queries.js";
import { T as Time } from "../../../chunks/Time.js";
import { L as Loader } from "../../../chunks/loader.js";
const carousel_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".carouselContainer.svelte-kude9b.svelte-kude9b{width:100%;max-height:800px;background:var(--secondary);padding:50px 0;--sc-color-rgb-light:#ffffff}.carouselContainer.svelte-kude9b .carouselInner.svelte-kude9b{margin-left:auto;margin-right:auto;max-width:80rem;max-height:690px}.carouselContainer.svelte-kude9b .carouselInner .imageWrapper.svelte-kude9b{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.carouselContainer.svelte-kude9b .carouselInner .imageWrapper img.svelte-kude9b{max-height:690px;height:auto;width:auto}.carouselContainer.svelte-kude9b .carouselInner div.icon.svelte-kude9b{width:50px;height:50px}.carouselContainer.svelte-kude9b .carouselInner div.icon.svelte-kude9b:hover{opacity:0.75}.carouselContainer.svelte-kude9b .carouselInner div.icon.leftArrow.svelte-kude9b{background-image:url(../lib/assets/left-arrow.svg)}.carouselContainer.svelte-kude9b .carouselInner div.icon.rightArrow.svelte-kude9b{background-image:url(../lib/assets/right-arrow.svg)}",
  map: null
};
const Carousel_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const sliderItems = [
    {
      title: "eSports Slider Image 01",
      url: "https://media.graphassets.com/wnf1leIRFKh0GPrbSqMA"
    },
    {
      title: "eSports Slider Image 02",
      url: "https://media.graphassets.com/GnkkjphYQbmqRXyLg9xB"
    },
    {
      title: "eSports Slider Image 03",
      url: "https://media.graphassets.com/uNsZZd5kRtPj9LZ08afg"
    },
    {
      title: "eSports Slider Image 04",
      url: "https://media.graphassets.com/T4VGdaZzRjmm0ZfCTJFW"
    },
    {
      title: "eSports Slider Image 05",
      url: "https://media.graphassets.com/XahyeN4iQVuTF74C1Gjh"
    },
    {
      title: "eSports Slider Image 06",
      url: "https://media.graphassets.com/4HLzpuvtTyKIpW42gEMp"
    }
  ];
  $$result.css.add(css$1);
  return `<div class="${"carouselContainer fade-in svelte-kude9b"}"><div class="${"carouselInner svelte-kude9b"}">${validate_component(missing_component, "svelte:component").$$render($$result, { autoplay: "true" }, {}, {
    next: ({ showPrevPage, showNextPage }) => {
      return `<button type="${"button"}" slot="${"next"}"><div class="${"icon rightArrow svelte-kude9b"}"></div></button>`;
    },
    prev: ({ showPrevPage, showNextPage }) => {
      return `<button type="${"button"}" slot="${"prev"}"><div class="${"icon leftArrow svelte-kude9b"}"></div></button>`;
    },
    default: ({ showPrevPage, showNextPage }) => {
      return `${each(sliderItems, (item) => {
        return `<div class="${"imageWrapper fade-in svelte-kude9b"}"><img${add_attribute("src", item.url, 0)}${add_attribute("alt", item.title, 0)} class="${"fade-in svelte-kude9b"}">
        </div>`;
      })}`;
    }
  })}</div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".newsContainer.svelte-rygnj1.svelte-rygnj1{display:flex;flex-direction:column}.newsContainer.svelte-rygnj1 .newsEntry.svelte-rygnj1{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:2.5rem;padding-top:2.5rem;padding-bottom:2.5rem;border-top:1px solid var(--grey)}.newsContainer.svelte-rygnj1 .newsEntry h3.svelte-rygnj1,.newsContainer.svelte-rygnj1 .newsEntry p.svelte-rygnj1{padding:0}.newsContainer.svelte-rygnj1 .newsEntry .date.svelte-rygnj1{font-size:1rem;color:var(--dark-grey);padding:0.25rem 0 1.25rem 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $news, $$unsubscribe_news;
  setClient(myclient);
  const news = query(GET_NEWS);
  $$unsubscribe_news = subscribe(news, (value) => $news = value);
  $$result.css.add(css);
  $$unsubscribe_news();
  return `${$$result.head += `<!-- HEAD_svelte-tsnur7_START -->${$$result.title = `<title>Hahnheim eSports - Retro LAN Party - NEWS</title>`, ""}<!-- HEAD_svelte-tsnur7_END -->`, ""}

${validate_component(Carousel_1, "CAROUSEL").$$render($$result, {}, {}, {})}

<section>${$news.loading ? `<div class="${"innerContainer"}">${validate_component(Loader, "LOADER").$$render($$result, {}, {}, {})}</div>` : `${$news.error ? `<p>Ein Fehler ist aufgetreten: ${escape($news.error.message)}</p>` : `${$news.data ? `<h1>Die aktuellsten News</h1>
    <div class="${"newsContainer  svelte-rygnj1"}">${each($news.data["newsEntries"], (entry) => {
    var _a;
    return `<div class="${"newsEntry svelte-rygnj1"}"><div class="${"newsContent"}"><h3 class="${"svelte-rygnj1"}">${escape(entry.title)}</h3>
            <p class="${"date svelte-rygnj1"}">Ver\xF6ffentlicht: ${validate_component(Time, "Time").$$render(
      $$result,
      {
        timestamp: entry.published,
        format: "DD.MM.YYYY - HH:mm"
      },
      {},
      {}
    )}</p>
            ${entry.copy ? `<p class="${"svelte-rygnj1"}">${escape(entry.copy)}</p>` : ``}</div>
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
