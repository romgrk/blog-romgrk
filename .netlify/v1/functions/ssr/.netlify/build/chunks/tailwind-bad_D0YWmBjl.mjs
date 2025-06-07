import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DI_y9TaY.mjs';
import { R as RandomPlant } from './RandomPlant_Cpx7-LbW.mjs';
import 'clsx';

const frontmatter = {
  "title": "Why tailwind is bad",
  "description": "romgrk ranting about tailwind",
  "pubDate": "Nov 29 2023",
  "rating": 4
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-its-good",
    "text": "Why it’s good"
  }, {
    "depth": 2,
    "slug": "why-its-bad",
    "text": "Why it’s bad"
  }, {
    "depth": 3,
    "slug": "summarizing",
    "text": "Summarizing"
  }, {
    "depth": 2,
    "slug": "how-it-can-be-good",
    "text": "How it can be good"
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
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "So unlike styled-components, there’s actually quite a few things that I appreciate about tailwind, so despite the click-baity title up here, this post should be more balanced in its critique than the last one."
    }), "\n", createVNode(_components.h2, {
      id: "why-its-good",
      children: "Why it’s good"
    }), "\n", createVNode(_components.p, {
      children: ["Tailwind is an amazing at one thing, and that is at being a ", createVNode(_components.em, {
        children: "design framework"
      }), ". You see, when an expert CSS designer starts a project, they will always establish a set of primitives from which to build their design. Those are a spacing unit, a color palette, shades for each color, and a set of component sizes, minimally."]
    }), "\n", createVNode(_components.p, {
      children: ["The problem with this approach has always been that most developers are not expert CSS designers; they’re average CSS designers who are tasked to translate mockups into code, when it’s not just designing stuff themselves. So lacking this experience, we skip the whole CSS base design system phase and jump to coding. And that’s why we end up seeing ", createVNode(_components.code, {
        children: "color: #e07b7b"
      }), " (and 10 different other shades) instead of ", createVNode(_components.code, {
        children: "color: $danger-600"
      }), ". It’s because most devs don’t have the experience or time to do CSS from scratch properly."]
    }), "\n", createVNode(_components.p, {
      children: "And that’s where tailwind comes in. As I said, it’s an amazing design framework and being able to ensure that all the juniors are going to produce somewhat consistent styling with low supervision is a huge benefit. Every app should have a design framework, even if it doesn’t have tailwind."
    }), "\n", createVNode(_components.h2, {
      id: "why-its-bad",
      children: "Why it’s bad"
    }), "\n", createVNode(_components.p, {
      children: "This below is a basic user card. I wrote most of it myself, in about 20 minutes. Not great, but for someone who isn’t a designer, definitely acceptable for an MVP. This looks fine."
    }), "\n", createVNode("div", {
      class: "xs:max-sm:w-full w-96 xs:max-sm:rounded-xl rounded-2xl bg-white border-zinc-100 dark:bg-zinc-900 border dark:border-zinc-700 mb-8",
      children: createVNode("div", {
        class: "flex flex-col gap-2 p-8",
        children: [createVNode("div", {
          class: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-row",
          children: [createVNode("span", {
            class: "mr-2",
            children: "Leanne Graham"
          }), createVNode("div", {
            class: "inline-block text-sm tracking-tight bg-zinc-200 border-zinc-300 dark:bg-zinc-800 border dark:border-zinc-600 py-1 px-2 rounded-md mb-0.5",
            children: "deactivated"
          })]
        }), createVNode("div", {
          class: "flex flex-row flex-wrap",
          children: [createVNode("div", {
            class: "inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-700 text-gray-200 dark:bg-gray-200 dark:text-gray-700 mr-2 mb-2",
            children: "#web"
          }), createVNode("div", {
            class: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",
            children: "#ML"
          }), createVNode("div", {
            class: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",
            children: "#engineer"
          })]
        }), createVNode("div", {
          class: "font-normal leading-6 text-gray-700 dark:text-gray-400 mb-0.5",
          children: "I revolutionize end-to-end systems by transitionning cutting-edge web services to aggregate real-time technologies."
        }), createVNode("label", {
          class: "flex cursor-pointer items-center justify-self-end p-1 gap-2",
          children: [createVNode("span", {
            class: "text-md text-gray-500",
            children: "Receive updates"
          }), createVNode("div", {
            class: "relative grid place-content-center",
            children: [createVNode("input", {
              type: "checkbox",
              class: "peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            }), createVNode("span", {
              class: "pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900"
            })]
          })]
        }), createVNode("div", {
          class: "row gap-1",
          children: [createVNode("button", {
            class: "inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95",
            children: "Like"
          }), createVNode("button", {
            class: "inline-block cursor-pointer rounded-md border border-gray-700 bg-transparent px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95",
            children: "Mute"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "What doesn’t look fine is this:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "html",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "html",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"xs:max-sm:w-full w-96 xs:max-sm:rounded-xl rounded-2xl bg-white border-zinc-100 dark:bg-zinc-900 border dark:border-zinc-700\""
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
              children: "  <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"flex flex-col gap-2 p-8\""
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
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-row\""
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
              children: "span"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"mr-2\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">Leanne Graham</"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "span"
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
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"inline-block text-sm tracking-tight bg-zinc-200 border-zinc-300 dark:bg-zinc-800 border dark:border-zinc-600 py-1 px-2 rounded-md mb-0.5\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">deactivated</"
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
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"flex flex-row flex-wrap\""
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
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-700 text-gray-200 dark:bg-gray-200 dark:text-gray-700 mr-2 mb-2\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">#photography</"
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
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">#travel</"
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
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">#winter</"
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
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"font-normal leading-6 text-gray-700 dark:text-gray-400 mb-0.5\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">I revolutionize end-to-end systems by transitionning cutting-edge web services to aggregate real-time technologies.</"
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
              children: "label"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"flex cursor-pointer items-center justify-between p-1\""
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
              children: "span"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">Receive updates</"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "span"
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
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"relative grid place-content-center\""
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
              children: "input"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " type"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"checkbox\""
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2\""
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
              children: "        <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "span"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "></"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "span"
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
              children: "label"
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
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"row gap-1\""
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
              children: "button"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">Like</"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "      <"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"inline-block cursor-pointer rounded-md border border-gray-700 bg-transparent px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95\""
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: ">Mute</"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
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
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["The tailwind website tries to gaslight us into thinking that it’s fine to write your styles like this. That’s bullshit. This is a ", createVNode(_components.em, {
        children: "wall of text"
      }), ", this is not markup code. It’s as if all of a sudden we go back to the dark times where newlines hadn’t been invented yet. To illustrate their point, they sure give a few nice examples here and there. But those examples are never complete. If you’re building a modern website, you also need responsive design, so all the dimensions classes (", createVNode(_components.code, {
        children: "w-full"
      }), ", ", createVNode(_components.code, {
        children: "h-16"
      }), ", etc) are double or tripled with additional ", createVNode(_components.code, {
        children: "sm:..."
      }), " and ", createVNode(_components.code, {
        children: "lg:..."
      }), " prefixes. And light+dark themes are gaining support, so you also need to double your color classes (", createVNode(_components.code, {
        children: "text-gray-700"
      }), ", ", createVNode(_components.code, {
        children: "bg-blue-100"
      }), ", etc) with ", createVNode(_components.code, {
        children: "dark:..."
      }), ". The example above is a realistic one, and it can get much worse than that."]
    }), "\n", createVNode(_components.p, {
      children: ["I made the mistake of purchasing TailwindUI for a new project some time ago. The initial productivity gain is amazing and it looks great initially, but the moment you start trying to make changes, you start reconsidering your life choices. You see, if I wanted to update the card’s “deactivated” status above in a BEM project, I’d quickly locate the ", createVNode(_components.code, {
        children: "card__status"
      }), " and proceed to update the class. With the monstrosity above, I need to locate the ", createVNode(_components.code, {
        children: "inline-block text-sm tracking-tight bg-zinc-200 border-zinc-300 dark:bg-zinc-800 border dark:border-zinc-600 py-1 px-2 rounded-md mb-0.5"
      }), " element. And then when you start updating it, blink for a moment and you might very well loose track of where the element was because it’s drowned in a sea of inline styles. And if you need to scroll around to refer to styles a few lines away, you better keep a second window open because there is no way you’re finding that element again. Using tailwind this way is basically inline styles and it’s ", createVNode(_components.em, {
        children: "wrong"
      }), ". You get an amazing DX for the first D who writes the MVP component, and every subsequent D that follows gets the worst DX ever since inline styles."]
    }), "\n", createVNode(_components.p, {
      children: ["And that’s also what you get everytime you open your devtools. Your DOM tree is nothing but a downpour of tailwind classes that overflow the already cramped panel. If I open my DOM tree, I want to see that this div is a ", createVNode(_components.code, {
        children: "card__title"
      }), " or a ", createVNode(_components.code, {
        children: "list__item"
      }), ". Seeing a ", createVNode(_components.code, {
        children: "[insert stream of tailwind classes]"
      }), " does nothing to tell me what kind of element I have in front of my eyes, be it in the devtools or in the source code. DX isn’t about what feels best to write fast, DX is about what gives the best experience over the whole period during which the code needs to be read, debugged & updated."]
    }), "\n", createVNode(_components.p, {
      children: ["The other failing of tailwind is that, if used as intended by its creator, the styles aren’t shared. If I want to build a “button” style, there is no obvious recommended way to build it from say ", createVNode(_components.code, {
        children: "bg-blue-500 text-white font-semibold active:bg-blue-400"
      }), " and share it across many locations. So what ends up happening is tons of duplication. Wanna update button-like styles? Go hunt down all those duplicates and update them one by one."]
    }), "\n", createVNode(_components.p, {
      children: ["Being able to give good semantic names is one of the most important aspects of programming. As a wise stackoverflow user once said, ", createVNode(_components.em, {
        children: "“the process of naming makes you face the horrible fact that you have no idea what the hell you’re doing”"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "summarizing",
      children: "Summarizing"
    }), "\n", createVNode(_components.p, {
      children: "So if we recap why tailwind is bad:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "It makes it hard to read the element tree"
      }), "\n", createVNode(_components.li, {
        children: "It makes it hard to update styles"
      }), "\n", createVNode(_components.li, {
        children: "It doesn’t recommend a way to share styles"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-it-can-be-good",
      children: "How it can be good"
    }), "\n", createVNode(_components.p, {
      children: ["So that being said, I’d like to repeat again (because I’m sure I’ll get angry comments on it) that ", createVNode(_components.strong, {
        children: "tailwind is a great CSS framework"
      }), ". It enforces base style consistency, and that’s a good thing. If you write CSS without a framework that fullfills the same role as tailwind, you’re doing CSS wrong."]
    }), "\n", createVNode(_components.p, {
      children: ["But it feels like tailwind missed a step. That step, which I came across recently, is ", createVNode(_components.a, {
        href: "https://daisyui.com/",
        children: "daisyUI"
      }), ". It turns your code from something like this:"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "html",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "html",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95\""
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
              children: "  Button"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
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
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Into something like this:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "html",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "html",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"btn btn-primary\""
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
              children: "  Button"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
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
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This here is simple, readable & reusable code."
    }), "\n", createVNode(_components.p, {
      children: ["The problem with tailwind classes is they are the next step right above inline CSS styles. They’re a good design language, but they’re not enough to build a design system. If you’re building a design system, you want good semantic names. If I add the style ", createVNode(_components.code, {
        children: "bg-blue-500"
      }), " on my button, I want to be able to tweak that color later. The actual color name I will want when it’s time to update the styles is something like ", createVNode(_components.code, {
        children: "bg-primary-500"
      }), " or ", createVNode(_components.code, {
        children: "bg-info-500"
      }), ", because it provides a semantic value and can be tweaked separately when the designer suddenly decides that our primary color now ", createVNode(_components.em, {
        children: "needs"
      }), " to be flashy pink because all his friends are using it (or maybe because they’re all ", createVNode(_components.em, {
        children: "not"
      }), " using it)."]
    }), "\n", createVNode(_components.p, {
      children: ["The other acceptable way to use tailwind that I’ve found is to use it with regular CSS, update the tailwind config to get semantic color names, and use ", createVNode(_components.code, {
        children: "@apply"
      }), ":"]
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "css",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "css",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: ".btn--primary"
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
              children: "  @"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "apply"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " text-white"
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
              children: "  @"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: "apply"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " bg-primary-"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "500;"
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
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "html",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "html",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"btn btn--primary\""
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
              children: "  Button"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
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
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "You still get simple, readable & reusable code."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "“But what if I need to add a margin to some buttons, won’t I need to create tons of modifiers for each and every element?”"
      })
    }), "\n", createVNode(_components.p, {
      children: "Well no. You see the goal is always to have readable & reusable code. If the best way to reach that goal is to use an occasional tailwind class here and there, you just use it:"
    }), "\n", createVNode(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: createVNode(_components.pre, {
        style: {
          backgroundColor: "#22272e",
          color: "#adbac7"
        },
        tabindex: "0",
        "data-language": "html",
        "data-theme": "github-dark-dimmed",
        children: createVNode(_components.code, {
          "data-language": "html",
          "data-theme": "github-dark-dimmed",
          style: {
            display: "grid"
          },
          children: [createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#8DDB8C"
              },
              children: "button"
            }), createVNode(_components.span, {
              style: {
                color: "#6CB6FF"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#96D0FF"
              },
              children: "\"btn btn--primary mb-1\""
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
              children: "  Button"
            })
          }), "\n", createVNode(_components.span, {
            "data-line": "",
            children: [createVNode(_components.span, {
              style: {
                color: "#ADBAC7"
              },
              children: "</"
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
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["We did this in a team I worked with a few months ago, and our non-enforced rule was ", createVNode(_components.em, {
        children: "“if you need more than 3-4 tailwind classes, you should probably make it a new class”"
      }), ". Worked well, we got the best of both worlds."]
    }), "\n", createVNode(_components.p, {
      children: "So please, don’t ever use tailwind again as tailwind says you should use it."
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

const url = "src/content/posts/tailwind-bad.mdx";
const file = "/home/romgrk/src/blog-romgrk/src/content/posts/tailwind-bad.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/romgrk/src/blog-romgrk/src/content/posts/tailwind-bad.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
