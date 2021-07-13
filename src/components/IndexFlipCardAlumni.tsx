import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { IndexPageAlumniInt, IndexPageAlumniMobile} from './IndexPageAlumniInt'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from "react-i18next";
// import
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
  

  if (index  + 1 === 9){
      return 1
  }
  else if (index - 1 === -1){
    return 7
  }
  else{
    return index
  }
}

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(4);

  const { t } = useTranslation("indexPageAlumni");

  const cardone = IndexPageAlumniInt(0)
  const cardtwo =  IndexPageAlumniInt(1)
  const cardthree = IndexPageAlumniInt(2)
  const cardfour =   IndexPageAlumniInt(3)
  const cardfive =   IndexPageAlumniInt(4)
  const cardsix =   IndexPageAlumniInt(5)
  const cardseven =   IndexPageAlumniInt(6)
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
    <Typography variant = 'h4' textAlign = 'center' paddingTop = '15px'>{t('XiaoYou')}</Typography>
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
              {cardfive}
            </TabPanel>
            <TabPanel value={value} index={6} dir={theme.direction}>
              {cardsix}
            </TabPanel>
            <TabPanel value={value} index={7} dir={theme.direction}>
              {cardseven}
            </TabPanel>
            
            <TabPanel value={value} index={8} dir={theme.direction}>
              <h1>王峥是狗</h1>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Grid>
      <Grid item>
      <IconButton aria-label="Flip left"><ArrowForwardIosRoundedIcon fontSize = 'large'/></IconButton>
      </Grid>
    </Grid>
  </>);
}

function MobileTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(4);

  const { t } = useTranslation("indexPageAlumni");

  const cardone = IndexPageAlumniMobile(0)
  const cardtwo =  IndexPageAlumniMobile(1)
  const cardthree = IndexPageAlumniMobile(2)
  const cardfour =   IndexPageAlumniMobile(3)
  const cardfive =   IndexPageAlumniMobile(4)
  const cardsix =   IndexPageAlumniMobile(5)
  const cardseven =   IndexPageAlumniMobile(6)
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
      <Typography variant = 'h4' textAlign = 'center' paddingBottom = '5px'>{t('XiaoYou')}</Typography>
      <Typography  variant = 'subtitle1' color = 'textSecondary'paddingBottom = '5px' textAlign = 'center' >{t('HuaDong')}</Typography>
      </Grid>
      <Grid item>
      <Grid item>

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
              {cardfive}
            </TabPanel>
            <TabPanel value={value} index={6} dir={theme.direction}>
              {cardsix}
            </TabPanel>
            <TabPanel value={value} index={7} dir={theme.direction}>
              {cardseven}
            </TabPanel>
            
            <TabPanel value={value} index={8} dir={theme.direction}>
              <h1>王峥是狗</h1>
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