import React, { useRef } from "react";
import Car from "./Car";
import StatCard from "./StatCard";
import STATS from "../data/stats";
import useCarScroll from "../hooks/useCarScroll";

const CarScrollSection = () => {
  const trackRef = useRef(null);
  const carRef = useRef(null);
  const bannerRef = useRef(null);

  useCarScroll({ trackRef, carRef, bannerRef });

  return (
    // Tall track gives the scroll distance; the stage stays pinned via sticky.
    <section ref={trackRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {STATS.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}

        <div className="absolute inset-x-0 top-1/2 h-[110px] -translate-y-1/2 overflow-hidden bg-[#1e1e1e] sm:h-[170px]">
          <div
            ref={bannerRef}
            className="absolute left-0 top-0 h-full w-0 overflow-hidden whitespace-nowrap bg-[#4df080]">
            <h1 className="absolute left-[4vw] top-1/2 m-0 -translate-y-1/2 text-[clamp(2.5rem,8.6vw,7.5rem)] font-black tracking-wide text-[#111]">
              WELCOME ITZFIZZ
            </h1>
          </div>

          <div
            ref={carRef}
            className="absolute left-0 top-1/2 h-[88px] w-[200px] -translate-y-1/2 will-change-transform sm:h-[150px] sm:w-[340px]">
            <Car />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarScrollSection;
