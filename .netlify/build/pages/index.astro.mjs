import { c as createComponent, r as renderComponent, a as renderHead, b as renderTemplate } from '../chunks/astro/server_DI_y9TaY.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_bkGXEMtl.mjs';
import { C as Content } from '../chunks/home_ppI0p9H8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="home markdown-content"> ${renderComponent($$result, "Home", Content, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/romgrk/src/blog-romgrk/src/pages/index.astro", void 0);

const $$file = "/home/romgrk/src/blog-romgrk/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
