import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { $ as $$Aside } from './Aside_6iP3dSQA.mjs';
import { R as RandomPlant } from './RandomPlant_Cpx7-LbW.mjs';
import 'clsx';

const exampleSuccess = new Proxy({"src":"/_astro/typescript-success.Bt-ZGaWT.png","width":1167,"height":544,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/romgrk/src/blog-romgrk/src/content/posts/efficient-typescript/typescript-success.png";
							}
							
							return target[name];
						}
					});

const exampleError = new Proxy({"src":"/_astro/typescript-error.DpyrpHdn.png","width":1167,"height":544,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/romgrk/src/blog-romgrk/src/content/posts/efficient-typescript/typescript-error.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Efficient Typescript",
  "description": "",
  "pubDate": "Oct 20 2024",
  "sidebar": {
    "display": false
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "opaque-types",
    "text": "Opaque types"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    figure: "figure",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["One of the most useful ways that a type-system can work is by preventing a class of errors. The simplest way to interpret that is that it will prevent you from using a ", createVNode(_components.code, {
        children: "number"
      }), " where you need a ", createVNode(_components.code, {
        children: "string"
      }), ", but there’s more to it. Typescript allows you to encode more complex restrictions into the type-system, so the compiler can help you avoid making some mistakes."]
    }), "\n", createVNode(_components.p, {
      children: ["It’s an issue I see frequently, even in popular library code. For example, let’s take this snippet from ", createVNode(_components.code, {
        children: "react-query"
      }), "’s documentation:"]
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
                color: "#ADBAC7"
              },
              children: " { "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "isPending"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "error"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "data"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " } "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useQuery"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "({"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  queryKey: ["
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "'repoData'"
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
                color: "#DCBDFB"
              },
              children: "  queryFn"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ": "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "async"
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
                color: "#DCBDFB"
              },
              children: " fetch"
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
                color: "#96D0FF"
              },
              children: "    'https://api.github.com/repos/TanStack/query'"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  ),"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "});"
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
              children: "if"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " (isPending) "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "return"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'Loading...'"
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
              children: " (error) "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "return"
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " 'Error: '"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " +"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " error.message"
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
              children: "return"
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
              children: "  <"
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
              children: "    <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "h1"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "{"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "data.full_name"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "h1"
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
              children: "    <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "p"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "{"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "data.description"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "}"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "p"
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
              children: "  </"
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
              children: ")"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["There is here an implicit constraint that if ", createVNode(_components.code, {
        children: "isPending"
      }), " or ", createVNode(_components.code, {
        children: "error"
      }), " is present, then ", createVNode(_components.code, {
        children: "data"
      }), " isn’t. But ensuring that constraint is a task that’s left to you, the fallible programmer. Typescript actually allows you to ", createVNode(_components.strong, {
        children: "turn that implicit constraints into an explicit one"
      }), ", which means the compiler could be doing work so that you don’t have to think about it."]
    }), "\n", createVNode(_components.p, {
      children: "For example, if the typings were defined as such:"
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
              children: " PendingState"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "   ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "isPending"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " true"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "error"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "data"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " null"
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
              children: "type"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " ErrorState"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "     ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "isPending"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "error"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Error"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "data"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " null"
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
              children: "type"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " LoadedState"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "T"
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
              children: " { "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "isPending"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " false"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "error"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " null"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ",  "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "data"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " T"
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
              children: "type"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " QueryResult"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "T"
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
                color: "#F69D50"
              },
              children: " PendingState"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " ErrorState"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " |"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " LoadedState"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "T"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Then the compiler would have enough information to tell you that you can’t use ", createVNode(_components.code, {
        children: "data"
      }), " if it is ", createVNode(_components.code, {
        children: "null"
      }), ":"]
    }), "\n", createVNode("div", {
      class: "flex flex-col md:flex-row w-full",
      children: [createVNode("img", {
        class: "w-full md:w-1/2",
        src: exampleSuccess.src
      }), createVNode("img", {
        class: "w-full md:w-1/2",
        src: exampleError.src
      })]
    }), "\n", createVNode("div", {
      class: "text-center text-sm",
      children: createVNode(_components.p, {
        children: createVNode(_components.a, {
          href: "https://www.typescriptlang.org/play/?#code/FAFwngDgpgBAClAdgEwJaIOYGUQEMSwwwC8MA3jKgM4IroYBcMIATgK5QA0RULLA9iyaI2AG1HcYyfLmFjRMAL6hIsAKJ9BOfISIlylGkjSYmAM1yiqXGLwFCYG+92l454pSugwAMv1zIUMjaBAA8ACoAfPoU1LQmjDAWVjZ2gu4SRK6yMOGeXrAAihwsYABKUFRiIBHRpPH0IbAAPo6aLE0wrX4BQU21wMBmbIgAxiCo-IgwbNbFvGAAFACU5MBELFAgbCzTsUZ0pszsqe0ZLjIZSjC4VDDzpRVVojUUiLgAtlBMVKz0SpFgMohiNxpNpgBhfgfCBTJAgFZrIijKa-AxxYz0bhpFgXPDXUizKAPJbLADcgyIAHoqZQzDBFhjDhhVpttrsYAByHoJAB0-M5lLpDJxrK2O2mnKc6S5MAA1LZ2ryvlQqLgMFAhWyJQz1npsrz3l89csgUA",
          children: "See this example in Typescript playground"
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["This is essentially an implementation of the age-old programming saying, ", createVNode(_components.strong, {
        children: "“make illegal state unrepresentable”"
      }), "."]
    }), "\n", createVNode($$Aside, {
      title: "Correction",
      children: createVNode(_components.p, {
        children: ["Some commenter pointed out that react-query is a bad example because it can handle more complex situations with its different flags (notably keep ", createVNode(_components.code, {
          children: ".data"
        }), " alive while re-fetching). I’ll leave the example as is, because the example is good, even if contrived.", createVNode(_components.br, {}), "\nThe library could also split that behavior into a separate ", createVNode(_components.code, {
          children: "useRetainedData"
        }), " hook, which would allow for the base ", createVNode(_components.code, {
          children: "useQuery"
        }), " hook to have strong type constraints."]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Proper error handling was pioneered by monadic languages such as Haskell, which has ", createVNode(_components.a, {
        href: "https://hackage.haskell.org/package/base-4.20.0.1/docs/Data-Either.html",
        children: ["the ", createVNode(_components.code, {
          children: "Either"
        }), " monad"]
      }), " and its two subtypes, ", createVNode(_components.code, {
        children: "Left"
      }), " and ", createVNode(_components.code, {
        children: "Right"
      }), ". A more pragmatic approach exists in Rust, which has ", createVNode(_components.a, {
        href: "https://doc.rust-lang.org/std/result/",
        children: ["the ", createVNode(_components.code, {
          children: "Result"
        }), " type"]
      }), " and its two subtypes ", createVNode(_components.code, {
        children: "Ok"
      }), " and ", createVNode(_components.code, {
        children: "Err"
      }), ". Those are lessons that we should apply to modern programming to get both safe and ergonomic error handling."]
    }), "\n", createVNode(_components.p, {
      children: ["One example of ergonomic error handling: ", createVNode(_components.code, {
        children: "Result"
      }), " being a Functor means we can implement it as a class with a ", createVNode(_components.code, {
        children: ".map"
      }), " method, so we could transform the value inside a ", createVNode(_components.code, {
        children: "Result"
      }), " the same way we can operate on values inside an ", createVNode(_components.code, {
        children: "Array"
      }), " (", createVNode(_components.code, {
        children: "Ok"
      }), " would apply the mapping function, while mapping an ", createVNode(_components.code, {
        children: "Err"
      }), " would be a no-op)."]
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
              children: " Result"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "User"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">;"
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
              children: " name"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " findUser"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "()."
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
              children: " user.name) "
            }), createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// Result<string>"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["This allows you to delay error handling for later, while still allowing you to transform the value. It’s very similar to how ", createVNode(_components.code, {
        children: "Promise"
      }), " let’s you chain ", createVNode(_components.code, {
        children: ".then"
      }), " calls even if you haven’t attached a ", createVNode(_components.code, {
        children: ".catch"
      }), " handler yet. In fact, the cases are related because ", createVNode(_components.code, {
        children: "Promise"
      }), " is basically a monad, bar a few minor details."]
    }), "\n", createVNode(_components.p, {
      children: ["Other methods from category theory would also be applicable, such as ", createVNode(_components.code, {
        children: ".flatMap()"
      }), " or ", createVNode(_components.code, {
        children: ".fold()"
      }), ", which in turn allow new expressive ways to write code:"]
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
              children: " result"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: " useQuery"
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
              children: "return"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " result."
            }), createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "fold"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "  () "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "=>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "Spinner"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " />,"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "  error"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "Message"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " error"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "error"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "} />,"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "  data"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " =>"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " <"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "p"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">{data.name}"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "</"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "p"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ">"
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
              children: ")"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["But the greatest benefit of this kind of error-handling is that it ", createVNode(_components.strong, {
        children: "encodes failure directly in the type-system"
      }), ", so you know at compile-time if you haven’t dealt with a failure, rather than have to wait to ", createVNode(_components.code, {
        children: "catch"
      }), " errors at runtime."]
    }), "\n", createVNode(_components.h2, {
      id: "opaque-types",
      children: "Opaque types"
    }), "\n", createVNode(_components.p, {
      children: "One feature that I really miss in Typescript compared to type-systems not based on structural typings is being able to declare new types that can hold the same value type without being able to mix them up. Here is an easy example:"
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
              children: " Width"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " number"
            })]
          }), "\n", createVNode(_components.span, {
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
              children: " Height"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " number"
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
              children: " baseHeight"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 50"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  as"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Height"
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
              children: " baseWidth"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 100"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " as"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Width"
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
              children: " sectionWidth"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " 40"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " as"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Width"
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
              children: " diff"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "  ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " baseWidth "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "-"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " sectionWidth"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "//    ^ is of type `Width`"
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
              children: "// ...then later in the code"
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
              children: " newValue"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " baseHeight "
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "-"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " diff"
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// Error, we are mixing Height and Width!"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// But TS won't warn you :("
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["How wonderful would it be if the compiler could prevent us from mixing values that shouldn’t be mixed! This is a constraint that we’ll often try to encode in the variable name (e.g. all width variables ending with ", createVNode(_components.code, {
        children: "...Width"
      }), "), but it’s a shame that the type-system can’t eliminate this type of error. It is possible to ", createVNode(_components.a, {
        href: "https://calebmer.com/tangents/opaque-types-in-typescript.html",
        children: "create somewhat opaque types"
      }), " that can’t be mixed, but because we can’t express which operators are valid for a type, the compiler would consider ", createVNode(_components.code, {
        children: "Width + Width"
      }), " as an error if it was defined as such. So most of the time, using opaque types to add constraints is not worth the hassle."]
    }), "\n", createVNode(_components.p, {
      children: ["One notable exception could be safe/unsafe strings. For example, if you’re building a templating engine and need to pass user-input strings, being able to have a ", createVNode(_components.code, {
        children: "SafeString"
      }), " type could allow the compiler to ensure safety:"]
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
              children: "declare"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " const"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " __safe"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " unique"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " symbol"
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
              children: "type"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " SafeString"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " ="
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " string"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: " &"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " { [__safe]"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " true"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: " };"
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
              children: " escape"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
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
                color: "#6CB6FF"
              },
              children: " string"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ")"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " SafeString"
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
              children: " format"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "template"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " string"
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
                color: "#F47067"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: " Record"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "string"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#F69D50"
              },
              children: "SafeString"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">) {"
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
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "// then use it as such"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#DCBDFB"
              },
              children: "format"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "("
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "  \"<html><p>User name: %name%</p></html>\""
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
              children: "\"Unsafe! <script src="
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\\\""
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "https://attacker.com/script.js"
            }), createVNode(_components.span, {
              style: {
                color: "#F47067"
              },
              children: "\\\""
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: " />\""
            })]
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "    //    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: createVNode(_components.span, {
              style: {
                color: "#768390"
              },
              children: "    //    Type 'string' is not assignable to type 'SafeString'."
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
              children: ")"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["Please, add explicit constraints to your APIs. ", createVNode(_components.strong, {
        children: "Well placed constraints are not limitations, they are actually freedom"
      }), ". It lets the compiler do the dirty work of checking all the minor details your overlooked, and let’s you build more reliable software."]
    }), "\n", createVNode(_components.p, {
      children: "Typescript also has much more depth than what I covered here, so if you want to understand how to encode more complex constraints, I highly recommend reading these posts:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://zhenghao.io/posts/ts-never",
        children: "https://zhenghao.io/posts/ts-never"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "https://zhenghao.io/posts/type-programming",
        children: "https://zhenghao.io/posts/type-programming"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "https://zhenghao.io/posts/type-functions",
        children: "https://zhenghao.io/posts/type-functions"
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

const url = "src/content/posts/efficient-typescript.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/efficient-typescript.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/efficient-typescript.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
