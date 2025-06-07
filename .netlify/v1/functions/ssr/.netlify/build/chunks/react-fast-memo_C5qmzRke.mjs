import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { R as RandomPlant } from './RandomPlant_Cpx7-LbW.mjs';
import 'clsx';

const frontmatter = {
  "title": "A faster React.memo()",
  "description": "",
  "pubDate": "Mar 8 2024",
  "rating": 6
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "the-code",
    "text": "The Code"
  }, {
    "depth": 2,
    "slug": "safe-version",
    "text": "Safe version"
  }, {
    "depth": 2,
    "slug": "how-fast-are-we",
    "text": "How fast are we?"
  }, {
    "depth": 2,
    "slug": "final-notes",
    "text": "Final notes"
  }, {
    "depth": 2,
    "slug": "other-notes",
    "text": "Other notes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("small", {
      children: createVNode(_components.p, {
        children: createVNode(_components.a, {
          href: "https://github.com/romgrk/react-fast-memo",
          children: [createVNode(_components.em, {
            children: "“Just show me the code”"
          }), ": click here"]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["I recently spent time optimizing React code, and the obvious answer is, as always, ", createVNode(_components.code, {
        children: "React.memo()"
      }), ". So to speed things up I\nadded a bunch of them everywhere because ", createVNode(_components.a, {
        href: "https://attardi.org/why-we-memo-all-the-things/",
        children: "you should memo all the things by default"
      }), "\nanyway. This lead me to think if there was a way to make ", createVNode(_components.code, {
        children: "React.memo()"
      }), " faster. Not that it needs it, I just enjoy a bit\ntoo much performance. And the answer is yes."]
    }), "\n", createVNode(_components.p, {
      children: "And with the compiler not being shipped in React 19, it seems like we’re going to have to keep handling our own\nmemoization for a bit longer, so I might as well share this one with you."
    }), "\n", createVNode(_components.h3, {
      id: "the-code",
      children: "The Code"
    }), "\n", createVNode(_components.p, {
      children: ["So to make memo faster (whose signature is ", createVNode(_components.code, {
        children: "React.memo(c: Component, f: CompareFunction)"
      }), ", btw), we need to write a faster\ncompare function than the one React has. The good news here is that React being a generic framework kinda needs to expect\nits users to do all sorts of funky stuff, whereas we, my friend, can tell our users to just not do anything funky because\nwe won’t support that."]
    }), "\n", createVNode(_components.p, {
      children: "So let’s start with React’s implementation, and let’s see how we can make it faster."
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
              children: " shallowEqual"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "objA"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "objB"
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
              children: " (Object."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(objA, objB)) { "
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
              children: "; }"
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
              children: " objA "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!=="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'object'"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ||"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " objA "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ||"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      typeof"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " objB "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!=="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'object'"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ||"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " objB "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " null"
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
              children: "    return"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
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
              children: "  const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " keysA"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Object."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "keys"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(objA);"
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
              children: " keysB"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " Object."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "keys"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(objB);"
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
              children: "  if"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (keysA."
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " !=="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " keysB."
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "length"
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
              children: "    return"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
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
              children: " keysA."
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
              children: "    const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " currentKey"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " keysA[i];"
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
              children: " ("
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      !"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "hasOwnProperty."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "call"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(objB, currentKey) "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "||"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      !"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(objA[currentKey], objB[currentKey])"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ) {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
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
              children: "    }"
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
                color: "#6CB6FF"
              },
              children: " true"
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
    }), "\n", createVNode(_components.p, {
      children: ["The first thing I don’t like with this approach is the usage of ", createVNode(_components.code, {
        children: "Object.keys()"
      }), ". If we’re going to be calling this\nfunction very often, allocating 2 new arrays on each call is nuts. It’s the easy way, but it’s also the wrong way if the\ngoal is performance (not that it should always be, most of the times, it’s readability). Whatever software you’re\nwriting, unless you’re dealing with network requests, memory IO is always going to be the biggest cost. Allocating arrays\nin RAM is just one example of that. So let’s try to get rid of that."]
    }), "\n", createVNode(_components.p, {
      children: "Another section that I’m not a fan of is this prelude."
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
              children: "if"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (Object."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(objA, objB)) { "
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
              children: "; }"
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
              children: "if"
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
              children: " objA "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!=="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'object'"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ||"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " objA "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ||"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    typeof"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " objB "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!=="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'object'"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ||"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " objB "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " null"
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
                color: "#6CB6FF"
              },
              children: " false"
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
    }), "\n", createVNode(_components.p, {
      children: ["What I think happened here is they implemented a generic “shallow equals” function, and re-used it where needed, one\nplace being ", createVNode(_components.code, {
        children: "React.memo()"
      }), ". One of the advantages that we have here is that we’re optimizing for one case, and we should\ntherefore be specializing this function for React props. So let us assume these properties about React props:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "They don’t have funky prototype chains."
      }), "\n", createVNode(_components.li, {
        children: "They are not the same object: prop objects are always inline objects."
      }), "\n", createVNode(_components.li, {
        children: "They are likely to be the same shape (monomorphic)."
      }), "\n", createVNode(_components.li, {
        children: "They are likely to be equal: most of the time, only a small fraction of the UI changes."
      }), "\n", createVNode(_components.li, {
        children: ["⚠️ They are not ", createVNode(_components.code, {
          children: "null"
        }), " and always an object: ", createVNode(_components.code, {
          children: "<div />"
        }), " is transformed to ", createVNode(_components.code, {
          children: "_jsx('div', {})"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["⚠️ Having ", createVNode(_components.code, {
          children: "prop={undefined}"
        }), " or no prop is functionally equivalent."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "I have marked with ⚠️  the assumptions that are unsafe and would lead to an incorrect “generic shallow compare” function,\nand we’ll come back to these later. With that in mind, here is the implementation I landed on:"
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
              children: " fastCompareUnsafe"
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
              children: "  let"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " aLength "
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
              children: ";"
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
              children: " bLength "
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
              children: " in"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " a) {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    aLength "
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
              children: "    if"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "Object."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(a[key], b[key])) {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
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
              children: "    }"
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
              children: " in"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " b) {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    bLength "
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
              children: ";"
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
              children: "  return"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " aLength "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " bLength;"
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
      children: ["As we can assume non-nullable objects, we were able to get rid of the prelude. Comparing the key count to check for equality\nis nice, but to avoid using ", createVNode(_components.code, {
        children: "Object.keys()"
      }), " like in the original we had to do it by iterating each key of the object. You\nmight be tempted to propose that we return early in the last loop instead of just counting the keys:"]
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
              children: " in"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " b) {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    bLength "
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
              children: ";"
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
              children: "    // Why not return?"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "    // if (b[_] != a[_]) {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "    //   return false"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "    // }"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["The problem problem with that is memory IO again: checking ", createVNode(_components.code, {
        children: "a[key]"
      }), " loads the value from memory, which is expensive. By\navoiding the early return there, we can avoid touching ", createVNode(_components.code, {
        children: "a"
      }), " at all again. Depending on which JS engine we’re running on,\nwe might even not be touching ", createVNode(_components.code, {
        children: "b"
      }), " again even if we’re iterating its keys, because most engines keep separate memory tables\nfor an object keys and its values."]
    }), "\n", createVNode(_components.p, {
      children: ["One other interesting change we were able to do, because we assumed that “they don’t have funky prototype chains”, is we\nwere able to remove the ", createVNode(_components.code, {
        children: "Object.hasOwnProperty()"
      }), " call that React has:"]
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
              children: " keysA."
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
              children: "    const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " currentKey"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " keysA[i];"
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
              children: " ("
            })]
          }), "\n", createVNode(_components.span, {
            class: "code-highlighted-line",
            "data-line": "",
            "data-highlighted-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      !"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "hasOwnProperty."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "call"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(objB, currentKey) "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "||"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      !"
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(objA[currentKey], objB[currentKey])"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    ) {"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
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
              children: "    }"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  }"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["I’ll note that V8 and JavaScriptCore are able to optimize away the ", createVNode(_components.code, {
        children: "hasOwnProperty"
      }), " call, but SpiderMonkey can’t (yet),\nso this optimization is Firefox specific."]
    }), "\n", createVNode(_components.h2, {
      id: "safe-version",
      children: "Safe version"
    }), "\n", createVNode(_components.p, {
      children: ["Some of the assumptions we made above are unsafe however, in particular if you use the pattern ", createVNode(_components.code, {
        children: "'key' in props"
      }), " in your\ncodebase. So here is also the function without the unsafe assumptions, where we have added back the prelude and the check\nfor the same keys including ", createVNode(_components.code, {
        children: "undefined"
      }), " ones:"]
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
              children: " fastCompare"
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
            class: "code-highlighted-line",
            "data-line": "",
            "data-highlighted-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  if"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (a "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " b) {"
            })]
          }), "\n", createVNode(_components.span, {
            class: "code-highlighted-line",
            "data-line": "",
            "data-highlighted-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    return"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " true"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
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
            class: "code-highlighted-line",
            "data-line": "",
            "data-highlighted-line": "",
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
              children: "!"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(a "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "instanceof"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Object"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ") "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "||"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " !"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(b "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "instanceof"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Object"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")) {"
            })]
          }), "\n", createVNode(_components.span, {
            class: "code-highlighted-line",
            "data-line": "",
            "data-highlighted-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    return"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  let"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " aLength "
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
              children: ";"
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
              children: " bLength "
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
              children: " in"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " a) {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    aLength "
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
              children: "    if"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "Object."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(a[key], b[key])) {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
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
              children: "    }"
            })
          }), "\n", createVNode(_components.span, {
            class: "code-highlighted-line",
            "data-line": "",
            "data-highlighted-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "    if"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " ("
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "!"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(key "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "in"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " b)) {"
            })]
          }), "\n", createVNode(_components.span, {
            class: "code-highlighted-line",
            "data-line": "",
            "data-highlighted-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "      return"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ";"
            })]
          }), "\n", createVNode(_components.span, {
            class: "code-highlighted-line",
            "data-line": "",
            "data-highlighted-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    }"
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
              children: " in"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " b) {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    bLength "
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
              children: ";"
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
              children: "  return"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " aLength "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "==="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " bLength;"
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
    }), "\n", createVNode(_components.h2, {
      id: "how-fast-are-we",
      children: "How fast are we?"
    }), "\n", createVNode(_components.p, {
      children: ["I’ve benchmarked against a bunch of existing modules, it seems like we’re the fastest", createVNode("sup", {
        children: "1,"
      }), createVNode("sup", {
        children: "2"
      }), "! There are\nvarious numbers in the table below, but the important part is that we’re about 2x faster than before."]
    }), "\n", createVNode(_components.p, {
      children: "I have compared 2 implementations, one where we don’t include the ⚠️  assumptions, and another one where we do."
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "jsonc",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "jsonc",
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
                color: "#8DDB8C"
              },
              children: "  \"fbjs/shallowEqual:equal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":                 { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1322.67"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1.69"
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
                color: "#8DDB8C"
              },
              children: "  \"fbjs/shallowEqual:unequal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":               { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1243.67"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1.24"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " },"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "  \"fast-shallow-equal:equal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":                { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1235.67"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "36.80"
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
                color: "#8DDB8C"
              },
              children: "  \"fast-shallow-equal:unequal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":              { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1241.33"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1.69"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " },"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "  \"react:equal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":                             { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1261"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",    "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3.74"
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
                color: "#8DDB8C"
              },
              children: "  \"react:unequal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":                           { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1249"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",    "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1.63"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " },"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "  \"shallowequal:equal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":                      { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1172.67"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "71.94"
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
                color: "#8DDB8C"
              },
              children: "  \"shallowequal:unequal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":                    { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1194.33"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "30.15"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " },"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "  \"fast-equals.shallowEqual:equal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":          { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1237.67"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "27.35"
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
                color: "#8DDB8C"
              },
              children: "  \"fast-equals.shallowEqual:unequal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":        { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "325.67"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1.88"
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
                color: "#768390"
              },
              children: "  // ^ this one is surprisingly fast, but only for the \"unequal objects\""
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  //   case which is the unlikely one, so we're not really interested in it."
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
              children: "  // Safe: does not include assumptions"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "  \"romgrk-fastCompare:equal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":                { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "871.67"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "11.58"
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
                color: "#8DDB8C"
              },
              children: "  \"romgrk-fastCompare:unequal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":              { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "777"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",     "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "8.83"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " },"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "  \"hughsk/shallow-equals:equal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":             { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "600.67"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "35.31"
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
                color: "#8DDB8C"
              },
              children: "  \"hughsk/shallow-equals:unequal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":           { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "562.67"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "3.68"
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
                color: "#768390"
              },
              children: "  // ^ this one is pretty close to our implementation above! But it uses"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  //   `===` for comparison instead of `Object.is`, which always returns"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  //   false for `NaN === NaN`"
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
              children: "  // Unsafe: includes ⚠️ assumptions"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "  \"romgrk-fastCompareUnsafe:equal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":          { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "515"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",     "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "7.48"
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
                color: "#8DDB8C"
              },
              children: "  \"romgrk-fastCompareUnsafe:unequal\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ":        { "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "t"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "445.33"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#FF938A",
                fontStyle: "italic"
              },
              children: "stddev"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "1.24"
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
              children: "}"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode("sup", {
        children: "1"
      }), " Alright ok but we do need to admit that we’ve optimized for “react props”, not for general correctness. We\nreturn ", createVNode(_components.code, {
        children: "true"
      }), " for ", createVNode(_components.code, {
        children: "equals({ a: 1, b: undefined }, { a: 1, c: undefined })"
      }), ", which works for us but not for a generic compare\nfunction. ", createVNode("br", {}), "\nWe do have ", createVNode(_components.code, {
        children: "fastCompare"
      }), " which is still the fastest and 1.5x faster than react if we only consider candidates that use safe\nassumptions. ", createVNode(_components.code, {
        children: "hughsk/shallow-equals"
      }), " is discarded due to its ", createVNode(_components.code, {
        children: "==="
      }), " use."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("sup", {
        children: "2"
      }), " Alright and yes, I have excluded one package that was faster from this list. In my defense, it was ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/shallow-equal-jit",
        children: "shallow-equal-jit"
      }), ",\nwhich requires you to pass the object keys beforehand and only works if the keys stay the same, which does not work for\nreact props. We can assume the keys are ", createVNode(_components.em, {
        children: "likely"
      }), " to be the same, but we can’t assume they are going to be the same."]
    }), "\n", createVNode(_components.h2, {
      id: "final-notes",
      children: "Final notes"
    }), "\n", createVNode(_components.p, {
      children: ["So anyway, if you’re not doing anything funky with your React props and are really way too interested in making your app\nperformant, you can ", createVNode(_components.a, {
        href: "https://github.com/romgrk/react-fast-memo",
        children: "checkout the repo"
      }), "\nor ", createVNode(_components.code, {
        children: "pnpm install react-fast-memo"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "The unsafe version might seem unuseful, but it has certain niche use-cases: if you’re comparing objects that you can 100%\nguarante have the same shape, then that one should be your pick."
    }), "\n", createVNode(_components.p, {
      children: ["One big asterisk though: on JavaScriptCore, the unsafe version is slower! Up-to-date benchmarks ", createVNode(_components.a, {
        href: "https://github.com/romgrk/react-fast-memo?tab=readme-ov-file#benchmarks",
        children: "here"
      }), "."]
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(RandomPlant, {}), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "other-notes",
      children: "Other notes"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "“It doesn’t matter for 99% of use-cases”"
      }), ": Yes you’re right."]
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

const url = "src/content/posts/react-fast-memo.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/react-fast-memo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/react-fast-memo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
