import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { R as RandomPlant } from './RandomPlant_Cpx7-LbW.mjs';
import { $ as $$Aside } from './Aside_6iP3dSQA.mjs';
import 'clsx';

const frontmatter = {
  "title": "Zen and the art of software engineering",
  "description": "romgrk on readability",
  "pubDate": "Oct 22 2024",
  "sidebar": {
    "display": true,
    "depth": 3
  }
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "1-constraints",
    "text": "1. Constraints"
  }, {
    "depth": 4,
    "slug": "11-empty-value",
    "text": "1.1 Empty value"
  }, {
    "depth": 4,
    "slug": "12-conclusion",
    "text": "1.2 Conclusion"
  }, {
    "depth": 3,
    "slug": "2-semantics",
    "text": "2. Semantics"
  }, {
    "depth": 4,
    "slug": "declarative-programming",
    "text": "Declarative programming"
  }, {
    "depth": 3,
    "slug": "3-beauty",
    "text": "3. Beauty"
  }, {
    "depth": 4,
    "slug": "building-pyramids",
    "text": "Building pyramids"
  }, {
    "depth": 4,
    "slug": "aligning-names--symbols",
    "text": "Aligning names & symbols"
  }, {
    "depth": 4,
    "slug": "aligning-for-logic",
    "text": "Aligning for logic"
  }, {
    "depth": 4,
    "slug": "spacing-for-clarity",
    "text": "Spacing for clarity"
  }, {
    "depth": 3,
    "slug": "4-simplicity",
    "text": "4. Simplicity"
  }, {
    "depth": 3,
    "slug": "5-pleasure",
    "text": "5. Pleasure"
  }, {
    "depth": 3,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    figure: "figure",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["I’ve found over the years that there are two sides to programming. The first side is computer science, and it’s about data structures, algorithms and CPUs. The second side, I call software engineering. This side is about creating readable and maintainable codebases that can evolve over time, and just like Quality in ", createVNode(_components.em, {
        children: "Zen and the art of motorcycle maintenance"
      }), ", is hard to quantify, but easy to qualify: you know it when you see it. This post is a counterpart to ", createVNode(_components.a, {
        href: "./optimizing-javascript",
        children: "Optimizing JS for fun and for profit"
      }), ", where instead of focusing on the performance part of code, I explain the various practices that have helped me create readable and maintainable code."]
    }), "\n", createVNode(_components.h3, {
      id: "1-constraints",
      children: "1. Constraints"
    }), "\n", createVNode(_components.p, {
      children: ["My last post on ", createVNode(_components.a, {
        href: "./efficient-typescript",
        children: "Efficient Typescript"
      }), " touched a bit on the subject, but I cannot emphasize enough how much establishing constraints is an essential part of maintainable code. Constraints give you the possibility of making assumptions later on that will simplify your codebase."]
    }), "\n", createVNode(_components.p, {
      children: "A common way to spot if you are not strict enough is that you often end up adding a lot of defensive checks, for example:"
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
              children: " findUser"
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
              children: "  // avoid SQL injection"
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
                color: "#F47067"
              },
              children: "typeof"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " id "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!=="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'number'"
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
              children: "    throw"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " new"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " Error"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'ID is not set'"
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
              children: "  return"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " db."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "select"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`SELECT * FROM users WHERE id = ${"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "id"
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
      children: "What this block of code should really look like is this:"
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
              children: "function"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " findUser"
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
                color: "#F47067"
              },
              children: "  return"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " db."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "select"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`SELECT * FROM users WHERE id = ${"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "id"
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
      children: ["Now yes, typescript can only help you so much, and you’ll sometimes need to add runtime validation checks. That’s ok. But ", createVNode(_components.strong, {
        children: "there’s only ever two places where there should be runtime validation: user input and network data"
      }), ". Eveything else is part of a machine that is fully in your control. The machine can accept fuzzy invalid user-input (and fail appropriately), but it should not contain any fuzziness in its insides. No loose screw, no duct tape. Validate your inputs, and then establish ruthlessly strict constraints for how the inside of the machine works."]
    }), "\n", createVNode($$Aside, {
      title: "Low-level aside",
      children: createVNode(_components.p, {
        children: ["Even stronger constraints can also enable even greater power. As an anecdote, the other day I was writing a PR for a Rust codebase I wasn’t familiar with that had multi-threaded code. As I was coding, I felt like it would have been possible to switch from a (multi-thread safe but expensive) ", createVNode(_components.code, {
          children: "Arc<Mutex<T>>"
        }), " to a (single-threaded only) ", createVNode(_components.code, {
          children: "Rc<RefCell<T>>"
        }), ". It sounds like magic but all I had to do to validate that it was safe, was to do the change and let the compiler compile. It compiled, thus it was safe. Doing the same change in C/C++ would have required hours of careful reading of the full system before being satisfied that the change was safe. The constraints placed by the Rust language enabled me to write correct code easily."]
      })
    }), "\n", createVNode(_components.p, {
      children: ["But those contraints can also be external. Early internet pioneer Jon Postel said ", createVNode(_components.em, {
        children: "“be conservative in what you send, be liberal in what you accept”"
      }), ". I’m sorry Jon but I don’t buy this one. By being liberal in what you accept, wouldn’t you be encouraging others to build unsound systems? By building a “robust” system that accepts unstrict input, aren’t you encouraging the ecosystem that depends on you to not be robust? In the name of immediate gains, aren’t you condemning the future internet to pay the cost of maintaining the early flaws forever? I say ", createVNode(_components.strong, {
        children: "be strict in what you accept; make your API options limited to the essential; find the best way to do a thing, and don’t expose a second way to do it"
      }), ". Yes I’m sure you have an exception to that. Maybe you’re right, maybe you’re not. There are no quantitative rules here, only qualitative judgements."]
    }), "\n", createVNode(_components.h4, {
      id: "11-empty-value",
      children: "1.1 Empty value"
    }), "\n", createVNode(_components.p, {
      children: ["Another common way in which the lack of constraints manifests itself is frequent null/undefined checks. There is a concept in programming called the ", createVNode(_components.strong, {
        children: "empty value"
      }), ", and remembering these two questions helps improve constraints:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "What is a good empty value for this type?"
      }), "\n", createVNode(_components.li, {
        children: "Do I need an empty value?"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "A few examples of empty value:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["The empty string (", createVNode(_components.code, {
          children: "''"
        }), ") for ", createVNode(_components.code, {
          children: "string"
        }), " type"]
      }), "\n", createVNode(_components.li, {
        children: ["The number ", createVNode(_components.code, {
          children: "-1"
        }), " for array index positions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "null"
        }), " or ", createVNode(_components.code, {
          children: "undefined"
        }), " in conjunction with any type"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "NaN"
        }), " for float values"]
      }), "\n", createVNode(_components.li, {
        children: ["An empty array (", createVNode(_components.code, {
          children: "[]"
        }), ") for any array type"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["I see too often people defaulting to ", createVNode(_components.code, {
        children: "null"
      }), "/", createVNode(_components.code, {
        children: "undefined"
      }), " as a way to signal that the value hasn’t been set yet. But do you really need an empty value? An example."]
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
              children: "type"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Dimension"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "width"
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
              children: "height"
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
              children: "// This is our component's dimensions. It's"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// calculated on the first render, so we don't have"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// a value for it yet. Let it be null for now."
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
              children: " rootDimensions "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " as"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Dimension"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " null"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["It might not be immediately apparent, but the consequence of picking ", createVNode(_components.code, {
        children: "null"
      }), " as the empty value is that it condemns every single subsequent section of code that uses ", createVNode(_components.code, {
        children: "rootDimensions"
      }), " to add null checks and default values:"]
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
              children: "let"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " sidebarWidth "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (rootDimensions?.width "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "??"
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
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 0.20"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "//                                ^^^^^^^^^^^^"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// This is going to be repeated *each* time `rootDimensions` is used."
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Whereas initializing the dimensions with a monomorphic value negates the need for later null checks:"
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
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " EMPTY_DIMENSIONS"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { width: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", height: "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "0"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " } "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "as"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Dimension"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " "
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
              children: " rootDimensions "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " EMPTY_DIMENSIONS"
            }), createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // no more `| null` needed!"
            })]
          })]
        })
      })
    }), "\n", createVNode($$Aside, {
      title: "A note on performance",
      children: createVNode(_components.p, {
        children: ["For those who spotted that “monomorphic” also ties into my post on performance, yes, having a monomorphic value not only helps readability but also greatly improves performance: ", createVNode(_components.a, {
          href: "./optimizing-javascript#2-avoid-different-shapes",
          children: "Optimizing JS: Avoid different shapes"
        }), "."]
      })
    }), "\n", createVNode(_components.h4, {
      id: "12-conclusion",
      children: "1.2 Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["So the question I always ask myself is, ", createVNode(_components.strong, {
        children: "which constraints can I place on my system to ensure the least effort needed down the line?"
      }), " Which nullable values can you get rid of? Which APIs can you simplify?"]
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-16"
    }), "\n", createVNode(_components.h3, {
      id: "2-semantics",
      children: "2. Semantics"
    }), "\n", createVNode(_components.p, {
      children: "Code is the halfway point between how a machine needs data to be formatted to be executed and how a human needs data to be formatted to be understood. Writing code is both being able to make it correct and performant, and writing it in a way that conveys the proper semantics to the next person who will read it."
    }), "\n", createVNode(_components.p, {
      children: ["For a machine, a value is a number.", createVNode(_components.br, {}), "\nFor a human, a value has a meaning.", createVNode(_components.br, {}), "\nFor a programmer, a value is the union of both."]
    }), "\n", createVNode(_components.p, {
      children: "Use a value not only because it’s the number you need, but also because it has the right meaning. A perfect example of the application of this principle is being able to re-assign a variable to a new variable without changing its value, simply because we need a new meaning for it. To take an example from a codebase I’ve worked on lately:"
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
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " isVirtualRow"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " rowIndexInPage "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " virtualRowIndex"
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
              children: " isNotVisible"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " isVirtualRow"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Introducing new names and concepts is as important as introducing new values. You need to code for the right balance of computer/human understanding. If you go too far, it becomes harder for the other side to process it."
    }), "\n", createVNode(_components.p, {
      children: ["If you find yourself struggling to find a name for a new concept, take time to pause and figure one out. The name you pick for that concept—be it a variable, a function, or the main class your whole application will depend on—will have an influence on how you and future programmers understand and solve the problem domain. If you don’t have a good satisfying name, give it your best try but more importantly ", createVNode(_components.strong, {
        children: "come back to refactor it as soon as you have understood the concept better"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "My all-time favourite programming quote summarizes well how important naming is:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Take time to find good names and take time to re-factor those names as much as necessary. As a wise stackoverflow user once said, the process of naming makes you face the horrible fact that you have no idea what the hell you’re doing."
      }), "\n", createVNode(_components.p, {
        children: "― A reddit user"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "So which names can you refactor?"
    }), "\n", createVNode(_components.h4, {
      id: "declarative-programming",
      children: "Declarative programming"
    }), "\n", createVNode(_components.p, {
      children: "Writing code in a declarative way is also very helpful for readability, and functional programming in particular is very suitable for this. Take for example these two versions:"
    }), "\n", createVNode("div", {
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
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The second one tells you right away the operations that it’s going to do: a transform (", createVNode(_components.code, {
        children: "map"
      }), "), a filtering pass, and then a reduction to a final value. To get all that information, you only have to pick up the ", createVNode(_components.code, {
        children: "map"
      }), ", ", createVNode(_components.code, {
        children: "filter"
      }), ", and ", createVNode(_components.code, {
        children: "reduce"
      }), " symbols. Whereas for the first version, you need to read the full code to pick up that information."]
    }), "\n", createVNode(_components.p, {
      children: "Using FP and in general any shared programming vocabulary (e.g. design patterns) is a good way to communicate what the code is doing in a short and elegant way. By default, write code with the conventions that are already in use by other programmers."
    }), "\n", createVNode(_components.p, {
      children: ["And yes, that example is the inverse of ", createVNode(_components.a, {
        href: "./optimizing-javascript#3-avoid-arrayobject-methods",
        children: "Optimizing JS: Avoid array/object methods"
      }), ". One version isn’t better than the other. Often, programming is about picking which of performance or maintainability is more important."]
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-16"
    }), "\n", createVNode(_components.h3, {
      id: "3-beauty",
      children: "3. Beauty"
    }), "\n", createVNode(_components.p, {
      children: "Some would have you think that software engineering is a cold discipline, nothing could be further from the truth. Writing software is an art, it’s composing a virtual machine with logic constructs made visible with written symbols, symbols that communicate with the next human who will read them. Which of us hasn’t known the joy of completing a function, a module, with the knowledge that it runs with the utmost elegance, efficiency and simplicity that we could ever come up with? Material-world artisans can build wonderful contraptions made of lights, rolling balls, levers and pullies. So can we, but ours are made of logic constructs, invisible to the untrained eye."
    }), "\n", createVNode(_components.p, {
      children: "The way we write softare has a huge influence on how it is perceived by others. The brain is a pattern-matching system that relies on recurring patterns to ease its processing. Inserting symmetry, spacing and alignment—in other words, beauty—in our code makes it easier to read. For example, I initially wrote these words you saw sooner in this format:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "For a machine, a value is a number. For a human, a value has a meaning. For a programmer, a value is the union of both."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Although the conventional way to write paragraphs is the one above, I know that inserting newlines before the “For” would break the text in easier to consume bits, as the brain can see the recurring “For”, the somewhat aligned “a value…”, and run its circuits in harmony:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["For a machine, a value is a number.", createVNode(_components.br, {}), "\nFor a human, a value has a meaning.", createVNode(_components.br, {}), "\nFor a programmer, a value is the union of both."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Writing code isn’t just about semantics, it’s also about writing it in a way that is pleasant to the eye. Here are a few patterns that I frequently follow."
    }), "\n", createVNode(_components.h4, {
      id: "building-pyramids",
      children: "Building pyramids"
    }), "\n", createVNode(_components.p, {
      children: "I always sort code lines this way, and I call these pyramids. Tell me, which one of these blocks seems easier to read for you?"
    }), "\n", createVNode("div", {
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
                  color: "#ADBAC7"
                },
                children: "{"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  hasUninitialized"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ": items."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "some"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i.status "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Status.Uninitialized),"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  hasReady"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ": items."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "some"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i.status "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Status.Ready),"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  hasInactive"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ": items."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "some"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i.status "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Status.Inactive),"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  hasPending"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ": items."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "some"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i.status "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Status.Pending),"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  hasCompleted"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ": items."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "some"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i.status "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Status.Completed),"
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
                  color: "#ADBAC7"
                },
                children: "{"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  hasReady"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ": items."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "some"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i.status "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Status.Ready),"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  hasPending"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ": items."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "some"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i.status "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Status.Pending),"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  hasInactive"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ": items."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "some"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i.status "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Status.Inactive),"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  hasCompleted"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ": items."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "some"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i.status "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Status.Completed),"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "  hasUninitialized"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ": items."
              }), createVNode(_components.span, {
                style: {
                  color: "#DCBDFB"
                },
                children: "some"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "i"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " =>"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " i.status "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "==="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " Status.Uninitialized),"
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
      children: "When I read the second, the eye can flow from one line to the next, harmoniously."
    }), "\n", createVNode(_components.h4, {
      id: "aligning-names--symbols",
      children: "Aligning names & symbols"
    }), "\n", createVNode(_components.p, {
      children: ["I also find it particularly important to align sub-sections of identifiers (e.g. common prefixes), as well as common symbols like ", createVNode(_components.code, {
        children: "="
      }), " assignements."]
    }), "\n", createVNode("div", {
      class: "code-blocks",
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " DEFAULT_ROW_GROUPING_STRATEGY"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " 'default'"
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
                children: " DATA_SOURCE_ROW_GROUPING_STRATEGY"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " 'data-source'"
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
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " ROW_GROUPING_STRATEGY_DEFAULT"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "     ="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " 'default'"
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
                children: " ROW_GROUPING_STRATEGY_DATA_SOURCE"
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#96D0FF"
                },
                children: " 'data-source'"
              })]
            })]
          })
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Although the names sound more natural when pronounced out loud for the first block, they’re much easier to read as a whole in the second one."
    }), "\n", createVNode(_components.h4, {
      id: "aligning-for-logic",
      children: "Aligning for logic"
    }), "\n", createVNode(_components.p, {
      children: "Another way in which alignment can be helpful is when we need have operations on mostly similar expression, with slightly differing semantics. The example below is from a python codebase I worked on, where we split a dataframe into two sub-sections. In this particular case I had to fight the auto-formatter (and colleagues) to have it formatted properly."
    }), "\n", createVNode("div", {
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
                children: "// code as the auto-formatter wanted it"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "average "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " [df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: ">"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " stats.average, df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " stats.average]"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "q1 "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " [df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: ">"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " stats.q1, df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " stats.q1]"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "outliers "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " [df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: ">"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " stats.outliers, df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " stats.outliers]"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "even "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " [df "
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
                children: " =="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ", df "
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
                children: " =="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 1"
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
                children: "// code as I wanted it"
              })
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "average "
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: ">"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  stats.average,"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " stats.average,"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "q1 "
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: ">"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  stats.q1,"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " stats.q1,"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "outlier "
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: ">"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  stats.outlier,"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  df "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " stats.outlier,"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "even "
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "  df "
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
                children: " =="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 0"
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
                children: "  df "
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
                children: " =="
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " 1"
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
                children: "]"
              })
            })]
          })
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Which of those block would you prefer to code review? The auto-formatted one, or the manually formatted one? For all their benefits, ", createVNode(_components.strong, {
        children: ["full-code formatters like ", createVNode(_components.code, {
          children: "prettier"
        }), " have gotten many programmers convinced that even talking about formatting and alignment is a negative"]
      }), ", best left to machines to deal with. Code is not just about machines. It’s about humans."]
    }), "\n", createVNode(_components.p, {
      children: ["I don’t want to have to argue if the ", createVNode(_components.code, {
        children: "{"
      }), " should be after the ", createVNode(_components.code, {
        children: "if"
      }), " or on a line of its own. ", createVNode(_components.code, {
        children: "eslint"
      }), " can do that well enough, no need to let ", createVNode(_components.code, {
        children: "prettier"
      }), " destroy beauty. Here is an example from some color code, in typescript:"]
    }), "\n", createVNode("div", {
      class: "code-blocks",
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
                children: "// code as prettier wants it"
              })
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
                children: " newColor"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "r"
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
                children: "g"
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
                children: "b"
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
                children: "a"
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
                  color: "#F47067"
                },
                children: "  return"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " (r "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " OFFSET_R"
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
                  color: "#ADBAC7"
                },
                children: " (g "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " OFFSET_G"
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
                  color: "#ADBAC7"
                },
                children: " (b "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " OFFSET_B"
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
                  color: "#ADBAC7"
                },
                children: " (a "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "<<"
              }), createVNode(_components.span, {
                style: {
                  color: "#6CB6FF"
                },
                children: " OFFSET_A"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ");"
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
                children: "// code as it should be"
              })
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
                children: " newColor"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F69D50"
                },
                children: "r"
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
                children: "g"
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
                children: "b"
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
                children: "a"
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
                children: " OFFSET_R"
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
                children: " OFFSET_G"
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
                children: " OFFSET_B"
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
                children: " OFFSET_A"
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
      })]
    }), "\n", createVNode(_components.h4, {
      id: "spacing-for-clarity",
      children: "Spacing for clarity"
    }), "\n", createVNode(_components.p, {
      children: "And if the last examples I went for using more vertical space, the opposite can also improve readability."
    }), "\n", createVNode("div", {
      class: "code-blocks",
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "switch"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " (priority) {"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  case"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " DiscreteEventPriority:"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    priority "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ImmediatePriority;"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "    break"
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
                children: "  case"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ContinuousEventPriority:"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    priority "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " UserBlockingPriority;"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "    break"
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
                children: "  case"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " DefaultEventPriority:"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    priority "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " NormalPriority;"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "    break"
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
                children: "  case"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " IdleEventPriority:"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    priority "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " IdlePriority;"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "    break"
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
                children: "  default"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ":"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: "    priority "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " NormalPriority;"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "    break"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ";"
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
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "switch"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " (priority) {"
              })]
            }), "\n", createVNode(_components.span, {
              "data-line": "",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "  case"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " DiscreteEventPriority:   priority "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ImmediatePriority;    "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "break"
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
                children: "  case"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " ContinuousEventPriority: priority "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " UserBlockingPriority; "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "break"
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
                children: "  case"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " DefaultEventPriority:    priority "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " NormalPriority;       "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "break"
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
                children: "  case"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " IdleEventPriority:       priority "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " IdlePriority;         "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "break"
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
                children: "  default"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ":                      priority "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: " NormalPriority;       "
              }), createVNode(_components.span, {
                style: {
                  color: "#F47067"
                },
                children: "break"
              }), createVNode(_components.span, {
                style: {
                  color: "#ADBAC7"
                },
                children: ";"
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
      children: ["The amount of spacing to use for code follows the same rule that designers use for adding spacing in their designs: ", createVNode(_components.strong, {
        children: "use your eyes"
      }), ". They will tell you if you need more or less. They will tell you if what they’re seeing is beautiful or not."]
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-16"
    }), "\n", createVNode(_components.h3, {
      id: "4-simplicity",
      children: "4. Simplicity"
    }), "\n", createVNode(_components.p, {
      children: ["I think if I had to summarize software engineering in one expression, it would be ", createVNode(_components.strong, {
        children: "managing complexity"
      }), ". Most of our work as software engineers is keeping complexity in check with all the tools we have. One of the characteristics that code should have above all is ", createVNode(_components.em, {
        children: "simplicity"
      }), ". Simple code is easy to read, easy to modify and easy to debug. Code that isn’t simple is much harder to also make ", createVNode(_components.em, {
        children: "correct"
      }), " and ", createVNode(_components.em, {
        children: "performant"
      }), ", thus we should always aim for simplicity first."]
    }), "\n", createVNode(_components.p, {
      children: "In fact, if features are an asset, code is a liability. A general rule, and I think everyone will agree with me, is that the more code you have, the more bugs you have. So a software product in theory should aim to have as many features as possible, while having as little code as possible. That’s why one of my favourite activities as a programmer is deleting large sections of code."
    }), "\n", createVNode(_components.p, {
      children: "In practice, in the front-end world this manifest itself as implementing features using browser APIs and CSS instead of re-building existing features in javascript (please no more horror like CSS-in-JS ever again)."
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-16"
    }), "\n", createVNode(_components.h3, {
      id: "5-pleasure",
      children: "5. Pleasure"
    }), "\n", createVNode(_components.p, {
      children: ["As a last point, I think I need to mention that the root of all qualities in software engineering is ", createVNode(_components.em, {
        children: "pleasure"
      }), ". You write good, elegant, beautiful, simple code because you find pleasure in writing software. If you don’t find pleasure in it, you will never put the effort to make any of the above qualities emerge, and you won’t find joy in your craft."]
    }), "\n", createVNode(RandomPlant, {
      className: "mt-8 mb-16"
    }), "\n", createVNode(_components.h3, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["I hope I was able to pass along some of the zen of programming to you. I can’t claim credit for any of the points here as they’ve all been transmitted to me throughout years of programming. I unfortunately can’t remember where I picked up each of those ideas, but I think I owe at least some of them to ", createVNode(_components.a, {
        href: "https://blog.cleancoder.com/",
        children: "Uncle Bob"
      }), ", ", createVNode(_components.a, {
        href: "https://www.joelonsoftware.com/",
        children: "Joel on software"
      }), " and so many others."]
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

const url = "src/content/posts/zen-and-software.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/zen-and-software.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/zen-and-software.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
