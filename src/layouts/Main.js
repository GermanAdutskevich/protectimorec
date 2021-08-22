import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Header from "../components/header/header";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#400CCC",
  },
}));

function Main() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [adress, setAdress] = useState("");
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [list, setList] = useState([]);
  const history = useHistory();

  const HandleSubmit = (e) => {
    e.preventDefault();

    setFirstnameError(false);
    setLastnameError(false);

    if (firstname === "") {
      setFirstnameError(true);
    }
    if (lastname === "") {
      setLastnameError(true);
    }

    if (firstname && lastname) {
      console.log(firstname, lastname, adress);
      setFirstname("");
      setLastname("");
      setAdress("");
      fetch("http://localhost:8000/list", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ firstname, lastname, adress }),
      }).then(() => history.push("/"));

      const data = {
        firstname: firstname,
        lastname: lastname,
        adress: adress,
      };

      const newListassets = [...list, data];
      setList(newListassets);
    }
  };

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Header />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Complete the form
        </Typography>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={HandleSubmit}
        >
          <TextField
            onChange={(e) => setFirstname(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="First Name"
            name="name"
            value={firstname}
            error={firstnameError}
          />
          <TextField
            onChange={(e) => setLastname(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Last Name"
            label="Last Name"
            type="lastname"
            id="lastname"
            value={lastname}
            error={lastnameError}
          />
          <TextField
            onChange={(e) => setAdress(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            id="adress"
            label="Address"
            name="adress"
            value={adress}
          />
          <Button
            onSubmit={HandleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Main;
