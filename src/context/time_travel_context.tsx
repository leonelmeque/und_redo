import { createContext, ReactNode, useMemo, useState } from "react";

export const TimeTravelContext = createContext<{
  history: any;
  updateHistory: (...args: any[]) => void;
  reset: () => void;
}>({
  history: [],
  updateHistory() {},
  reset() {}
});

export const TimeTravelProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState([]);

  const updateHistory = (val: any) => {
    console.log(val, "checking");
    setState((prev) => [...prev, val]);
  };

  const reset = () => setState([]);

  const value = useMemo(
    () => ({
      history: state,
      updateHistory,
      reset
    }),
    [state]
  );

  return (
    <TimeTravelContext.Provider value={value}>
      {children}
    </TimeTravelContext.Provider>
  );
};
