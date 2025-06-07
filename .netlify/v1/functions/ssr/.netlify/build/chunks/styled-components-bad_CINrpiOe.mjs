import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { R as RandomPlant } from './RandomPlant_Cpx7-LbW.mjs';
import 'clsx';

const frontmatter = {
  "title": "Why styled components are bad",
  "description": "romgrk ranting about styled components",
  "pubDate": "Nov 28 2023",
  "rating": 3
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "reusability",
    "text": "Reusability"
  }, {
    "depth": 3,
    "slug": "performance",
    "text": "Performance"
  }, {
    "depth": 2,
    "slug": "final-notes",
    "text": "Final notes"
  }];
}
function _createMdxContent(props) {
  const _components = {
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
    children: [createVNode(_components.p, {
      children: "Let’s say you open a file in an unknown project, or a project you worked on a long time ago (which is basically the same thing), and jump directly to the render method of a component that you need to work on. This is what you see:"
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
              children: "Glorb"
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
                color: "#ADBAC7"
              },
              children: "      <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Obul"
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
                color: "#ADBAC7"
              },
              children: "        <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Zirk"
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
              children: "      </"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Obul"
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
                color: "#ADBAC7"
              },
              children: "    </"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "Glorb"
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
      children: ["Now, assume this project uses styled-components. What are ", createVNode(_components.code, {
        children: "Glorb"
      }), ", ", createVNode(_components.code, {
        children: "Obul"
      }), " and ", createVNode(_components.code, {
        children: "Zirk"
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Styled components that only add some styling?"
      }), "\n", createVNode(_components.li, {
        children: "Real components that encapsulate logic & behavior?"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "There is no way to know!"
      }), " It could very well be any of these possibilities:"]
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
              children: "/* just some cute styling :) */"
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
              children: " const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " Glorb"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " styled."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "  border: 1px solid salmon;"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`"
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
              children: " Glorb"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "children"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }) {"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  /* lots of logic */"
            })
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
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/* ... */"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " }, [])"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "  /* and funky stuff */"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "    React.Children."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "map"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "(children, "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "child"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: " /* ... */"
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
      children: "The only solution left at this point for you is to jump to the definition of each of those components to try to make sense if any of them does something funky, before you work further on whatever you need to fix. In other words, you have no guarantees about what’s going on in that first snippet. You can’t make assumptions about what those components are."
    }), "\n", createVNode(_components.p, {
      children: ["Besides, the JSX tag name is not a natural place to encode styling. The tag name for elements has always been for the logic & behavior it encodes, be it a ", createVNode(_components.code, {
        children: "div"
      }), ", ", createVNode(_components.code, {
        children: "button"
      }), ", ", createVNode(_components.code, {
        children: "input"
      }), " or even custom ones like ", createVNode(_components.code, {
        children: "Combobox"
      }), " or ", createVNode(_components.code, {
        children: "DatePicker"
      }), ". You’re going to be able to tell from the name right away what behavior it encapsulates. So what is the best place to encode styling, you ask me? The same place that we’ve been using for decades: ", createVNode(_components.code, {
        children: "class(Name)"
      }), " and ", createVNode(_components.code, {
        children: "style"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Now imagine again you come in an unknown project and you look at this:"
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
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " className"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "glorb"
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
                color: "#ADBAC7"
              },
              children: "      <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " className"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "obul"
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
                color: "#ADBAC7"
              },
              children: "        <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " className"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "zirk"
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
              children: "      </"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "div"
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
                color: "#ADBAC7"
              },
              children: "    </"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "div"
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
      children: ["Sure, it’s very slightly more verbose. On the other hand you know for a fact that all there is here are divs and nothing funky is going to happen. ", createVNode(_components.code, {
        children: "glorb"
      }), ", ", createVNode(_components.code, {
        children: "obul"
      }), " and ", createVNode(_components.code, {
        children: "zirk"
      }), " are classnames and you don’t need to jump anywhere to figure that out. If you later need to add styling via props, you’re already set up to ", createVNode(_components.code, {
        children: "clsx"
      }), " everything:"]
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
              children: "({ "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "className"
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
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " className"
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
              children: "(glorb, className)"
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
                color: "#768390"
              },
              children: " /* etc */"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " }"
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
              children: "div"
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
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "/*"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: " * Note how everything style is defined at a single point."
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: " * No need to glance at the tag to figure out if it adds styling as well,"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: " * you just know instantly it's all in the className."
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: " * Simple, predictable, consistent."
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: " */"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "reusability",
      children: "Reusability"
    }), "\n", createVNode(_components.p, {
      children: ["There’s also the fact that styles gone into a styled components are not reusable. Say you want to reuse and combine the styles of ", createVNode(_components.code, {
        children: "Glorb"
      }), " and ", createVNode(_components.code, {
        children: "Obul"
      }), ". How you do?"]
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
              children: " Glorb"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " styled."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`color: red;`"
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
              children: " Obul"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " styled."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`background-color: yellow;`"
            })]
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
              children: "() {"
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
                color: "#F47067"
              },
              children: "    <"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "Glorb"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",Obul "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "/>"
            }), createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: " // <!--- ??? :')"
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
      children: ["If you wanted to make it work, you’d need to both define the styled components ", createVNode(_components.em, {
        children: "and"
      }), " expose the styles CSS string for others to re-use."]
    }), "\n", createVNode(_components.p, {
      children: ["Whereas if you have classNames ", createVNode(_components.code, {
        children: "glorb"
      }), " and ", createVNode(_components.code, {
        children: "obul"
      }), ", you again simply ", createVNode(_components.code, {
        children: "clsx"
      }), " and you’re done. You can expose them & export them, and it works anywhere. Classes are native to the ecosystem and everyone understands them."]
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
              children: " glorb"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " css"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`color: red;`"
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
              children: " obul"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " css"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`background-color: yellow;`"
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
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " className"
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
              children: "(glorb, obul)"
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
    }), "\n", createVNode(_components.h3, {
      id: "performance",
      children: "Performance"
    }), "\n", createVNode(_components.p, {
      children: "If you’re using styled components, each of them is roughly going to be doing this:"
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
              children: " StyledButton"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({ "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "className"
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
              children: "rest"
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
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " className"
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
              children: "(className, autogeneratedStyleClassName)"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " {..."
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "rest"
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
      children: "If you’re using styled components to style everything, then you’re roughly doubling the cost of rendering your whole app. Admittedly your logical components will be doing more work so it’s going to be a factor between 1 and 2, but it’s still a non-negligible cost on a framework that already has quite a few costs."
    }), "\n", createVNode(_components.h2, {
      id: "final-notes",
      children: "Final notes"
    }), "\n", createVNode(_components.p, {
      children: ["Because I’m sure I’ll get comments about it, I’m of course not arguing that you shouldn’t encapsulate components if they form the base of your app’s design language. If you need to define commmon elements that are “style-only” but that still represent a different logical block, say ", createVNode(_components.code, {
        children: "Card"
      }), " vs ", createVNode(_components.code, {
        children: "Paragraph"
      }), ", then sure go ahead. When you open a render function with ", createVNode(_components.code, {
        children: "<Paragraph>...</Paragraph>"
      }), " and ", createVNode(_components.code, {
        children: "<Card>...</Card>"
      }), ", you’ll still know that nothing funky is going on because those become the common way to write ", createVNode(_components.code, {
        children: "p"
      }), " or ", createVNode(_components.code, {
        children: "div"
      }), " in your app and that’s fine. It doesn’t negates the fact that using styled-components everywhere is going to shit on the readability and reusability of your codebase. Styled components are a net negative in nearly all cases."]
    }), "\n", createVNode(_components.p, {
      children: "So please, stop doing this:"
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
              children: "export"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " Glorb"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " styled."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "  border: 1px solid salmon;"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "and start doing this:"
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
              children: "export"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " glorb"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " css"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "  border: 1px solid salmon;"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "`"
            })
          })]
        })
      })
    }), "\n", createVNode("br", {}), "\n", createVNode("br", {}), "\n", createVNode(RandomPlant, {}), "\n", createVNode("br", {}), "\n", createVNode("br", {})]
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

const url = "src/content/posts/styled-components-bad.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/styled-components-bad.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/styled-components-bad.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
