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
const subpage = '../subPageSchoolView.html'

export default function ActionAreaCard() {
    // const { t } = useTranslation("operation");
    const { t } = useTranslation("indexPageSchoolView");
  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center" 
    spacing = {5}
    paddingTop = '15px'
    >
    <Grid item>
        <Card sx={{ maxWidth: 655,borderRadius: 4}}>
        {/* <CardActionArea> */}
            <CardMedia
            sx={{ height: 385}}
            image={ summerDesktop }
            />
            <CardContent>
            {/* <Grid padding = {1}> */}
            <Typography gutterBottom variant="h3" component="div">
                {t('XiaoYuanJingSe')}
            </Typography>
            <Typography variant="h4" color="text.secondary" paddingBottom = {1}>
                {t('Content')}
            </Typography> 
            <Button  color = "primary" disableElevation variant = "contained" href = {subpage}>{t('DianJiChaKanGengDuo')}</Button>
            {/* </Grid> */}

            
            </CardContent>  
            
        {/* </CardActionArea> */}
        </Card> 
    </Grid>

    </Grid>
  );
}