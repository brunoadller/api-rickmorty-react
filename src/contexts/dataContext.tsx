import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { getData } from "../data";

type DataCharacterType  = {
    gender: string,
    id: number,
    image: string,
    name: string
    species: string,
    status: string
  }
type DataContextType = {
    data: DataCharacterType[],
    setData:  Dispatch<SetStateAction<any[]>>
} 

const dataContext = createContext<DataContextType | null>(null)



type Props = {children: ReactNode}

export const DataContextProvider = ({children}: Props) =>  {
    const [data, setData] = useState<DataCharacterType[]>([])
    useEffect(() => {
        getData()
        .then(res => res.json())
        .then(body => {
           setData(body.results)
         
           
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