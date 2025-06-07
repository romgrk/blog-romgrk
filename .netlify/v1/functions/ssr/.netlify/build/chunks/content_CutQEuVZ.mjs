import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from './astro/server_DI_y9TaY.mjs';
import 'react/jsx-runtime';
import 'react';
/* empty css                        */
import { R as RandomPlant } from './RandomPlant_Cpx7-LbW.mjs';
import 'clsx';

const frontmatter = {};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    meta: "meta",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.meta, {
      charset: "utf-8"
    }), "\n", createVNode(_components.p, {
      children: "Favourites blogs:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://josephg.com/blog/",
          children: "https://josephg.com/blog/"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://ludic.mataroa.blog/",
          children: "https://ludic.mataroa.blog/"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "http://mrale.ph/blog",
          children: "http://mrale.ph/blog"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://loup-vaillant.fr/",
          children: "https://loup-vaillant.fr/"
        })
      }), "\n"]
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(RandomPlant, {}), "\n", createVNode("br", {}), "\n", createVNode("br", {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "/links/content";
const file = "/home/romgrk/src/blog-romgrk/src/pages/links/content.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/pages/links/content.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { Content as C, _page as _ };
