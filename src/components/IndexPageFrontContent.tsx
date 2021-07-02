import * as React from "react";

import { useEffect, useState } from "react";

import {
    Card,
    CardMedia,
    CardContent,
    Toolbar,
    Box,
    Grid,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
    Divider
} from "@material-ui/core"

import {
    makeStyles
} from "@material-ui/styles"

import BreakPointsType from "../utils/BreakPointsType"
import useDeviceWidthQuery from "../utils/useDeviceWidthQuery"
import SeasonType from "../utils/SeasonType"
import useSeason from "../utils/useSeason"

import { useTranslation } from "react-i18next"

import FontType from "../utils/FontType"
import LanguageType from "../utils/LanguageType";

//@ts-ignore
import springDesktop from "../images/index/seasons/SpringDesktop.jpg"
//@ts-ignore
import springLaptop from "../images/index/seasons/SpringLaptop.jpg"
//@ts-ignore
import springMobile from "../images/index/seasons/SpringMobile.jpg"
  
//@ts-ignore
import summerDesktop from "../images/index/seasons/SummerDesktop.jpg"
//@ts-ignore
import summerLaptop from "../images/index/seasons/SummerLaptop.jpg"
//@ts-ignore
import summerMobile from "../images/index/seasons/SummerMobile.jpg"

//@ts-ignore
import autumnDesktop from "../images/index/seasons/AutumnDesktop.jpg"
//@ts-ignore
import autumnLaptop from "../images/index/seasons/AutumnLaptop.jpg"
//@ts-ignore
import autumnMobile from "../images/index/seasons/AutumnMobile.jpg"

//@ts-ignore
import winterDesktop from "../images/index/seasons/WinterDesktop.jpg"
//@ts-ignore
import winterLaptop from "../images/index/seasons/WinterLaptop.jpg"
//@ts-ignore
import winterMobile from "../images/index/seasons/WinterMobile.jpg"

const useIndexPageFrontContentStyle = makeStyles((theme) => ({
    cardMedia : {
        height : "100vh"
    },
    card : {
        borderRadius : 0,
        boxShadow : "none"
    },
    cardContent : {
        position : "absolute",
        top : 0,
        height : "100vh",
        width : "100%",
        padding : "0px !important",
        display : "flex",
        flexDirection : "column",
    },
    seasonText : {
        userSelect : "none",
        color : theme.palette.common.white,
        padding : theme.spacing(3, 4.25),
        opacity : 0.7
    }
}))


function useImageDir(deviceMediaQuery : CustomBreakPointsType, seasonQuery: SeasonType){
    switch (deviceMediaQuery){
        case BreakPointsType.mobileS:
        case BreakPointsType.mobileM:
        case BreakPointsType.mobileL:
            switch (seasonQuery){
                case SeasonType.Spring:
                    return springMobile
                case SeasonType.Summer:
                    return summerMobile
                case SeasonType.Autumn:
                    return autumnMobile
                case SeasonType.Winter:
                    return winterMobile
            }
        case BreakPointsType.tablet:
            switch (seasonQuery){
                case SeasonType.Spring:
                    return springLaptop
                case SeasonType.Summer:
                    return summerLaptop
                case SeasonType.Autumn:
                    return autumnLaptop
                case SeasonType.Winter:
                    return winterLaptop
            }
        default:
            switch (seasonQuery){
                case SeasonType.Spring:
                    return springDesktop
                case SeasonType.Summer:
                    return summerDesktop
                case SeasonType.Autumn:
                    return autumnDesktop
                case SeasonType.Winter:
                    return winterDesktop
            }
    }
}

function useSeasonText(seasonQuery: SeasonType){
    switch (seasonQuery){
        case SeasonType.Spring:
            return "spring"
        case SeasonType.Summer:
            return "summer"
        case SeasonType.Autumn:
            return "autumn"
        case SeasonType.Winter:
            return "winter"
        default:
            return "autumn"
    }
}

function useImageSubscriptFlexDirection(seasonQuery: SeasonType){
    switch (seasonQuery){
        case SeasonType.Spring:
        case SeasonType.Winter:
            return "row-reverse"
        case SeasonType.Summer:
        case SeasonType.Autumn:
        default:
            return "row"
    }
}

const useSubScriptFontFamily = (languageType: LanguageType) => {
    switch (languageType){
        case LanguageType.en:
        case LanguageType.en_US:
            return [FontType.Acme, FontType.PatrickHand]
        case LanguageType.zh:
        case LanguageType.zh_CN:
        default:
            return [FontType.MaShanZheng, FontType.LongCang]     
    }
}

const useTextConnectorAndLaterPadding = (languageType: LanguageType) => {
    switch (languageType){
        case LanguageType.en:
        case LanguageType.en_US:
            return [" |", 0.5]
        case LanguageType.zh:
        case LanguageType.zh_CN:
        default:
            return ["·", 0]
    }
}

export default function(){
    const theme = useTheme()
    const classes = useIndexPageFrontContentStyle()
    const { t } = useTranslation("indexPageFrontContent")


    const { appOptions : { languageType }} = theme
    const [season, setSeason] = useState(SeasonType.Summer)


    const deviceWidthQuery = useDeviceWidthQuery(theme)
    //const season = useSeason();

    const imageDir = useImageDir(deviceWidthQuery, season)
    const seasonText = useSeasonText(season)
    const imageSubscriptFlexDirection = useImageSubscriptFlexDirection(season)

    const [subscriptMainTextFontFamily, subscriptSubTextFontFamily] = useSubScriptFontFamily(languageType)
    const [connectorDot, paddingWidth] = useTextConnectorAndLaterPadding(languageType)

    const changeSeason = (season: SeasonType) => {
        setSeason(season)
    }

    // @ts-ignore
    window.changeSeason = changeSeason

    return (<Card className = { classes.card }>
        <CardMedia
            image = { imageDir }
            className = { classes.cardMedia }>
        </CardMedia>
        <CardContent className = { classes.cardContent }>
            <Toolbar></Toolbar>
            <Grid 
                container 
                paddingLeft = { 6 } 
                paddingTop = { 6 }
                flexDirection = "column"
                width = "fit-content"
                sx = {{ userSelect : "none" }}
                color = { theme.palette.common.white }>
                <Typography 
                    fontSize = { theme.spacing(6) }
                    fontFamily = { FontType.MaShanZheng }>
                    { t("headline") }
                </Typography>
                <Typography 
                    fontSize = { theme.spacing(5) }
                    marginTop = { theme.spacing(-1.7) }
                    fontFamily = { FontType.MaShanZheng }>
                    { "铭刻在此" }
                    <Typography 
                        paddingLeft = { theme.spacing(0.6) }
                        fontSize = { theme.spacing(5) }
                        component = "span">
                        { "..." } 
                    </Typography>
                </Typography>
                <Divider 
                    sx = {{ 
                        marginRight : theme.spacing(-3), 
                        borderColor : theme.palette.common.white,
                        paddingTop : theme.spacing(0.2),
                        opacity : 0.7
                    }} />
                <Typography 
                    fontSize = { theme.spacing(3) }
                    paddingLeft = { theme.spacing(0.4) }
                    paddingTop = { theme.spacing(0.2) }
                    fontFamily = { FontType.MaShanZheng }
                    sx = {{ opacity : 0.8  }}>
                    { "校园文化，历史，校友，风景" }
                </Typography>
            </Grid>
            <Grid 
                flexGrow = { 1 } 
                container 
                alignItems = "flex-end"
                flexDirection = { imageSubscriptFlexDirection }
                >
                <Box>
                    <Grid container className = { classes.seasonText }>
                        <Typography 
                            fontFamily = { subscriptMainTextFontFamily } 
                            fontSize = { theme.spacing(3) }
                            lineHeight = { 1.67 }>
                            { t("AHPKU") }{ connectorDot }
                        </Typography>
                        <Typography 
                            fontFamily = { subscriptSubTextFontFamily } 
                            fontWeight = "bold"
                            fontSize = { theme.spacing(3) }
                            padding = {
                                theme.spacing(0, paddingWidth)
                            }>
                            { t(seasonText) }
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
        </CardContent>
    </Card>)
}