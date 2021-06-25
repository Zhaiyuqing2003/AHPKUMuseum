import * as React from "react";

import { useEffect, useState } from "react";

import {
    Card,
    CardMedia,
    CardContent,
    Toolbar,
    Box,
    Typography,
    Button,
    makeStyles
} from "@material-ui/core"

import {
    useTheme,
    useMediaQuery
} from "@material-ui/core"

import BreakPointsType from "../utils/BreakPointsType"
import useDeviceWidthQuery from "../utils/useDeviceWidthQuery"
import SeasonType from "../utils/SeasonType"
import useSeason from "../utils/useSeason"


//@ts-ignore
import springDesktop from "../images/index/SpringDesktop.jpg"
//@ts-ignore
import springLaptop from "../images/index/SpringLaptop.jpg"
//@ts-ignore
import springMobile from "../images/index/SpringMobile.jpg"

//@ts-ignore
import summerDesktop from "../images/index/SummerDesktop.jpg"
//@ts-ignore
import summerLaptop from "../images/index/SummerLaptop.jpg"
//@ts-ignore
import summerMobile from "../images/index/SummerMobile.jpg"

//@ts-ignore
import autumnDesktop from "../images/index/AutumnDesktop.jpg"
//@ts-ignore
import autumnLaptop from "../images/index/AutumnLaptop.jpg"
//@ts-ignore
import autumnMobile from "../images/index/AutumnMobile.jpg"

//@ts-ignore
import winterDesktop from "../images/index/WinterDesktop.jpg"
//@ts-ignore
import winterLaptop from "../images/index/WinterLaptop.jpg"
//@ts-ignore
import winterMobile from "../images/index/WinterMobile.jpg"

const useIndexPageFrontContentStyle = makeStyles((theme) => ({
    cardMedia : {
        height : "110vh"
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

export default function(){
    const theme = useTheme()
    const classes = useIndexPageFrontContentStyle()


    const deviceWidthQuery = useDeviceWidthQuery(theme)
    const season = useSeason();

    const imageDir = useImageDir(deviceWidthQuery, SeasonType.Autumn)

    return (<Card>
        <CardMedia
            image = { imageDir }
            className = { classes.cardMedia }>
        </CardMedia>
    </Card>)
}