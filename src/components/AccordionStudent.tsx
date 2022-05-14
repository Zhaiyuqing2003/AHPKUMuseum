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

// hello
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
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Eqrv7tOkzM1Aj00BZmsFzl4B7L74-bjPQFNlEb8TiBwX6A?e=0qTQyI') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('YiShuJie')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EhqeyDuJaJREqyUWabjWzX8BKUAtzDVjXCJ5HdCdxaSiRw?e=9hO0Am') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('DaBianHuoDong')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/El-Sv7xAvRJDkxTWf9Ad460BgSPlNNjCT2JYp0oZbte2YQ?e=yEJbLh') }}
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
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EtCcg2Z-IetNrZnZ6C-4Np0BNhpuDC7lHk9X7hQcqePYaQ?e=Y4AxGf') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('ZuQiuBiSai')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Er1zVervlolArDozJ36_JGkBqzeyjdkEGnRxkb7qP6-zTQ?e=LGZlcx') }}
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
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EkIFL09GkWZCqLSp9ZHuWRUB4DDi4KhsQEaolHvnRw6Bsw?e=jXG7uz') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
              
                <Grid item>
                    <Typography component = 'h5' >{t('2010-08NiShiLiu')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Epqf4aJ_IYpNtzgeNdupexkBzyoKvZxAfvKqvW-hAr8DqQ?e=toaEfV') }}
                        color="primary" variant = 'body1'>
                        {t('ChaKan')}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography component = 'h5' >{t('2011-02GaoErShengMingDaoHang')}</Typography>
                </Grid>
                <Grid item>
                    <Link component="button" onClick={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EnggFu-XqB1DiDJ4QxFOliUBcHup3KUEEcp6nBrQExwrFg?e=L0AOck') }}
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
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EnxK1nVMWa1OrF7tt8AFmcMB2Xkh5FB8lyTqTy2ati7_uQ?e=DhlMZc') }}
                       color="primary" variant = 'body1'>
                       {t('ChaKan')}
                   </Link>
               </Grid>
             
               <Grid item>
                   <Typography component = 'h5' >{t('ChuZhongBiyeDianLi')}</Typography>
               </Grid>
               <Grid item>
                   <Link component="button" onClick={() => {
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EvkOGM0aDz1PoNeblPWtdnQBhEIPDDEzrWpxXQzbRl5oLA?e=d3yQtz') }}
                       color="primary" variant = 'body1'>
                       {t('ChaKan')}
                   </Link>
               </Grid>

               <Grid item>
                   <Typography component = 'h5' >{t('GaoZhongBiYeDianLi')}</Typography>
               </Grid>
               <Grid item>
                   <Link component="button" onClick={() => {
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EnBAHHbCfKtEssg0boTkxksBtCjg98e1F43vTOAFITEzgg?e=rYFhkY') }}
                       color="primary" variant = 'body1'>
                       {t('ChaKan')}
                   </Link>
               </Grid>

               <Grid item>
                   <Typography component = 'h5' >{t('BiYeZhao')}</Typography>
               </Grid>
               <Grid item>
                   <Link component="button" onClick={() => {
                       window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/Epi-1zdxIdhAucH81hWR7QwBE8no5U8aFMstKfufQZbuEA?e=GrKEfS') }}
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