import { d as createVNode, F as Fragment$1, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { $ as $$Aside } from './Aside_6iP3dSQA.mjs';
import { R as RandomPlant } from './RandomPlant_Cpx7-LbW.mjs';
import { B as Benchmark } from './Benchmark_BFF0lpJ6.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                               */
import { C as CodeRunner } from './CodeRunner_pm5GBAFU.mjs';
import 'clsx';

const initial = [0, 0, 0, 0, 0, 0, 0, 0];
const positions = [7, 6, 5, 4, 3, 2, 1, 0];
function BytePattern(props) {
  const [values, setValues] = useState(() => {
    if (!props.initialValue) return initial;
    return props.initialValue.split("").reverse().map(Number);
  });
  const total = positions.reduce((acc, index) => {
    return acc + values[index] * (index === 7 ? -1 : 1) * 2 ** index;
  }, 0);
  return /* @__PURE__ */ jsx("table", { className: "BytePattern font-mono tabular-nums", children: /* @__PURE__ */ jsxs("tbody", { children: [
    /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { children: "Bit" }),
      positions.map(
        (index) => /* @__PURE__ */ jsx("td", { className: "text-center", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "md:w-full " + (values[index] ? "" : "btn--outlined"),
            onClick: () => {
              const newValues = [...values];
              newValues[index] = values[index] ? 0 : 1;
              setValues(newValues);
            },
            children: values[index]
          },
          index
        ) }, index)
      )
    ] }),
    /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { children: "Value" }),
      positions.map(
        (index) => /* @__PURE__ */ jsxs("td", { className: "text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "md:hidden", children: values[index] ? /* @__PURE__ */ jsxs(Fragment, { children: [
            index === 7 ? "-" : "",
            /* @__PURE__ */ jsxs("span", { children: [
              "2^",
              index
            ] })
          ] }) : /* @__PURE__ */ jsx("span", { children: "0" }) }),
          /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: values[index] ? /* @__PURE__ */ jsxs(Fragment, { children: [
            index === 7 ? "-" : /* @__PURE__ */ jsx("span", { children: " " }),
            /* @__PURE__ */ jsxs("span", { children: [
              "2^",
              index,
              " "
            ] })
          ] }) : /* @__PURE__ */ jsx("span", { children: "  0  " }) })
        ] }, index)
      )
    ] }),
    /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { children: "Total" }),
      /* @__PURE__ */ jsx("td", { colSpan: 8, className: "text-right font-bold", children: /* @__PURE__ */ jsx("span", { className: "mr-4 text-blue-400", children: total }) })
    ] })
  ] }) });
}

const frontmatter = {
  "title": "The fastest JS color library",
  "description": "",
  "pubDate": "Sep 3 2024",
  "sidebar": {
    "display": true,
    "depth": 2
  },
  "rating": 8
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-representation",
    "text": "1. Representation"
  }, {
    "depth": 3,
    "slug": "all-is-good-right",
    "text": "All is good, right?"
  }, {
    "depth": 4,
    "slug": "number-representation-in-v8",
    "text": "Number representation in V8"
  }, {
    "depth": 4,
    "slug": "number-representation-in-jscspidermonkey",
    "text": "Number representation in JSC/SpiderMonkey"
  }, {
    "depth": 3,
    "slug": "so-how-do-we-use-int32",
    "text": "So how do we use int32?"
  }, {
    "depth": 2,
    "slug": "2-parsing",
    "text": "2. Parsing"
  }, {
    "depth": 2,
    "slug": "3-formatting",
    "text": "3. Formatting"
  }, {
    "depth": 2,
    "slug": "4-benchmarks",
    "text": "4. Benchmarks"
  }, {
    "depth": 2,
    "slug": "5-closing-thoughts",
    "text": "5. Closing thoughts"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment$1, {
    children: [createVNode(_components.p, {
      children: ["Recently I spent some time optimizing the performance of our color manipulation code ", createVNode(_components.a, {
        href: "https://mui.com/blog/material-ui-v6-is-out/",
        children: "at work"
      }), ", and I’m fairly gruntled with the results so I’m releasing the library—", createVNode(_components.a, {
        href: "https://github.com/romgrk/color-bits",
        children: "color-bits"
      }), "—as a standalone as I think it can be useful for other use-cases. I wanted to dive here a bit more in depth into what makes it fast, as it ties well into my last post on performance optimization, and I’ll also be presenting a few benchmarks to illustrate the points."]
    }), "\n", createVNode(_components.h2, {
      id: "1-representation",
      children: "1. Representation"
    }), "\n", createVNode(_components.p, {
      children: "In javascript the usual way to store RGBA colors would be something like this:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: createVNode(_components.span, {
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
              children: " color"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { red: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", green: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", blue: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", alpha: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1.0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }"
            })]
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["This representation is idiomatic and readable, but it also implies allocating a new heap object for each color. Knowing that RGBA colors go from ", createVNode(_components.code, {
        children: "#00000000"
      }), " to ", createVNode(_components.code, {
        children: "#ffffffff"
      }), " (or in others words, the numbers from ", createVNode(_components.code, {
        children: "0x0000000"
      }), " to ", createVNode(_components.code, {
        children: "0xffffffff"
      }), ") and that it’s 32 bits of data, we only really just need a single number value to encode those few bits."]
    }), "\n", createVNode(_components.p, {
      children: "Lucky us, that’s precisely the amount we have available through javascript bitwise operators:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "javascript",
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
              children: " color"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  (red   "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 24"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  (green "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  (blue  "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  8"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  (alpha "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "So let’s jump quickly in a benchmark to compare how the two approaches fare. In the following example, we fill a 100-length array with some shades of blue. Why a 100-length array and not just one big array with all the colors? Because it reflects what happens in a production context. You have colors going through the system, then those colors are discarded. Those discarded values must then be processed by the garbage collector, which explains…"
    }), "\n", createVNode("div", {
      id: "benchmark-compare",
      class: "code-blocks-row",
      children: [createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "javascript",
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
                children: "// 1. object"
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
                  color: "#DCBDFB"
                },
                children: " newColor"
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
                children: "blue"
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
                children: " ({"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  red: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "0"
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
                children: "  green: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "0"
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
                children: "  blue: blue,"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  alpha: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1.0"
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
                children: "})"
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
                children: " colors"
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
                children: " Array"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "100"
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
                children: "for"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100_000"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "++"
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
                  color: "#6CB6FF"
                },
                children: " index"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  colors[index] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " newColor"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(index)"
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
      }), createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "javascript",
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
                children: "// 2. number"
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
                  color: "#DCBDFB"
                },
                children: " newColor"
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
                children: "blue"
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
                children: "  (   "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " <<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 24"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ") "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "|"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  (   "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " <<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 16"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ") "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "|"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  (blue "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "  8"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ") "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "|"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  ( "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "255"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " <<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "  0"
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
                children: " colors"
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
                children: " Array"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "100"
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
                children: "for"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100_000"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "++"
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
                  color: "#6CB6FF"
                },
                children: " index"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  colors[index] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " newColor"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(index)"
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
      })]
    }), "\n", createVNode(Benchmark, {
      selector: "#benchmark-compare",
      results: {
        "1. object": {
          "runTime": -1e3,
          "amountOfRounds": 4031,
          "percent": 35.82
        },
        "2. number": {
          "runTime": -1e3,
          "amountOfRounds": 11255,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["It’s interesting to take a look at the stack traces for that benchmark as well. On the left is the ", createVNode(_components.code, {
        children: "object"
      }), " representation case, and on the right the ", createVNode(_components.code, {
        children: "number"
      }), " one. As we can see, the ", createVNode(_components.code, {
        children: "object"
      }), " one is constantly creating pressure for the garbage collector—each of those ticks is a “Minor GC” entry. ", createVNode(_components.strong, {
        children: "Creating objects is expensive!"
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/color-bits-stack.png",
        alt: "Stack traces for the object vs number benchmark"
      }), "\n", createVNode(_components.em, {
        children: "Stack traces for the object vs number benchmark"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["So let’s just use ", createVNode(_components.code, {
        children: "number"
      }), " values and…"]
    }), "\n", createVNode(_components.h3, {
      id: "all-is-good-right",
      children: "All is good, right?"
    }), "\n", createVNode(_components.p, {
      children: "As I was happily piping those numbers through the test code, I realized to my big disappointment that javascript bitwise operators operate on 32-bits…signed."
    }), "\n", createVNode(CodeRunner, {
      autoRun: true,
      consoleLines: 1,
      codeLines: 2,
      code: `
  const red = 0xff
  expect(red << 24).toEqual(0xff000000)
`,
      context: `
  function expect(value) {
    return {
      toEqual: function(expected) {
        if (value !== expected) {
          console.log('ERROR: Expected ' + expected + ' but got ' + value)
        }
      }
    }
  }
`,
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/CodeRunner.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["So instead of ", createVNode(_components.code, {
        children: "0xff << 24"
      }), " being equal to ", createVNode(_components.code, {
        children: "0xff000000"
      }), ", it equals ", createVNode(_components.code, {
        children: "-0x1000000"
      }), ". Our precious bits are all mangled by the bitwise operators! As I was running through my mind for solutions, my first thought was obviously to cast back the results from ", createVNode(_components.code, {
        children: "int32"
      }), " to ", createVNode(_components.code, {
        children: "uint32"
      }), ". After all, it’s not more complicated than this:"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "javascript",
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
              children: " cast"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "int32Value"
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
                color: "#ADBAC7"
              },
              children: " int32Value "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">>>"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0"
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
      children: ["As a reminder, all bitwise operators turn their values into ", createVNode(_components.code, {
        children: "int32"
      }), " numbers, ", createVNode(_components.em, {
        children: "except"
      }), " for ", createVNode(_components.code, {
        children: ">>>"
      }), " which is the “unsigned right shift” operation and the only one that operates on ", createVNode(_components.code, {
        children: "uint32"
      }), " values."]
    }), "\n", createVNode(_components.p, {
      children: "So I was quite unhappy about adding more instructions, but hey, at least it’s still all bitwise operations on numbers, which are pretty cheap. Right?"
    }), "\n", createVNode(_components.p, {
      children: ["Well the more I benchmarked, the more I found that solution to be unsatisfying. The problem isn’t merely the additional operation, it’s also that some particular engine applies a particular performance optimization that speeds up numbers up to… the 32-bits signed range. Namely, V8, the one that runs on 70% of browsing devices, and that powers NodeJS. So as soon as a color would overflow the ", createVNode(_components.code, {
        children: "int32"
      }), " range (in other words, any color greater than or equal to ", createVNode(_components.code, {
        children: "0x80000000"
      }), "), the whole codebase would slow down by a substantial factor! Red-ish colors were more expensive than blue-ish or green-ish colors, and it didn’t sit well with me. So let’s dive into what’s happening."]
    }), "\n", createVNode(_components.h4, {
      id: "number-representation-in-v8",
      children: "Number representation in V8"
    }), "\n", createVNode($$Aside, {
      title: "About CPU architecture",
      children: createVNode(_components.p, {
        children: ["I will be assuming a 64-bits architecture because that’s most devices that run a JS engine today, but you can get the full picture in ", createVNode(_components.a, {
          href: "https://v8.dev/blog/pointer-compression",
          children: "https://v8.dev/blog/pointer-compression"
        }), "."]
      })
    }), "\n", createVNode(_components.p, {
      children: "In a common device, passing values up to 64-bits is cheap because you can pass the value through CPU registers directly—their length is 64-bits. Values or objects above that size must be stored in memory, and passed as a (64-bits) pointer to that location. And pointers normally should make up all of JS values, because the garbage collector also needs to scan the heap for pointers to figure out which objects are not referenced anymore and can be freed. If there were numbers mixed with pointers, the GC wouldn’t be able to know if the value is a pointer or a number."
    }), "\n", createVNode(_components.p, {
      children: ["But 64-bits of pointer location, that’s ", createVNode("abbr", {
        title: "18,446,744,073,709,552,000",
        children: "a lot"
      }), " of bytes, and maybe we don’t really need all those addresses. So V8 says we’ll use one of those bits to tag if the value is a pointer or a number, and if it’s a number, we’ll store 32-bits of data in there, and we’ll call that a “Smi” because it’s a beautiful name."]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "text",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "text",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "                                            tag -->|"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "            |----- 32 bits -----|----- 32 bits -----|"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "Pointer:    |________________address_______________1|"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "Smi:        |____int32_value____|0000000000000000000|"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["So there you go, that’s why you don’t want to go over the ", createVNode(_components.code, {
        children: "int32"
      }), " range in V8. If your number overflows the ", createVNode(_components.code, {
        children: "int32"
      }), " range, it becomes a pointer to a number value elsewhere in the heap. We can run a benchmark to make sure that’s the case. This is an example where we just add up the same value a bunch of times, but it’s either inside the Smi range, or outside. I’m going to include the numbers instead of a live one because I want to show the performance across engines, but the code is available ", createVNode(_components.a, {
        href: "https://github.com/romgrk/js-benchmark/blob/0a3245640a0a76d5700a54dc41ee8d3dab34da4b/benchmarks/integers.js",
        children: "here"
      }), " if you want to run it yourself:"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "text",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "text",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "> node ./index.js ./benchmarks/integers.js"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "### node: v22.7.0 ###"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "adding 2^31 - 1: ##############################  100.00% (1,685,399 ops)"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "adding 2^31 + 1: #####################.........   72.36% (1,219,483 ops)"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "### bun: 1.1.26 ###"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "adding 2^31 - 1: ##############################  100.00% (2,184,201 ops)"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "adding 2^31 + 1: #####.........................   18.77%   (409,935 ops)"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "### gjs: 1.80.2 ###"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "adding 2^31 - 1: ##############################  100.00% (1,169,879 ops)"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "adding 2^31 + 1: ##################............   62.74%   (733,938 ops)"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["This should be taken with a grain of salt because it’s a microbenchmark, but it still makes it painfully clear that overflowing the ", createVNode(_components.code, {
        children: "int32"
      }), " range even by a tiny ", createVNode(_components.code, {
        children: "+1"
      }), " makes a significant different across all engines for math operations. I don’t know enough about the other engines (", createVNode(_components.code, {
        children: "bun"
      }), " is JSC-based, and ", createVNode(_components.code, {
        children: "gjs"
      }), " is SpiderMonkey-based by the way) to explain why it has so much of an influence, but while we’re here we might as well look into…"]
    }), "\n", createVNode(_components.h4, {
      id: "number-representation-in-jscspidermonkey",
      children: "Number representation in JSC/SpiderMonkey"
    }), "\n", createVNode(_components.p, {
      children: ["Both engines use variations of a technique called NaN-boxing. Double values, also known as ", createVNode(_components.code, {
        children: "float64"
      }), " or ", createVNode(_components.code, {
        children: "f64"
      }), " in more pragmatic languages, or IEEE-754 in technical terms, is what the EcmaScript spec defines as ", createVNode(_components.code, {
        children: "number"
      }), ", and they are encoded in 64-bits as such:"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "text",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "text",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "       1 bit sign"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "      |-|-- 11 bits ---|------------ 52 bits ---------------|"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "      |±|___exponent___|_____________mantissa_______________|"
            })
          })]
        })
      })
    }), "\n", createVNode($$Aside, {
      title: "IEEE-755 in details",
      children: [createVNode(_components.p, {
        children: "The formula to turn those bits into a number is the following one:"
      }), createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "javascript",
            "data-theme": "github-dark-dimmed",
            style: {
              display: "grid"
            },
            children: createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "pow"
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
                children: ", sign) "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "pow"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "2"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1023"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " -"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " exponent) "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " +"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " mantissa)"
              })]
            })
          })
        })
      }), createVNode("br", {}), createVNode(_components.p, {
        children: ["And for an example, this is how ", createVNode(_components.code, {
          children: "1"
        }), " is represented in f64 encoding:"]
      }), createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "text",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "text",
            "data-theme": "github-dark-dimmed",
            style: {
              display: "grid"
            },
            children: [createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                children: "      0_____01111111111______________000000000000...00000000000000"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                children: " (-1)^0  *  2^(1023 - 1023)  *  (1 + 0)"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                children: "     1   *  1                *   1"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                children: "   = 1"
              })
            })]
          })
        })
      }), createVNode("br", {}), createVNode(_components.p, {
        children: [createVNode(_components.a, {
          href: "https://bartaz.github.io/ieee754-visualization/",
          children: "Interactive visualization"
        }), " | ", createVNode(_components.a, {
          href: "https://en.wikipedia.org/wiki/Double-precision_floating-point_format",
          children: "Wikipedia"
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The neat trick is, ", createVNode(_components.code, {
        children: "float64"
      }), " encoding defines ", createVNode(_components.code, {
        children: "NaN"
      }), " as any 64-bits pattern where the exponent bits are all set to ", createVNode(_components.code, {
        children: "1"
      }), " and the mantissa is non-zero. So for example, both ", createVNode(_components.code, {
        children: "0b0_11111111111_1000..."
      }), " and ", createVNode(_components.code, {
        children: "0b0_11111111111_0100..."
      }), " represent ", createVNode(_components.code, {
        children: "NaN"
      }), ", and so forth. Instead of wasting those values, the engine can pick a single way to represent ", createVNode(_components.code, {
        children: "NaN"
      }), ", and use the rest of those bits to put pointers, integers, etc."]
    }), "\n", createVNode(_components.p, {
      children: ["As a sidenote, this is also the reason why ", createVNode(_components.code, {
        children: "Number.MAX_SAFE_INTEGER"
      }), " equals ", createVNode(_components.code, {
        children: "2^53 - 1"
      }), ", that’s as much precision as ", createVNode(_components.code, {
        children: "float64"
      }), " allows. The exponent uses the 11 other bits that make it to a 64 bits total."]
    }), "\n", createVNode(_components.p, {
      children: "But I’m digressing, so let’s go back to the issue."
    }), "\n", createVNode(_components.h3, {
      id: "so-how-do-we-use-int32",
      children: "So how do we use int32?"
    }), "\n", createVNode(_components.p, {
      children: ["As it became apparent that with the language and all the engines conspiring against me, I wasn’t going to get any ", createVNode(_components.code, {
        children: "uint32"
      }), " anytime soon. That’s when I realized the very simple solution that had been there all along: ", createVNode(_components.strong, {
        children: "do nothing"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Let me recap how negative numbers and two’s complement work. Taking a single byte (a ", createVNode(_components.code, {
        children: "uint8"
      }), " value) for simplicity, here is how each bit relates to its value:"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "text",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "text",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "Index: |   8  |  7  |  6  |  5  |  4  |  3  |  2  |  1  | "
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "       |------|-----|-----|-----|-----|-----|-----|-----|"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              children: "Value: | -2^7 | 2^6 | 2^5 | 2^4 | 2^3 | 2^2 | 2^1 | 2^0 |"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "So for the following bit patterns, the corresponding values are:"
    }), "\n", createVNode(BytePattern, {
      initialValue: "00000101",
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/BytePattern.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "And for negative values, if we set the high bit:"
    }), "\n", createVNode(BytePattern, {
      initialValue: "10000000",
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/BytePattern.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["And a last one, for ", createVNode(_components.code, {
        children: "-1"
      }), ":"]
    }), "\n", createVNode(BytePattern, {
      initialValue: "11111111",
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/BytePattern.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["So why pick a scheme like two’s complement instead something more simple? After all, ", createVNode(_components.code, {
        children: "float64"
      }), " encoding uses the first bit to signal ", createVNode(_components.code, {
        children: "+/-"
      }), ", isn’t that more simple? The last bit pattern here might have given you a clue. The idea behind two’s complement is that for some operations like say addition, we don’t need separate machine instructions for signed & unsigned values. The bits stay the same, but their interpretation changes. So for example, if you subtract ", createVNode(_components.code, {
        children: "1"
      }), " from ", createVNode(_components.code, {
        children: "0b00000000"
      }), ", the bits would be ", createVNode(_components.code, {
        children: "0b11111111"
      }), " in both signed mode (where the value is ", createVNode(_components.code, {
        children: "255"
      }), ") and unsigned mode (where the value is ", createVNode(_components.code, {
        children: "-1"
      }), "). Using this convention simplifies CPUs, which in turns allows them to be leaner & faster. This means that when you compile in a native language a data type like ", createVNode(_components.code, {
        children: "u32"
      }), " or ", createVNode(_components.code, {
        children: "i32"
      }), ", the type disappear after compilation and the CPU only sees untyped bits. Some operations still require special handling for signed/unsigned numbers, but in those cases the instruction itself will be typed, not the data. For example, ", createVNode(_components.code, {
        children: "x86"
      }), " has the ", createVNode(_components.code, {
        children: "MUL"
      }), " instruction for unsigned multiplication and ", createVNode(_components.code, {
        children: "IMUL"
      }), " for signed multiplication."]
    }), "\n", createVNode(_components.p, {
      children: ["I hope this all explains my previous epiphany about ", createVNode(_components.strong, {
        children: "doing nothing"
      }), ". Our bits were never mangled by bitwise operators, the bits were where they were supposed to be all along. If you ", createVNode(_components.code, {
        children: "0xff << 24"
      }), ", the underlying bit pattern will still be ", createVNode(_components.code, {
        children: "0b111111110000....0000"
      }), " regardless if the number is interpreted as signed or unsigned."]
    }), "\n", createVNode(_components.p, {
      children: ["I think it’s a very normal thing to reach for ", createVNode(_components.code, {
        children: "uint32"
      }), ", it’s the logical representation for 4 packed bytes. But in the limited context of javascript, going for what is available instead is the better option. I’ve seen other libraries as well do the same mistake, for example I was reading ", createVNode(_components.a, {
        href: "https://github.com/pmndrs/react-spring/blob/fd65b605b85c3a24143c4ce9dd322fdfca9c66be/packages/shared/src/normalizeColor.ts#L48-L49",
        children: "react-spring’s color handling code"
      }), " the other day, and I saw that they too had gone for the cast (", createVNode(_components.code, {
        children: ">>> 0"
      }), ") to turn their values into the more logical ", createVNode(_components.code, {
        children: "uint32"
      }), " format. But introducing all those ", createVNode(_components.code, {
        children: "int32"
      }), " values all over the place incurs a performance penalty that propagates through any function that handles those values, and in a color manipulation library, that’s all of the functions."]
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-16"
    }), "\n", createVNode(_components.h2, {
      id: "2-parsing",
      children: "2. Parsing"
    }), "\n", createVNode(_components.p, {
      children: ["Satisfied with the color representation, I went on to look at the next most expensive operation in a color library. I won’t go into details into formats others than ", createVNode(_components.code, {
        children: "#rrggbbaa"
      }), " because for the other ones (", createVNode(_components.code, {
        children: "rgba()"
      }), ", ", createVNode(_components.code, {
        children: "hsl()"
      }), ", ", createVNode(_components.code, {
        children: "color(display-p3, )"
      }), ", etc), anything other than regex parsing was suboptimal. Yes I tried a standard recursive descent top-down parser, unfortunaly this is javascript, and that sort of work is better left to the engine."]
    }), "\n", createVNode(_components.p, {
      children: "However, I had a feeling that hexadecimal parsing in particular could be improved."
    }), "\n", createVNode(_components.p, {
      children: "Let’s take for example a naive regex approach:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "javascript",
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
              children: " pattern"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " /#("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: ".."
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: ")("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: ".."
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: ")("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: ".."
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: ")("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: ".."
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: ")/"
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
              children: " parseHex_regex"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "color"
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
                color: "#6CB6FF"
              },
              children: " m"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "match"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(pattern)"
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
              children: "    ("
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "parseInt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(m["
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "], "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 24"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ("
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "parseInt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(m["
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "], "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ("
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "parseInt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(m["
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "], "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  8"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ("
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "parseInt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(m["
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "], "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
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
    }), "\n", createVNode(_components.p, {
      children: ["The problem with such an approach is that we would be creating a lot of allocations, the return value of ", createVNode(_components.code, {
        children: "RegExp.prototype.match"
      }), " being quite heavy—it’s an array of strings with custom fields. As we’ve seen in the first benchmark, avoiding object allocations is crucial to maintain a good performance."]
    }), "\n", createVNode(_components.p, {
      children: "So a good iteration on that to avoid the fat result array would be something like this:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "javascript",
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
              children: " parseHex_slice"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "color"
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
              children: "    ("
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "parseInt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "slice"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "), "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 24"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ("
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "parseInt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "slice"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "), "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ("
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "parseInt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "slice"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "), "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  8"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ("
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "parseInt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "slice"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "9"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "), "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
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
    }), "\n", createVNode(_components.p, {
      children: ["But the problem is that even if we got rid of the fat result array, the ", createVNode(_components.code, {
        children: ".slice()"
      }), " calls are still allocating 4 strings, and those strings are going to create more GC pauses."]
    }), "\n", createVNode(_components.p, {
      children: ["The only solution to extract characters of a string as numbers rather than strings is ", createVNode(_components.code, {
        children: ".charCodeAt()"
      }), ", so that’s what I picked to use for my fast parsing implementation. There are two techniques that I explored to turn those characters into their hexadecimal values, both of which I found on ", createVNode(_components.a, {
        href: "https://lemire.me/blog/2019/04/17/parsing-short-hexadecimal-strings-efficiently/",
        children: "Daniel Lemire’s blog"
      }), " (where I somehow always end up when researching obscure optimization problems). The first one is to use a mathematical function, and the second one is to use a lookup array. Here is a javascript port of both:"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "javascript",
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
              children: "// Transform char code to its hexadecimal value"
            })
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
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "c"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") { "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "return"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (c "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "&"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0xf"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 9"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " *"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (c "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">>"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 6"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") }"
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
              children: " parseHex_function"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "color"
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
                color: "#6CB6FF"
              },
              children: " r"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")) "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 4"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "))"
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
              children: " g"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")) "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 4"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "))"
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
              children: " b"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")) "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 4"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "6"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "))"
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
              children: " a"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")) "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 4"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "8"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "))"
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
              children: "    (r "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 24"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    (g "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    (b "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  8"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    (a "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
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
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "javascript",
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
              children: "// Transform char code to its hexadecimal value,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// but as a lookup array."
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
              children: " _"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0"
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
              children: " X"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ["
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",   "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "6"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "8"
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
                color: "#6CB6FF"
              },
              children: " 9"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  _,  _,  _,  _,  _,  _,  _, "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "10"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "11"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "12"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "13"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "14"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "15"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  _,  _,  _,  _,  _,"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _, "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "10"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "11"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "12"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "13"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "14"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "15"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " _,  _,  _,  _,  _,  _,  _,  _,  _"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "]"
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
              children: " parseHex_table"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "color"
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
                color: "#6CB6FF"
              },
              children: " r"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")] "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 4"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")]"
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
              children: " g"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")] "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 4"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "4"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")]"
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
              children: " b"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")] "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 4"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "6"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")]"
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
              children: " a"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")] "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 4"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "charCodeAt"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "8"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")]"
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
              children: "    (r "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 24"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    (g "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    (b "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  8"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "|"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    (a "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "<<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            })]
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
    }), "\n", createVNode(_components.p, {
      children: "With all that setup, let’s benchmark to see which one is the fastest:"
    }), "\n", createVNode("div", {
      id: "benchmark-parse",
      class: "code-blocks",
      children: [createVNode("div", {
        class: "hidden",
        children: createVNode(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: createVNode(_components.pre, {
            style: {
              backgroundColor: "#22272e",
              color: "#adbac7"
            },
            tabindex: "0",
            "data-language": "javascript",
            "data-theme": "github-dark-dimmed",
            children: createVNode(_components.code, {
              "data-language": "javascript",
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
                  children: "// setup"
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
                  children: " pattern"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: " /#("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: ".."
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: ")("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: ".."
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: ")("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: ".."
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: ")("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: ".."
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: ")/"
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
                  children: " parseHex_regex"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#F69D50"
                  },
                  children: "color"
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
                    color: "#6CB6FF"
                  },
                  children: " m"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "match"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(pattern)"
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
                  children: "    ("
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "parseInt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(m["
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "1"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "], "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 24"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    ("
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "parseInt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(m["
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "2"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "], "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    ("
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "parseInt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(m["
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "3"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "], "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "  8"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    ("
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "parseInt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(m["
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "], "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "  0"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")"
                })]
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
                  children: " parseHex_slice"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#F69D50"
                  },
                  children: "color"
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
                  children: "    ("
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "parseInt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "slice"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "1"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "3"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "), "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 24"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    ("
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "parseInt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "slice"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "3"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "5"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "), "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    ("
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "parseInt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "slice"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "5"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "7"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "), "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "  8"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    ("
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "parseInt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "slice"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "7"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "9"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "), "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "  0"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")"
                })]
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
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: " "
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#768390"
                  },
                  children: "// Char code to its hex value"
                })
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
                  children: " x"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#F69D50"
                  },
                  children: "c"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") { "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "return"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " (c "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "&"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 0xf"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "+"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 9"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " *"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " (c "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: ">>"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 6"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") }"
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
                  children: " parseHex_function"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#F69D50"
                  },
                  children: "color"
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
                    color: "#6CB6FF"
                  },
                  children: " r"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: " x"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "1"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")) "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " |"
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: " x"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "2"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "))"
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
                  children: " g"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: " x"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "3"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")) "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " |"
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: " x"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "))"
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
                  children: " b"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: " x"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "5"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")) "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " |"
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: " x"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "6"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "))"
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
                  children: " a"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: " x"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "7"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")) "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " |"
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: " x"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "8"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "))"
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
                  children: "    (r "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 24"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    (g "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    (b "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "  8"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    (a "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "  0"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")"
                })]
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
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: " "
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#768390"
                  },
                  children: "// Char code to its hex value, but as a table"
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
                  children: " _"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 0"
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
                  children: " X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " ["
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "0"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ",   "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "1"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "2"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ",  "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "3"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ",  "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ",  "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "5"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ",  "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "6"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ",  "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "7"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ",  "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "8"
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
                    color: "#6CB6FF"
                  },
                  children: " 9"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ",  _,  _,  _,  _,  _,  _,  _, "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "10"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "11"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "12"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "13"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "14"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "15"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ",  _,  _,  _,  _,  _,"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _, "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "10"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "11"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "12"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "13"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "14"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "15"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ",  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,  _,"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _,  _,  _,  _,  _,  _,  _,  _,  _"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "]"
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
                  children: " parseHex_table"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#F69D50"
                  },
                  children: "color"
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
                    color: "#6CB6FF"
                  },
                  children: " r"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "1"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")] "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " |"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "2"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")]"
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
                  children: " g"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "3"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")] "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " |"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")]"
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
                  children: " b"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "5"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")] "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " |"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "6"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")]"
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
                  children: " a"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "7"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")] "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 4"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " |"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "charCodeAt"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "8"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")]"
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
                  children: "    (r "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 24"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    (g "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    (b "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "  8"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ") "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "|"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    (a "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "<<"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "  0"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")"
                })]
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
        })
      }), createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "javascript",
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
                children: "// setup"
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
                children: " N"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100_000"
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
                children: " colors"
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
                children: " Array"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "100"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
              })]
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
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "javascript",
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
                children: "// 1. regex"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "for"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " N"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "++"
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
                  color: "#ADBAC7"
                },
                children: "  colors[i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100"
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
                children: " parseHex_regex"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'#599eff80'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
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
      }), createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "javascript",
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
                children: "// 2. slice"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "for"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " N"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "++"
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
                  color: "#ADBAC7"
                },
                children: "  colors[i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100"
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
                children: " parseHex_slice"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'#599eff80'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
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
      }), createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "javascript",
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
                children: "// 3. char + function"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "for"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " N"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "++"
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
                  color: "#ADBAC7"
                },
                children: "  colors[i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100"
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
                children: " parseHex_function"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'#599eff80'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
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
      }), createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "javascript",
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
                children: "// 4. char + table"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "for"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " N"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "++"
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
                  color: "#ADBAC7"
                },
                children: "  colors[i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100"
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
                children: " parseHex_table"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'#599eff80'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
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
      })]
    }), "\n", createVNode(Benchmark, {
      selector: "#benchmark-parse",
      results: {
        "1. regex": {
          "runTime": -1010,
          "amountOfRounds": 91,
          "percent": 0.73
        },
        "2. slice": {
          "runTime": -1003,
          "amountOfRounds": 135,
          "percent": 1.08
        },
        "3. char + function": {
          "runTime": -1e3,
          "amountOfRounds": 12499,
          "percent": 100
        },
        "4. char + table": {
          "runTime": -1e3,
          "amountOfRounds": 3888,
          "percent": 31.11
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["As you can see, both allocation-less versions run ", createVNode(_components.em, {
        children: "much"
      }), " faster than the naive ones. Daniel suggests that the table version runs faster than the function version in C, but as we’re running inside a javascript engine, our array lookups are considerably more expensive (due to bound checks and whatnot), so the final winner is ", createVNode(_components.code, {
        children: "parseHex_function"
      }), "."]
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-16"
    }), "\n", createVNode(_components.h2, {
      id: "3-formatting",
      children: "3. Formatting"
    }), "\n", createVNode(_components.p, {
      children: "And for the final part, I looked into how to output those values as strings efficiently. In an ideal setting, color values wouldn’t need to be turned back to strings, but this is unavoidable as most APIs javascript interacts with are string-based."
    }), "\n", createVNode(_components.p, {
      children: "The simple implementation I went for initially was the following one:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "javascript",
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
              children: " format_simple"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "color"
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
                color: "#96D0FF"
              },
              children: " `#${"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "color"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "toString"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "16"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: ")."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "padStart"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "8"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'0'"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: ")"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "}`"
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
      children: ["But I wasn’t happy with the results. One thing I wanted to avoid is the temporary string allocations, the ones returned by ", createVNode(_components.code, {
        children: "toString"
      }), " and ", createVNode(_components.code, {
        children: "padStart"
      }), ". I also wanted to avoid as much as possible calling javascript string functions like those ones because I usually find that them to be less efficient than pure-javascript ones. It could be for a variety of reasons (e.g. the spec requiring expensive checks/conversions) but I don’t know enough about to explain it."]
    }), "\n", createVNode(_components.p, {
      children: "So I pulled inspiration from the previously presented function from Daniel’s blog, and went for a lookup array that converts hexadecimal values to their string representation:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "javascript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "javascript",
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
              children: "// ['00', '01', ..., 'fe', 'ff']"
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
              children: " X"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  Array."
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
              children: "256"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " })"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ."
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
              children: " i."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "toString"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "16"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "padStart"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'0'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "))"
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
              children: " format_table"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "color"
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
                color: "#ADBAC7"
              },
              children: " ("
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "    '#'"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " +"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "    X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">>"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 24"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " &"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0xff"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "    X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">>"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 16"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " &"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0xff"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "    X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">>"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  8"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " &"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0xff"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "    X"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[color "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">>"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "  0"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " &"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0xff"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "]"
            })]
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
    }), "\n", createVNode(_components.p, {
      children: "And here is a final benchmark to validate that we’re indeed running faster:"
    }), "\n", createVNode("div", {
      id: "benchmark-format",
      class: "code-blocks",
      children: [createVNode("div", {
        class: "hidden",
        children: createVNode(_components.figure, {
          "data-rehype-pretty-code-figure": "",
          children: createVNode(_components.pre, {
            style: {
              backgroundColor: "#22272e",
              color: "#adbac7"
            },
            tabindex: "0",
            "data-language": "javascript",
            "data-theme": "github-dark-dimmed",
            children: createVNode(_components.code, {
              "data-language": "javascript",
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
                  children: "// setup"
                })
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
                  children: " format_simple"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#F69D50"
                  },
                  children: "color"
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
                    color: "#96D0FF"
                  },
                  children: " `#${"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "color"
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: "."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "toString"
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: ")."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "padStart"
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "8"
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: "'0'"
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: ")"
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: "}`"
                })]
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
                children: createVNode(_components.span, {
                  style: {
                    color: "#768390"
                  },
                  children: "// ['00', '01', ..., 'fe', 'ff']"
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
                  children: " X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "  Array."
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
                  children: "256"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " })"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    ."
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
                  children: " i."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "toString"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ")."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "padStart"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "2"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ", "
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: "'0'"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "))"
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
                  children: " format_table"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#F69D50"
                  },
                  children: "color"
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
                    color: "#ADBAC7"
                  },
                  children: " ("
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: "    '#'"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " +"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "    X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: ">>"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 24"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " &"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 0xff"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "] "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "+"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "    X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: ">>"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 16"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " &"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 0xff"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "] "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "+"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "    X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: ">>"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "  8"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " &"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 0xff"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "] "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "+"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "    X"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "[color "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: ">>"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "  0"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " &"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 0xff"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "]"
                })]
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
        })
      }), createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "javascript",
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
                children: "// setup"
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
                children: " N"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100_000"
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
                children: " colors"
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
                children: " Array"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "100"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
              })]
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
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "javascript",
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
                children: "// 1. simple"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "for"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " N"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "++"
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
                  color: "#ADBAC7"
                },
                children: "  colors[i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100"
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
                children: " format_simple"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "0x0f0f0f"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
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
      }), createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "javascript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "javascript",
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
                children: "// 2. table"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "for"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " N"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "; i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "++"
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
                  color: "#ADBAC7"
                },
                children: "  colors[i "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 100"
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
                children: " format_table"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "0x0f0f0f"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
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
      })]
    }), "\n", createVNode(Benchmark, {
      selector: "#benchmark-format",
      results: {
        "1. simple": {
          "runTime": -1004,
          "amountOfRounds": 210,
          "percent": 45.55
        },
        "2. table": {
          "runTime": -1001,
          "amountOfRounds": 461,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-16"
    }), "\n", createVNode(_components.h2, {
      id: "4-benchmarks",
      children: "4. Benchmarks"
    }), "\n", createVNode(_components.p, {
      children: ["So with all that completed let’s see how it compares to other existing color libraries on NPM. I re-used the benchmarking code from ", createVNode(_components.code, {
        children: "colord"
      }), " and slightly modified it to showcase how it performs for the case it was optimized for (hexadecimal strings), so the ", createVNode(_components.a, {
        href: "https://github.com/romgrk/color-bits/tree/master/benchmarks",
        children: "benchmark code"
      }), " consists of parsing a hex color string, modifying its opacity, and converting it back to a hex color string."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Library"
          }), createVNode(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Operations/sec"
          }), createVNode(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Relative speed"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "color-bits"
            })
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: createVNode(_components.strong, {
              children: "22 966 299"
            })
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "fastest"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "colord"
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "4 308 547"
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "81.24% slower"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "tinycolor2"
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "1 475 762"
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "93.57% slower"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "chroma-js"
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "846 924"
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "96.31% slower"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "color"
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "799 262"
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "96.52% slower"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Tada ✨ About 5x faster than the 2nd place, ", createVNode(_components.code, {
        children: "colord"
      }), ", which had the previous claim to the fastest color library. I haven’t included the benchmark for non ", createVNode(_components.code, {
        children: "#rrggbbaa"
      }), " colors like ", createVNode(_components.code, {
        children: "rgb()"
      }), " or ", createVNode(_components.code, {
        children: "hsl()"
      }), ", but ", createVNode(_components.code, {
        children: "color-bits"
      }), " is still around 2x faster than the 2nd place even in those cases."]
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-16"
    }), "\n", createVNode(_components.h2, {
      id: "5-closing-thoughts",
      children: "5. Closing thoughts"
    }), "\n", createVNode(_components.p, {
      children: ["I think avoiding memory allocations is one of the ", createVNode(_components.strong, {
        children: "easiest and most impactful"
      }), " ways to speed up a program. Javascript is a very convenient language, allocating a new object can be as simple as typing ", createVNode(_components.code, {
        children: "{}"
      }), ", ", createVNode(_components.code, {
        children: "[]"
      }), " or ", createVNode(_components.code, {
        children: "{ ...newObject }"
      }), ", and I love the expressivity it brings. But it’s a double-edged sword, because it makes those memory allocations less apparent. It’s also hard to notice how those allocations impact your program, because allocating memory is somewhat fast, but managing and freeing allocations are the actually expensive operations. And that will appear as a single blob of ", createVNode(_components.code, {
        children: "Minor GC"
      }), " or ", createVNode(_components.code, {
        children: "Major GC"
      }), " entries in your stack traces. Most of the time, when I profile a program, ", createVNode(_components.code, {
        children: "Minor GC"
      }), " is in the top 5 entries! But it’s so easy to just dimiss it as “stuff the engine needs to do anyway”. That’s not the case. ", createVNode(_components.strong, {
        children: "Any garbage to collect is garbage you have created"
      }), ". If you want to build fast, responsive, delightful software, you need to architect it to avoid creating and re-creating objects constantly like some frameworks do (yes, I’m looking at you React). Pick instead proper frameworks and solutions that are built with good fundamentals (why won’t the world adopt SolidJS already?)."]
    }), "\n", createVNode(_components.p, {
      children: "I hope this wasn’t too boring. As always, feel free to email any comments, corrections or questions, link in the footer."
    }), "\n", createVNode(_components.p, {
      children: ["You can follow me on ", createVNode(_components.a, {
        href: "https://github.com/romgrk",
        children: "github"
      }), " or subscribe to the RSS feed if you want to see more performance-related stuff."]
    }), "\n", createVNode(_components.p, {
      children: ["NPM: ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/color-bits",
        children: "https://www.npmjs.com/package/color-bits"
      }), createVNode(_components.br, {}), "\nGithub: ", createVNode(_components.a, {
        href: "https://github.com/romgrk/color-bits",
        children: "https://github.com/romgrk/color-bits"
      })]
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

const url = "src/content/posts/color-bits.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/color-bits.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment$1, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/color-bits.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
