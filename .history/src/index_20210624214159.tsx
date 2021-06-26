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
    useMediaQuery,
    Container
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"

import StyledEngineProvider from "@material-ui/core/StyledEngineProvider"

import './utils/I18n'
import { useTranslation } from "react-i18next"

import ModeType from "./utils/ModeType"
import LanguageType from "./utils/LanguageType"

import createAppTheme from "./utils/AppTheme"
import changeWebIconTheme from "./utils/WebIconTheme"

import "./utils/FontDependencies";

import AppTopBar from "./components/AppTopBar"
import IndexPageFrontContent from "./components/IndexPageFrontContent"
import AppContainer from "./components/AppContainer"
import CustomizedTimeline from './components/IndexTimeline'
const useAppStyle = makeStyles((theme) => ({

}))

function main(): void{
    const container = document.querySelector("#container")
    ReactDOM.render(<Suspense fallback = " "><App /></Suspense>, container)
}

function App(){
    const [modeType, setModeType] = useState(ModeType.LIGHT)
    const [languageType, setLanguageType] = useState(LanguageType.zh_CN)
    const isUserModeTypeDark = useMediaQuery("(prefers-color-scheme: dark)");

    const classes = useAppStyle()

    const { t, i18n } = useTranslation("index");

    useEffect(() => {
        console.log("THEME MEDIA QUERY CHANGE DETECTED")

        setModeType(isUserModeTypeDark ? ModeType.DARK : ModeType.LIGHT)
    }, [isUserModeTypeDark])

    useEffect(() => {
        console.log("THEME CHANGE DETECTED")

        changeWebIconTheme(modeType)
    }, [modeType])

    useEffect(() => {
        i18n.changeLanguage(languageType, () => {
            document.title = t("websiteTitle")
        })
    }, [languageType])

    console.log("modeType: " + modeType)

    function changeLanguageType(languageType : LanguageType){
        setLanguageType(languageType)
    }

    function changeModeType(modeType : ModeType){
        setModeType(modeType)
    }

    return (<StyledEngineProvider injectFirst = { true }>
        <ThemeProvider theme = {
            useMemo(() => createAppTheme(modeType, languageType), [modeType, languageType])
        }>
                <CssBaseline />
                <AppTopBar
                    onChangeLanguageType = { changeLanguageType }
                    onChangeModeType = { changeModeType }
                />
                <AppContainer maxWidth = { false } disableGutters>
                    <IndexPageFrontContent />

                </AppContainer>
        </ThemeProvider>
    </StyledEngineProvider>)
}




window.onload = main
