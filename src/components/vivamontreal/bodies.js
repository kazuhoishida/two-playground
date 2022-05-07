import * as Matter from "matter-js"
import TextureA from "../../image/viva/shape_A.png"
import TextureN from "../../image/viva/shape_N.png"
import TextureI from "../../image/viva/shape_I.png"
import TextureC from "../../image/viva/shape_C.png"

const shape_A = Matter.Vertices.fromPath(
  "M0.294922 225.481C1.9123 164.214 16.5804 106.507 46.7284 52.8401C56.9755 34.5993 66.2375 15.9816 85.3868 4.82049C92.7081 0.553225 100.122 2.0535 107.606 1.06922C121.792 -0.796622 134.311 0.179382 146.043 9.21853C168.144 26.2468 186.344 47.1026 203.919 68.3969C231.076 101.303 251.021 138.515 264.47 178.97C272.421 202.887 278.05 227.379 272.476 252.921C265.123 286.618 219.72 294.263 195.757 276.826C186.387 270.008 177.86 262.24 171.578 252.697C164.017 241.209 154.642 236.49 141.011 239.054C127.391 241.614 121.291 250.32 117.136 262.768C109.308 286.219 98.4059 307.508 72.0513 315.667C38.9896 325.903 12.6198 309.842 5.97444 275.662C2.74396 259.046 0.0659669 242.481 0.294922 225.481Z"
)

export const body_A = Matter.Bodies.fromVertices(200, 400, shape_A, {
  restitution: 0.7,
  render: {
    sprite: {
      texture: TextureA,
      xScale: 1,
      yScale: 1,
    },
  },
})
export const body_N = Matter.Bodies.rectangle(600, 500, 275, 315, {
  restitution: 0.8,
  render: {
    sprite: {
      texture: TextureN,
      xScale: 1,
      yScale: 1,
    },
  },
})
export const body_I = Matter.Bodies.rectangle(800, 500, 180, 360, {
  restitution: 0.7,
  render: {
    sprite: {
      texture: TextureI,
      xScale: 1,
      yScale: 1,
    },
  },
})
export const body_C = Matter.Bodies.rectangle(1200, 600, 250, 284, {
  restitution: 0.8,
  render: {
    sprite: {
      texture: TextureC,
      xScale: 1,
      yScale: 1,
    },
  },
})
