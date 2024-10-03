import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

type InputValueType = {
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

const inputContext = createContext<InputValueType | null>(null)

type Props = {children:ReactNode}


export const InputContextProvider = ({children}:Props) => {
    const [value, setValue] = useState<string>("")
    return(
        <inputContext.Provider value={{value, setValue}}>
            {children}
        </inputContext.Provider>
    )
}

export const useInputContext = () => useContext(inputContext)