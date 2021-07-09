import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { createIsAfterIgnoreDatePart } from '@material-ui/lab/internal/pickers/time-utils';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { useTranslation } from "react-i18next";
import { Theme } from "@material-ui/core/styles";

//@ts-ignore
import bascketballone from "../images/index/culture/Basketball/one.png"
//@ts-ignore\
import bascketballoneblur from "../images/index/culture/blur/one.jpg"
//@ts-ignore\
import danceone from "../images/index/culture/Dance/two.png"
//@ts-ignore\
import danceoneblur from "../images/index/culture/blur/two.jpg"
//@ts-ignore\
import theatreone from "../images/index/culture/Theatre/three.png"
//@ts-ignore\
import theatreoneblur from "../images/index/culture/blur/three.jpg"
//@ts-ignore\
import footballone from "../images/index/culture/Football/four.png"
//@ts-ignore\
import footballoneblur from "../images/index/culture/blur/four.jpg"

declare module '@material-ui/styles'{
    interface DefaultTheme extends Theme{}
}

//@ts-ignore
const cultures: cultureItem[] = [{
    title: 'LanQiuBei',
    picture : bascketballone,
    pictureblur : bascketballoneblur,
    headings : 'BiaoTi',
    content: 'WenAn',
}, 
{
    title: 'ZuQiuBei',
    picture : footballone,
    pictureblur : footballoneblur,
    headings : 'BiaoTi',
    content: 'WenAn',
},{
    title: 'XiJuJie',
    picture : theatreone,
    pictureblur : theatreoneblur,
    headings : 'BiaoTi',
    content: 'WenAn',
},{
    title: 'WuDaoJie',
    picture : danceone,
    pictureblur : danceoneblur,
    headings : 'BiaoTi',
    content: 'WenAn',
} ]

const ContentStyle = makeStyles((theme) => ({
    cardMedia : {
        height : "10vh"
    },
    card: {
        backdropFilter : 'blur(8px)',
        backgroundColor : '#1e1e1e70',
        // opacity : '0.7',
        WebkitBackdropFilter : "blur(8px)",
        
        
    },
   floatcard : {

        backgroundColor : 'transparent',
 

    }
}))

export default function IndexPageCultureBasketBall(){
    const theme = useTheme()
    const classes = ContentStyle()
    const { t } = useTranslation("IndexPageSchoolCultureInt");
    return (    
    <Grid container spacing= {2}>
    {cultures.map(({ title, picture, pictureblur, headings, content }, index) => (
    <Grid item>
        <Card  sx={{ maxWidth: 500, display: 'flex', height:255, borderRadius : 14 }}>
        

            <CardMedia
                sx={{ height: 285,width: 455}}
                image={pictureblur} >
        
                
                <Card sx={{ maxWidth: 500, height: 255, borderRadius : 14}} className = {classes.floatcard} >

                    <Grid
                        container
                        direction="row" 
                        alignItems="center">
                        <CardMedia 
                            sx={{ height: 255, width : 300 }}
                            image={picture}
                            title={title}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Grid container direction = 'column' alignItems="center" spacing = {2} justifyContent="flex-end">
                                <Card sx={{ height:200}} className = {classes.floatcard} />
                                        <Grid item>
                                            <Card className = {classes.card} sx = {{height: 32,width:200, borderRadius: 14, boxShadow:10}}>
                                                <Grid item alignItems="center">
                                                    <Typography component="div" variant="h5" color="white" align = 'center' display = 'block'>
                                                        {t(title)}
                                                    </Typography>  
                                                </Grid>
                                            </Card>
                                        </Grid>
                                </Grid>
                            </CardContent>
                        </CardMedia>        

                    <Grid item padding = {1} alignItems="center" >
                            <Card className = {classes.card} sx={{ width: 137, height: 150, borderRadius : 10, boxShadow: 0, padding: 0.5}}>   
                                    <CardContent >
                                                <Typography component="div" variant="h6" color="white">
                                                    {t(headings)}
                                                </Typography>
                                
                                            <   Typography variant="subtitle2" color="white">
                                                {t(content)}
                                                </Typography>
                                    </CardContent>
                            </Card>                       
                    </Grid>

                    </Grid>
                </Card>
            </CardMedia>
        </Card>
    </Grid>))}
    </Grid>

  )};