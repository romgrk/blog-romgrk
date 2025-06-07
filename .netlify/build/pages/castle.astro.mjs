import { c as createComponent, r as renderComponent, a as renderHead, b as renderTemplate } from '../chunks/astro/server_DI_y9TaY.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_bkGXEMtl.mjs';
export { renderers } from '../renderers.mjs';

const $$Castle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <img src="/castle.jpg"> <br> <br> <p>
"The Castle" is a painting by Herman Wenng painted in 1930. I don't know anything about Herman, but I love this painting very much. As it is basically gone from the public internet, I share it here in the hopes that the image survives. It is for me a symbol of nirvana, spiritual enlightenment, God, or whatever other name you give to That.
</p> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/romgrk/src/blog-romgrk/src/pages/castle.astro", void 0);

const $$file = "/home/romgrk/src/blog-romgrk/src/pages/castle.astro";
const $$url = "/castle";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Castle,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
