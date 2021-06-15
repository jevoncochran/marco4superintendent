import { useRef, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import campaigning4marco from "../../public/images/campaigning4marco.jpeg";
import { platform } from "../../data/platform";
import { SiteContext } from "../../context/siteContext";

const useStyles = makeStyles((theme) => ({
  platformContent: {
    backgroundColor: "#10294A",
    padding: "72px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  platformHeader: {
    // border: "1px dashed white",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 200px",
  },
  platformImage: {
    height: "500px",
    width: "auto",
  },
  platformHeaderText: {
    padding: "18px",
    backgroundColor: "#fff",
    color: "#10294A",
    height: "180px",
    width: "40%",
    position: "relative",
    left: "-75px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  removeDefault: {
    margin: 0,
    padding: 0,
  },
  platformCont: {
    // border: "1px dashed white",
    width: "80%",
    columnCount: 2,
    padding: "18px 0",
  },
  platformItem: {
    border: "1px solid white",
    breakInside: "avoid-column",
    width: "100%",
    marginBottom: "18px",
    padding: "12px",
  },
  platformPoint: {
    color: "#FED406",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "18px",
    marginBottom: "12px",
  },
  platformText: { color: "#fff", textAlign: "center" },
}));

const Platform = () => {
  const classes = useStyles();

  const { setPlatformElement } = useContext(SiteContext);
  const platformSection = useRef(null);

  useEffect(() => {
    setPlatformElement(platformSection);
  }, []);

  return (
    <div className={classes.platformContent} ref={platformSection}>
      <div className={classes.platformHeader}>
        <img src={campaigning4marco} className={classes.platformImage} />
        <div className={classes.platformHeaderText}>
          <h2 className={classes.removeDefault}>The Platform</h2>
          <h3 className={classes.removeDefault}>
            A 10 Point Program for Public Education in California: An
            Intersectional, Multi- Faceted, Solution for Transformative Change
            in our Public Schools.
          </h3>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div container className={classes.platformCont} justify="space-between">
          {platform.map((item, index) => (
            <div item xs={5} key={index} className={classes.platformItem}>
              <p
                className={`${classes.platformPoint} ${classes.removeDefault}`}
              >
                {item.point}
              </p>
              <p className={`${classes.platformText} ${classes.removeDefault}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
