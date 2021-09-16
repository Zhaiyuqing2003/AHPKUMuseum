import React from 'react';
import {Theme, createStyles } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/styles"
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Grid,Box, Paper,Button,useMediaQuery, Divider} from '@material-ui/core/';
import Link from '@material-ui/core/Link';
import { useTranslation } from "react-i18next";
import { useTheme } from '@material-ui/core/styles';



// let theme = useTheme();
// let { between, down, up, values } = theme.breakpoints;
// //@ts-ignore
// let { desktop, laptop } = values;
// let isLargerThanDesktop = useMediaQuery(up(desktop));
// let isLaptop = useMediaQuery(between(laptop, desktop));
// let isSmallerThanLaptop = useMediaQuery(down(laptop));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '65%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        display: 'flex',
        alignContent: 'space-between',
        alignItems: 'center',
        width: '110%',
      }
  }),
);

function Accordiontwo() {
    const { t } = useTranslation("Accordiontwo");
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const dog = 550
    let theme = useTheme();
    let { between, down, up, values } = theme.breakpoints;
    //@ts-ignore
    let { desktop, laptop } = values;
    let isLargerThanDesktop = useMediaQuery(up(desktop));
    let isLaptop = useMediaQuery(between(laptop, desktop));
    let isSmallerThanLaptop = useMediaQuery(down(laptop));
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };
  
    return (
    
        <Box sx = {{maxWidth : isLargerThanDesktop ? 530 : 350, minWidth : 350, paddingTop : 8}}>
          <Box sx = {{padding : 1, paddingBottom : 3}}>
            <Typography  variant = 'h4' textAlign = 'center'>{t('XueShengShengHuo')}</Typography>
          </Box>
        
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {t('TeShuHuoDong')}
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>{t('Chun·Xia·Qiu·Dong')}</Typography> */}
          </AccordionSummary>

          <AccordionDetails>
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >{t('HuiHuangChengJi')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EosK1Lt52JtHktzv-B-NPqIBujs7qHTRMU1I7tWmXoHiNQ?e=ni9dG8') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('YiShuJie')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EjFYxgPMLORChMbDKQu52CgB3UN-RJfNuPSRibzBZJJXTA?e=CD7rq3') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('DaBianHuoDong')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/El-C1UQb9-1CiOrSoq_SxP0ByDyY6A2xAG8SR1iVpZAqTQ?e=Rfy33s') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>

            </Grid>
          </AccordionDetails>
        </Accordion>


        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {t('YunDongYuJianKang')}
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>{t('WeiXiu·BianHua')}</Typography> */}
          </AccordionSummary>

          <AccordionDetails>
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
        
                <Grid item>
                    <Typography component = 'h5' >{t('TiYuWenHuaJie')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EicqUfO4LPVGnirwVkYxzLwBAWwKc-vYIu6GDhJsc_-BPw?e=qeabmB') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('ZuQiuBiSai')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EnWuTREQECBCu1u6ipntt70BLvQ4Tw6RvO33oLd4dnC3MQ?e=oEn6Py') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
           </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {t('XinZhiXunLian')}
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>{t('GuoNei·GuoJi')}</Typography> */}
          </AccordionSummary>

          <AccordionDetails>
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >{t('2010-05GaoZhongXueZhangTuan')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/En9wZJNEpapMgGrDzM0HJGIB5ts28Hgs83gyHmdIyFD1LA?e=fQEAGG') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('2010-08NiShiLiu')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Ei3otlw19utPr_tPw6bR3FYBKKIpdzRszkK5SB0fBctPJw?e=8Kl5uD') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('2011-02GaoErShengMingDaoHang')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EuGtFSQkr09ApfI4fswdsJ0B0bPNkEGhOcNl4SisLJghiQ?e=wegiQ8') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>


        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>{t('BiYeJi')}</Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>{t('KaiFangRi·PiaoZheng')}</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Box sx = {{width : 600}}></Box>
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
               <Grid item>
                   <Typography component = 'h5' >{t('ChengRenYiShi')}</Typography>
               </Grid>
               <Grid item>
                   <Link component="button" onClick={() => {
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EmGOg-4MggVJg6jtKW-6_FABXRncp4XTnpr2OQp3ZWJWbA?e=4Qricy') }}
                       color="primary" variant = 'body1'>
                       {t('ChaKan')}
                   </Link>
               </Grid>
             
               <Grid item>
                   <Typography component = 'h5' >{t('ChuZhongBiyeDianLi')}</Typography>
               </Grid>
               <Grid item>
                   <Link component="button" onClick={() => {
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/ErxxJhWcCiVBmDOcGQ1k2b0Bie0e-6dYc08PESGckN-zfw?e=3yfG0q') }}
                       color="primary" variant = 'body1'>
                       {t('ChaKan')}
                   </Link>
               </Grid>

               <Grid item>
                   <Typography component = 'h5' >{t('GaoZhongBiYeDianLi')}</Typography>
               </Grid>
               <Grid item>
                   <Link component="button" onClick={() => {
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Ev0uBA6h4mpIo_GuEhMukVUBnEttWujvKDL9PrPssjG0jw?e=ZXGc8d') }}
                       color="primary" variant = 'body1'>
                       {t('ChaKan')}
                   </Link>
               </Grid>

               <Grid item>
                   <Typography component = 'h5' >{t('BiYeZhao')}</Typography>
               </Grid>
               <Grid item>
                   <Link component="button" onClick={() => {
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EmzM7sJP1hBAhvUb-ExQBHABePEbZfxUr3tz1-2bAhe1lA?e=UaAZGn') }}
                       color="primary" variant = 'body1'>
                       {t('ChaKan')}
                   </Link>
               </Grid>

           </Grid>


          </AccordionDetails>
        </Accordion>
        


        </Box>
      
    );
  }
export {Accordiontwo}