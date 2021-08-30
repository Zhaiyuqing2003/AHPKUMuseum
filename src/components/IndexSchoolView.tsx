import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {Button} from '@material-ui/core'
import { useTranslation } from "react-i18next";
//@ts-ignore
import summerDesktop from "../images/index/schoolview/preview.webp"
//@ts-ignore
import house from "../images/index/schoolview/house.webp"
const subpage = '../Subpages/subPageSchoolView.html'
const information = "https://mp.weixin.qq.com/s/Y5ncE9VpL56ub29P_82pAQ"

export default function ActionAreaCard() {
    // const { t } = useTranslation("operation");
    const { t } = useTranslation("indexPageSchoolView");
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
        <Card sx={{ minWidth : 305, maxWidth: 650,borderRadius: 4}}>
        {/* <CardActionArea> */}
            <CardMedia
            sx={{ height: 305, maxWidth: 650}}
            image={ house }
            />
            <CardContent sx={{ height: 230, maxWidth: 650}}>
            {/* <Grid padding = {1}> */}
            <Typography gutterBottom variant="h4" component="div">
                {t('SiDaShuYuan')}
            </Typography>
            <Typography variant="h5" color="text.secondary"  paddingBottom = {2}>
                {t('Contenttwo')}
            </Typography> 

            {/* </Grid> */}
            </CardContent>  
            <Grid padding = {2}>
                <Button  color = "primary" disableElevation variant = "contained"  href = {information}>{t('DianJiChaKanGengDuo')}</Button>
            </Grid>
        {/* </CardActionArea> */}
        </Card> 
    </Grid>
    <Grid item >
        <Card sx={{ minWidth : 305, maxWidth: 650,borderRadius: 4}}>
        {/* <CardActionArea> */}
            <CardMedia
            sx={{ height: 305, maxWidth: 650}}
            image={ summerDesktop }
            />
            <CardContent   sx={{ height: 230, maxWidth: 650}}>
            {/* <Grid padding = {1}> */}
            <Typography gutterBottom variant="h4" component="div">
                {t('XiaoYuanJingSe')}
            </Typography>
            <Typography variant="h5" color="text.secondary"  paddingBottom = {2}>
                {t('Content')}
            </Typography> 
            
            {/* </Grid> */}

            
            </CardContent>
            <Grid padding = {2}>
                <Button  color = "primary" disableElevation variant = "contained"  href = {subpage}>{t('DianJiChaKanGengDuo')}</Button>
            </Grid>
            
        {/* </CardActionArea> */}
        </Card> 
    </Grid>
    </Grid>
  );
}