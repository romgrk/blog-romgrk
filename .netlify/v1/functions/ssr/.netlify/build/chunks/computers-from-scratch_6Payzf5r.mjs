import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { c as createCircuit, s as snapToGrid, B as BigTransistor, a as Battery, R as RIGHT, L as Light, J as Junction, G as Ground, e as electric, N as Not } from './utils_CctUhDIM.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'clsx';

function DemoTransistor() {
  return createCircuit({ height: 270 }, (ctx, c) => {
    const x = snapToGrid(ctx.dimensions.width / 2 - BigTransistor.shape.width / 2);
    const y = snapToGrid(80);
    const t = c.add(new BigTransistor({ x, y }));
    c.label(t.input, "top-left", "Input");
    c.label(t.control, "bottom-right", "Control");
    c.label(t.output, "top-right", "Output");
    c.label(t, "top", "THE TRANSISTOR. TADA!", { fontWeight: "bold" });
    const power = c.add(new Battery({ x: x - 160, y, orientation: RIGHT }, { canToggle: false, label: "+5v" }));
    const control = c.add(new Battery({ x, y: y + power.size * 3 }));
    const led = c.add(new Light({ x: x + 160, y, orientation: RIGHT }));
    c.link(power.output, t.input);
    c.link(control.output, t.control);
    c.link(t.output, led.input);
  });
}

function DemoNotGate() {
  return /* @__PURE__ */ jsxs("div", { className: "row gap-1", children: [
    /* @__PURE__ */ jsx(DemoNotGateElectric, {}),
    /* @__PURE__ */ jsx(DemoNotGateLogic, {})
  ] });
}
function DemoNotGateElectric() {
  return createCircuit({ options: { components: electric } }, (ctx, c) => {
    const x = snapToGrid(ctx.dimensions.width / 2);
    const y = snapToGrid(60);
    const led = c.add(new Light({ x, y, orientation: RIGHT }));
    const transistor = c.add(new BigTransistor({ x, y: y + led.box.height * 2 }));
    const junction = c.add(new Junction({ x: x - 60, y: y + led.box.height * 2 }));
    const power = c.add(new Battery({ x: x - 110, y: y + led.box.height * 2, orientation: RIGHT }, { canToggle: false, label: "+5v" }));
    const ground = c.add(new Ground({ x: x + BigTransistor.shape.width + 20, y: y + led.box.height * 2 }));
    const control = c.add(new Battery({ x, y: y + led.box.height * 2 + BigTransistor.shape.width + 30 }));
    c.link(power.output, junction.input);
    c.link(junction.outputA, led.input, { find: true }).logic.resistance = 10;
    c.link(junction.outputB, transistor.input, { find: true });
    c.link(transistor.output, ground.input);
    c.link(control.output, transistor.control);
    c.label(led, "top", "Output");
    c.label(control, "bottom", "Input");
  });
}
function DemoNotGateLogic() {
  return createCircuit({}, (ctx, c) => {
    const x = snapToGrid(ctx.dimensions.width / 2);
    const y = snapToGrid(ctx.dimensions.height / 2);
    const not = c.add(new Not({ x, y }));
    const led = c.add(new Light({ x, y: y - 80 }));
    const control = c.add(new Battery({ x, y: y + 80 }));
    c.link(control.output, not.input, { find: true });
    c.link(not.output, led.input, { find: true });
    c.label(led, "top", "Output");
    c.label(control, "bottom", "Input");
  });
}

const frontmatter = {
  "title": "Computers from scratch",
  "description": "",
  "pubDate": "Sep 21 2023",
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "transistors",
    "text": "Transistors"
  }, {
    "depth": 2,
    "slug": "logic-gates",
    "text": "Logic gates"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In this series, I’ll be building a virtual real 16-bit computer from scratch, starting from the transistor and moving up the stack, going through logic gates, registers, ALU, RAM, caches (L1, L2, etc), MMU, assembly, basic compiled language and finally basic interpreted language. At the end of this, hopefully you should be “fullstack” for real!"
    }), "\n", createVNode(_components.p, {
      children: ["Now, when I say “virtual real” computer, I understand that can be confusing. What I mean is that we’ll be using a simulation of transistors & electrical circuits, and we’ll build our computer inside this simulation. This will also allow us (well you) to play with the actual circuits. All graphes here are ", createVNode(_components.strong, {
        children: "🌈 fully interactive 🌈"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "transistors",
      children: "Transistors"
    }), "\n", createVNode(_components.p, {
      children: ["The basic component of computers is the transistor. Everything is built from them. A bit like emptiness underlies all form. Transistors are pretty simple: if there is current going to the ", createVNode(_components.code, {
        children: "control"
      }), " pin, then the current can flow between ", createVNode(_components.code, {
        children: "input"
      }), " and ", createVNode(_components.code, {
        children: "output"
      }), ". You can toggle the ", createVNode(_components.code, {
        children: "ON/OFF"
      }), " power supply to verify that by yourself."]
    }), "\n", createVNode(DemoTransistor, {
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/posts/computers-from-scratch/transistor.tsx",
      "client:component-export": "DemoTransistor",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "This simple mechanism is what underlies all of computing, and from which we can build all the more complex behavior that we’re about to see. Speaking of which, let’s jump to the second level above transistors: logic gates."
    }), "\n", createVNode(_components.h2, {
      id: "logic-gates",
      children: "Logic gates"
    }), "\n", createVNode(_components.p, {
      children: "Building logic gates with our transistors is about acquiring the building blocks required to perform boolean algebra, because boolean algebra is all we need to build the rest. The graphs in this section will be shown in two versions: the electrical one and the logical one. The electrical one shows how one such circuit can be built in real life, while the logical one shows the pure logic gate, unencumbered by electricity. This is the last step where we’ll worry about electricity, all the subsequent ones will be based on the logic gates only."
    }), "\n", createVNode(DemoNotGate, {
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/posts/computers-from-scratch/logicGates.tsx",
      "client:component-export": "DemoNotGate",
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

const url = "src/content/posts/computers-from-scratch.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/computers-from-scratch.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/computers-from-scratch.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
