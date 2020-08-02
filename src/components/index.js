import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanvas: {
    position: "fixed",
    opacity: "0.3",
    overflow: "hidden",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                // color: "var(--theme-primary)",
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 1,
                sync: true,
              },
            },
            opacity: {
              value: 0.9,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opactiy_min: 0.5,
                sync: true,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Home;
