import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import outdent from 'outdent';
/* empty css                              */

const globalScope = typeof window !== "undefined" ? window : {};
const originalConsole = globalScope.console;
const indirectEval = globalScope.eval;
function CodeRunner(props) {
  const [code, setCode] = useState(outdent.string(props.code));
  const [isOpen, setIsOpen] = useState(false);
  const [output, setOutput] = useState("");
  const console = {
    log: (message) => {
      const text = typeof message === "string" ? message : JSON.stringify(message);
      setOutput((output2) => output2 + "> " + text + "\n");
    }
  };
  const run = () => {
    setOutput("");
    globalScope.console = console;
    try {
      indirectEval((props.context ?? "") + ";" + code);
    } catch (err) {
      console.log(err.message);
    }
    globalScope.console = originalConsole;
    if (props.transformOutput)
      setOutput(props.transformOutput);
  };
  useEffect(() => {
    if (props.autoRun) {
      run();
    }
  }, [props.autoRun]);
  return /* @__PURE__ */ jsxs("div", { className: "code-runner", children: [
    props.context && /* @__PURE__ */ jsxs("div", { className: "code-runner-show-context", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "sm",
          title: "The context is code executed before this snippet but not relevant to the example.",
          onClick: () => setIsOpen(true),
          children: "Show context"
        }
      ),
      /* @__PURE__ */ jsxs(Dialog, { className: "modal", open: isOpen, onClose: () => setIsOpen(false), children: [
        /* @__PURE__ */ jsx("div", { className: "modal-backdrop", onClick: () => setIsOpen(false) }),
        /* @__PURE__ */ jsx("div", { className: "modal-panel", children: /* @__PURE__ */ jsxs(Dialog.Panel, { children: [
          /* @__PURE__ */ jsx(Dialog.Title, { children: "Code runner context" }),
          /* @__PURE__ */ jsx(Dialog.Description, { children: "The context code is run before the snippet inside the code runner is executed. It contains code that isn't directly relevant to the example." }),
          /* @__PURE__ */ jsx("pre", { children: outdent.string(props.context ?? "") }),
          /* @__PURE__ */ jsx("div", { className: "modal-actions", children: /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(false), children: "Close" }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        style: {
          "--lines": props.codeLines
        },
        onChange: (ev) => setCode(ev.target.value),
        value: code
      }
    ),
    /* @__PURE__ */ jsx("button", { onClick: run, children: "Run" }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        style: {
          "--lines": props.consoleLines
        },
        disabled: true,
        value: output
      }
    )
  ] });
}

export { CodeRunner as C };
