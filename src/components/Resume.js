import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "var(--theme-forest)",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid var(--theme-grey)",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid var(--theme-grey)",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 1px)",
      borderStyle: "solid",
      borderColor:
        "var(--theme-coral) var(--theme-coral) transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "var(--theme-grey)",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor:
          "transparent transparent var(--theme-coral) var(--theme-coral)",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.5rem",
    background: "var(--theme-coral)",
    color: "white",
    lineHeight: "1",
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      ":nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "var(--theme-coral)",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Work Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Intern
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "var(--theme-coral)" }}
            >
              Zymo Research
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "var(--theme-grey)" }}
            >
              • Assisted quality control with racking, labeling, and capping
              tubes of buffers and solutions • Trained 3 new employees the
              protocols in assembly • Assembled thousands of DNA/RNA kits with a
              team of 8 people by aliquoting buffers and categorizing
              spin-columns
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019 - Present
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Tour Guide
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "var(--theme-coral)" }}
            >
              Harvey Mudd College
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "var(--theme-grey)" }}
            >
              • Lead prospective students and their families through academic
              and residential parts of campus • Advise students about the
              college application process
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020 - Present
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Computer Science Grader and Tutor
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "var(--theme-coral)" }}
            >
              Harvey Mudd College
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "var(--theme-grey)" }}
            >
              • Assist in grading and tutoring freshman in their introductory
              computer science course
            </Typography>
          </Box>
          {/* <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              react | redux
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "var(--theme-coral)" }}
            >
              company name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "var(--theme-grey)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018-2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              mern stack
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "var(--theme-coral)" }}
            >
              company name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "var(--theme-grey)" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default Resume;
