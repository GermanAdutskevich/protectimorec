import React from "react";
import "./header.scss";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { AppBar, Toolbar ,Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));


const headersData = [
  {
    label: "Form",
    href: "/",
  },
  {
    label: "List",
    href: "/list",
  },
];

function Navigation () {
    const { header, logo, menuButton, toolbar} = useStyles();

    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };

    const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Typography variant="h6" component="h1" classname={logo}>
          Protectimo Recruitment
        </Typography>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
    };
  
  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}

export default Navigation;