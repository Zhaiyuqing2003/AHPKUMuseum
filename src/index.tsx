import * as React from "react"
import {
    useState,
    useEffect,
    Suspense
} from "react"
import useOnceEffect from "./utils/useOnceEffect"
import ReactDOM from "react-dom"

import {
    CssBaseline,
    ThemeProvider,
    useMediaQuery,
    AppBar,
    Container,
    Toolbar,
    SvgIcon,
    makeStyles,
    Typography
} from "@material-ui/core"

import './utils/I18n'
import { useTranslation } from "react-i18next"


import ThemeType from "./utils/ThemeType"
import LanguageType from "./utils/LanguageType"
import createAppTheme from "./utils/AppTheme"

import changeWebIconTheme from "./utils/changeWebIconTheme"

import MuseumIcon from "./components/MuseumIcon"

import "@fontsource/roboto-slab";
import "@fontsource/noto-serif-sc"


const useAppStyle = makeStyles((theme) => ({
    museumIcon : {
        height : "2.7rem",
        width : "2.7rem",
        [theme.breakpoints.up("sm")] : {
            marginRight : theme.spacing(2)
        },
        [theme.breakpoints.down("xs")] : {
            marginRight : theme.spacing(1.5)
        }
    },
    title : {
        flexGrow : 1,
        letterSpacing : "0.11rem",
        fontWeight : "bold",
        fontSize : "1.3rem",
        userSelect : "none",
    }
}))

function main(): void{
    const container = document.querySelector("#container")
    ReactDOM.render(<Suspense fallback = ""><App /></Suspense>, container)
}

function App(){
    const [themeType, setThemeType] = useState(ThemeType.LIGHT)
    const [languageType, setLanguageType] = useState(LanguageType.zh_CN)
    const isUserThemeTypeDark = useMediaQuery("(prefers-color-scheme: dark)");

    const [appTheme, setAppTheme] = useState(() => {
        return createAppTheme(ThemeType.LIGHT, LanguageType.zh_CN)
    })
    const classes = useAppStyle()

    const { t, i18n } = useTranslation("index");

    useOnceEffect(() => {
        console.log(navigator.language)
    })

    useEffect(() => {
        console.log("THEME MEDIA QUERY CHANGE DETECTED")

        setThemeType(isUserThemeTypeDark ? ThemeType.DARK : ThemeType.LIGHT)
    }, [isUserThemeTypeDark])

    useEffect(() => {
        console.log("THEME CHANGE DETECTED")

        changeWebIconTheme(themeType)
        setAppTheme(createAppTheme(themeType, languageType))
    }, [themeType])

    useEffect(() => {
        document.title = t("websiteTitle")

        i18n.changeLanguage(languageType)
        setAppTheme(createAppTheme(themeType, languageType))
    }, [languageType])

    console.log(themeType)

    return (<ThemeProvider theme = { appTheme }>
        <CssBaseline />
        <Container>
            <AppBar>
                <Toolbar>
                    <SvgIcon size = "large" className = { classes.museumIcon } component = { MuseumIcon } />
                    <Typography variant = "button" component = "div" className = { classes.title }>
                        { t("websiteTitle") }
                    </Typography>
                </Toolbar>
            </AppBar>
        </Container>
    </ThemeProvider>)
}




window.onload = main
