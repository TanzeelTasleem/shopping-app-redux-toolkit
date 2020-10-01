import { Box,createStyles,makeStyles,Theme,Typography} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: "hidden",
    },
    text: {
      fontSize: "80px",
      lineHeight: "0.89",
      letterSpacing: "-1px",
      fontWeight: 1000,
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "55px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
    box: {
      width: "80%",
      padding: "10px",
      display: "flex",
      justifyContent: "center",
    },
  })
);
export const Section: React.FC<any> = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box
        height="450px"
        width=" 100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box className={classes.box}>
          <Typography className={classes.text} variant="h2">
            {data}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
