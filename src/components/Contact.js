import React, { useState } from "react";
import { Axios } from "../Firebase/firebase";
import { firestore } from "../Firebase/firebase";
import "firebase/firestore";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import MessageIcon from "@material-ui/icons/Message";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: "35rem",
    marginTop: theme.spacing(4),
    margin: "auto",
  },
  formWrapper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.5rem 2rem",
  },
  avatar: {
    marginTop: theme.spacing(2),
    // backgroundColor: "coral",
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  formIcon: {
    marginRight: "1rem",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const sendEmail = () => {
    Axios.post(
      "https://us-central1-myportfolio-7f381.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        firestore.collection("emails").add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <Paper elevation={5} className={classes.paper}>
        <div className={classes.formWrapper}>
          <Avatar className={classes.avatar}>
            <QuestionAnswerIcon />
          </Avatar>
          <Typography variant="h4" style={{ margin: "1rem 0" }}>
            Contact Me
          </Typography>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            I'm currently searching for a Summer 2021 Internship in mechanical engineering.
          </Typography>
          <form onSubmit={handleSubmit} id="contact" className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={updateInput}
              value={formData.name || ""}
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              InputProps={{
                startAdornment: <PersonIcon className={classes.formIcon} />,
                classes: {
                  adornedEnd: classes.adornedEnd,
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={updateInput}
              value={formData.email || ""}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              InputProps={{
                startAdornment: <EmailIcon className={classes.formIcon} />,
                classes: {
                  adornedEnd: classes.adornedEnd,
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              multiline
              rows={3}
              required
              fullWidth
              onChange={updateInput}
              value={formData.message || ""}
              name="message"
              label="Your Message"
              id="message"
              InputProps={{
                startAdornment: <MessageIcon className={classes.formIcon} />,
                classes: {
                  adornedEnd: classes.adornedEnd,
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </form>
        </div>
      </Paper>
    </>
    // <Box
    //   component="div"
    //   style={{ background: "var(--theme-forest)", height: "100vh" }}
    // >
    //   <Navbar />
    //   <Grid container justify="center">
    //     <Box className={classes.form}>
    //       <Typography
    //         variant="h5"
    //         style={{
    //           color: "var(--theme-coral)",
    //           textAlign: "center",
    //           textTransform: "uppercase",
    //         }}
    //       >
    //         Contact Me
    //       </Typography>
    //       <form onSubmit={handleSubmit} id="contact">
    //         <TextField
    //           fullWidth={true}
    //           label="Name"
    //           variant="outlined"
    //           required
    //           onChange={updateInput}
    //           value={formData.name || ""}
    //           inputProps={{ style: { color: "white" } }}
    //           margin="dense"
    //           size="medium"
    //         />
    //         <br />

    //         <TextField
    //           fullWidth={true}
    //           label="Email"
    //           variant="outlined"
    //           required
    //           onChange={updateInput}
    //           value={formData.email || ""}
    //           inputProps={{ style: { color: "white" } }}
    //           margin="dense"
    //           size="medium"
    //         />
    //         <br />

    //         <TextField
    //           fullWidth={true}
    //           label="Company Name"
    //           variant="outlined"
    //           // onChange={updateInput}
    //           inputProps={{ style: { color: "white" } }}
    //           margin="dense"
    //           size="medium"
    //         />
    //         <br />

    //         <TextField
    //           fullWidth={true}
    //           label="Your Message"
    //           multiline
    //           rows={5}
    //           required
    //           onChange={updateInput}
    //           value={formData.message || ""}
    //           variant="outlined"
    //           inputProps={{ style: { color: "white" } }}
    //           margin="dense"
    //           size="medium"
    //         />
    //         <br />

    //         <Button
    //           type="submit"
    //           className={classes.button}
    //           variant="outlined"
    //           fullWidth={true}
    //           endIcon={<SendIcon />}
    //         >
    //           Send
    //         </Button>
    //       </form>
    //     </Box>
    //   </Grid>
    // </Box>
  );
};

export default Contact;
