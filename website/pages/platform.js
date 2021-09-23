import Layout from "../components/Layout";
import PlatformCard from "../components/Platform/PlatformCard";
import TenPoints from "../components/Platform/TenPoints";
import { platform } from "../data/platform";

export default function Platform() {
  return (
    <Layout>
      <TenPoints />
      <div
        style={{
          //   border: "1px dashed black",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {platform.map((point) => (
          <PlatformCard key={point.point} point={point} />
        ))}
      </div>
    </Layout>
  );
}
