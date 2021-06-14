import { makeStyles } from "@material-ui/styles";
import marco4sup from "../../../public/images/marco_for_superintendent.jpeg";

const useStyles = makeStyles((theme) => ({
  introImg: {
    width: "100%",
    height: "auto",
  },
}));

const Intro = () => {
  const classes = useStyles();
  return <img src={marco4sup} className={classes.introImg} />;
};

export default Intro;
