import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  Menu,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  School,
} from "@material-ui/icons";
// import avatar from "../avatar.png";
import myinitialslogoImg from "../images/myinitialslogo.svg";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "var(--theme-tertiary)",
    height: "100%",
  },
  titleBigScreen: {
    color: "white",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  titleSmallScreen: {
    color: "white",
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    marginTop: "2rem",
    width: theme.spacing(13),
    height: theme.spacing(15),
  },
  logo: {
    display: "block",
    margin: "0.5rem auto",
    marginTop: "2rem",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  listItem: {
    color: "white",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Work",
    listPath: "/work",
  },
  {
    listIcon: <Apps />,
    listText: "Projects",
    listPath: "/projects",
  },
  {
    listIcon: <School />,
    listText: "Extracurriculars",
    listPath: "/extracurriculars",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const NavBar = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.logo} src={myinitialslogoImg} alt="Amy Qian" />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button key={key} component={Link} to={listItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
        <ListItem>
          <ListItemIcon></ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar
          position="static"
          style={{ background: "var(--theme-tertiary)" }}
        >
          <Toolbar>
            <IconButton aria-label="menu" onClick={toggleSlider("left", true)}>
              <Menu aria-label="menu" style={{ color: "white" }} />
            </IconButton>

            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                display: "flex",
              }}
            >
              <img
                alt="my initials logo"
                src={myinitialslogoImg}
                style={{ width: "3rem", margin: "0 0.5rem" }}
              />
              <Typography variant="h5" className={classes.titleBigScreen}>
                Amy Qian's Website
              </Typography>
              <Typography variant="h5" className={classes.titleSmallScreen}>
                Amy Qian
              </Typography>
            </Link>

            <MobileRightMenuSlider
              anchor="left"
              open={state.left}
              onClose={toggleSlider("left", false)}
            >
              {sideList("left")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
