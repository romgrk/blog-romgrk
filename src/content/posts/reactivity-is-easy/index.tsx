import { createContext, useContext, useEffect, useState, useMemo, useRef } from 'react';
import cx from 'clsx';

export namespace Naive {
  const Context = createContext({ focus: 0, setFocus: (_: number) => {} });

  export function Grid() {
    // The selection state is defined at the root of the component.
    const [focus, setFocus] = useState(0);

    // focus index & setter are stored in a context.
    const context = useMemo(() => ({ focus, setFocus }), [focus]);

    return (
      <div className="rounded-md border border-gray-500 overflow-hidden grid grid-cols-5 md:grid-cols-10">
        <Context.Provider value={context}>
          {Array.from({ length: 50 }).map((_, i) => (
            <Cell index={i} />
          ))}
        </Context.Provider>
      </div>
    );
  }

  const Cell = ({ index }: { index: number }) => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const context = useContext(Context);
    const isFocus = context.focus === index;

    useEffect(() => {
      ref.current?.classList.remove('flash');
      setTimeout(() => {
        ref.current?.classList.add('flash');
      });
    });

    return (
      <button
        ref={ref}
        onClick={() => context.setFocus(index)}
        className={cx('rounded-none', isFocus && 'ring-2 ring-sky-500 ring-inset')}
      >
        {index}
      </button>
    );
  };
}

export namespace Optimized {
  type Listener<S> = (s: S) => void;

  class Store<State> {
    public state: State;
    private listeners: Set<Listener<State>>;

    constructor(state: State) {
      this.state = state;
      this.listeners = new Set();
    }

    public subscribe = (fn: Listener<State>) => {
      this.listeners.add(fn);
      return () => {
        this.listeners.delete(fn);
      };
    };

    public update = (newState: State) => {
      this.state = newState;
      this.listeners.forEach((l) => l(newState));
    };
  }

  function useSelector<T>(store: Store<T>, selector: any, ...args: any[]) {
    const [value, setValue] = useState(() => selector(store.state, ...args));
    useEffect(() => store.subscribe((state) => setValue(selector(state, ...args))), []);
    return value;
  }

  const Context = createContext(null as any);

  export function Grid() {
    const [store] = useState(() => new Store({ focus: 0 }));

    return (
      <div className="rounded-md border border-gray-500 overflow-hidden grid grid-cols-5 md:grid-cols-10">
        <Context.Provider value={store}>
          {Array.from({ length: 50 }).map((_, i) => (
            <Cell index={i} />
          ))}
        </Context.Provider>
      </div>
    );
  }

  const selectors = {
    isFocus: (state: any, index: number) => state.focus === index,
  };

  const Cell = ({ index }: { index: number }) => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const store = useContext(Context);
    const isFocus = useSelector(store, selectors.isFocus, index);

    useEffect(() => {
      ref.current?.classList.remove('flash');
      setTimeout(() => {
        ref.current?.classList.add('flash');
      });
    });

    return (
      <button
        ref={ref}
        onClick={() => store.update({ ...store.state, focus: index })}
        className={cx('rounded-none', isFocus && 'ring-2 ring-sky-500 ring-inset')}
      >
        {index}
      </button>
    );
  };
}
