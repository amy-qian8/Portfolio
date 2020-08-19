import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";

// imports for gridlist
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import EcoBudScreenshotData, {
  GripperScreenshotData,
  SolidworksScreenshotData,
} from "./ScreenshotData";
import styles from "./Projects.module.css";

import SusCompImg from "../images/suslogo.svg";
import CovidImg from "../images/covidlogo.png";
// import AvatarImg from "../avatar.png";
import myinitialslogoImg from "../images/myinitialslogo.svg";
import SolidworksImg from "../images/solidworks.png";
import MuddSubImg from "../images/muddsub.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "var(--theme-bg)",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 450,
    margin: "5rem auto",
  },
  projectTitle: {
    fontWeight: "bold",
  },
  projectDescription: {
    fontWeight: "bold",
  },
  button: {
    color: "black",
    fontWeight: "bold",
  },
  //styles for gridlist of app store screenshots of EcoBud
  screenshotWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "transparent",
    borderRadius: "5px",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  screenshotImg: {
    height: "inherit",
    width: "inherit",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center" style={{ padding: "0 5px" }}>
          {/* Project 1 */}
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={6}>
              <Card
                className={classes.cardContainer}
                style={{ maxWidth: "800px" }}
              >
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
                    EcoBud is a progressive web app that supports college dorm
                    sustainability competitions. Our goal is to allow college
                    students to develop environmentally friendly habits while
                    providing motivation through competing against friends and
                    real-life rewards.
                    <br />
                    <br />
                    Working with 4 other Mudders over 10 weeks over the Summer
                    of 2020, we used React JS, Firebase, and Material UI in our
                    project. I worked mostly on frontend, focusing on UI/UX
                    design. Below are some screenshots of the main features of
                    EcoBud.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    className={classes.button}
                    onClick={() => window.open("http://ecobud.app/")}
                  >
                    Live Demo
                  </Button>
                  <Button
                    size="small"
                    className={classes.button}
                    onClick={() =>
                      window.open(
                        "https://github.com/2020summerstartup/sustainability"
                      )
                    }
                  >
                    Github Repo
                  </Button>
                  <Button
                    size="small"
                    className={classes.button}
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1T3XSYBylfWAzB2Ok8hNUsBUSm7043s22/view"
                      )
                    }
                  >
                    Poster
                  </Button>
                  <Button
                    size="small"
                    className={classes.button}
                    onClick={() =>
                      window.open("https://www.linkedin.com/company/hmcecobud")
                    }
                  >
                    LinkedIn
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* GridList for AppStore Screenshots of EcoBud */}
            <Grid item xs={11} sm={8}>
              <div
                className={`${classes.screenshotWrapper} ${styles.screenshotWrapper}`}
              >
                <GridList
                  className={`${classes.gridList} ${styles.gridList}`}
                  cols={2}
                  cellHeight="500"
                >
                  {EcoBudScreenshotData.map((screenshot) => (
                    <GridListTile
                      key={screenshot.title}
                      style={{ width: "auto" }}
                    >
                      <img
                        src={screenshot.img}
                        alt={screenshot.title}
                        className={classes.screenshotImg}
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            </Grid>
          </Grid>

          {/* Project 2 */}
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={6}>
              <Card
                className={classes.cardContainer}
                style={{ maxWidth: "800px" }}
              >
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
                    MuddSub Robotics competes in the RoboSub competition. The
                    goal is for an Autonomous Underwater Vehicle (AUV) to
                    demonstrate its autonomy by completing underwater tasks like
                    travelling through gates and shooting a torpedo through a
                    hoop.
                    <br />
                    <br />
                    My partner and I are currently designing a gripper to pick
                    up game pieces in the underwater robotics competition hosted
                    by RoboSub.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    className={classes.button}
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/drive/folders/19WcNUWH8luIgR2jFo6X-WEAmqrIIspXJ?usp=sharing"
                      )
                    }
                  >
                    Solidworks
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* GridList for Screenshots of Gripper */}
            <Grid item xs={11} sm={8}>
              <div className={classes.screenshotWrapper}>
                <GridList
                  className={`${classes.gridList} ${styles.gridList}`}
                  cols={2}
                  cellHeight="400"
                >
                  {GripperScreenshotData.map((screenshot) => (
                    <GridListTile
                      key={screenshot.title}
                      style={{ width: "auto" }}
                    >
                      <img
                        src={screenshot.img}
                        alt={screenshot.title}
                        className={classes.screenshotImg}
                      />
                      <GridListTileBar
                        title={screenshot.title}
                        subtitle={<span></span>}
                        classes={{
                          root: classes.titleBar,
                        }}
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            </Grid>
          </Grid>

          {/* Project 3 */}
          <Grid container justify="center">
            <Grid item xs={12} sm={8} md={6}>
              <Card
                className={classes.cardContainer}
                style={{ maxWidth: "800px" }}
              >
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
                    Wanting to gain more practice with Solidworks this summer,
                    I'm following Youtube tutorials on Solidworks projects
                    including the iPhoneX, a house, and a hammer. Solidworks is
                    such a great design tool and I'm enjoying learning about all
                    its features and tools that aren't taught in my classes!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    className={classes.button}
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/drive/folders/1gDXtD652sJ4qQw3xfLYgaC_JatHPmPPG?usp=sharing"
                      )
                    }
                  >
                    Solidworks
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* GridList for Screenshots for Solidworks Personal Projects */}
            <Grid item xs={11} sm={8}>
              <div className={classes.screenshotWrapper}>
                <GridList
                  className={`${classes.gridList} ${styles.gridList}`}
                  cols={2}
                  cellHeight="500"
                >
                  {SolidworksScreenshotData.map((screenshot) => (
                    <GridListTile
                      key={screenshot.title}
                      style={{ width: "auto" }}
                    >
                      <img
                        src={screenshot.img}
                        alt={screenshot.title}
                        className={classes.screenshotImg}
                      />
                      <GridListTileBar
                        title={screenshot.title}
                        subtitle={
                          <span style={{ whiteSpace: "normal" }}>
                            {screenshot.description}
                          </span>
                        }
                        classes={{
                          root: classes.titleBar,
                        }}
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            </Grid>
          </Grid>

          {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
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
                  used an API to fetch data and presents the data with numbers,
                  line charts, and bar graphs.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  className={classes.button}
                  onClick={() =>
                    window.open("https://github.com/amy-qian8/Covid19-Tracker")
                  }
                >
                  Github Repo
                </Button>
                <Button
                  size="small"
                  className={classes.button}
                  onClick={() =>
                    window.open("https://my-covid19-tracker.netlify.app/")
                  }
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Project 5 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
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
                  This website! I utilize React JS, Material UI, HTML and CSS to
                  develop and mantain my online portfolio website. Using my
                  skills I've learned from creating Ecobud, I wanted to showcase
                  my experiences and projects on a website! Check it out on
                  mobile too, it's responsive!
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  className={classes.button}
                  onClick={() =>
                    window.open("https://github.com/amy-qian8/Portfolio")
                  }
                >
                  Github Repo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
