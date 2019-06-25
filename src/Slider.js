import React from "react"
import Dot from "./Dot"

const Slider = ({ sliderValue, setSliderValue }) => {
  return (
    <div
      css={{
        width: "90%",
        position: "relative",
        height: 20,
        borderRadius: 200,
        background: "#02606f",
      }}
    >
      <Dot position={sliderValue} />
    </div>
  )
}

export default Slider
