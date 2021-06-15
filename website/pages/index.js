import Layout from "../components/Layout";
import Intro from "../components/Home/Intro";
import HighlightedContent from "../components/Home/HighlightedContent";
import Platform from "../components/Home/Platform";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <HighlightedContent />
      <Platform />
    </Layout>
  );
}
