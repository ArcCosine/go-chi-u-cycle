import { createContext, useState, useContext } from 'react';

const CountContext = createContext();

export function useCountContext() {
  return useContext(CountContext);
}

export function CountProvider({ children:any }) {
  const [counter:Number, setCounter] = useState(0);

  const value = {
    counter:Number,
    setCounter,
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}
