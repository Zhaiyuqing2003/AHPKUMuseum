import * as React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Box, Paper, CardHeader, Card, CardMedia, CardContent } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles"
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useLayoutEffect, useRef, useState } from "react";
import Switch from '@material-ui/core/Switch';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';



declare module '@material-ui/styles'{
    interface DefaultTheme extends Theme{}
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
        backdropFilter : 'blur(20px)',
        backgroundColor : theme.palette.primary.main + "77",
        WebkitBackdropFilter : "blur(10px)",
        
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  
//@ts-ignore
import headmasterOne from "../images/index/headmasters/headmasterOne.jpg"
//@ts-ignore
import headmasterTwo from "../images/index/headmasters/headmasterTwo.jpg"
//@ts-ignore
import headmasterThree from "../images/index/headmasters/headmasterThree.jpg"
//@ts-ignore
import headmasterFour from "../images/index/headmasters/headmasterFour.jpg"
//@ts-ignore
import headmasterFive from "../images/index/headmasters/headmasterFive.jpg"
//@ts-ignore
import headmasterSix from "../images/index/headmasters/headmasterSix.jpg"
//@ts-ignore
import headmasterSeven from "../images/index/headmasters/headmasterSeven.jpg"
//@ts-ignore
import headmasterEight from "../images/index/headmasters/headmasterEight.jpg"
//@ts-ignore
import headmasterNine from "../images/index/headmasters/headmasterNine.jpg"
//@ts-ignore
import headmasterTen from "../images/index/headmasters/headmasterTen.jpg"

//@ts-ignore
import greatwall from "../images/index/backgrounds/GreatWall.jpg"



import { useTranslation } from "react-i18next"

//@ts-ignore
const headmasters: headmasterItem[] = [{
    name: 'YinQiZhuo',
    position : 'XiaoZhang',
    positiontwo : '',
    year : '1960-1966',
    picture: headmasterOne,
}, 
{
    name: "LiuMeiDe",
    position : 'ChangWuFuXiaoZhang',
    positiontwo : '',
    year : '1960-1972',
    picture: headmasterTwo,
}, {
    name: "JiaShiQi",
    position : 'GeWeiHuiZhuRen',
    positiontwo : '',
    year: '1968-1971',
    picture: headmasterThree,
}, {
    name: "MengGuangPing",
    position : "GeWeiHuiZhuRen",
    positiontwo : "XiaoZhang",
    year :"1971-1980",
    picture: headmasterFour,
}, {
    name: "XiaXueZhi",
    position : "DaiXiaoZhang",
    positiontwo : 'XiaoZhang',
    year : "1980.7-1984.4",
    yeartwo: '1985-1992',
    picture: headmasterFive,
}, {
    name: "ChenJianGang",
    position : "XiaoZhang",
    positiontwo : '',
    year : "1984.5-1985.1",
    picture: headmasterSix,
}, {
    name: "MaoMeiHua",
    position : "XiaoZhang",
    positiontwo : '',
    year : "1992.7-1997.7",
    picture: headmasterSeven,
}, {
    name: "ZhaoYuLin",
    position : "XiaoZhang",
    year : "1997.7-2001.10",
    picture: headmasterEight,
}, {
    name: "KangJian",
    position : "XiaoZhang",
    positiontwo : '',
    year : "2001.11-2009",
    picture: headmasterNine,
}, {
    name: "WangZheng",
    position : "XiaoZhang",
    positiontwo : '',
    year : '2009-',
    picture: headmasterTen,
}]



function DesktopTimeline() {
    const theme = useTheme()
    const classes = useStyles()
    const { t } = useTranslation("indexPageTimeline");

    // const [checked, setChecked] = React.useState(false);
    // const handleChange = () =>  {setChecked((prev) => !prev);};
 

    return (
        <>
        <Typography variant = 'h4' textAlign = 'center' paddingTop = '80px'>{t('XiaoZhangShiJianXian')}</Typography>
        {/* <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />}label="Show"/> */}
        <Timeline position="alternate" >
            {headmasters.map(({ name, year,yeartwo, position, positiontwo, picture }, index) => ( 
        <>
        <TimelineItem key = { index }>
           
            <TimelineSeparator>
                <TimelineConnector sx = {{ height : 20 }}/>
                    <TimelineDot />
                <TimelineConnector sx = {{ height : 20 }}/>
            </TimelineSeparator>
        
            <TimelineContent sx = {{ py : '12px', px : 2 }}>
                
                <Grid container alignItems = "center" flexDirection = 
                {
                    index % 2 === 0 ? "row" : "row-reverse"
                }
                spacing = {0}
                padding = {3}
                >
                {/* <Grow in={checked}> */}
                <Paper className = {classes.card}
                //  ref = {ourRef}
                 >
                    <Grid container spacing = {0}
                    padding = {3.5}
                    flexDirection = 
                    {
                        index % 2 === 0 ? "row" : "row-reverse"
                    }>
                         <Grid item padding = {1}>
                                <Avatar 
                                    src={ picture } 
                                    sx = {{ 
                                        height : theme.spacing(7), width : theme.spacing(7)
                                    }} />
                            </Grid>
                            <Grid item padding = {1} sx = {{width:140}}>
                                    <Typography variant = 'h5'>{ t(name) }</Typography>
                                <Typography align = {index % 2 === 0 ? "left" : "right"} variant = 'subtitle1' color = 'textSecondary'>{ t(year) }</Typography>
                                <Typography align = {index % 2 === 0 ? "left" : "right"} variant = 'subtitle1' color = 'textSecondary'>{ t(position) }</Typography>
                                <Typography align = {index % 2 === 0 ? "left" : "right"} variant = 'subtitle1' color = 'textSecondary'>{ t(yeartwo) }</Typography>
                                <Typography align = {index % 2 === 0 ? "left" : "right"} variant = 'subtitle1' color = 'textSecondary'>{ t(positiontwo) }</Typography>
                                
                            </Grid>
                    </Grid>
                </Paper>
                {/* </Grow> */}
                </Grid>   
            </TimelineContent>
        </TimelineItem>
        {/* <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
          </TimelineItem>
          <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
          </TimelineItem>           */}
      
        </>
))
    }</Timeline></>
  
 
    )
}

function Mobiletimeline(){
    const theme = useTheme()
    const classes = useStyles()
    const { t } = useTranslation("indexPageTimeline");
    return (
    <>
    <Typography variant = 'h4' textAlign = 'center' paddingTop = '30px'>{t('XiaoZhangShiJianXian')}</Typography>
    <Timeline position="alternate">{

        headmasters.map(({ name, year, yeartwo, position, positiontwo, picture }, index) => ( 
    <>
    <TimelineItem key = { index }>
       
        <TimelineSeparator>
            <TimelineConnector sx = {{ height : 0 }}/>
            <Avatar 
                                src={ picture } 
                                sx = {{ 
                                    height : theme.spacing(7), width : theme.spacing(7)
                                }} />
            <TimelineConnector sx = {{ height : 0 }}/>
        </TimelineSeparator>
    
        <TimelineContent sx = {{ py : '12px', px : 2 }}>
            
        <Grid container spacing = {0}
                 
                    flexDirection = 
                    {
                        index % 2 === 0 ? "row" : "row-reverse"
                    }>
                        
                            <Grid item >
                                    <Typography variant = 'h5'>{ t(name) }</Typography>
                                <Typography align = {index % 2 === 0 ? "left" : "right"} variant = 'subtitle1' color = 'textSecondary'>{ t(year) }</Typography>
                                <Typography align = {index % 2 === 0 ? "left" : "right"} variant = 'subtitle1' color = 'textSecondary'>{ t(position) }</Typography>
                                <Typography align = {index % 2 === 0 ? "left" : "right"} variant = 'subtitle1' color = 'textSecondary'>{ t(yeartwo) }</Typography>
                                <Typography align = {index % 2 === 0 ? "left" : "right"} variant = 'subtitle1' color = 'textSecondary'>{ t(positiontwo) }</Typography>
                                
                            </Grid>
                    </Grid>

        </TimelineContent>

    </TimelineItem>

    <TimelineItem>
        <TimelineSeparator>
            <TimelineConnector sx = {{ height : 4 }} />
        </TimelineSeparator>
        <TimelineContent />
    </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector sx = {{ height : 4 }}/>
            </TimelineSeparator>
            <TimelineContent />
    </TimelineItem>   
    </>
))
}</Timeline></>)
}

export default function UseIndexPageTimeline(){
    let TimelineDesktop = DesktopTimeline()
    let TimelineMobile = Mobiletimeline()
    let theme = useTheme();
    let { between, down, up, values } = theme.breakpoints;
//@ts-ignore
    let { desktop, laptop } = values;
  
    let isLargerThanDesktop = useMediaQuery(up(desktop));
    let isLaptop = useMediaQuery(between(laptop, desktop));
    let isSmallerThanLaptop = useMediaQuery(down(laptop));
    if (isLargerThanDesktop){
        return TimelineDesktop;
    } else if (isLaptop){
        return TimelineDesktop;
    } else if (isSmallerThanLaptop){
        return TimelineMobile;
    } else {
        return TimelineMobile;
    }

}