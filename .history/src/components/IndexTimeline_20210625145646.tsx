import * as React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import ButtonBase from '@material-ui/core/ButtonBase';


//@ts-ignore
import headmaster1 from "../images/index/headmaster/headmaster1.jpg"
//@ts-ignore
import headmaster2 from "../images/index/headmaster/headmaster2.jpg"
//@ts-ignore
import headmaster3 from "../images/index/headmaster/headmaster3.jpg"
//@ts-ignore
import headmaster4 from "../images/index/headmaster/headmaster4.jpg"
//@ts-ignore
import headmaster5 from "../images/index/headmaster/headmaster5.jpg"
//@ts-ignore
import headmaster6 from "../images/index/headmaster/headmaster6.jpg"
//@ts-ignore
import headmaster7 from "../images/index/headmaster/headmaster7.jpg"
//@ts-ignore
import headmaster8 from "../images/index/headmaster/headmaster8.jpg"
//@ts-ignore
import headmaster9 from "../images/index/headmaster/headmaster9.jpg"
//@ts-ignore
import headmaster10 from "../images/index/headmaster/headmaster10.jpg"



export default function MobileTimeline() {
  return (
    
    <Timeline position="alternate">
      <TimelineItem>
            
        <TimelineSeparator>
          
            <TimelineConnector />
                <TimelineDot  color="primary">
                    
                </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Grid container spacing={2}>
          <Grid item>
              <Avatar src = {headmaster1} sx={{ width: 80, height: 80 }}></Avatar>
          </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    校长 尹企卓
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    1960 - 1966 
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TimelineContent>
      </TimelineItem>

    {/* 一条线必须长这样 */}
      <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent />
      </TimelineItem>
    {/* 一条线必须长这样 */}

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
        <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                  常务副校长 刘美德
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  1960 - 1972 
                  </Typography>       
                </Grid>
                <Grid item >           
                </Grid>        
              </Grid>          
            </Grid>
            <Avatar src = {headmaster2} sx={{ width: 80, height: 80 }}></Avatar>
          </Grid>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        </TimelineContent>
      </TimelineItem>

    {/* 一条线必须长这样 */}
    <TimelineItem>
            <TimelineSeparator>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent />
      </TimelineItem>
    {/* 一条线必须长这样 */}
    <TimelineItem>
            
            <TimelineSeparator>
              
                <TimelineConnector />
                    <TimelineDot  color="primary">
                        
                    </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
    
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Grid container spacing={2}>
              <Grid item>
                  <Avatar src = {headmaster1} sx={{ width: 80, height: 80 }}></Avatar>
              </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        校长 尹企卓
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        1960 - 1966 
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TimelineContent>
          </TimelineItem>
    
        {/* 一条线必须长这样 */}
          <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
          </TimelineItem>
        {/* 一条线必须长这样 */}
    
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                      常务副校长 刘美德
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      1960 - 1972 
                      </Typography>       
                    </Grid>
                    <Grid item >           
                    </Grid>        
                  </Grid>          
                </Grid>
                <Avatar src = {headmaster2} sx={{ width: 80, height: 80 }}></Avatar>
              </Grid>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            </TimelineContent>
          </TimelineItem>
    
        {/* 一条线必须长这样 */}
        <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
          </TimelineItem>
        {/* 一条线必须长这样 */}
        <TimelineItem>
            
            <TimelineSeparator>
              
                <TimelineConnector />
                    <TimelineDot  color="primary">
                        
                    </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
    
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Grid container spacing={2}>
              <Grid item>
                  <Avatar src = {headmaster1} sx={{ width: 80, height: 80 }}></Avatar>
              </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        校长 尹企卓
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        1960 - 1966 
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TimelineContent>
          </TimelineItem>
    
        {/* 一条线必须长这样 */}
          <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
          </TimelineItem>
        {/* 一条线必须长这样 */}
    
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                      常务副校长 刘美德
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      1960 - 1972 
                      </Typography>       
                    </Grid>
                    <Grid item >           
                    </Grid>        
                  </Grid>          
                </Grid>
                <Avatar src = {headmaster2} sx={{ width: 80, height: 80 }}></Avatar>
              </Grid>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            </TimelineContent>
          </TimelineItem>
    
        {/* 一条线必须长这样 */}
        <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
          </TimelineItem>
        {/* 一条线必须长这样 */}
        <TimelineItem>
            
            <TimelineSeparator>
              
                <TimelineConnector />
                    <TimelineDot  color="primary">
                        
                    </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
    
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Grid container spacing={2}>
              <Grid item>
                  <Avatar src = {headmaster1} sx={{ width: 80, height: 80 }}></Avatar>
              </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        校长 尹企卓
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        1960 - 1966 
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TimelineContent>
          </TimelineItem>
    
        {/* 一条线必须长这样 */}
          <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
          </TimelineItem>
        {/* 一条线必须长这样 */}
    
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                      常务副校长 刘美德
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      1960 - 1972 
                      </Typography>       
                    </Grid>
                    <Grid item >           
                    </Grid>        
                  </Grid>          
                </Grid>
                <Avatar src = {headmaster2} sx={{ width: 80, height: 80 }}></Avatar>
              </Grid>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            </TimelineContent>
          </TimelineItem>
    
        {/* 一条线必须长这样 */}
        <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
          </TimelineItem>
        {/* 一条线必须长这样 */}
        <TimelineItem>
            
            <TimelineSeparator>
              
                <TimelineConnector />
                    <TimelineDot  color="primary">
                        
                    </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
    
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Grid container spacing={2}>
              <Grid item>
                  <Avatar src = {headmaster1} sx={{ width: 80, height: 80 }}></Avatar>
              </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        校长 尹企卓
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        1960 - 1966 
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TimelineContent>
          </TimelineItem>
    
        {/* 一条线必须长这样 */}
          <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
          </TimelineItem>
        {/* 一条线必须长这样 */}
    
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                      常务副校长 刘美德
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      1960 - 1972 
                      </Typography>       
                    </Grid>
                    <Grid item >           
                    </Grid>        
                  </Grid>          
                </Grid>
                <Avatar src = {headmaster2} sx={{ width: 80, height: 80 }}></Avatar>
              </Grid>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            </TimelineContent>
          </TimelineItem>
    
        {/* 一条线必须长这样 */}
        <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
          </TimelineItem>
        {/* 一条线必须长这样 */}        
    </Timeline>
  );
}
