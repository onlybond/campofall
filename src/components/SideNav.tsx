import React from "react";
import SideNavLinks from "./SideNavLinks";


const SideNav = () => {
  return (
    <div className="w-5vw h-full z-[2]">
      <div className="flex flex-col fixed items-center gap-8 px-10 justify-center h-full ">
        <SideNavLinks />
      </div>
    </div>
  );
};

export default SideNav;
