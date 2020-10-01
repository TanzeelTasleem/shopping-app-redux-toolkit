import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Box, Slide, Typography, useScrollTrigger } from "@material-ui/core";
import { useSelector } from "react-redux";
import { GET_CART } from "../../features/cart/cartSlice";
import { Cart } from "../cart/cart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menubutton: {
      color: "black",
    },
    logo: {
      width: "40px",
      height: "40px",
      backgroundSize: "40px",
    },
    btn: {
      fontWeight: "bold",
      color: "black",
    },
    appbar: {
      boxShadow: "none",
      backgroundColor: "white",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  })
);
const HideOnScroll: React.FC<any> = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState<boolean>(false);
  const cart = useSelector(GET_CART);
  const handleOpen = () => {
    setValue(!value);
  };
  console.log(cart);
  return (
    <HideOnScroll>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" aria-label="menu">
            <img
              className={classes.logo}
              src="https://www.beatsbydre.com/content/dam/beats/global/logos/beats-logo-161616.png"
              alt="headset"
            ></img>
          </IconButton>
          <Typography> </Typography>
          <Box>
            <IconButton
              className={classes.menubutton}
              onClick={() => setValue(!value)}
            >
              <Badge color="secondary" badgeContent={cart.length}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Cart handleOpen={handleOpen} value={value} />
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
