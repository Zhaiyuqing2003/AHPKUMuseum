import * as React from "react";

import { useState } from "react";

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

import { Theme } from "@material-ui/core"

import {
    makeStyles
} from "@material-ui/styles"

import BreakPointsType from "../utils/BreakPointsType"
import useDeviceWidthQuery from "../utils/useDeviceWidthQuery"
import SeasonType from "../utils/SeasonType"
import useSeason from "../utils/useSeason"

import { TFunction, useTranslation } from "react-i18next"

import FontType from "../utils/FontType"
import LanguageType from "../utils/LanguageType";

//@ts-ignore
import springDesktop from "../images/index/seasons/SpringDesktop.webp"
//@ts-ignore
import springLaptop from "../images/index/seasons/SpringLaptop.webp"
//@ts-ignore
import springMobile from "../images/index/seasons/SpringMobile.webp"
  
//@ts-ignore
import summerDesktop from "../images/index/seasons/SummerDesktop.webp"
//@ts-ignore
import summerLaptop from "../images/index/seasons/SummerLaptop.webp"
//@ts-ignore
import summerMobile from "../images/index/seasons/SummerMobile.webp"

//@ts-ignore
import autumnDesktop from "../images/index/seasons/AutumnDesktop.webp"
//@ts-ignore
import autumnLaptop from "../images/index/seasons/AutumnLaptop.webp"
//@ts-ignore
import autumnMobile from "../images/index/seasons/AutumnMobile.webp"

//@ts-ignore
import winterDesktop from "../images/index/seasons/WinterDesktop.webp"
//@ts-ignore
import winterLaptop from "../images/index/seasons/WinterLaptop.webp"
//@ts-ignore
import winterMobile from "../images/index/seasons/WinterMobile.webp"

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
        case SeasonType.Summer:
            return "row-reverse"
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

const useSubscriptMainAndSubTextConnector = (languageType: LanguageType) => {
    switch (languageType){
        case LanguageType.en:
        case LanguageType.en_US:
            return " |"
        case LanguageType.zh:
        case LanguageType.zh_CN:
        default:
            return "·"
    }
}

const useSubscriptSubTextPaddingLeftWidth = (languageType: LanguageType) => {
    switch (languageType){
        case LanguageType.en:
        case LanguageType.en_US:
            return 0.5
        case LanguageType.zh:
        case LanguageType.zh_CN:
        default:    
            return 0
    }
}

const useFrontContentFontFamily = (languageType: LanguageType) => {
    switch (languageType){
        case LanguageType.en:
        case LanguageType.en_US:
            return FontType.Acme
        case LanguageType.zh:
        case LanguageType.zh_CN:
        default:    
            return FontType.MaShanZheng
    }
}

const useFrontContentFontSize = (languageType: LanguageType) => {
    switch (languageType){
        case LanguageType.en:
        case LanguageType.en_US:
            return [5, 4.5, 2.8]
        case LanguageType.zh:
        case LanguageType.zh_CN:
        default:    
            return [6, 5, 3]
    }
}

const useFrontContentMainSubTextMarginTop = (languageType: LanguageType) => {
    switch (languageType){
        case LanguageType.en:
        case LanguageType.en_US:
            return -2
        case LanguageType.zh:
        case LanguageType.zh_CN:
        default:    
            return -1.7
    }
}

const useFrontContentDividerMarginTop = (languageType: LanguageType) => {
    switch (languageType){
        case LanguageType.en:
        case LanguageType.en_US:
            return 0
        case LanguageType.zh:
        case LanguageType.zh_CN:
        default:    
            return -0.2
    }
}

// hello
const ImageSubscript = ({ languageType, seasonType, t } : ImageSubscriptProps) => {
    const theme = useTheme();
    const seasonText = useSeasonText(seasonType);
    const imageSubscriptFlexDirection = useImageSubscriptFlexDirection(seasonType);
    const [subscriptMainTextFontFamily, subscriptSubTextFontFamily] = useSubScriptFontFamily(languageType)
    const connectorDot = useSubscriptMainAndSubTextConnector(languageType);
    const paddingWidth = useSubscriptSubTextPaddingLeftWidth(languageType)

    return (<Grid 
        flexGrow = { 1 } 
        container 
        alignItems = "flex-end"
        flexDirection = { imageSubscriptFlexDirection }
        >
        <Box>
            <Grid container 
                sx = {{ userSelect : "none", opacity : 0.5 }}
                color = { theme.palette.common.white }
                padding = { theme.spacing (3, 4.25) }>
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
                    { t(seasonText) + ' 1960-'+ (new Date()).getFullYear()}
                </Typography>
            </Grid>
        </Box>
    </Grid>)
}
function letsStart(){
    window.scrollTo({
        top: document.body.scrollHeight/8-450,
        left: 0,
        behavior: 'smooth'
      })
}
const IndexPageFrontContentHeadline = ({ languageType, t } : IndexPageFrontContentHeadlineProps) => {
    
    const theme = useTheme()
    const frontContentFontFamily = useFrontContentFontFamily(languageType)
    const [
        frontContentMainTextFontSize,
        frontContentMainSubTextFontSize,
        frontContentSubTextFontSize
    ] = useFrontContentFontSize(languageType)
    const frontContentMainSubTextMarginTop = useFrontContentMainSubTextMarginTop(languageType)
    const frontContentDividerMarginTop = useFrontContentDividerMarginTop(languageType)

    return (<Grid 
        container 
        paddingLeft = { 6 } 
        paddingTop = { 8 }
        flexDirection = "column"
        width = "fit-content"
        sx = {{ userSelect : "none" }}
        color = { theme.palette.common.white }>
        <Typography 
            fontSize = { theme.spacing(frontContentMainTextFontSize) }
            fontFamily = { frontContentFontFamily }>
            { t("headlineMainText") }
        </Typography>
        <Typography 
            fontSize = { theme.spacing(frontContentMainSubTextFontSize) }
            marginTop = { theme.spacing(frontContentMainSubTextMarginTop) }
            fontFamily = { frontContentFontFamily }>
            { t("headlineMainSubText") }
            <Typography 
                marginLeft = { theme.spacing(0.6) }
                fontSize = { theme.spacing(5) }
                component = "span">
                { "..." } 
            </Typography>
        </Typography>
        <Divider 
            sx = {{ 
                marginRight : theme.spacing(-3), 
                marginTop : theme.spacing(frontContentDividerMarginTop),
                borderColor : theme.palette.common.white,
                opacity : 0.7
            }} />
        <Typography 
            fontSize = { theme.spacing(frontContentSubTextFontSize) }
            marginLeft = { theme.spacing(0.4) }
            marginTop = { theme.spacing(0.2) }
            fontFamily = { frontContentFontFamily }
            sx = {{ opacity : 0.8  }}>
            { t("headlineSubText") }
        </Typography>
        <Button
            color = "primary" 
            variant = "contained"
            disableElevation 
            size = "large"
            onClick = {letsStart}
            sx = {{ 
                alignSelf : "flex-start",
                marginLeft : theme.spacing(0.8),
                marginTop : theme.spacing(2)
            }}>
            <Typography 
                fontFamily = { frontContentFontFamily }
                fontSize = { theme.spacing(2.6) }>
                {t('kaishi')}
            </Typography>
        </Button>
    </Grid>)
}



export default function(){
    const theme = useTheme()
    const classes = useIndexPageFrontContentStyle()
    const { t } = useTranslation("indexPageFrontContent")

    const { appOptions : { languageType }} = theme
    const [seasonType, setSeasonType] = useState(useSeason)

    const deviceWidthQuery = useDeviceWidthQuery(theme)
    const imageDir = useImageDir(deviceWidthQuery, seasonType)

    const changeSeason = (season: SeasonType) => {
        setSeasonType(season)
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
            <IndexPageFrontContentHeadline
                languageType = { languageType }
                t = { t }/>
            <ImageSubscript 
                languageType = { languageType }
                seasonType = { seasonType }
                t = { t } />
        </CardContent>
    </Card>)
}

type ImageSubscriptProps = {
    languageType : LanguageType,
    seasonType : SeasonType,
    t : TFunction<string>
}

type IndexPageFrontContentHeadlineProps = {
    languageType : LanguageType
    t : TFunction<string>
}