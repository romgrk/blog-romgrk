import { c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate, a as renderHead } from '../chunks/astro/server_DI_y9TaY.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_bkGXEMtl.mjs';
import { g as getCollection } from '../chunks/_astro_content_CVa3mHN6.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_CEICTqTe.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).sort((a, b) => Date.parse(a.data.pubDate) - Date.parse(b.data.pubDate)).filter((a) => a.data.draft !== true).reverse();
  return renderTemplate`${maybeRenderHead()}<section class="posts" data-astro-cid-7nqkypoh> ${posts.map((post) => renderTemplate`<div class="post" data-astro-cid-7nqkypoh> <a${addAttribute(`/posts/${post.slug}/`, "href")} data-astro-cid-7nqkypoh> <h5 class="post-title" data-astro-cid-7nqkypoh> ${post.data.title} </h5> <div class="post-details" data-astro-cid-7nqkypoh> <span class="post-date" data-astro-cid-7nqkypoh> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-7nqkypoh": true })} </span> </div> </a> </div>`)} </section> `;
}, "/home/romgrk/src/blog-romgrk/src/components/Posts.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderComponent($$result, "Posts", $$Posts, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/romgrk/src/blog-romgrk/src/pages/posts/index.astro", void 0);

const $$file = "/home/romgrk/src/blog-romgrk/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
