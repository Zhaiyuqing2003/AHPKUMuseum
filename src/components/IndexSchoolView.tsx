import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Button, useMediaQuery} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

import { useTranslation } from "react-i18next";
//@ts-ignore
import summerDesktop from "../images/index/schoolview/preview.webp"
//@ts-ignore
import house from "../images/index/schoolview/house.webp"
const subpage = '../Subpages/subPageSchoolView.html'
const information = "https://mp.weixin.qq.com/s/Vxd-xz4RhJtbrSNJPvpmzA"

export default function ActionAreaCard() {
    // const { t } = useTranslation("operation");
    const { t } = useTranslation("indexPageSchoolView");
    let theme = useTheme();
    let { between, down, up, values } = theme.breakpoints;
    let { desktop, laptop } = values;
    let isLargerThanDesktop = useMediaQuery(up(desktop));


    function jumptosubpage(){
        window.scrollTo({
            top: document.body.scrollHeight /4-300,
            left: 0,
            behavior: 'smooth'
          })
    }
    function jumptoinformation(){
        windowObjectReference = window.open(information)
    }
    
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
            sx={{ height: isLargerThanDesktop ? 305 : 155, maxWidth: isLargerThanDesktop ? 650 : 350}}
            image={ house }
            />
            <CardContent sx={{ height: isLargerThanDesktop ? 230 : 130, maxWidth: isLargerThanDesktop ? 650 : 350}}>
            {/* <Grid padding = {1}> */}
            <Typography gutterBottom variant= {isLargerThanDesktop ? "h4" : "h5"} component="div">
                {t('SiDaShuYuan')}
            </Typography>
            <Typography variant={isLargerThanDesktop ? "h5" : "subtitle1"} color="text.secondary"  paddingBottom = {2}>
                {t('Contenttwo')}
            </Typography> 

            {/* </Grid> */}
            </CardContent>  
            <Grid padding = {2}>
                <Button  
                color = "primary" 
                disableElevation 
                variant = "contained"  
                // href = {information}
                onClick = {jumptoinformation}

                >
                    {t('DianJiChaKanGengDuo')}</Button>
            </Grid>
        {/* </CardActionArea> */}
        </Card> 
    </Grid>
    <Grid item >
        <Card sx={{ minWidth : 305, maxWidth: isLargerThanDesktop ? 650 : 350,borderRadius: 4}}>
        {/* <CardActionArea> */}
            <CardMedia
            sx={{ height: isLargerThanDesktop ? 305 : 155, maxWidth: isLargerThanDesktop ? 650 : 350}}
            image={ summerDesktop }
            />
            <CardContent   sx={{ height: isLargerThanDesktop ? 232 : 155, maxWidth: isLargerThanDesktop ? 650 : 350}}>
            {/* <Grid padding = {1}> */}
            <Typography gutterBottom variant={isLargerThanDesktop ? "h4" : "h5"} component="div">
                {t('XiaoYuanJingSe')}
            </Typography>
            <Typography variant={isLargerThanDesktop ? "h5" : "subtitle1"} color="text.secondary"  paddingBottom = {2}>
                {t('Content')}
            </Typography> 
            
            {/* </Grid> */}

            
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