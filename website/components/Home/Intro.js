import { makeStyles } from "@material-ui/styles";
import useWindowSize from "../../utils/useWindowSize";
import Image from "next/image";

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

  const windowSize = useWindowSize();
  const desktop = windowSize.width > 500;

  return (
    <div
      className={classes.intro}
      style={{
        backgroundImage: `url(/images/campaign-cover-photo.jpeg)`,
        backgroundPosition: desktop ? "0 10%" : "-125px 0",
      }}
    ></div>
    // <>
    //   <Image src="/images/campaign-cover-photo.jpeg" layout="fill" />
    // </>
  );
};

export default Intro;
