import Layout from "../components/Layout";
import Intro from "../components/Home/Intro";
import JoinThisMovement from "../components/Home/JoinThisMovement";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <JoinThisMovement />
    </Layout>
  );
}
