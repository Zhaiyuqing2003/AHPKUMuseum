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
import ChenXiaoNan from "../images/index/alumni/CXN.webp"
//@ts-ignore
import MaoXinYu from "../images/index/alumni/MXY.webp"
//@ts-ignore\        
import NiuHongGuang from "../images/index/alumni/NHG.webp"
//@ts-ignore\
import WangYan from "../images/index/alumni/WY.webp"
//@ts-ignore\
import WangZheng from "../images/index/alumni/WZ.webp"
//@ts-ignore\
import XuBing from "../images/index/alumni/XB.webp"
//@ts-ignore\
import ZhangXinLing from "../images/index/alumni/ZXL.webp"
//@ts-ignore\
import ChenXiaoNanBlur from "../images/index/alumni/blur/CXN.webp"
//@ts-ignore\
import MaoXinYuBlur from "../images/index/alumni/blur/MXY.webp"
//@ts-ignore\
import NiuHongGuangBlur from "../images/index/alumni/blur/NHG.webp"
//@ts-ignore\
import WangYanBlur from "../images/index/alumni/blur/WY.webp"
//@ts-ignore\
import WangZhengBlur from "../images/index/alumni/blur/WZ.webp"
//@ts-ignore\
import XuBingBlur from "../images/index/alumni/blur/XB.webp"
//@ts-ignore\
import ZhangXinLingBlur from "../images/index/alumni/blur/ZXL.webp"
import { SixtyFpsTwoTone } from '@material-ui/icons';


declare module '@material-ui/styles'{
    interface DefaultTheme extends Theme{}
}

//@ts-ignore
const Alumni: Alumni[] = [{
    title: 'ChenXiaoNan',
    picture :  ChenXiaoNan,
    pictureblur : ChenXiaoNanBlur,
    headings : 'BiaoTi',
    content: 'WenAnChenXiaoNan',
}, 
{
    title: 'MaoXinYu',
    picture : MaoXinYu,
    pictureblur : MaoXinYuBlur,
    headings : 'BiaoTi',
    content: 'WenAnMaoXinYu',
},{
    title: 'NiuHongGuang',
    picture : NiuHongGuang,
    pictureblur : NiuHongGuangBlur,
    headings : 'BiaoTi',
    content: 'WenAnNiuHongGuang',
},{
    title: 'WangYan',
    picture : WangYan,
    pictureblur : WangYanBlur,
    headings : 'BiaoTi',
    content: 'WenAnWangYan',
},{
    title: 'WangZheng',
    picture : WangZheng,
    pictureblur : WangZhengBlur,
    headings : 'BiaoTi',
    content: 'WenAnWangZheng',
},{
    title: 'XuBing',
    picture : XuBing,
    pictureblur :XuBingBlur,
    headings : 'BiaoTi',
    content: 'WenAnXuBing',
},{
    title: 'ZhangXinLing',
    picture : ZhangXinLing,
    pictureblur : ZhangXinLingBlur,
    headings : 'BiaoTi',
    content: 'WenAnZhangXinLing',
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

let one = Alumni[0]
let listone: number[] = [one];
let two = Alumni[1]
let listtwo: number[] = [two];
let three = Alumni[2]
let listthree: number[] = [three]
let four = Alumni[3]
let listfour: number[] = [four];
let five = Alumni[4]
let listfive: number[] = [five];
let six = Alumni[5]
let listsix: number[] = [six];
let seven = Alumni[6]
let listseven: number[] = [seven];






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
    if(input ===4 ){
        return listfive
    }
    if(input ===5 ){
        return listsix
    }
    if(input ===6 ){
        return listseven
    }
}

 export  function IndexPageAlumniInt(input){
    const theme = useTheme()
    const classes = ContentStyle()
    const { t } = useTranslation("indexPageAlumni");
    const Daddy = FuckIWantWhatEverIWant(input)
    // const component = FuckIWantWhatEverIWant(input)

    return (    
    // <Grid container spacing= {2}>
    //@ts-ignore\
    <Card  sx={{ maxWidth: 455, display: 'flex', height:255, borderRadius : 14 }}> {(Daddy).map(({ title, picture, pictureblur, headings, content }, index) => (
    // <Grid item  key = {  index }>
        
        
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
                            image={picture}>
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
                                <Card className = {classes.card} sx={{ width: 135, height: 240, borderRadius : 12, boxShadow: 0, padding: 0.5}}>   
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
    ))}</Card>
    // </Grid>

  )};

  export  function  IndexPageAlumniMobile(input){
    const theme = useTheme()
    const classes = ContentStyle()
    const { t } = useTranslation("indexPageAlumni");
    const Daddy = FuckIWantWhatEverIWant(input)
    // const component = FuckIWantWhatEverIWant(input)

    return (
        // <Grid container spacing= {2}>
    
        <>
    
            <Card  sx={{ maxWidth: 300, display: 'flex', height:370, borderRadius : 14 }}> {(Daddy).map(({ title, picture, pictureblur, headings, content }, index) => (
            // <Grid item  key = {  index }>
                
                
                    <CardMedia
                        sx={{ height: 400,width: 300}}
                        image={pictureblur} >
            
                        
                        <Card sx={{ maxWidth: 500, height: 250, boxShadow:10,borderRadius : 0 }} className = {classes.floatcard} >
        
                            <Grid
                                container
                                direction="row" 
                                alignItems="center">
                                <CardMedia 
                                    sx={{ height: 250, width : 300}}
                                    image={picture}
                                   >
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
                                         <Card className = {classes.card} sx={{ width: 300, height: 250, boxShadow: 0, borderRadius : 0} }>   
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
    