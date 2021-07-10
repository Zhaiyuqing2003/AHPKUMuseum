import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IndexPageCulture from './IndexPageSchoolCultureInt'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

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

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(3);

  const cardone = IndexPageCulture(0)
  const cardtwo = IndexPageCulture(1)
  const cardthree = IndexPageCulture(2)
  const cardfour = IndexPageCulture(3)

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
          <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
 
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleSwitch}
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
              <h1>王峥是狗</h1>
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
