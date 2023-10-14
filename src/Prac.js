import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Prac() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} className='abc'>
        <CardActionArea href='https://aniwatch.to/naruto-677?ref=search'>
          <CardMedia
            component="img"
            height="500"
            image="https://img.flawlessfiles.com/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Naruto
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }} className='abc'>
        <CardActionArea href='https://aniwatch.to/naruto-shippuden-355'>
          <CardMedia
            component="img"
            height="500"
            image="https://img.flawlessfiles.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Naruto Shippuden
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
