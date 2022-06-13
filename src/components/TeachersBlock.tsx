import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {Button, useMediaQuery} from '@material-ui/core'

import List from '@material-ui/core/List';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemButton from '@material-ui/core/ListItemButton'
import Collapse from '@material-ui/core/Collapse';



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

//@ts-ignore

// hello
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
            top: 5*document.body.scrollHeight /9-300,
            left: 0,
            behavior: 'smooth'
          })
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
            <CardContent sx={{ height: isLargerThanDesktop ? 50 : 100, maxWidth: 650}}>
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
                    sx = {{ WebkitBackdropFilter : "blur(10px)"}}
              
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
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EmdpTUE_opVMrAQEkq2foCgBPFKM7qmloJiZXtyPxYblFA?e=qY4kyq') }}>
                            <ListItemIcon>
                            <PeopleRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('JiaoGongJiTi')} />
                        </ListItemButton>
                        <ListItemButton onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Erz2eUcpn6JAiaOlITgATxgBP1HeMUrm6b8abCj5XUmXiQ?e=GosRPM') }}>
                            <ListItemIcon>
                            <WeekendRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('DaShiJiangZuo')} />
                        </ListItemButton>
                        <ListItemButton onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Ei7QibS0EGhDi7zUnVV68Q8BaGVpbsPHCkdF2lX6F4HIRg?e=2qmqxh') }}>
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
                        <ListItemButton sx={{ pl: 4 }} onClick = {()=>{window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EuwThSLb75ROrMKazKJqmlsB8P6HDk6BDkErl3cP-JBQSg?e=R8g8Yo')}}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={t("TeJiJiaoShiBiaoZhunXiang")} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick = {()=>{window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EgQL__xI5nVEtHbq9ppe-XQBtCoEK5VdiPH-k6pJfitd0g?e=E12Baw')}}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={t("TeJiJiaoShiFengJingZhao")} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick = {()=>{window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Er18thQ1Vh5Hu_xCeyCx89ABfLAbqxri5Ug2xqdANNk4aw?e=8XkhQm')}}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={t("GuGanJiaoShi")} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick = {()=>{window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Ev5xJ5kKXq1JvvmxDbFmCjIBUMncOx-yB2Eno_Fdql3ucA?e=phNseA')}}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={t("JiaoGongXianJin")} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick = {()=>{window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EkFdAvJnsKFHuqSdA05YVfwBA5R287IIcDX4DVGZ8fTTLQ?e=d4CYrM')}}>
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
            <CardContent   sx={{ height: isLargerThanDesktop ? 170 : 100, maxWidth: isLargerThanDesktop ? 650 : 350}}>
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
                  >{t('DianJiTiaoZhuanXiangQing')}</Button>
            </Grid>
            
        {/* </CardActionArea> */}
        </Card> 
    </Grid>
    </Grid>
  );
}