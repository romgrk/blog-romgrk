import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { useRef, useState } from 'react';
import cx from 'clsx';

const timeToRun = 1e3;
const pausePerBlock = 500;
const EMPTY_RESULT = {
  runTime: 0,
  amountOfRounds: 0,
  percent: 0
};
function Benchmark({ selector, iterations = 1, results }) {
  const testCase = useRef("");
  const setup = useRef("");
  const [isRunning, setRunning] = useState(false);
  const [shown, setShown] = useState(false);
  const [progress, setProgress] = useState(-1);
  const [blocks, setBlocks] = useState(() => {
    if (typeof document === "undefined") return [];
    let result = [];
    setup.current = "";
    Array.from(document.querySelectorAll(`${selector} pre > code`)).forEach((block, index) => {
      const code2 = block.textContent.trim();
      const id = code2.startsWith("//") ? code2.slice(2).split("\n")[0].trim() : `Case ${index + 1}`;
      if (id.startsWith("test case")) {
        testCase.current = code2 + ";";
        return;
      }
      if (id.startsWith("setup")) {
        setup.current += code2 + ";";
        return;
      }
      result.push({ id, code: code2, run: void 0, result: results?.[id] ?? EMPTY_RESULT });
    });
    return result;
  });
  const runTestForAmountOfTime = (block, currentTimeToRun = timeToRun) => {
    let startTimer = performance.now();
    let timer = performance.now();
    let counter = 0;
    do {
      for (let i = 0; i < iterations; i++) {
        block.run();
      }
      counter++;
      timer = performance.now();
    } while (timer - startTimer < currentTimeToRun);
    return { counter, runTime: startTimer - timer, timer };
  };
  const runTests = async () => {
    blocks.forEach((b2) => {
      b2.result.percent = 0;
    });
    setProgress(0);
    setRunning(true);
    setBlocks([...blocks]);
    blocks.forEach((b) => {
      const code = `${setup.current}; (function(){${b.code};${testCase.current}})`;
      try {
        b.run = eval(code);
      } catch (e) {
        console.error(e);
        console.log(code);
      }
    });
    await sleep(500);
    for (let block of blocks) {
      runTestForAmountOfTime(block, 500);
    }
    await sleep(1e3);
    let timeForTest = (timeToRun + pausePerBlock * 2) * blocks.length - pausePerBlock;
    let completeTestStart = performance.now();
    for (let i = 0; i < blocks.length; i++) {
      let block = blocks[i];
      await sleep(pausePerBlock);
      let testResult = runTestForAmountOfTime(block, timeToRun);
      block.result = {
        runTime: testResult.runTime,
        amountOfRounds: testResult.counter,
        percent: 0
      };
      let t = testResult.timer - completeTestStart;
      let progress2 = Math.round(100 / timeForTest * t);
      if (progress2 > 100) progress2 = 100;
      setProgress(progress2);
      if (i < blocks.length - 1)
        await sleep(pausePerBlock);
    }
    let f = blocks.reduce((prev, current) => prev.result.amountOfRounds > current.result.amountOfRounds ? prev : current);
    const maxRounds = f.result.amountOfRounds;
    for (let block of blocks) {
      block.result.percent = Math.round(100 / maxRounds * block.result.amountOfRounds * 100) / 100;
    }
    setProgress(0);
    setShown(true);
    setRunning(false);
    setBlocks([...blocks]);
    blocks.forEach((b2) => {
      b2.run = void 0;
    });
    console.log(JSON.stringify(blocks.reduce((rs, block) => {
      rs[block.id] = block.result;
      return rs;
    }, {})));
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex md:flex-row flex-col gap-4 mb-2", children: [
    /* @__PURE__ */ jsx("div", { className: cx("flex-1 mb-1 grid grid-cols-[max-content_auto]", isRunning && "opacity-50"), children: blocks.map(
      (b2) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "w-max-content pr-4", children: /* @__PURE__ */ jsxs("b", { className: "text-sm", children: [
          b2.id,
          ":"
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid place-items-center", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-lg bg-blue-300/10 overflow-hidden text-center font-bold h-6 p-0 text-sm w-full", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-blue-500/80 absolute top-0 left-0 h-full transition-all", style: { width: `${shown ? b2.result.percent : 0}%` } }),
          /* @__PURE__ */ jsxs("span", { className: "absolute top-0.5 m-auto left-0 right-0", children: [
            shown ? b2.result.percent : 0,
            "%"
          ] })
        ] }) })
      ] }, b2.id)
    ) }),
    /* @__PURE__ */ jsxs("div", { children: [
      results !== void 0 && !shown && /* @__PURE__ */ jsx("button", { className: "w-20", onClick: () => setShown(true), children: "Show" }),
      results === void 0 || shown && /* @__PURE__ */ jsx("button", { className: "w-20", disabled: isRunning, onClick: runTests, children: isRunning ? `${progress}%` : "Run" })
    ] })
  ] });
}
function sleep(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n);
  });
}

export { Benchmark as B };
