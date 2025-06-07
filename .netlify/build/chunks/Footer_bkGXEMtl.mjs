import { f as createAstro, c as createComponent, b as renderTemplate, e as addAttribute, m as maybeRenderHead, s as spreadAttributes, g as renderSlot, r as renderComponent } from './astro/server_DI_y9TaY.mjs';
import 'clsx';
import { a as SITE_TITLE, S as SITE_DESCRIPTION } from './consts_Cbndx6w3.mjs';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://romgrk.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const description = SITE_DESCRIPTION;
  const { title = SITE_TITLE, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"><meta name="generator"', '><!-- External --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Cloudflare Web Analytics --><script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon="{&quot;token&quot;: &quot;b0171e625c244ce483071d0333f87a2e&quot;}"><\/script><!-- End Cloudflare Web Analytics --><!-- Open Graph / Facebook --><!-- <meta property="og:type" content="website" /> --><!-- <meta property="og:url" content={Astro.url} /> --><!-- <meta property="og:title" content={title} /> --><!-- <meta property="og:description" content={description} /> --><!-- <meta property="og:image" content={new URL(image, Astro.url)} /> --><!-- Twitter --><!-- <meta property="twitter:card" content="summary_large_image" /> --><!-- <meta property="twitter:url" content={Astro.url} /> --><!-- <meta property="twitter:title" content={title} /> --><!-- <meta property="twitter:description" content={description} /> --><!-- <meta property="twitter:image" content={new URL(image, Astro.url)} /> -->'])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"));
}, "/home/romgrk/src/blog-romgrk/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro("https://romgrk.com");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/romgrk/src/blog-romgrk/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <a class="header-title" href="/" data-astro-cid-3ef6ksr2> <span class="inline md:hidden" data-astro-cid-3ef6ksr2>${SITE_TITLE.charAt(0).toUpperCase()}</span> <span class="hidden md:inline" data-astro-cid-3ef6ksr2>${SITE_TITLE}</span> </a> <div class="header-links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/posts", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Posts` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/castle", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`The Castle<span class="hidden md:inline" data-astro-cid-3ef6ksr2>, by H. Wenng</span>` })} </div> <div class="header-fill" data-astro-cid-3ef6ksr2></div> <a class="header-github" href="https://github.com/romgrk" target="_blank" data-astro-cid-3ef6ksr2> <span class="fa fa-github" data-astro-cid-3ef6ksr2></span> <span class="sr-only" data-astro-cid-3ef6ksr2>Github</span> </a> </header> `;
}, "/home/romgrk/src/blog-romgrk/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="footer-links" data-astro-cid-sz7xmlte> <a href="mailto:romgrk.cc@gmail.com" data-astro-cid-sz7xmlte>Comments?</a> <a href="https://github.com/romgrk" target="_blank" class="footer-github" data-astro-cid-sz7xmlte> <span class="fa fa-github" data-astro-cid-sz7xmlte></span> <span class="sr-only" data-astro-cid-sz7xmlte>Github</span> </a> </div> <div class="footer-dedication" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte>I dedicate this blog and anyone who reads this sentence to the public domain.</div> <div data-astro-cid-sz7xmlte>What do you mean that's not how licensing works?</div> </div> </footer> `;
}, "/home/romgrk/src/blog-romgrk/src/components/Footer.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b };
