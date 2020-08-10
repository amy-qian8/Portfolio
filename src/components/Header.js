import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(18),
    marginBottom: "1rem",
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    color: "var(--theme-primary)",
    textShadow: "2px 2px 3px black",
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
    padding: "0 1rem"
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Amy Qian" />
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
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
