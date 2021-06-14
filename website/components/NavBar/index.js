import { makeStyles } from "@material-ui/styles";

const testBorder = "1px dashed black";

const useStyles = makeStyles((theme) => ({
  navBar: {
    height: "20vh",
    width: "100%",
    border: testBorder,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return <div className={classes.navBar}>NavBar</div>;
};

export default NavBar;
