import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Button, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import styles from "./Extra.module.css";

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
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Extracurricular 1 */}
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
              sessions, etc throughout the year, open to all majors and genders.
              We also host events for Mudd students and Engineering Professor to
              get to know each other outside of the classroom.
              <br />
              <br />
              We are helping send 60+ Mudd students to the virtual National SWE
              Conference this year (more than ever before!). Also in the spring,
              we host WEST Conference for high school girls to encourage girls
              to pursue a STEM major by listening to keynote speakers about
              their experience in the tech industry, participating in engaging
              workshops with Mudd Engineering Professors, and learning about
              what's its like to be a student at Mudd. I love leading a club
              that has such a positive impact!
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
              style={{
                marginTop: "1rem",
              }}
            >
              Website
            </Button>
          </div>
        </Grid>

        {/* Extracurricular 2 */}
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
              while we are hosting most events online.
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

        {/* Extracurricular 3 */}
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
              to="/portfolio"
              style={{
                backgroundColor: "var(--theme-tertiary)",
                color: "white",
                marginTop: "1rem",
              }}
            >
              Gripper
            </Button>
          </div>
        </Grid>

        {/* Extracurricular 4 */}
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
              Last year, I was a sponsee and this year I am a sponser! I advise
              5 freshmen by helping them adjust to the HMC college experience. I
              also host diversity-focused worshops with an emphasis on issues
              that intersect with Asian Pacific Islander Desi American
              identities.
            </Typography>
          </div>
        </Grid>

        {/* Extracurricular 5 */}
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

        {/* Extracurricular 1 */}
        {/* <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <Typography variant="h5" className={classes.projectTitle}>
                Co-President of Society of Women Engineers
              </Typography>
            </CardContent>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Extracurricular 1"
                height="140"
                image={
                  "data:image/jpeg;base64,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"
                }
                style={{ objectFit: "contain", backgroundColor: "#5e587b" }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.projectDescription}
                >
                  I love SWE because of how we empower women to pursue
                  engineering. We coordinate events with companies to host
                  workshops on campus (and now virtually) like resume workshops,
                  recruiting information sessions, etc. We help send Mudd
                  student to the National SWE Conference. Also, we host WEST
                  Conference for high school girls to encourage girls to pursue
                  a STEM major. I love leading a club that has such a positive
                  impact!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  window.location = "https://hmcswe.weebly.com/";
                  return null;
                }}
              >
                Website
              </Button>
            </CardActions>
          </Card>
        </Grid> */}

        {/* Extracurricular 2 */}
        {/* <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <Typography variant="h5" className={classes.projectTitle}>
                Case Dorm President
              </Typography>
            </CardContent>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Extracurricular 2"
                height="140"
                image={CaseDormImg}
                style={{ objectFit: "contain", backgroundColor: "#ff83c1" }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.projectDescription}
                >
                  I love being able to foster dorm culture among all the Case
                  Dorm residents especially during the pandemic while we are
                  hosting most events online. We lead dorm meetings and help
                  plan dorm events with Residential Life. Also, we attend ASHMC
                  Senate Meetings, discussing and voting on important topics
                  like budget requests.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid> */}

        {/* Extracurricular 3 */}
        {/* <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <Typography variant="h5" className={classes.projectTitle}>
                APISPAM Sponsor
              </Typography>
            </CardContent>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Extracurricular 3"
                height="140"
                image={
                  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFyAaGRcXGCAgHhsdHSAaHyAeGx0YHSggIBslIR0eITEiJSkrLi4uICAzODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLy8tLTUvLzItLS0vLy8vLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAIDAQj/xABGEAABAwIEBAQDBgQEAgoDAQABAgMRACEEBRIxBkFRYRMicYEykaEHFEKxwdEjUuHwM2Ki8RayFSRDU2NygpLC0oOUozT/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAApEQACAgICAQMEAgMBAAAAAAABAgARAyESMUEEIlETMnGBYfAjkaHB/9oADAMBAAIRAxEAPwD3FZIyo6gPDVYlTZ0/FaI23vtUDENYlkEhaXUjeRCucxFjH6imdxFrjl/yqGkfWh+Ow4KVDsv8wT78q8wTbcUP+MgN0n6/tXVvjhHf6/tShi2/Ma5BqtAxrFJNx7Rx6gcz9f2qa1x0ARJUARIPKqyDd6IrHlR/5RXHGonKbvUsJzjlJ6KPUj+zVn8LtpdwzL0CVoCufP3r5rbTevo77NVastwp6II+SlD9KRkAik6jGnD9CR6R+s15iMGVRBgjn1/KpKBW9VXErDciWNyMpBSBICutqhqQTOlPyMUVNcwmlyYvAMKvUEKzBTf+I2ojqB/Yrphc3w7hCUq8x2BBH9KJxXHwEg6glOrrAn51PiRGLA+Ih/afmLrBY8JQRqC5katUaeUgiJ371XL3FT5JAKbbkzv86sT7U0Erwsfyvcu7J/SkReGUpIIHqekk/tUnfiZtwY1dATBTnEr3Ue39ahu8Tu/2f6USdwqpOx7R+VRXcJBRIiyj+VMuQeRGbAPEHniV2efzr08QPdR7ipLOBJkJTJB2HQJFdXssWm8AjoNxVPqLdSX0NSCM/c56flW6c5Uf5fmalKwoCz5bhKbD1UKktIUnzeEkpHL8UfKJ7VQERCkgJzAnp/q/RNaqzMjp/q/+tEygatYFomIneBEVriErjUphGnsPNHpH0ptROMFjN99rdz+1YG3FLJ1Ksm4gWHMbVpmmDEgpSANM7byTXJIVqNySbb0YCsmDNU8ya3RmqD+KgrrAtYj1/wB6zCMDWbGB3712p3GMycUOtbjEd6Era6Vng2k/nSco3CGBiO9eHEDrQZLPWfnWLQOU/M0OU76cJO41I3IHvUN7OU8pV6f1oMpA1e/OtlKFqa4OMIf9JuHZA+dZULX2NeULMPFZdjiTcbnzfM3H0+tQMSNzv0PbSD9SKmYXFNupDja0qBKVSlUiSNMW6b1wdG1xaBPpKf8Amv8AOs0MqDOSEPLSeRqKjEJ7/KjHETID6+kn8zQ9pArQCKhINyIXEzuflRMoBbbPUfkTQ99A1GiTX+Cj1UPr/Wuc6E7GNm5HUIUfWvoD7I3Jyxn/ACqcH+tR/WqCe+L++gq8vsWf1ZeR/I+sfMIV/wDKgfETINR/TW9aCtxVlmYzK8rKymgnhrmqtzWhqLxxEr7QwNeFnb+IPoj9qTVLQhCp5kRF9iufzFOP2mJ8rEWOpUH2Fvf9KqPFZmnYuCx28Q/lWLIpLT0vS1w7hZeMRJsr/wBprliACppX4SFD5aZ/MUvO5inkr/8Aoa5DHndJJifxExMTEiJsKZcZlWcfMacI42hTiiYSJH+gbe9ef9IMm2o/+0/tSji84IJCtW822mAfyIrgM8AvKx7VYYTdyBzL1cdsUEpdUo2EJM9tSjNqkMY3Dz/iQI30q/8ArSOniIc1LNgNjsNh9aN5XxNh0QpxRg7gBU+8CrLjPmQbKK0YwNsJ0T0SLwYsoTeI5ipeMxWGAP8AGRsev7V2y37QMpbhWtwLE30OHcAHe3LpQ/OOPsI6oJacUZNgWyLm38u9UOOhI/UswJmGHnQRtoH/AMq3VlyjGlMyY5crmmrKsOzCHHlDWqNKdykXiQNjfnttG8l+HMj8SQlSikEHXoPXvEK3P+9SHImgIr5q6lY4jCSAQJHOLx6xtQ/Cs3Pc/rVp5jw/hkvrdhTThURpCFlExBJAbvNzYgg3pVzfKkB5Aw5SrX+ASIIAJI1AeU3PaIpypHgw484fuA3mADtyrXwRG3OmF3IHz+D/AFD965nh/ER/h3n+ZP71EgzSGEXw0Jrm62On1phHD2I/7r/Un96jY3I30JUotkJSCSZTYATO9CjDYisGhO1eqHmFTsPgVrXpQJME7xt61PHDbylTKB6n9hTXFNCBlV7TD/wqv/vE/I1lCHkJYeHwyGkBDaYSAYEz8KvLdRJtNaYgX25/koR9ST6GpTkmRaTqHuq6f9O/eouJEzB+Lb3TAn5H6VKJKw40IRiDJgHb0gUEZxaP5hTH9oLUvA9RPzn9IpRDMVdQCsJZgdSQ+6kmxGwogwQWEkGYWofQGham4qVlqVOHwtWhsHUpUXk2tPp9KLAVORjym75v7D8quX7CXP8AquIT0fn5oQP/AI1VvEGWJZS0pDodSoEagIIIvpUJ3i8iJ6UxfZlxS5hA8lvDKfStSSSFhITpBsNXxEyKS/bcOQE68y/gahZ7mH3fDvPxPhtlUegmfQbntVeYn7UXw4QjBQiLFSjJPMGANJBkfi5G8024HirCYjAnEuqS2yQpDqXSPKdlIV1PQcwRa9MGmcoRsiV9ieO8f4ScQ2pBBlQQABAm2pPOb85jverQ4UzoYzCM4kAJ8RMlIMwoEhQnsQao4Ztgw4GWXAtJUA2SgiQJCZKgPMRHvV18KNss4dthpSToT5gm41KJKj/7iaVGK/dLZkWgVkzO8cplrU234jhUEoQVaQSeqoMAAEm3LrQLhriZ17ELw2IabQ4lGtKmllSSAQCDqSCFAqHUG/Sp/Fzifu6rBSgCpKD+OAQU26gmqw4NzZpOPDigEBLekeE2RqOkJ0HmQANU9QKQvba6gTGCl+Y3/au7pZZP/ikf6F18/wCMbIUVFCoJJkes1dv2j49OKZaSwZUh3UQoaYGhY3XA57UsZVluGOBHk1Op1eKdWylKmCOcJsDtBrlyBTcqMRZAPzKzgKA0d/pvUrDKAbJr3MHNDzgaUAkq6D05ijHA2GGIWvxlBQbSShChI1HonntMVfI1LcniX30O4v8A3krcUW9JFt5GyUj9Kkhbp/7NsjuTR7izBJS54tkgEp2CbW6fOgi8SgoKQtIJEAkinVrUGK6lWIM1YxSwYDbU9NZqUjGLH/YNn/8AIqpOcZI34cthCVCSFBSrwQBJVuTz6VFbwxdEJuJGog2iRIkbTQVgwsTmQqaM9cx4UlSTh2za8PGY+VBk4xpKgpOHgggj+KTcXG4o7xLgmUpBaQlBBmQeRvyFx3qHgeE8S614ydIESkKMFQ7f1p1cEXEZGBqb8N4xzx0lS1QSSRqMbE7TFN2V8SP4QKLbqvhIhRkbWt25UkZHl6316dRbCQCs8wDaBtU3PMCvCqSkKUtDiTGrcEd+9MHINXAyWt1NM4zl15RWtaipRJJnmewonw3mSWXG3FnaNzc+Qi3uaU1LpkyRDSWirRqWfiuJtEASrnvYT9aDsT3Oxp4EsnA5wh5OpsSAYPkMgjkYtUtOK/y/6FftVf4XEraa0YRP8XEuqKdSrICQAowLEXETzJ3iubGY5hg3W/vavEacUETr2JtIKQCOux260mjOIIli/ev8v+hX/wBah8Ruj7o6erZHztzA61tqHVP/AOwv9qg8VL/6mruUfiKvxpO5ubUp6nDuLvCoBxGxMJO3qmtsVxOULSkIR/EkpHmJgLWi40gTKTzrThdYC3FGICOZgdbkbbUNW/8AxMOkomGUmTiCI1KUq4Sb/FvF6Ci42Q7jvgH9baVGJPQEDc9aytcD/hotHlFirVy/mO/rXlTPc6H1rvPUhUdyNMewvURREAbgQPnKf+Wujqug5H/QbfKozyon1J+oV+VxUfMrEXNlDEYpYcUUobhKQDGowCST6nbtQPPMGllY0r1tKEocNp6j1B/SmTOHUIfKkqBUpUqgSQRE8jEgAxUXPMJicUylLDfioRJVEagJBAAMGJ3gXtaqB6behKFP8djuA8oUVOaU6RYedXIX+EWmf0phdBbKQVBQXaQIIsTfe0TXHhpSksjxUgboEiCNJKQFTsQZo1l+DS9IjRp8ylATAG3ue2965mJYgQhQqhie4VwnBr2NZQpZQlsuatY0hZSAU2gAE7bxt3mhysgVglFoKWIJiSLpMkGRa9P2RspDYSApCYg6jdVhB030/PrbnQvO8kccc1o2gCyoIj1NxU6NUIyvb20SseoNuAgrVrSAqVXBiAbDe836Vrj+H3PCZ1L/AIfjl3Sf8wVBI2nlblVkYDg7DKQhboKXh+JKifSUnymB0ilbjHEsYZQZDmrUnT5b6bg+bcpNrDv0o0/YinIpNeIDzVhbjJSPDC0idQ5EXSU+9NOUZyPu50hTYSSCT0B68wZpKw2eMKUElYIOxKdMnoo/7cqduG8K24EtqbCkmSUiRJG1xexijw9vuEGVgx9pitgg9ikOOPYlxsqlTcT5UyIM+w2g79TTdwXhNWGbeKQXfMha+qkKUgkTtq0ztzoacMtpSkDUEoUQALiJsPlaak5RmzTbTiEuISEuKCwTELJJVOrmTJo4iGgyqFAqcuLsN4r4bcGppDOoIK9KVLKokxcwIttekjOWG8K4jEIZToulSUqsqRImUwIPMUz4xt19z7y24nwggpKdU+JBBSQkW5quYt1qFnPDGIxqUpbUhOmVEEmCYAEmJnlRLgZNnUPAjFdbibkOdgYvW6gaFaoSBIST+dpvymYtFH8rxKG3GW0tFkrUpZCgU65myT6GBttQzA5I4xisO1iG/DUVSFWIUEgnyqEg3i29xIotx8T93Q8VedC06DF+u/aJ9qoyqzgfMRGcYy3xDi8mDigp1Ic0mdLh1A9ZmaX82eywuFpKA3JAUpLY0g+o5A2NoqVmfE8YVWn41tiD0Kh+kmtOGMrbVhR4iG1F5M6lG8GOYuNIM1XIq4wBJ4mfISZLY4eQv+G6+hbQtGsCbW2g9Dua0z7hvBYZsLSgJIuFgkmdxF71F4Www1KZcTr8B0pKhZJSJKTa+qbg9t6GceY0Hwm0WCSSkTsO/ckm/aiqUIWfzUB43EreIJE9BYTpjp60/wCV5s2EIlvQRAKFfFIsLHf2+lQ88wbZy+NbYLQkEBXmIAkAxfVJHK8e4/Js6xC1NoW2HUny+USvax0i5vzAqfEsAVHUflwJDHuCMPmLy8atLQAW45pCeQIISJM2gCSe1MXFfD2IZYDq8QHk2SsTGlRJhUH8N49+9Dczf+7Y9pehSVJIJC0wbggW3AvzvRzi/P2zhi0QyS6ISlAhQuDqIG0Rz+tUumFCSq1JJiMMrdPjeQjwAS5JFon5zE2p6wP2bYUsha8StTxGyBZKiLCYJ+opb4Lx7qnnmynxNYJXPyOrlF9qszIcyMBtWtCkiAnSRqA2VcbEdfraGawIqAMYv5NljiMEh10Fa2lONxtAKgJHWSgHvIqNnbpxIZYahLrjurUomEBsA6vWSI60bzTMtaFseMhGo7WJN5vf8qT8TjE4V9gOhKkpQoGJgeIoGfbSPnUe2lLHGpxz7KMXgyHxiHFgKjxAtR81rKBJ3PI25Uw55moewLLgP+IpM9lAKKge4KYornWZpbwrq/4SdQ1J2Eq5b73260g4PHhWCba/Eh1RJ6yCZ/1Ee1ENyBisgVhULZAFeG+UglRTAgA3g9bc64u5U74oXpSQG0JHlIMpbSk/Dy1A7ctq8yzEKbwrqgYlRE+yeY29a1Rmbv3gtJWVJDmiNaCbGD8SSd5NcL8RW7jc2sJAEgQIiD+1ZXozNtHlLSiRzBH7VlLOuFnSTIkbkfMWPp+tBM4xBUhcTBHyJAEVq/xEwokIcBVa99IN7aj5T2ig+Z40ABBMT77dq8/IW5BRPS9PjHEu068K5XqbXrbSok2CxBttB3FO+QZF4APm3EaUiBe9xzoRwk8ShKSBJuYk95vf2O1NCXtMesVqPvPumUsRdSFmWRBZK0QNXxA7WESKrr7TcUcOpnBoCUjww4tSZ85UpQA9Egctyewq3FrGmkbjvKW8QttS7lE7m0Ki0C4EifnTLxQ3FPJwFlVsZk42QUqIjaDt6VdvAHERxeG1LutCtKlRAPMe8G/z50osZG2gygNJB/8ADk8/xyR7dT2gtvDmGSzhEITF9StSbXWoquOomPaj9RW6nNiZO4P474qdw6FJbKpXZKgkQn3mSY2tFqrHK2HMViEIJKhOpUm5AuY6k/rTn9orMMSmVErG1+t7D296RME87g32nVIUgm4CrEpNpg3A6SLxVE2hruT1zF9Sy+IckZfY0owxbWU+VeiCkjmqLgdjypaYxoVlqHVOeG/hnD4bg38RMwJFyFCBFEcy4rQlpTiVqKyI0nVueRkR8iZ3pWyXBF7AYpPNs+LveQJNp5gEVLEp47+ZozlQ2viPCPtJwi0BbgdS4QNSAnUJ56VTGnpMUoYdCsdiHnQNCFrkD0GkDf4ogk9aV8Fg3XTpabWs9EJJP0qweE2XcM14L7GlevUAveCNx6kER2psoGNfb3J4ScrAN1I/BAGFzEYV5f8ADdkagbBcEpVeY2KfcdKs3NcIGBqbMpkTpTJ3AmEm+42qoOMc2R95ZKUJSppepRTvEpIB2vY2/KauPCvIThy6rzNhBUFCZUnTMibgkCoZ0+pw5Dvv9S65CikK3R0PzO72U4Z0MnENpV4a5STIAWARO/0PbpQbHcENrcSp5ZcSiSlB+E9CqTeOm1CXcvbxCScdrLpIVBJCEa7hCIt5RYnmZNZwY6pvEYvDoWSyyEqQFKV5dWryjlFpimxAHrxJOGUb8xP+0TKQwtBR8CiRHQiNql8D4V84V5xC9ISSEakyLxMR0PWR2rv9qslphYMp1EH1j+hrjkeehvAqZCgFaTEC5n8zWpQXSTxin1BvB7Z8ZZUoyomVXvcySe9Z9ozCUPtBAtoJI9xc9r86il4DDBcEOIVpCuxkn++5o9lZRjXvGVCg1h0ApVYFepy5kiQACYJ5iuyWh5HqcE5e0RYxeNWvCpR45UEKlaCmJ6HVF46e/KrF+yfDt/dvvCEjxg6ptZncBJUm0xPm5b26UO40ytKsMtwNpSpoAhaYEgxKD/XtS/8AZ3nRw+JSyVEIU5qI/wAwSoftT4HFXJ50IajAuYJeQ+pzEJhzXrUFg3Jvsd08ulooyjIcTiE+KtKSY1AD4o/lAFh6TRv7Tc+ZxGOwrQu238ZtcqNhPQaR86JZc4nSkpLyf4nTYQbG0R7c6nmyFWFSuDEHU3IH2XZcyvWopCjJ1hSJUlSegHmi42G4V2oz9p2L0JbSzKXXlFF0kEIAJOlRG2wPMA0rcG5ioZjifu8S4pQR0MEyR1PMDbrtTdxLgFAIxDq0KdbSZHXVaPXny7Act5yf4Cf4mTheRRerisOFWV4VRCv42nVN7qAnSAdgaFo4axWNZZcaT4hJKSCQCkJUBrM3IGoTuaZsNjEIaDzyEpQlZO1ojlBur2513+ybiBpIeaUpKXFLKkoUfwmTCeRIJMjewrzkYnZM051C1UF5VkGH1w+lRIWW2kAHSNJ0kkjdRIPbatOIeFmglD+EM6nA2pvoVGLR33Bo1inH2sSPMW2yrXdIA8xOxgpkHcGmLJgVuIQohwBxTiVAbEXA7kSbnpSu5HUYKvC5WOEvhkJ/ncixg3VHvUTL/NjNSoGp1SgFNxNyqxTuecmjWbMeE8lv+TEqJtaErUqewigmS4k6pAG26FR80m596op9sie5KznE/wAZdhuPxAchyN6yhmOfBcUSUzPNN/yrKIXUUmccM8CgprfIsYUYhokkgHRBPJVo7CTNDmXINdXkHUCASCQYFT4jqaixIEsLMVaUKBBCo3O0gjZQ5np60SyLMVrKUKWSmLSZ6czehuBKHQp1SiJEFOqUnlPmI+R2NDMpxqm1dwT7jmKzX/yaigrjLLdxaW2ypZASOZpD4h4mLx0ITpbm5/ER17Vpx5mZ0sBJ8qtSvX4QPzNKyMWDavT9NhV1szzMrlWoQ0nO3W0qS6hOpIjxI8xEesXHPvUfh/M3WkyFnzGSCbX5RUHEYlx1KGY1wfL1sJj0G9R8Y8tshJSQbSCINxb6VTBhGKwanZspyUZYmBzFp9adYki5SdjHbmJqteK3/Gxjh2GvSOwFqLcP4spdCjsbfMf0FQ82yZxbqltJUvUoyBuD+3Os7oEzmuiI98sQP8yXxDlX/VULAOpEauhBsD610+zTEaHnD2gp/mSZn5WP+9NWPw6ncGRp0rW1BSY+LePmKS8gwjjLjalJKVOL8NKTvcGZHrppWFIwECNbgmXtwthGcNhwhttLcgKVA+JRE3O/OB0FRuJ8ibxCBfSoDcCbdI7bj3rpmjhbSrlCPyFaO5qjSPMJsdxa9RVbG5TkQbEqDOfs/f1oSyPE1rgKNonVJV0A0n5dbUzZnn6cqwacCVjEvpSRMQlCSTAVckkbDbYT3Y8jxrLmId0upUtCQdBV5oJuoSY0jYgbTVf/AGqZAW3VYpBJQu6idgrypAH/AJrmirFiFaAitiMozXUEwpLgWAdCoJOoSBBvInsPnRLhzCNoQ46pBDrxClpVHlgQE+3a1Qcn4RZcaZdDjg/hpIFugN+sfnTLi8EltseHsLG82HOT0qeIAWJbM5apVnH2K1rGGTqUoebSNpPYbmL/ALVrwa6n70WlpSklJSJTI1Ad7ybnnRLKsPpxOIfUpsKW4tHmN0hHljpciPlQzibU1jMLiE6QtUEhCpHlIEz3SYquPLRKj+mK2IhQ/wDahxrhN3EMrQgQEu7qICRa9+fLaTEUsZS8rDYp1gwtHwqIMSW5gpMevKrGfz5alKwyClK0ym/Up1SAN5NveljE8O/dyha0l4rhRKbad9u/rahk9Rz01DUtj9M/Ice5D4uzYlpLKBoLoOoSCdIG0JsAT+RoFjmPAxDbvxAoLnvcRbpIP+9MWc8MqLqXEShLhI1KOrSlIkEgXvtFH+PcJhXsHGHQUOYQAgwYLalAKEncSQsE9O9PgZCNGTzYMt8q1KexIKzq6mmnxsUvClAXCdNzqAJAnnuaAqwhUBpSSRMwJ6Xt60dZxj/heCMKUqWNJV4ZGoWBiRG5gmYE8qdwWqpHGQt3AmT4x1hxK25C07ER3HPsSKtPKsMMdh1KW4uSBqAsUqTCSIPeD3qr0Mr8TSEKkRYA87jbrVm8Anw0vzvBKkHcEaY9iB7e9WYCpIWNxY4wyXwGJ1agVCYm4vBVPptUv7IcCl3EFSgCG4tHMhQB9Pikehrbid1TmDIkSHNKj2T8Mepj+zRr7McqcwoLjidJdIIB5ASIPQyD9Kz4+qj5Nm428QZMHCW1KgjzIVE26Ef3tXbh7CfdwElWpSlAaiIsd4H98q5/aBqDCXEmClYCvRVv+bT86S824hdQttCHFagrWFQNJjSCmdxtzH4hvWv6Iemvcyn1DJa0aEsDN8gZx7UqAQ/pV4bwHmSVJI3FyL7H16VReDbU2txDoIUglJ1JEykwfON7g/Srt4czIFGpxaEiTEqAtsOd7f3aqk4lW0cZi1sKSpC3VKCkGQdXmMpOxkkGosK1KqbozplWVF1pLkqvOy52UR+lZUzJsyQ0w2glE6dW8fF5tj/5qyu5TtSutdSsJjtIgj3qFWUhUHuWDFdiTHMVpVraUUqm8bH1Gx/KnjhnL/vGCCyQHNalJUABeYggQIMdKrhwXqZgn1JEoWUn/KoiflXPj5LFGUhrjPnOHU4AkmFNSCk7XiYPtNCcXljjaPFkECJgz77UOVmLqZhZJO5Jk9NzUxGcgsFpTalHqFRb0Fcv1EoDqUZsT2TozMLioUlRvBBi36gjn0qXhnkOPo1pgaSIsJIj+UDqaDMLtRHJHR4pVE6R9T/tV8zewt5ksAPML4uSM6xSUYhlCQEpSqTA62vR3EqUy+lWvSlwAjoojcT1iKUc1QXnibnl5Rc+nYUTxGZpfw5w7gIWm7ZPNQ5HoSJHvWTifaf9y7MDyX+dR3TigtIUD4ariXUDTI5TP9RS63h0v4wlD2oNJ1KUCSEqPJBgE7TtScnHKKHErUokgaSVEmQQIvyKZHyo9wevw2MS6eUD5An9armsIakMABcXDGB4gxS0ONOYpa0kqQNUKjl8ShqNiBvatMXm7jbaiBqK0lJKr9L8zMxUzKcoSrLw4VpBu7qJACT0J7gAULTmqPKkqOmNSU6YBXaJPOOQPOswY2amqlIE5cLtKRiBM6i2q/8AmGkkdZE1ZeGQnFYNCXkz4llA/wCUlMi1iY+tVO1mSmXsOpZESVKjkF7z+ftVsZXjEpaXqICWzr1E20m5JnYb/KkyWGB+ROBBQ/wZFz7MxhUttN64OlpIABAA3J5gECJvRRWbNhBUVAp0hSVbCN7Dp/ZpC4jzLC4h0JQ+DJi6CkD1Wr9LUDznNnEKLAWC2khJAvEgTBohDqJoqTPcDnqmHXfER4iVKKweck3NwbHf1rlluMOKxjYKQkFYShCR8IKhJvzgfShWMcLbllTCjpIPL16Ga6sY1SXQ40n+IFahAJ+QF7VcIO6inIeiepYvFaFsYpl1cETomImLyehhUdKa8M8h1pJ/TsQfzqt/+IXHwpl9CS6iXEagQCoJB0qSbiRIP0iKgZNxYkDSpYQnfSdUDtbf3NQzelGQ3GOZiBuOec4kJWA2FEXlSXB5CBI8pHw7852sZtCYfUWMa2ZM4dark2DYkR1/p7UvB3F43xFYc6UJIAghOrqZF5n2oPmbGLacS04p1KliI1GFhXcGFDqO9HB6dcZoHc0J6orjZXBN9GcsatzDvKSlSkgwqAbXAIkbH36VPwXFeIRJ1BRItqAsdptEwLAGQBYQK14kZUtnDvFPmAKF+20/Wh+V5O9iAS2glIkTtJ6Cd61qy8bMxODyoRsyHHqcKsQ6QSYlUAWQNI2EcjXTI8yW5C0nSpRWFHp5dX5J/OhGAcKsMrD6dC0yF8oEnefxTaijGDDRfSmykkH1TfSr1CVqB6+1Soglj5liQygDwIe4bwaVtDUAfPqT6g/0pkxOatjEJbV+BIJgTc3j1iD/AOoUv5TivBYCokpTYdVHYUs5LxFh0PA4hxSpXK1JTI3k+3K3Ku3XtiDjZ5Rj4p+0ND5dwaGdLavIXVm8ggghKbC4EEk+lDHctTpKpJ8u08+439DQHil1rEY3EFpQU2qFII5gpTO4/mJoExneJEN6yROm6Uk7xuRNUPK9HcmKrruPPCYQ0oKdUEN6vMo8kjf9o5mBQDOcU2tx5bY0oUtSkJNtKSowm1hA5HbapWfYvRg20bKcV76U3J+eml9teoBGqCeon5ikxLomUzt7gPiTM4WoOlIUsaUoT/8A50r+FCR8RudqytMcSp1xSUq0qWojTiQkXJPwkSPSvarM8BEV1aw5VfYTE9T0SOZqQ0wlF3BKuTc/88bDtv6Vt96VOryk+lgOgHIVMt8S4W+5481pA2Hb9zzP0qEFb1NcfKt425VCUTP/AKbe1FCfMGUDxOShMDvVqZRgsIlqzYlIkwJJNh5t1W6R7VXWT4J11zQ00XFRtGw6k7D1NP8Ag8yWdKVLShSRCvhE7blQv7EGo+pJNCW9Ko3cXsVkaDiHWj/DC0hxo/ymSIvB0npHSuuW8NusoWo6CpW0Enad7QN6nqytWYYkoQ6JQmylTBj0vue9DM9yTHYZJD0+EbSlWpJHTVAI6XAmuHJhVzrRGuvmGfs7a0tKeCAtalqBNrCQIJnbc2mpfHmV+Kw48UpStqSFJiSBuDee9wIpQ4Vz1DQUw4SlClEhQEgTG4jtR7ibNmxhV+DKtadBJGkCbWBuTc1MowzX/MqGQ4P1EvMmbJdA8jkkdlCyk/O47EUxoy54YFSEpRpKdavMdcwCQRETEUsta/D2JRv1HlMz2ufrU7B5utLbydUlxWq/MkKCve6SPStbg0KmJCtm/M74HN1PtsYVz4Eq8xAgltAkJJHL9hTNnWX4ZxkJZYUFFBUhQQRG+5JmJ3FIuXYheFdSuFJWk3EQRIjY9jN+1OmY8QBvD6kvayU6QkHeeoiw5mZNQyqQ449TRhKnGeXcR8vaDz6EFWkLMTExTRxSlxCWcElzUAkFaoiUz5NVztBPsKUsISgpcA+BQPyIo7h85P3xbitK9flAV8O0J9qrkB5WPA/7I4itUfJnTNcqQltK2XUrKUklJUJVe5T1idqXwuTb8Qv60+4/GtNtpUppBCUkWPwm5FhsqTGm/WaSMme0OIUYiefe00MTEobjZkVXAGpwLxFiJIO9Pv2d5a8hPipSg+KDBJ8wA5dpP6Uo5k2pwKd8PSkQQeZCjCTHcgmiHC+dpalDgkD4TE26RI9QeUmuygtj1+52EquTZ/EO8ZeR3C4lSAhxS9KkjmkQJ+RIpCzHClp1bZ/CogenL6QaI53misS6NIhCSQ2mZNzuSeZP6VtnrCyS67ZU6NBEKGnmQRVMYKgXEykMSRGvgF4BlseJplZBHbUZPpEfSuv2gr/h4capcDqhquDABHMz0+lLXBCHVOqQ2krBElO+3OB+lcOIsQ47jNKvKUqCEp5J2/W5qIxn6p/3LHIDiA/UKZ24lvBram8pKL36H2ifnTRlAaQ2QhxSQludpSk2PLfry33pK4pwrwCVr86THnTOnawki3ofrUjI89ew+GJSkKiQkmbdJgwQOQNK2M8RvzHD8XIYVqSOMsUlvFu6PN4uGCVEWBUq2qCSfhH5Vpwhmyi6VOrkgAEneLx6xc0DweEcxTiiVguK80rm52iw+VQ8XhlsrUhYKVDcdj+Yq/EEcfMy/UpuQjtxRnzbrTWHwy0uFyyygKTF7iFgEEgekTc1Hdy7Dqw8hOlYkAxeR3FLOGSvDutKWhSD8QlJBgyJg8v2qwsDjlFnUtTK2wsKX4kQRBHz26RUsmiKl8NMDcRcnxSS+gLISCdJPSf3Nqa3MnSspaQgLcS6T4gj4SAd+Zk+0GkTMVI8ZwtfBrJT6Tanjg1hyNYVCVdzJBmeffftT5RXui4DdrJeaYFKMQh1wFTaGgEpiROpUm9uX5dqKDLcJiwUAaHynUhWmD2MTcVx4hxo8qUqAO0WvPK9T8qxr2tlwIb0hPhkhJB3MC9yfpWbkbuaSoIMqrGYB5Di0LbVqSopVAJEgwYMXFZTzmPEo8VyWcN8Z/xEHXEmNUqF4jlWVpDt8TFwT5iFp5k3NYDWgTWFddHudhW+XYdTj7Tad1K0+nU+wk+1dMpaC1HUQABN+fpTNwLl4Xj3FCChDZIPQrhI/NVKWqxGI0DLUyfAMNN6GU6RuequpUdyr+nKk/jThdS3FPtGAoDUIm4tPuAP6UyYbGeGtvWYSolJ9SLT729wedijjwAvytUQJ1kGKfA2VeElThBlXlE7kWk+5t7UR4mh3DvpVdCUKJHMlIMAeioNDuIcy8NPiJlZT5igL0iBExY3vtb1HPnkLgfwwLakqUjVrQDcSTuOYgi/Oou3CmPzCd3KbwzWpaQbSoCek0YznCOJagmUCPeaZRwmlT/iIJCNUpQLwRuDa0Gm53hJKh4a/MCPKlVt5m/KJ5V6OSgoczJjeyyiVTw4+tKjEFI3B5zH7Cnvgfhxh3FHEKRCEiyAYHifzDnAB7Xg0BzfLm2HG2ZCClXn0Emy4i5Jvvv1py4fzMl9ptsQ0lolducpAjtf3pcmQBa+ZoX7QIvca8LjzltEq8Yla77HTA6ADVJO4AjkaDcT8KFtkOtKU41E3BlMbhUWkbVdrmHSdQgQpMgcpFj9NNIf2gBWGwpbbVd1SQe8iCR0kAfKkBOoutyB9jnD4WlzEOJ1DVobSdrbq+ZAHS9T83+yZJc1MueGncJIKr7xM2E2phyHC/dMG02LFCPN3UfMrfqSadG1BQ1JMg/nSB7YkQ1QEpTP+AMcpu6kLSLgBSiZ9FARUbhL7N8UvEIOKb0MJMq8wkxNhHePnV1Y9JCZGne8iZ7AC8zFBMBnyXY0OoUnVpIAIKYkkKCgCDYWMG/K00RiBQit7jZirxxwWtbTjeEE+cLSnqm8pBNrKEieRpQyP7OsWV6n2/CQmd1AqJi0BJNgYN4q68XiQnQuRElJv1E/mPrXPE49sCSYv7melcTQIEIANEz56zDhvFMOFssOEgTqQkqB7hSRt+VWhxRw67istYW4EpxTaUl23xCIMxbWLH58jRQ5iA4ptLbiWg34iXELkCN0rsNJtYSZ7QaPZerxW9O0pg9iRThie4AvcReCuCn8MU4jU2Cq2mZsfLfvebUAznhGHXCFwfFlJMlUEklRjp9bG1WBleTrU0HHHlkpkadrpVFyPTalnilpTJD0rBHiKCdXlUlIEJN+t+tFavc0OoYKqb/AhrCZWy7gV4VS0ArbAKhclSfxD0UJEDl2pWx+TFvLw3p1OaRISJlXa21zeujjymsPKVELWpCZm5lQm/pNNGa4NOkMifKITHMRzNYvUP8AbR8zs9l781Eb7OcocQ6XlgpiUC9idyD8vnUniHLA5j8OtYBAUQodYukek1IwxcwbmlDaD4oUshRNlAhIggWETyO5ofnnEuvENNpYS2tpcqWHCvVKbpgoSIvPtSsXdyy/H/kiq6FjzG7NcoZxBCnGwSNlc49enbuaVc14RsQlQCRsdzHSnHKcR4jKFSJi4/btULN1lIKgUwkySswABfcmkFqAAdy6gblaucJvA/hInnPryvFMHB6nEL+7rsmCQZ2vsDG2+/b0pkynGNuJJdU2gA81DoDNz0IobxO5hmVNO4d5DigqCACCAed9xuPlVR6gseDDcQKF2sNOZc2ULbbA8RaVlBVKjqIMG8xc2iO1QOHcvf8AFRAJSPMdRsCR3/SjWGZCg3iATFikE2SRHKd+/foa34dcIbUpKblRIJBPlGwAEXMH6VQjkRcKmgY1NcK4dY1OklZuogwPYRyFu+9ZQZvMsUoAp8OP8yFEzzug6SJmCOUVlXDAaqRKH5lAGsSmuYrolJNcYZuIonkfEj+EKiwUjVGoKSFBUTEzfmdiN6H6LVHoAAxiSJYys8exmEWClvXuChJEGZt5jUttbzmHLQWUulNjPa078+xpG4fzjwFAEwkmn3CPGymkIUggkwYV3g9L9qzNatuWChl1IPELYDaWx+EanFdVckDtNz6UvjDBpTZkhZJNjBG3S9Fc+zttM+Inw1N3QyblXRZIkG8gCbQT0NJAzRa30uK5K27U4xs3XUXmqVfccMrW6y8oDUQVBerrqtvtqtsd6eMRxCohCdDiXFfCLXI7GaVMZjg0wXm29QIAWkLUm3UFJ5E8waEYbiRpAUtGGSXCR5lqB2Fp/hg+4IJ5k02O8i76EnkRMbHXcm8UsuJxDIdV/m0iwETFgO3f9+C+InsI+C0EHW3BDiZESOhBFcclxbmKfU+4EpQ2IShAIQCd4BJvH51A+9h7H6tOtKNxMSE73g2JtRIt/wACNdYr+TLCyjid7EoSFBsCYOkEXMjckwJNecX5cUshb6kgtSpshQOpXmhIH4j5oiKVsFiR4qwlAbSRBSDPvfnUfI2ypa1LOpZlJURJA7dBaAKCAmxBlIADAdwsn7QnXGyHcONQ3WhWmf8A0KBj2PypqynipQQ2oJKtaEqMcpA36Gq+S0lvEFJuhYi/UU55ClIbKSUICVaQqbkQCLbzBj2pMgCtQEKi0DRkcztTiYCI9b1U+ZNO47FvNpUENh0+WITPwlSgN1GNzMCwtVkPuJQAVEIQTGpZjUfyHpNKDzQSXShwXcKpBixgjbnF4olyq67M7HjDtvqDcRwm+y2XG3EjRAUEk+aLg9DtselNWQLKmEO/jWgFTi7xIuEDYCaH+I75UqXKC2FK8oE9N0kmb7RS/hQhsDzuBSZlElIMkx5YPz7U2MNkG52XjiOoz5zjQ2EJRutaZA/lSZUD2VbbvUXiD7RHm/4WGUhC5hRSnUU2uJVbVPa1QslwylLcxLhVCUkIClEweUT/AHehXB+BZUjxHoUpRMajF/1NFmCkn4nIhYADsy0OBM+bxLQZLh8ZKSXEKEKJO6hO6b7jmbxzh8VKS8yMOYDh0kiQVJTuSRMgEAAW3PY0lcW5KytlT2HjWj/ETy09RPTqK6ZGwWMOpthsqxH/AGkxYkWIkiUxsB+c0xe1sdwBCr7m+frHiMJSpIQ2+guKJACZMDUTYCCfpT25iG1AKS4lXVSVAgjrqSSPnVWcKYdT7WNQskrWDdW+oSRvzkUCOTr8cMBJ1HqIIHUg8qkfTq3Z+2Lkckhq7ljPYhL2IW6FJLSEhCVAyDpkqIIsRJ3BpMwjqXcUVp2Um3rAn6z7UTzw+Ex92Z30wo9Bz9z+9KWW40tOJPRV/SmTEeJI89RjkVWVfjuWZw8hXhfFBSsj8j+tdczfdIuEkDmN+nzoBn2aKwi23EDU0+iYmIUmAY9iLflXA8UpehABk2iL/QkW61A4n+4DUdmXkRJeSMpROlISJJj/AHoRj31POLcvpslPQweX50WzDEpw+GUeavLvcz09procdhy2yhpQGlUkEGZIN5jeTzjftVEv7o7+F+IdynFqaDSdpSPoBuKMYPiEqJEhW4kRII5WpVy/MUrGhRAWlR0zuQDYjr0qaxhXI8RJKgFEmPw3mCBsO/OuFxCBGpjO8PpErg9xXtJxb9flWU31DE+mJW6UV3bRWzSK7BFOTCFnMioj6amkRUV4URAwkVV6OZHxH93RpIUY58o3j+/3kGTeuZqpQMKMgMjI1iWCc9wq06nChStJG2wO4E7z059KTcahkvgMAhswLzYnpN49e9RE10wY/itj/MKRMYS6Md8xyUCBLC4fytagpg+ZtSfiPQ2g968d+y7y2xJ1d27fRVaqzpTJ0pHIUeyziXUL1iR8gNib8mNGAB8Qf/wy5h2g22kqBPmUDf1O3pSplDHh4p4REGI6WmrRazcHetcXgmH7qSNUQFCx+fTsaoj8buQypyArxK4xzgDw021CPflXbIVgFQJggVIzPJEL8wUUkCZ3/P8AeheKytS3Alta/EXeIEbx2g786ZcyMdSTYm4UfE55ypS1oQ2dSy4kJ9SQBTfkLzYcb1ITKtUvGxhAhKUnrq1mRsQOdJmHyp1LiyFSto6ZgpAOx+MbxIA6waL4nDOFLbaj/DUsNN6BdPhnyzO+om56wYp8lMRBjtQZMx2bsKbdZDRR4agWX9PMqETFyDqvM2NDcbmSkFpXhaUKbCfhsVJJ1EDmLi3QVNxubAvoSllWgBKHkadtJBkA7p0kfKedQuJiVuKxOHUlbSCUlpYMIKUhRAHRUlVjMg9K7gDCMhU3JLHEKG1oQoC4KiUpjSLwfhBMkbCo+UMuPYhQWkJAQFAhUtgGQCkbwqDCexmKElasSS6WtCbJSUi3kB8oJG5URPb0vM4axSwoNqKYN56C9gOZuYJ2vVFUgcRFZg7cm6jk22QyoqA0oBiNlb+aOU9LxSPw/jmfCCVJUVpOw7m/qnc0+Z7itOFc0i+ghI7xaqjy9s+MlN0nVp6QTa896fJiHDj+4mLMQ/L9S1MRmCQ046lsBKmVeILTKRa086j5LxEh1tRCIIISb7WAE29val7EDEJaW0SLyIAHMETbfegmUvONqBTczduY1i23KRv/AHBz48fJTXc1ZcnFhfUdsNk68MVLnUhxU6kgWPnVCgq3Qd+013zfiBpBCEty8fKm0AdSTaR2HPpvW2T520VKZJlJ/CrcSNiDsaX89ytxrFBW7ZOpKuZG5HqAKOFQ7EP3FzMUT2dScMKAgqNybkncmq9ehSlEbEmKdc8zdIZIAIKpAkdt+sUIyTIkKQlxxUg7JFu1zv8AlW3O4QbmHDjZzqT8Fhji8uUlSjqYUS3bchJJR1lQHzArOEOG3B/FcQUnZKVWPcmdqLYd9ttOlCQkdAOfX1rt/wBKK5GvNbMSCANT01wAEMexBPF/DWMWnxQlK2kD4UKJUBzUQQJ9ppebI0g9qsDBZ460bkFG6uw6ntSPleG8V7SgQFKJA6CbfIVXGxZaPiSyjg1jzPMYmWQeaT+VScDmr7KtbTy0G0Xmxix1TI7UUZy9sqdYUblJ0HYFY5TynvQ1WSuIQFOlIB/CCCq3XkLd6KkRWUmjDqX8wX5iWUzy0m3yMV7UFriYgAeApUW1TE/SvKWm+IuvmCGxW6q9rKWaB1OCxXF1NZWU4ikQWpUE+tc1qmwrKytQ6mA9z0OVvhnYWlX8qgfrWVlcepw7jZj8RdKhzEfL+hrhiVqZCXEHyqMFJ5E9O1ZWViQdT0shOzCWBzcmx3ov/wBLlKCZvsPU2H51lZSkTr1BBxZWFp76D6EcvlXqMYUhCxOsqTKumkgGPrWVlT4i6nA6nUeJrSH3DoxDaCfDA+IcyTcX3id61weReIy0EPOBRcBHMBUqjeK9rKsD1/fmRrRnuEcfbxDmIOlwITpV+H8MEgDnCY+VcQ5h8Sjzam3Xl/h2k6k3ixBCvpWVlWHUkZHzzDqwzIbceJ8NIQhCBpTqX5lqMbmPxG+1L2CxSmVawOYj5VlZVFk2jWviBTzabRpMmOZ5frQrN8Sl1skhMp5hO/rtWVlRbeS/xNSAfRr8zzFYtwgAhKAYHlEG5jeTF/zHeB2DxEKjYDeZ6GZg35kfKvaytiqF6mJmLHZhDHLGhLqVytA5CLajKVE7m9iLbCmbKMwTi2fCXvEpVGx5H9xzEisrKj6vRDjuafSbtT1FnO8E6oEGPIVmJsCI1Eev7bRUfIsb/DKP5TI9D/WaysqnqgCtn4Bk8B45KH8yS7ioqGHlrmDCR8/asrKxAAC5sJJap1x+J0seGN3Dc9h1Pcx7TUzgsp1Aned6ysqg+yZ23kh/O8uKVIcsZI1JA3vMbifQkVLyrhwPpRrAQ3qKtA69zJn++lZWUoEYuaqMKOFGY+D6msrKymk7n//Z"
                }
                style={{ objectFit: "contain", backgroundColor: "#DA70D6" }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.projectDescription}
                >
                  APISPAM stands for Asian Pacific Islander Sponsor Program at
                  Mudd, and is a peer mentoring program for new API students at
                  Harvey Mudd College. We serve as an additional resource for
                  the freshmen in helping them adjust to the HMC college
                  experience, with an emphasis on issues that intersect with
                  Asian Pacific Islander Desi American identities.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid> */}

        {/* Extracurricular 4 */}
        {/* <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardContent>
              <Typography variant="h5" className={classes.projectTitle}>
                5C InterVarity Christian Fellowship
              </Typography>
            </CardContent>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Extracurricular 4"
                height="140"
                image={
                  "data:image/png;base64,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"
                }
                style={{ objectFit: "contain", backgroundColor: "#f47a37" }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.projectDescription}
                >
                  I found my family in Christ through 5CIV at the Claremont
                  Colleges. I attend small group Bible study every week to study
                  God's word with a wonderful group of friends.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Portfolio;
