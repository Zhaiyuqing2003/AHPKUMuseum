import * as React from "react";
import {
    useState,
    useMemo
} from "react";

import { useTheme } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";


import MuseumIcon from "./MuseumIcon";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu"
import TranslateIcon from "@material-ui/icons/Translate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import LanguageType from "../utils/LanguageType"
import LanguageList from "../utils/LanguageList"

import FontType from "../utils/FontType"
import ModeType from "../utils/ModeType"
import createAppTheme from "../utils/AppTheme"
import useOnceEffect from "../utils/useOnceEffect";
import useDeviceWidthQuery from "../utils/useDeviceWidthQuery";

import { useTranslation } from "react-i18next"
import BreakPointsType from "../utils/BreakPointsType";

const useAppBarStyle = makeStyles((theme) => ({
    museumIcon : {
        height : "2.7rem",
        width : "2.7rem",
        [theme.breakpoints.up("sm")] : {
            marginRight : theme.spacing(2)
        },
        [theme.breakpoints.down("sm")] : {
            marginRight : theme.spacing(1.5),
            marginLeft : theme.spacing(-0.5)
        }
    },
    iconButton : {
        margin : theme.spacing(0, 0),
        padding : theme.spacing()
    },
    title : {
        flexGrow : 1,
        userSelect : "none",
    },
    titleEn : {
        fontFamily : FontType.Benne,
        letterSpacing : theme.spacing(0.12),
        wordSpacing : theme.spacing(0.16),
        fontSize : theme.spacing(3),
        marginTop : theme.spacing(0.8),
        fontWeight : 700,
    },
    titleZh : {
        //fontFamily : FontType.ZhiMingXing,
        //fontSize : theme.spacing(3.8),
        //fontWeight : 500,
        fontFamily : FontType.MaShanZheng,
        letterSpacing : theme.spacing(0.1),
        paddingTop : theme.spacing(0),
        marginTop : theme.spacing(-0.2),
        fontSize : theme.spacing(3)
    },
    toolBar : {
        paddingRight : theme.spacing(1),
        paddingLeft : theme.spacing(2)
    },
    appBar : {
        WebkitBackdropFilter : "blur(10px)",
        backdropFilter : "blur(10px)",
        transition : "ease-in-out 0.3s box-shadow,ease-in-out 0.3s background-color"
    },
    translateButton : {
        height : theme.spacing(3.25),
        width : theme.spacing(3.25),
        marginLeft : theme.spacing(0.5),
        [theme.breakpoints.down(theme.breakpoints.values.laptop)] : {
            marginRight : theme.spacing(-1),
            marginLeft : theme.spacing(0.75)
        }
    },
    expandMoreButton : {
        marginLeft : theme.spacing(-0.65),
        marginRight : theme.spacing(0.5)
    },
    languageMenuButton : {
        fontWeight : 700
    }
}))

function useWebsiteTitleFontFamilyClassName(classes, languageType : LanguageType){
    return languageType === (LanguageType.zh_CN || LanguageType.zh)
                ? classes.titleZh
                : classes.titleEn
}

function useAppTopBarColor(theme : Theme , modeType: ModeType, isScrollToTop: boolean){
    if (modeType === ModeType.LIGHT){
        if (isScrollToTop){
            return theme.palette.primary.dark.replace(")", ",0.45)")
        } else {
            return theme.palette.primary.dark
        }
    } else {
        if (isScrollToTop){
            return theme.palette.background.paper + "77"
        } else {
            return theme.palette.background.paper
        }
    }
}

function useIsChangeLanguageButtonHidden(deviceWidthQuery: CustomBreakPointsType){
    console.log(BreakPointsType[deviceWidthQuery])
    switch (deviceWidthQuery){
        case BreakPointsType.mobileL:
        case BreakPointsType.mobileM:
        case BreakPointsType.mobileS:
        case BreakPointsType.tablet:
            return true;
        default:
            return false;
    }
}

function useTitleTypeString(deviceWidthQuery: CustomBreakPointsType, languageType: LanguageType){
    switch (languageType){
        case LanguageType.en:
        case LanguageType.en_US:
            switch (deviceWidthQuery){
                case BreakPointsType.mobileS:
                case BreakPointsType.mobileM:
                case BreakPointsType.mobileL:
                    return "websiteTitleShort"
                case BreakPointsType.tablet:
                    return "websiteTitleMiddle"
                case BreakPointsType.laptop:
                case BreakPointsType.desktop:
                    return "websiteTitleLong"
                case BreakPointsType.fourK:
                    return "websiteTitleFourK"
                default:
                    return "websiteTitleMiddle";
            }
        case LanguageType.zh:
        case LanguageType.zh_CN:
            switch (deviceWidthQuery){
                case BreakPointsType.mobileS:
                case BreakPointsType.mobileM:
                    return "websiteTitleShort"
                case BreakPointsType.mobileL:
                    return "websiteTitleMiddle"
                case BreakPointsType.tablet:
                case BreakPointsType.laptop:
                case BreakPointsType.desktop:
                    return "websiteTitleLong"
                case BreakPointsType.fourK:
                    return "websiteTitleFourK"
                default:
                    return "websiteTitleMiddle";
            }
        default:
            return "websiteTitleMiddle"
    }
}


function ChangeLanguageMenu({ anchorEl, open, onClose } : ChangeLanguageMenuPropsType){
    function handleClose(event){
        onClose(event.currentTarget.dataset.value)
    }

    const { t } = useTranslation("appTopBar");

    return (<Menu
        anchorEl = { anchorEl }
        open = { open }
        onClose = { handleClose }
      >{
        LanguageList.map((language) => {
            console.log(language)
            return (<MenuItem key = { language } onClick = { handleClose } data-value = { language }>
                { t(language) }
            </MenuItem>)
        })
      }
    </Menu>)
}

export default function({
        onChangeLanguageType : triggerChangeLanguageTypeEvent,
        onChangeModeType : triggerChangeModeTypeEvent
    } : AppTopBarPropsType){


    const theme = useTheme();
    const classes = useAppBarStyle()

    const { appOptions : { modeType, languageType }} = theme

    const { t } = useTranslation("appTopBar")

    const [isScrollToTop, setIsScrollToTop] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null)

    const websiteTitleFontFamilyClassName = useWebsiteTitleFontFamilyClassName(classes, languageType)
    const appTopBarColor = useAppTopBarColor(theme, modeType, isScrollToTop);
    const deviceWidthQuery = useDeviceWidthQuery(theme)

    const isChangeLanguageButtonHidden = useIsChangeLanguageButtonHidden(deviceWidthQuery)
    const titleTypeString = useTitleTypeString(deviceWidthQuery, languageType)
    
    function openChangeLanguageMenu(event){
        setAnchorEl(event.currentTarget)
    }
    function closeChangeLanguageMenu(languageType: LanguageType){
        if (languageType !== undefined){
            triggerChangeLanguageTypeEvent(languageType)
        }

        setAnchorEl(null)
    }
    function toggleModeType(){
        const toggledModeType =
            (modeType === ModeType.LIGHT)
                ? ModeType.DARK
                : ModeType.LIGHT;

        triggerChangeModeTypeEvent(toggledModeType)
    }

    useOnceEffect(() => {
        const changeAppBarTransparency = () => {
            if (window.pageYOffset <= 30){
                setIsScrollToTop(true);
            } else {
                setIsScrollToTop(false);
            }
        }
        changeAppBarTransparency()
        document.addEventListener("scroll", changeAppBarTransparency);
    })


    return (<AppBar
        style = {{
            backgroundColor : appTopBarColor,
            boxShadow : isScrollToTop ? theme.shadows[0] : theme.shadows[4],
        }}
        className = { classes.appBar }>
        <Toolbar className = { classes.toolBar }>
            <SvgIcon size = "large" className = { classes.museumIcon } component = { MuseumIcon } />
            <Typography
                component = "div"
                variant = "h5"
                className = { `${classes.title} ${ websiteTitleFontFamilyClassName }` }>{ 
                    t(titleTypeString)
            }</Typography>
            <Button
                color = "inherit"
                variant = "text"
                size = "medium"
                startIcon = { <TranslateIcon className = { classes.translateButton } /> }
                endIcon = { <ExpandMoreIcon className = { classes.expandMoreButton }/> }
                onClick = { openChangeLanguageMenu }
                className = { classes.languageMenuButton } >{
                isChangeLanguageButtonHidden ? "" : t(languageType) 
            }
            </Button>
            <IconButton
                size = "large"
                color = "inherit"
                onClick = { toggleModeType }>
                <Brightness4Icon/>
            </IconButton>
            {/* <IconButton color = "inherit" className = { classes.iconButton }>
                <InvertColorsIcon />
            </IconButton> */}
            <IconButton 
                size = "large"
                color = "inherit">
                <MenuIcon />
            </IconButton>
            <ChangeLanguageMenu
                anchorEl = { anchorEl }
                open = { Boolean(anchorEl) }
                onClose = { closeChangeLanguageMenu }/>
        </Toolbar>
    </AppBar>)
}

type AppTopBarPropsType = {
    onChangeLanguageType : (languageType: LanguageType) => void,
    onChangeModeType : (modeType: ModeType) => void
}

type ChangeLanguageMenuPropsType = {
    anchorEl : HTMLElement,
    onClose : (languageType: LanguageType) => void,
    open : boolean,
}