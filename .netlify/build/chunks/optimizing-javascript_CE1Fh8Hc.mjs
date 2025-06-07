import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { $ as $$Aside } from './Aside_6iP3dSQA.mjs';
import { R as RandomPlant } from './RandomPlant_Cpx7-LbW.mjs';
import { B as Benchmark } from './Benchmark_BFF0lpJ6.mjs';
import 'clsx';

const frontmatter = {
  "title": "Optimizing Javascript for fun and for profit",
  "description": "Or how to write performant javascript",
  "pubDate": "Mar 21 2024",
  "sidebar": {
    "depth": 2
  },
  "rating": 10
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "0-avoid-work",
    "text": "0. Avoid work"
  }, {
    "depth": 2,
    "slug": "1-avoid-string-comparisons",
    "text": "1. Avoid string comparisons"
  }, {
    "depth": 2,
    "slug": "2-avoid-different-shapes",
    "text": "2. Avoid different shapes"
  }, {
    "depth": 4,
    "slug": "what-the-eff-should-i-do-about-this",
    "text": "What the eff should I do about this?"
  }, {
    "depth": 2,
    "slug": "3-avoid-arrayobject-methods",
    "text": "3. Avoid array/object methods"
  }, {
    "depth": 2,
    "slug": "4-avoid-indirection",
    "text": "4. Avoid indirection"
  }, {
    "depth": 2,
    "slug": "5-avoid-cache-misses",
    "text": "5. Avoid cache misses"
  }, {
    "depth": 3,
    "slug": "51-prefetching",
    "text": "5.1 Prefetching"
  }, {
    "depth": 4,
    "slug": "what-the-eff-should-i-do-about-this-1",
    "text": "What the eff should I do about this?"
  }, {
    "depth": 3,
    "slug": "52-caching-in-l123",
    "text": "5.2 Caching in L1/2/3"
  }, {
    "depth": 4,
    "slug": "what-the-eff-should-i-do-about-this-2",
    "text": "What the eff should I do about this?"
  }, {
    "depth": 2,
    "slug": "6-avoid-large-objects",
    "text": "6. Avoid large objects"
  }, {
    "depth": 4,
    "slug": "what-the-eff-should-i-do-about-this-3",
    "text": "What the eff should I do about this?"
  }, {
    "depth": 2,
    "slug": "7-use-eval",
    "text": "7. Use eval"
  }, {
    "depth": 2,
    "slug": "8-use-strings-carefully",
    "text": "8. Use strings, carefully"
  }, {
    "depth": 4,
    "slug": "what-the-eff-should-i-do-about-this-4",
    "text": "What the eff should I do about this?"
  }, {
    "depth": 2,
    "slug": "9-use-specialization",
    "text": "9. Use specialization"
  }, {
    "depth": 2,
    "slug": "10-data-structures",
    "text": "10. Data structures"
  }, {
    "depth": 2,
    "slug": "11-benchmarking",
    "text": "11. Benchmarking"
  }, {
    "depth": 3,
    "slug": "110-start-with-the-top",
    "text": "11.0 Start with the top"
  }, {
    "depth": 3,
    "slug": "111-avoid-micro-benchmarks",
    "text": "11.1 Avoid micro-benchmarks"
  }, {
    "depth": 3,
    "slug": "112-doubt-your-results",
    "text": "11.2 Doubt your results"
  }, {
    "depth": 3,
    "slug": "113-pick-your-target",
    "text": "11.3 Pick your target"
  }, {
    "depth": 2,
    "slug": "12-profiling--tools",
    "text": "12. Profiling & tools"
  }, {
    "depth": 3,
    "slug": "121-browser-gotchas",
    "text": "12.1 Browser gotchas"
  }, {
    "depth": 3,
    "slug": "122-sample-vs-structural-profiling",
    "text": "12.2 Sample vs structural profiling"
  }, {
    "depth": 3,
    "slug": "123-the-tools-of-the-trade",
    "text": "12.3 The tools of the trade"
  }, {
    "depth": 2,
    "slug": "final-notes",
    "text": "Final notes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    del: "del",
    em: "em",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I often feel like javascript code in general runs much slower than it could, simply because it’s not optimized properly. Here is a summary of common optimization techniques I’ve found useful. Note that the tradeoff for performance is often readability, so the question of when to go for performance versus readability is a question left to the reader. I’ll also note that talking about optimization necessarily requires talking about benchmarking. Micro-optimizing a function for hours to have it run 100x faster is meaningless if the function only represented a fraction of the actual overall runtime to start with. If one is optimizing, the first and most important step is benchmarking. I’ll cover the topic in the later points. Be also aware that micro-benchmarks are often flawed, and that may include those presented here. I’ve done my best to avoid those traps, but don’t blindly apply any of the points presented here without benchmarking."
    }), "\n", createVNode(_components.p, {
      children: ["I have included runnable examples for all cases where it’s possible. They show by default the results I got on my machine (brave 122 on archlinux) but you can run them yourself. As much as I hate to say it, Firefox has fallen a bit behind in the optimization game, and represents a very small fraction of the traffic ", createVNode(_components.a, {
        href: "https://foundation.mozilla.org/en/?form=donate-header",
        children: "for now"
      }), ", so I don’t recommend using the results you’d get on Firefox as useful indicators."]
    }), "\n", createVNode(_components.h2, {
      id: "0-avoid-work",
      children: "0. Avoid work"
    }), "\n", createVNode(_components.p, {
      children: ["This might sound evident, but it needs to be here because there can’t be another first step to optimization: if you’re trying to optimize, you should first look into avoiding work. This includes concepts like memoization, laziness and incremental computation. This would be applied differently depending on the context. In React, for example, that would mean applying ", createVNode(_components.code, {
        children: "memo()"
      }), ", ", createVNode(_components.code, {
        children: "useMemo()"
      }), " and other applicable primitives."]
    }), "\n", createVNode(_components.h2, {
      id: "1-avoid-string-comparisons",
      children: "1. Avoid string comparisons"
    }), "\n", createVNode(_components.p, {
      children: ["Javascript makes it easy to hide the real cost of string comparisons. If you need to compare strings in C, you’d use the ", createVNode(_components.code, {
        children: "strcmp(a, b)"
      }), " function. Javascript uses ", createVNode(_components.code, {
        children: "==="
      }), " instead, so you don’t see the ", createVNode(_components.code, {
        children: "strcmp"
      }), ". But it’s there, and a string comparison will usually (but not always) require comparing each of the characters in the string with the ones in the other string; string comparison is ", createVNode(_components.code, {
        children: "O(n)"
      }), ". One common JavaScript pattern to avoid is strings-as-enums. But with the advent of TypeScript this should be easily avoidable, as\nenums are integers by default."]
    }), "\n", createVNode("div", {
      class: "code-blocks-row",
      children: [createVNode(_components.figure, {
        "data-rehype-pretty-code-figure": "",
        children: createVNode(_components.pre, {
          style: {
            backgroundColor: "#22272e",
            color: "#adbac7"
          },
          tabindex: "0",
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "typescript",
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
                children: "// No"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "enum"
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: " Position"
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
                children: "  TOP"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "    ="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " 'TOP'"
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
                children: "  BOTTOM"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " 'BOTTOM'"
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
          "data-language": "typescript",
          "data-theme": "github-dark-dimmed",
          children: createVNode(_components.code, {
            "data-language": "typescript",
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
                children: "// Yeppers"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "enum"
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: " Position"
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
                children: "  TOP"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ",    "
              }), createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// = 0"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "  BOTTOM"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// = 1"
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
    }), "\n", createVNode(_components.p, {
      children: "Here is a comparison of the costs:"
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
                children: "// 1. string compare"
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
                children: " Position"
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
                children: "  TOP: "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'TOP'"
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
                children: "  BOTTOM: "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'BOTTOM'"
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
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " _ "
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
                children: " 1000000"
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
                children: "  let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " current "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
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
                children: " 2"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ==="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ?"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    Position."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "TOP"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " :"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Position."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "BOTTOM"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  if"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " (current "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Position."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "TOP"
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
                  color: "#ADBAC7"
                },
                children: "    _ "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 1"
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
                children: "// 2. int compare"
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
                children: " Position"
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
                children: "  TOP: "
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
                children: "  BOTTOM: "
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
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " _ "
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
                children: " 1000000"
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
                children: "  let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " current "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
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
                children: " 2"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ==="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ?"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    Position."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "TOP"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " :"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Position."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "BOTTOM"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  if"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " (current "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Position."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "TOP"
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
                  color: "#ADBAC7"
                },
                children: "    _ "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 1"
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
        "1. string compare": {
          "runTime": -1e3,
          "amountOfRounds": 828,
          "percent": 50.35
        },
        "2. int compare": {
          "runTime": -1e3,
          "amountOfRounds": 2137,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode($$Aside, {
      title: "About benchmarks",
      small: true,
      children: createVNode(_components.p, {
        children: "Percentage results represent the number of operations completed within 1s, divided by the number of operations of the highest scoring case. Higher is better."
      })
    }), "\n", createVNode(_components.p, {
      children: ["As you can see, the difference can be significant. The difference isn’t necessarily due to the ", createVNode(_components.code, {
        children: "strcmp"
      }), " cost as engines can sometimes use a string pool and compare by reference, but it’s also due to the fact that integers are usually passed by value in JS engines, whereas strings are always passed as pointers, and memory accesses are expensive (see section 5). In string-heavy code, this can have a huge impact."]
    }), "\n", createVNode(_components.p, {
      children: ["For a real-world example, I was able to ", createVNode(_components.a, {
        href: "https://github.com/json5/json5/pull/278",
        children: "make this JSON5 javascript parser run 2x faster"
      }), "* just by replacing string constants with numbers.", createVNode(_components.br, {}), "\n", createVNode("small", {
        children: "*Unfortunately it wasn’t merged, but that’s how open-source is."
      })]
    }), "\n", createVNode(_components.h2, {
      id: "2-avoid-different-shapes",
      children: "2. Avoid different shapes"
    }), "\n", createVNode(_components.p, {
      children: "Javascript engines try to optimize code by assuming that objects have a specific shape, and that functions will receive objects of the same shape. This allows them to store the keys of the shape once for all objects of that shape, and the values in a separate flat array. To represent it in javascript:"
    }), "\n", createVNode("div", {
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " objects"
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
                children: "  {"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    name: "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'Anthony'"
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
                children: "    age: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "36"
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
                children: "  },"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  {"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    name: "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'Eckhart'"
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
                children: "    age: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "42"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  },"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "]"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " shape"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  { name: "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'name'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", type: "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'string'"
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
                children: "  { name: "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'age'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ",  type: "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'integer'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " },"
              })]
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
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " objects"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  ["
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'Anthony'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "36"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "],"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  ["
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'Eckhart'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "42"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "],"
              })]
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
            })]
          })
        })
      })]
    }), "\n", createVNode($$Aside, {
      title: "A note on terminology",
      children: createVNode(_components.p, {
        children: ["I have used the word “shape” for this concept, but be aware that you may also find ", createVNode(_components.em, {
          children: "“hidden class”"
        }), " or ", createVNode(_components.em, {
          children: "“map”"
        }), " used to describe it, depending on the engine."]
      })
    }), "\n", createVNode(_components.p, {
      children: ["For example, at runtime if the following function receives two objects with the shape ", createVNode(_components.code, {
        children: "{ x: number, y: number }"
      }), ", the engine is going to speculate that future objects will have the same shape, and generate machine code optimized for that shape."]
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
              children: " add"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
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
              children: " {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    x: a.x "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " b.x,"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    y: a.y "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " b.y,"
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
              children: "}"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["If one would instead pass an object not with the shape ", createVNode(_components.code, {
        children: "{ x, y }"
      }), " but with the shape ", createVNode(_components.code, {
        children: "{ y, x }"
      }), ", the engine would need to undo its speculation and the function would suddenly become considerably slower. I’m going to limit my explanation here because you should read  the ", createVNode(_components.a, {
        href: "https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html",
        children: "excellent post from mraleph"
      }), " if you want more details, but I’m going to highlight that V8 in particular has 3 modes, for accesses that are: monomorphic (1 shape), polymorphic (2-4 shapes), and megamorphic (5+ shapes). Let’s say you ", createVNode(_components.em, {
        children: "really"
      }), " want to stay monomorphic, because the slowdown is drastic:"]
    }), "\n", createVNode("div", {
      id: "benchmark-shape",
      class: "code-blocks",
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
                children: "// setup"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " _ "
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
                children: "// 1. monomorphic"
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
                children: " o1"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", b: _, c: _, d: _, e: _ }"
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
                children: " o2"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", b: _, c: _, d: _, e: _ }"
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
                children: " o3"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", b: _, c: _, d: _, e: _ }"
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
                children: " o4"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", b: _, c: _, d: _, e: _ }"
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
                children: " o5"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", b: _, c: _, d: _, e: _ } "
              }), createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// all shapes are equal"
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
                children: "// 2. polymorphic"
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
                children: " o1"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", b: _, c: _, d: _, e: _ }"
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
                children: " o2"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", b: _, c: _, d: _, e: _ }"
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
                children: " o3"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", b: _, c: _, d: _, e: _ }"
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
                children: " o4"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", b: _, c: _, d: _, e: _ }"
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
                children: " o5"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { b: _, a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", c: _, d: _, e: _ } "
              }), createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// this shape is different"
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
                children: "// 3. megamorphic"
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
                children: " o1"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", b: _, c: _, d: _, e: _ }"
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
                children: " o2"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { b: _, a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", c: _, d: _, e: _ }"
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
                children: " o3"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { b: _, c: _, a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", d: _, e: _ }"
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
                children: " o4"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { b: _, c: _, d: _, a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", e: _ }"
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
                children: " o5"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { b: _, c: _, d: _, e: _, a: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " } "
              }), createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// all shapes are different"
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
                children: "// test case"
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
                children: " add"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "a1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "b1"
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
                children: " a1.a "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " a1.b "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " a1.c "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " a1.d "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " a1.e "
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
                  color: "#ADBAC7"
                },
                children: "         b1.a "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " b1.b "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " b1.c "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " b1.d "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " b1.e }"
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
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " result "
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
                children: " 1000000"
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
                children: "  result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " add"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(o1, o2)"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " add"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(o3, o4)"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " add"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(o4, o5)"
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
      selector: "#benchmark-shape",
      results: {
        "1. monomorphic": {
          "runTime": -1e3,
          "amountOfRounds": 1247,
          "percent": 100
        },
        "2. polymorphic": {
          "runTime": -1003,
          "amountOfRounds": 163,
          "percent": 13.07
        },
        "3. megamorphic": {
          "runTime": -1008,
          "amountOfRounds": 51,
          "percent": 4.09
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h4, {
      id: "what-the-eff-should-i-do-about-this",
      children: "What the eff should I do about this?"
    }), "\n", createVNode(_components.p, {
      children: ["Easier said than done but: ", createVNode(_components.strong, {
        children: "create all your objects with the exact same shape"
      }), ". Even something as trivial as ", createVNode(_components.strong, {
        children: "writing your React component props in a different order can trigger this"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["For example, here are ", createVNode(_components.a, {
        href: "https://github.com/facebook/react/pull/28569",
        children: "simple cases"
      }), " I found in React’s codebase, but they already had a ", createVNode(_components.a, {
        href: "https://v8.dev/blog/react-cliff",
        children: "much higher impact case"
      }), " of the same problem a few years ago because they were initializing an object with an integer, then later storing a float. Yes, changing the type also changes the shape. Yes, there are integer and float types hidden behind ", createVNode(_components.code, {
        children: "number"
      }), ". Deal with it."]
    }), "\n", createVNode($$Aside, {
      title: "Number representation",
      children: createVNode(_components.p, {
        children: ["Engines can usually encode integers as values. For example, V8 represents values in 32 bits, with integers as compact ", createVNode(_components.a, {
          href: "https://medium.com/fhinkel/v8-internals-how-small-is-a-small-integer-e0badc18b6da",
          children: "Smi"
        }), " (SMall Integer) values, but floats and large integers are passed as pointers just like strings and objects. JSC uses a 64 bit encoding, ", createVNode(_components.a, {
          href: "https://ktln2.org/2020/08/25/javascriptcore/",
          children: "double tagging"
        }), ", to pass all numbers by value, as SpiderMonkey does, and the rest is passed as pointers."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "3-avoid-arrayobject-methods",
      children: "3. Avoid array/object methods"
    }), "\n", createVNode(_components.p, {
      children: "I love functional programming as much as anyone else, but unless you’re working in Haskell/OCaml/Rust where functional code gets compiled to efficient machine code, functional will always be slower than imperative."
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
              children: " result"
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
              children: "  ["
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1.5"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3.5"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5.0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "]"
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
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "n"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Math."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "round"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(n))"
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
              children: "filter"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "n"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " n "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "%"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 2"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ==="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0"
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
                color: "#ADBAC7"
              },
              children: "    ."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "reduce"
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
              children: "n"
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
              children: " a "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "+"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " n, "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
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
      children: "The problem with those methods is that:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "They need to make a full copy of the array, and those copies later need to be freed by the garbage collector.  We will explore more in details the issues of memory I/O in section 5."
      }), "\n", createVNode(_components.li, {
        children: ["They loop N times for N operations, whereas a ", createVNode(_components.code, {
          children: "for"
        }), " loop would allow looping once."]
      }), "\n"]
    }), "\n", createVNode("div", {
      id: "benchmark-array-methods",
      class: "code-blocks",
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
                children: "// setup:"
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
                children: " numbers"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Array."
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
                children: "10_000"
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
                children: " Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "random"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "())"
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
                children: "// 1. functional"
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
                children: " result"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  numbers"
              })
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
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "n"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "round"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(n "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 10"
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
                  color: "#ADBAC7"
                },
                children: "    ."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "filter"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "n"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " n "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 2"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ==="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
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
                  color: "#ADBAC7"
                },
                children: "    ."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "reduce"
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
                children: "n"
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
                children: " a "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " n, "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "0"
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
                children: "// 2. imperative"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " result "
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
                  color: "#ADBAC7"
                },
                children: " numbers."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "length"
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
                children: "  let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " n "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "round"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(numbers[i] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 10"
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
                children: "  if"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " (n "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "%"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 2"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " !=="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ") "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "continue"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " n"
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
      selector: "#benchmark-array-methods",
      results: {
        "1. functional": {
          "runTime": -1002,
          "amountOfRounds": 303,
          "percent": 36.51
        },
        "2. imperative": {
          "runTime": -1e3,
          "amountOfRounds": 830,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["Object methods such as ", createVNode(_components.code, {
        children: "Object.values()"
      }), ", ", createVNode(_components.code, {
        children: "Object.keys()"
      }), " and ", createVNode(_components.code, {
        children: "Object.entries()"
      }), " suffer from similar problems, as they also allocate more data, and memory accesses are the root of all performance issues. No really I swear, I’ll show you in section 5."]
    }), "\n", createVNode(_components.h2, {
      id: "4-avoid-indirection",
      children: "4. Avoid indirection"
    }), "\n", createVNode(_components.p, {
      children: "Another place to look for optimization gains is any source of indirection, of which I can see 3 main sources:"
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
              children: " point"
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
              children: "10"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", y: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "20"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }"
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
              children: "// 1."
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// Proxy objects are harder to optimize because their get/set function might"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// be running custom logic, so engines can't make their usual assumptions."
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
              children: " proxy"
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
              children: " Proxy"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(point, { "
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "get"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": ("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "k"
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
              children: " { "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "return"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " t[k] } })"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// Some engines can make proxy costs disappear, but those optimizations are"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// expensive to make and can break easily."
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
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " proxy.x"
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
              children: "// 2."
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// Usually ignored, but accessing an object via `.` or `[]` is also an"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// indirection. In easy cases, the engine may very well be able to optimize the"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// cost away:"
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
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " point.x"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// But each additional access multiplies the cost, and makes it harder for the"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// engine to make assumptions about the state of `point`:"
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
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".state.circle.center.point.x"
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
              children: "// 3."
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// And finally, function calls can also have a cost. Engine are generally good"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// at inlining these:"
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
              children: " getX"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
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
              children: " p.x }"
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
              children: " x"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " getX"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(p)"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// But it's not guaranteed that they can. In particular if the function call"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// isn't from a static function but comes from e.g. an argument:"
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
              children: " Component"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "point"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "getX"
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
              children: "  return"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " getX"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(point)"
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
      children: "The proxy benchmark is particularly brutal on V8 at the moment. Last time I checked, proxy objects were always falling back from the JIT to the interpreter, seeing from those results it might still be the case."
    }), "\n", createVNode("div", {
      id: "benchmark-proxy",
      class: "code-blocks",
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
                children: "// 1. proxy access"
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
                children: " point"
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
                children: " Proxy"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "({ x: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "10"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", y: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "20"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " }, { "
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "get"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ": ("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "t"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "k"
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
                children: " t[k] })"
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
                children: " _ "
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
                children: ", i "
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
                children: ") { _ "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " point.x }"
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
                children: "// 2. direct access"
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
                children: " point"
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
                children: "10"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", y: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "20"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " }"
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
                children: " x"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " point.x"
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
                children: " _ "
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
                children: ", i "
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
                children: ") { _ "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " x }"
              })]
            })]
          })
        })
      })]
    }), "\n", createVNode(Benchmark, {
      selector: "#benchmark-proxy",
      results: {
        "1. proxy access": {
          "runTime": -1e3,
          "amountOfRounds": 659,
          "percent": 2.8
        },
        "2. direct access": {
          "runTime": -1e3,
          "amountOfRounds": 23544,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode("div", {
      id: "benchmark-object",
      class: "code-blocks",
      children: [createVNode(_components.p, {
        children: ["I also wanted to showcase accessing a deeply nested object vs direct access, but engines are very good at ", createVNode(_components.a, {
          href: "https://youtu.be/KiWEWLwQ3oI?t=1055",
          children: "optimizing away object accesses via escape analysis"
        }), " when there is a hot loop and a constant object. I inserted a bit of indirection to prevent it."]
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
                children: "// 1. nested access"
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
                children: " a"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { state: { center: { point: { x: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "10"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", y: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "20"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " } } } }"
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
                children: " b"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { state: { center: { point: { x: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "10"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", y: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "20"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " } } } }"
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
                children: " get"
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
                children: " 2"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ?"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " a "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " b"
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
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " result "
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
                  color: "#ADBAC7"
                },
                children: "  result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " get"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(i).state.center.point.x }"
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
                children: "// 2. direct access"
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
                children: " a"
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
                children: "10"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", y: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "20"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " }.x"
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
                children: " b"
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
                children: "10"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", y: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "20"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " }.x"
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
                children: " get"
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
                children: " 2"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ?"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " a "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " b"
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
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " result "
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
                  color: "#ADBAC7"
                },
                children: "  result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " get"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(i) }"
              })]
            })]
          })
        })
      })]
    }), "\n", createVNode(Benchmark, {
      selector: "#benchmark-object",
      results: {
        "1. nested access": {
          "runTime": -1e3,
          "amountOfRounds": 9871,
          "percent": 42.08
        },
        "2. direct access": {
          "runTime": -1e3,
          "amountOfRounds": 23460,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h2, {
      id: "5-avoid-cache-misses",
      children: "5. Avoid cache misses"
    }), "\n", createVNode(_components.p, {
      children: "This point requires a bit of low-level knowledge, but has implications even in javascript, so I’ll explain. From the CPU point of view, retrieving memory from RAM is slow. To speed things up, it uses mainly two optimizations."
    }), "\n", createVNode(_components.h3, {
      id: "51-prefetching",
      children: "5.1 Prefetching"
    }), "\n", createVNode(_components.p, {
      children: ["The first one is prefetching: it fetches more memory ahead of time, in the hope that it’s the memory you’ll be interested in. It always guesses that if you request one memory address, you’ll be interested in the memory region that comes right after that. So ", createVNode(_components.strong, {
        children: "accessing data sequentially"
      }), " is the key. In the following example, we can observe the impact of accessing memory in random order."]
    }), "\n", createVNode("div", {
      id: "benchmark-prefetch",
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
                  children: "// setup:"
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
                  children: " shuffle"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#F69D50"
                  },
                  children: "array"
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
                  children: "  let"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " currentIndex "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "="
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " array."
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: "length"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: ",  randomIndex;"
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
                  children: "  while"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " (currentIndex "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: ">"
                }), createVNode(_components.span, {
                  style: {
                    color: "#6CB6FF"
                  },
                  children: " 0"
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
                  children: "    randomIndex "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "="
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " Math."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "floor"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(Math."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "random"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "() "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "*"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " currentIndex);"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "    currentIndex"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "--"
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
                    color: "#ADBAC7"
                  },
                  children: "    [array[currentIndex], array[randomIndex]] "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "="
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
                  children: "      array[randomIndex], array[currentIndex]];"
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
                  children: " array;"
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
                children: "// setup:"
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
                children: " K"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 1024"
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
                children: " length"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 1"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " *"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " K"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " *"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " K"
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
                children: "// Theses points are created one after the other, so they are allocated"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// sequentially in memory."
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
                children: " points"
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
                children: "(length)"
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
                  color: "#ADBAC7"
                },
                children: " points."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "length"
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
                children: "  points[i] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { x: "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "42"
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
                children: " }"
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
                children: "// This array contains the *same data* as above, but shuffled randomly."
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
                children: " shuffledPoints"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " shuffle"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(points."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "slice"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "())"
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
                children: "// 1. sequential"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " _ "
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
                  color: "#ADBAC7"
                },
                children: " points."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "length"
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
                children: ") { _ "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " points[i].x }"
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
                children: "// 2. random"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " _ "
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
                  color: "#ADBAC7"
                },
                children: " shuffledPoints."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "length"
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
                children: ") { _ "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " shuffledPoints[i].x }"
              })]
            })]
          })
        })
      })]
    }), "\n", createVNode(Benchmark, {
      selector: "#benchmark-prefetch",
      results: {
        "2. random": {
          "runTime": -1e3,
          "amountOfRounds": 226,
          "percent": 26.22
        },
        "1. sequential": {
          "runTime": -1e3,
          "amountOfRounds": 862,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h4, {
      id: "what-the-eff-should-i-do-about-this-1",
      children: "What the eff should I do about this?"
    }), "\n", createVNode(_components.p, {
      children: ["This aspect is probably the hardest to put in practice, because javascript doesn’t have a way of placing objects in memory, but you can use that knowledge to your advantage as in the example above, for example to operate on data before re-ordering or sorting it. You cannot assume that objects created sequentially will stay at the same location after some time because the garbage collector might move them around. There is one exception to that, and it’s arrays of numbers, preferably ", createVNode(_components.code, {
        children: "TypedArray"
      }), " instances:"]
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
              children: "// from this"
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
              children: " points"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " [{ x: "
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
              children: "5"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }, { x: "
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
              children: "10"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }]"
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
              children: "// to this"
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
              children: " points"
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
              children: " Int64Array"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(["
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
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
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "10"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "])"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["For a more detailed example, ", createVNode(_components.a, {
        href: "https://mrale.ph/blog/2018/02/03/maybe-you-dont-need-rust-to-speed-up-your-js.html#optimizing-parsing---reducing-gc-pressure",
        children: "see this link"
      }), "* .", createVNode(_components.br, {}), "\n", createVNode("small", {
        children: "*Note that it contains some optimizations that are now outdated, but it’s still accurate overall."
      })]
    }), "\n", createVNode(_components.h3, {
      id: "52-caching-in-l123",
      children: "5.2 Caching in L1/2/3"
    }), "\n", createVNode(_components.p, {
      children: ["The second optimization CPUs use is the L1/L2/L3 caches: those are like faster RAMs, but they are also more expensive, so they are much smaller. They contain RAM data, but act as an LRU cache. Data comes in while it’s “hot” (being worked on), and is written back to the main RAM when new working data needs the space. So the key here is ", createVNode(_components.strong, {
        children: "use as little data as possible to keep your working dataset in the fast caches"
      }), ". In the following example, we can observe what are the effects of busting each of the successive caches."]
    }), "\n", createVNode("div", {
      id: "benchmark-caches",
      class: "code-blocks",
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
                children: "// setup:"
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
                children: " KB"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 1024"
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
                children: " MB"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 1024"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " *"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " KB"
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
                children: "// These are approximate sizes to fit in those caches. If you don't get the"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// same results on your machine, it might be because your sizes differ."
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
                children: " L1"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  ="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 256"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " *"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " KB"
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
                children: " L2"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  ="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "   5"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " *"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " MB"
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
                children: " L3"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  ="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "  18"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " *"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " MB"
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
                children: " RAM"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "  32"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " *"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " MB"
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
                children: "// We'll be accessing the same buffer for all test cases, but we'll"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// only be accessing the first 0 to `L1` entries in the first case,"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "// 0 to `L2` in the second, etc."
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
                children: " buffer"
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
                children: " Int8Array"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "RAM"
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
                  color: "#ADBAC7"
                },
                children: "buffer."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "fill"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "42"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: " random"
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
                children: "max"
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
                children: " Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "floor"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "random"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "() "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " max)"
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
                children: "// 1. L1"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " r "
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
                children: "; "
              }), createVNode(_components.span, {
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
                children: " 100000"
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
                children: ") { r "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " buffer["
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "random"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "L1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")] }"
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
                children: "// 2. L2"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " r "
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
                children: "; "
              }), createVNode(_components.span, {
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
                children: " 100000"
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
                children: ") { r "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " buffer["
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "random"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "L2"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")] }"
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
                children: "// 3. L3"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " r "
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
                children: "; "
              }), createVNode(_components.span, {
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
                children: " 100000"
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
                children: ") { r "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " buffer["
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "random"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "L3"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")] }"
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
                children: "// 4. RAM"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " r "
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
                children: "; "
              }), createVNode(_components.span, {
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
                children: " 100000"
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
                children: ") { r "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " buffer["
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "random"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "RAM"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")] }"
              })]
            })]
          })
        })
      })]
    }), "\n", createVNode(Benchmark, {
      selector: "#benchmark-caches",
      results: {
        "1. L1": {
          "runTime": -1e3,
          "amountOfRounds": 1800,
          "percent": 100
        },
        "2. L2": {
          "runTime": -1e3,
          "amountOfRounds": 1405,
          "percent": 78.06
        },
        "3. L3": {
          "runTime": -1e3,
          "amountOfRounds": 1186,
          "percent": 65.89
        },
        "4. RAM": {
          "runTime": -1002,
          "amountOfRounds": 528,
          "percent": 29.33
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h4, {
      id: "what-the-eff-should-i-do-about-this-2",
      children: "What the eff should I do about this?"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Ruthlessly eliminate every single data or memory allocations"
      }), " that can be eliminated. The smaller your dataset is, the faster your program will run. Memory I/O is the bottleneck for 95% of programs. Another good strategy can be to split your work into chunks, and ensure you work on a small dataset at a time."]
    }), "\n", createVNode(_components.p, {
      children: ["For more details on CPU and memory, ", createVNode(_components.a, {
        href: "https://people.freebsd.org/~lstewart/articles/cpumemory.pdf",
        children: "see this link"
      }), "."]
    }), "\n", createVNode($$Aside, {
      title: "About immutable data structures",
      children: createVNode(_components.p, {
        children: "Immutability is great for clarity and correctness, but in the context of performance, updating an immutable data structure means making a copy of the container, and that’s more memory I/O that will flush your caches. You should avoid immutable data structures when possible."
      })
    }), "\n", createVNode($$Aside, {
      title: "About the { ...spread } operator ",
      children: createVNode(_components.p, {
        children: "It’s very convenient, but every time you use it you create a new object in memory. More memory I/O, slower caches!"
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(RandomPlant, {}), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "6-avoid-large-objects",
      children: "6. Avoid large objects"
    }), "\n", createVNode(_components.p, {
      children: ["As explained in section 2, engines use shapes to optimize objects. However, when the shape grows too large, the engine has no choice but to use a regular hashmap (like a ", createVNode(_components.code, {
        children: "Map"
      }), " object). And as we saw in section 5, cache misses decrease performance significantly. Hashmaps are prone to this because their data is usually randomly & evenly distributed over the memory region they occupy. Let’s see how it behaves with this map of some users indexed by their ID."]
    }), "\n", createVNode("div", {
      id: "benchmark-large-object",
      class: "code-blocks",
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
                children: "// setup:"
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
                children: " USERS_LENGTH"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 1_000"
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
                children: "// setup:"
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
                children: " byId"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " {}"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
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
                children: "USERS_LENGTH"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " })."
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
                children: "id"
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
                  color: "#ADBAC7"
                },
                children: "  byId[id] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { id, name: "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'John'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "}"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " _ "
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
                children: "// 1. [] access"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "Object."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "keys"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(byId)."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "forEach"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "id"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { _ "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " byId[id].id })"
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
                children: "// 2. direct access"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "Object."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "values"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(byId)."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "forEach"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "user"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " { _ "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " user.id })"
              })]
            })]
          })
        })
      })]
    }), "\n", createVNode(Benchmark, {
      selector: "#benchmark-large-object",
      results: {
        "1. [] access": {
          "runTime": -1e3,
          "amountOfRounds": 49173,
          "percent": 43.18
        },
        "2. direct access": {
          "runTime": -1e3,
          "amountOfRounds": 113887,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "And we can also observe how the performance keeps degrading as the object size grows:"
    }), "\n", createVNode("div", {
      id: "benchmark-large-object-larger",
      class: "code-blocks",
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
                children: "// setup:"
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
                children: " USERS_LENGTH"
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
            })]
          })
        })
      }), createVNode("div", {
        class: "hidden",
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
                  children: "// setup:"
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
                  children: " byId"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " ="
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " {}"
                })]
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
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
                  children: "USERS_LENGTH"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " })."
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
                  children: "id"
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
                    color: "#ADBAC7"
                  },
                  children: "  byId[id] "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "="
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " { id, name: "
                }), createVNode(_components.span, {
                  style: {
                    color: "#96D0FF"
                  },
                  children: "'John'"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "}"
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
                children: [createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "let"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " _ "
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
                  children: "// 1. [] access"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "Object."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "keys"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(byId)."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "forEach"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#F69D50"
                  },
                  children: "id"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " =>"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " { _ "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "+="
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " byId[id].id })"
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
                  children: "// 2. direct access"
                })
              }), "\n", createVNode(_components.span, {
                "data-line": "",
                children: [createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "Object."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "values"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "(byId)."
                }), createVNode(_components.span, {
                  style: {
                    color: "#DCBDFB"
                  },
                  children: "forEach"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: "("
                }), createVNode(_components.span, {
                  style: {
                    color: "#F69D50"
                  },
                  children: "user"
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: " =>"
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " { _ "
                }), createVNode(_components.span, {
                  style: {
                    color: "#F47067"
                  },
                  children: "+="
                }), createVNode(_components.span, {
                  style: {
                    color: "#ADBAC7"
                  },
                  children: " user.id })"
                })]
              })]
            })
          })
        })]
      })]
    }), "\n", createVNode(Benchmark, {
      selector: "#benchmark-large-object-larger",
      results: {
        "1. [] access": {
          "runTime": -1005,
          "amountOfRounds": 229,
          "percent": 20.67
        },
        "2. direct access": {
          "runTime": -1e3,
          "amountOfRounds": 1108,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h4, {
      id: "what-the-eff-should-i-do-about-this-3",
      children: "What the eff should I do about this?"
    }), "\n", createVNode(_components.p, {
      children: ["As demonstrated above, avoid having to frequently index into large objects. Prefer turning the object into an array beforehand. Organizing your data to have the ID on the model can help, as you can use ", createVNode(_components.code, {
        children: "Object.values()"
      }), " and not have to refer to the key map to get the ID."]
    }), "\n", createVNode(_components.h2, {
      id: "7-use-eval",
      children: "7. Use eval"
    }), "\n", createVNode(_components.p, {
      children: ["Some javascript patterns are hard to optimize for engines, and by using ", createVNode(_components.code, {
        children: "eval()"
      }), " or its derivatives you can make those patterns disappear. In this example, we can observe how using ", createVNode(_components.code, {
        children: "eval()"
      }), " avoids the cost of creating an object with a dynamic object key:"]
    }), "\n", createVNode("div", {
      id: "benchmark-eval",
      class: "code-blocks",
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
                children: "// setup:"
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
                children: " key"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " 'requestId'"
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
                children: " values"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Array."
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
                children: "100_000"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " })."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "fill"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "42"
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
                children: "// 1. without eval"
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
                children: " createMessages"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "key"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "values"
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
                children: " messages"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " []"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  for"
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
                  color: "#ADBAC7"
                },
                children: " values."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "length"
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
                children: "    messages."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "push"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "({ [key]: values[i] })"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  return"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " messages"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "createMessages"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(key, values)"
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
                children: "// 2. with eval"
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
                children: " createMessages"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "key"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "values"
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
                children: " messages"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " []"
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
                children: " createMessage"
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
                children: " Function"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'value'"
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
                  color: "#96D0FF"
                },
                children: "    `return { ${"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "JSON"
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "stringify"
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "key"
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: ")"
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "}: value }`"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  for"
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
                  color: "#ADBAC7"
                },
                children: " values."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "length"
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
                children: "    messages."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "push"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "createMessage"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(values[i]))"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  return"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " messages"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "createMessages"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(key, values)"
              })]
            })]
          })
        })
      })]
    }), "\n", createVNode(Benchmark, {
      selector: "#benchmark-eval",
      results: {
        "1. without eval": {
          "runTime": -1005,
          "amountOfRounds": 233,
          "percent": 53.2
        },
        "2. with eval": {
          "runTime": -1001,
          "amountOfRounds": 438,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["Another good use-case for ", createVNode(_components.code, {
        children: "eval"
      }), " could be to compile a filter predicate function where you discard the branches that you know will never be taken. In general, any function that is going to be run in a very hot loop is a good candidate for this kind of optimization."]
    }), "\n", createVNode(_components.p, {
      children: ["Obviously the usual warnings about ", createVNode(_components.code, {
        children: "eval()"
      }), " apply: don’t trust user input, sanitize anything that gets passed into the ", createVNode(_components.code, {
        children: "eval()"
      }), "’d code, and don’t create any XSS possibility. Also note that some environments don’t allow access to ", createVNode(_components.code, {
        children: "eval()"
      }), ", such as browser pages with a CSP."]
    }), "\n", createVNode(_components.h2, {
      id: "8-use-strings-carefully",
      children: "8. Use strings, carefully"
    }), "\n", createVNode(_components.p, {
      children: "We’ve already seen above how strings are more expensive than they appear. Well I have kind of a good news/bad news situation here, which I’ll announce in the only logical order (bad first, good second): strings are more complex than they appear, but they can also be quite efficient used well."
    }), "\n", createVNode(_components.p, {
      children: ["String operations are a core part of JavaScript due to its context. To optimize string-heavy code, engines had to be creative. And by that I mean, they had to represent the ", createVNode(_components.code, {
        children: "String"
      }), " object with multiple string representation in C++, depending on the use case. There are two general cases you should worry about, because they hold true for V8 (the most common engine by far), and generally also in other engines."]
    }), "\n", createVNode(_components.p, {
      children: ["First, strings concatenated with ", createVNode(_components.code, {
        children: "+"
      }), " don’t create a copy of the two input strings. The operation creates a pointer to each substring. If it was in typescript, it would be something like this:"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "typescript",
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
              children: " String"
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
              children: "  abstract"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " char"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[] {}"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "class"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " BytesString"
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
              children: "bytes"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " char"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[]) {"
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
              children: ".bytes "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " bytes"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  value"
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
                color: "#6CB6FF"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".bytes"
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
              children: "class"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " ConcatenatedString"
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
              children: "left"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " String"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "right"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " String"
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
              children: ".left "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " left"
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
              children: ".right "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " right"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  value"
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
              children: " ["
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".left."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(), "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "..."
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".right."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()]"
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
              children: " concat"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "left"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "right"
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
                color: "#F47067"
              },
              children: " new"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " ConcatenatedString"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(left, right)"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " first"
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
              children: " BytesString"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(["
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'H'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'e'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'l'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'l'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'o'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "' '"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "])"
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
              children: " second"
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
              children: " BytesString"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(["
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'w'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'o'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'r'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'l'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'d'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "])"
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
              children: "// See ma, no array copies!"
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
              children: " message"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " concat"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(first, second)"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Second, string slices also don’t need to create copies: they can simply point to a range in another string. To continue with the example above:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "typescript",
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
              children: " SlicedString"
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
              children: "source"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " String"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "start"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " number"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "end"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " number"
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
              children: ".source "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " source"
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
              children: ".start "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " start"
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
              children: ".end "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " end"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "  value"
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
                color: "#6CB6FF"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".source."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()."
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
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".start, "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ".end)"
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
              children: " substring"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "source"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "start"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "end"
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
                color: "#F47067"
              },
              children: " new"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " SlicedString"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(source, start, end)"
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
              children: "// This represents \"He\", but it still contains no array copies."
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// It's a SlicedString to a ConcatenatedString to two BytesString"
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
              children: " firstTwoLetters"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " substring"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(message, "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
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
              children: ")"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["But here’s the issue: once you need to start mutating those bytes, that’s the moment you start paying copy costs. Let’s say we go back to our ", createVNode(_components.code, {
        children: "String"
      }), " class and try to add a ", createVNode(_components.code, {
        children: ".trimEnd"
      }), " method:"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "typescript",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "typescript",
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
              children: " String"
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
              children: "  abstract"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " value"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " char"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "[] {}"
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
              children: "  trimEnd"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "() {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "    // `.value()` here might be calling"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "    // our Sliced->Concatenated->2*Bytes string!"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " bytes"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " this"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "value"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()"
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
              children: "    const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " result"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " bytes."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "slice"
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
              children: "    while"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (result[result."
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " -"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "] "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " ' '"
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
                color: "#ADBAC7"
              },
              children: "      result."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "pop"
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
              children: "    return"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " new"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " BytesString"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(result)"
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
              children: "}"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "So let’s jump to an example where we compare using operations that use mutation versus only using concatenation:"
    }), "\n", createVNode("div", {
      id: "benchmark-strings",
      class: "code-blocks",
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
                children: "// setup:"
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
                children: " classNames"
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
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'primary'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'selected'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'active'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'medium'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "]"
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
                children: "// 1. mutation"
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
                children: " result"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  classNames"
              })
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
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "c"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " `button--${"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "c"
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "}`"
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
                  color: "#ADBAC7"
                },
                children: "    ."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "join"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "' '"
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
                children: "// 2. concatenation"
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
                children: " result"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  classNames"
              })
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
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "c"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " 'button--'"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " +"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " c)"
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
                children: "reduce"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "acc"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "c"
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
                children: " acc "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " ' '"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " +"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " c, "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "''"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ")"
              })]
            })]
          })
        })
      })]
    }), "\n", createVNode(Benchmark, {
      selector: "#benchmark-strings",
      iterations: 5000,
      results: {
        "1. mutation": {
          "runTime": -1e3,
          "amountOfRounds": 1808,
          "percent": 37.43
        },
        "2. concatenation": {
          "runTime": -1e3,
          "amountOfRounds": 4830,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.h4, {
      id: "what-the-eff-should-i-do-about-this-4",
      children: "What the eff should I do about this?"
    }), "\n", createVNode(_components.p, {
      children: ["In general, try to ", createVNode(_components.strong, {
        children: "avoid mutation for as long as possible"
      }), ". This includes methods such as ", createVNode(_components.code, {
        children: ".trim()"
      }), ", ", createVNode(_components.code, {
        children: ".replace()"
      }), ", etc. Consider how you can avoid those methods. In some engines, string templates can also be slower than ", createVNode(_components.code, {
        children: "+"
      }), ". In V8 at the moment it’s the case, but might not be in the future so as always, benchmark."]
    }), "\n", createVNode(_components.p, {
      children: ["A note on ", createVNode(_components.code, {
        children: "SlicedString"
      }), " above, you should note that if a small substring to a very large string is alive in memory, ", createVNode("mark", {
        title: "it will, in V8",
        children: "it might"
      }), " prevent the garbage collector from collecting the large string! If you’re processing large texts and extracting small strings from it, you might be leaking large amounts of memory."]
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
              children: " large"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Array."
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
              children: "10_000"
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
              children: "(() "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'string'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "join"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "''"
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
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " small"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " large."
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
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "50"
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
                color: "#768390"
              },
              children: "//    ^ will keep `large` alive"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["The solution here is to use mutation methods to our advantage. If we use one of them on ", createVNode(_components.code, {
        children: "small"
      }), ", it will force a copy, and the old pointer to ", createVNode(_components.code, {
        children: "large"
      }), " will be lost:"]
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
              children: "// replace a token that doesn't exist"
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
              children: " small"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " small."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "replace"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'#'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "repeat"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(small."
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " +"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 1"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "), "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "''"
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
      children: ["For more details, see ", createVNode(_components.a, {
        href: "https://github.com/v8/v8/blob/main/src/objects/string.h",
        children: "string.h on V8"
      }), " or ", createVNode(_components.a, {
        href: "https://github.com/WebKit/WebKit/blob/main/Source/JavaScriptCore/runtime/JSString.h",
        children: "JSString.h on JavaScriptCore"
      }), "."]
    }), "\n", createVNode($$Aside, {
      title: "On strings complexity",
      children: createVNode(_components.p, {
        children: "I have skimmed very quickly over things, but there are a lot of implementation details that add complexity to strings. There are often minimum lengths for each of those string representations. For example a concatenated string might not be used for very small strings. Or sometimes there are limits, for example avoiding pointing to a substring of a substring. Reading the C++ files linked above gives a good overview of the implementation details, even if just reading the comments."
      })
    }), "\n", createVNode(_components.h2, {
      id: "9-use-specialization",
      children: "9. Use specialization"
    }), "\n", createVNode(_components.p, {
      children: ["One important concept in performance optimization is ", createVNode(_components.em, {
        children: "specialization"
      }), ": adapting your logic to fit in the constraints of your particular use-case. This usually means figuring out what conditions are ", createVNode(_components.em, {
        children: "likely"
      }), " to be true for your case, and coding for those conditions."]
    }), "\n", createVNode(_components.p, {
      children: "Let’s say we are a merchant that sometimes needs to add tags to their product list. We know from experience that our tags are usually empty. Knowing that information, we can specialize our function for that case:"
    }), "\n", createVNode("div", {
      id: "benchmark-specialization",
      class: "code-blocks",
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
                children: "// setup:"
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
                children: " descriptions"
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
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'apples'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'oranges'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'bananas'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'seven'"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "]"
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
                children: " someTags"
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
                children: "  apples: "
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: "'::promotion::'"
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
                children: "}"
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
                children: " noTags"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " {}"
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
                children: "// Turn the products into a string, with their tags if applicable"
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
                children: " productsToString"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "description"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "tags"
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
                children: "  let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " ''"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  description."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "forEach"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "product"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
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
                children: "    result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " product"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "    if"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " (tags[product]) result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " tags[product]"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " ', '"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  })"
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
                children: " result"
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
                children: "// Specialize it now"
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
                children: " productsToStringSpecialized"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "description"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "tags"
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
                children: "  // We know that `tags` is likely to be empty, so we check"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "  // once ahead of time, and then we can remove the `if` check"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#768390"
                },
                children: "  // from the inner loop"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  if"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "isEmpty"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(tags)) {"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "    let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " ''"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    description."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "forEach"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "product"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
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
                children: "      result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " product "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " ', '"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    })"
              })
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
                children: " result"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  } "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "else"
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
                children: "    let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " ''"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    description."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "forEach"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "product"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
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
                children: "      result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " product"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "      if"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " (tags[product]) result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " tags[product]"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "      result "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " ', '"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    })"
              })
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
                children: " result"
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
                children: "}"
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
                children: " isEmpty"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "o"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ") { "
              }), createVNode(_components.span, {
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
                children: " _ "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "in"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " o) { "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "return"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " false"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " } "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "return"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " true"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " }"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: " "
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
                children: "// 1. not specialized"
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
                children: " 100"
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
                  color: "#DCBDFB"
                },
                children: "  productsToString"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(descriptions, someTags)"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  productsToString"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(descriptions, noTags)"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  productsToString"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(descriptions, noTags)"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  productsToString"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(descriptions, noTags)"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  productsToString"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(descriptions, noTags)"
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
                children: "// 2. specialized"
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
                children: " 100"
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
                  color: "#DCBDFB"
                },
                children: "  productsToStringSpecialized"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(descriptions, someTags)"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  productsToStringSpecialized"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(descriptions, noTags)"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  productsToStringSpecialized"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(descriptions, noTags)"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  productsToStringSpecialized"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(descriptions, noTags)"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "  productsToStringSpecialized"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(descriptions, noTags)"
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
      selector: "#benchmark-specialization",
      iterations: 5000,
      results: {
        "1. not specialized": {
          "runTime": -1118,
          "amountOfRounds": 6,
          "percent": 85.71
        },
        "2. specialized": {
          "runTime": -1062,
          "amountOfRounds": 7,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "This sort of optimization can give you moderate improvements, but those will add up. They are a nice addition to more crucial optimizations, like shapes and memory I/O. But note that specialization can turn against you if your conditions change, so be careful when applying this one."
    }), "\n", createVNode($$Aside, {
      title: "Branch prediction and branchless code",
      children: createVNode(_components.p, {
        children: ["Removing branches from your code can be incredibly efficient for performance. For more details on what a branch predictor is, read the classic Stack Overflow answer ", createVNode(_components.a, {
          href: "https://stackoverflow.com/questions/11227809/why-is-processing-a-sorted-array-faster-than-processing-an-unsorted-array",
          children: "Why is processing a sorted array faster"
        }), "."]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "10-data-structures",
      children: "10. Data structures"
    }), "\n", createVNode(_components.p, {
      children: ["I won’t go in details about data structures as they would require their own post. But be aware that using the incorrect data structures for your use-case can have a ", createVNode(_components.strong, {
        children: "bigger impact than any of the optimizations above"
      }), ". I would suggest you to be familiar with the native ones like ", createVNode(_components.code, {
        children: "Map"
      }), " and ", createVNode(_components.code, {
        children: "Set"
      }), ", and to learn about linked lists, priority queues, trees (RB and B+) and tries."]
    }), "\n", createVNode(_components.p, {
      children: ["But for a quick example, let’s compare how ", createVNode(_components.code, {
        children: "Array.includes"
      }), " does against ", createVNode(_components.code, {
        children: "Set.has"
      }), " for a small list:"]
    }), "\n", createVNode("div", {
      id: "benchmark-data-structures",
      class: "code-blocks",
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
                children: "// setup:"
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
                children: " userIds"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Array."
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
                children: "1_000"
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
                children: " i)"
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
                children: " adminIdsArray"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " userIds."
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
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "10"
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
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " adminIdsSet"
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
                children: " Set"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(adminIdsArray)"
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
                children: "// 1. Array"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " _ "
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
                  color: "#ADBAC7"
                },
                children: " userIds."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "length"
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
                children: "  if"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " (adminIdsArray."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "includes"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(userIds[i])) { _ "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " }"
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
                children: "// 2. Set"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " _ "
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
                  color: "#ADBAC7"
                },
                children: " userIds."
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: "length"
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
                children: "  if"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " (adminIdsSet."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "has"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "(userIds[i])) { _ "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "+="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 1"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " }"
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
      selector: "#benchmark-data-structures",
      results: {
        "1. Array": {
          "runTime": -1e3,
          "amountOfRounds": 89836,
          "percent": 34.27
        },
        "2. Set": {
          "runTime": -1e3,
          "amountOfRounds": 262116,
          "percent": 100
        }
      },
      "client:load": true,
      "client:component-path": "/home/romgrk/src/blog-romgrk/src/components/client/Benchmark.tsx",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: "As you can see, the data structure choice makes a very impactful difference."
    }), "\n", createVNode(_components.p, {
      children: ["As a real-world example, I had a case where we were able to ", createVNode(_components.a, {
        href: "https://github.com/mui/mui-x/pull/9200",
        children: "reduce the runtime of a function from 5 seconds to 22 milliseconds"
      }), " by switching out an array with a linked list."]
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-16"
    }), "\n", createVNode(_components.h2, {
      id: "11-benchmarking",
      children: "11. Benchmarking"
    }), "\n", createVNode(_components.p, {
      children: ["I’ve left this section for the end for one reason: I needed to establish credibility with the fun sections above. Now that I (hopefully) have it, let me tell you that benchmarking is the most important part of optimization. Not only is it the most important, but it’s also ", createVNode(_components.em, {
        children: "hard"
      }), ". Even after 20 years of experience, I still sometimes create benchmarks that are flawed, or use the profiling tools incorrectly. So whatever you do, please ", createVNode(_components.strong, {
        children: "put the most effort into benchmarking correctly"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "110-start-with-the-top",
      children: "11.0 Start with the top"
    }), "\n", createVNode(_components.p, {
      children: "Your priority should always be to optimize the function/section of code that makes up the biggest part of your runtime. If you spend time optimizing anything else than the top, you are wasting time."
    }), "\n", createVNode(_components.h3, {
      id: "111-avoid-micro-benchmarks",
      children: "11.1 Avoid micro-benchmarks"
    }), "\n", createVNode(_components.p, {
      children: "Run your code in production mode and base your optimizations on those observations. JS engines are very complex, and will often behave differently in micro-benchmarks than in real-world scenarios. For example, take this micro-benchmark:"
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
              children: " a"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { type: "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'div'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", count: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "5"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", }"
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
              children: " b"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { type: "
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'span'"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", count: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "10"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }"
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
              children: " typeEquals"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
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
              children: " a.type "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " b.type"
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
                color: "#DCBDFB"
              },
              children: "  typeEquals"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(a, b)"
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
      children: ["If you’ve payed attention sooner, you will realize that the engine will specialize the function for the shape ", createVNode(_components.code, {
        children: "{ type: string, count: number }"
      }), ". But does that hold true in your real-world use-case? Are ", createVNode(_components.code, {
        children: "a"
      }), " and ", createVNode(_components.code, {
        children: "b"
      }), " always of that shape, or will you receive any kind of shape? If you receive many shapes in production, this function will behave differently then."]
    }), "\n", createVNode(_components.h3, {
      id: "112-doubt-your-results",
      children: "11.2 Doubt your results"
    }), "\n", createVNode(_components.p, {
      children: "If you’ve just optimized a function and it now runs 100x faster, doubt it. Try to disprove your results, try it in production mode, throw stuff at it. Similarly, doubt also your tools. The mere fact of observing a benchmark with devtools can modify its behavior."
    }), "\n", createVNode(_components.h3, {
      id: "113-pick-your-target",
      children: "11.3 Pick your target"
    }), "\n", createVNode(_components.p, {
      children: ["Different engines will optimize certain patterns better or worse than others. You should benchmark for the engine(s) that are relevant to you, and prioritize which one is more important. ", createVNode(_components.a, {
        href: "https://github.com/babel/babel/pull/16357",
        children: "Here’s a real-world example"
      }), " in Babel where improving V8 means decreasing JSC’s performance."]
    }), "\n", createVNode(_components.h2, {
      id: "12-profiling--tools",
      children: "12. Profiling & tools"
    }), "\n", createVNode(_components.p, {
      children: "Various remarks about profiling and devtools."
    }), "\n", createVNode(_components.h3, {
      id: "121-browser-gotchas",
      children: "12.1 Browser gotchas"
    }), "\n", createVNode(_components.p, {
      children: ["If you’re profiling in the browser, make sure you use a clean and empty browser profile. I even use a separate browser for this. If you’re profiling and you have browser extensions enabled, they can mess up the measurements. React devtools in particular will substantially affect results, rendering code may appear slower than it appears ", createVNode(_components.del, {
        children: "in the mirror"
      }), " to your users."]
    }), "\n", createVNode(_components.h3, {
      id: "122-sample-vs-structural-profiling",
      children: "12.2 Sample vs structural profiling"
    }), "\n", createVNode(_components.p, {
      children: "Browser profiling tools are sample-based profilers, which take a sample of your stack at regular intervals. This had a big disadvantage: very small but very frequent functions might be called between those samples, and might be very much underreported in the stack charts you’ll get. Use Firefox devtools with a custom sample interval or Chrome devtools with CPU throttling to mitigate this issue."
    }), "\n", createVNode(_components.h3, {
      id: "123-the-tools-of-the-trade",
      children: "12.3 The tools of the trade"
    }), "\n", createVNode(_components.p, {
      children: "Beyond the regular browser devtools, it may help to be aware of these options:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Chrome devtools have quite a few experimental flags that can help you figure out why things are slow. The style invalidation tracker is invaluable when you need to debug style/layout recalculations in the browser.", createVNode(_components.br, {}), "\n", createVNode(_components.a, {
            href: "https://github.com/iamakulov/devtools-perf-features",
            children: "https://github.com/iamakulov/devtools-perf-features"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["The deoptexplorer-vscode extension allows you to load V8/chromium log files to understand when your code is triggering deoptimizations, such as when you pass different shapes to a function. You don’t need the extension to read log files, but it makes the experience much more pleasant.", createVNode(_components.br, {}), "\n", createVNode(_components.a, {
            href: "https://github.com/microsoft/deoptexplorer-vscode",
            children: "https://github.com/microsoft/deoptexplorer-vscode"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["You can always compile the debug shell for each JS engine to understand more in details how it works. This allows you to run ", createVNode(_components.code, {
            children: "perf"
          }), " and other low-level tools, and also to inspect the bytecode and machine code generated by each engine.", createVNode(_components.br, {}), "\n", createVNode(_components.a, {
            href: "https://mrale.ph/blog/2018/02/03/maybe-you-dont-need-rust-to-speed-up-your-js.html#getting-the-code",
            children: "Example for V8"
          }), " | ", createVNode(_components.a, {
            href: "https://zon8.re/posts/jsc-internals-part1-tracing-js-source-to-bytecode/",
            children: "Example for JSC"
          }), " | ", createVNode("span", {
            class: "text-neutral-500",
            children: "Example for SpiderMonkey (missing)"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "final-notes",
      children: "Final notes"
    }), "\n", createVNode(_components.p, {
      children: "Hope you learned some useful tricks. If you have any comments, corrections or questions, email in the footer. I’m always happy to receive feedback or questions from readers."
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

const url = "src/content/posts/optimizing-javascript.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/optimizing-javascript.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/optimizing-javascript.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
