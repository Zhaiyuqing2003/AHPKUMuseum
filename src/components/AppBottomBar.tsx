import React from "react";
import {
    Box,
    Typography,
    Grid,
    SvgIcon,

    Divider,
    Link,
    useTheme,
    useMediaQuery
} from "@material-ui/core"
import DWCIcon from "./MuseumIcon";
import { makeStyles } from "@material-ui/styles"
import { useTranslation } from "react-i18next";

const useAppBottomBarStyle = makeStyles((theme) => ({
    dwcIcon : {
        width : "4em",
        height : "4em"
    },
    facultyAddress : {
        userSelect : "all"
    },
    gridListLargerThanLaptop : {
        width : `calc(100% - ${ theme.spacing(14) })`
    }
}))
function PoweredByGrid(){
    const { t } = useTranslation("AppBottomBar");
    const classes = useAppBottomBarStyle()
    return (<Grid item>
        <Typography variant = "h6">
            <Box >
                {t('Powered By')}
            </Box>
        </Typography>
        <Typography>
            <Link
                href = "https://reactjs.org/"
                color = "inherit" underline = "always">
                <Box fontWeight = "bold" component = "span">
                    React
                </Box>
            </Link>
            { " from FaceBook" }
        </Typography>
        <Typography>
            <Link
                href = "https://material-ui.com/"
                color = "inherit" underline = "always">
                <Box fontWeight = "bold" component = "span">
                    Material-UI
                </Box>
            </Link>
            { " from community" }
        </Typography>
        <Typography>
            <Link
                href = "https://www.typescriptlang.org/"
                color = "inherit" underline = "always">
                <Box fontWeight = "bold" component = "span">
                    Typescript
                </Box>
            </Link>
            { " from Microsoft" }
        </Typography>
    </Grid>)
}
function DevelopedByGrid(){
    const { t } = useTranslation("AppBottomBar");
    const classes = useAppBottomBarStyle()
    return (<Grid item>
        <Typography variant = "h6">
            <Box fontWeight = "bold" component = "span">
                {t('Developed By')}
            </Box>
        </Typography>
        <Link
                href = 'https://github.com/DaltonWritingCenter'
                color = "inherit" underline = "always">
                <Box fontWeight = "bold" component = "span">
                {t('TanChuping')}
                </Box>
        </Link>
        <Typography>


        </Typography>
    </Grid>)
}
function InformationForGrid(){
    const { t } = useTranslation("AppBottomBar");
    const classes = useAppBottomBarStyle()
    return (<Grid item>
        <Typography variant = "h6" component = "div">
            <Box fontWeight = "bold" component = "span">
                {t('Other Sites')}
            </Box>
        </Typography>
        <Typography>
            <Link
                href = "http://www.pkuschool.edu.cn/"
                color = "inherit" underline = "always">
            {t('BeiDaFuZhongGuanWang')}
            </Link>
        </Typography>
        <Typography>
            <Link
                href = "http://edu.sina.com.cn/zhongkao/pkuschool/index.shtml "
                color = "inherit" underline = "always">
            {t('LaoBanXiaoShiGuan')}
            </Link>
        </Typography>
        <Typography>
            <Link
                href = "http://www.xsg.pku.edu.cn/"
                color = "inherit" underline = "always">
            {t("BeiJingDaXueXiaoShiGuan")}
            </Link>
        </Typography>
    </Grid>)
}
function AddressGrid(){
    const { t } = useTranslation("AppBottomBar");
    const classes = useAppBottomBarStyle()
    return (<Grid item>
        <Typography variant = "h6" component = "div">
            <Box fontWeight = "bold">
                {t('AHPKU History museum')}
            </Box>
        </Typography>
        <Typography>
            {t('HuangZhuang, Haidian Dist.')}
        </Typography>
        <Typography>
            {t('Beijing, China, 100190')}
        </Typography>
        <Typography >
        {'1960-' + (new Date()).getFullYear()}
        </Typography>
    </Grid>)
}
function ContactFacultyGrid(){
    const { t } = useTranslation("AppBottomBar");
    const classes = useAppBottomBarStyle()
    return (<Grid item>
        <Typography variant = "h6" component = "div">
            <Box fontWeight = "bold" component = "span">
                {t('Further Contact')}
            </Box>
        </Typography>
        <Typography className = { classes.facultyAddress } component = "a">
            Tanchuping@i.pkuschool.edu.cn
        </Typography>
    </Grid>)
}

export default function AppBottomBar(){
    const { t } = useTranslation("AppBottomBar");
    const theme = useTheme()
    const classes = useAppBottomBarStyle()
    const { up, down, between, values } = theme.breakpoints;
    const { laptop } = values;

    const isLargerThanLaptop = useMediaQuery(up(laptop));

    return (<Box
            width = { 1 }
            paddingY  = { theme.spacing(6) }
            paddingX = { theme.spacing(6) }
            bgcolor = {theme.palette.primary.main + "99"}
            color = "inherit">
        <Box paddingBottom = { theme.spacing(4) }>
        <Grid container>
            <Grid item>{ isLargerThanLaptop
                ? (<Box paddingRight = { theme.spacing(6) }>
                    <SvgIcon
                        component = { DWCIcon }
                        className = { classes.dwcIcon } />
                </Box>)
                : (<></>)
            }</Grid>
            <Grid
                className = {
                    isLargerThanLaptop
                        ? classes.gridListLargerThanLaptop
                        : "none"
                }
                item container
                justifyContent="space-between"
                spacing = { 4 }>
                <AddressGrid />
                <InformationForGrid />
                <ContactFacultyGrid />
                <DevelopedByGrid />
                <PoweredByGrid />
            </Grid>
        </Grid>
        </Box>
        <Divider light/>
    </Box>)

}


