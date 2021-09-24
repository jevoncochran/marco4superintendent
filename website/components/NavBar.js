import { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, IconButton } from "@mui/material";
import { SiteContext } from "../context/siteContext";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowSize from "../utils/useWindowSize";
import marcoCampaignLogo from "../public/images/marco_campaign_logo.jpeg";

const testBorder = "1px dashed black";

const useStyles = makeStyles((theme) => ({
  navBar: {
    height: "15vh",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 72px",
  },
  navLogo: {
    height: "100px",
    cursor: "pointer",
  },
  navPagesCont: {
    // border: testBorder,
    display: "flex",
    width: "650px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLink: { cursor: "pointer", color: "#8C2723" },
  navLinkMobile: { cursor: "pointer", color: "#fff", fontSize: "36px" },
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
  donateButtonMobile: {
    height: "96px",
    width: "192px",
    backgroundColor: "#F3D934",
    border: "none",
    borderRadius: "6px",
    color: "#8C2723",
    fontSize: "30px",
    fontWeight: "700",
    marginTop: "24px",
    "&:hover": {
      backgroundColor: "#8C2723",
      color: "#F3D934",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const { mobileNavActive, activateMobileNav, deactivateMobileNav } =
    useContext(SiteContext);

  const windowSize = useWindowSize();
  const desktop = windowSize.width > 500;
  return (
    <div
      className={classes.navBar}
      style={{
        padding: desktop ? "0 72px" : "0 12px",
      }}
    >
      <Link href="/">
        <img
          src={marcoCampaignLogo}
          className={classes.navLogo}
          onClick={deactivateMobileNav}
        />
      </Link>
      <div
        className={classes.navPagesCont}
        style={{
          display: desktop ? "flex" : mobileNavActive ? "flex" : "none",
          flexDirection: desktop ? "row" : "column",
          width: desktop ? "650px" : "100%",
          position: desktop ? "static" : "absolute",
          top: "130px",
          left: desktop ? 0 : 0,
        }}
      >
        <Link href="/">
          <Button
            className={desktop ? classes.navLink : classes.navLinkMobile}
            style={{ display: desktop ? "none" : "flex" }}
            onClick={deactivateMobileNav}
          >
            HOME
          </Button>
        </Link>
        <Link href="/about">
          <Button
            className={desktop ? classes.navLink : classes.navLinkMobile}
            onClick={deactivateMobileNav}
          >
            MEET MARCO
          </Button>
        </Link>
        <Link href="/platform">
          <Button
            className={desktop ? classes.navLink : classes.navLinkMobile}
            onClick={deactivateMobileNav}
          >
            {" "}
            PLATFORM
          </Button>
        </Link>
        <Link href="/">
          <Button
            className={desktop ? classes.navLink : classes.navLinkMobile}
            onClick={deactivateMobileNav}
          >
            {" "}
            CONTACT
          </Button>
        </Link>
        <Link href="/">
          <Button
            className={desktop ? classes.navLink : classes.navLinkMobile}
            onClick={deactivateMobileNav}
          >
            {" "}
            ENDORSEMENTS
          </Button>
        </Link>
        <a
          href="https://secure.numero.ai/contribute/Marco-Amaral-for-State-Superintendent-of-Public-Instruction-2022?fbclid=IwAR22CquPr-oTRhJjFxlWarhpX4iilCfFv3oOfwQFMdtPwz11iWIuSiVaoCg"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button
            className={
              desktop ? classes.donateButton : classes.donateButtonMobile
            }
            onClick={deactivateMobileNav}
          >
            DONATE
          </Button>
        </a>
      </div>
      {!desktop && (
        <IconButton
          onClick={mobileNavActive ? deactivateMobileNav : activateMobileNav}
        >
          <MenuIcon
            style={{ height: "50px", width: "50px", color: "#8C2723" }}
          />
        </IconButton>
      )}
    </div>
  );
};

export default NavBar;
