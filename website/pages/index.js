import { useEffect, useContext } from "react";
import Layout from "../components/Layout";
import Intro from "../components/Home/Intro";
import JoinThisMovement from "../components/Home/JoinThisMovement";
import DonatePopOver from "../components/Home/DonatePopOver";
import { setCookies } from "cookies-next";
import { SiteContext } from "../context/siteContext";

export default function Home({ pageVisited }) {
  const { hideDonatePopover } = useContext(SiteContext);

  useEffect(() => {
    if (!pageVisited) {
      setCookies("pageVisited", true);
    }
  }, []);

  return (
    <Layout>
      {!pageVisited && !hideDonatePopover && <DonatePopOver />}
      <Intro />
      <JoinThisMovement />
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const { pageVisited } = ctx.req.cookies;

  return { props: { pageVisited: pageVisited ?? null } };
};
