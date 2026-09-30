# 🏎️ Scroll-Driven Car Animation

A scroll-controlled hero section where a sports car drives across the screen as you scroll, revealing a **"WELCOME ITZFIZZ"** banner and animating in four stat cards, all synced to a single GSAP timeline.

**[🔗 Live Demo](https://your-live-link.vercel.app)** · **[📂 Source Code](https://github.com/shubham-83/car-scroll-animation)**

---

## ✨ Features

- **Scroll-scrubbed animation**: the car's position is tied directly to scroll progress, so scrolling back plays it in reverse.
- **Text reveal effect**: the green banner grows with the car's nose, so the headline is uncovered as the car passes.
- **Staggered stat cards**: four cards fade and slide in at defined points on the timeline.
- **Fully responsive**: layout, car size and card positions adapt from mobile to desktop.
- **Data-driven cards**: text, colours, positions and scroll timing live in one config file.
- **Clean cleanup**: animations are scoped with `gsap.context()` and reverted on unmount, so it is safe under React StrictMode.

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React.js (functional components + hooks) |
| Build tool | Vite |
| Language | JavaScript (ES6+) |
| Styling | Tailwind CSS + custom global CSS |
| Animation | GSAP + ScrollTrigger |
| Markup | HTML5 |

## 🧠 How It Works

The whole experience runs on **one scrubbed GSAP timeline** attached to a tall scroll track:

1. A `400vh` section provides the scroll distance, and an inner `sticky` stage keeps the scene pinned on screen.
2. `ScrollTrigger` maps scroll progress (0 → 1) onto the timeline with `scrub`.
3. The car's `x` and the banner's `width` are animated together, so the banner always ends at the car's nose.
4. Each card fades in at its own `at` position on the timeline.
5. Position values are written as **functions** with `invalidateOnRefresh: true`, so everything recalculates correctly on window resize.

## 📁 Project Structure

```
car-scroll-animation/
├── public/
├── src/
│   ├── components/
│   │   ├── CarScrollSection.jsx   # Section layout, refs, composition
│   │   ├── Car.jsx                # Car image component
│   │   └── StatCard.jsx           # Reusable stat card
│   ├── data/
│   │   └── stats.js               # Card content, colours, positions, timing
│   ├── hooks/
│   │   └── useCarScroll.js        # GSAP + ScrollTrigger timeline logic
│   ├── img/
│   │   └── car.png                # Top-down car (transparent PNG)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # Tailwind directives + global styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

**Design decisions**
- Animation logic is isolated in a **custom hook**, keeping components purely presentational.
- Card content lives in a **data file**, so adding or editing a card needs no component changes.
- Small, single-purpose components make the code easy to read, test and extend.

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/shubham-83/car-scroll-animation.git

# 2. Go into the project
cd car-scroll-animation

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## 🎛️ Customisation

| I want to… | Edit |
| --- | --- |
| Change card text, colours or position | `src/data/stats.js` |
| Change when a card appears | `at` value (0 → 1) in `stats.js` |
| Change scroll length or smoothness | `end` / `scrub` in `src/hooks/useCarScroll.js` |
| Swap the car | Replace `src/img/car.png` (top-down, facing right, transparent) |
| Change the headline | `src/components/CarScrollSection.jsx` |

## 📚 What I Learned

- Building scroll-linked animations with GSAP `ScrollTrigger` and scrubbed timelines
- Integrating GSAP with React safely using refs, `useLayoutEffect` and `gsap.context()`
- Structuring a React project with reusable components, custom hooks and a data layer
- Making animation values responsive with function-based tweens and `invalidateOnRefresh`

## 🔮 Future Improvements

- Smooth scrolling with Lenis
- Reduced-motion support via `prefers-reduced-motion`
- Additional scroll sections and page transitions

## 👤 Author

Shubham Kumar, B.Tech CSE student 

- 💼 [LinkedIn](https://linkedin.com/in/shubham-kumar-31354836b)
- 🐙 [GitHub](https://github.com/shubhamk-83)
- ✉️ shubhamrajput5641@gmail.com
