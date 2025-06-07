import { f as createAstro, c as createComponent, b as renderTemplate, e as addAttribute, g as renderSlot, r as renderComponent, m as maybeRenderHead, h as defineScriptVars, a as renderHead } from '../../chunks/astro/server_DI_y9TaY.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CVa3mHN6.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../chunks/Footer_bkGXEMtl.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_CEICTqTe.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://romgrk.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const DEFAULT_SIDEBAR = {
    display: true,
    depth: 6
  };
  const { title, description, pubDate, updatedDate, heroImage, headings } = Astro2.props;
  const sidebar = Object.assign({}, DEFAULT_SIDEBAR, Astro2.props.sidebar);
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  if (!DISPLAY) return\n\n  const html = document.querySelector('html')\n  const sidebar = document.querySelector('.post-sidebar')\n  const headings =\n    Array.from(document.querySelector('.post-body')\n      .querySelectorAll(\n        Array.from({ length: MAX_DEPTH }).map((_, i) => `h${i + 1}`).join(', ')))\n\n  const sidebarLinkFor = id => document.querySelector(`[href=\"#${id}\"]`)\n\n  document.addEventListener('scroll', () => {\n    const active =\n      headings.reduce((active, h) => {\n        if ((html.scrollTop + html.clientHeight / 2) > h.offsetTop)\n          return h\n        return active\n      })\n\n    const current = sidebar.querySelector('.active')\n    const isMatching = current?.href.slice(1) === active?.id\n\n    if (current && !isMatching) {\n      current.classList.remove('active')\n    }\n    if (active && !isMatching) {\n      sidebarLinkFor(active.id).classList.add('active')\n    }\n  })\n})\n})();<\/script>", '<article class="post" data-astro-cid-xj2uyz6m> <div class="post-padding" data-astro-cid-xj2uyz6m></div> <div class="post-content" data-astro-cid-xj2uyz6m> <div class="post-header" data-astro-cid-xj2uyz6m> <div class="post-date" data-astro-cid-xj2uyz6m> ', " ", ' </div> <h1 class="post-title" data-astro-cid-xj2uyz6m>', '</h1> <hr data-astro-cid-xj2uyz6m> </div> <div class="post-body markdown-content" data-astro-cid-xj2uyz6m> <!-- <CONTENT> --> ', ' <!-- </CONTENT> --> </div> </div> <div class="post-sidebar" data-astro-cid-xj2uyz6m> ', " </div> </article>"], ["<script>(function(){", "\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  if (!DISPLAY) return\n\n  const html = document.querySelector('html')\n  const sidebar = document.querySelector('.post-sidebar')\n  const headings =\n    Array.from(document.querySelector('.post-body')\n      .querySelectorAll(\n        Array.from({ length: MAX_DEPTH }).map((_, i) => \\`h\\${i + 1}\\`).join(', ')))\n\n  const sidebarLinkFor = id => document.querySelector(\\`[href=\"#\\${id}\"]\\`)\n\n  document.addEventListener('scroll', () => {\n    const active =\n      headings.reduce((active, h) => {\n        if ((html.scrollTop + html.clientHeight / 2) > h.offsetTop)\n          return h\n        return active\n      })\n\n    const current = sidebar.querySelector('.active')\n    const isMatching = current?.href.slice(1) === active?.id\n\n    if (current && !isMatching) {\n      current.classList.remove('active')\n    }\n    if (active && !isMatching) {\n      sidebarLinkFor(active.id).classList.add('active')\n    }\n  })\n})\n})();<\/script>", '<article class="post" data-astro-cid-xj2uyz6m> <div class="post-padding" data-astro-cid-xj2uyz6m></div> <div class="post-content" data-astro-cid-xj2uyz6m> <div class="post-header" data-astro-cid-xj2uyz6m> <div class="post-date" data-astro-cid-xj2uyz6m> ', " ", ' </div> <h1 class="post-title" data-astro-cid-xj2uyz6m>', '</h1> <hr data-astro-cid-xj2uyz6m> </div> <div class="post-body markdown-content" data-astro-cid-xj2uyz6m> <!-- <CONTENT> --> ', ' <!-- </CONTENT> --> </div> </div> <div class="post-sidebar" data-astro-cid-xj2uyz6m> ', " </div> </article>"])), defineScriptVars({ DISPLAY: sidebar.display, MAX_DEPTH: sidebar.depth }), maybeRenderHead(), renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-xj2uyz6m": true }), updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-xj2uyz6m>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-xj2uyz6m": true })} </div>`, title, renderSlot($$result, $$slots["default"]), sidebar.display && renderTemplate`<div class="post-sidebar-content" data-astro-cid-xj2uyz6m> ${headings.map(
    (heading, i) => sidebar?.depth && sidebar.depth < heading.depth ? null : renderTemplate`<a${addAttribute(`#${heading.slug}`, "href")} data-astro-cid-xj2uyz6m> ${heading.text} </a>`
  )} </div>`);
}, "/home/romgrk/src/blog-romgrk/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://romgrk.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("posts");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post)
    return Astro2.redirect("/404");
  const { Content, headings } = await post.render();
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": post.data.title, "description": post.data.description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="no-padding"> ${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data, "headings": headings }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/romgrk/src/blog-romgrk/src/pages/posts/[...slug].astro", void 0);

const $$file = "/home/romgrk/src/blog-romgrk/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
