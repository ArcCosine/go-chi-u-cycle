import React, { createContext, useState, useContext } from "react";

type Props = {
    counter: number;
    setCounter:React.Dispatch<React.SetStateAction<number>>;
};

const CountContext = createContext<Props>(null!);

export function useCountContext() {
    return React.useContext(CountContext);
}

export function CountProvider({ children }: any) {
    const [counter, setCounter] = useState(0);

    return (
        <CountContext.Provider
            value={{
                counter,
                setCounter,
            }}
        >
            {children}
        </CountContext.Provider>
    );
}
