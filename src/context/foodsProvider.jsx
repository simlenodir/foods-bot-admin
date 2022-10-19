import { useState } from "react";
import { createContext } from "react";

export const Context = createContext()

export const FoodsProvider = ({children}) => {


const [counter, setCounter] = useState(0)

    return(
        <Context.Provider value={{ counter, setCounter}}>{children}</Context.Provider>
    )
}