import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { R as RandomPlant } from './RandomPlant_Cpx7-LbW.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { C as CodeRunner } from './CodeRunner_pm5GBAFU.mjs';
import 'clsx';

function ExampleStack() {
  const context = `
    function printStackTrace() {
      console.log(new Error().stack)
    }
    function useCallback(fn) { return fn }
  `;
  return /* @__PURE__ */ jsxs("div", { className: "row mb-1", children: [
    /* @__PURE__ */ jsx(
      CodeRunner,
      {
        transformOutput,
        consoleLines: 6,
        codeLines: 13,
        code: `
          class Component {
            a() { this.b() }
            b() { this.c() }
            c() { this.d() }
            d() { this.e() }
            e() {
              printStackTrace()
            }
          }

          new Component().a()
        `,
        context
      }
    ),
    /* @__PURE__ */ jsx(
      CodeRunner,
      {
        transformOutput,
        consoleLines: 6,
        codeLines: 13,
        code: `
          function Component() {
            const a = useCallback(() => { b() }, [])
            const b = useCallback(() => { c() }, [])
            const c = useCallback(() => { d() }, [])
            const d = useCallback(() => { e() }, [])
            const e = useCallback(() => {
              printStackTrace()
            }, [])
            return a
          }

          Component()()
        `,
        context
      }
    )
  ] });
}
function transformOutput(output) {
  const lines = output.split("\n");
  return lines.slice(0, 6).join("\n").replace(/Error\s+/m, "").replaceAll(/^\s*(at )?eval/gm, "<anonymous>").replaceAll(/^\s*(at )?/gm, "");
}
const CONTEXT = `
function cuid() { return 42 }
function createRef() { return { current: null } }

let currentContext = null
const contexts = []

function nextContext() {
  return (currentContext = currentContext.next ??= { value: null, next: null })
}

function useRef() {
  nextContext()
  return (currentContext.value ??= { current: null })
}
function useState(s) {
  nextContext()
  if (currentContext.value)
    return [currentContext.value[0], currentContext.value[1]]
  return (currentContext.value = [s, () => {}])
}
function useCallback(fn, d) {
  nextContext()
  return (currentContext.value ??= fn)
}
`;
const CLASS_VERSION = `
  class Selector {
    id = cuid()
    ref = createRef()
    position = { x: 0, y: 0}

    state = {
      open: false,
      loading: false,
      disabled: false,
      selectedIndex: -1,
    }

    open() {}
    close() {}
    select(index) {}
    focus() {}

    render() {
      return '<div>Hello</div>'
    }
  }

  const start = Date.now()
  const elements = Array.from({ length: 3000 })
    .map(() => new Selector())
  for (let i = 0; i < 5; i++) {
    elements.forEach(e => e.render())
  }
  const end = Date.now()
  console.log((end - start) + 'ms')
`;
const FUNCTION_VERSION = `
  function Selector(props) {
    const id = useRef(cuid())
    const ref = useRef()
    const position = useRef({ x: 0, y: 0 })

    const [isOpen, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const open = useCallback(() => {}, [])
    const close = useCallback(() => {}, [])
    const select = useCallback((index) => {}, [])
    const focus = useCallback(() => {}, [])

    return '<div>Hello</div>'
  }

  const start = Date.now()
  const elements = Array.from({ length: 3000 })
    .map((_, i) => (contexts[i] = { value: null, next: null }))
  for (let i = 0; i < 5; i++) {
    elements.forEach((_, i) => (currentContext = contexts[i], Selector()))
  }
  const end = Date.now()
  console.log((end - start) + 'ms')
`;
function ExamplePerformance() {
  return /* @__PURE__ */ jsxs("div", { className: "row mb-1", children: [
    /* @__PURE__ */ jsx(
      CodeRunner,
      {
        context: CONTEXT,
        code: CLASS_VERSION,
        codeLines: 10
      }
    ),
    /* @__PURE__ */ jsx(
      CodeRunner,
      {
        context: CONTEXT,
        code: FUNCTION_VERSION,
        codeLines: 10
      }
    )
  ] });
}

const frontmatter = {
  "title": "The problem with functional components",
  "description": "romgrk ranting about the deprecation of class components",
  "pubDate": "Oct 6 2023",
  "sidebar": {
    "display": false
  },
  "rating": 6
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "issue-1-readability-is-worst",
    "text": "Issue #1: Readability is worst"
  }, {
    "depth": 3,
    "slug": "issue-2-dx-is-worst",
    "text": "Issue #2: DX is worst"
  }, {
    "depth": 3,
    "slug": "issue-3-performance-is-worst",
    "text": "Issue #3: Performance is worst"
  }, {
    "depth": 2,
    "slug": "final-notes",
    "text": "Final notes"
  }, {
    "depth": 3,
    "slug": "addendum-but-theyre-not-removing-class-components",
    "text": "Addendum: “but they’re not removing class components”"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Over the last years, with the introduction of functional components and hooks, React has gradually been phasing out class components. Although I appreciate the introduction of functional components for their simplicity & conciseness, I think that ", createVNode("mark", {
        title: "read the addendum",
        children: "removing class components"
      }), " was the wrong decision."]
    }), "\n", createVNode(_components.p, {
      children: ["Before going further, let’s establish one thing: closures and classes are two ways to look at the same thing: it’s a pointer to a set of fields & methods. For classes, we call this pointer ", createVNode(_components.code, {
        children: "this"
      }), ". For closures, we call this pointer the closure context. In theory, both constructs are interchangeable, so we should be free to use whichever one is more adapted to the situation at hand. In the following sections, I’ll be arguing that ", createVNode(_components.em, {
        children: "in some cases"
      }), ", being able to use classes is more beneficial than using closures. Essentially, simple components are better written as closures, whereas complex components with more state are better written as classes."]
    }), "\n", createVNode(_components.p, {
      children: ["Let’s look at an example. Below we have equivalent drafts for a ", createVNode(_components.code, {
        children: "Selector"
      }), " component in functional and class versions."]
    }), "\n", createVNode("div", {
      class: "code-blocks-row mb-1",
      children: [createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "tsx",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "tsx",
            "data-theme": "github-dark-dimmed",
            style: {
              display: "grid"
            },
            children: [createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "class"
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: " Selector"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " extends"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " Component"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "  // fields"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  id"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " cuid"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "()"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  ref"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " createRef"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "()"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  position"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { x: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", y: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "}"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: " "
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "  // state"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  state"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    open: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "false"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ","
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    loading: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "false"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ","
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    disabled: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "false"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ","
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    selectedIndex: "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "-"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ","
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  }"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: " "
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "  // methods"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  open"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "() {}"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  close"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "() {}"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  select"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "index"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ") {}"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  focus"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "() {}"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: " "
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "  // result"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  render"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "() {"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "    return"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "      /* ... */"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    )"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  }"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "}"
              })
            })]
          })
        })
      }), createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "tsx",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "tsx",
            "data-theme": "github-dark-dimmed",
            style: {
              display: "grid"
            },
            children: [createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " Selector"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "props"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ") {"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "  // fields"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " id"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " useRef"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "cuid"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "())"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " ref"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " useRef"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "()"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " position"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " useRef"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "({ x: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", y: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " })"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: " "
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "  // state"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  const"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ["
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "open"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "setOpen"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "    useState"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "false"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  const"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ["
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "loading"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "setLoading"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "    useState"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "false"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  const"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ["
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "disabled"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "setDisabled"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "    useState"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "false"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  const"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ["
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "selectedIndex"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "setSelectedIndex"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "    useState"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "-"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: " "
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "  // methods"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " open"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " useCallback"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(() "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "=>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " {}, [])"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " close"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " useCallback"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(() "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "=>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " {}, [])"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " select"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " useCallback"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "index"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ") "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "=>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " {}, [])"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " focus"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " useCallback"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(() "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "=>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " {}, [])"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: " "
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "  // result"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  return"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "    /* ... */"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  )"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "}"
              })
            })]
          })
        })
      })]
    }), "\n", createVNode(_components.h3, {
      id: "issue-1-readability-is-worst",
      children: "Issue #1: Readability is worst"
    }), "\n", createVNode(_components.p, {
      children: ["Whereas the class version uses idiomatic standard javascript syntax, the functional one replicates the same structure by mashing every field, state and method into one big function, where method declaration, field initialization and UI rendering intermingle into one ungodly mess. Class syntax provides me language-backed guarantees that when I look at a method, be it ", createVNode(_components.code, {
        children: "a()"
      }), ", ", createVNode(_components.code, {
        children: "b()"
      }), " or ", createVNode(_components.code, {
        children: "render()"
      }), ", no control flow outside of the function can affect the control flow inside the function and no variable declared inside the function can be used anywhere else. There is a guaranteed encapsulation. I know where the ", createVNode(_components.code, {
        children: "a"
      }), " part is, I know where the ", createVNode(_components.code, {
        children: "render"
      }), " part is."]
    }), "\n", createVNode(_components.p, {
      children: "For the functional version, all the state and temporary variables are stored in the same lexical context. If you’re lucky, the component follows the same structure than it would if it was a class, and temporary variables are declared next to the function where they’re used. If you’re not, they’re interspersed a bit everywhere. Some rendering done here. Oh and some more done after we’ve defined this new function. Oh. ho. o. !."
    }), "\n", createVNode(_components.p, {
      children: ["And you need to wrap everything in ", createVNode(_components.code, {
        children: "useState"
      }), ", ", createVNode(_components.code, {
        children: "useMemo"
      }), " and ", createVNode(_components.code, {
        children: "useCallback"
      }), ". Every field. Every method. Everywhere."]
    }), "\n", createVNode(_components.p, {
      children: ["And then comes the problem of passing part of the internal state of the component around. Say you want to decouple part of the processing to functions in another file. How do you pass the internal state of the component around? For class components, that’s trivial: pass ", createVNode(_components.code, {
        children: "this"
      }), ". For functional components, ", createVNode(_components.code, {
        children: "this"
      }), " is instead the closure context which is… a data structure accessible only to the JS engine :|\nSo what do you do? Either create bag-of-data objects from the state (essentially duplicating the closure context in memory): ", createVNode(_components.code, {
        children: "externalFn({ open, loading, select })"
      }), ". Or mash more functions into the big function."]
    }), "\n", createVNode(_components.p, {
      children: ["And the worst? I lied above. To be 100% equivalent you’d need to wrap with ", createVNode(_components.code, {
        children: "forwardRef"
      }), " and expose the methods with ", createVNode(_components.code, {
        children: "useImperativeHandle"
      }), ":"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "tsx",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " Selector"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " forwardRef"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "function"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Selector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "props"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "ref"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  /* same as above: fields, state, methods */"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  useImperativeHandle"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(ref, () "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ({"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    open,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    close,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    select,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    focus,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }), [])"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  /* same as above: result */"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "})"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "issue-2-dx-is-worst",
      children: "Issue #2: DX is worst"
    }), "\n", createVNode("div", {
      class: "if-firefox text-warning",
      children: "NOTE: You appear to be on firefox. This section doesn’t apply for your browser."
    }), "\n", createVNode(_components.p, {
      children: ["Let’s say you’re debugging some bug that happens in response to an event. The handler calls down some function. Which calls another. Few levels more. You know where the bug happens. You’ve set your ", createVNode(_components.code, {
        children: "debugger"
      }), " breakpoint, deep down in the stack. What does your call stack look like?"]
    }), "\n", createVNode(ExampleStack, {
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/posts/react-functional-components.tsx",
      "client:component-export": "ExampleStack",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Yup. ", createVNode(_components.code, {
        children: "useCallback"
      }), " prevents the function from being assigned directly to a variable, so it’s anonymous and the engine can’t guess it’s name*. This is what you get in the devtools everytime you look at your call stack. Wanna figure what calls resulted in this bug? Go look at every entry of the stack manually."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "* SpiderMonkey is the only exception :O V8 and JSC can’t."
      })
    }), "\n", createVNode(_components.h3, {
      id: "issue-3-performance-is-worst",
      children: "Issue #3: Performance is worst"
    }), "\n", createVNode(_components.p, {
      children: "This one is obvious. Every time your component re-renders, it needs to make:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "tsx",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/* +1 allocation: return array */"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "state"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setState"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useState"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "false"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/* +2 allocations: inline closure, dependency array */"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " method"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useCallback"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(() "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {}, [])"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/* +2 allocations: inline closure, dependency array */"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " derived"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useMemo"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(() "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {}, [props.data])"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["In addition to those, which are “React’s fault”, there are also just more allocations by default because there is no differentiation between initialization (like you know, a ", createVNode(_components.code, {
        children: "constructor()"
      }), ") and rendering, so people keep doing allocations like this one:"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "tsx",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "tsx",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/* +1 allocation: inline object */"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " position"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useRef"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ x: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", y: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "})"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Anyway let’s test it with my poor man’s implementation of react hooks. It’s accurate in terms of performance overhead, the react hooks implementation also uses a linked list (click Show Context to see the implementation)."
    }), "\n", createVNode(ExamplePerformance, {
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/posts/react-functional-components.tsx",
      "client:component-export": "ExamplePerformance",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Alright, I’ll admit that the benchmark here is a bit of a stretch, and that the impact for the large majority of applications is irrelevant. But in some cases, it does. You’re running this on a ", createVNode("mark", {
        title: "I'm guessing I have no idea",
        children: "fast"
      }), " device, what would be the result on a low-end device? What happens when you do get to those stretching use-cases? Then you don’t have a choice but to use the less performant functional components."]
    }), "\n", createVNode(_components.p, {
      children: ["Of course if you have a (real) functional component that is just a pure function ", createVNode(_components.code, {
        children: "Component :: props -> UI"
      }), " with no state & hooks, then for sure the functional one is faster. Functional components do have a place, they’re excellent for simple use-cases. But there’s more than just simple use-cases in life."]
    }), "\n", createVNode(_components.h2, {
      id: "final-notes",
      children: "Final notes"
    }), "\n", createVNode(_components.p, {
      children: ["I wish React would keep class components. But it seems like the maintainers in the last years are forcefully making it impossible to shoot yourself in the foot and make it so there is One Right Way to do things (see the removal of ", createVNode(_components.code, {
        children: "componentWillReceiveProps"
      }), "). Which makes sense, from their point of view. They’re maintaining a library with a huge reach. They get all sort of reports from people with very varying levels of skill. So the biggest problem from their perspective is to ensure that most people are using the library correctly. And that means making things as simple as possible so those with less experience can use it correctly. They baby-proof it. The thing is, by doing so they make it harder to solve hard problems."]
    }), "\n", createVNode("br", {}), "\n", createVNode(RandomPlant, {}), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode("hr", {}), "\n", createVNode(_components.h3, {
      id: "addendum-but-theyre-not-removing-class-components",
      children: ["Addendum: ", createVNode(_components.em, {
        children: "“but they’re not removing class components”"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Any code written with hooks cannot be used from class components, therefore it’s not possible to write new code with classes because the default style is functional components. The maintainers have also stopped making things usable. It’s not possible to use more than one context in a class component (at least in an ergonomic way). And all the new improvements (e.g. ", createVNode(_components.code, {
        children: "useEffect"
      }), ": running something when a specific set of state/props changes) are also not included in the class components API. So yes, they’re removing them."]
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

const url = "src/content/posts/react-functional-components.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/react-functional-components.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/react-functional-components.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
