import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import MeImg from "../images/me.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(18),
    marginBottom: "1rem",
  },
  profilePic: {
    width: "14rem",
    height: "14rem",
    marginBottom: "1rem",
    border: "5px solid white",
    boxShadow: "2px 2px 3px var(--theme-tertiary)",
    [theme.breakpoints.down("xs")]: {
      width: "12rem",
      height: "12rem"
    }
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px 3px var(--theme-primary)",
  },
  subtitle: {
    color: "var(--theme-bg)",
    textShadow: "2px 2px 3px var(--theme-tertiary)",
    marginBottom: "3rem",
    fontWeight: "bold",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
    padding: "0 1rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
          <Avatar className={classes.profilePic} src={MeImg} alt="Amy Qian" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Amy Qian"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Sophomore at Harvey Mudd College",
            "Engineering Major",
            "Ready to make a positive impact!",
          ]}
          typeSpeed={40}
          backSpeed={20}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
