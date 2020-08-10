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
import BusinessIcon from "@material-ui/icons/Business";
import EmailIcon from "@material-ui/icons/Email";
import MessageIcon from "@material-ui/icons/Message";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: "35rem",
    marginTop: theme.spacing(4),
    margin: "auto",
    backgroundColor: "#e1e4e6",
    [theme.breakpoints.down('xs')]:{
      margin: "auto"
    }
  },
  formWrapper: {
    // marginTop: theme.spacing(3),
    // marginBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.5rem 2rem",
  },
  avatar: {
    marginTop: theme.spacing(1),
    backgroundColor: "var(--theme-primary)",
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
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);

  // Success Alert
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Form
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
      company: "",
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
          company: formData.company,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
        handleClick();
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
          <Typography
            variant="h4"
            style={{
              margin: "0.5rem 0",
            }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              textAlign: "center",
              // color: "var(--theme-secondary)",
              // fontWeight: "bold",
            }}
          >
            I'm currently searching for a Summer 2021 Internship in mechanical
            engineering. Feel free to fill out this form or email me at&nbsp;
            <a href="mailto: @aqian@g.hmc.edu">aqian@g.hmc.edu</a>.
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
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={updateInput}
              value={formData.company || ""}
              id="company"
              label="Company"
              name="company"
              autoComplete="company"
              InputProps={{
                startAdornment: <BusinessIcon className={classes.formIcon} />,
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
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // onClick={handleClick}
              style={{
                backgroundColor: "var(--theme-primary)",
                color: "white",
                margin: "1rem 0",
              }}
              endIcon={<SendIcon />}
            >
              Send
            </Button>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Thank you! Your message has been sent!
              </Alert>
            </Snackbar>
          </form>
        </div>
      </Paper>
    </>
  );
};

export default Contact;
