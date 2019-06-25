import React from "react"

const Dot = ({ position }) => (
  <div
    css={{
      width: 40,
      height: 40,
      left: `calc(${position}% - 20px)`,
      top: -10,
      position: "absolute",
      background: "#e46361",
      opacity: 1,
      cursor: "pointer",
      borderRadius: "50%",
    }}
  />
)

export default Dot
