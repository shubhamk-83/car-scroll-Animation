import React from "react";

const StatCard = ({ value, label, at, position, theme }) => {
  return (
    <div
      data-at={at}
      className={`stat-card absolute w-[40vw] max-w-[260px] rounded-lg px-5 py-5 opacity-0 sm:w-[19vw] sm:px-6 ${position} ${theme}`}>
      <p className="text-4xl font-bold leading-tight sm:text-5xl">{value}</p>
      <p className="mt-1 text-xs sm:text-base">{label}</p>
    </div>
  );
};

export default StatCard;
