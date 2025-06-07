import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BcZlqVAO.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/castle.astro.mjs');
const _page2 = () => import('./pages/home.astro.mjs');
const _page3 = () => import('./pages/links/content.astro.mjs');
const _page4 = () => import('./pages/links.astro.mjs');
const _page5 = () => import('./pages/posts.astro.mjs');
const _page6 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page7 = () => import('./pages/rss.xml.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.9.1_@netlify+blobs@8.2.0_@types+node@22.15.30_jiti@1.21.7_rollup@4.42.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/castle.astro", _page1],
    ["src/pages/home.mdx", _page2],
    ["src/pages/links/content.mdx", _page3],
    ["src/pages/links/index.astro", _page4],
    ["src/pages/posts/index.astro", _page5],
    ["src/pages/posts/[...slug].astro", _page6],
    ["src/pages/rss.xml.js", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "80b56f8a-79d6-4b9c-aaeb-a715fc35e107"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
