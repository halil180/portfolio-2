import { useTranslation } from "react-i18next";
import{createContext, useEffect, useState} from "react"


export const LanguageContext = createContext()




export const LanguageContextProvider = ({children}) => {
    const { i18n} = useTranslation()
    const [language, setLanguage] = useState(localStorage.getItem("lan") ?? "en")

    const changeLang = (lan) =>{
        setLanguage(lan)
        localStorage.setItem("lan",lan)
    }
    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language])
    

    return <LanguageContext.Provider value={{changeLang}}>{children}</LanguageContext.Provider>
}