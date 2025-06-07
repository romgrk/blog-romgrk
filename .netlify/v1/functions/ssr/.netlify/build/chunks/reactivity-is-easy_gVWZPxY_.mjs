import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { $ as $$Aside } from './Aside_6iP3dSQA.mjs';
import { R as RandomPlant } from './RandomPlant_Cpx7-LbW.mjs';
import { jsx } from 'react/jsx-runtime';
import { createContext, useState, useMemo, useRef, useContext, useEffect } from 'react';
import cx from 'clsx';
/* empty css                         */

var Naive;
((Naive2) => {
  const Context = createContext({ focus: 0, setFocus: (_) => {
  } });
  function Grid() {
    const [focus, setFocus] = useState(0);
    const context = useMemo(() => ({ focus, setFocus }), [focus]);
    return /* @__PURE__ */ jsx("div", { className: "rounded-md border border-gray-500 overflow-hidden grid grid-cols-5 md:grid-cols-10", children: /* @__PURE__ */ jsx(Context.Provider, { value: context, children: Array.from({ length: 50 }).map((_, i) => /* @__PURE__ */ jsx(Cell, { index: i })) }) });
  }
  Naive2.Grid = Grid;
  const Cell = ({ index }) => {
    const ref = useRef(null);
    const context = useContext(Context);
    const isFocus = context.focus === index;
    useEffect(() => {
      ref.current?.classList.remove("flash");
      setTimeout(() => {
        ref.current?.classList.add("flash");
      });
    });
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        onClick: () => context.setFocus(index),
        className: cx("rounded-none", isFocus && "ring-2 ring-sky-500 ring-inset"),
        children: index
      }
    );
  };
})(Naive || (Naive = {}));
var Optimized;
((Optimized2) => {
  class Store {
    state;
    listeners;
    constructor(state) {
      this.state = state;
      this.listeners = /* @__PURE__ */ new Set();
    }
    subscribe = (fn) => {
      this.listeners.add(fn);
      return () => {
        this.listeners.delete(fn);
      };
    };
    update = (newState) => {
      this.state = newState;
      this.listeners.forEach((l) => l(newState));
    };
  }
  function useSelector(store, selector, ...args) {
    const [value, setValue] = useState(() => selector(store.state, ...args));
    useEffect(() => store.subscribe((state) => setValue(selector(state, ...args))), []);
    return value;
  }
  const Context = createContext(null);
  function Grid() {
    const [store] = useState(() => new Store({ focus: 0 }));
    return /* @__PURE__ */ jsx("div", { className: "rounded-md border border-gray-500 overflow-hidden grid grid-cols-5 md:grid-cols-10", children: /* @__PURE__ */ jsx(Context.Provider, { value: store, children: Array.from({ length: 50 }).map((_, i) => /* @__PURE__ */ jsx(Cell, { index: i })) }) });
  }
  Optimized2.Grid = Grid;
  const selectors = {
    isFocus: (state, index) => state.focus === index
  };
  const Cell = ({ index }) => {
    const ref = useRef(null);
    const store = useContext(Context);
    const isFocus = useSelector(store, selectors.isFocus, index);
    useEffect(() => {
      ref.current?.classList.remove("flash");
      setTimeout(() => {
        ref.current?.classList.add("flash");
      });
    });
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        onClick: () => store.update({ ...store.state, focus: index }),
        className: cx("rounded-none", isFocus && "ring-2 ring-sky-500 ring-inset"),
        children: index
      }
    );
  };
})(Optimized || (Optimized = {}));

const frontmatter = {
  "title": "Reactivity is easy",
  "description": "",
  "pubDate": "Jun 7 2025",
  "sidebar": {
    "display": false
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-problem-at-hand",
    "text": "The problem at hand"
  }, {
    "depth": 2,
    "slug": "a-solution",
    "text": "A solution"
  }, {
    "depth": 2,
    "slug": "building-up",
    "text": "Building up"
  }, {
    "depth": 3,
    "slug": "react-edge-cases",
    "text": "React edge-cases"
  }, {
    "depth": 3,
    "slug": "a-more-ergonomic-store",
    "text": "A more ergonomic store?"
  }, {
    "depth": 3,
    "slug": "deriving-state--computed-values",
    "text": "Deriving state & computed values"
  }, {
    "depth": 2,
    "slug": "i-want-a-package",
    "text": "I want a package"
  }, {
    "depth": 2,
    "slug": "final-notes",
    "text": "Final notes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  if (!Naive) _missingMdxReference("Naive", false);
  if (!Naive.Grid) _missingMdxReference("Naive.Grid", true);
  if (!Optimized) _missingMdxReference("Optimized", false);
  if (!Optimized.Grid) _missingMdxReference("Optimized.Grid", true);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Reactivity as a concept seems to be still misunderstood in the React ecosystem, and I wanted to provide a write-up of how we solved that problem in the MUI X Data Grid. I think fine-grained selector-based reactivity is possible in React in ", createVNode(_components.strong, {
        children: "less than 35 lines"
      }), ", and I will give you a copy-pastable example of that by the end of this post (and a package for the lazy ones)."]
    }), "\n", createVNode(_components.p, {
      children: "I think it’s important to be able to reduce a problem to its most minimalist solution, because it highlights more clearly what the problem is about. Simplicity is also one of the highest aims we should have for our code, because from simple code emerges easy maintainability and easy performance optimization. Understanding the most minimalist solution to a problem also allows you to build up from it, rather than being handed down a pre-built solution that you don’t understand."
    }), "\n", createVNode(_components.h2, {
      id: "the-problem-at-hand",
      children: "The problem at hand"
    }), "\n", createVNode(_components.p, {
      children: ["To replicate the problem we had in the Data Grid, here is a simple runnable example. It’s a ", createVNode(_components.code, {
        children: "Grid"
      }), " with ", createVNode(_components.code, {
        children: "Cell"
      }), " components inside it. It stores the currently focused cell in a state at the root of the grid, and each cell can update the state when it gets focused:"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "jsx",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "jsx",
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
              children: " Context"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " createContext"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
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
              children: " Grid"
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
              children: "focus"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setFocus"
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
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ");"
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
              children: " context"
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
              children: " ({ focus, setFocus }), [focus]);"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
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
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Context.Provider"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "context"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      {"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "Array."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "from"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ length: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "50"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " })."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "map"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "_"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "i"
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
              children: " ("
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Cell"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " index"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "i"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      ))"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    </"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Context.Provider"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
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
              children: " Cell"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "index"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }) {"
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
              children: " context"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useContext"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(Context);"
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
                color: "#ADBAC7"
              },
              children: " context.focus "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " index;"
            })]
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
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "      onClick"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " context."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "setFocus"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(index)"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "      className"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "clsx"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ focus })"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    >"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      {"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "index"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    </"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["With a bit of styling and some instrumentation to flash-highlight cells when they re-render, here is our grid. You’ll notice that each time you click on a cell, ", createVNode(_components.strong, {
        children: "all the cells re-render"
      }), " :/"]
    }), "\n", createVNode(Naive.Grid, {
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/content/posts/reactivity-is-easy/index.tsx",
      "client:component-export": "Naive.Grid",
      "client:component-hydration": true
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["Because the root ", createVNode(_components.code, {
        children: "Context"
      }), " value needs to change to store the new ", createVNode(_components.code, {
        children: "focus"
      }), " value, then every cell that uses that context also needs to re-render to get to use it. This is an unsatisfying state of things considering that we might have a lot of cells, and each cell may be expensive to render."]
    }), "\n", createVNode(_components.h2, {
      id: "a-solution",
      children: "A solution"
    }), "\n", createVNode(_components.p, {
      children: ["I promised you a solution in less than 35 lines of code, here it is. A store is essentially just a ref object that triggers callbacks when it changes. And those callbacks just need to trigger a targetted re-render, which we can do simply by calling a ", createVNode(_components.code, {
        children: "setState"
      }), " hook function in each component."]
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
          "data-line-numbers": "",
          "data-language": "tsx",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "2",
          children: [createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "type"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Listener"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "S"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "> "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "s"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " S"
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
                color: "#6CB6FF"
              },
              children: " void"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
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
              children: " Store"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "State"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "> {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  public"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " state"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  private"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " listeners"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Set"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "Listener"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "State"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">>;"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  constructor"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "state"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "    this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".state "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " state;"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "    this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".listeners "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " new"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Set"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  public"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " subscribe"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "fn"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Listener"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "State"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">) "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
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
                color: "#6CB6FF"
              },
              children: "    this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".listeners."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "add"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(fn);"
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
              children: " () "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".listeners."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "delete"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(fn); };"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  };"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  public"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " update"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "newState"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
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
              children: " {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "    this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".state "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " newState;"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "    this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".listeners."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "forEach"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "l"
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
                color: "#DCBDFB"
              },
              children: " l"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(newState));"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  };"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
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
              children: " useSelector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "store"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "selector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "args"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") {"
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
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "setValue"
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
              children: "(() "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " selector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(store.state, "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "args));"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  useEffect"
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
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    store."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "subscribe"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "state"
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
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "      setValue"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "selector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state, "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "args)))"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  , []);"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
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
              children: " value;"
            })]
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
    }), "\n", createVNode(_components.p, {
      children: ["To use it, all we have to do is place our ", createVNode(_components.code, {
        children: "Store"
      }), " instance in a context, and then every component can subscribe to store updates via ", createVNode(_components.code, {
        children: "useSelector"
      }), ". Because the selectors select the precise slice of state that a component is interested in, it will not re-render as long as that slice doesn’t change."]
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
              children: " Context"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " createContext"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "();"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "export"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " function"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Grid"
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
              children: "store"
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
              children: "(() "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " new"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Store"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ focus: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }));"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
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
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Context.Provider"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "store"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      {"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "Array."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "from"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ length: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "50"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " })."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "map"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "_"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "i"
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
              children: " ("
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "        <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Cell"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " index"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "i"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      ))"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    </"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Context.Provider"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "}"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
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
              children: " selectors"
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
                color: "#DCBDFB"
              },
              children: "  isFocus"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": ("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "state"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
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
              children: " state.focus "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " index,"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
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
              children: " Cell"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "index"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }) {"
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
              children: " store"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useContext"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(Context);"
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
              children: " useSelector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(store, selectors.isFocus, index);"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
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
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "      ref"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "ref"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "      onClick"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " store."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "update"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "store.state, focus: index })"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "      className"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "clsx"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ focus })"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    >"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      {"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "index"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    </"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "};"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "And finally, here is our updated example. You’ll notice that when you click a cell, only the two cells for which the focus changed re-render. All the other ones never have to ever update."
    }), "\n", createVNode(Optimized.Grid, {
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/content/posts/reactivity-is-easy/index.tsx",
      "client:component-export": "Optimized.Grid",
      "client:component-hydration": true
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["If you’ve noticed, in this example we didn’t even have to use ", createVNode(_components.code, {
        children: "React.memo()"
      }), " to avoid re-renders! The reason it’s not useful is because the store updates target the ", createVNode(_components.code, {
        children: "useState"
      }), " hook inside each cell, so even though the store state changes, the outer ", createVNode(_components.code, {
        children: "Grid"
      }), " never needs to update, therefore it never re-renders its children either. Fine-grained reactivity is so simple, precise, and enjoyable. In practice, once the root component starts using state, you’ll want to have ", createVNode(_components.code, {
        children: "React.memo()"
      }), " though."]
    }), "\n", createVNode($$Aside, {
      title: "When does a component rerender?",
      children: [createVNode(_components.p, {
        children: "As a reminder, components rerender when either of these is true:"
      }), createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: "Their parent re-rendered"
        }), "\n", createVNode(_components.li, {
          children: ["Either ", createVNode(_components.code, {
            children: "useState"
          }), ", ", createVNode(_components.code, {
            children: "useReducer"
          }), " or ", createVNode(_components.code, {
            children: "useContext"
          }), " changed."]
        }), "\n"]
      }), createVNode(_components.p, {
        children: ["And ", createVNode(_components.code, {
          children: "React.memo()"
        }), " is an escape hatch for the 1st point."]
      })]
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-24"
    }), "\n", createVNode(_components.h2, {
      id: "building-up",
      children: "Building up"
    }), "\n", createVNode(_components.p, {
      children: "Alright, now that we’ve established the most minimalist solution here are a few more things to consider."
    }), "\n", createVNode(_components.h3, {
      id: "react-edge-cases",
      children: "React edge-cases"
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.code, {
        children: "useSelector"
      }), " implementation I provided above is nice to understand the concept, but you might run into edge-cases. Since React introduced a new async rendering model, state tearing can happen (analogous to ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Screen_tearing",
        children: "screen tearing"
      }), "). To handle that, you need to use ", createVNode(_components.code, {
        children: "use-sync-external-store"
      }), ", or if you’re using React 18 and above, just ", createVNode(_components.code, {
        children: "React.useSyncExternalStore"
      }), ". The package provides a shim for older versions though, and there’s barely any bundle-size to it so I recommend it."]
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
              children: "import"
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
                color: "#ADBAC7"
              },
              children: "  useSyncExternalStoreWithSelector"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "} "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'use-sync-external-store/with-selector'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
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
              children: " useSelector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "store"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "selector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "args"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  return"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useSyncExternalStoreWithSelector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    store.subscribe,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    store.getSnapshot,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    store.getSnapshot,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "state"
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
                color: "#DCBDFB"
              },
              children: " selector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(state, "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "args),"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  );"
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
    }), "\n", createVNode(_components.h3, {
      id: "a-more-ergonomic-store",
      children: "A more ergonomic store?"
    }), "\n", createVNode(_components.p, {
      children: ["You might have also noticed that updating the store is a bit of a mouthful. Having to write ", createVNode(_components.code, {
        children: "store.update({ ...store.state, focus: 42 })"
      }), " is tedious, it will be even more so once you have a deeper state object. So you might want to add utility methods on the store to be able to write more simply ", createVNode(_components.code, {
        children: "store.set('focus', 42)"
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
          "data-line-numbers": "",
          "data-language": "tsx",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          "data-line-numbers-max-digits": "1",
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
              children: " Store"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "State"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "> {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  /* ... */"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            class: "code-highlighted-line",
            "data-line": "",
            "data-highlighted-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  public"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " set"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "K"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " extends"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " keyof"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "key"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " K"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "["
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "K"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "]) "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " {"
            })]
          }), "\n", createVNode(_components.span, {
            class: "code-highlighted-line",
            "data-line": "",
            "data-highlighted-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "    this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "update"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "state"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", [key]"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " });"
            })]
          }), "\n", createVNode(_components.span, {
            class: "code-highlighted-line",
            "data-line": "",
            "data-highlighted-line": "",
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
              children: "  /* ... */"
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
    }), "\n", createVNode(_components.p, {
      children: ["Here is a simple ", createVNode(_components.code, {
        children: ".set()"
      }), " implementation, but you can build you own by using your favourite utility-belt library to set paths directly, e.g. ", createVNode(_components.code, {
        children: "lodash.set(state, 'a[0].b.c', 42)"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "deriving-state--computed-values",
      children: "Deriving state & computed values"
    }), "\n", createVNode(_components.p, {
      children: ["The minimalist selectors above are just plain functions, and that’s more than enough to understand the concept. However for a production use-case like we had in the Data Grid, being able to compute values derived from the state is essential. To solve that problem, we introduced ", createVNode(_components.strong, {
        children: "memoized selectors"
      }), ". To avoid re-inventing the wheel, we just used redux’s ", createVNode(_components.code, {
        children: "reselect"
      }), " implementation of ", createVNode(_components.code, {
        children: "createSelectorMemoized"
      }), " (", createVNode(_components.a, {
        href: "https://reselect.js.org/api/createselector/",
        children: "docs link"
      }), "):"]
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
              children: "import"
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
              children: "  createSelector "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "as"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " createSelectorMemoized"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "} "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "from"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'reselect'"
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
              children: "// Imagine a datagrid, with a set of rows and a \"sortBy\""
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// key to sort those rows."
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
              children: " store"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " new"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Store"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ rows: ["
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  { id: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", name: "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'John'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " },"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  { id: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", name: "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'Alice'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " },"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  { id: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", name: "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'Bob'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " },"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "], sortBy: "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'id'"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " rowsSelector"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "   ="
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " state"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " state.rows"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " sortBySelector"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " state"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " state.sortBy"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
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
              children: " sortedRowsSelector"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " createSelectorMemoized"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // The selector uses these 2 other selectors as its inputs."
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  rowsSelector,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  sortBySelector,"
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
              children: "  // Instead of receiving the `state`, it receives the return values"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  // of the selectors above, and it outputs a sorted rows array."
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  ("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "rows"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "sortBy"
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
              children: " {"
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
              children: " rows."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "toSorted"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "a"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "b"
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
                color: "#DCBDFB"
              },
              children: " compare"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(a[sortBy], b[sortBy]))"
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
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "And then using that selector is as simple as using any other selector:"
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
              children: "function"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Component"
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
              children: "  const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " store"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useContext"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(Context)"
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
              children: " sortedRows"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useSelector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(store, sortedRowsSelector)"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  /* ... */"
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
    }), "\n", createVNode(_components.p, {
      children: ["And ", createVNode(_components.code, {
        children: "sortedRows"
      }), " never gets computed more than it needs to 🪄."]
    }), "\n", createVNode(_components.p, {
      children: ["In practice we write all our selectors with ", createVNode(_components.code, {
        children: "createSelectorMemoized"
      }), " and an equivalent non-memoized ", createVNode(_components.code, {
        children: "createSelector"
      }), ", which lets us write them in a consistent way as well as add some instrumentation over them."]
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
              children: " rows"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  createSelector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "state"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
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
              children: " state.rows)"
            })]
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
              children: " sortBy"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " createSelector"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "state"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " State"
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
              children: " state.sortBy)"
            })]
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
              children: " sortedRows"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " createSelectorMemoized"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  rows, sortBy,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  ("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "rows"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "sortBy"
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
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    rows."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "toSorted"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "a"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "b"
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
                color: "#DCBDFB"
              },
              children: " compare"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(a[sortBy], b[sortBy]))"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This syntax could also allow us in the future (with some magic) to possibly switch to an event-based reactivity model, while using a selector-based syntax 🙈. The concept is based on a automatic subscription model similar to SolidJS signals. That’s for another post though."
    }), "\n", createVNode($$Aside, {
      title: "When to use memoization?",
      children: [createVNode(_components.p, {
        children: "The rule for using memoization in selectors is:"
      }), createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: "The result is a derived non-primitive value."
        }), "\n", createVNode(_components.li, {
          children: "The selector is computationally expensive."
        }), "\n"]
      }), createVNode(_components.p, {
        children: "Don’t under-use nor over-use it, or you’ll suffer consequences."
      })]
    }), "\n", createVNode(_components.h2, {
      id: "i-want-a-package",
      children: "I want a package"
    }), "\n", createVNode(_components.p, {
      children: "You probably want a package and I don’t blame you, I’m also very lazy."
    }), "\n", createVNode(_components.p, {
      children: ["I’ve published this code including the building-up section as a package on NPM as ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/store-x-selector",
        children: "store-x-selector"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["It contains a few more performance optimizations to make selector with arguments as cost-less as possible (for example, it doesn’t use ", createVNode(_components.code, {
        children: "...args"
      }), " to avoid an array allocation), and it also contains accurate typings for all of this."]
    }), "\n", createVNode(_components.h2, {
      id: "final-notes",
      children: "Final notes"
    }), "\n", createVNode(_components.p, {
      children: "If you have any comments, corrections or questions, email in the footer. I’m always happy to receive feedback or questions from readers."
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-32"
    }), "\n", createVNode("div", {
      className: "text-neutral-500",
      children: createVNode(_components.p, {
        children: ["If you’ve made it this far, I invite you to view ", createVNode(_components.a, {
          href: "/castle",
          children: "The Castle"
        }), "."]
      })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/posts/reactivity-is-easy.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/reactivity-is-easy.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/reactivity-is-easy.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
