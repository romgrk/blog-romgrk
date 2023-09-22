import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, h as renderHead, m as maybeRenderHead, b as addAttribute } from '../astro.43e75c1e.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, S as SITE_TITLE, c as SITE_DESCRIPTION, g as getCollection, d as $$FormattedDate } from './_...slug_.astro.3246ab1e.mjs';
import { C as Content } from './home.mdx.12828295.mjs';
/* empty css                           */
const $$Astro$2 = createAstro("https://romgrk.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`<html lang="en">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}
  ${renderHead()}</head>
  <body>
    ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })}
    <main>
      ${renderComponent($$result, "Home", Content, {})}
    </main>
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/home/romgrk/src/blog-romgrk/src/pages/index.astro", void 0);

const $$file$1 = "/home/romgrk/src/blog-romgrk/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://romgrk.com");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Posts;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`${maybeRenderHead()}<section class="posts astro-7NQKYPOH">
	${posts.map((post) => renderTemplate`<div class="post astro-7NQKYPOH">
				<a${addAttribute(`/posts/${post.slug}/`, "href")} class="astro-7NQKYPOH">
					<h4 class="post-title astro-7NQKYPOH">${post.data.title}</h4>
					<p class="post-date astro-7NQKYPOH">
						${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "class": "astro-7NQKYPOH" })}
					</p>
				</a>
			</div>`)}
</section>`;
}, "/home/romgrk/src/blog-romgrk/src/components/Posts.astro", void 0);

const $$Astro = createAstro("https://romgrk.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en">
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}
	${renderHead()}</head>
	<body>
		${renderComponent($$result, "Header", $$Header, {})}
		<main>
			${renderComponent($$result, "Posts", $$Posts, {})}
		</main>
		${renderComponent($$result, "Footer", $$Footer, {})}
	</body></html>`;
}, "/home/romgrk/src/blog-romgrk/src/pages/posts/index.astro", void 0);

const $$file = "/home/romgrk/src/blog-romgrk/src/pages/posts/index.astro";
const $$url = "/posts";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
