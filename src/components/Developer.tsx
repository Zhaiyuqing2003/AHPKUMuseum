import * as React from "react";

import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Chip,
    Grid,
    Typography,
    useTheme,
    CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from "react-i18next";
import Divider from '@material-ui/core/Divider';

//@ts-ignore
import PictureTom from "../images/subpage/developer/SuperTom.webp"
//@ts-ignore
import PictureKevin from "../images/subpage/developer/SuperKevin.webp"

const Members = [
    {
        name : "TanChuPing",
        position : ["XiangMuCeHua","XiangMuFuZeRen","QianDuanSheJi", "QianDuanJiaGou", "ZuJianGongNeng","ZiLiao","HouQiWeiHu"],
        email : "tanchuping@i.pkuschool.edu.cn",
        githubpage : "https://github.com/DaltonWritingCenter"
    },
    {
        name : "ZhaiYuQing",
        position : ["JiShuZongJian","XiangMuFuZeRen","HouDuanYunWei", "QianDuanJiaGou", "QianDuanSheJi","ZiLiao"],
        email : "zhaiyuqing@i.pkuschool.edu.cn",
        githubpage : "https://github.com/Zhaiyuqing2003"
    },
]

const Submembers = [
    {
        name : "JingGe",
        position : ["XuanChuan","HouQiWeiHu","ZiLiao"],
        email : "jingge@i.pkuschool.edu.cn",
    },
    {
        name : "HeTianYang",
        position : ["HouQiWeiHu","XuanChuan","ZiLiao"],
        email : "hetianyang@i.pkuschool.edu.cn",
    },
    {
        name : "CuiWuWei",
        position : ["XuanChuan","ZiLiao"],
        email : "cuiwuwei@i.pkuschool.edu.cn",
    },
]


const MemberPicture = {
    TanChuPing : PictureTom,
    ZhaiYuQing : PictureKevin,

}


const useMemberContentStyle = makeStyles((theme) => ({
    card : {
        padding : theme.spacing(1, 2, 1.5),
        // maxwidth: 100,
    },
    CardMedia : {
        margi: 'auto',
    },
    avatar : {
        height : theme.spacing(8),
        width : theme.spacing(8)
    },
    chip : {
        userSelect : "none",
        boxShadow : "none !important"
    },
    gridContainer : {
        width : "100%",
        margin : theme.spacing(0)
    },
    gridItem : {
        //width : "33%"
        flexGrow : 1
    }
}))


export default function MemberContent(){
    const classes = useMemberContentStyle();
    const theme = useTheme();
    const { t } = useTranslation("developer");
    return (
    <>
    <Box padding = '20px'>
      <Typography variant = 'h4' textAlign = 'center' paddingTop = '15px'>{t('Team')}</Typography>  
    </Box>
    
    <Box width = { 1 } padding = { theme.spacing(3) }>
        <Grid
            // className = { classes.gridContainer }
            container
            direction="row"
            justifyContent="center"
            alignItems="center" 
            spacing = { 4 }>{
            Members.map(({ name,
                position,
                email,
                githubpage,
                
            }) => {
                return (<Grid
                        lg = {4}
                        xl = {4}
                        md = {6}
                        sm = {12}
                        // xs = {18}
                        item
                        container
                        className = { classes.gridItem }
                        key = { name }>
                    <Card
                        variant = "outlined"
                        className = { classes.card }>
                        <CardHeader
                            avatar = {
                                <Avatar
                                    className = { classes.avatar }
                                    src = { MemberPicture[name] } />
                            }
                            title = {
                                <Box paddingBottom = { theme.spacing(0.5) }>
                                    <Grid container spacing = { 1 } wrap = "nowrap">
                                        <Grid item>
                                            <Box
                                                fontWeight = "bold"
                                                
                                                component = "span"
                                                whiteSpace = "nowrap">
                                                <Typography variant="h4">
                                                     {   t(name)  }
                                                </Typography>
                                               
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Box>
                            }
                            subheader = {<Grid container spacing = { 0.5 }>{
                                    position.map((pos, index) => {
                                        return (<Grid item key = { pos }>
                                            <Chip label= { t(pos) }
                                                className = { classes.chip }
                                                clickable
                                                size = "small"
                                                variant = "outlined"
                                                color = "primary"
                                            ></Chip>
                                        </Grid>)
                                    })
                                }</Grid>
                            }
                            titleTypographyProps = {{ variant : "h4" }}
                            />
                        <CardContent>
                            <Grid container spacing = { 2 }>
                                <Grid item>
                                    <Typography>
                                       {t('LianXi') + ': '} {
                                            <Box component = "span" fontWeight = "bold">
                                                { email }
                                            </Box>
                                        }
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid container justifyContent="flex-end">
                                <Button
                                    color = "primary"
                                    disableElevation
                                    variant = "contained"
                                    href = { githubpage }>
                                    {t('FangWenGithub')}
                                </Button>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>)
            })
        }</Grid>
    </Box>
    <Divider variant="middle"></Divider>
    <Box width = { 1 } padding = { theme.spacing(3) }>
        <Grid
            // className = { classes.gridContainer }
            container
            
            direction="row"
            justifyContent="center"
            alignItems="center" 
            spacing = { 4 }>{
            Submembers.map(({ name,
                position,
                email,
       
                
            }) => {
                return (<Grid
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        lg = {6}
                        xl = {6}
                        md = {6}
                        sm = {12}
                        // xs = {18}
                        item
                        container
                        className = { classes.gridItem }
                        key = { name }>
                    <Card
                        variant = "outlined"
                        className = { classes.card }>
                        <CardHeader
                            
                            title = {
                                <Box paddingBottom = { theme.spacing(0.5) }>
                                    <Grid container spacing = { 1 } wrap = "nowrap">
                                        <Grid item>
                                            <Box
                                                fontWeight = "bold"
                                                
                                                component = "span"
                                                whiteSpace = "nowrap">
                                                <Typography variant="h4">
                                                     {   t(name)  }
                                                </Typography>
                                               
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Box>
                            }
                            subheader = {<Grid container spacing = { 0.5 }>{
                                    position.map((pos, index) => {
                                        return (<Grid item key = { pos }>
                                            <Chip label= { t(pos) }
                                                className = { classes.chip }
                                                clickable
                                                size = "small"
                                                variant = "outlined"
                                                color = "primary"
                                            ></Chip>
                                        </Grid>)
                                    })
                                }</Grid>
                            }
                            titleTypographyProps = {{ variant : "h4" }}
                            />
                        <CardContent>
                            <Grid container spacing = { 2 }>
                                <Grid item>
                                    <Typography>
                                       {t('LianXi') + ': '} {
                                            <Box component = "span" fontWeight = "bold">
                                                { email }
                                            </Box>
                                        }
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>

                    </Card>
                </Grid>)
            })
        }</Grid>
    </Box>



    </>)
}

export { MemberContent }