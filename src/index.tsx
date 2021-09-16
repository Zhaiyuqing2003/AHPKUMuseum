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
    gridClasses,
    useMediaQuery,
} from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
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
import Imagelist from "./components/SchoolViewImageList"
import AppTopBar from "./components/AppTopBar"
import IndexPageFrontContent from "./components/IndexPageFrontContent"
import AppContainer from "./components/AppContainer"
import IndexPageFlipCardsAlumni from './components/IndexFlipCardAlumni'
import IndexPageFlipCardsCulture from './components/IndexFlipCardCulture'
import UseSearchBar from './components/SearchBar'
// import IndexPageCulture from './components/IndexPageSchoolCultureInt'
import IndexPageTimeline from './components/IndexPageTimeline'
import SchoolView from './components/IndexSchoolView'
import AppMusicBar from "./components/AppMusicBar"
import {ControlledAccordions} from "./components/AccordionShadow"
import AppBottom from './components/AppBottomBar'
import Developer from "./components/Developer"
import Teachers from "./components/TeachersBlock"
import Imagelisttwo from './components/SchoolViewImageListtwo'
import {Accordiontwo} from './components/AccordionStudent'
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
                <UseSearchBar></UseSearchBar>

                <Divider></Divider>
                <SchoolView></SchoolView>
                <Divider></Divider>
                <Grid
                  paddingTop = '80px'
                  paddingBottom = '50px'
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="flex-start">
                    <Grid item><Imagelist></Imagelist></Grid>
                    <Grid item><ControlledAccordions></ControlledAccordions></Grid>
                </Grid>
     
                <Divider></Divider>
                <Grid
                  paddingTop = '80px'
                  paddingBottom = '50px'
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="flex-start">
                    <Grid item><IndexPageFlipCardsCulture></IndexPageFlipCardsCulture></Grid>
                    <Grid item><IndexPageFlipCardsAlumni></IndexPageFlipCardsAlumni></Grid>
                </Grid>

                <Divider></Divider>
                <Teachers></Teachers>
                <Divider></Divider>
                <Grid
                  paddingTop = '80px'
                  paddingBottom = '50px'
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="flex-start">
                    <Grid item><Imagelisttwo></Imagelisttwo></Grid>
                    <Grid item><Accordiontwo></Accordiontwo></Grid>
                </Grid>
                <Divider></Divider>

                <IndexPageTimeline />

                <Divider></Divider>

                <Developer></Developer>

                <AppBottom></AppBottom>
                
            </AppContainer>
            
            <AppMusicBar/>
            
        </ThemeProvider>
    </StyledEngineProvider>)
}




window.onload = main

// ?