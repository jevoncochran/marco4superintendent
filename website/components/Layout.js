import { useContext } from "react";
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
import useWindowSize from "../utils/useWindowSize";
import { SiteContext } from "../context/siteContext";

const Layout = (props) => {
  const windowSize = useWindowSize();
  const desktop = windowSize.width > 500;

  const { mobileNavActive } = useContext(SiteContext);

  return (
    <div>
      <Head>
        <title>Marco For Superintendent</title>
      </Head>
      <NavBar />
      {!mobileNavActive && (
        <div>
          <div>
            {props.children}
            <Footer />
          </div>
        </div>
      )}
      {mobileNavActive && (
        <div style={{ height: "93vh", backgroundColor: "#8C2723" }}></div>
      )}
    </div>
  );
};

export default Layout;
