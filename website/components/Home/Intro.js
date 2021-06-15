import { makeStyles } from "@material-ui/styles";
import marco4sup from "../../public/images/marco_for_superintendent.jpeg";

export const useStyles = makeStyles((theme) => ({
  intro: {
    width: "100%",
    height: "93vh",
    backgroundSize: "cover",
    backgroundPosition: "0 10%",
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.intro}
      style={{ backgroundImage: `url(${marco4sup})` }}
    ></div>
  );
  // <img src={marco4sup} className={classes.introImg} />;
};

export default Intro;
