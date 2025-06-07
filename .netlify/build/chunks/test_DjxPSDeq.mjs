import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { c as createCircuit, b as Nand, a as Battery, J as Junction, L as Light } from './utils_CctUhDIM.mjs';
import 'react/jsx-runtime';
import 'react';
import 'clsx';

function DemoSRNandLatch() {
  return createCircuit({ options: { ticks: 2 } }, (_, c, x, y) => {
    const nandA = c.add(new Nand({ x: x - 50, y }));
    const nandB = c.add(new Nand({ x: x + 50, y }));
    const inputSet = c.add(new Battery({ x: x - 60, y: y + 80 }));
    const inputReset = c.add(new Battery({ x: x + 60, y: y + 80 }));
    const junctionA = c.add(new Junction({ x: x - 50, y: y - 30 }));
    const junctionB = c.add(new Junction({ x: x + 50, y: y - 30 }));
    const outputA = c.add(new Light({ x: x - 50, y: y - 80 }));
    const outputB = c.add(new Light({ x: x + 50, y: y - 80 }));
    c.link(inputSet.output, nandA.inputA);
    c.link(inputReset.output, nandB.inputB);
    c.link(nandA.output, junctionA.input);
    c.link(junctionA.outputA, outputA.input);
    c.link(junctionA.outputB, nandB.inputA, { find: true });
    c.link(nandB.output, junctionB.input);
    c.link(junctionB.outputA, outputB.input);
    c.link(junctionB.outputB, nandA.inputB, { find: true });
    inputSet.output.set(true);
    inputReset.output.set(true);
  });
}

const frontmatter = {
  "title": "Test page",
  "description": "",
  "pubDate": "Jan 01 2023",
  "draft": true
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "content"
    }), "\n", createVNode(DemoSRNandLatch, {
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/posts/computers-from-scratch/memory.tsx",
      "client:component-export": "DemoSRNandLatch",
      "client:component-hydration": true
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

const url = "src/content/posts/test.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/test.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/test.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
