import Head from "next/head";
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
      </div>
    </div>
  );
};

export default Layout;
