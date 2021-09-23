import { useRef, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import campaigning4marco from "../../public/images/campaigning4marco.jpeg";
import { platform } from "../../data/platform";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  platform: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: { width: "75%" },
  title: {
    fontSize: "32px",
    textAlign: "center",
    color: "#8C2723",
    fontWeight: "bold",
    textTransform: 'uppercase'
  },
  subtitle: {
    fontSize: "24px",
    textAlign: "center",
    color: "#8C2723",
  },
}));

const TenPoints = () => {
  const classes = useStyles();

  return (
    <div className={classes.platform}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Our Platform</Typography>
        <Typography className={classes.subtitle}>
          A 10 Point Program for Public Education in California: An
          Intersectional, Multi-Faceted, Solution for Transformative Change in
          our Public Schools.
        </Typography>
      </div>
    </div>
  );
};

export default TenPoints;
