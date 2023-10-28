import { useContext,createContext, useState } from "react";

const TestModeContext = createContext()
//default props - childrens props
export const TestModeContextProvider = ({children})=>{


    const [testTime,setTestTime] = useState(15)

    const values = {
        testTime,
        setTestTime
    }

    return(<TestModeContext.Provider value={values}>{children}</TestModeContext.Provider>)
}

//self made hook for dont want to get createContext to every component
export const useTestMode = () => useContext(TestModeContext)
