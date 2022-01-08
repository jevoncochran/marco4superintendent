import { createContext, useState } from "react";

const SiteContext = createContext();

const SiteProvider = (props) => {
  const [platformElement, setPlatformElement] = useState(null);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [hideDonatePopover, setHideDonatePopover] = useState(null);

  const activateMobileNav = () => {
    setMobileNavActive(true);
  };

  const deactivateMobileNav = () => {
    setMobileNavActive(false);
  };

  const closeDonatePopover = () => {
    setHideDonatePopover(true);
  };

  return (
    <SiteContext.Provider
      value={{
        mobileNavActive,
        activateMobileNav,
        deactivateMobileNav,
        hideDonatePopover,
        closeDonatePopover,
      }}
    >
      {props.children}
    </SiteContext.Provider>
  );
};

const SiteConsumer = SiteContext.Consumer;

export { SiteContext, SiteConsumer };

export default SiteProvider;
