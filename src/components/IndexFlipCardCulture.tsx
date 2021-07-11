import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {IndexPageCultureInt, IndexPageCultureMobile} from './IndexPageSchoolCultureInt'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
function testIfItWorks(){
  console.log('FUCK ME BABE it works')
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index || value == -1}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
function numberJudge(index : number){
  const randomnumber = Math.floor(Math.random() * 100)

  if (index  + 1 === 6){
    if (randomnumber === 1){
      console.log('哈哈')
      return 5
    }
    else {
      console.log('现在随机数是'+randomnumber+'(数字为1时骂人)')
      return 1
    }
      
  }
  else if (index - 1 === -1){
    return 4
  }
  else{
    return index
  }
}

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(3);

  const cardone = IndexPageCultureInt(0)
  const cardtwo = IndexPageCultureInt(1)
  const cardthree = IndexPageCultureInt(2)
  const cardfour =  IndexPageCultureInt(3)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue( newValue );
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const handleSwitch = (index: number) => {
    setValue(numberJudge(index));
  };
  const rightHandle = (index: number)=>{
    setValue(3)
  }
  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center" 
    spacing = {5}
    >
      <Grid item>
        <IconButton aria-label="Flip left" ><ArrowBackIosRoundedIcon fontSize = 'large' /></IconButton>
      </Grid>
      <Grid item>
        <Box sx={{ bgcolor: 'background.paper'}}>
 
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleSwitch}
            sx = {{ borderRadius : 14}}
          >

            <TabPanel value={value} index={0} dir={theme.direction}>
            <h1>王峥是狗</h1>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {cardone}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              {cardtwo}
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              {cardthree}
            </TabPanel>           
            <TabPanel value={value} index={4} dir={theme.direction}>
              {cardfour}
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
              <h1>这是彩蛋呱呱呱</h1>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Grid>
      <Grid item>
      <IconButton aria-label="Flip left"><ArrowForwardIosRoundedIcon fontSize = 'large'/></IconButton>
      </Grid>
    </Grid>
  );
}

function MobileTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const cardone = IndexPageCultureMobile(0)
  const cardtwo = IndexPageCultureMobile(1)
  const cardthree =IndexPageCultureMobile(2)
  const cardfour =  IndexPageCultureMobile(3)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue( newValue );
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const handleSwitch = (index: number) => {
    setValue(numberJudge(index));
  };
  const rightHandle = (index: number)=>{
    setValue(3)
  }
  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center" 
    paddingTop = {2}
    >
      <Grid item>
        <Typography color = 'textSecondary'>请滑动查看 Swip to check</Typography>
      </Grid>
      <Grid item>
      <Grid item>

          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            // sx = {{ borderRadius : 14}}
          >

 
            <TabPanel value={value} index={0} dir={theme.direction}>
              {cardone}
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {cardtwo}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              {cardthree}
            </TabPanel>           
            <TabPanel value={value} index={3} dir={theme.direction}>
              {cardfour}
            
            </TabPanel>

          </SwipeableViews>
    
        </Grid>
      </Grid>

    </Grid>
  );
}






export default function UseFlipCard(){
  let BigTab = FullWidthTabs()
  let SmallTab = MobileTabs()
  let theme = useTheme();
  let { between, down, up, values } = theme.breakpoints;
//@ts-ignore
  let { desktop, laptop } = values;

  let isLargerThanDesktop = useMediaQuery(up(desktop));
  let isLaptop = useMediaQuery(between(laptop, desktop));
  let isSmallerThanLaptop = useMediaQuery(down(laptop));
  if (isLargerThanDesktop){
      return BigTab;
  } else if (isLaptop){
      return BigTab;
  } 
  
  else if (isSmallerThanLaptop){
      return SmallTab;
  } else {
      return SmallTab;
  }

}