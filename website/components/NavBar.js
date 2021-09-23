import { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { SiteContext } from "../context/siteContext";
import Link from "next/link";

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
  navLogo: { color: "#8C2723", fontSize: "16px", cursor: "pointer" },
  navPagesCont: {
    // border: testBorder,
    display: "flex",
    width: "650px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLink: { cursor: "pointer", color: "#8C2723" },
  donateButton: {
    height: "48px",
    width: "96px",
    backgroundColor: "#F3D934",
    border: "none",
    borderRadius: "6px",
    color: "#8C2723",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#8C2723",
      color: "#F3D934",
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
      <Link href="/">
        <p className={classes.navLogo}>MARCO AMARAL FOR SUPERINTENDENT</p>
      </Link>
      <div className={classes.navPagesCont}>
        <Link href="/about">
          <Button className={classes.navLink}>MEET MARCO</Button>
        </Link>
        <Link href="/platform">
          <Button className={classes.navLink}>PLATFORM</Button>
        </Link>
        <Button className={classes.navLink}>CONTACT</Button>
        <Button className={classes.navLink}>ENDORSEMENTS</Button>
        <a
          href="https://secure.numero.ai/contribute/Marco-Amaral-for-State-Superintendent-of-Public-Instruction-2022?fbclid=IwAR22CquPr-oTRhJjFxlWarhpX4iilCfFv3oOfwQFMdtPwz11iWIuSiVaoCg"
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
