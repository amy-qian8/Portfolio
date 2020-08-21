import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Button, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import styles from "./Organizations.module.css";

import SWEImg from "../images/swe.png";
import ASHMCImg from "../images/ASHMC.png";
import AlfieImg from "../images/AlfieMuddSub.png";
import ApispamImg from "../images/Apispam.jpg";
import IntervarsityImg from "../images/5CIV.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "var(--theme-bg)",
    height: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    margin: "0 auto",
  },
  projectTitle: {
    fontWeight: "bold",
  },
  projectDescription: {
    fontWeight: "bold",
  },
  button: {
    marginTop: "1rem",
    [theme.breakpoints.down('md')]: {
      margin: "1.5rem",
    },
    [theme.breakpoints.down('sm')]: {
      margin: "1.5rem",
      marginTop: 0,
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Organization 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <div className={`${styles.card} ${styles.longTitle}`}>
            <Typography
              variant="h5"
              className={`${styles.title} ${styles.swe}`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              <a
                href="https://swe.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Co-President of <br />
                Society of Women Engineers
              </a>
            </Typography>
            <img
              src={SWEImg}
              alt="Harvey Mudd Society of Women Engineers"
              className={classes.image}
            />
            <Typography
              variant="body2"
              component="p"
              className={styles.description}
            >
              I love SWE because of how we empower women to pursue engineering.
              We coordinate events with companies to host workshops on campus
              (and now virtually) like resume workshops, recruiting information
              sessions, etc. throughout the year, open to all majors and
              genders. We also host events for Mudd students and Engineering
              Professors to get to know each other outside of the classroom.
              <br />
              <br />
              This year, we are helping send 60+ Mudd students to the virtual
              National SWE Conference this year (more than ever before!). Also
              in the spring, we will host WEST Conference for high school girls
              to encourage girls to pursue a STEM major by listening to keynote
              speakers about their experience in the tech industry,
              participating in engaging workshops with Mudd Engineering
              Professors, and learning about what's its like to be a student at
              Mudd. I love leading a club that has such a positive impact!
              <br />
              <br />
              Want to learn more about SWE at Mudd? Click the link to the
              website we created below!
            </Typography>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => window.open("https://hmcswe.weebly.com/")}
              className={classes.button}
            >
              Website
            </Button>
          </div>
        </Grid>

        {/* Organization 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <div className={styles.card}>
            <Typography
              variant="h5"
              className={`${styles.title} ${styles.case}`}
              style={{ backgroundColor: "var(--theme-secondary)" }}
            >
              <a
                href="https://www.hmc.edu/ashmc/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Case Dorm President <br />
                (ASHMC Member)
              </a>
            </Typography>
            <img
              src={ASHMCImg}
              alt="Case Dorm at Harvey Mudd"
              className={classes.image}
            />
            <Typography
              variant="body2"
              component="p"
              className={styles.description}
            >
              Loving my first year and feeling so welcomed by the Case
              upperclassman, especially the Case Dorm Presidents, I decided to
              become one this year! I love being able to foster dorm culture
              among all the Case Dorm residents especially during the pandemic
              with all our events occuring online.
              <br />
              <br />
              The 3 other Case Presidents and I lead dorm meetings and plan dorm
              bonding events with Case Residential Life Proctor and Mentors.
              Some activites we are planning on hosting this year include movie
              nights and homework and tea time.
              <br />
              <br />
              Also, we attend ASHMC Senate Meetings, discussing and voting on
              important topics like budget requests. We always email meeting
              summaries to our residents to make sure to keep them informed
              about important updates and decisions the Senate makes.
            </Typography>
          </div>
        </Grid>

        {/* Organization 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <div className={styles.card}>
            <Typography
              variant="h5"
              className={`${styles.title} ${styles.muddsub}`}
              style={{ backgroundColor: "var(--theme-tertiary)" }}
            >
              <a
                href="https://muddsub.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                MuddSub Robotics
              </a>
            </Typography>
            <img
              src={AlfieImg}
              alt="MuddSub's Underwater Robot name Alfie"
              className={classes.image}
              style={{ padding: "0.75rem 0" }}
            />
            <Typography
              variant="body2"
              component="p"
              className={styles.description}
            >
              MuddSub Robotics competes in the RoboSub competition. The goal is
              for an Autonomous Underwater Vehicle (AUV) to demonstrate its
              autonomy by completing underwater tasks like travelling through
              gates and shooting a torpedo through a hoop.
              <br />
              <br />
              I'm excited MuddSub as part of the mechanical design team and
              learn more about the engineering design process by CADing on
              Solidworks.
              <br />
              <br />
              The upperclassmen mentor me and teach me design skills that aren't
              taught in courses. Plus, it's more motivating to learn from
              solving a real-world challenge than reading a textbook. Checkout
              the gripper that been working on specifically in the "Portfolio"
              tab!
            </Typography>
            <Button
              size="small"
              variant="contained"
              component={Link}
              to="/projects"
              className={classes.button}
              style={{
                backgroundColor: "var(--theme-tertiary)",
                color: "white",
              }}
            >
              Gripper
            </Button>
          </div>
        </Grid>

        {/* Organization 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <div className={`${styles.card} ${styles.longTitle}`}>
            <Typography
              variant="h5"
              className={`${styles.title} ${styles.apispam}`}
              style={{ backgroundColor: "var(--theme-accent)" }}
            >
              <a
                href="https://www.facebook.com/apispam/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Mentor for APISPAM
              </a>
            </Typography>
            <img src={ApispamImg} alt="APISPAM" className={classes.image} />
            <Typography
              variant="body2"
              component="p"
              className={styles.description}
            >
              APISPAM stands for Asian Pacific Islander Sponsor Program at Mudd,
              and is a peer mentoring program for new API students at Harvey
              Mudd College.
              <br />
              <br />
              Last year, I was a sponsee and this year I am a sponsor! I advise
              5 freshmen by helping them adjust to the HMC college experience. I
              also host diversity-focused workshops with an emphasis on issues
              that intersect with Asian Pacific Islander Desi American
              identities.
            </Typography>
          </div>
        </Grid>

        {/* Organization 5 */}
        <Grid item xs={12} sm={8} md={6}>
          <div className={`${styles.card} ${styles.longTitle}`}>
            <Typography
              variant="h5"
              className={`${styles.title} ${styles.intervarsity}`}
              style={{ backgroundColor: "var(--theme-primary)" }}
            >
              <a
                href="http://www.3civ.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                5C InterVarsity Christian Fellowship
              </a>
            </Typography>
            <img
              src={IntervarsityImg}
              alt="5C InterVarsity Christian Fellowship"
              className={classes.image}
            />
            <Typography
              variant="body2"
              component="p"
              className={styles.description}
            >
              Coming to college, I knew I wanted to join a Bible Study Small
              Group! I found my family in Christ through 5CIV at the Claremont
              Colleges. I attend small group Bible study every week to study
              God's word with a wonderful group of friends. Being able to have
              close friends to share our joys and challenges throughout the week
              is crutial in college and beyond!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
