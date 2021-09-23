import { makeStyles } from "@material-ui/styles";
import Typography from "@mui/material/Typography";

export const useStyles = makeStyles((theme) => ({
  outerDiv: {
    padding: "24px",
    display: "flex",
    justifyContent: "center",
  },
  headlineText: {
    color: "#F3D934",
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subText: {
    color: "#8C2723",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },
}));

const JoinThisMovement = () => {
  const classes = useStyles();

  return (
    <div className={classes.outerDiv}>
      <div className={classes.innerDiv}>
        <Typography className={classes.headlineText} mb={2}>
          Join this movement!
        </Typography>
        <Typography className={classes.subText} mb={2}>
          It's time to elect a teacher to be the next Superintendent of Public
          Instruction!
        </Typography>
        <Typography className={classes.subText}>
          We're going to put the "public" back into public education!
        </Typography>
      </div>
    </div>
  );
};

export default JoinThisMovement;
