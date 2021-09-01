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
import { useTranslation } from "react-i18next";

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
  const randomnumber = Math.floor(Math.random() * 10)

  if (index  + 1 === 10){
    if (randomnumber === 1){
      console.log('哈哈')
      return 10
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

  const { t } = useTranslation("IndexPageSchoolCultureInt");

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
    <>
       <Typography variant = 'h4' textAlign = 'center' paddingTop = '15px'>{t('SiDaSaiShi')}</Typography>
       <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center" 
    spacing = {5}
    >
      <Grid item>
        {/* <IconButton aria-label="Flip left" ><ArrowBackIosRoundedIcon fontSize = 'large' /></IconButton> */}
      </Grid>
      <Grid item>
        

        {/* <Box sx={{ maxWidth: 520, padding : 0}}> */}
            <Tabs
            
              sx={{ maxWidth: 600}}
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="full width tabs example"
              
            >
              <Tab label={t('WuDaoJie')} {...a11yProps(0)} />
              <Tab label={t('LanQiuBei')} {...a11yProps(1)} />
              <Tab label={t('ZuQiuBei')} {...a11yProps(2)} />
              <Tab label={t('XiJuJie')}{...a11yProps(3)} />

  
            </Tabs>
        {/* </Box> */}
  
          {/* </AppBar> */}
          </Grid>
  
        <Box sx={{ bgcolor: 'background.paper'}}>
 
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleSwitch}
            sx = {{ borderRadius : 14}}
          >

          <TabPanel value={value} index={0} dir={theme.direction}>
              {cardfour}
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
              {cardone}
            </TabPanel>
            <TabPanel value={value} index={6} dir={theme.direction}>
              {cardtwo}
            </TabPanel>
            <TabPanel value={value} index={7} dir={theme.direction}>
              {cardthree}
            </TabPanel>           
            <TabPanel value={value} index={8} dir={theme.direction}>
              {cardfour}
            </TabPanel>
            <TabPanel value={value} index={9} dir={theme.direction}>
              <h1>这是彩蛋呱呱呱</h1>
            </TabPanel>
            <TabPanel value={value} index={10} dir={theme.direction}>
              <h1>这是彩蛋呱呱呱</h1>
            </TabPanel>
          </SwipeableViews>
        </Box>
      
      {/* <Grid item>
      <IconButton aria-label="Flip left"><ArrowForwardIosRoundedIcon fontSize = 'large'/></IconButton>
      </Grid> */}
    </Grid></>
  );
    
    
}

function MobileTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(3);

  const { t } = useTranslation("IndexPageSchoolCultureInt");

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
    paddingTop = {3}
    >

      <Grid item>
      <Grid item>
        <Typography variant = 'h4' textAlign = 'center' paddingBottom = '5px'>{t('SiDaSaiShi')}</Typography>
        <Typography  variant = 'subtitle1' color = 'textSecondary'paddingBottom = '5px' textAlign = 'center' >{t('HuaDong')}</Typography>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleSwitch}
            // sx = {{ borderRadius : 14}}
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
              {cardone}
            </TabPanel>
            <TabPanel value={value} index={6} dir={theme.direction}>
              {cardtwo}
            </TabPanel>
            <TabPanel value={value} index={7} dir={theme.direction}>
              {cardthree}
            </TabPanel>           
            <TabPanel value={value} index={8} dir={theme.direction}>
              {cardfour}
            </TabPanel>
            <TabPanel value={value} index={9} dir={theme.direction}>
              <h1>这是彩蛋呱呱呱</h1>
            </TabPanel>
            <TabPanel value={value} index={10} dir={theme.direction}>
              <h1>这是彩蛋呱呱呱</h1>
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