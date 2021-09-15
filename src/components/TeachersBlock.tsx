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
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
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
    const { t } = useTranslation("indexPageSchoolView");
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
            <CardContent sx={{ height: 50, maxWidth: 650}}>
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
                >
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
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