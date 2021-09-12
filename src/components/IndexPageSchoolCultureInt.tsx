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
import bascketballone from "../images/index/culture/Basketball/one.webp"
//@ts-ignore\
import bascketballoneblur from "../images/index/culture/blur/one.webp"
//@ts-ignore\
import danceone from "../images/index/culture/Dance/two.webp"
//@ts-ignore\
import danceoneblur from "../images/index/culture/blur/two.webp"
//@ts-ignore\
import theatreone from "../images/index/culture/Theatre/three.webp"
//@ts-ignore\
import theatreoneblur from "../images/index/culture/blur/three.webp"
//@ts-ignore\
import footballone from "../images/index/culture/Football/four.webp"
//@ts-ignore\
import footballoneblur from "../images/index/culture/blur/four.webp"

declare module '@material-ui/styles'{
    interface DefaultTheme extends Theme{}
}

//@ts-ignore
const cultures: cultureItem[] = [{
    title: 'LanQiuBei',
    picture : bascketballone,
    pictureblur : bascketballoneblur,
    headings : 'BiaoTi',
    content: 'WenAnLanQiu',
}, 
{
    title: 'ZuQiuBei',
    picture : footballone,
    pictureblur : footballoneblur,
    headings : 'BiaoTi',
    content: 'WenAnZuQiu',
},{
    title: 'XiJuJie',
    picture : theatreone,
    pictureblur : theatreoneblur,
    headings : 'BiaoTi',
    content: 'WenAnXiJu',
},{
    title: 'WuDaoJie',
    picture : danceone,
    pictureblur : danceoneblur,
    headings : 'BiaoTi',
    content: 'WenAnWuDao',
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

let one = cultures[0]
let listone: number[] = [one];
let two = cultures[1]
let listtwo: number[] = [two];
let three = cultures[2]
let listthree: number[] = [three]
let four = cultures[3]
let listfour: number[] = [four];

function fuck(){
console.log(listthree)
// console.log()
}
function FuckIWantWhatEverIWant(input){
    if(input ===0 ){
        return listone
    }
    if(input ===1 ){
        return listtwo
    }
    if(input ===2 ){
        return listthree
    }
    if(input ===3 ){
        return listfour
    }
}

 export  function IndexPageCultureInt(input){
    const theme = useTheme()
    const classes = ContentStyle()
    const { t } = useTranslation("IndexPageSchoolCultureInt");
    const Daddy = FuckIWantWhatEverIWant(input)
    // const component = FuckIWantWhatEverIWant(input)

    return (    
    // <Grid container spacing= {2}>

    <>
 

    <Card  sx={{ maxWidth: 455, display: 'flex', height:255, borderRadius : 8 }}> {(Daddy).map(({ title, picture, pictureblur, headings, content }, index) => (
    // <Grid item  key = {  index }>

            
            <CardMedia
                sx={{ height: 285,width: 455}}
                image={pictureblur} >
                 
                
                <Card sx={{ maxWidth: 500, height: 255, borderRadius : 8}} className = {classes.floatcard} >

                    <Grid
                        container
                        direction="row" 
                        alignItems="center">
                        <CardMedia 
                            sx={{ height: 255, width : 300 }}
                            image={picture}
                            title={t('Verge')}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Grid container direction = 'column' alignItems="center" spacing = {2} justifyContent="flex-end">
                                <Card sx={{ height:200}} className = {classes.floatcard} />
                                        <Grid item>
                                            <Card className = {classes.card} sx = {{height: 32,width:200, borderRadius: 8, boxShadow:10}}>
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
                                <Card className = {classes.card} sx={{ width: 135, height: 240, borderRadius : 6, boxShadow: 0, padding: 0}}>   
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
        
    // </Grid>
    ))}</Card></>
    // </Grid>

  )};

  export  function IndexPageCultureMobile(input){
    const theme = useTheme()
    const classes = ContentStyle()
    const { t } = useTranslation("IndexPageSchoolCultureInt");
    const Daddy = FuckIWantWhatEverIWant(input)
    // const component = FuckIWantWhatEverIWant(input)

    return (
    // <Grid container spacing= {2}>

    <>

        <Card  sx={{ maxWidth: 300, display: 'flex', height:335, borderRadius : 14 }}> {(Daddy).map(({ title, picture, pictureblur, headings, content }, index) => (
        // <Grid item  key = {  index }>
            
            
                <CardMedia
                    sx={{ height: 335,width: 300}}
                    image={pictureblur} >
        
                    
                    <Card sx={{ maxWidth: 500, height: 235, boxShadow:10 }} className = {classes.floatcard} >
    
                        <Grid
                            container
                            direction="row" 
                            alignItems="center">
                            <CardMedia 
                                sx={{ height: 235, width : 300}}
                                image={picture}
                                title={t('Verge')}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Grid container direction = 'column' alignItems="center" spacing = {2} justifyContent="flex-end">
                                    <Card sx={{ height:180}} className = {classes.floatcard} />
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
                  
                            </Grid>
    
                        </Grid>
                    </Card>                                    
                                     <Card className = {classes.floatcard} sx={{ width: 300, height: 150, boxShadow: 0,}}>   
                                            <CardContent >
                                                        <Typography component="div" variant="h6" color="white" paddingLeft = {3}>
                                                            {t(headings)}
                                                        </Typography>
                                        
                                                        <Typography variant="subtitle2" color="white" paddingLeft = {3}>
                                                            {t(content)}
                                                        </Typography>
                                            </CardContent>
                                    </Card>     
                </CardMedia>
            
        // </Grid>
        ))}</Card>
    </>

  )};
// ?