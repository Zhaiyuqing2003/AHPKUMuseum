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
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EqhlGBXfs-1IpCVG5rwxflYBa3dgzFSondgMHhzpB2YAag?e=1PBrb4') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('Xia')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EnZlWLQIhwtKrscv9RJp6t4Bx5gzEyYkzR9-Ck8mFLt9jg?e=LhqVrT') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('Qiu')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EiUdHpdQsEZPlWwJcA0hMMQBMd6BoYQacSXdpWmrF09IAA?e=zgQKIy') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('Dong')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Ermdlf7W1B9BiQKVUJnX6dsBs6Rz51hdeDdy964DXjeh4w?e=wKfAiK') }}
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
                    <Typography component = 'h5' >{t('MoXing')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EiacU7DQaNNClgTg6jsZJ_EBaqbIfslscnRQv_Uucf2YTA?e=LZweFO') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('NanDaMen')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EqRgQRDYWX9ApYMBQ8u461cBvCDiQ4UyyMsFBETjzQjDXA?e=TXqVPc') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('XiXiaoMen')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EgSpm4hJ7wFDtM4W0cR6lGQBvw9HtEn0w-tCrWl7Xx5EPg?e=GLfftg') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('XiaoYuanDaoLu')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Emj29_UQkJlOjcP-y65CHGoBcSGyvD4_kWq30Alt9IANqg?e=hUVAVZ') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('BanGongLou')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EqawStdA09FOvWwSeANsBaQBYgltwMFFsROyw6Qo8Y7Ing?e=y4xb6D') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('NanJiaoXueLou')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EhfJJH_9-wFHvG6MaLlYOrIBDAGcDxWoXc1PZgQ7VFeKXA?e=NHSZaL') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('SuSheLou')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EkBLgL8TYxpCp0v-XQTytl8BKgRo4xlWj8gxZ3YkkQvwRg?e=DLK4od') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('ShiTang')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EsTHnPCkpGVGgbiCMT637f4BJBjSR7-JkR55GX7GHmFMEw?e=M7NGJy') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('XiaoYuanDaZhong')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Ek6nHBFTaAhCn_5VyXjMkVwBzo7bEQguMy22y_xAn8eKKQ?e=tGaWRv') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('ChuZhongLou')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EmsJclDy2C5KsepUisWXZe8BxEjDrTNTiolUoVzf9BUhkA?e=wx8NrZ') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('YunDongChang')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EumKnUxNcQtAtDrqLpWEgLIBlTXAdlozA7ZZtRFidDAMbw?e=pkRFjR') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('TiYuGuan')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EqCRU1248j1ElRGYjNNnIgoBC5F_LgiGgM5wJil46FYqbA?e=4exfiH') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('TuShuGuan')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Elg2SAWDSUZNuqJAvei6N60BmnLBT5_Z_0uNM_XWe53GmA?e=Nkwm9E') }}
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
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EtlV-5FCFRZCo7XcXmNB8l0BtRSuY-XrSK-lgwt_FivmhA?e=CcRlcC') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('GuoJiJiaoLiuHuoDong')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EiXTct549ulKjf39lcJbwNYBWUaLNjbNN7R3HZij1oq6Dg?e=xiRgAq') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('GuoJiJiaoLiuXinWen')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EgmTNP05wxBDhIcDzub6TkwBKvRck6rhNVl0WiZxIU_v-A?e=IvGl0c') }}
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
            <Typography sx={{ width: '33%', flexShrink: 0 }}>{t('QiTa')}</Typography>
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
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EkK0FVxwPPlCsYELGhqjy40B2QGehCrpSz4JBO7kreTYcQ?e=vdXMUQ') }}
                       color="primary" variant = 'body1'>
                       {t('ChaKan')}
                   </Link>
               </Grid>
             
               <Grid item>
                   <Typography component = 'h5' >{t('XiaoYuanKaiFangRi')}</Typography>
               </Grid>
               <Grid item>
                   <Link component="button" onClick={() => {
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/ElD0W2zVPmZKpGW2ZOrJDgUBMqFbnGIjFiA3X65gXs97XQ?e=lmsTLx') }}
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