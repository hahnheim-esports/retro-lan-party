import { c as create_ssr_component, b as subscribe, e as escape, d as null_to_empty, f as createEventDispatcher, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import "js-cookie";
const app = "";
const header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{position:sticky;top:0px;background-color:#363acc;opacity:0.9;width:100%;height:80px;filter:drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));z-index:9999}header.svelte-1yn6tb2 section.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{margin-left:auto;margin-right:auto;max-width:72rem;height:100%}header.svelte-1yn6tb2 section .logoArea.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{height:80px;width:80px;padding:0.75rem;position:absolute}header.svelte-1yn6tb2 section .logoArea img.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{max-width:56px;max-height:56px}header.svelte-1yn6tb2 section nav.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{width:100%}@media(min-width: 640px){header.svelte-1yn6tb2 section nav.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{max-width:640px}}@media(min-width: 768px){header.svelte-1yn6tb2 section nav.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{max-width:768px}}@media(min-width: 1024px){header.svelte-1yn6tb2 section nav.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{max-width:1024px}}@media(min-width: 1280px){header.svelte-1yn6tb2 section nav.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{max-width:1280px}}@media(min-width: 1536px){header.svelte-1yn6tb2 section nav.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{max-width:1536px}}header.svelte-1yn6tb2 section nav.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{margin-left:auto;margin-right:auto;display:flex;justify-content:center;align-items:center;height:100%}header.svelte-1yn6tb2 section nav ul.svelte-1yn6tb2.svelte-1yn6tb2.svelte-1yn6tb2{list-style-type:none}header.svelte-1yn6tb2 section nav ul.svelte-1yn6tb2>li.svelte-1yn6tb2.svelte-1yn6tb2{display:inline-block}header.svelte-1yn6tb2 section nav ul.svelte-1yn6tb2>li.svelte-1yn6tb2>a.svelte-1yn6tb2{color:white;padding:0.25rem;margin:0.5rem 1.5rem;transition:all 0.3s ease;border-bottom:3px solid transparent}header.svelte-1yn6tb2 section nav ul.svelte-1yn6tb2>li.svelte-1yn6tb2>a.svelte-1yn6tb2:hover,header.svelte-1yn6tb2 section nav ul.svelte-1yn6tb2>li.svelte-1yn6tb2>a.active.svelte-1yn6tb2{border-bottom:2px solid white}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<header class="${"svelte-1yn6tb2"}"><section class="${"svelte-1yn6tb2"}"><div class="${"logoArea svelte-1yn6tb2"}"><a href="${"/"}"><img src="${"esports-logo.webp"}" alt="${"Retro LAN Party"}" class="${"svelte-1yn6tb2"}"></a></div>
    <nav class="${"svelte-1yn6tb2"}"><ul class="${"svelte-1yn6tb2"}"><li class="${"svelte-1yn6tb2"}"><a href="${"/news"}" class="${escape(null_to_empty($page.routeId === "news" ? "active" : ""), true) + " svelte-1yn6tb2"}">News</a></li>
        <li class="${"svelte-1yn6tb2"}"><a href="${"/termine"}" class="${escape(null_to_empty($page.routeId === "termine" ? "active" : ""), true) + " svelte-1yn6tb2"}">Termine</a></li>
        <li class="${"svelte-1yn6tb2"}"><a href="${"/team"}" class="${escape(null_to_empty($page.routeId === "team" ? "active" : ""), true) + " svelte-1yn6tb2"}">Team</a></li>
        <li class="${"svelte-1yn6tb2"}"><a href="${"/konzept"}" class="${escape(null_to_empty($page.routeId === "konzept" ? "active" : ""), true) + " svelte-1yn6tb2"}">Konzept</a></li></ul></nav></section>
</header>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-bvk0oq.svelte-bvk0oq{background-color:#363acc;opacity:0.9;width:100%;height:180px;z-index:9999}footer.svelte-bvk0oq section a.svelte-bvk0oq{color:white;padding:0 1.5rem 0 0}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { openCookieSettings = () => {
  } } = $$props;
  if ($$props.openCookieSettings === void 0 && $$bindings.openCookieSettings && openCookieSettings !== void 0)
    $$bindings.openCookieSettings(openCookieSettings);
  $$result.css.add(css$1);
  return `<footer class="${"svelte-bvk0oq"}"><section class="${"max-w-6xl mx-auto py-10"}"><a href="${"/impressum"}" class="${"svelte-bvk0oq"}">Impressum</a>
    <a href="${"/datenschutz"}" class="${"svelte-bvk0oq"}">Datenschutz</a>
    <a href="${"javascript:void(0)"}" class="${"svelte-bvk0oq"}">Cookie-Einstellungen</a></section>
</footer>`;
});
const style = "";
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let choicesMerged;
  let choicesArr;
  createEventDispatcher();
  let { cookieName = null } = $$props;
  let { showEditIcon = true } = $$props;
  let shown = false;
  let { heading = "GDPR Notice" } = $$props;
  let { description = "We use cookies to offer a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. Please review our privacy policy & cookies information page. By clicking accept, you consent to our privacy policy & use of cookies." } = $$props;
  let { categories = {
    analytics() {
    },
    tracking() {
    },
    marketing() {
    },
    necessary() {
    }
  } } = $$props;
  let { cookieConfig = {} } = $$props;
  let { choices = {} } = $$props;
  const choicesDefaults = {
    necessary: {
      label: "Necessary cookies",
      description: "Used for cookie control. Can't be turned off.",
      value: true
    },
    tracking: {
      label: "Tracking cookies",
      description: "Used for advertising purposes.",
      value: true
    },
    analytics: {
      label: "Analytics cookies",
      description: "Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.",
      value: true
    },
    marketing: {
      label: "Marketing cookies",
      description: "Used for marketing data.",
      value: true
    }
  };
  let { acceptLabel = "Accept cookies" } = $$props;
  let { rejectLabel = "Reject cookies" } = $$props;
  let { settingsLabel = "Cookie settings" } = $$props;
  let { closeLabel = "Close settings" } = $$props;
  function show() {
    shown = true;
  }
  if ($$props.cookieName === void 0 && $$bindings.cookieName && cookieName !== void 0)
    $$bindings.cookieName(cookieName);
  if ($$props.showEditIcon === void 0 && $$bindings.showEditIcon && showEditIcon !== void 0)
    $$bindings.showEditIcon(showEditIcon);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  if ($$props.cookieConfig === void 0 && $$bindings.cookieConfig && cookieConfig !== void 0)
    $$bindings.cookieConfig(cookieConfig);
  if ($$props.choices === void 0 && $$bindings.choices && choices !== void 0)
    $$bindings.choices(choices);
  if ($$props.acceptLabel === void 0 && $$bindings.acceptLabel && acceptLabel !== void 0)
    $$bindings.acceptLabel(acceptLabel);
  if ($$props.rejectLabel === void 0 && $$bindings.rejectLabel && rejectLabel !== void 0)
    $$bindings.rejectLabel(rejectLabel);
  if ($$props.settingsLabel === void 0 && $$bindings.settingsLabel && settingsLabel !== void 0)
    $$bindings.settingsLabel(settingsLabel);
  if ($$props.closeLabel === void 0 && $$bindings.closeLabel && closeLabel !== void 0)
    $$bindings.closeLabel(closeLabel);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  choicesMerged = Object.assign({}, choicesDefaults, choices);
  choicesArr = Object.values(choicesMerged).map((item, index) => {
    return Object.assign({}, item, { id: Object.keys(choicesMerged)[index] });
  });
  choicesArr.reduce(
    (result, item, index, array) => {
      result[item.id] = item.value ? item.value : false;
      return result;
    },
    {}
  );
  choicesArr.reduce(
    (result, item, index, array) => {
      result[item.id] = item.id === "necessary";
      return result;
    },
    {}
  );
  return `${showEditIcon ? `<button class="${"cookieConsentToggle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}"><path d="${"M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17\n        0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13\n        35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0\n        0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77\n        54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11\n        80.53-12.76l69.13-35.21a132.273 132.273 0 0 0\n        57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176\n        368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32\n        32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33\n        32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32\n        32-14.33 32-32 32z"}"></path></svg></button>` : ``}

${shown ? `<div class="${"cookieConsentWrapper"}"><div class="${"cookieConsent"}"><div class="${"cookieConsent__Left"}"><div class="${"cookieConsent__Content"}"><p class="${"cookieConsent__Title"}">${escape(heading)}</p>
        <p class="${"cookieConsent__Description"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p></div></div>
    <div class="${"cookieConsent__Right"}"><button type="${"button"}" class="${"cookieConsent__Button"}">${escape(settingsLabel)}</button>
      <button type="${"submit"}" class="${"cookieConsent__Button"}">${escape(rejectLabel)}</button>
      <button type="${"submit"}" class="${"cookieConsent__Button"}">${escape(acceptLabel)}</button></div></div></div>` : ``}

${``}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mainContentContainer.svelte-1if0rfl{min-height:calc(100vh - 260px)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gdprBanner;
  let choices = {
    necessary: {
      label: "Unbedingt erforderliche Cookies",
      description: "Diese Cookies werden ben\xF6tigt, damit Sie solch grundlegenden Funktionen wie Sicherheit, Identit\xE4tspr\xFCfung und Netzwerkmanagement nutzen k\xF6nnen. Sie k\xF6nnen daher nicht deaktiviert werden.",
      value: true
    },
    tracking: {
      label: "Funktionale Cookies",
      description: "Funktionale Cookies werden verwendet, um bereits get\xE4tigte Angaben zu speichern und darauf basierend verbesserte und personalisierte Funktionen anzubieten. ",
      value: false
    },
    analytics: {
      label: "Analytics-Cookies",
      description: "Wir verwenden diese Cookies, um zu verstehen, wie unsere Website genutzt wird, um Fehler zu entdecken und die Funktionalit\xE4t der Website zu verbessern.",
      value: false
    },
    marketing: {
      label: "Cookies f\xFCr Marketingzwecke",
      description: "Cookies f\xFCr Marketingzwecke werden verwendet, um die Effektivit\xE4t von Werbung zu messen, Interessen von Besuchern zu erfassen und Werbeanzeigen an deren pers\xF6nliche Bed\xFCrfnisse anzupassen.",
      value: false
    }
  };
  function showCookieBanner() {
    gdprBanner.show();
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Header, "HEADER").$$render($$result, {}, {}, {})}

<div class="${"mainContentContainer svelte-1if0rfl"}">${slots.default ? slots.default({}) : ``}</div>

${validate_component(Footer, "FOOTER").$$render($$result, { openCookieSettings: showCookieBanner }, {}, {})}

${validate_component(Banner, "GdprBanner").$$render(
      $$result,
      {
        choices,
        showEditIcon: false,
        acceptLabel: "Zustimmen",
        rejectLabel: "Ablehnen",
        settingsLabel: "Zu den Einstellungen",
        closeLabel: "Einstellungen schlie\xDFen",
        cookieName: "hahnheim-esports",
        heading: "Wir verwenden Cookies...",
        description: "Wir verwenden Cookies und \xE4hnliche Technologien, um Dienste bzw. Funktionen auf unserer Website zu gew\xE4hrleisten und um zu verstehen, wie Sie diese nutzen. Indem Sie auf \u201EZustimmen\u201C klicken, stimmen Sie deren Verwendung zu.",
        this: gdprBanner
      },
      {
        this: ($$value) => {
          gdprBanner = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
