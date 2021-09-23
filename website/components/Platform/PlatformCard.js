import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const testBorder = "1px dashed black";

const useStyles = makeStyles((theme) => ({
  //   platform: {
  //     padding: "24px",
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //   },
  //   titleContainer: { width: "75%" },
  //   title: {
  //     fontSize: "32px",
  //     textAlign: "center",
  //     color: "#8C2723",
  //     fontWeight: "bold",
  //     textTransform: "uppercase",
  //   },
  //   subtitle: {
  //     fontSize: "24px",
  //     textAlign: "center",
  //     color: "#8C2723",
  //   },
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

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.card}>
      <div className={!open ? classes.titleDiv : classes.titleDivOpen}>
        <Typography className={classes.title}>{point.point}</Typography>
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
          <Typography key={paragraph} className={classes.text}>
            {paragraph}
          </Typography>
        ))}
    </div>
  );
};

export default PlatformCard;
