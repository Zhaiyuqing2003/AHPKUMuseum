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
import { Box, Paper, CardHeader, Card } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles"
import ButtonBase from '@material-ui/core/ButtonBase';
import { Theme } from "@material-ui/core/styles"

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

const headmasters: headmasterItem[] = [{
    name: "尹企卓",
    position : [{
        title : ["校长"],
        duration : {
            start : new Date("1960"),
            end : new Date("1966")
        }
    }],
    picture: headmasterOne,
}, {
    name: "刘美德",
    position : [{
        title : ["常务副校长"],
        duration : {
            start : new Date("1960"),
            end : new Date("1972")
        }
    }],
    picture: headmasterTwo,
}, {
    name: "贾世起",
    position : [{
        title : ["革委会主任"],
        duration : {
            start : new Date("1968"),
            end : new Date("1971")
        }
    }],
    picture: headmasterThree,
}, {
    name: "孟广平",
    position : [{
        title : ["校长"],
        duration : {
            start : new Date("1971"),
            end : new Date("1980")
        }
    }],
    picture: headmasterFour,
}, {
    name: "夏学之",
    position : [{
        title : ["代校长"],
        duration : {
            start : new Date("1980.7"),
            end : new Date("1984.4")
        }
    }, {
        title : ["校长"],
        duration : {
            start : new Date("1985"),
            end : new Date("1992")
        }
    }],
    picture: headmasterFive,
}, {
    name: "陈剑刚",
    position : [{
        title : ["校长"],
        duration : {
            start : new Date("1984.5"),
            end : new Date("1985.1")
        }
    }],
    picture: headmasterSix,
}, {
    name: "毛美华",
    position : [{
        title : ["校长"],
        duration : {
            start : new Date("1992.7"),
            end : new Date("1997.7")
        }
    }],
    picture: headmasterSeven,
}, {
    name: "赵钰琳",
    position : [{
        title : ["校长"],
        duration : {
            start : new Date("1997.7"),
            end : new Date("2001.10")
        }
    }],
    picture: headmasterEight,
}, {
    name: "康健",
    position : [{
        title : ["校长", "党委书记"],
        duration : {
            start : new Date("2001.11"),
            end : new Date("2009")
        }
    }],
    picture: headmasterNine,
}, {
    name: "王铮",
    position : [{
        title : ["校长"],
        duration : {
            start : new Date("2009"),
            end : new Date()
        }
    }],
    picture: headmasterTen,
}]


export default function IndexPageTimeline() {
    const theme = useTheme()
    const classes = useStyles()
    return (<Timeline position="alternate">{
        headmasters.map(({ name, position, picture }, index) => ( 
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
                spacing = {2}
                padding = {2}
                >
                <Paper className = {classes.card}>
                    <Grid container spacing = {2}
                    padding = {2}
                    flexDirection = 
                    {
                        index % 2 === 0 ? "row" : "row-reverse"
                    }>
                         <Grid item>
                                <Avatar 
                                    src={ picture } 
                                    sx = {{ 
                                        height : theme.spacing(7), width : theme.spacing(7)
                                    }} />
                            </Grid>
                        <Grid item>
                                <Typography>{ name }</Typography>
                        </Grid>   
                        <Grid item>
                                <Typography>{ name + '1' }</Typography>
                        </Grid>   
                    </Grid>
                    
                </Paper>
                <Grid container></Grid>
                <Grid container></Grid>
                </Grid>   

            </TimelineContent>
       
        </TimelineItem>
        <TimelineItem>
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
          </TimelineItem>          
      
        </>
))
    }</Timeline>)
}

type headmasterItem = {
    name: string,
    position : {
        title : string[]
        duration : {
            start : Date,
            end : Date
        }
    }[],
    picture: string
}