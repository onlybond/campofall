import React from 'react'
import Filters from "./components/Filters";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Filters />
      {children}
    </div>
  );
};

export default layout