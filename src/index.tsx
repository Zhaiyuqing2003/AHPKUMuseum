import * as React from "react"
import {
    useState,
    useEffect,
    useMemo,
    Suspense
} from "react"
import ReactDOM from "react-dom"

import {
    CssBaseline,
    useMediaQuery,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/styles"
import { ThemeProvider, Theme } from "@material-ui/core/styles"

import StyledEngineProvider from "@material-ui/core/StyledEngineProvider"
 
import './utils/I18n'
import { useTranslation } from "react-i18next"

import ModeType from "./utils/ModeType"
import LanguageType from "./utils/LanguageType"

import createAppTheme from "./utils/AppTheme"
import changeWebIconTheme from "./utils/WebIconTheme"
//
import "./utils/FontDependencies";

import AppTopBar from "./components/AppTopBar"
import IndexPageFrontContent from "./components/IndexPageFrontContent"
import AppContainer from "./components/AppContainer"
import IndexPageFlipCardsAlumni from './components/IndexFlipCardAlumni'
import IndexPageFlipCardsCulture from './components/IndexFlipCardCulture'
// import IndexPageCulture from './components/IndexPageSchoolCultureInt'
import IndexPageTimeline from './components/IndexPageTimeline'
import AppMusicBar from "./components/AppMusicBar"

declare module '@material-ui/styles'{
    interface DefaultTheme extends Theme {}
}

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
            <AppContainer>
                <IndexPageFrontContent />
                {/* <IndexPageCulture /> */}
                <IndexPageFlipCardsCulture></IndexPageFlipCardsCulture>
                <IndexPageFlipCardsAlumni></IndexPageFlipCardsAlumni>
                <IndexPageTimeline />
            </AppContainer>
            <AppMusicBar/>
        </ThemeProvider>
    </StyledEngineProvider>)
}




window.onload = main
