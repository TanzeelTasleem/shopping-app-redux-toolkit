import React from "react";
import {Drawer as MUIDrawer,List,ListItemIcon,Box,Typography,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {addIntoCart,GET_CART,removeFromCart,reduceQuantity,GET_TOTAL} from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { payload } from "../../types";

const useStyles = makeStyles({
  drawer: {
    height: "100vh",
    position: "relative",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    color: "white",
    backgroundColor: "black",
    fontWeight: 600,
  },
});

export const Cart: React.FC<any> = ({ value, handleOpen }) => {
  const classes = useStyles();
  const cart = useSelector(GET_CART);
  const dispatch = useDispatch();
  const total = useSelector(GET_TOTAL);

  const handleAddClick = (item: payload) => {
    dispatch(
      addIntoCart({
        title: item.title,
        price: item.price,
        img: item.img,
        features: item.features,
        details: item.details,
        categoryDefine: item.categoryDefine,
        smallImg: item.smallImg,
        quantity: item.quantity,
      })
    );
  };
  const handleSubClick = (item: any) => {
    dispatch(
      reduceQuantity({
        title: item.title,
        price: item.price,
        img: item.img,
        features: item.features,
        details: item.details,
        categoryDefine: item.categoryDefine,
        smallImg: item.smallImg,
        quantity: item.quantity,
      })
    );
  };

  const handleRemove = (item: any) => {
    dispatch(
      removeFromCart({
        title: item.title,
        price: item.price,
        img: item.img,
        features: item.features,
        details: item.details,
        categoryDefine: item.categoryDefine,
        smallImg: item.smallImg,
        quantity: item.quantity,
      })
    );
  };

  return (
    <div>
      <MUIDrawer
        className={classes.drawer}
        anchor="right"
        variant="temporary"
        open={value}
      >
        <List style={{ width: "300px" }}>
          <ListItemIcon
            onClick={() => {
              handleOpen();
            }}
          >
            <ChevronLeftIcon />
          </ListItemIcon>
          {cart[0] &&
            cart.map((product: payload) => {
              console.log(cart);
              return (
                <Box mt={3}>
                  <Box display="flex">
                    <img src={product.smallImg} alt="cartImg" />
                    <Typography variant="subtitle2">
                      {product.details}
                    </Typography>
                  </Box>
                  <hr />
                  <Typography>price : {`$${product.price}`}</Typography>

                  <Box display="flex" justifyContent="space-around">
                    <Button
                      onClick={() => {
                        handleAddClick(product);
                      }}
                    >
                      +
                    </Button>
                    <Typography variant="subtitle1">
                      {product.quantity}
                    </Typography>
                    <Button
                      onClick={() => {
                        product.quantity === 1
                          ? handleRemove(product)
                          : handleSubClick(product);
                      }}
                    >
                      -
                    </Button>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <Button
                      className={classes.btn}
                      variant="contained"
                      onClick={() => {
                        handleRemove(product);
                      }}
                    >
                      Remove from Cart
                    </Button>
                  </Box>
                </Box>
              );
            })}
          <Box mt={5} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5">SUBTOTAL : {`$${total}`}</Typography>
            <Button
              style={{ borderRadius: "25px", width: "80%" }}
              className={classes.btn}
            >
              checkout
            </Button>
          </Box>
        </List>
      </MUIDrawer>
    </div>
  );
};
