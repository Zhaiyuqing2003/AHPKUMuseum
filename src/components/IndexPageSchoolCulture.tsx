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

function IndexPageCultureBasketBall(){
    const theme = useTheme();
    const classes = ContentStyle()
    return (    
    <Card  sx={{ maxWidth: 700, display: 'flex', height:345, borderRadius : 14 }}>
            
        <CardMedia
            sx={{ height: 345,width: 700 }}
            image={bascketballoneblur} >
        
            
            <Card sx={{ maxWidth: 700, height: 345, borderRadius : 14}} className = {classes.floatcard} >

                <Grid
               
                    container
                    direction="row"
                    alignItems="center">
                    <CardMedia 
                        sx={{ height: 345, width : 445 }}
                        image={bascketballone}
                        title= '图片来自Verge杂志'>
                         <CardContent sx={{ flex: '1 0 auto' }}>
                            <Grid container direction = 'column' alignItems="center" spacing = {2} justifyContent="flex-end">
                            <Card sx={{ height:265}} className = {classes.floatcard} />
                                    <Grid item>
                                        <Card className = {classes.card} sx = {{height: 45,width:300, borderRadius: 14, boxShadow:10}}>
                                            <Grid item alignItems="center">
                                                <Typography component="div" variant="h4" color="white" align = 'center' display = 'block'>
                                                    篮球杯
                                                </Typography>  
                                            </Grid>
                                        </Card>
                                    </Grid>
                            </Grid>
                        </CardContent>
                    </CardMedia>        

                   <Grid item padding = {1} alignItems="center" >
                        <Card className = {classes.card} sx={{ maxWidth: 230, height: 200, borderRadius : 5, boxShadow: 0, padding: 0.5}}>
                    
                                <CardContent >
    
                                            <Typography component="div" variant="h4" color="white">
                                                文案
                                            </Typography>
                              
                             
                                        <   Typography variant="subtitle1" color="white">
                                            文案文案文案文文案文案文案文文案文案
                                            </Typography>
                                </CardContent>
                     
                        </Card>                       
                   </Grid>

                </Grid>
            </Card>
        </CardMedia>
    </Card>

  )};
 function IndexPageCultureDance(){
    const theme = useTheme();
    const classes = ContentStyle()
    return (    
    <Card  sx={{ maxWidth: 700, display: 'flex', height:345, borderRadius : 14 }}>
            
        <CardMedia
            sx={{ height: 345,width: 700 }}
            image={danceoneblur} >
        
            
            <Card sx={{ maxWidth: 700, height: 345, borderRadius : 14}} className = {classes.floatcard} >

                <Grid
               
                    container
                    direction="row"
                    alignItems="center">
                    <CardMedia 
                        sx={{ height: 345, width : 445 }}
                        image={danceone}
                        title= '图片来自Verge杂志'>
                         <CardContent sx={{ flex: '1 0 auto' }}>
                            <Grid container direction = 'column' alignItems="center" spacing = {2} justifyContent="flex-end">
                            <Card sx={{ height:265}} className = {classes.floatcard} />
                                    <Grid item>
                                        <Card className = {classes.card} sx = {{height: 45,width:300, borderRadius: 14, boxShadow:10}}>
                                            <Grid item alignItems="center">
                                                <Typography component="div" variant="h4" color="white" align = 'center' display = 'block'>
                                                    舞蹈节
                                                </Typography>  
                                            </Grid>
                                        </Card>
                                    </Grid>
                            </Grid>
                        </CardContent>
                    </CardMedia>        

                   <Grid item padding = {1} alignItems="center" >
                        <Card className = {classes.card} sx={{ maxWidth: 230, height: 200, borderRadius : 5, boxShadow: 0, padding: 0.5}}>
                    
                                <CardContent >
    
                                            <Typography component="div" variant="h4" color="white">
                                                文案
                                            </Typography>
                              
                             
                                        <   Typography variant="subtitle1" color="white">
                                            文案文案文案文文案文案文案文文案文案
                                            </Typography>
                                </CardContent>
                     
                        </Card>                       
                   </Grid>

                </Grid>
            </Card>
        </CardMedia>
    </Card>

  );
}

 function IndexPageCulturefootball(){
    const theme = useTheme();
    const classes = ContentStyle()
    return (    
    <Card  sx={{ maxWidth: 700, display: 'flex', height:345, borderRadius : 14 }}>
            
        <CardMedia
            sx={{ height: 345,width: 700 }}
            image={footballoneblur} >
        
            
            <Card sx={{ maxWidth: 700, height: 345, borderRadius : 14}} className = {classes.floatcard} >

                <Grid
               
                    container
                    direction="row"
                    alignItems="center">
                    <CardMedia 
                        sx={{ height: 345, width : 445 }}
                        image={footballone}
                        title= '图片来自Verge杂志'>
                         <CardContent sx={{ flex: '1 0 auto' }}>
                            <Grid container direction = 'column' alignItems="center" spacing = {2} justifyContent="flex-end">
                            <Card sx={{ height:265}} className = {classes.floatcard} />
                                    <Grid item>
                                        <Card className = {classes.card} sx = {{height: 45,width:300, borderRadius: 14, boxShadow:10}}>
                                            <Grid item alignItems="center">
                                                <Typography component="div" variant="h4" color="white" align = 'center' display = 'block' >
                                                    足球杯
                                                </Typography>  
                                            </Grid>
                                        </Card>
                                    </Grid>
                            </Grid>
                        </CardContent>
                    </CardMedia>        

                   <Grid item padding = {1} alignItems="center" >
                        <Card className = {classes.card} sx={{ maxWidth: 230, height: 200, borderRadius : 5, boxShadow: 0, padding: 0.5}}>
                    
                                <CardContent >
    
                                            <Typography component="div" variant="h4" color="white">
                                                文案
                                            </Typography>
                              
                             
                                        <   Typography variant="subtitle1" color="white">
                                            文案文案文案文文案文案文案文文案文案
                                            </Typography>
                                </CardContent>
                     
                        </Card>                       
                   </Grid>

                </Grid>
            </Card>
        </CardMedia>
    </Card>

  );
}

function IndexPageCulturetheatre(){
    const theme = useTheme();
    const classes = ContentStyle()
    return (    
    <Card  sx={{ maxWidth: 700, display: 'flex', height:345, borderRadius : 14 }}>
            
        <CardMedia
            sx={{ height: 345,width: 700 }}
            image={theatreoneblur} >
        
            
            <Card sx={{ maxWidth: 700, height: 345, borderRadius : 14}} className = {classes.floatcard} >

                <Grid
               
                    container
                    direction="row"
                    alignItems="center">
                    <CardMedia 
                        sx={{ height: 345, width : 445 }}
                        image={theatreone}
                        title= '图片来自Verge杂志'>
                         <CardContent sx={{ flex: '1 0 auto' }}>
                            <Grid container direction = 'column' alignItems="center" spacing = {2} justifyContent="flex-end">
                            <Card sx={{ height:265}} className = {classes.floatcard} />
                                    <Grid item>
                                        <Card className = {classes.card} sx = {{height: 45,width:300, borderRadius: 14, boxShadow:10}}>
                                            <Grid item alignItems="center">
                                                <Typography component="div" variant="h4" color="white" align = 'center' display = 'block' >
                                                    戏剧节
                                                </Typography>  
                                            </Grid>
                                        </Card>
                                    </Grid>
                            </Grid>
                        </CardContent>
                    </CardMedia>        

                   <Grid item padding = {1} alignItems="center" >
                        <Card className = {classes.card} sx={{ maxWidth: 230, height: 200, borderRadius : 5, boxShadow: 0, padding: 0.5}}>
                    
                                <CardContent >
    
                                            <Typography component="div" variant="h4" color="white">
                                                文案
                                            </Typography>
                              
                             
                                        <   Typography variant="subtitle1" color="white">
                                            文案文案文案文文案文案文案文文案文案
                                            </Typography>
                                </CardContent>
                     
                        </Card>                       
                   </Grid>

                </Grid>
            </Card>
        </CardMedia>
    </Card>

  );
}

export default function Allfour(){
    let basketball = IndexPageCultureBasketBall()
    let dance = IndexPageCultureDance()
    let theatre = IndexPageCulturetheatre()
    let football = IndexPageCulturefootball()
    return (
        basketball
    )
    
}