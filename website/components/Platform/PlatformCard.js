import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import useWindowSize from "../../utils/useWindowSize";

const testBorder = "1px dashed black";

const useStyles = makeStyles((theme) => ({
  card: {
    border: "2px solid #F3D934",
    backgroundColor: "#F3D934",
    width: "75%",
    marginBottom: "24px",
    padding: "24px",
  },
  titleDiv: {
    // border: testBorder,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: "12px",
  },
  titleDivOpen: {
    // border: testBorder,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "12px",
  },
  title: {
    fontSize: "24px",
    textTransform: "uppercase",
    marginRight: "10px",
    color: "#8C2723",
    fontWeight: "bold",
  },
  openIcon: {
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    color: "#8C2723",
    cursor: "pointer",
  },
  text: {
    fontSize: "20px",
    color: "#8C2723",
    marginBottom: "12px",
  },
}));

const PlatformCard = ({ point }) => {
  const classes = useStyles();

  const windowSize = useWindowSize();
  const desktop = windowSize.width > 500;

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.card} style={{ width: desktop ? "75%" : "100%" }}>
      <div
        className={!open ? classes.titleDiv : classes.titleDivOpen}
        style={{ flexDirection: desktop ? "row" : "column" }}
      >
        <Typography
          className={classes.title}
          mb={desktop ? 0 : 1}
          style={{
            textAlign: desktop ? "left" : "center",
            fontSize: desktop ? "24px" : "18px",
          }}
        >
          {point.point}
        </Typography>
        <div className={classes.openIcon}>
          {!open ? (
            <FaPlusSquare onClick={() => setOpen(true)} />
          ) : (
            <FaMinusSquare onClick={() => setOpen(false)} />
          )}
        </div>
      </div>
      {open &&
        point.text.map((paragraph) => (
          <Typography
            key={paragraph}
            className={classes.text}
            style={{ textAlign: desktop ? "left" : "center" }}
          >
            {paragraph}
          </Typography>
        ))}
    </div>
  );
};

export default PlatformCard;
