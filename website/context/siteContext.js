import { createContext, useState, useEffect } from "react";

const SiteContext = createContext();

const SiteProvider = (props) => {
  const [platformElement, setPlatformElement] = useState(null);

  return (
    <SiteContext.Provider value={{ platformElement, setPlatformElement }}>
      {props.children}
    </SiteContext.Provider>
  );
};

const SiteConsumer = SiteContext.Consumer;

export { SiteContext, SiteConsumer };

export default SiteProvider;
