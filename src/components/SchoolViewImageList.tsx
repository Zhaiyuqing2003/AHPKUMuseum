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
import Typography from '@material-ui/core/Typography';
//@ts-ignore
import one from "../images/subpage/schoolview/one.webp"
//@ts-ignore
import two from "../images/subpage/schoolview/two.webp"
//@ts-ignore
import three from "../images/subpage/schoolview/three.webp"
//@ts-ignore
import four from "../images/subpage/schoolview/four.webp"
//@ts-ignore
import five from "../images/subpage/schoolview/five.webp"
//@ts-ignore
import six from "../images/subpage/schoolview/six.webp"
//@ts-ignore
import seven from "../images/subpage/schoolview/seven.webp"
//@ts-ignore
import eight from "../images/subpage/schoolview/eight.webp"
//@ts-ignore
import nine from "../images/subpage/schoolview/nine.webp"
//@ts-ignore
import ten from "../images/subpage/schoolview/ten.webp"
//@ts-ignore
import eleven from "../images/subpage/schoolview/eleven.webp"
//@ts-ignore
import twelve from "../images/subpage/schoolview/twelve.webp"
//@ts-ignore
import thirteen from "../images/subpage/schoolview/thirteen.webp"
//@ts-ignore
import fourteen from "../images/subpage/schoolview/fourteen.webp"
//@ts-ignore
import fifteen from "../images/subpage/schoolview/fifteen.webp"

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format 1x,
  ${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`;
}

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
            <Typography variant = 'h4'>
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
                <ImageListItemBar title={t(item.title)} subtitle={t(item.author)}></ImageListItemBar>
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
                <ImageListItemBar title={t(item.title)} subtitle={t(item.author)}></ImageListItemBar>
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