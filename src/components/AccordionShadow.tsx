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

function ControlledAccordions() {
    const { t } = useTranslation("AccordionShadow");
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
            <Typography  variant = 'h4' textAlign = 'center'>{t('BianQian')}</Typography>
          </Box>
        
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {t('FuZhongJingSe')}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t('Chun·Xia·Qiu·Dong')}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >{t('Chun')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/ElBIEW6nWLlJh_Ei_l1GPZEB0MIUVtlb-V3jK9YEelT18g?e=ca1WFs') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('Xia')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EtgrIJnoLIBApo2h1KuHr6kBisFaO0R3RZbIZdoMCeVveA?e=kCUWJU') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('Qiu')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EjlkeSF_FeZElJGgrk42xYoBpMnEPx3CIp3hicVhmWq5Hg?e=HhekZA') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('Dong')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EkbhcFi8XJZCn4sNU-sNtiAB__3AzZbSUFl8XWRU3X5kVg?e=IfQvCJ') }}
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
              {t('XiaoYuanBianQian')}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t('WeiXiu·BianHua')}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >{t('BanGongLou')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EvH8BxqrsrdKrHWMj_6lTOMB0cFQB8ivkJzBxAeQPpYeXg?e=iixpyx') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('NanDaMen')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Eqhg5t4o3cxPtJVgLGe8HyEBICvuc9njLEL6tPll11pMVw?e=fL8Ehe') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('XiXiaoMen')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EqT-nTbrH2dHlZZGJ86WPGgBH1B9zZH-oy3KZXRFnbTTQA?e=2fhPlH') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('XiaoYuanDaoLu')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EuV57XBeVVZFhrZTHfPajTIBHdRf5npbByJOfWpoVr0rgw?e=op5VAx') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('BanGongLou')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EkEgsPe-mSRPh4znwAxDS-EBWm0axcY6Y0lLr2pI5z1Zdg?e=pBgBDx') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('NanJiaoXueLou')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EtKhib89xgZBnyLh2bwKrfMBoTZggKIytTdpuXklogNEMQ?e=WzJzWy') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('SuSheLou')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Eg_JRwnHgtlLmyvQbbwm--0BUsqTDn2D13LY4Hsi-NnItQ?e=ilSVKq') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('ShiTang')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Eoxa-aiEBy1PkZmZ_vpZkbgBW2h3tu-E_jrNvznpr9zoLA?e=JiW1o3') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('XiaoYuanDaZhong')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/El0TUO2wd8BPljFq30Lz6J4B6KOOP9ra937x0HnJ0LOxrQ?e=jiheKo') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('ChuZhongLou')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Eth9g_YW-rBNkbGqbPj2y60B26yqZUDLa0w2HaFKMIcSqQ?e=mMprYz') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('YunDongChang')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EuDlpzugVXtBpB2mVySvbVcBCWli-D-z-MJMsCfbvM1-ng?e=kn2fZh') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('TiYuGuan')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EhUVYohBv6lEuWMtWaBkDlsB1ice35GfDMEd5dhKonj5CQ?e=QcakHB') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('TuShuGuan')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Ep_wVPrWtSJLsKAhUwGat70BXOC3P_sj_VAQjC8-vMUWIw?e=4lMhVw') }}
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
              {t('JiaoLiuHuoDong')}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t('GuoNei·GuoJi')}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
                <Grid item>
                    <Typography component = 'h5' >{t('GuoNeiJiaoLiu')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EhUHDrzl59tJppdAhCuxsdcBq2bzn_wAsikMZgnomAK4pg?e=x6hFpY') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('GuoJiJiaoLiuHuoDong')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Eh7ZAy0UzFpFhb-Nfzl5ApYBVBMrVKMYjSRwtgQGktmeHw?e=efPRks') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('GuoJiJiaoLiuXinWen')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EvPULLAXF5tPgAhkiyZj_t8BmPVq7d_JxsBFiJp_Oz_4eQ?e=Eu3FzY') }}
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
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t('KaiFangRi·PiaoZheng')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx = {{width : 600}}></Box>
            <Grid container alignContent="space-between" alignItems="flex-start" spacing = {2} direction="column">
               
               <Grid item>
                   <Typography component = 'h5' >{t('ShiDaiDePiaoZheng')}</Typography>
               </Grid>
               <Grid item>
                   <Link component="button" onClick={() => {
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EilJPdtcKp1AiDwwQhdHucgBeJhuUeeM7w-MPEzpCRrqaQ?e=hkZDxr') }}
                       color="primary" variant = 'body1'>
                       {t('ChaKan')}
                   </Link>
               </Grid>
             
               <Grid item>
                   <Typography component = 'h5' >{t('XiaoYuanKaiFangRi')}</Typography>
               </Grid>
               <Grid item>
                   <Link component="button" onClick={() => {
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EnRIuXaCfnFFl5x1BfxONosBGAooyZyEkuWUvLUa3INkgg?e=4nIjuJ') }}
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
export {ControlledAccordions}