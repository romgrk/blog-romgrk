import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, d as renderSlot, e as renderComponent, f as createCollectionToGlobResultMap, g as createGetCollection, h as renderHead } from '../astro.43e75c1e.mjs';
/* empty css                            *//* empty css                               */
const $$Astro$6 = createAstro("https://romgrk.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- External -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin>

<!-- Canonical URL -->
<link rel="canonical"${addAttribute(canonicalURL, "href")}>

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/home/romgrk/src/blog-romgrk/src/components/BaseHead.astro", void 0);

const $$Astro$5 = createAstro("https://romgrk.com");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)}>
	${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/home/romgrk/src/blog-romgrk/src/components/HeaderLink.astro", void 0);

const SITE_TITLE = `romgrk`;
const SITE_DESCRIPTION = `romgrk's personal blog`;

const $$Astro$4 = createAstro("https://romgrk.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header astro-3EF6KSR2">
  <a class="header-title astro-3EF6KSR2" href="/">${SITE_TITLE}</a>

  <div class="header-links astro-3EF6KSR2">
    ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/posts", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`Posts` })}
    ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/castle", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`The Castle, by H. Wenng` })}
  </div>
  <div class="header-fill astro-3EF6KSR2"></div>
  <a class="header-github astro-3EF6KSR2" href="https://github.com/romgrk" target="_blank">
    <span class="fa fa-github astro-3EF6KSR2"></span>
    <span class="sr-only astro-3EF6KSR2">Github</span>
  </a>
</header>`;
}, "/home/romgrk/src/blog-romgrk/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://romgrk.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer astro-SZ7XMLTE">

  <div class="footer-links astro-SZ7XMLTE">
    <a href="https://github.com/romgrk" target="_blank" class="astro-SZ7XMLTE">
      <span class="fa fa-github astro-SZ7XMLTE"></span>
      <span class="sr-only astro-SZ7XMLTE">Github</span>
    </a>
  </div>

  <div class="footer-dedication astro-SZ7XMLTE">
    <div class="astro-SZ7XMLTE">I dedicate this blog and anyone who reads this sentence to the public domain.</div>
    <div class="astro-SZ7XMLTE">What do you mean that's not how licensing works?</div>
  </div>

</footer>`;
}, "/home/romgrk/src/blog-romgrk/src/components/Footer.astro", void 0);

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/react-function-components.mdx": () => import('../react-function-components.1615761c.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"react-function-components":"/src/content/blog/react-function-components.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/react-function-components.mdx": () => import('../react-function-components.c0d28926.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$2 = createAstro("https://romgrk.com");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}>
	${date.toLocaleDateString("en-uk", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}
</time>`;
}, "/home/romgrk/src/blog-romgrk/src/components/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro("https://romgrk.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`

${maybeRenderHead()}<article class="post astro-XJ2UYZ6M">
  <div class="post-header astro-XJ2UYZ6M">
    <div class="post-date astro-XJ2UYZ6M">
      ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "class": "astro-XJ2UYZ6M" })}
      ${updatedDate && renderTemplate`<div class="last-updated-on astro-XJ2UYZ6M">
            Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "class": "astro-XJ2UYZ6M" })}
          </div>`}
    </div>
    <h1 class="post-title astro-XJ2UYZ6M">${title}</h1>

    <hr class="astro-XJ2UYZ6M">
  </div>

  <!-- <CONTENT> -->
  ${renderSlot($$result, $$slots["default"])}
  <!-- </CONTENT> -->

</article>`;
}, "/home/romgrk/src/blog-romgrk/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://romgrk.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`<html lang="en">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": post.data.title, "description": post.data.description })}
  ${renderHead()}</head>

  <body>
    ${renderComponent($$result, "Header", $$Header, {})}
    <main>
      ${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate`
        ${renderComponent($$result2, "Content", Content, {})}
      ` })}
    </main>
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/home/romgrk/src/blog-romgrk/src/pages/posts/[...slug].astro", void 0);

const $$file = "/home/romgrk/src/blog-romgrk/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, SITE_TITLE as S, ____slug_ as _, $$Header as a, $$Footer as b, SITE_DESCRIPTION as c, $$FormattedDate as d, getCollection as g };
