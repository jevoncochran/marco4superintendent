import { makeStyles } from "@material-ui/styles";
import Typography from "@mui/material/Typography";
import { IoLogoFacebook } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#8C2723",
    padding: "24px",
  },
  topDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
  },
  legalDisclaimerDiv: { border: "1px solid #fff", padding: "12px" },
  socialDiv: {
    // border: "1px dashed white",
    width: "8%",
    display: "flex",
    justifyContent: "space-between",
  },
  socialIcon: {
    fontSize: "24px",
    color: "#fff",
    cursor: "pointer",
  },
  donationDisclaimer: { fontSize: "12px", color: "#fff", textAlign: "center" },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.topDiv}>
        <Typography style={{ color: "#fff" }}>
          MARCO AMARAL FOR SUPERINTENDENT
        </Typography>
        <div className={classes.legalDisclaimerDiv}>
          <Typography style={{ color: "#fff" }}>
            Paid for by Marco Amaral for State Superintendent of Public
            Instruction 2022 FPPC ID 1437503
          </Typography>
        </div>
        <div className={classes.socialDiv}>
          <a
            className={classes.socialIcon}
            href="https://www.facebook.com/Amaral4Sup2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoFacebook />
          </a>
          <div className={classes.socialIcon}>
            <GrInstagram />
          </div>
          <div className={classes.socialIcon}>
            <FaTwitter />
          </div>
          <div className={classes.socialIcon}>
            <HiOutlineMail />
          </div>
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
