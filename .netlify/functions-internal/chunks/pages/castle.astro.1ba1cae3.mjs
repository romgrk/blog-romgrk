import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, h as renderHead } from '../astro.43e75c1e.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, S as SITE_TITLE, c as SITE_DESCRIPTION } from './_...slug_.astro.3246ab1e.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                            *//* empty css                               */
const $$Astro = createAstro("https://romgrk.com");
const $$Castle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Castle;
  return renderTemplate`<html lang="en">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}
  ${renderHead()}</head>
  <body>
    ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })}
    <main>
      <img src="/castle.jpg">
      <br>
      <br>
      <p>
        "The Castle" is a painting by Herman Wenng painted in 1930. I don't know anything about Herman, but I do love this painting very much. But the paiting is basically gone from the public internet, so I share it here in the hopes that the image survives.
      </p>
    </main>
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/home/romgrk/src/blog-romgrk/src/pages/castle.astro", void 0);

const $$file = "/home/romgrk/src/blog-romgrk/src/pages/castle.astro";
const $$url = "/castle";

export { $$Castle as default, $$file as file, $$url as url };
