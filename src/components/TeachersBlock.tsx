import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {Button, useMediaQuery} from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemButton from '@material-ui/core/ListItemButton'
import Collapse from '@material-ui/core/Collapse';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import WeekendRoundedIcon from '@material-ui/icons/WeekendRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import PaletteIcon from '@material-ui/icons/Palette';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';


import { useTranslation } from "react-i18next";
//@ts-ignore
import summerDesktop from "../images/index/teachers/GroupPic.webp"
//@ts-ignore
import house from "../images/index/teachers/teachers.webp"
const subpage = '../Subpages/subPageSchoolView.html'
const information = "https://mp.weixin.qq.com/s/Vxd-xz4RhJtbrSNJPvpmzA"

export default function ActionAreaCard() {
    let theme = useTheme();
    let { between, down, up, values } = theme.breakpoints;
    //@ts-ignore
    let { desktop, laptop } = values;
    let isLargerThanDesktop = useMediaQuery(up(desktop));
    let isLaptop = useMediaQuery(between(laptop, desktop));
    let isSmallerThanLaptop = useMediaQuery(down(laptop));
    // const { t } = useTranslation("operation");
    const { t } = useTranslation("Teachers");
    function jumptosubpage(){
        window.scrollTo({
            top: document.body.scrollHeight /3-600,
            left: 0,
            behavior: 'smooth'
          })
    }
    function jumptoinformation(){
        windowObjectReference = window.open(information)
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Grid
    container
    direction="row"
    justifyContent="space-evenly"
    alignItems="flex-start"
    spacing = {2}
    paddingTop = '25px'
    paddingBottom = '100px'
    >

    <Grid item>
        <Card sx={{ minWidth : 305, maxWidth: isLargerThanDesktop ? 650 : 350,borderRadius: 4}}>
        {/* <CardActionArea> */}
            <CardMedia
            sx={{ height: isLargerThanDesktop ? 650 : 350, maxWidth: 650}}
            image={ house }
            />
            <CardContent sx={{ height: isLargerThanDesktop ? 50 : 80, maxWidth: 650}}>
            {/* <Grid padding = {1}> */}
            <Typography gutterBottom variant="h4" component="div">
                {t('JiaoShiFengCai')}
            </Typography>
            {/* <Typography variant="h5" color="text.secondary"  paddingBottom = {2}>
                {t('Contenttwo')}
            </Typography>  */}
            <Box sx = {{width:1000}}></Box>

            {/* </Grid> */}
            </CardContent>  
            <Grid padding = {2}>
                <Button  
                color = "primary" 
                disableElevation 
                variant = "contained"  
                // href = {information}
                onClick = {handleClickOpen}

                >
                    {t('DianJiChaKanGengDuo')}</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    sx = {{backdropFilter : "blur(10px)", WebkitBackdropFilter : "blur(10px)"}}
              
                >
                    <DialogTitle id="alert-dialog-title">{t('JiaoShiFengCai')}</DialogTitle>
                    <DialogContent>

                        <List
                        sx={{ width: '100%', maxWidth: 800, bgcolor : 'inherit', padding : 0}}
                        component="nav"
                        // aria-labelledby="nested-list-subheader"
                        // subheader={
                        //     <ListSubheader component="div" id="nested-list-subheader">
                        //     Nested List Items
                        //     </ListSubheader>
                        // }
                        >
                        <ListItemButton onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Eu6Pep9Tvt1Drcw-EJH2rGoBbUD7P9AtoRx_1KrSADrr7g?e=g3NFTn') }}>
                            <ListItemIcon>
                            <PeopleRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('JiaoGongJiTi')} />
                        </ListItemButton>
                        <ListItemButton onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EqEFHUl9VcpAqNd7GLoRXosBIBLZV01W9KxmmLW4mcxE4A?e=GRg4Tf') }}>
                            <ListItemIcon>
                            <WeekendRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('DaShiJiangZuo')} />
                        </ListItemButton>
                        <ListItemButton onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EqEFHUl9VcpAqNd7GLoRXosBIBLZV01W9KxmmLW4mcxE4A?e=GRg4Tf') }}>
                            <ListItemIcon>
                            <EmojiPeopleRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('JiaoShiQingHuai')} />
                        </ListItemButton>
                        <ListItemButton  disabled disableTouchRipple>
                        <ListItemIcon>
                        <PaletteIcon />
                        </ListItemIcon>
                        <ListItemText primary= {t("FengCai")} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick = {()=>{window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EncWDKFjRRlMoV7MuW_IMQoBSCnzgxidyAV50nWTPS_WeQ?e=9PExaE')}}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={t("TeJiJiaoShiBiaoZhunXiang")} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick = {()=>{window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Eg7xMX-tMDlDgwBy-psj-bUBxoqlCaCmV3plHkBsa7lGIQ?e=acJ1iT')}}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={t("TeJiJiaoShiFengJingZhao")} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick = {()=>{window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Ek8EcB1TLpRFpCslHHM6dQEBZ1dCaDboBo272fiR-g0-eA?e=vIi6Ge')}}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={t("GuGanJiaoShi")} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick = {()=>{window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EsjfUerhzzNLk2hppMbIrrYBHVi6NSx_y52IGrKopgpMTw?e=gASeGZ')}}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={t("JiaoGongXianJin")} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick = {()=>{window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EukwtWjxiONFpZgX4XWbPZYBhaBKZnhcx3MT8ZsI9l9MrA?e=0rjII8')}}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={t("QiTaFengCai")} />
                        </ListItemButton>
                        </List>
                    </Collapse>
 
 
                        </List>
                        <Box sx = {{width: 1000}}></Box>
                    </DialogContent>
                        <DialogActions>

                        <Button onClick={handleClose} variant = 'outlined' color="primary" autoFocus>
                            {t('TuiChu')}
                        </Button>
                        </DialogActions>
                </Dialog>
            </Grid>
        {/* </CardActionArea> */}
        </Card> 
    </Grid>
    <Grid item >
        <Card sx={{ minWidth : 305, maxWidth: isLargerThanDesktop ? 650 : 350,borderRadius: 4}}>
        {/* <CardActionArea> */}
            <CardMedia
            sx={{ height: isLargerThanDesktop ? 530 : 350, maxWidth: isLargerThanDesktop ? 650 : 350}}
            image={ summerDesktop }
            />
            <CardContent   sx={{ height: isLargerThanDesktop ? 170 : 80, maxWidth: isLargerThanDesktop ? 650 : 350}}>
            {/* <Grid padding = {1}> */}
            <Typography gutterBottom variant={isLargerThanDesktop ? "h4" : "h5"} component="div">
                {t('XueShengShengHuo')}
            </Typography>
            <Typography variant={isLargerThanDesktop ? "h5" : "subtitle1"} color="text.secondary"  paddingBottom = {2}>
                {t('ChengJiYiShuJieBiSaiDaBianChengRenLi')}
            </Typography> 
            {/* </Grid> */}
            <Box sx = {{width:1000}}></Box>
            
            </CardContent>
            <Grid padding = {2}>
                <Button
                  color = "primary" 
                  disableElevation 
                  variant = "contained"  
                //   href = {subpage}
                  onClick = {jumptosubpage}
                  >{t('DianJiChaKanGengDuo')}</Button>
            </Grid>
            
        {/* </CardActionArea> */}
        </Card> 
    </Grid>
    </Grid>
  );
}