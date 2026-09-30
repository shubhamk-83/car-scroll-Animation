// `at` is the point (0 → 1) of the scroll timeline where the card appears.
// `position` and `theme` are Tailwind classes (kept as full strings so Tailwind can detect them).
const STATS = [
  {
    id: "pickup-58",
    value: "58%",
    label: "Increase in pick up point use",
    at: 0.25,
    position: "top-[14%] left-[8%] sm:left-[49%]",
    theme: "bg-[#e0ff4f] text-[#111]",
  },
  {
    id: "pickup-27",
    value: "27%",
    label: "Increase in pick up point use",
    at: 0.6,
    position: "top-[14%] left-[52%] sm:left-[71%]",
    theme: "bg-[#2f2f2f] text-white",
  },
  {
    id: "calls-23",
    value: "23%",
    label: "Decreased in customer phone calls",
    at: 0.4,
    position: "bottom-[14%] left-[8%] sm:left-[43%]",
    theme: "bg-[#76cdfb] text-[#111]",
  },
  {
    id: "calls-40",
    value: "40%",
    label: "Decreased in customer phone calls",
    at: 0.75,
    position: "bottom-[14%] left-[52%] sm:left-[65%]",
    theme: "bg-[#ee6a2c] text-[#111]",
  },
];

export default STATS;
