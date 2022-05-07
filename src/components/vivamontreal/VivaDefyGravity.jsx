import { useRef, useEffect } from "react"
import * as Matter from "matter-js"
import useWindowSize from "../../hooks/useWindowSize"
import TextureA from "../../image/viva/shape_A.png"
import { shape_A } from "./bodies"

export default function VivaDefyGravity() {
  const canvasRef = useRef(null)
  const WINDOW_SIZE = useWindowSize()

  useEffect(() => {
    // module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse

    // create an engine
    const engine = Engine.create(),
      world = engine.world

    // create renderer
    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: WINDOW_SIZE.width,
        height: WINDOW_SIZE.height,
        wireframes: false,
        showAngleIndicator: false,
        background: "transparent",
      },
    })

    // reverse gravity
    engine.gravity.y = -1

    // run the renderer
    Render.run(render)

    // create runner
    const runner = Runner.create()
    Runner.run(runner, engine)

    // add boundaries
    Composite.add(world, [
      Bodies.rectangle(WINDOW_SIZE.width / 2, 0, WINDOW_SIZE.width, 200, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(-50, WINDOW_SIZE.height / 2, 100, WINDOW_SIZE.height, { isStatic: true }),
      Bodies.rectangle(WINDOW_SIZE.width + 50, WINDOW_SIZE.height / 2, 100, WINDOW_SIZE.height, { isStatic: true }),
      Bodies.rectangle(WINDOW_SIZE.width / 2, WINDOW_SIZE.height + 50, WINDOW_SIZE.width, 100, { isStatic: true }),
    ])

    //add floating bodies
    const body_A = Bodies.fromVertices(100, WINDOW_SIZE.height / 2, shape_A, {
      restitution: 0.7,
      render: {
        sprite: {
          texture: TextureA,
          xScale: 1,
          yScale: 1,
        },
      },
    })
    Composite.add(world, [body_A])

    // add mouse control
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      })
    Composite.add(world, mouseConstraint)

    // keep the mouse in sync with rendering
    render.mouse = mouse

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: WINDOW_SIZE.width, y: WINDOW_SIZE.height },
    })
  }, [])
  return <div ref={canvasRef} />
}
