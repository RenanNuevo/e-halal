import React from "react";

const nonCurrentDayClasses = `
  w-3
  sm:w-[50px]
  bg-red
  group-hover:bg-light-red
  rounded-sm
`;

const currentDayClasses = `
  w-3
  sm:w-[50px]
  bg-white
  group-hover:bg-light-white
  rounded-sm
`;

const Bar = ({ height, isCurrentDay }) => {
  return (
    <div
      className={isCurrentDay ? currentDayClasses : nonCurrentDayClasses}
      style={{ height: `${height}px` }}></div>
  );
};

export default Bar;