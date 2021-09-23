import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Marco For Superintendent</title>
      </Head>
      <div>
        <NavBar />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
