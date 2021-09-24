import { makeStyles } from "@material-ui/styles";
import { Typography, Box } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import useWindowSize from "../utils/useWindowSize";

const testBorder = "1px dashed black";

export const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#8C2723",
    padding: "24px",
  },
  topDiv: {
    // border: testBorder,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
  },
  legalDisclaimerDiv: {
    border: "1px solid #fff",
    padding: "12px",
    textAlign: "center",
  },
  socialDiv: {
    // border: "1px dashed white",
    width: "7%",
    display: "flex",
    justifyContent: "space-between",
  },
  socialIcon: {
    // fontSize: "50px",
    // color: "#fff",
    cursor: "pointer",
  },
  donationDisclaimer: { fontSize: "12px", color: "#fff", textAlign: "center" },
}));

const Footer = () => {
  const classes = useStyles();

  const windowSize = useWindowSize();
  const desktop = windowSize.width > 500;

  return (
    <div className={classes.footer}>
      <div
        className={classes.topDiv}
        style={{ flexDirection: desktop ? "row" : "column" }}
      >
        <Typography style={{ color: "#fff" }} mb={desktop ? 0 : 2}>
          MARCO AMARAL FOR SUPERINTENDENT
        </Typography>
        <Box className={classes.legalDisclaimerDiv} mb={desktop ? 0 : 2}>
          <Typography style={{ color: "#fff" }}>
            Paid for by Marco Amaral for State Superintendent of Public
            Instruction 2022 FPPC ID 1437503
          </Typography>
        </Box>
        <div
          className={classes.socialDiv}
          style={{ width: desktop ? "7%" : "35%" }}
        >
          <SocialIcon
            url="https://www.facebook.com/Amaral4Sup2022"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="#fff"
            className={classes.socialIcon}
            style={{ height: desktop ? 30 : 40, width: desktop ? 30 : 40 }}
          />
          <SocialIcon
            url="https://www.instagram.com/amaral4sup2022/"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="#fff"
            style={{ height: desktop ? 30 : 40, width: desktop ? 30 : 40 }}
          />
          <SocialIcon
            url="https://twitter.com/marcodemocracy"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="#fff"
            style={{ height: desktop ? 30 : 40, width: desktop ? 30 : 40 }}
          />
        </div>
      </div>
      <div>
        <Typography className={classes.donationDisclaimer}>
          Contributions to elect Marco Amaral for State Superintendent of Public
          Instruction 2022 are not tax deductible for income tax purposes. Each
          individual over the age of 18, labor unions, corporations, other
          business entities, and general PACs may contribute a maximum of $8,100
          per election. Qualified small contributor committees may contribute a
          maximum $16, 200 per election. Contributions by cashiers, check, money
          order, or in cash of $100 or more, in the name of another or from
          foreign nationals not admitted for permanent residency are prohibited.
          Designed in house for electronic transmission. Labor donated period.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
