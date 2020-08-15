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

import SusCompImg from "../images/suslogo.svg";
import CovidImg from "../images/covidlogo.png";
// import AvatarImg from "../avatar.png";
import myinitialslogoImg from "../images/myinitialslogo.svg";
import SolidworksImg from "../images/solidworks.png";
import MuddSubImg from "../images/muddsub.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "var(--theme-bg)",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  projectTitle: {
    fontWeight: "bold",
  },
  projectDescription: {
    fontWeight: "bold",
  },
});

const Projects = () => {
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
                style={{ objectFit: "contain", backgroundColor: "#c0f1c5" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.projectTitle}
                >
                  Sustainability Competition Progressive Web App
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.projectDescription}
                >
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
                  window.location = "http://ecobud.app/";
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
                style={{ objectFit: "contain", backgroundColor: "#f7c3c4" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.projectTitle}
                >
                  COVID-19 Tracker
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.projectDescription}
                >
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
                image={myinitialslogoImg}
                style={{
                  objectFit: "contain",
                  backgroundColor: "#c09bb8",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.projectTitle}
                >
                  My Portfolio
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.projectDescription}
                >
                  I created this website, my portfolio with React JS and
                  Material UI. Using my skills I've learned from create the PWA,
                  I wanted to showcase my experiences and projects on a website!
                  Check it out on mobile too, it's responsive!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location = "https://github.com/amy-qian8/Portfolio";
                  return null;
                }}
              >
                Github Repo
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location = "https://myportfolio-7f381.web.app/";
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
                image={MuddSubImg}
                style={{ objectFit: "contain", backgroundColor: "#f1cb69" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.projectTitle}
                >
                  MuddSub Robotics Club
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.projectDescription}
                >
                  My partner and I are currently designing a gripper to pick up
                  game pieces in the underwater robotics competition hosted by
                  RoboSub.
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
                Solidworks
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

        {/* Project 5 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 5"
                height="140"
                image={SolidworksImg}
                style={{
                  objectFit: "contain",
                  backgroundColor: "#ADB2D3",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.projectTitle}
                >
                  SolidWorks Personal Projects
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.projectDescription}
                >
                  Wanting to gain more practice with Solidworks this summer, I
                  followed Youtube tutorials on smaller projects like a pushpin,
                  spiral staircase, and a volleyball. Solidworks is such a great
                  design tool and I'm excited to get more familiar with it!
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
                Solidworks
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

export default Projects;
