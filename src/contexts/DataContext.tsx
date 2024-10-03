import { createContext, ReactNode, useState } from "react";

type DataContextType = {
    data: [],
    setData: (n: []) => void
} 

const dataContext = createContext(null)



type Props = {children: ReactNode}

export const DataContextProvider = ({children}: Props) =>  {
    const [data, setData] = useState([])
    return(
        <dataContext.Provider value={{data, setData}}>
            {children}
        </dataContext.Provider>
    )
}