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


//@ts-ignore
import summerDesktop from "url:../images/index/boardDesktop.jpg"
//@ts-ignore
import summerTablet from "url:../images/index/boardLaptop.jpg"
//@ts-ignore
import summerMobile from "url:../images/index/boardMobile.jpg"

import useOnceEffect from "../utils/useOnceEffect";


const useIndexPageFrontContentStyle = makeStyles((theme) => ({
    cardMedia : {
        height : "110vh"
    }
}))


function useImageDir(deviceMediaQuery : CustomBreakPointsType){
    if (deviceMediaQuery === BreakPointsType.mobileS ||
        deviceMediaQuery === BreakPointsType.mobileM ||
        deviceMediaQuery === BreakPointsType.mobileL){
        return summerMobile
    } else if (deviceMediaQuery === BreakPointsType.tablet){
        return summerTablet
    } else {
        return summerDesktop
    }
}

export default function(){
    const theme = useTheme()
    const classes = useIndexPageFrontContentStyle()


    const deviceWidthQuery = useDeviceWidthQuery(theme)
    const imageDir = useImageDir(deviceWidthQuery)



    return (<Card>
        <CardMedia
            image = { imageDir }
            className = { classes.cardMedia }>
        </CardMedia>
    </Card>)
}