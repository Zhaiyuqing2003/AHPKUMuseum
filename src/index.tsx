import * as React from "react"
import {
    useState,
    useEffect,
    useMemo,
    Suspense
} from "react"
import useOnceEffect from "./utils/useOnceEffect"
import ReactDOM from "react-dom"

import {
    CssBaseline,
    ThemeProvider,
    useMediaQuery,
    Container,
    makeStyles,
} from "@material-ui/core"

import AppTopBar from "./components/AppTopBar"

import './utils/I18n'
import { useTranslation } from "react-i18next"

import ThemeType from "./utils/ThemeType"
import LanguageType from "./utils/LanguageType"

import createAppTheme from "./utils/AppTheme"
import changeWebIconTheme from "./utils/changeWebIconTheme"

import "@fontsource/roboto-slab";
import "@fontsource/noto-serif-sc"


const useAppStyle = makeStyles((theme) => ({
    
}))

function main(): void{
    const container = document.querySelector("#container")
    ReactDOM.render(<Suspense fallback = ""><App /></Suspense>, container)
}

function App(){
    const [themeType, setThemeType] = useState(ThemeType.LIGHT)
    const [languageType, setLanguageType] = useState(LanguageType.zh_CN)
    const isUserThemeTypeDark = useMediaQuery("(prefers-color-scheme: dark)");

    const classes = useAppStyle()

    const { t, i18n } = useTranslation("index");

    useEffect(() => {
        console.log("THEME MEDIA QUERY CHANGE DETECTED")

        setThemeType(isUserThemeTypeDark ? ThemeType.DARK : ThemeType.LIGHT)
    }, [isUserThemeTypeDark])

    useEffect(() => {
        console.log("THEME CHANGE DETECTED")

        changeWebIconTheme(themeType)
    }, [themeType])

    useEffect(() => {
        i18n.changeLanguage(languageType, () => {
            document.title = t("websiteTitle")
        })
    }, [languageType])

    console.log(themeType)

    function changeLanguage(languageType : LanguageType){
        setLanguageType(languageType)
    }

    return (<ThemeProvider theme = {
            useMemo(() => createAppTheme(themeType, languageType), [themeType, languageType])
        }>
        <CssBaseline />
        <Container>
            <AppTopBar
                languageType = { languageType }
                onChangeLanguage = { changeLanguage }
            />
        </Container>
    </ThemeProvider>)
}




window.onload = main
