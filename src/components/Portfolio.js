import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg";

import SusCompImg from "../images/suslogo.svg";
import CovidImg from "../images/covidlogo.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={SusCompImg}
                style={{ objectFit: "contain", backgroundColor: "#24a133" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Sustainability Competition Progressive Web App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Working with 4 other Mudders over 10 weeks over the Summer of
                  2020, we develeped a PWA for Harvey Mudd's Sustainability
                  Clubs to hold dorm competitions to foster eco-friendly habits
                  on our campus. We used React JS, Firebase, and Material UI in
                  our project. I worked mostly on frontend!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location =
                    "https://github.com/2020summerstartup/sustainability";
                  return null;
                }}
              >
                Github Repo
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location =
                    "http://sustainability-competition.netlify.app/";
                  return null;
                }}
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={CovidImg}
                style={{ objectFit: "contain", backgroundColor: "#ec6c70" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  COVID-19 Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  During this COVID-19 crisis, I created this personal project
                  following a Youtube Tutorial. In this React JS Application, I
                  used an API to fetch data and presents the data with numbers
                  and charts/graphs.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location =
                    "https://github.com/amy-qian8/Covid19-Tracker";
                  return null;
                }}
              >
                Github Repo
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location = "https://my-covid19-tracker.netlify.app/";
                  return null;
                }}
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location =
                    "https://github.com/2020summerstartup/sustainability";
                  return null;
                }}
              >
                Github Repo
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location =
                    "http://sustainability-competition.netlify.app/";
                  return null;
                }}
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location =
                    "https://github.com/2020summerstartup/sustainability";
                  return null;
                }}
              >
                Github Repo
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location =
                    "http://sustainability-competition.netlify.app/";
                  return null;
                }}
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
