import { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { SiteContext } from "../context/siteContext";

const testBorder = "1px dashed black";

const useStyles = makeStyles((theme) => ({
  navBar: {
    height: "7vh",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 72px",
  },
  navPagesCont: {
    // border: testBorder,
    display: "flex",
    width: "40%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  donateButton: {
    height: "48px",
    width: "96px",
    backgroundColor: "#10294A",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#10294A",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const { platformElement } = useContext(SiteContext);

  const scrollToPlatform = () => {
    window.scrollTo({
      top: platformElement.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes.navBar}>
      <p>MARCO AMARAL FOR SUPERINTENDENT</p>
      <div className={classes.navPagesCont}>
        <a>MEET MARCO</a>
        <a onClick={scrollToPlatform}>PLATFORM</a>
        <a>CONTACT</a>
        <a>ENDORSEMENTS</a>
        <a
          href="https://www.efundraisingconnections.com/c/MarcoAmaral/?fbclid=IwAR0T4s0vyeowehD_A4a3MaWN9obZzCV7nWblk2aop78g8DFroWmBeUwDq30"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button className={classes.donateButton}>DONATE</Button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
