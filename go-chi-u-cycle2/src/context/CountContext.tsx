import { createContext, useState, useContext } from 'react';

const CountContext = createContext();

export function useCountContext() {
  return useContext(CountContext);
}

export function CountProvider({ children }) {
    const [counter, setCounter] = useState<Number>(0);

  const value = {
    counter,
    setCounter,
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}
