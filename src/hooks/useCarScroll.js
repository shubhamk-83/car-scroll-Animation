import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const NOSE_OFFSET = 0.3;


const useCarScroll = ({ trackRef, carRef, bannerRef }) => {
  useLayoutEffect(() => {
    const track = trackRef.current;
    const car = carRef.current;
    const banner = bannerRef.current;
    if (!track || !car || !banner) return undefined;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stat-card");
      const carWidth = () => car.offsetWidth;
      const startX = () => -carWidth() * 0.15;
      const endX = () => window.innerWidth - carWidth() * 0.05;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: track,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(car, { x: startX }, { x: endX, duration: 1 }, 0);
      tl.fromTo(
        banner,
        { width: () => startX() + carWidth() * NOSE_OFFSET },
        { width: () => endX() + carWidth() * NOSE_OFFSET, duration: 1 },
        0,
      );

      cards.forEach((card) => {
        tl.fromTo(
          card,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.1, ease: "power2.out" },
          Number(card.dataset.at),
        );
      });
    }, track);

    return () => ctx.revert();
  }, [trackRef, carRef, bannerRef]);
};

export default useCarScroll;
