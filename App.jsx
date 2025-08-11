import React, { StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"
import { css, globalCss, keyframes } from "@pandacss/react"

const globalStyles = globalCss({
  "*, *::after, *::before": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    WebkitTapHighlightColor: "transparent",
  },
  body: {
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    background:
      "linear-gradient(90deg, #7debf2, #60a4ff)",
    "@media (max-width: 1111px)": {
      zoom: 0.3,
    },
  },
})

const show = keyframes({
  "0%": {
    transform: "translate(-50%, -50%) scale(0)",
  },
  "100%": {
    transform: "translate(-50%, -50%) scale(1)",
  },
})

const itemBase = css({
  background:
    "linear-gradient(90deg, #7debf2, #60a4ff)",
  boxShadow: "0 0 40px #0008",
  borderRadius: "50%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animationName: show,
  animationTimingFunction: "ease-in-out",
  animationFillMode: "both",
})

const itemVariants = {
  1: css({
    "--wh": "1750px",
  }),
  2: css({
    "--wh": "1500px",
  }),
  3: css({
    "--wh": "1250px",
  }),
  4: css({
    "--wh": "1000px",
  }),
  5: css({
    "--wh": "750px",
  }),
  6: css({
    "--wh": "500px",
  }),
  7: css({
    "--wh": "250px",
    display: "flex",
    flexWrap: "wrap",
    placeContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    animationName: show,
    animationTimingFunction: "ease-in-out",
    animationFillMode: "both",
    ".geometric": {
      position: "relative",
      width: "150px",
      height: "150px",
    },
  }),
}

function Item({ index, delay, children }) {
  const style = { "--d": delay, width: "var(--wh)", height: "var(--wh)" }
  return (
    <article
      className={css({
        ...itemBase(),
        ...itemVariants[index](),
        animationDelay: `calc(var(--d) * 0.3s)`,
        width: "var(--wh)",
        height: "var(--wh)",
      })}
      style={style}
    >
      {children}
    </article>
  )
}

export default function App() {
  useEffect(() => {
    globalStyles()
  }, [])

  return (
    <>
      <Item index={1} delay={-3} />
      <Item index={2} delay={-2} />
      <Item index={3} delay={-1} />
      <Item index={4} delay={0} />
      <Item index={5} delay={1} />
      <Item index={6} delay={2} />
      <Item index={7} delay={3}>
        <img src="assets/geometric.png" alt="geometric" className="geometric" />
      </Item>
    </>
  )
}

const rootDiv = document.createElement("div")
document.body.appendChild(rootDiv)

createRoot(rootDiv).render(
  <StrictMode>
    <App />
  </StrictMode>
)
