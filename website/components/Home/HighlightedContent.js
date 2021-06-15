import { makeStyles } from "@material-ui/styles";

const testBorder = "1px dashed black";

const useStyles = makeStyles((theme) => ({
  highlightedContent: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "72px",
  },
  contentCont: {
    //   border: testBorder,
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
  },
  videoContent: {
    // width: "50%",
  },
  textContent: {
    fontSize: "24px",
    color: "#10294A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const HighlightedContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.highlightedContent}>
      <div className={classes.contentCont}>
        <div className={classes.textContent}>
          <p>5 days.</p>
          <p>500 likes.</p>
          <p>$5000 in donations.</p>
          <p>Thank you!! Let's keep it going!</p>
        </div>
        <iframe
          className={classes.videoContent}
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fsupamaral2022%2Fvideos%2F843062299967395%2F&show_text=false&width=267&t=0"
          width="294"
          height="524"
          // style="border:none;overflow:hidden"
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default HighlightedContent;
