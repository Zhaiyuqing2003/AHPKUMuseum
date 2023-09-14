/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from "@material-ui/core/Grid";
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Theme } from "@material-ui/core/styles"
import { useTheme } from "@material-ui/styles"
import { useTranslation } from "react-i18next";
import {Button} from '@material-ui/core'

import Typography from '@material-ui/core/Typography';
//@ts-ignore
import one from "../images/subpage/celebration/one.webp"
//@ts-ignore
import two from "../images/subpage/celebration/two.webp"
//@ts-ignore
import three from "../images/subpage/celebration/three.webp"
//@ts-ignore
import four from "../images/subpage/celebration/four.webp"
//@ts-ignore
import five from "../images/subpage/celebration/five.webp"
//@ts-ignore
import six from "../images/subpage/celebration/six.webp"
//@ts-ignore
import seven from "../images/subpage/celebration/seven.webp"
//@ts-ignore
import eight from "../images/subpage/celebration/eight.webp"
//@ts-ignore
import nine from "../images/subpage/celebration/nine.webp"
//@ts-ignore
import ten from "../images/subpage/celebration/ten.webp"
//@ts-ignore
import eleven from "../images/subpage/celebration/eleven.webp"
//@ts-ignore
import twelve from "../images/subpage/celebration/twelve.webp"
//@ts-ignore
import thirteen from "../images/subpage/celebration/thirteen.webp"
//@ts-ignore
import fourteen from "../images/subpage/celebration/fourteen.webp"
//@ts-ignore
import fifteen from "../images/subpage/celebration/fifteen.webp"

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;
}

//@ts-ignore

function ImageListBig() {
  const { t } = useTranslation("indexPageSchoolView");
  return (
    <Grid container alignItems = 'center'direction="row" justifyContent="center">
        <Grid item>
          <ImageList
            sx={{ width: 650, height: 620 }}
            variant="quilted"
            cols={6}
            rowHeight={121}
          >
            <ImageListItem key="Subheader" cols={6} rows = {1}>
            <ListSubheader component="div">{
            <>
            <Typography variant = 'h4'>
            {t('XiaoQingTuPianJingXuan')}
            </Typography>
            <Button variant = 'outlined' onClick ={() => {
                        window.open('https://bdfz-my.sharepoint.com/:f:/g/personal/zhaiyuqing_i_pkuschool_edu_cn/EoZOTtiRpIVIsZxLSJO-Od4BjCiCeQlXxiterJwHBmC-Dg?e=GsVkiq') }}
                        >{t('ChaKanGengDuo')}</Button>
            </>
            }</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  srcSet={srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar></ImageListItemBar>
              </ImageListItem>
            ))}
          </ImageList>
          
          
          </Grid>
    </Grid>

  );
}

function ImageListMobile() {
  const { t } = useTranslation("indexPageSchoolView");
  return (
    <Grid container alignItems = 'center'direction="row" justifyContent="center">
        <Grid item>
          <ImageList
            sx={{ width: 335, height: 620 }}
            variant="quilted"
            cols={6}
            rowHeight={60}
          >
            <ImageListItem key="Subheader" cols={6} rows = {1}>
            <ListSubheader component="div">{
            <Typography variant = 'h5'>
            {t('JingXuan')}
            </Typography>
            }</ListSubheader>
            </ImageListItem>
            
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  srcSet={srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar></ImageListItemBar>
              </ImageListItem>
            ))}
          </ImageList>
          
          
          </Grid>
    </Grid>

  );
}




export default function UsePictureList(){
  let Desktop = ImageListBig()
  let Mobile = ImageListMobile()
  let theme = useTheme();
  let { between, down, up, values } = theme.breakpoints;
//@ts-ignore
  let { desktop, laptop } = values;

  let isLargerThanDesktop = useMediaQuery(up(desktop));
  let isLaptop = useMediaQuery(between(laptop, desktop));
  let isSmallerThanLaptop = useMediaQuery(down(laptop));
  if (isLargerThanDesktop){
      return Desktop;
  } else if (isLaptop){
      return Desktop;
  } else if (isSmallerThanLaptop){
      return Mobile;
  } else {
      return Mobile;
  }

}




const itemData = [
  {
    img: one,
    title: 'one',
    rows: 2,
    cols: 3,
    author : ''
  },
  {
    img: two,
    title: 'two',
    rows: 2,
    cols: 3,
  },
  {
    img: three,
    title: 'three',
    rows: 2,
    cols: 3,
  },
  {
    img: four,
    title: 'four',
    rows: 4,
    cols: 3,
  },
  {
    img: five,
    title: 'five',
    rows: 2,
    cols: 3,
  },
  {
    img: six,
    title: 'six',
    rows: 2,
    cols: 4,
  },
  {
    img: seven,
    title: 'seven',
    rows: 1,
    cols: 2,
  },
  {
    img: eight,
    title: 'eight',
    rows: 1,
    cols: 2,
  },
  {
    img: nine,
    title: 'nine',
    rows: 1,
    cols: 2,
  },
  {
    img: ten,
    title: 'ten',
    rows: 1,
    cols: 2,
  
  },
  {
    img: eleven,
    title: 'eleven',
    rows: 2,
    cols: 2,

  },
  {
    img: twelve,
    title: 'twelve',
    rows: 2,
    cols: 4,
  },
  {
    img: thirteen,
    title: 'thirteen',
    rows: 2,
  },
  {
    img: fourteen,
    title: 'fourteen',
    rows: 1,
    cols: 1,
  },
  {
    img: fifteen,
    title: 'fifteen',
    rows: 1,
    cols: 4,
  },
];