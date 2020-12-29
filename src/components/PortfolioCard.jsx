import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import olxclone from '../assets/images/olxclone.PNG';
import alquraish from '../assets/images/alquraish.PNG';
import saylaniclone from '../assets/images/saylaniclone.PNG';
import onlineshop from '../assets/images/onlineshop.PNG';
import chatapp from '../assets/images/chatapp.PNG';
import quizapp from '../assets/images/quizapp.PNG';

const data = [
  {
    title: "Olx Clone",
    image: olxclone,
    details: "Using: React,Redux,Firebase",
    visit: "https://my-assignments-e605e.web.app/"
  },
  {
    title: "Al-Quraish Concrete",
    image: alquraish,
    details: "Using: HTML5,CSS3,Bootstrap",
    visit: "https://alquraishconcrete.com/"
  },
  {
    title: "Saylani Clone",
    image: saylaniclone,
    details: "Using: HTML5,CSS3,Bootstrap",
    visit: "https://my-assignments-e605e.web.app/html/Assignment%203/assignment%203.html"
  },
  {
    title: "Online Shop",
    image: onlineshop,
    details: "Using: HTML5,CSS3,Bootstrap",
    visit: "https://my-assignments-e605e.web.app/html/Assignment%204/assignment%204.html"
  },
  {
    title: "Chat App",
    image: chatapp,
    details: "Using: HTML5,CSS3,javaScript",
    visit: "https://my-assignments-e605e.web.app/html/Assignment%2013/assignment%2013.html"
  },
  {
    title: "Quiz App",
    image: quizapp,
    details: "Using: HTML5,CSS3,javaScript",
    visit: "https://my-assignments-e605e.web.app/html/Assignment%2011/assignment%2011.html"
  },
]


const useStyles = makeStyles({
  
  root: {
    marginTop: "6%",
    transition: "transform 1s",
    "- webkit - transition": "transform 1s",
    "-moz-transition": "transform 1s",
    "-ms-transition": "transform 1s",
    width: 280,
    height: 320,
    border: "4px solid #9989ff",
    backgroundColor: "#f0f0f0",
    '&:hover': {
      border: "4px solid #998900",
      transform: "scale(1.1)"
    },
  },
  media: {
    height: 180,
    width: "100%",
    transition: "all 1s ease",
    "- webkit - transition": "all 1s ease",
    "-moz-transition": "all 1s ease",
    "-ms-transition": "all 1s ease",
    objectFit: "contain",
  },
  link: {
    '&:hover': {
      color: "#EF7C8E"
    },
  },
  links: {
    textDecoration: "none",
  },
});

export default function PortfolioCard() {
  const classes = useStyles();
  return (
  <>

  {data.map ((data, index)=> {
    return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6" color="#ffffff">
            <b>{data.title}</b>
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <b>{data.details}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={data.visit} target="_blank" rel="noreferrer" className={classes.links} >
        <Button color="primary">
            <b className={classes.link}>Visit {data.title}</b>
        </Button>
        </a>
      </CardActions>
        </Card>
  )
  })
      }
  </>
  )
 
}

