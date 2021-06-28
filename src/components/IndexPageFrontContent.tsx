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
    useMediaQuery
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
        color : "rgba(255, 255, 255, 0.7)",
        padding : theme.spacing(2)
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

export default function(){
    const theme = useTheme()
    const classes = useIndexPageFrontContentStyle()
    const { t } = useTranslation("indexPageFrontContent")


    const [season, setSeason] = useState(SeasonType.Summer)


    const deviceWidthQuery = useDeviceWidthQuery(theme)
    //const season = useSeason();

    const imageDir = useImageDir(deviceWidthQuery, season)
    const seasonText = useSeasonText(season)

    const changeSeason = (season: SeasonType) => {
        setSeason(season)
    }

    // @ts-ignore
    window.changeSeason = changeSeason

    return (<Card>
        <CardMedia
            image = { imageDir }
            className = { classes.cardMedia }>
        </CardMedia>
        <CardContent className = { classes.cardContent }>
            <Toolbar></Toolbar>
            <Grid>
                <Typography fontFamily = { FontType.MaShanZheng }>
                    时代的记忆
                </Typography>
            </Grid>
            <Grid flexGrow = { 1 } container alignItems = "flex-end">
                <Box>
                    <Grid container className = { classes.seasonText }>
                        <Typography 
                            fontFamily = { FontType.MaShanZheng } 
                            fontSize = { theme.spacing(3) }
                            lineHeight = { 1.67 }>
                            { t("AHPKU") }·
                        </Typography>
                        <Typography 
                            fontFamily = { FontType.LongCang } 
                            fontWeight = "bold"
                            fontSize = { theme.spacing(3) }>
                            { t(seasonText) }
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
            <Toolbar></Toolbar>
        </CardContent>
    </Card>)
}