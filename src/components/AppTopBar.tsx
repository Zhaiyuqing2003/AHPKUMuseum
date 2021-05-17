import * as React from "react";
import {
    useState,
    useMemo
} from "react";

import { makeStyles } from "@material-ui/core"

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
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import MenuIcon from "@material-ui/icons/Menu"
import TranslateIcon from "@material-ui/icons/Translate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import LanguageType from "../utils/LanguageType"
import LanguageList from "../utils/LanguageList"

import { useTranslation } from "react-i18next"

const useAppBarStyle = makeStyles((theme) => ({
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
    icons : {
        margin : theme.spacing(0, 0),
    },
    title : {
        flexGrow : 1,
        letterSpacing : "0.11rem",
        fontWeight : "bold",
        fontSize : "1.3rem",
        userSelect : "none",
    },
    toolBar : {
        paddingRight : theme.spacing(1),
        paddingLeft : theme.spacing(2)
    },
}))
console.log(LanguageList)

function ChangeLanguageMenu({ anchorEl, open, onClose } : ChangeLanguageMenuPropsType){
    function handleClose(event){
        console.log(event.currentTarget)
        console.log("value " + event.currentTarget.dataset.value)
        onClose(event.currentTarget.dataset.value)
    }

    const { t, i18n } = useTranslation("appTopBar");

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


export default function({ languageType, onChangeLanguage } : AppTopBarPropsType){
    const classes = useAppBarStyle()
    const { t, i18n } = useTranslation("appTopBar")
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    function openChangeLanguageMenu(event){
        setAnchorEl(event.currentTarget)
    }

    function closeChangeLanguageMenu(languageType: LanguageType){
        if (languageType !== undefined){
            console.log("THE LANGUAGE TYPE IS " + languageType)
            onChangeLanguage(languageType)
        }

        setAnchorEl(null)
    }

    return (<AppBar>
        <Toolbar className = { classes.toolBar }>
            <SvgIcon size = "large" className = { classes.museumIcon } component = { MuseumIcon } />
            <Typography variant = "button" component = "div" className = { classes.title }>
                { t("websiteTitle") }
            </Typography>
            <Button
                startIcon = { <TranslateIcon/> }
                endIcon = { <ExpandMoreIcon /> }
                variant = "text"
                onClick = { openChangeLanguageMenu }
                color = "inherit">
                { t(languageType) }
            </Button>
            <IconButton edge="end" color = "inherit" className = { classes.icons }>
                <Brightness4Icon />
            </IconButton>
            <IconButton edge="end" color = "inherit" className = { classes.icons }>
                <InvertColorsIcon />
            </IconButton>
            <IconButton edge="end" color = "inherit" className = { classes.icons }>
                <MenuIcon />
            </IconButton>
            <ChangeLanguageMenu
                anchorEl = { anchorEl }
                open = { open }
                onClose = { closeChangeLanguageMenu }/>
        </Toolbar>
    </AppBar>)
}

type AppTopBarPropsType = {
    languageType : LanguageType,
    onChangeLanguage : (languageType: LanguageType) => void
}

type ChangeLanguageMenuPropsType = {
    anchorEl : HTMLElement,
    onClose : (languageType: LanguageType) => void,
    open : boolean,
}