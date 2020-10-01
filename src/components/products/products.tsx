import {Box,Button,createStyles,makeStyles,Theme,Typography} from "@material-ui/core";
import React from "react";
import { Section } from "../section/section";
import data from "../../app/data.json";
import { useDispatch } from "react-redux";
import { addIntoCart } from "../../features/cart/cartSlice";
import { Product } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    name: {
      fontWeight: 1000,
      fontSize: "20px",
      marginBottom: "10px",
    },
    details: {
      fontWeight: 1000,
      fontSize: "35px",
      marginTop: "10px",
      //   lineHeight: "1.1",
      letterSpacing: "-0.1px",
      textTransform: "uppercase",
      color: "white",
      backgroundColor: "black",
      display: "inline",
      boxShadow: "7px 0 0 #161616, -3px 0 0 #161616;",
    },
    list: {
      fontSize: "18px",
      color: "rgb(22,22,22)",
      textAlign: "left",
      letterSpacing: "-0.2px",
      lineHeight: "1.2",
      fontWeight: 500,
      padding: "5px",
    },
    btn: {
      color: "black",
      fontWeight: 800,
      height: "40px",
      borderRadius: "15px",
      border: "2px solid black",
    },
    img: {
      width: "600px",
      [theme.breakpoints.down("sm")]: {
        width: "400px",
      },
    },
  })
);

export const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = (item: Product) => {
    dispatch(
      addIntoCart({
        title: item.title,
        price: item.price,
        img: item.img,
        features: item.features,
        details: item.details,
        categoryDefine: item.categoryDefine,
        smallImg: item.smallImg,
        quantity: 1,
      })
    );
  };

  return (
    <Box>
      {data.map((data, index) => {
        return (
          <Box>
            {data.categoryDefine && <Section data={data.categoryDefine} />}
            <Box
              key={index}
              overflow="hidden"
              p={10}
              display="flex"
              justifyContent="space-around"
              flexWrap="wrap"
            >
              <Box mb={10} width="500px" textAlign="left" alignSelf="center">
                <Typography className={classes.name} variant="h6">
                  {data.title}
                </Typography>
                <Typography className={classes.details} variant="h4">
                  {data.details}
                </Typography>
                <ul style={{ paddingLeft: "12px" }}>
                  {data.features.map((item, index) => (
                    <li key={index} className={classes.list}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Typography
                  className={classes.name}
                  variant="h5"
                >{`$ ${data.price}`}</Typography>
                <Button
                  onClick={() => handleClick(data)}
                  variant="outlined"
                  className={classes.btn}
                >
                  ADD TO CART
                </Button>
              </Box>
              <Box justifySelf="center">
                <img className={classes.img} src={data.img} alt="product" />
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
