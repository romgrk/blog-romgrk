import { c as createComponent, r as renderComponent, a as renderHead, b as renderTemplate } from '../chunks/astro/server_DI_y9TaY.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_bkGXEMtl.mjs';
import { C as Content } from '../chunks/content_CutQEuVZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="links markdown-content"> ${renderComponent($$result, "Content", Content, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/romgrk/src/blog-romgrk/src/pages/links/index.astro", void 0);

const $$file = "/home/romgrk/src/blog-romgrk/src/pages/links/index.astro";
const $$url = "/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
