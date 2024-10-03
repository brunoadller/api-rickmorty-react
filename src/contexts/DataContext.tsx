import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { getData } from "../data";

type DataContextType = {
    data: any[],
    setData:  Dispatch<SetStateAction<any[]>>
} 

const dataContext = createContext<DataContextType | null>(null)



type Props = {children: ReactNode}

export const DataContextProvider = ({children}: Props) =>  {
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        getData()
        .then(res => res.json())
        .then(body => {
           setData(body.results)
         
           console.log("depois fica vazio o console.")
        }).catch((e) => {
         console.log("Erro\ na requisição: ", e)
        })
      }, [])
    return(
        <dataContext.Provider value={{data, setData}}>
            {children}
        </dataContext.Provider>
    )
}

export const useDataContext = () => useContext(dataContext)