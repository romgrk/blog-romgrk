import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { R as RandomPlant } from './RandomPlant_Cpx7-LbW.mjs';
import './Aside_6iP3dSQA.mjs';
import 'clsx';

const frontmatter = {
  "title": "There is a problem with Vercel",
  "description": "romgrk on capitalism",
  "pubDate": "Jun 13 2024",
  "sidebar": {
    "display": false
  },
  "draft": true
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["I’ve been holding off on writing this post for a while, but I think today is a good day. As most people know, React was started by facebook/meta. Over the last couple years however, a company has been progressively buying (hiring) core react contributors, to the point that in the last year, a large part of the changes that went into react were authored by Vercel-employed contributors. Which part you may ask? I did a quick run of ", createVNode(_components.code, {
        children: "git-quick-stats"
      }), " for all the commits over the last year on React repository, and here is the results for all contributors over 2%:"]
    }), "\n", createVNode(_components.pre, {
      children: createVNode(_components.code, {
        children: "4375 Noah Lemen (2%)            [META]\n7122 Jack Pope (3%)             [META]\n14077 Jan Kassens (6%)          [META]\n15291 Sebastian Silbermann (7%) [VERCEL]\n24125 Rick Hanlon (10%)         [META]\n25050 Ruslan Lesiutin (11%)     [META]\n25240 Andrew Clark (11%)        [VERCEL]\n41302 Josh Story (18%)          [VERCEL]\n58361 Sebastian Markbåge (25%)  [VERCEL]\n"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "61% of lines changed were authored by Vercel employees!"
      })
    }), "\n", createVNode(_components.p, {
      children: "Now what’s the difference, you may ask, between a for-profit corporation like Meta and a for-profit corporation like Vercel? Aren’t they the same thing? Well not really. There’s a fundamental difference. Meta developped Re"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.gomomento.com/blog/rip-redis-how-garantia-data-pulled-off-the-biggest-heist-in-open-source-history",
        children: "https://www.gomomento.com/blog/rip-redis-how-garantia-data-pulled-off-the-biggest-heist-in-open-source-history"
      }), "\n", createVNode(_components.a, {
        href: "https://www.reddit.com/r/reactjs/comments/1d0l6fh/comment/l5o0qhu/",
        children: "why isn’t vite listed on react.dev?"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.reddit.com/r/reactjs/comments/1deoxkp/react_19_broke_suspense_parallel_rendering_and/",
        children: "https://www.reddit.com/r/reactjs/comments/1deoxkp/react_19_broke_suspense_parallel_rendering_and/"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.reddit.com/r/reactjs/comments/1dep9lm/server_components_may_not_be_as_generalizable_as/",
        children: "https://www.reddit.com/r/reactjs/comments/1dep9lm/server_components_may_not_be_as_generalizable_as/"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "overengineered bad solutions"
      }), "\n", createVNode(_components.li, {
        children: "greed"
      }), "\n"]
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-16"
    })]
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

const url = "src/content/posts/back-off-vercel.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/back-off-vercel.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/back-off-vercel.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
