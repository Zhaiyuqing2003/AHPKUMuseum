import * as React from 'react';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Card, Typography} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from "react-i18next";
interface State {
    amount: string;
  }

function BigSearch() {
    const { t } = useTranslation("translation");
    function openit(){
        window.open('http://www.pkuschool.edu.cn/jsjg.jsp?wbtreeid=1066&searchScope=0&currentnum=2&newskeycode2='+ Buffer.from(values.amount).toString('base64') + '#')
    }
    const [values, setValues] = React.useState<State>({
        amount: ''
      });
      const handleChange =
  (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
    paddingTop = '81px'
    paddingBottom = '81px'
    

  >
    <Grid
        container
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
    
        sx = {{maxWidth : 401, minWidth:300, padding : 1, paddingBottom : 3}}
    >
        <Grid item sx =  {{maxWidth : 400, minWidth:300}}>
            <Typography variant = 'h4'>{t('TanXunZuJi')}</Typography>
         

        </Grid>
        <Grid item  sx = {{maxWidth : 400, minWidth:300}}>
         
            <Typography variant = 'h6'>{t('GuanJianCiJianSuo')}</Typography>
         
        </Grid>
    </Grid>
    <Grid item>
        <Box>
        <Card
      component="form"
      sx={{ display: 'flex', alignItems: 'center',  minWidth : 650, maxWidth: 1400, borderRadius : '8px' }}
      
    >
   
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <TextField
        sx={{ ml: 1, flex: 1, padding : 1}}
        placeholder= {t("ShiJian")}
        // inputProps={{ 'aria-label': 'search google maps' }}
        value={values.amount}
        color = 'primary'
        onChange={handleChange('amount')}
        onKeyPress={(ev) => {
            console.log(`Pressed keyCode ${ev.key}`);
            if (ev.key == 'Enter') {
              openit
              ev.preventDefault();
            }
          }}
          
      />
        
      <Divider sx={{ height: 35, m: 0.5 }} orientation="vertical" />
      <IconButton
            color = "primary"
      
            onClick = {openit}
            
            
            >
            <SearchIcon /><Typography paddingRight = '5px' >{t("SouSuo")}</Typography>
        </IconButton>
        
    </Card> 
    </Box> 
    </Grid>


    </Grid>
  );
}

function SmallSearch(){
    const { t } = useTranslation("translation");
    function openit(){
        window.open('http://www.pkuschool.edu.cn/jsjg.jsp?wbtreeid=1066&searchScope=0&currentnum=2&newskeycode2='+ Buffer.from(values.amount).toString('base64') + '#')
    }
    const [values, setValues] = React.useState<State>({
        amount: ''
      });
      const handleChange =
  (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
    paddingTop = '26px'
    paddingBottom = '25px'
    

  >


     
            <Typography variant = 'body2' sx = {{maxWidth : 350, padding : 1}}>{t('ShiJian')}</Typography>

   
    <Grid item>
        <Box>
        <Card
      component="form"
      sx={{ display: 'flex', alignItems: 'center',  minWidth : 350, maxWidth: 400, borderRadius : '8px' }}
      
    >
   
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <TextField
        sx={{ ml: 1, flex: 1, padding : 1}}
        placeholder= {t('GuanJianCiJianSuo')}
        // inputProps={{ 'aria-label': 'search google maps' }}
        value={values.amount}
        color = 'primary'
        onChange={handleChange('amount')}
        onKeyPress={(ev) => {
            console.log(`Pressed keyCode ${ev.key}`);
            if (ev.key == 'Enter') {
              openit
              ev.preventDefault();
            }
          }}
          
      />
        
      <Divider sx={{ height: 35, m: 0.5 }} orientation="vertical" />
      <IconButton
            color = "primary"
      
            onClick = {openit}>
            <SearchIcon /><Typography paddingRight = '5px' >{t("SouSuo")}</Typography>
        </IconButton>
        
    </Card> 
    </Box> 
    </Grid>


    </Grid>
  );
}



export default function UseSearchBar(){
    let BigS = BigSearch()
    let SmallS = SmallSearch()
    let theme = useTheme();
    let { between, down, up, values } = theme.breakpoints;
    let { desktop, laptop } = values;
  
    let isLargerThanDesktop = useMediaQuery(up(desktop));
    let isLaptop = useMediaQuery(between(laptop, desktop));
    let isSmallerThanLaptop = useMediaQuery(down(laptop));
    if (isLargerThanDesktop){
        return BigS;
    } else if (isLaptop){
        return BigS;
    } 
    
    else if (isSmallerThanLaptop){
        return SmallS;
    } else {
        return SmallS;
    }
  
  }