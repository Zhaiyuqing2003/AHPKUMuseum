import * as React from "react";
import {
    useState,
    useMemo
} from "react";
import clsx from 'clsx';
import { useTheme } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Box from '@material-ui/core/Box';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import * as Color from "@material-ui/core/colors"
import Drawer from '@material-ui/core/Drawer';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MuseumIcon from "./MuseumIcon";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu"
import TranslateIcon from "@material-ui/icons/Translate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import FindInPageIcon from '@material-ui/icons/FindInPage';

import LanguageType from "../utils/LanguageType"
import LanguageList from "../utils/LanguageList"

import FontType from "../utils/FontType"
import ModeType from "../utils/ModeType"
import createAppTheme from "../utils/AppTheme"
import Divider from '@material-ui/core/Divider';

import useDeviceWidthQuery from "../utils/useDeviceWidthQuery";
import useOnMountSetupEffect from "../utils/useOnMountSetupEffect";
import useOnWillUnmountCleanupEffect from "../utils/useOnWillUnmountCleanupEffect";

import HomeIcon from '@material-ui/icons/Home';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PolicyIcon from '@material-ui/icons/Policy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import GavelIcon from '@material-ui/icons/Gavel';

import { useTranslation } from "react-i18next"
import BreakPointsType from "../utils/BreakPointsType";

//@ts-ignore

const useAppBarStyle = makeStyles((theme) => ({
    iconButton : {
        margin : theme.spacing(0, 0)
    },
    title : {
        flexGrow : 1,
        userSelect : "none",
    },
    titleEn : {
        fontFamily : FontType.Acme,
        letterSpacing : theme.spacing(0.12),
        wordSpacing : theme.spacing(0.16),
        fontSize : theme.spacing(3),
        marginTop : theme.spacing(0.22),
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
    },

}))

function useWebsiteTitleFontFamilyClassName(classes, languageType : LanguageType){
    return languageType === (LanguageType.zh_CN || LanguageType.zh)
                ? classes.titleZh
                : classes.titleEn
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

const useAppBarContainerBackGroundColor = (theme: Theme, modeType: ModeType, isScrollToTop: boolean) => {
    switch (modeType){
        case ModeType.DARK:
            return theme.palette.background.paper + (isScrollToTop ? "77" : "")
        case ModeType.LIGHT:
        default: 
            return isScrollToTop ? theme.palette.primary.dark.replace(")", ",0.45)") : theme.palette.primary.dark
    }
}

const ChangeLanguageMenu = ({ languageMenuAnchorElement, open, onClose } : ChangeLanguageMenuPropsType) => {
    const handleClose = (event) => {
        onClose(event.currentTarget.dataset.value)
    }

    const { t } = useTranslation("appTopBar");

    return (<Menu
        anchorEl = { languageMenuAnchorElement }
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

const ChangeColorMenu = ({ colorMenuAnchorElement, open, onClose }: ChangeColorMenuPropsType) => {
    const handleClose = () => {
        onClose(123)
    }


    return (<Menu
        anchorEl = { colorMenuAnchorElement }
        open = { open }
        onClose = { handleClose }>
            123
    </Menu>)
}

const AppIcon = () => {
    const theme = useTheme()
    return (<SvgIcon 
        size = "large" 
        component = { MuseumIcon }
        sx = {{ 
            height : theme.spacing(5.4),
            width : theme.spacing(5.4),
            marginRight : theme.spacing(2),
            marginLeft : theme.spacing(1)
    }}/>)
}

const AppTopBarContainer = ({ children, modeType, languageType }: AppTopBarContainerPropsType) => {
    const theme = useTheme()

    const [isScrollToTop, setIsScrollToTop] = useState(true);

    const containerBackgroundColor = useAppBarContainerBackGroundColor(theme, modeType, isScrollToTop)

    const changeIsScrollToTop = () => {
        setIsScrollToTop(isScrollToTop ? window.scrollY <= 30 : window.screenY <= 1)
    }

    useOnMountSetupEffect(() => {
        changeIsScrollToTop()
        document.addEventListener("scroll", changeIsScrollToTop);
    })

    useOnWillUnmountCleanupEffect(() => {
        document.removeEventListener("scroll", changeIsScrollToTop)
    })

    return (<AppBar
        sx = {{
            backgroundColor : containerBackgroundColor,
            backdropFilter : "blur(10px)",
            WebkitBackdropFilter : "blur(10px)",
            boxShadow : isScrollToTop ? theme.shadows[0] : theme.shadows[4],
            transition : "ease-in-out 0.3s box-shadow,ease-in-out 0.3s background-color,ease-in-out 0.3s opacity"
        }}>
        <Toolbar sx = {{ 
            [theme.breakpoints.up("sm")] : {
                paddingX : theme.spacing(1.5)
            },
            [theme.breakpoints.down("sm")] : {
                paddingX : theme.spacing(1)
            }
        }}>
            { children }
        </Toolbar>
    </AppBar>)
}


export default function ({
    onChangeLanguageType: triggerChangeLanguageTypeEvent,
    onChangeModeType: triggerChangeModeTypeEvent
}: AppTopBarPropsType) {


    const theme = useTheme();
    const classes = useAppBarStyle()

    const { appOptions: { modeType, languageType } } = theme

    const { t } = useTranslation("appTopBar")
    const deviceWidthQuery = useDeviceWidthQuery(theme)
    const [state, setState] = React.useState({
  
        top: false,
      });

    function jumptosearch(){
        window.scrollTo({
            top: document.body.scrollHeight/10-400,
            left: 0,
            behavior: 'smooth'
          })
    }

    function jumptoView(){
        window.scrollTo({
            top: document.body.scrollHeight /4-300,
            left: 0,
            behavior: 'smooth'
          })
    }
    function jumptocomp(){
        window.scrollTo({
            top: document.body.scrollHeight /4+350,
            left: 0,
            behavior: 'smooth'
          })
    }
    function jumptoteacher(){
        window.scrollTo({
            top: document.body.scrollHeight /3+450,
            left: 0,
            behavior: 'smooth'
          })
    }
    function jumptostudent(){
        window.scrollTo({
            top: 5*document.body.scrollHeight /9-300,
            left: 0,
            behavior: 'smooth'
          })
    }
    function jumptoheadmaster(){
        window.scrollTo({
            top: 5*document.body.scrollHeight /9 + 200,
            left: 0,
            behavior: 'smooth'
          })
    }
    function jumptodeveloper(){
        window.scrollTo({
            top: 9*document.body.scrollHeight/10 -360,
            left: 0,
            behavior: 'smooth'
          })
    }


    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
      const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 'auto' }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
         
            <ListItem button onClick = {jumptosearch} >
              <ListItemIcon>
                <FindInPageIcon/>
              </ListItemIcon>
              <ListItemText primary={t('Search')} />
            </ListItem>
         
        </List>

        <List>
         
         <ListItem button onClick = {jumptoView} >
           <ListItemIcon>
             <HistoryRoundedIcon/>
           </ListItemIcon>
           <ListItemText primary={t('FuZhongGuangYin')} />
         </ListItem>
      
     </List>

     <List>
         
         <ListItem button onClick = {jumptocomp}>
           <ListItemIcon>
             <PeopleAltIcon/>
           </ListItemIcon>
           <ListItemText primary={t('SiDaSaiShi/ZhiMingXiaoYou')} />
         </ListItem>
      
     </List>

     <List>
         
         <ListItem button onClick = {jumptoteacher}>
           <ListItemIcon>
             <SupervisedUserCircleIcon/>
           </ListItemIcon>
           <ListItemText primary={t('JiaoShiFengCai')} />
         </ListItem>
      
     </List>
     <List>
         
         <ListItem button onClick = {jumptostudent} >
           <ListItemIcon>
             <EmojiPeopleRoundedIcon/>
           </ListItemIcon>
           <ListItemText primary={t('XueShengHuoDong')} />
         </ListItem>
      
     </List>
     <List>
         
         <ListItem button onClick = {jumptoheadmaster} >
           <ListItemIcon>
             <DateRangeIcon/>
           </ListItemIcon>
           <ListItemText primary={t('XiaoZhangShiJianXian')} />
         </ListItem>
      
     </List>
        <Divider />
        <List>
         
         <ListItem button onClick = {jumptodeveloper} >
           <ListItemIcon>
             <GavelIcon/>
           </ListItemIcon>
           <ListItemText primary={t('KaiFaZhe')} />
         </ListItem>
      
     </List>
     
      </Box>
      );
    const [languageMenuAnchorElement, setLanguageMenuAnchorElement] = useState(null)
    const [colorMenuAnchorElement, setColorMenuAnchorElement] = useState(null)

    const websiteTitleFontFamilyClassName = useWebsiteTitleFontFamilyClassName(classes, languageType)
    const isChangeLanguageButtonHidden = useIsChangeLanguageButtonHidden(deviceWidthQuery)
    const titleTypeString = useTitleTypeString(deviceWidthQuery, languageType)

    const openChangeLanguageMenu = (event) => {
        setLanguageMenuAnchorElement(event.currentTarget)
    }

    const closeChangeLanguageMenu = (languageType: LanguageType) => {
        if (languageType !== undefined) {
            triggerChangeLanguageTypeEvent(languageType)
        }
        setLanguageMenuAnchorElement(null)
    }

    const openChangeColorMenu = (event) => {
        setColorMenuAnchorElement(event.currentTarget)
    }

    const closeChangeColorMenu = () => {
        console.warn("GOOD DOG SUCK DICK")
        setColorMenuAnchorElement(null)
    }

    const toggleModeType = () => {
        const toggledModeType =
            (modeType === ModeType.LIGHT)
                ? ModeType.DARK
                : ModeType.LIGHT;

        triggerChangeModeTypeEvent(toggledModeType)
    }


    return (<AppTopBarContainer modeType = { modeType } languageType = { languageType }>
        <AppIcon />
        <Typography
            component = "div"
            variant = "h5"
            className = { `${classes.title} ${websiteTitleFontFamilyClassName}` }>{
                t(titleTypeString)
            }</Typography>
        <Button
            color = "inherit"
            variant = "text"
            size = "medium"
            startIcon = { <TranslateIcon  className = { classes.translateButton } /> }
            endIcon = { <ExpandMoreIcon className = { classes.expandMoreButton } /> }
            onClick = { openChangeLanguageMenu }
            className = {classes.languageMenuButton} >
                {/* {
                isChangeLanguageButtonHidden ? "" : t(languageType)
            } */}
                 {
                isChangeLanguageButtonHidden ? "" : t(' 中文/en')
            }
        </Button>
        <IconButton
            size = "large"
            color = "inherit"
            onClick = { toggleModeType }>
            <Brightness4Icon />
        </IconButton>
        {/* <IconButton
            size = "large"
            color = "inherit"
            onClick = { openChangeColorMenu }>
            <InvertColorsIcon />
        </IconButton> */}
     
            <Box sx = {{paddingRight : 1}}>
            {([''] as const ).map((anchor) => (
            <React.Fragment key={anchor} >
              <IconButton edge="end" color = "inherit" size = "large"  onClick={toggleDrawer(anchor, true) }>{anchor} <MenuIcon/></IconButton>
                <SwipeableDrawer  anchor={'top'} open={state[anchor]}   onOpen={toggleDrawer(anchor, true)} onClose={toggleDrawer(anchor, false)} style = {{ color : 'primary', }}>
                  {list(anchor)}
                </SwipeableDrawer>
                
            </React.Fragment>
          ))}</Box>
        
        <ChangeLanguageMenu
            languageMenuAnchorElement = { languageMenuAnchorElement }
            open = { Boolean(languageMenuAnchorElement) }
            onClose = { closeChangeLanguageMenu } />
        {/* <ChangeColorMenu 
            colorMenuAnchorElement = { colorMenuAnchorElement }
            open = { Boolean(colorMenuAnchorElement) }
            onClose = { closeChangeColorMenu }/> */}
    </AppTopBarContainer>)
}

type AppTopBarContainerPropsType = {
    children : React.ReactNode,
    modeType : ModeType,
    languageType : LanguageType
}

type AppTopBarPropsType = {
    onChangeLanguageType : (languageType: LanguageType) => void,
    onChangeModeType : (modeType: ModeType) => void
}

type ChangeLanguageMenuPropsType = {
    languageMenuAnchorElement : HTMLElement,
    onClose : (languageType: LanguageType) => void,
    open : boolean,
}

type ChangeColorMenuPropsType = {
    colorMenuAnchorElement : HTMLElement,
    onClose : (dog: any) => void,
    open : boolean,
}