import { makeStyles } from "@material-ui/styles";
import { platform } from "../../data/platform";
import { Typography } from "@mui/material";
import useWindowSize from "../../utils/useWindowSize";
import PlatformCard from "./PlatformCard";

const testBorder = "1px dashed black";

const useStyles = makeStyles((theme) => ({
  platform: {
    // border: testBorder,
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
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: "24px",
    textAlign: "center",
    color: "#8C2723",
  },
}));

const TenPoints = () => {
  const classes = useStyles();

  const windowSize = useWindowSize();
  const desktop = windowSize.width > 500;

  return (
    <div className={classes.platform}>
      <div
        className={classes.titleContainer}
        style={{ width: desktop ? "75%" : "100%" }}
      >
        <Typography className={classes.title}>Our Platform</Typography>
        <Typography className={classes.subtitle} mb={2}>
          A 10 Point Program for Public Education in California: An
          Intersectional, Multi-Faceted, Solution for Transformative Change in
          our Public Schools.
        </Typography>
      </div>
      {platform.map((point) => (
        <PlatformCard key={point.point} point={point} />
      ))}
    </div>
  );
};

export default TenPoints;
