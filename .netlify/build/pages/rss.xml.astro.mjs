import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_CVa3mHN6.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_Cbndx6w3.mjs';
export { renderers } from '../renderers.mjs';

async function get(context) {
  const posts = await getCollection('posts');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts
      .filter(post => !post.draft)
      .map((post) => ({ ...post.data, link: `/posts/${post.slug}/` })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
