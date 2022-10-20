import {createContext, useState} from "react"

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
const [hello, setHello] = useState("hello");


    return(
        <GlobalContext.Provider value={{hello: hello,
        setHello: setHello}}>
{children}
        </GlobalContext.Provider>
    )
}