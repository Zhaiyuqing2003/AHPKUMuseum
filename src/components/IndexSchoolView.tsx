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
const subpage = '../Subpages/index.html'

export default function ActionAreaCard() {
    // const { t } = useTranslation("operation");
    const { t } = useTranslation("indexPageSchoolView");
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-evenly"
    alignItems="center" 
    spacing = {5}
    paddingTop = '55px'
    paddingBottom = '100px'
    >
    <Grid item>
        <Card sx={{ minWidth : 370, maxWidth: 1100,borderRadius: 4}}>
        {/* <CardActionArea> */}
            <CardMedia
            sx={{ height: 385, maxWidth: 1100}}
            image={ summerDesktop }
            />
            <CardContent>
            {/* <Grid padding = {1}> */}
            <Typography gutterBottom variant="h4" component="div">
                {t('XiaoYuanJingSe')}
            </Typography>
            <Typography variant="h5" color="text.secondary"  paddingBottom = {2}>
                {t('Content')}
            </Typography> 
            <Button  color = "primary" disableElevation variant = "contained"  href = {subpage}>{t('DianJiChaKanGengDuo')}</Button>
            {/* </Grid> */}

            
            </CardContent>  
            
        {/* </CardActionArea> */}
        </Card> 
    </Grid>
    <Grid item>
        <Card sx={{ minWidth : 370, maxWidth: 1100,borderRadius: 4}}>
        {/* <CardActionArea> */}
            <CardMedia
            sx={{ height: 385, maxWidth: 1100}}
            image={ summerDesktop }
            />
            <CardContent>
            {/* <Grid padding = {1}> */}
            <Typography gutterBottom variant="h4" component="div">
                {t('XiaoYuanJingSe')}
            </Typography>
            <Typography variant="h5" color="text.secondary"  paddingBottom = {2}>
                {t('Content')}
            </Typography> 
            <Button  color = "primary" disableElevation variant = "contained"  href = {subpage}>{t('DianJiChaKanGengDuo')}</Button>
            {/* </Grid> */}

            
            </CardContent>  
            
        {/* </CardActionArea> */}
        </Card> 
    </Grid>
    </Grid>
  );
}